// Generates the typographic OG image and apple-touch-icon as PNGs.
// Uses satori for accurate typography (real Inter metrics via @fontsource) + sharp to rasterize.
// Run with: node scripts/generate-images.mjs
import satori from "satori";
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "..", "public");
const fontDir = resolve(__dirname, "..", "node_modules", "@fontsource", "inter", "files");

const COLORS = {
    bg: "#fafaf9",
    fg: "#1c1917",
    muted: "#57534e",
    accent: "#b45309",
};

const [interRegular, interSemiBold] = await Promise.all([
    readFile(resolve(fontDir, "inter-latin-400-normal.woff")),
    readFile(resolve(fontDir, "inter-latin-600-normal.woff")),
]);

const fonts = [
    { name: "Inter", data: interRegular, weight: 400, style: "normal" },
    { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
];

// Lightweight hyperscript so we don't need JSX in this .mjs file.
const h = (type, props = {}, ...children) => ({
    type,
    props: { ...props, children: children.length === 1 ? children[0] : children },
});

async function renderToPng(svg, width, height) {
    return sharp(Buffer.from(svg)).resize(width, height).png().toBuffer();
}

// --- OG image (1200x630) ---
// Satori requires explicit display: flex on every element with >1 child.
const ogTree = h(
    "div",
    {
        style: {
            width: "1200px",
            height: "630px",
            background: COLORS.bg,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px 80px 100px 80px",
            fontFamily: "Inter",
        },
    },
    h(
        "div",
        { style: { display: "flex", flexDirection: "column" } },
        h(
            "div",
            {
                style: {
                    display: "flex",
                    fontSize: "96px",
                    fontWeight: 600,
                    color: COLORS.fg,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                },
            },
            "Aslak Hellevik",
        ),
        h(
            "div",
            {
                style: {
                    display: "flex",
                    marginTop: "24px",
                    fontSize: "34px",
                    fontWeight: 400,
                    color: COLORS.muted,
                },
            },
            "Statistics · Philosophy",
        ),
    ),
    h(
        "div",
        {
            style: {
                display: "flex",
                flexDirection: "column",
            },
        },
        h(
            "div",
            {
                style: {
                    display: "flex",
                    fontSize: "22px",
                    fontWeight: 500,
                    color: COLORS.muted,
                    letterSpacing: "0.15em",
                },
            },
            "ASLAKHELLEVIK.NO",
        ),
        h("div", {
            style: {
                display: "flex",
                marginTop: "40px",
                width: "1040px",
                height: "8px",
                background: COLORS.accent,
            },
        }),
    ),
);

const ogSvg = await satori(ogTree, { width: 1200, height: 630, fonts });
await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(resolve(publicDir, "og-default.png"));
console.log("wrote public/og-default.png (1200x630)");

// --- Apple touch icon (180x180) ---
const appleTree = h(
    "div",
    {
        style: {
            width: "180px",
            height: "180px",
            background: COLORS.bg,
            borderRadius: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter",
        },
    },
    h(
        "div",
        {
            style: {
                fontSize: "96px",
                fontWeight: 600,
                color: COLORS.accent,
                letterSpacing: "-0.05em",
            },
        },
        "AH",
    ),
);

const appleSvg = await satori(appleTree, { width: 180, height: 180, fonts });
await sharp(Buffer.from(appleSvg))
    .png()
    .toFile(resolve(publicDir, "apple-touch-icon.png"));
console.log("wrote public/apple-touch-icon.png (180x180)");

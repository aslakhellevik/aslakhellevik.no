// Generates the default Open Graph image, Apple touch icon, and favicon fallback.
// Run with: node scripts/generate-images.mjs
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "..", "public");

const COLORS = {
    bg: "#fafaf9",
    fg: "#1c1917",
    muted: "#57534e",
    accent: "#b45309",
    border: "#a8a29e",
};

const starPolygons = [
    "0,0 10,0 13.09,9.51 3.09,9.51",
    "0,0 3.09,9.51 -5,15.39 -8.09,5.88",
    "0,0 -8.09,5.88 -16.18,0 -8.09,-5.88",
    "0,0 -8.09,-5.88 -5,-15.39 3.09,-9.51",
    "0,0 3.09,-9.51 13.09,-9.51 10,0",
];

function starMarkup(scale = 1) {
    return `
        <g transform="scale(${scale})">
            ${starPolygons
                .map(
                    (points) => `
                        <polygon
                            points="${points}"
                            fill="${COLORS.accent}"
                            fill-opacity="0.18"
                            stroke="${COLORS.accent}"
                            stroke-width="1.2"
                            stroke-linejoin="round"
                        />
                    `,
                )
                .join("")}
            <circle cx="0" cy="0" r="1.35" fill="${COLORS.accent}" />
        </g>
    `;
}

const contourLines = Array.from({ length: 30 }, (_, i) => {
    const y = 26 + i * 21;
    const amp = 10 + (i % 6) * 3;
    return `
        <path
            d="M-40 ${y + amp} C210 ${y - amp}, 470 ${y + amp * 1.2}, 760 ${y - amp * 0.7} S1090 ${y + amp}, 1240 ${y - amp * 0.35}"
            stroke="${COLORS.accent}"
            stroke-width="0.8"
            stroke-opacity="0.035"
            fill="none"
            stroke-linecap="round"
        />
    `;
}).join("");

const ogSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
        <rect width="1200" height="630" fill="${COLORS.bg}" />
        <rect width="1200" height="630" fill="${COLORS.accent}" opacity="0.018" />
        ${contourLines}
        <circle cx="168" cy="315" r="98" fill="${COLORS.accent}" opacity="0.045" />
        <g transform="translate(168 315)">${starMarkup(4.2)}</g>
        <rect x="316" y="192" width="1" height="246" rx="0.5" fill="${COLORS.border}" opacity="0.55" />
        <text x="370" y="295" font-family="Inter, Arial, sans-serif" font-size="64" font-weight="700" fill="${COLORS.fg}">
            Aslak Hellevik
        </text>
        <text x="374" y="355" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="400" fill="${COLORS.muted}">
            Statistics, modelling, applied AI, and philosophy.
        </text>
        <text x="374" y="402" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="500" letter-spacing="3" fill="${COLORS.accent}">
            ASLAKHELLEVIK.NO
        </text>
    </svg>
`;

const appleSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
        <rect width="180" height="180" rx="34" fill="${COLORS.bg}" />
        <rect width="180" height="180" rx="34" fill="${COLORS.accent}" opacity="0.035" />
        <g transform="translate(90 90)">${starMarkup(3.9)}</g>
    </svg>
`;

const faviconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="-20 -20 40 40">
        <rect x="-20" y="-20" width="40" height="40" rx="8" fill="${COLORS.bg}" />
        <g>${starMarkup(1)}</g>
    </svg>
`;

async function makeIcoFromPngs(entries) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0);
    header.writeUInt16LE(1, 2);
    header.writeUInt16LE(entries.length, 4);

    const directory = Buffer.alloc(entries.length * 16);
    let offset = header.length + directory.length;

    for (const [index, entry] of entries.entries()) {
        const base = index * 16;
        directory.writeUInt8(entry.size >= 256 ? 0 : entry.size, base);
        directory.writeUInt8(entry.size >= 256 ? 0 : entry.size, base + 1);
        directory.writeUInt8(0, base + 2);
        directory.writeUInt8(0, base + 3);
        directory.writeUInt16LE(1, base + 4);
        directory.writeUInt16LE(32, base + 6);
        directory.writeUInt32LE(entry.png.length, base + 8);
        directory.writeUInt32LE(offset, base + 12);
        offset += entry.png.length;
    }

    return Buffer.concat([header, directory, ...entries.map((entry) => entry.png)]);
}

await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(resolve(publicDir, "og-default.png"));
console.log("wrote public/og-default.png (1200x630)");

await sharp(Buffer.from(appleSvg))
    .png()
    .toFile(resolve(publicDir, "apple-touch-icon.png"));
console.log("wrote public/apple-touch-icon.png (180x180)");

const faviconEntries = await Promise.all(
    [16, 32, 48].map(async (size) => ({
        size,
        png: await sharp(Buffer.from(faviconSvg)).resize(size, size).png().toBuffer(),
    })),
);
await writeFile(resolve(publicDir, "favicon.ico"), await makeIcoFromPngs(faviconEntries));
console.log("wrote public/favicon.ico (16/32/48)");

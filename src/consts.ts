export const SITE = {
    name: "Aslak Hellevik",
    url: "https://aslakhellevik.no",
    description:
        "Personal site of Aslak Hellevik — statistician in practice, philosopher at heart.",
};

export const NAV_LINKS = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
    email: "ah@aslakhellevik.no",
    github: "https://github.com/aslakhellevik",
    goodreads: "https://www.goodreads.com/user/show/141430103-aslak-hellevik",
    linkedin: "https://www.linkedin.com/in/aslakhellevik/",
    substack: null as string | null,
};

export type WorkEntry = {
    company: string;
    role: string;
    period: string;
    url?: string;
};

export const WORK: WorkEntry[] = [
    {
        company: "Statistisk sentralbyrå (SSB)",
        role: "Student Intern",
        period: "Jun 2025 – Present",
    },
    {
        company: "Norsk Regnesentral",
        role: "Research Assistant",
        period: "Summer 2024",
    },
    {
        company: "Center for Computing in Science Education (UiO)",
        role: "Research Assistant",
        period: "Jun 2022 – Aug 2023",
    },
    {
        company: "MentorNorge AS",
        role: "Mentor",
        period: "Oct 2018 – Jan 2023",
    },
];

export type EducationEntry = {
    institution: string;
    degree: string;
    period: string;
};

export const EDUCATION: EducationEntry[] = [
    {
        institution: "University of Oslo",
        degree: "Masters in Statistics",
        period: "2024 – 2026",
    },
    {
        institution: "University of Oslo",
        degree: "Bachelors in Mathematics with Informatics (Honours)",
        period: "2021 – 2024",
    },
    {
        institution: "Elvebakken VGS",
        degree: "Natural Sciences",
        period: "2018 – 2021",
    },
];

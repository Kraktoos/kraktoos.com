import type { CVSectionKey } from "./types";

export interface CVProfile {
  label: string;
  headline?: string;
  identity?: {
    pronouns?: string;
    location?: string;
    githubDisplay?: string;
    linkedinDisplay?: string;
    personalSiteDisplay?: string;
  };
  include?: {
    education?: string[];
    experience?: string[];
    projects?: string[];
    certifications?: string[];
    honors?: string[];
  };
  sectionOrder?: CVSectionKey[];
  sectionTitles?: Partial<Record<CVSectionKey, string>>;
  sortStrategy?: "date-desc" | "alphabetical";
  overrides?: Record<string, string[]>;
  skills?: {
    labels?: {
      frontendProduct?: string;
      backendInfrastructure?: string;
    };
    languages?: string[];
    frontendProduct?: string[];
    backendInfrastructure?: string[];
  };
}

const defaultProfile: CVProfile = {
  label: "Rodrigo Dias - CV",
  headline: "Software Engineer",
  sortStrategy: "date-desc",
};

const compactProfile: CVProfile = {
  label: "Rodrigo Dias - CV (Compact)",
  headline: "Software Engineer & Computer Engineering Student",
  identity: {
    pronouns: "",
    githubDisplay: "GitHub",
    linkedinDisplay: "LinkedIn",
    personalSiteDisplay: "rgo.pt",
  },
  include: {
    education: ["feup", "colegio-gaia"],
    experience: ["feup-tutor", "necho", "unis-easy"],
    projects: [
      "openpost",
      "montra",
      "shift-work-app",
      "the-actual-world",
      "youtube-channel",
    ],
    certifications: ["ef-set"],
    honors: ["codespring-2026", "tecla-2024", "tecla-2023"],
  },
  sectionOrder: ["education", "honors", "experience", "projects", "skills"],
  sectionTitles: {
    experience: "Selected Experience",
    projects: "Selected Projects",
  },
  overrides: {
    "education/feup": [
      "Coursework: Algorithms & Data Structures, Operating Systems, Databases, Computer Architecture",
    ],
    "education/colegio-gaia": [
      "Final grade: 19.9/20, top of class",
      "Self-taught programming during high school",
    ],
    "experience/unis-easy": [
      "Solo-built and deployed an AI study platform with course workspaces, notes, RAG chat, exercise solutions, and billing",
      "Grew @studywithrocco on TikTok to 1,000 followers and 500,000 views through study tips",
    ],
    "experience/feup-tutor": [
      "Tutored first- and second-year engineering students in mathematics, physics, and programming during weekly office hours",
    ],
    "projects/montra": [
      "Building fashion search by text, product link, and image across regional stores, with PostgreSQL, Meilisearch, and CLIP",
      "Built retailer ingestion, image processing, and pgvector similarity, with deterministic ranking and source-health monitoring",
    ],
    "projects/openpost": [
      "Built and grew an open-source content workspace to 500+ GitHub stars, using Go, SvelteKit, and SQLite",
      "Shipped multi-platform publishing, scheduling, analytics, inbox, media management, and automated content workflows",
      "Built browser-based image and video editors, plus API, SDK, CLI, MCP, and n8n automation with workspace-scoped access",
    ],
    "projects/shift-work-app": [
      "Built ENF., an offline-first Android app for nurses with schedules, pay calculations, holidays, reports, and cloud sync",
    ],
    "projects/the-actual-world": [
      "Built an Expo/React Native social app with maps, live chat, Stripe credits, push notifications, and PHP/MySQL admin tools",
    ],
    "projects/youtube-channel": [
      "Published 15+ Portuguese CS/math explainers for FEUP peers, reaching 8,000+ views across 10+ hours of content",
    ],
    "experience/necho": [
      "Built Cybersecure.pt features for Portuguese SMEs: assessments, live dashboards, PDF reports, payments, and multi-tenant access control with MFA/WebAuthn",
      "Used Next.js, TypeScript, DrizzleORM, MariaDB, Express.js, Socket.io, Stripe, and AWS S3",
    ],
    "honors/codespring-2026": [
      "3rd place, CodeSpring 2026 at ISEP: built Ark, an offline survival app with on-device AI, in 46 hours",
    ],
  },
  skills: {
    labels: {
      frontendProduct: "Product/Frontend",
      backendInfrastructure: "Backend/Infra",
    },
    languages: [
      "TypeScript",
      "Python",
      "SQL",
      "Go",
      "C/C++",
      "Java",
      "PHP",
      "Bash",
    ],
    frontendProduct: [
      "SvelteKit",
      "Next.js",
      "React",
      "React Native",
      "Astro",
      "Tailwind CSS",
    ],
    backendInfrastructure: [
      "Linux",
      "NixOS",
      "Docker/Podman",
      "Cloudflare",
      "PostgreSQL",
      "SQLite",
      "CI/CD",
    ],
  },
};

export const cvProfiles = {
  default: defaultProfile,
  compact: compactProfile,
} as const;

export type CVProfileSlug = keyof typeof cvProfiles;

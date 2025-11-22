export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Data Integrity Sentinel",
    year: 2025,
    description: "High-performance system to verify data integrity",
    url: "/blog/v2-data-integrity-sentinel",
  },
  {
    title: "Resumatic",
    year: 2025,
    description: "Create high-quality, pixel-perfect resumes, every single time, even across content updates",
    url: "/blog/v2-resumatic",
  },
  {
    title: "Vega AI",
    year: 2025,
    description: "AI powered Automation Platform",
    url: "/blog/v2-vega-ai",
  },
  {
    title: "Compound Interest Model",
    year: 2025,
    description: "Predict compound interest with high accuracy and speed",
    url: "/blog/v2-ci-model",
  },
  {
    title: "Automated Backup to S3",
    year: 2025,
    description: "Powerful durable cost-effective hassle-free backups",
    url: "/blog/v2-s3-backup",
  },
];

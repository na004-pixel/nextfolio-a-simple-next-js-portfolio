export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Vega AI",
    year: 2024,
    description: "AI powered Automation Platform",
    url: "/blog/vega-overview",
  },
  {
    title: "Compound Interest Model",
    year: 2023,
    description: "Predict compound interest with high accuracy and speed",
    url: "/blog/CI-model",
  },
];

export interface Project {
  title: string;
  client: string;
  duration: string;
  date: string;
  tech: string[];
  description: string;
  outcomes: string[];
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Pharma Workflow Automation",
    client: "Pharmaceutical operations",
    duration: "20 weeks",
    date: "2024-12-01",
    tech: ["Custom Algorithms", "Python", "Apache Kafka", "Cloud Platforms", "Automation Scripts"],
    description: "Built an internal platform to connect compliance checks, manufacturing workflows, research inputs, and reporting pipelines for a pharmaceutical company.",
    outcomes: [
      "Automated recurring compliance checks",
      "Reduced manual handoffs between research, operations, and reporting",
      "Created a single workflow across previously separate systems",
      "Improved turnaround on internal data-processing tasks"
    ],
    tags: ["Pharma", "Workflow Automation", "Compliance", "Data Pipelines"],
    featured: true
  },
  {
    title: "Vision Algorithms",
    client: "Industrial inspection system",
    duration: "12 weeks",
    date: "2024-10-20", 
    tech: ["Custom Algorithms", "C++", "CUDA", "TensorRT"],
    description: "Designed and deployed computer-vision algorithms for industrial inspection, with a strong focus on speed, compact models, and edge deployment.",
    outcomes: [
      "Lower latency than the initial baseline pipeline",
      "Smaller deployment footprint on target devices",
      "Shipped across multiple edge environments"
    ],
    tags: ["Algorithms", "Computer Vision", "Edge Deployment"],
    featured: true
  },
  {
    title: "Secure Email Processing on AWS",
    client: "Secure communications platform",
    duration: "12 weeks",
    date: "2024-11-02",
    tech: ["AWS SNS/SQS", "Lambda", "DynamoDB", "Blockchain", "SageMaker", "Kubernetes"],
    description: "Designed an event-driven pipeline for receiving, decrypting, sanitizing, classifying, and storing email data across AWS services and a proprietary blockchain layer.",
    outcomes: [
      "Separated ingestion, parsing, and storage into recoverable stages",
      "Added automated spam and phishing classification",
      "Preserved an auditable record of sanitized email events",
      "Used serverless components where bursty traffic made them practical"
    ],
    tags: ["AWS", "Email Security", "Event-Driven Systems", "ML"],
    featured: true
  },
  {
    title: "Data Pipeline Overhaul",
    client: "Multi-country operations",
    duration: "18 weeks",
    date: "2024-11-28",
    tech: ["Python", "ETL", "Data Modeling", "Automation", "Operational Analytics"],
    description: "Reworked a brittle data pipeline that depended on manual scripts and inconsistent regional formats, turning it into a maintained ingestion and reconciliation flow.",
    outcomes: [
      "Reduced manual reconciliation work across teams",
      "Made multi-source reporting available on a predictable schedule",
      "Improved visibility into duplicated and inconsistent data",
      "Created a path for regional format differences without blocking the whole pipeline"
    ],
    tags: ["Data Pipelines", "Operations", "Automation", "Reporting"],
    featured: true
  }
];

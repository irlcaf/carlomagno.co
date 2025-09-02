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
    title: "Pharma Digital Transformation",
    client: "Pharmaceutical Manufacturer",
    duration: "20 weeks",
    date: "2024-12-01",
    tech: ["Custom Algorithms", "Python", "Apache Kafka", "Cloud Platforms", "Automation Scripts"],
    description: "Led bespoke digital transformation for non-tech pharma firm: decomposed regulatory compliance, manufacturing workflows, R&D processes, and data pipelines into atomic elements; crafted custom platform for seamless integration and automation from first principles.",
    outcomes: [
      "Enhanced compliance accuracy via automated regulatory checks",
      "Accelerated R&D cycles through optimized data flows",
      "Unified disparate systems, reducing silos and enabling real-time insights",
      "High-performance pipelines with low-latency processing"
    ],
    tags: ["Digital Transformation", "Pharma Compliance", "Workflow Automation", "R&D Optimization", "Data Integration"],
    featured: true
  },
  {
    title: "Vision Algorithms",
    client: "Industrial Client",
    duration: "12 weeks",
    date: "2024-10-20", 
    tech: ["Custom Algorithms", "C++", "CUDA", "TensorRT"],
    description: "Developed custom vision algorithms that significantly outperformed standard approaches for industrial applications",
    outcomes: [
      "3x faster processing than standard implementations",
      "Reduced model size while maintaining accuracy",
      "Deployed across multiple edge platforms"
    ],
    tags: ["Algorithms", "Computer Vision", "Performance"],
    featured: true
  },
  {
    title: "Architecting an Email Solution with AWS Services and Blockchain",
    client: "Enterprise Client",
    duration: "12 weeks",
    date: "2024-11-02",
    tech: ["AWS SNS/SQS", "Lambda", "DynamoDB", "Blockchain", "SageMaker", "Kubernetes"],
    description: "Designed a secure email processing system integrating AWS services with proprietary blockchain for data integrity and ML-powered threat detection",
    outcomes: [
      "Tamper-proof email records via blockchain integration",
      "Automated threat detection with ML classification (spam, phishing)",
      "Serverless architecture with auto-scaling capabilities",
      "Privacy-compliant data sanitization and encryption"
    ],
    tags: ["AWS", "Blockchain", "Email Security", "ML"],
    featured: true
  },
  {
    title: "Vulnerability Research: Zero Day Engineering Course",
    client: "Professional Development",
    duration: "Intensive Training",
    date: "2024-08-11",
    tech: ["Vulnerability Research", "Abstract Modeling", "Cognitive Enhancement", "Security Frameworks"],
    description: "Completed intensive training with Alisa, mastering complex vulnerability research concepts and establishing advanced analytical frameworks",
    outcomes: [
      "Developed proper mindset for vulnerability research",
      "Mastered abstract models and security frameworks",
      "Enhanced cognitive skills for complex problem solving",
      "Structured self-study roadmap with feedback loops"
    ],
    tags: ["Security Research", "Training", "Vulnerability Analysis"],
    featured: true
  }
];
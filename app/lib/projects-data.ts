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
    title: "Factory Vision System",
    client: "Manufacturing Facility",
    duration: "16 weeks",
    date: "2024-12-15",
    tech: ["YOLO", "Python", "Edge Computing", "Multi-camera Arrays"],
    description: "Built a computer vision system that dramatically improved defect detection using synchronized multi-camera arrays",
    outcomes: [
      "Improved defect detection from manual inspection baseline",
      "Real-time processing with minimal latency",
      "Significant cost savings from reduced returns"
    ],
    tags: ["Computer Vision", "Manufacturing", "Quality Control"],
    featured: true
  },
  {
    title: "Data Pipeline Overhaul",
    client: "Enterprise Corporation",
    duration: "16 weeks",
    date: "2024-11-28",
    tech: ["Apache Kafka", "Flink", "Python", "Cloud Architecture"],
    description: "Unified dozens of data sources across multiple countries into a single pipeline, dramatically reducing data delays",
    outcomes: [
      "Data delays reduced from hours to minutes",
      "Near elimination of duplicate data",
      "Discovered significant revenue leakage through unified view"
    ],
    tags: ["Data Engineering", "ETL", "Enterprise"],
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
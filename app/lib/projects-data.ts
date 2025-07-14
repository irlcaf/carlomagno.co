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
    title: "Secure IoT Platform for Energy Sector",
    client: "Regional Energy Grid Operator",
    duration: "16 weeks",
    date: "2024-09-15",
    tech: ["Rust", "Apache Kafka", "Time Series DB", "Kubernetes"],
    description: "Implemented real-time anomaly detection system for 10,000+ IoT sensors across power grid infrastructure",
    outcomes: [
      "40% reduction in unplanned outages",
      "Sub-second threat detection",
      "Predictive maintenance with 95% accuracy"
    ],
    tags: ["Energy", "IoT", "Real-time Analytics"]
  },
  {
    title: "Quantum-Resistant Telecom Infrastructure",
    client: "Major LATAM Telecom Provider",
    duration: "12 weeks",
    date: "2024-08-10",
    tech: ["Post-Quantum Crypto", "C++", "FPGA", "QKD"],
    description: "Deployed hybrid classical-quantum encryption across core network infrastructure",
    outcomes: [
      "First quantum-safe network in region",
      "Zero performance degradation",
      "10+ year security horizon"
    ],
    tags: ["Telecom", "Quantum Security", "Cryptography"]
  },
  {
    title: "AI Ethics Platform for Government Services",
    client: "National Government Agency",
    duration: "16 weeks",
    date: "2024-07-05",
    tech: ["Python", "TensorFlow", "Explainable AI", "Blockchain"],
    description: "Built bias detection and mitigation system for AI-driven citizen services",
    outcomes: [
      "Reduced algorithmic bias to <3%",
      "Full audit trail for decisions",
      "90% citizen satisfaction"
    ],
    tags: ["Government", "AI Ethics", "Public Services"]
  }
];
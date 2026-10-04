export const projectsData = [
  {
    id: "financial-crime-detection",
    title: "Financial Crime Detection",
    category: "Full Stack",
    tagline: "Graph-based fraud ring & money-mule detection system",
    description: "A full-stack system designed to analyze transaction networks and identify suspicious money-muling patterns and potential fraud rings.",
    featured: true,
    technologies: ["React", "Vite", "Tailwind CSS", "FastAPI", "Python", "NetworkX", "Pandas"],
    githubUrl: "https://github.com/orpheusdark/rift-26/",
    liveUrl: "https://rift-26-frontend.onrender.com/",
    problem: "Detecting money muling rings and illicit syndicates across high-volume transaction networks is notoriously difficult using simple relational filters, as bad actors distribute funds through multi-hop cycles and dormant intermediary accounts.",
    solution: "Built a full-stack graph analytics system utilizing NetworkX and Pandas behind FastAPI with a responsive React frontend. It detects circular transactions, abnormal velocity hops, and clusters of high-risk mule nodes, computing comprehensive risk scores.",
    features: [
      "Multi-hop transaction network analysis",
      "Suspicious account & anomaly detection",
      "Fraud ring & circular routing identification",
      "Interactive graph network visualization",
      "Risk scoring algorithm based on graph centrality",
      "CSV transaction dataset ingestion & processing"
    ],
    challenges: "Handling graph traversal performance for cyclic paths without bottlenecking the API response time, and rendering clean, digestible network topologies on modern web clients.",
    learnings: "Deepened practical graph theory application (cycles, degree centrality), decoupled FastAPI backend architecture, and asynchronous state synchronization in React.",
    previewType: "graph"
  },
  {
    id: "traffic-ops",
    title: "Traffic-OPS",
    category: "AI",
    tagline: "Adaptive traffic signal management & simulation dashboard",
    description: "A smart traffic signal management dashboard designed to analyze simulated traffic data and dynamically manage signal timing.",
    featured: true,
    technologies: ["JavaScript", "Web Dashboard", "Simulation Algorithms", "CSS3", "Data Modeling"],
    githubUrl: "https://github.com/nyx73",
    liveUrl: null,
    problem: "Static, fixed-timer traffic lights fail to respond to real-time density spikes, leading to excessive intersection congestion, idling fuel waste, and emergency route delays.",
    solution: "Engineered an interactive simulation dashboard prototype that models lane-wise vehicle queues and evaluates adaptive signal allocation algorithms, dynamically adjusting green-light duration according to live simulated density.",
    features: [
      "Lane-wise traffic density analysis",
      "Real-time simulated congestion detection",
      "Adaptive signal timing algorithm",
      "Interactive traffic operations dashboard",
      "Violation monitoring simulation",
      "Challan management interface",
      "Historical traffic flow charts & trends"
    ],
    challenges: "Developing a dynamic scheduling logic that allocates optimal green-light cycles to high-density corridors while ensuring low-traffic lanes avoid starvation.",
    learnings: "Simulated queue architectures, algorithmic state machines in frontend dashboards, and building factual engineering prototypes.",
    previewType: "traffic"
  },
  {
    id: "shopigo",
    title: "Shopigo",
    category: "Web",
    tagline: "Modern component-driven e-commerce experience",
    description: "A modern frontend e-commerce website focused on creating a clean and responsive online shopping experience.",
    featured: true,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "State Management"],
    githubUrl: "https://github.com/nyx73/Frontend-Battle-2025",
    liveUrl: "https://nyx73.github.io/Frontend-Battle-2025/",
    problem: "Many student e-commerce templates suffer from clunky navigation, inconsistent mobile viewport rendering, and poor user feedback during product discovery.",
    solution: "Designed and built an intuitive, lightweight e-commerce storefront with streamlined product browsing, interactive cart/wishlist management, and snappy client interactions developed under competition constraints.",
    features: [
      "Comprehensive product catalog browsing",
      "Interactive shopping cart with live total calculations",
      "Wishlist toggle state management",
      "Mobile-first responsive navigation bar",
      "Fast, lightweight component styling with modern CSS",
      "Intuitive product discovery layout"
    ],
    challenges: "Crafting fluid transitions and maintaining consistent cart state across browsing views without heavy external libraries.",
    learnings: "Mastered responsive layout techniques, competitive frontend prototyping speed, and polished micro-interactions.",
    previewType: "ecommerce"
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    category: "Web",
    tagline: "Multi-user expense management & budgeting platform",
    description: "A multi-user expense tracking application designed to help families manage expenses, budgets, and spending patterns.",
    featured: true,
    technologies: ["React", "JavaScript", "Analytics", "Tailwind CSS", "Local Storage"],
    githubUrl: "https://github.com/nyx73",
    liveUrl: null,
    problem: "Families and shared groups struggle to track collective spending across disparate accounts, leading to budget overshoots and lack of category visibility.",
    solution: "Constructed a multi-user expense tracking application allowing contributors to log expenditures, categorize outflows, monitor household budget ceilings, and visualize spending breakdowns.",
    features: [
      "Multi-user expense tracking support",
      "Custom monthly budget threshold settings",
      "Add, update, and delete expense records",
      "Interactive category breakdown visualizations",
      "Expense filtering by user, category, and date",
      "Spending pattern analysis and alerts"
    ],
    challenges: "Building clear analytical charts and ensuring quick data input flows that don't feel tedious on mobile screens.",
    learnings: "Hierarchical data modeling, aggregate computational state, and designing clean financial data visualizations.",
    previewType: "expense"
  }
];

export const projectCategories = ["All", "Web", "AI", "Full Stack"];

export interface Thesis {
  id: string;
  title: string;
  authors: string[];
  department: string;
  year: number;
  adviser: string;
  abstract: string;
  keywords: string[];
  relevanceScore: number;
}

export const departments = [
  'Information Technology',
  'Education'
] as const;

export const mockTheses: Thesis[] = [
  {
    "id": "thesis-001",
    "title": "Enhancing Fraud Detection in Imbalanced Datasets: A Comparative Study of Machine Learning and Deep Learning Algorithms with SMOTE Preprocessing",
    "authors": [
      "Walaa salah salem",
      "ibrahim el- hasnony",
      "Ahmed Abu Elfetouh",
      "Amira Rezk"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Walaa salah salem, ibrahim el- hasnony, Ahmed Abu Elfetouh and Amira Rezk, explores the development and application of advanced systems in 'Enhancing Fraud Detection in Imbalanced Datasets: A Comparative Study of Machine Learning and Deep Learning Algorithms with SMOTE Preprocessing'. Published in 'Mansoura Journal for Computer and Information Sciences' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "enhancing",
      "fraud",
      "detection",
      "imbalanced",
      "datasets",
      "comparative",
      "study"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-002",
    "title": "Improving the Quality of Learning Through the Integration of Literacy and Numeracy",
    "authors": [
      "Tiur Malasari Siregar",
      "Muliawan Firdaus",
      "Trisnawati Hutagalung",
      "Irham Ramadhani",
      "Suci Frisnoiry"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Tiur Malasari Siregar, Muliawan Firdaus, Trisnawati Hutagalung, Irham Ramadhani and Suci Frisnoiry, explores the development and application of advanced systems in 'Improving the Quality of Learning Through the Integration of Literacy and Numeracy'. Published in 'Jurnal Penelitian Pendidikan IPA' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "improving",
      "quality",
      "learning",
      "integration",
      "literacy",
      "numeracy"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-003",
    "title": "Evaluating Data Trust in Blockchain-Based IoT Systems Using Machine Learning Techniques",
    "authors": [
      "Rashmi Ratnayake",
      "Madhusanka Liyanage",
      "Liam Murphy"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Rashmi Ratnayake, Madhusanka Liyanage and Liam Murphy, explores the development and application of advanced systems in 'Evaluating Data Trust in Blockchain-Based IoT Systems Using Machine Learning Techniques'. Published in '2025 IEEE 22nd Consumer Communications &amp;amp; Networking Conference (CCNC)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "evaluating",
      "trust",
      "blockchain-based",
      "systems",
      "machine",
      "learning",
      "techniques"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-004",
    "title": "Dynamic label correlations and dual-semantic enhancement learning for cross-modal retrieval",
    "authors": [
      "Shaohua Teng",
      "Ziye Fang",
      "Zefeng Zheng",
      "Naiqi Wu",
      "Wei Zhang",
      "Luyao Teng"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Shaohua Teng, Ziye Fang, Zefeng Zheng, Naiqi Wu, Wei Zhang and Luyao Teng, explores the development and application of advanced systems in 'Dynamic label correlations and dual-semantic enhancement learning for cross-modal retrieval'. Published in 'Neurocomputing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "dynamic",
      "label",
      "correlations",
      "dual-semantic",
      "enhancement",
      "learning",
      "cross-modal"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-005",
    "title": "ALDEN: Dual-Level Disentanglement with Meta-learning for Generalizable Audio Deepfake Detection",
    "authors": [
      "Yuxiong Xu",
      "Bin Li",
      "Weixiang Li",
      "Sara Mandelli",
      "Viola Negroni",
      "Sheng Li"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Yuxiong Xu, Bin Li, Weixiang Li, Sara Mandelli, Viola Negroni and Sheng Li, explores the development and application of advanced systems in 'ALDEN: Dual-Level Disentanglement with Meta-learning for Generalizable Audio Deepfake Detection'. Published in 'Proceedings of the 33rd ACM International Conference on Multimedia' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "alden",
      "dual-level",
      "disentanglement",
      "meta-learning",
      "generalizable",
      "audio",
      "deepfake"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-006",
    "title": "Teaching and learning resources for preparing schoolchildren for the Artificial Intelligence Olympiad",
    "authors": [
      "N. N. Samylkina",
      "I. A. Kalinin"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by N. N. Samylkina and I. A. Kalinin, explores the development and application of advanced systems in 'Teaching and learning resources for preparing schoolchildren for the Artificial Intelligence Olympiad'. Published in 'Informatics in school' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "teaching",
      "learning",
      "resources",
      "preparing",
      "schoolchildren",
      "artificial",
      "intelligence"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-007",
    "title": "Using machine learning to investigate user behaviour of Tyne and Wear Metro",
    "authors": [
      "Huseyin Ayan",
      "Muhammed Cavus",
      "Yusuf Furkan Ugurluoglu",
      "Cafer Deniz",
      "Dilum Dissanayake",
      "Margaret Bell"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Huseyin Ayan, Muhammed Cavus, Yusuf Furkan Ugurluoglu, Cafer Deniz, Dilum Dissanayake and Margaret Bell, explores the development and application of advanced systems in 'Using machine learning to investigate user behaviour of Tyne and Wear Metro'. Published in 'International Journal of Transportation Science and Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "investigate",
      "behaviour",
      "metro"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-008",
    "title": "Balancing Graph Embedding Smoothness in Self-supervised Learning via Information-Theoretic Decomposition",
    "authors": [
      "Heesoo Jung",
      "Hogun Park"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Heesoo Jung and Hogun Park, explores the development and application of advanced systems in 'Balancing Graph Embedding Smoothness in Self-supervised Learning via Information-Theoretic Decomposition'. Published in 'Proceedings of the ACM on Web Conference 2025' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "balancing",
      "graph",
      "embedding",
      "smoothness",
      "self-supervised",
      "learning",
      "information-theoretic"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-009",
    "title": "Bridging the Experience from Class to the Sustainability Workspace Through Situated Learning",
    "authors": [
      "",
      "Lean Hong Tan",
      "Samuel Nyarko"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by , Lean Hong Tan and Samuel Nyarko, explores the development and application of advanced systems in 'Bridging the Experience from Class to the Sustainability Workspace Through Situated Learning'. Published in 'Geological Society of America Abstracts with Programs' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "bridging",
      "experience",
      "class",
      "sustainability",
      "workspace",
      "situated",
      "learning"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-010",
    "title": "Action Selection Learning for Weakly Labeled Multi-modal Multi-view Action Recognition",
    "authors": [
      "Trung Thanh Nguyen",
      "Yasutomo Kawanishi",
      "Vijay John",
      "Takahiro Komamizu",
      "Ichiro Ide"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Trung Thanh Nguyen, Yasutomo Kawanishi, Vijay John, Takahiro Komamizu and Ichiro Ide, explores the development and application of advanced systems in 'Action Selection Learning for Weakly Labeled Multi-modal Multi-view Action Recognition'. Published in 'ACM Transactions on Multimedia Computing, Communications, and Applications' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "action",
      "selection",
      "learning",
      "weakly",
      "labeled",
      "multi-modal",
      "multi-view"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-011",
    "title": "Learning Heuristics to Solve Dynamic Vehicle Routing Problems Using Large Language Models",
    "authors": [
      "Andrew Wang",
      "Xiaoyan Li",
      "Yunli Wang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Andrew Wang, Xiaoyan Li and Yunli Wang, explores the development and application of advanced systems in 'Learning Heuristics to Solve Dynamic Vehicle Routing Problems Using Large Language Models'. Published in 'Proceedings of the 33rd ACM International Conference on Advances in Geographic Information Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "learning",
      "heuristics",
      "solve",
      "dynamic",
      "vehicle",
      "routing",
      "problems"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-012",
    "title": "Predicting Offshore Oil Slick Formation: A Machine Learning Approach Integrating Meteoceanographic Variables",
    "authors": [
      "Simone C. Streitenberger",
      "Estev\u00c3\u00a3o L. Rom\u00c3\u00a3o",
      "Fabr\u00c3\u00adcio A. Almeida",
      "Antonio C. Zambroni de Souza",
      "Aloisio E. Orlando",
      "Pedro P. Balestrassi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Simone C. Streitenberger, Estev\u00c3\u00a3o L. Rom\u00c3\u00a3o, Fabr\u00c3\u00adcio A. Almeida, Antonio C. Zambroni de Souza, Aloisio E. Orlando and Pedro P. Balestrassi, explores the development and application of advanced systems in 'Predicting Offshore Oil Slick Formation: A Machine Learning Approach Integrating Meteoceanographic Variables'. Published in 'Water' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "predicting",
      "offshore",
      "slick",
      "formation",
      "machine",
      "learning",
      "approach"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-013",
    "title": "Space Target Image Sequence Prediction Based on Multilevel Motion Memory Intelligent Learning",
    "authors": [
      "Yu Fan",
      "Yikang Yang",
      "Yu Jiang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Yu Fan, Yikang Yang and Yu Jiang, explores the development and application of advanced systems in 'Space Target Image Sequence Prediction Based on Multilevel Motion Memory Intelligent Learning'. Published in 'IEEE Transactions on Geoscience and Remote Sensing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "space",
      "target",
      "image",
      "sequence",
      "prediction",
      "multilevel",
      "motion"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-014",
    "title": "Application of an Improved Double Q-Learning Algorithm in Ground Mobile Robots",
    "authors": [
      "Jinchao Zhao",
      "Ya Zhang",
      "Nan Wu",
      "Xinye Han",
      "Luoyin Ning",
      "Xiaowei Ren",
      "Lingling Fang",
      "Jiaxuan Wang",
      "Xu Ren",
      "Yu Zhang",
      "Jinghao Feng"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Jinchao Zhao, Ya Zhang, Nan Wu, Xinye Han, Luoyin Ning, Xiaowei Ren, Lingling Fang, Jiaxuan Wang, Xu Ren, Yu Zhang and Jinghao Feng, explores the development and application of advanced systems in 'Application of an Improved Double Q-Learning Algorithm in Ground Mobile Robots'. Published in 'Symmetry' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "application",
      "improved",
      "double",
      "q-learning",
      "algorithm",
      "ground",
      "mobile"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-015",
    "title": "Automatic Speech Data Labeling System Based on Speech Recognition and Machine Learning",
    "authors": [
      "",
      "Jin-Sung Choi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by  and Jin-Sung Choi, explores the development and application of advanced systems in 'Automatic Speech Data Labeling System Based on Speech Recognition and Machine Learning'. Published in 'The Journal of Innovation Industry Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "automatic",
      "speech",
      "labeling",
      "system",
      "recognition",
      "machine",
      "learning"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-016",
    "title": "Aircraft takeoff speed prediction with machine learning: parameter analysis and model development",
    "authors": [
      "N.N. Karaburun",
      "S. Ar\u00c4\u00b1k Hatipo\u00c4\u0178lu",
      "M. Konar"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by N.N. Karaburun, S. Ar\u00c4\u00b1k Hatipo\u00c4\u0178lu and M. Konar, explores the development and application of advanced systems in 'Aircraft takeoff speed prediction with machine learning: parameter analysis and model development'. Published in 'The Aeronautical Journal' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "aircraft",
      "takeoff",
      "speed",
      "prediction",
      "machine",
      "learning",
      "parameter"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-017",
    "title": "Unlocking Dreams and Dreamless Sleep: Machine Learning Classification With Optimal EEG Channels",
    "authors": [
      "Luis Alfredo Moctezuma",
      "Marta Molinas",
      "Takashi Abe"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Luis Alfredo Moctezuma, Marta Molinas and Takashi Abe, explores the development and application of advanced systems in 'Unlocking Dreams and Dreamless Sleep: Machine Learning Classification With Optimal EEG Channels'. Published in 'BioMed Research International' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "unlocking",
      "dreams",
      "dreamless",
      "sleep",
      "machine",
      "learning",
      "classification"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-018",
    "title": "Energy-Efficient Federated Edge Learning With Streaming Data: A Lyapunov Optimization Approach",
    "authors": [
      "Chung-Hsuan Hu",
      "Zheng Chen",
      "Erik G. Larsson"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Chung-Hsuan Hu, Zheng Chen and Erik G. Larsson, explores the development and application of advanced systems in 'Energy-Efficient Federated Edge Learning With Streaming Data: A Lyapunov Optimization Approach'. Published in 'IEEE Transactions on Communications' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "energy-efficient",
      "federated",
      "learning",
      "streaming",
      "lyapunov",
      "optimization",
      "approach"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-019",
    "title": "Wake vortex lidar measurement processing with large-eddy simulations and machine learning",
    "authors": [
      "Niklas Wartha",
      "Anton Stephan",
      "Frank Holzpfel"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Niklas Wartha, Anton Stephan and Frank Holzpfel, explores the development and application of advanced systems in 'Wake vortex lidar measurement processing with large-eddy simulations and machine learning'. Published in 'Optics Express' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "vortex",
      "lidar",
      "measurement",
      "processing",
      "large-eddy",
      "simulations",
      "machine"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-020",
    "title": "From Brain Signals to Diagnosis: A Joint Learning Approach for ADHD Detection",
    "authors": [
      "Devrajsinh Jhala",
      "Pranav Sirodaria",
      "Yogesh Kumar",
      "Poonam Bhargav"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Devrajsinh Jhala, Pranav Sirodaria, Yogesh Kumar and Poonam Bhargav, explores the development and application of advanced systems in 'From Brain Signals to Diagnosis: A Joint Learning Approach for ADHD Detection'. Published in '2025 IEEE 6th India Council International Subsections Conference (INDISCON)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "brain",
      "signals",
      "diagnosis",
      "joint",
      "learning",
      "approach",
      "detection"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-021",
    "title": "Efficient 4D fMRI ASD Classification using Spatial-Temporal-Omics-Based Learning Framework",
    "authors": [
      "Ziqiao Weng",
      "Weidong Cai",
      "Bo Zhou"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Ziqiao Weng, Weidong Cai and Bo Zhou, explores the development and application of advanced systems in 'Efficient 4D fMRI ASD Classification using Spatial-Temporal-Omics-Based Learning Framework'. Published in '2025 IEEE 22nd International Symposium on Biomedical Imaging (ISBI)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "efficient",
      "classification",
      "spatial-temporal-omics-based",
      "learning",
      "framework"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-022",
    "title": "Machine Learning in High-Energy Physics: Illustrative Applications in Theory and Experiment",
    "authors": [
      "Maggie Li",
      "Neil Pandya"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Maggie Li and Neil Pandya, explores the development and application of advanced systems in 'Machine Learning in High-Energy Physics: Illustrative Applications in Theory and Experiment'. Published in 'Journal of Applied Mathematics and Physics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "high-energy",
      "physics",
      "illustrative",
      "applications",
      "theory"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-023",
    "title": "Machine Learning Clustering of Water\u00e2\u20ac\u0090Water Interactions in the Cambridge Structural Database",
    "authors": [
      "Milan R. Milovanovi\u00c4\u2021",
      "Marina Andri\u00c4\u2021",
      "Jelena M. \u00c5\u00bdivkovi\u00c4\u2021"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Milan R. Milovanovi\u00c4\u2021, Marina Andri\u00c4\u2021 and Jelena M. \u00c5\u00bdivkovi\u00c4\u2021, explores the development and application of advanced systems in 'Machine Learning Clustering of Water\u00e2\u20ac\u0090Water Interactions in the Cambridge Structural Database'. Published in 'ChemPlusChem' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "clustering",
      "water\u00e2\u20ac\u0090water",
      "interactions",
      "cambridge",
      "structural"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-024",
    "title": "Evaluation of Privacy-Preserving Support Vector Machine (SVM) Learning Using Homomorphic Encryption",
    "authors": [
      "William J. Buchanan",
      "Hisham Ali"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by William J. Buchanan and Hisham Ali, explores the development and application of advanced systems in 'Evaluation of Privacy-Preserving Support Vector Machine (SVM) Learning Using Homomorphic Encryption'. Published in 'Cryptography' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "evaluation",
      "privacy-preserving",
      "support",
      "vector",
      "machine",
      "learning",
      "homomorphic"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-025",
    "title": "Toward customized model discrepancies in personalized federated learning on non-IID data",
    "authors": [
      "Fengrui Hao",
      "Taihang Zhi",
      "Tianlong Gu",
      "Xuguang Bao"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Fengrui Hao, Taihang Zhi, Tianlong Gu and Xuguang Bao, explores the development and application of advanced systems in 'Toward customized model discrepancies in personalized federated learning on non-IID data'. Published in 'Knowledge-Based Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "toward",
      "customized",
      "model",
      "discrepancies",
      "personalized",
      "federated",
      "learning"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-026",
    "title": "Optimizing Dredged Soil for Mangrove Restoration Using Machine Learning and Soil Amendments",
    "authors": [
      "He Bai",
      "Jiachen Zeng",
      "Yuchi Hao",
      "Yutuo Cheng"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by He Bai, Jiachen Zeng, Yuchi Hao and Yutuo Cheng, explores the development and application of advanced systems in 'Optimizing Dredged Soil for Mangrove Restoration Using Machine Learning and Soil Amendments'. Published in 'Journal of Sustainable Forestry' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "optimizing",
      "dredged",
      "mangrove",
      "restoration",
      "machine",
      "learning",
      "amendments"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-027",
    "title": "Advanced Machine Learning Methods for Churn Prediction and Classification in Telecom Sector",
    "authors": [
      "Sachin Singh",
      "Saurabh A. Pahune",
      "Pushpalika Chatterjee",
      "Rajesh Sura"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Sachin Singh, Saurabh A. Pahune, Pushpalika Chatterjee and Rajesh Sura, explores the development and application of advanced systems in 'Advanced Machine Learning Methods for Churn Prediction and Classification in Telecom Sector'. Published in '2025 IEEE 6th India Council International Subsections Conference (INDISCON)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "advanced",
      "machine",
      "learning",
      "methods",
      "churn",
      "prediction",
      "classification"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-028",
    "title": "Interpretable Machine Learning for Identifying Key Variables Influencing Gold Recovery and Grade",
    "authors": [
      "Sheila Devasahayam"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Sheila Devasahayam, explores the development and application of advanced systems in 'Interpretable Machine Learning for Identifying Key Variables Influencing Gold Recovery and Grade'. Published in 'Materials' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "interpretable",
      "machine",
      "learning",
      "identifying",
      "variables",
      "influencing",
      "recovery"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-029",
    "title": "Mitigating Catastrophic Forgetting in Online Continual Learning with Dual-Margin Contrastive Replay",
    "authors": [
      "Fan Lyu",
      "Gongbo Cheng",
      "Daofeng Liu",
      "Linglan Zhao",
      "Zhang Zhang",
      "Fuyuan Hu",
      "Liang Wang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Fan Lyu, Gongbo Cheng, Daofeng Liu, Linglan Zhao, Zhang Zhang, Fuyuan Hu and Liang Wang, explores the development and application of advanced systems in 'Mitigating Catastrophic Forgetting in Online Continual Learning with Dual-Margin Contrastive Replay'. Published in 'IEEE Transactions on Circuits and Systems for Video Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "mitigating",
      "catastrophic",
      "forgetting",
      "online",
      "continual",
      "learning",
      "dual-margin"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-030",
    "title": "The Correlation Between Conceptual Understanding Skills and Self-Regulated Learning in Mathematics",
    "authors": [
      "Puja Ananda",
      "Echa Salsabila",
      "Usman Aripin"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Puja Ananda, Echa Salsabila and Usman Aripin, explores the development and application of advanced systems in 'The Correlation Between Conceptual Understanding Skills and Self-Regulated Learning in Mathematics'. Published in '(JIML) JOURNAL OF INNOVATIVE MATHEMATICS LEARNING' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "correlation",
      "conceptual",
      "understanding",
      "skills",
      "self-regulated",
      "learning",
      "mathematics"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-031",
    "title": "RESEARCH on campus APP tourism intelligent report generation based on multimodal learning",
    "authors": [
      "Jinyang Shao",
      "Huazhen Xu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Jinyang Shao and Huazhen Xu, explores the development and application of advanced systems in 'RESEARCH on campus APP tourism intelligent report generation based on multimodal learning'. Published in 'Proceedings of the 2025 International Conference on AI-enabled Education' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "research",
      "campus",
      "tourism",
      "intelligent",
      "report",
      "generation",
      "multimodal"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-032",
    "title": "Machine learning surgery duration predictions compared to traditional methods: A systematic review",
    "authors": [
      "Richard T. Park",
      "Christopher H. Stucky",
      "Chandler H. Moser"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Richard T. Park, Christopher H. Stucky and Chandler H. Moser, explores the development and application of advanced systems in 'Machine learning surgery duration predictions compared to traditional methods: A systematic review'. Published in 'Perioperative Care and Operating Room Management' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "surgery",
      "duration",
      "predictions",
      "compared",
      "traditional"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-033",
    "title": "Mitigating Skin Pigmentation Bias in Pulse Oximetry through Personalized Machine Learning Models",
    "authors": [
      "Carter D. Ostrowski",
      "Hakan B. Karli",
      "Bige D. Unluturk"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Carter D. Ostrowski, Hakan B. Karli and Bige D. Unluturk, explores the development and application of advanced systems in 'Mitigating Skin Pigmentation Bias in Pulse Oximetry through Personalized Machine Learning Models'. Published in '2025 IEEE EMBS International Conference on Biomedical and Health Informatics (BHI)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "mitigating",
      "pigmentation",
      "pulse",
      "oximetry",
      "personalized",
      "machine",
      "learning"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-034",
    "title": "Paint by Inpaint: Learning to Add Image Objects by Removing Them First",
    "authors": [
      "Navve Wasserman",
      "Noam Rotstein",
      "Roy Ganz",
      "Ron Kimmel"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Navve Wasserman, Noam Rotstein, Roy Ganz and Ron Kimmel, explores the development and application of advanced systems in 'Paint by Inpaint: Learning to Add Image Objects by Removing Them First'. Published in '2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "paint",
      "inpaint",
      "learning",
      "image",
      "objects",
      "removing",
      "first"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-035",
    "title": "PREDIKSI PERGERAKAN HARGA SAHAM MENGGUNAKAN QUANTUM MACHINE LEARNING BERBASIS VARIATIONAL QUANTUM CIRCUITS",
    "authors": [
      "Safira Hasna Setiyani"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Safira Hasna Setiyani, explores the development and application of advanced systems in 'PREDIKSI PERGERAKAN HARGA SAHAM MENGGUNAKAN QUANTUM MACHINE LEARNING BERBASIS VARIATIONAL QUANTUM CIRCUITS'. Published in 'Jurnal Informatika dan Teknik Elektro Terapan' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "prediksi",
      "pergerakan",
      "harga",
      "saham",
      "menggunakan",
      "quantum",
      "machine"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-036",
    "title": "Distributed Intelligence-Based Binary Meta-Learning Microcrack Collaborative Detection for Solar Cells",
    "authors": [
      "Yucheng Zhang",
      "Xiangying Xie",
      "Biao Leng"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Yucheng Zhang, Xiangying Xie and Biao Leng, explores the development and application of advanced systems in 'Distributed Intelligence-Based Binary Meta-Learning Microcrack Collaborative Detection for Solar Cells'. Published in 'IEEE Transactions on Computational Social Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "distributed",
      "intelligence-based",
      "binary",
      "meta-learning",
      "microcrack",
      "collaborative",
      "detection"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-037",
    "title": "MLDM: a multi learning domain model for fault identification of centrifugal fan",
    "authors": [
      "Ruijun Wang",
      "Zhixia Fan",
      "Yuan Liu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Ruijun Wang, Zhixia Fan and Yuan Liu, explores the development and application of advanced systems in 'MLDM: a multi learning domain model for fault identification of centrifugal fan'. Published in 'Measurement Science and Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "multi",
      "learning",
      "domain",
      "model",
      "fault",
      "identification",
      "centrifugal"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-038",
    "title": "An Advanced Machine Learning Framework for Efficient Anomaly Detection in Network Traffic",
    "authors": [
      "Abdurrahman Usman",
      "Murjanatu Abubakar Sadiq"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Abdurrahman Usman and Murjanatu Abubakar Sadiq, explores the development and application of advanced systems in 'An Advanced Machine Learning Framework for Efficient Anomaly Detection in Network Traffic'. Published in 'International Journal of Scientific Research in Computer Science and Engineering' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "advanced",
      "machine",
      "learning",
      "framework",
      "efficient",
      "anomaly",
      "detection"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-039",
    "title": "A Neural Network Framework for Classifying Educational Content Aligned with Learning Outcomes",
    "authors": [
      "Adel Alkhalil"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Adel Alkhalil, explores the development and application of advanced systems in 'A Neural Network Framework for Classifying Educational Content Aligned with Learning Outcomes'. Published in 'Procedia Computer Science' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "neural",
      "network",
      "framework",
      "classifying",
      "educational",
      "content",
      "aligned"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-040",
    "title": "Fractional-Order Meta-Reinforcement Learning for Space Noncooperative Object Active Visual Tracking",
    "authors": [
      "ZhongLiang Yu",
      "XiaoJie Su",
      "GuangHui Sun"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by ZhongLiang Yu, XiaoJie Su and GuangHui Sun, explores the development and application of advanced systems in 'Fractional-Order Meta-Reinforcement Learning for Space Noncooperative Object Active Visual Tracking'. Published in 'IEEE Transactions on Aerospace and Electronic Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "fractional-order",
      "meta-reinforcement",
      "learning",
      "space",
      "noncooperative",
      "object",
      "active"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-041",
    "title": "A Simple Finite-Time Analysis of TD Learning With Linear Function Approximation",
    "authors": [
      "Aritra Mitra"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Aritra Mitra, explores the development and application of advanced systems in 'A Simple Finite-Time Analysis of TD Learning With Linear Function Approximation'. Published in 'IEEE Transactions on Automatic Control' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "simple",
      "finite-time",
      "analysis",
      "learning",
      "linear",
      "function",
      "approximation"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-042",
    "title": "Stabilization of Soil Using Fly Ash: A Laboratory and Machine Learning Approach",
    "authors": [
      "Sabikun Nahar Nilu",
      "Kamol Debnath Dip",
      "Shoma Ghosh"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Sabikun Nahar Nilu, Kamol Debnath Dip and Shoma Ghosh, explores the development and application of advanced systems in 'Stabilization of Soil Using Fly Ash: A Laboratory and Machine Learning Approach'. Published in 'Advances in Engineering Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "stabilization",
      "laboratory",
      "machine",
      "learning",
      "approach"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-043",
    "title": "DMFLN: A dynamic multi-scale focus learning framework for Alzheimer\u00e2\u20ac\u2122s disease classification",
    "authors": [
      "Jikai Wang",
      "Mingfeng Jiang",
      "Wei Zhang",
      "Yang Li",
      "Tao Tan",
      "Yaming Wang",
      "Tie-qiang Li"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Jikai Wang, Mingfeng Jiang, Wei Zhang, Yang Li, Tao Tan, Yaming Wang and Tie-qiang Li, explores the development and application of advanced systems in 'DMFLN: A dynamic multi-scale focus learning framework for Alzheimer\u00e2\u20ac\u2122s disease classification'. Published in 'Journal of Neuroscience Methods' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "dmfln",
      "dynamic",
      "multi-scale",
      "focus",
      "learning",
      "framework",
      "alzheimer\u00e2\u20ac\u2122s"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-044",
    "title": "Machine Learning in Structural Engineering: Physics-Informed Neural Networks for Beam Problems",
    "authors": [
      "Felipe Pereira dos Santos",
      "Lapo Gori"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Felipe Pereira dos Santos and Lapo Gori, explores the development and application of advanced systems in 'Machine Learning in Structural Engineering: Physics-Informed Neural Networks for Beam Problems'. Published in 'International Journal of Computational Methods' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "structural",
      "engineering",
      "physics-informed",
      "neural",
      "networks"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-045",
    "title": "Trends, Themes, and Innovations in Technology-Enhanced Learning: A Comprehensive Bibliometric Study",
    "authors": [
      "Xiu-Yi Wu",
      "Jia-Bin Chen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Xiu-Yi Wu and Jia-Bin Chen, explores the development and application of advanced systems in 'Trends, Themes, and Innovations in Technology-Enhanced Learning: A Comprehensive Bibliometric Study'. Published in 'Sage Open' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "trends",
      "themes",
      "innovations",
      "technology-enhanced",
      "learning",
      "comprehensive",
      "bibliometric"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-046",
    "title": "Eeg Microstates and Balance Parameters for Stroke Discrimination: A Machine Learning Approach",
    "authors": [
      "Eloise de Oliveira Lima",
      "Jos\u00c3\u00a9 Maur\u00c3\u00adcio Ramos de Souza Neto",
      "Felipe Leonardo Seixas Castro",
      "Let\u00c3\u00adcia Maria Silva",
      "Rebeca Andrade Laurentino",
      "Vit\u00c3\u00b3ria Ferreira Calado",
      "Isolda Maria Barros Torquato",
      "Karen L\u00c3\u00bacia de Ara\u00c3\u00bajo Freitas Moreira",
      "Suellen Marinho Andrade"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Eloise de Oliveira Lima, Jos\u00c3\u00a9 Maur\u00c3\u00adcio Ramos de Souza Neto, Felipe Leonardo Seixas Castro, Let\u00c3\u00adcia Maria Silva, Rebeca Andrade Laurentino, Vit\u00c3\u00b3ria Ferreira Calado, Isolda Maria Barros Torquato, Karen L\u00c3\u00bacia de Ara\u00c3\u00bajo Freitas Moreira and Suellen Marinho Andrade, explores the development and application of advanced systems in 'Eeg Microstates and Balance Parameters for Stroke Discrimination: A Machine Learning Approach'. Published in 'Brain Topography' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "microstates",
      "balance",
      "parameters",
      "stroke",
      "discrimination",
      "machine",
      "learning"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-047",
    "title": "VPAFL: Verifiable Privacy-Preserving Aggregation for Federated Learning Based on Single Server",
    "authors": [
      "Peizheng Lai",
      "Minqing Zhang",
      "Yixin Tang",
      "Ya Yue",
      "Fuqiang Di"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Peizheng Lai, Minqing Zhang, Yixin Tang, Ya Yue and Fuqiang Di, explores the development and application of advanced systems in 'VPAFL: Verifiable Privacy-Preserving Aggregation for Federated Learning Based on Single Server'. Published in 'Computers, Materials &amp; Continua' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "vpafl",
      "verifiable",
      "privacy-preserving",
      "aggregation",
      "federated",
      "learning",
      "single"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-048",
    "title": "Adaptive Recognition of English Translation Errors Based on Improved Machine Learning Methods",
    "authors": [
      "Minyi Yang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Minyi Yang, explores the development and application of advanced systems in 'Adaptive Recognition of English Translation Errors Based on Improved Machine Learning Methods'. Published in 'International Journal of High Speed Electronics and Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "adaptive",
      "recognition",
      "english",
      "translation",
      "errors",
      "improved",
      "machine"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-049",
    "title": "Simplified Visual Stimuli Impair Retrieval and Transfer in Audiovisual Equivalence Learning Tasks",
    "authors": [
      "K\u00c3\u00a1lm\u00c3\u00a1n T\u00c3\u00b3t",
      "Gabriella E\u00c3\u00b6rdegh",
      "No\u00c3\u00a9mi Harcsa\u00e2\u20ac\u0090Pint\u00c3\u00a9r",
      "Bal\u00c3\u00a1zs Bodosi",
      "Szabolcs K\u00c3\u00a9ri",
      "\u00c3\u0081d\u00c3\u00a1m Kiss",
      "Andr\u00c3\u00a1s Kelemen",
      "G\u00c3\u00a1bor Braunitzer",
      "Attila Nagy"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by K\u00c3\u00a1lm\u00c3\u00a1n T\u00c3\u00b3t, Gabriella E\u00c3\u00b6rdegh, No\u00c3\u00a9mi Harcsa\u00e2\u20ac\u0090Pint\u00c3\u00a9r, Bal\u00c3\u00a1zs Bodosi, Szabolcs K\u00c3\u00a9ri, \u00c3\u0081d\u00c3\u00a1m Kiss, Andr\u00c3\u00a1s Kelemen, G\u00c3\u00a1bor Braunitzer and Attila Nagy, explores the development and application of advanced systems in 'Simplified Visual Stimuli Impair Retrieval and Transfer in Audiovisual Equivalence Learning Tasks'. Published in 'Brain and Behavior' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "simplified",
      "visual",
      "stimuli",
      "impair",
      "retrieval",
      "transfer",
      "audiovisual"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-050",
    "title": "Game-Based Learning Bamboozle on Math Anxiety Level and Mathematical Conceptual Understanding",
    "authors": [
      "Dede Nurazizah",
      "Hidayat Hastian Dwicahya",
      "Trusti Hapsari",
      "Jajo Firman Raharjo"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Dede Nurazizah, Hidayat Hastian Dwicahya, Trusti Hapsari and Jajo Firman Raharjo, explores the development and application of advanced systems in 'Game-Based Learning Bamboozle on Math Anxiety Level and Mathematical Conceptual Understanding'. Published in 'International Journal Of Humanities Education and Social Sciences (IJHESS)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "game-based",
      "learning",
      "bamboozle",
      "anxiety",
      "level",
      "mathematical",
      "conceptual"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-051",
    "title": "The Influence of Multicultural Education and Learning Motivation on Student Academic Achievement",
    "authors": [
      "Bernadina Waha Labuan",
      "Stefhanus Hanny Pangemanan"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Bernadina Waha Labuan and Stefhanus Hanny Pangemanan, explores the development and application of advanced systems in 'The Influence of Multicultural Education and Learning Motivation on Student Academic Achievement'. Published in 'Journal La Edusci' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "influence",
      "multicultural",
      "education",
      "learning",
      "motivation",
      "student",
      "academic"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-052",
    "title": "Integrating AI in Language Learning: Boosting Pragmatic Competence for Young English Learners",
    "authors": [
      "Nabat Erdogan",
      "Kitson Christina"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Nabat Erdogan and Kitson Christina, explores the development and application of advanced systems in 'Integrating AI in Language Learning: Boosting Pragmatic Competence for Young English Learners'. Published in 'LatIA' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "integrating",
      "language",
      "learning",
      "boosting",
      "pragmatic",
      "competence",
      "young"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-053",
    "title": "Measuring building information modeling user satisfaction by using active interpretable machine learning",
    "authors": [
      "Wei-Chih Wang",
      "Shyn-Chang Huang",
      "Hsu-Pin Wang",
      "Minh-Tu Cao"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Wei-Chih Wang, Shyn-Chang Huang, Hsu-Pin Wang and Minh-Tu Cao, explores the development and application of advanced systems in 'Measuring building information modeling user satisfaction by using active interpretable machine learning'. Published in 'Applied Soft Computing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "measuring",
      "building",
      "information",
      "modeling",
      "satisfaction",
      "active",
      "interpretable"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-054",
    "title": "Leveraging SHAP for Feature Selection and Performance Benchmarking Across Hybrid Learning Models",
    "authors": [
      "Chirag Joshi",
      "Ranjeet Kumar Ranjan",
      "Gaurav Kumawat",
      "Aishwarya Mishra"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Chirag Joshi, Ranjeet Kumar Ranjan, Gaurav Kumawat and Aishwarya Mishra, explores the development and application of advanced systems in 'Leveraging SHAP for Feature Selection and Performance Benchmarking Across Hybrid Learning Models'. Published in '2025 Artificial Intelligence and Smart Technologies for Sustainability Conference (AISTS)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "leveraging",
      "feature",
      "selection",
      "performance",
      "benchmarking",
      "across",
      "hybrid"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-055",
    "title": "Application of machine learning regression algorithms to optimization of CMM measurement strategies",
    "authors": [
      "Jakub Rzeczkowski",
      "Sylwester Samborski",
      "Aleksander Czajka",
      "Mariusz K\u00c5\u201aonica",
      "Mateusz Janik",
      "Konrad Krzempek",
      "Piotr Sobecki",
      "Marek Besztak"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Jakub Rzeczkowski, Sylwester Samborski, Aleksander Czajka, Mariusz K\u00c5\u201aonica, Mateusz Janik, Konrad Krzempek, Piotr Sobecki and Marek Besztak, explores the development and application of advanced systems in 'Application of machine learning regression algorithms to optimization of CMM measurement strategies'. Published in 'Measurement Science and Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "application",
      "machine",
      "learning",
      "regression",
      "algorithms",
      "optimization",
      "measurement"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-056",
    "title": "Prediction of disc cutter wear of shield machines based on transfer learning",
    "authors": [
      "Yuxiang Meng",
      "Qian Fang",
      "Guoli Zheng",
      "Gan Wang",
      "Pengfei Li",
      "Shuang Chen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Yuxiang Meng, Qian Fang, Guoli Zheng, Gan Wang, Pengfei Li and Shuang Chen, explores the development and application of advanced systems in 'Prediction of disc cutter wear of shield machines based on transfer learning'. Published in 'Tunnelling and Underground Space Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "prediction",
      "cutter",
      "shield",
      "machines",
      "transfer",
      "learning"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-057",
    "title": "AutoGSP: Automated graph-level representation learning via subgraph detection and propagation deceleration",
    "authors": [
      "Mingshuo Nie",
      "Dongming Chen",
      "Dongqi Wang",
      "Huilin Chen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Mingshuo Nie, Dongming Chen, Dongqi Wang and Huilin Chen, explores the development and application of advanced systems in 'AutoGSP: Automated graph-level representation learning via subgraph detection and propagation deceleration'. Published in 'Expert Systems with Applications' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "autogsp",
      "automated",
      "graph-level",
      "representation",
      "learning",
      "subgraph",
      "detection"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-058",
    "title": "Heterogeneous graph completion collaborative network for attribute-missing heterogeneous graph representation learning",
    "authors": [
      "Yuanjun Yang",
      "Weihua Ou",
      "Sichao Fu",
      "Jiamin Chen",
      "Yunshun Wu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Yuanjun Yang, Weihua Ou, Sichao Fu, Jiamin Chen and Yunshun Wu, explores the development and application of advanced systems in 'Heterogeneous graph completion collaborative network for attribute-missing heterogeneous graph representation learning'. Published in 'Expert Systems with Applications' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "heterogeneous",
      "graph",
      "completion",
      "collaborative",
      "network",
      "attribute-missing",
      "representation"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-059",
    "title": "Biclustering-KNN joint learning in anomaly detection for handling class-imbalance-problem",
    "authors": [
      "Zhenkun Lu",
      "Haohan Wei",
      "Fengyu Ye",
      "Qinghua Huang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Zhenkun Lu, Haohan Wei, Fengyu Ye and Qinghua Huang, explores the development and application of advanced systems in 'Biclustering-KNN joint learning in anomaly detection for handling class-imbalance-problem'. Published in 'Knowledge-Based Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "biclustering-knn",
      "joint",
      "learning",
      "anomaly",
      "detection",
      "handling",
      "class-imbalance-problem"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-060",
    "title": "Real-Time Gunshot Detection and Localization Using Acoustic Array and Machine Learning",
    "authors": [
      "Prem Wadhwani",
      "Aravendra Kumar Sharma",
      "Suraj Sharma",
      "Farhan Raza Rizvi",
      "Ratnesh Kumar Dubey",
      "Pragya Goswami"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Prem Wadhwani, Aravendra Kumar Sharma, Suraj Sharma, Farhan Raza Rizvi, Ratnesh Kumar Dubey and Pragya Goswami, explores the development and application of advanced systems in 'Real-Time Gunshot Detection and Localization Using Acoustic Array and Machine Learning'. Published in '2025 International Conference on Engineering Innovations and Technologies (ICoEIT)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "real-time",
      "gunshot",
      "detection",
      "localization",
      "acoustic",
      "array",
      "machine"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-061",
    "title": "Active Learning in Engineering Education Through Flipped Classroom Integration and Google Classroom",
    "authors": [
      "Monika Doichinova Simeonova-Ingilizova"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Monika Doichinova Simeonova-Ingilizova, explores the development and application of advanced systems in 'Active Learning in Engineering Education Through Flipped Classroom Integration and Google Classroom'. Published in '2025 XXXIV International Scientific Conference Electronics (ET)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "active",
      "learning",
      "engineering",
      "education",
      "flipped",
      "classroom",
      "integration"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-062",
    "title": "Statistical Analysis on Energy Efficiency Trends in India using Machine Learning Algorithms",
    "authors": [
      "Amita Soni",
      "Soumyendra Singh",
      "P. Muthukumar"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Amita Soni, Soumyendra Singh and P. Muthukumar, explores the development and application of advanced systems in 'Statistical Analysis on Energy Efficiency Trends in India using Machine Learning Algorithms'. Published in '2025 11th International Conference on Electrical Energy Systems (ICEES)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "statistical",
      "analysis",
      "energy",
      "efficiency",
      "trends",
      "india",
      "machine"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-063",
    "title": "Brain Metastasis Radionecrosis Prediction By Radiomics and Dosiomics: A Machine Learning Approach",
    "authors": [
      "C. Feoli",
      "A. Barillaro",
      "M. Caroprese",
      "C. Oliviero",
      "S. Clemente",
      "C. Mainardi",
      "S. German\u00c3",
      "R. Cuocolo",
      "M. Conson",
      "C. Altucci",
      "R. Pacelli"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by C. Feoli, A. Barillaro, M. Caroprese, C. Oliviero, S. Clemente, C. Mainardi, S. German\u00c3, R. Cuocolo, M. Conson, C. Altucci and R. Pacelli, explores the development and application of advanced systems in 'Brain Metastasis Radionecrosis Prediction By Radiomics and Dosiomics: A Machine Learning Approach'. Published in 'International Journal of Radiation Oncology*Biology*Physics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "brain",
      "metastasis",
      "radionecrosis",
      "prediction",
      "radiomics",
      "dosiomics",
      "machine"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-064",
    "title": "Design of Emotionally-Aware Digital Twin Models for Socio-Affective Learning Analysis",
    "authors": [
      "Hossein Abdi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Hossein Abdi, explores the development and application of advanced systems in 'Design of Emotionally-Aware Digital Twin Models for Socio-Affective Learning Analysis'. Published in 'Advances in Computational Intelligence and Robotics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "design",
      "emotionally-aware",
      "digital",
      "models",
      "socio-affective",
      "learning",
      "analysis"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-065",
    "title": "Selective Attention Federated Learning: Improving Privacy and Efficiency for Clinical Text Classification",
    "authors": [
      "Yue Li",
      "Lihong Zhang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Yue Li and Lihong Zhang, explores the development and application of advanced systems in 'Selective Attention Federated Learning: Improving Privacy and Efficiency for Clinical Text Classification'. Published in '2025 International Conference on Artificial Intelligence, Computer, Data Sciences and Applications (ACDSA)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "selective",
      "attention",
      "federated",
      "learning",
      "improving",
      "privacy",
      "efficiency"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-066",
    "title": "MoRE: A Mixture of Low-Rank Experts for Adaptive Multi-Task Learning",
    "authors": [
      "Dacao Zhang",
      "Kun Zhang",
      "Shimao Chu",
      "Le Wu",
      "Xin Li",
      "Si Wei"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Dacao Zhang, Kun Zhang, Shimao Chu, Le Wu, Xin Li and Si Wei, explores the development and application of advanced systems in 'MoRE: A Mixture of Low-Rank Experts for Adaptive Multi-Task Learning'. Published in 'Findings of the Association for Computational Linguistics: ACL 2025' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "mixture",
      "low-rank",
      "experts",
      "adaptive",
      "multi-task",
      "learning"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-067",
    "title": "Incremental Double Q-Learning-Enhanced MPC for Trajectory Tracking of Mobile Robots",
    "authors": [
      "Xiaoliang Fan",
      "Chunguang Bu",
      "Xingang Zhao",
      "Jin Sui",
      "Hongwei Mo"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Xiaoliang Fan, Chunguang Bu, Xingang Zhao, Jin Sui and Hongwei Mo, explores the development and application of advanced systems in 'Incremental Double Q-Learning-Enhanced MPC for Trajectory Tracking of Mobile Robots'. Published in 'IEEE Transactions on Instrumentation and Measurement' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "incremental",
      "double",
      "q-learning-enhanced",
      "trajectory",
      "tracking",
      "mobile",
      "robots"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-068",
    "title": "I-CTRL: Imitation to Control Humanoid Robots Through Bounded Residual Reinforcement Learning",
    "authors": [
      "Yashuai Yan",
      "Esteve Valls Mascaro",
      "Tobias Egle",
      "Dongheui Lee"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Yashuai Yan, Esteve Valls Mascaro, Tobias Egle and Dongheui Lee, explores the development and application of advanced systems in 'I-CTRL: Imitation to Control Humanoid Robots Through Bounded Residual Reinforcement Learning'. Published in 'IEEE Robotics &amp; Automation Magazine' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "i-ctrl",
      "imitation",
      "control",
      "humanoid",
      "robots",
      "bounded",
      "residual"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-069",
    "title": "TDOA-Based Target Localization for Distributed MIMO Radar via Online Kernel Learning",
    "authors": [
      "Kui Xiong",
      "Mingmin Chen",
      "Maosen Liao",
      "Long Zhang",
      "Guolong Cui"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Kui Xiong, Mingmin Chen, Maosen Liao, Long Zhang and Guolong Cui, explores the development and application of advanced systems in 'TDOA-Based Target Localization for Distributed MIMO Radar via Online Kernel Learning'. Published in '2025 IEEE Radar Conference (RadarConf25)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "tdoa-based",
      "target",
      "localization",
      "distributed",
      "radar",
      "online",
      "kernel"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-070",
    "title": "Machine learning-based seafloor gas seep detection in sonar water column images",
    "authors": [
      "Sultan M. Manjur",
      "Volkan Senyurek",
      "Ramon Kalski",
      "Adam Skarke",
      "Ali Cafer Gurbuz"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Sultan M. Manjur, Volkan Senyurek, Ramon Kalski, Adam Skarke and Ali Cafer Gurbuz, explores the development and application of advanced systems in 'Machine learning-based seafloor gas seep detection in sonar water column images'. Published in 'Ocean Sensing and Monitoring XVII' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning-based",
      "seafloor",
      "detection",
      "sonar",
      "water",
      "column"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-071",
    "title": "Offline-to-online reinforcement learning with policy ensemble and policy-extended value",
    "authors": [
      "Jiacheng Chen",
      "Jin Zhu",
      "Lin Yang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Jiacheng Chen, Jin Zhu and Lin Yang, explores the development and application of advanced systems in 'Offline-to-online reinforcement learning with policy ensemble and policy-extended value'. Published in 'Applied Intelligence' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "offline-to-online",
      "reinforcement",
      "learning",
      "policy",
      "ensemble",
      "policy-extended",
      "value"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-072",
    "title": "Differential Beta and Gamma Activity Modulation during Unimanual and Bimanual Motor Learning",
    "authors": [
      "Min Wu",
      "Marleen J. Schoenfeld",
      "Carl Lindersson",
      "Sven Braeutigam",
      "Catharina Zich",
      "Charlotte J. Stagg"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Min Wu, Marleen J. Schoenfeld, Carl Lindersson, Sven Braeutigam, Catharina Zich and Charlotte J. Stagg, explores the development and application of advanced systems in 'Differential Beta and Gamma Activity Modulation during Unimanual and Bimanual Motor Learning'. Published in 'The Journal of Neuroscience' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "differential",
      "gamma",
      "activity",
      "modulation",
      "during",
      "unimanual",
      "bimanual"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-073",
    "title": "Teaching Paper: Applying Evaluation Frameworks for Strategic Learning in Non-Profit Organizations",
    "authors": [
      "",
      "Anna Neya Kazanskaia"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by  and Anna Neya Kazanskaia, explores the development and application of advanced systems in 'Teaching Paper: Applying Evaluation Frameworks for Strategic Learning in Non-Profit Organizations'. Published in 'NEYA Global Journal of Non-Profit Studies' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "teaching",
      "paper",
      "applying",
      "evaluation",
      "frameworks",
      "strategic",
      "learning"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-074",
    "title": "USABILITY AND PERCEPTIONS OF ONLINE LEARNING TOOLS AFTER THE COVID-19 PANDEMIC",
    "authors": [
      "",
      "Ognyan Miladinov",
      "Milena Kuleva",
      "",
      "Ivan Slavchev",
      ""
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by , Ognyan Miladinov, Milena Kuleva, , Ivan Slavchev and , explores the development and application of advanced systems in 'USABILITY AND PERCEPTIONS OF ONLINE LEARNING TOOLS AFTER THE COVID-19 PANDEMIC'. Published in 'Proceeding book of the 4th International Scientific Congress \u00e2\u20ac\u0153Applied Sports Sciences\u00e2\u20ac\u009d' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "usability",
      "perceptions",
      "online",
      "learning",
      "tools",
      "after",
      "covid-19"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-075",
    "title": "Multi-Timescale Motion-Decoupled Spiking Transformer for Audio-Visual Zero-Shot Learning",
    "authors": [
      "Wenrui Li",
      "Penghong Wang",
      "Xingtao Wang",
      "Wangmeng Zuo",
      "Xiaopeng Fan",
      "Yonghong Tian"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Wenrui Li, Penghong Wang, Xingtao Wang, Wangmeng Zuo, Xiaopeng Fan and Yonghong Tian, explores the development and application of advanced systems in 'Multi-Timescale Motion-Decoupled Spiking Transformer for Audio-Visual Zero-Shot Learning'. Published in 'IEEE Transactions on Circuits and Systems for Video Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "multi-timescale",
      "motion-decoupled",
      "spiking",
      "transformer",
      "audio-visual",
      "zero-shot",
      "learning"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-076",
    "title": "A data-driven approach for predicting crime occurrence using machine learning models",
    "authors": [
      "Faisal Tareque Shohan",
      "Abu Ubaida Akash",
      "Muhammad Ibrahim",
      "Mohammad Shafiul Alam"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Faisal Tareque Shohan, Abu Ubaida Akash, Muhammad Ibrahim and Mohammad Shafiul Alam, explores the development and application of advanced systems in 'A data-driven approach for predicting crime occurrence using machine learning models'. Published in 'International Journal of Data Science and Analytics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "data-driven",
      "approach",
      "predicting",
      "crime",
      "occurrence",
      "machine",
      "learning"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-077",
    "title": "Multiobjective Evolutionary Learning for Multitask Quality Prediction Problems in Continuous Annealing Process",
    "authors": [
      "Chang Liu",
      "Lixin Tang",
      "Kainan Zhang",
      "Xuanqi Xu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Chang Liu, Lixin Tang, Kainan Zhang and Xuanqi Xu, explores the development and application of advanced systems in 'Multiobjective Evolutionary Learning for Multitask Quality Prediction Problems in Continuous Annealing Process'. Published in 'IEEE Transactions on Neural Networks and Learning Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "multiobjective",
      "evolutionary",
      "learning",
      "multitask",
      "quality",
      "prediction",
      "problems"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-078",
    "title": "A Systematic Literature Review of Barriers Affecting e-Learning in Higher Education",
    "authors": [
      "Ayoub Oulamine",
      "Raja Chakra",
      "Rachid Ziky",
      "Hicham Bahida",
      "Fatima El Gareh",
      "Ilham Oubihi",
      "Ayoub Massiki"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Ayoub Oulamine, Raja Chakra, Rachid Ziky, Hicham Bahida, Fatima El Gareh, Ilham Oubihi and Ayoub Massiki, explores the development and application of advanced systems in 'A Systematic Literature Review of Barriers Affecting e-Learning in Higher Education'. Published in 'Educational Process International Journal' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "systematic",
      "literature",
      "review",
      "barriers",
      "affecting",
      "e-learning",
      "higher"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-079",
    "title": "Promoting scientific literacy through integrated project-based learning and reverse engineering pedagogy",
    "authors": [
      "Paulo Victor Santos Souza",
      "Claudiano Ferreira",
      "Jorge Sim\u00c3\u00b5es de S\u00c3\u00a1 Martins",
      "F\u00c3\u00a1bio Ferreira Monteiro"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Paulo Victor Santos Souza, Claudiano Ferreira, Jorge Sim\u00c3\u00b5es de S\u00c3\u00a1 Martins and F\u00c3\u00a1bio Ferreira Monteiro, explores the development and application of advanced systems in 'Promoting scientific literacy through integrated project-based learning and reverse engineering pedagogy'. Published in 'Physical Review Physics Education Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "promoting",
      "scientific",
      "literacy",
      "integrated",
      "project-based",
      "learning",
      "reverse"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-080",
    "title": "A Multi-Airport Flight Schedule Reallocation Algorithm Based on Unbiased Meta-Learning",
    "authors": [
      "Unknown Author"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Unknown Author, explores the development and application of advanced systems in 'A Multi-Airport Flight Schedule Reallocation Algorithm Based on Unbiased Meta-Learning'. Published in 'Proceedings of 2025  the 15th International Workshop on Computer Science and Engineering' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "multi-airport",
      "flight",
      "schedule",
      "reallocation",
      "algorithm",
      "unbiased",
      "meta-learning"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-081",
    "title": "Older Adults Self-Regulate Learning and Update Knowledge Regarding Psychology-Related Misconceptions",
    "authors": [
      "Ren\u00c3\u00a9e E DeCaro",
      "Ayanna K. Thomas"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Ren\u00c3\u00a9e E DeCaro and Ayanna K. Thomas, explores the development and application of advanced systems in 'Older Adults Self-Regulate Learning and Update Knowledge Regarding Psychology-Related Misconceptions'. Published in 'Experimental Aging Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "older",
      "adults",
      "self-regulate",
      "learning",
      "update",
      "knowledge",
      "regarding"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-082",
    "title": "Optimizing Scalability in Spice Identification through Transfer Learning with Convolutional Neural Networks",
    "authors": [
      "I Nyoman Switrayana",
      "Muhamad Azwar"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by I Nyoman Switrayana and Muhamad Azwar, explores the development and application of advanced systems in 'Optimizing Scalability in Spice Identification through Transfer Learning with Convolutional Neural Networks'. Published in 'Jurnal CoreIT: Jurnal Hasil Penelitian Ilmu Komputer dan Teknologi Informasi' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "optimizing",
      "scalability",
      "spice",
      "identification",
      "transfer",
      "learning",
      "convolutional"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-083",
    "title": "Effect of Activity Based Learning on Foreign Language Skills of Primary Students",
    "authors": [
      "Muhammad Zohaib Qamar",
      "Saeed Ullah"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Muhammad Zohaib Qamar and Saeed Ullah, explores the development and application of advanced systems in 'Effect of Activity Based Learning on Foreign Language Skills of Primary Students'. Published in 'ACADEMIA International Journal for Social Sciences' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "effect",
      "activity",
      "learning",
      "foreign",
      "language",
      "skills",
      "primary"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-084",
    "title": "EFFECTIVENESS OF E-LEARNING MEDIA DEVELOPMENT USING CANVA IN THE PJBL MODEL",
    "authors": [
      "Taukhid Taukhid",
      "Taufan Agung Prasetya",
      "Sapto Dwi Anggoro"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Taukhid Taukhid, Taufan Agung Prasetya and Sapto Dwi Anggoro, explores the development and application of advanced systems in 'EFFECTIVENESS OF E-LEARNING MEDIA DEVELOPMENT USING CANVA IN THE PJBL MODEL'. Published in 'JIPI (Jurnal Ilmiah Penelitian dan Pembelajaran Informatika)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "effectiveness",
      "e-learning",
      "media",
      "development",
      "canva",
      "model"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-085",
    "title": "Classification of Instagram Users and Prediction of Engagement Rates Using Machine Learning",
    "authors": [
      "Vaishnavi Padiya",
      "Dev Shah",
      "Tanay Dave",
      "Ruhina Karani"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Vaishnavi Padiya, Dev Shah, Tanay Dave and Ruhina Karani, explores the development and application of advanced systems in 'Classification of Instagram Users and Prediction of Engagement Rates Using Machine Learning'. Published in 'Lecture Notes in Networks and Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "classification",
      "instagram",
      "users",
      "prediction",
      "engagement",
      "rates",
      "machine"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-086",
    "title": "A hybrid features based malevolent domain detection in cyberspace using machine learning",
    "authors": [
      "Saleem Raja Abdul Samad",
      "Pradeepa Ganesan",
      "Amna Salim Rashid Al-Kaabi",
      "Justin Rajasekaran",
      "Murugan Singaravelan",
      "Peerbasha Shebbeer Basha"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Saleem Raja Abdul Samad, Pradeepa Ganesan, Amna Salim Rashid Al-Kaabi, Justin Rajasekaran, Murugan Singaravelan and Peerbasha Shebbeer Basha, explores the development and application of advanced systems in 'A hybrid features based malevolent domain detection in cyberspace using machine learning'. Published in 'International Journal of Advances in Applied Sciences' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "hybrid",
      "features",
      "malevolent",
      "domain",
      "detection",
      "cyberspace",
      "machine"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-087",
    "title": "Effects of chewing on postural learning: An experimental pre-post intervention study",
    "authors": [
      "Cristina Dolciotti",
      "Paolo Andre",
      "Maria Paola Tramonti Fantozzi",
      "Francesco Lazzerini",
      "Vincenzo De Cicco",
      "Massimo Barresi",
      "Claudia Grasso",
      "Luca Bruschini",
      "Davide De Cicco",
      "Paolo Orsini",
      "Francesco Montanari",
      "Ugo Faraguna",
      "Diego Manzoni"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Cristina Dolciotti, Paolo Andre, Maria Paola Tramonti Fantozzi, Francesco Lazzerini, Vincenzo De Cicco, Massimo Barresi, Claudia Grasso, Luca Bruschini, Davide De Cicco, Paolo Orsini, Francesco Montanari, Ugo Faraguna and Diego Manzoni, explores the development and application of advanced systems in 'Effects of chewing on postural learning: An experimental pre-post intervention study'. Published in 'PLOS One' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "effects",
      "chewing",
      "postural",
      "learning",
      "experimental",
      "pre-post",
      "intervention"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-088",
    "title": "Digital Learning Solutions for Assessment and Academic Achievement of Learners in Mathematics",
    "authors": [
      "Aivin B. Balquedra",
      "Ron Alfie S. Juson"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Aivin B. Balquedra and Ron Alfie S. Juson, explores the development and application of advanced systems in 'Digital Learning Solutions for Assessment and Academic Achievement of Learners in Mathematics'. Published in 'Advances in Social Science, Education and Humanities Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "digital",
      "learning",
      "solutions",
      "assessment",
      "academic",
      "achievement",
      "learners"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-089",
    "title": "Relation between Academic Performance and Adolescents\u00e2\u20ac\u2122 Depression Levels-Learning Engagement as Mediator",
    "authors": [
      "Ruoxi Wang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Ruoxi Wang, explores the development and application of advanced systems in 'Relation between Academic Performance and Adolescents\u00e2\u20ac\u2122 Depression Levels-Learning Engagement as Mediator'. Published in 'Advances in Social Science, Education and Humanities Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "relation",
      "academic",
      "performance",
      "adolescents\u00e2\u20ac\u2122",
      "depression",
      "levels-learning",
      "engagement"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-090",
    "title": "Towards a Technical Definition of Artificial Intelligence and Machine Learning Software Systems",
    "authors": [
      "Lars Nolle"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Lars Nolle, explores the development and application of advanced systems in 'Towards a Technical Definition of Artificial Intelligence and Machine Learning Software Systems'. Published in 'Lecture Notes in Computer Science' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "towards",
      "technical",
      "definition",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-091",
    "title": "Analysis of the Relationship between Organizational Performance, Marketing Orientation and Learning Orientation",
    "authors": [
      "Gan-Unur Oyuntuguldur",
      "Baljir Khishigtogtokh",
      "Sereeter Erdenetuul"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Gan-Unur Oyuntuguldur, Baljir Khishigtogtokh and Sereeter Erdenetuul, explores the development and application of advanced systems in 'Analysis of the Relationship between Organizational Performance, Marketing Orientation and Learning Orientation'. Published in 'Open Journal of Business and Management' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "analysis",
      "relationship",
      "organizational",
      "performance",
      "marketing",
      "orientation",
      "learning"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-092",
    "title": "Machine Learning-Driven Acoustic Feature Classification and Pronunciation Assessment for Mandarin Learners",
    "authors": [
      "Gulnur Arkin",
      "Tangnur Abdukelim",
      "Hankiz Yilahun",
      "Askar Hamdulla"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Gulnur Arkin, Tangnur Abdukelim, Hankiz Yilahun and Askar Hamdulla, explores the development and application of advanced systems in 'Machine Learning-Driven Acoustic Feature Classification and Pronunciation Assessment for Mandarin Learners'. Published in 'Applied Sciences' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning-driven",
      "acoustic",
      "feature",
      "classification",
      "pronunciation",
      "assessment"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-093",
    "title": "Assessing the Impact of Drawing in Biology Lecture Classes on Student Learning",
    "authors": [
      "Stephanie L. Madison",
      "Sarah Layne",
      "Caleb Wilkinson",
      "Khoa Pham",
      "Haley Sims"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Stephanie L. Madison, Sarah Layne, Caleb Wilkinson, Khoa Pham and Haley Sims, explores the development and application of advanced systems in 'Assessing the Impact of Drawing in Biology Lecture Classes on Student Learning'. Published in 'Biochemistry and Molecular Biology Education' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "assessing",
      "impact",
      "drawing",
      "biology",
      "lecture",
      "classes",
      "student"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-094",
    "title": "Between Privilege and Precarity: Unpacking Language Ideologies of Chinese Students Learning Sinhalese",
    "authors": [
      "Jinyi Zhou",
      "Mengna Wang"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Jinyi Zhou and Mengna Wang, explores the development and application of advanced systems in 'Between Privilege and Precarity: Unpacking Language Ideologies of Chinese Students Learning Sinhalese'. Published in 'Asian Social Science' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "privilege",
      "precarity",
      "unpacking",
      "language",
      "ideologies",
      "chinese",
      "students"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-095",
    "title": "Innovative Model of Proactive Competency-Based Learning Management Integrated with Cloud Technology",
    "authors": [
      "Sakorn Atthachakara"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Sakorn Atthachakara, explores the development and application of advanced systems in 'Innovative Model of Proactive Competency-Based Learning Management Integrated with Cloud Technology'. Published in 'Journal of Education and Learning' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "innovative",
      "model",
      "proactive",
      "competency-based",
      "learning",
      "management",
      "integrated"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-096",
    "title": "A Machine Learning Approach to Sleep Stage Classification in Mice Using Polysomnography",
    "authors": [
      "David F. Rivas",
      "Min Chen",
      "Rebecca A. Muhle"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by David F. Rivas, Min Chen and Rebecca A. Muhle, explores the development and application of advanced systems in 'A Machine Learning Approach to Sleep Stage Classification in Mice Using Polysomnography'. Published in '2025 IEEE 16th Annual Ubiquitous Computing, Electronics &amp;amp; Mobile Communication Conference (UEMCON)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "approach",
      "sleep",
      "stage",
      "classification",
      "polysomnography"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-097",
    "title": "Interactive Learning: The Earthquake Emergency Kit Game for Children Aged 9-11",
    "authors": [
      "Volkan Davut Mengi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Volkan Davut Mengi, explores the development and application of advanced systems in 'Interactive Learning: The Earthquake Emergency Kit Game for Children Aged 9-11'. Published in 'Roczniki Nauk Spo\u00c5\u201aecznych' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "interactive",
      "learning",
      "earthquake",
      "emergency",
      "children"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-098",
    "title": "Enhanced thin-film measurement via integrated Fast Fourier Transform and machine learning",
    "authors": [
      "Yuxin Wang",
      "Shizheng Zhou",
      "Yue Quan",
      "Yu Liu",
      "Shen Lai",
      "Yinning Zhou"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Yuxin Wang, Shizheng Zhou, Yue Quan, Yu Liu, Shen Lai and Yinning Zhou, explores the development and application of advanced systems in 'Enhanced thin-film measurement via integrated Fast Fourier Transform and machine learning'. Published in 'Surface and Coatings Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "enhanced",
      "thin-film",
      "measurement",
      "integrated",
      "fourier",
      "transform",
      "machine"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-099",
    "title": "NeuPAN: Direct Point Robot Navigation With End-to-End Model-Based Learning",
    "authors": [
      "Ruihua Han",
      "Shuai Wang",
      "Shuaijun Wang",
      "Zeqing Zhang",
      "Jianjun Chen",
      "Shijie Lin",
      "Chengyang Li",
      "Chengzhong Xu",
      "Yonina C. Eldar",
      "Qi Hao",
      "Jia Pan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Ruihua Han, Shuai Wang, Shuaijun Wang, Zeqing Zhang, Jianjun Chen, Shijie Lin, Chengyang Li, Chengzhong Xu, Yonina C. Eldar, Qi Hao and Jia Pan, explores the development and application of advanced systems in 'NeuPAN: Direct Point Robot Navigation With End-to-End Model-Based Learning'. Published in 'IEEE Transactions on Robotics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "neupan",
      "direct",
      "point",
      "robot",
      "navigation",
      "end-to-end",
      "model-based"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-100",
    "title": "Predicting Stellar Parameters of Massive Stars from Light Curves with Machine Learning",
    "authors": [
      "Rachel C. Zhang",
      "Kaze W. K. Wong",
      "Gonzalo Holgado",
      "Matteo Cantiello"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Rachel C. Zhang, Kaze W. K. Wong, Gonzalo Holgado and Matteo Cantiello, explores the development and application of advanced systems in 'Predicting Stellar Parameters of Massive Stars from Light Curves with Machine Learning'. Published in 'The Astrophysical Journal' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "predicting",
      "stellar",
      "parameters",
      "massive",
      "stars",
      "light",
      "curves"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-101",
    "title": "Validitas LKPD Fase D Berbasis Problem Based Learning Materi Rasio dan Proporsi",
    "authors": [
      "Rubiah Rubiah",
      "Anna Cesaria",
      "Villia Anggraini"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Rubiah Rubiah, Anna Cesaria and Villia Anggraini, explores the development and application of advanced systems in 'Validitas LKPD Fase D Berbasis Problem Based Learning Materi Rasio dan Proporsi'. Published in 'J-PiMat : Jurnal Pendidikan Matematika' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "validitas",
      "berbasis",
      "problem",
      "learning",
      "materi",
      "rasio",
      "proporsi"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-102",
    "title": "Leveraging smartphone barometric sensors for authentic physics learning: an in-flight experiment",
    "authors": [
      "Mert B\u00c3\u00bcy\u00c3\u00bckdede"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Mert B\u00c3\u00bcy\u00c3\u00bckdede, explores the development and application of advanced systems in 'Leveraging smartphone barometric sensors for authentic physics learning: an in-flight experiment'. Published in 'Physics Education' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "leveraging",
      "smartphone",
      "barometric",
      "sensors",
      "authentic",
      "physics",
      "learning"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-103",
    "title": "Creative Health a joke or valuable learning experience; A mixed methods study",
    "authors": [
      "Victoria Ridgway",
      "Sarah Skyrme",
      "Russell Henshaw",
      "Janet Blain",
      "Jenny Devine",
      "Debbie Mitchell",
      "Mark Duffett",
      "Rebecca Bailey McHale"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Victoria Ridgway, Sarah Skyrme, Russell Henshaw, Janet Blain, Jenny Devine, Debbie Mitchell, Mark Duffett and Rebecca Bailey McHale, explores the development and application of advanced systems in 'Creative Health a joke or valuable learning experience; A mixed methods study'. Published in 'Nurse Education Today' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "creative",
      "health",
      "valuable",
      "learning",
      "experience",
      "mixed",
      "methods"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-104",
    "title": "Machine learning approaches for predicting mechanical properties of steel-fiber-reinforced concrete",
    "authors": [
      "Huan Huang",
      "Long Lei",
      "Guoxin Xu",
      "Shuangli Cao",
      "Xiping Ren"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Huan Huang, Long Lei, Guoxin Xu, Shuangli Cao and Xiping Ren, explores the development and application of advanced systems in 'Machine learning approaches for predicting mechanical properties of steel-fiber-reinforced concrete'. Published in 'Materials Today Communications' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "approaches",
      "predicting",
      "mechanical",
      "properties",
      "steel-fiber-reinforced"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-105",
    "title": "Multimodal Fusion Learning for Predicting Tropical Cyclone Intensity Over Western North Pacific",
    "authors": [
      "Jie Lian",
      "Jiahao Shao",
      "Hui Yu",
      "Ruirong Chen",
      "Sirong Huang",
      "Guomin Chen",
      "Qin Zhao"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Jie Lian, Jiahao Shao, Hui Yu, Ruirong Chen, Sirong Huang, Guomin Chen and Qin Zhao, explores the development and application of advanced systems in 'Multimodal Fusion Learning for Predicting Tropical Cyclone Intensity Over Western North Pacific'. Published in 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "multimodal",
      "fusion",
      "learning",
      "predicting",
      "tropical",
      "cyclone",
      "intensity"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-106",
    "title": "From Concept to Classroom: Gamifying lesson design in Open and Distance Learning",
    "authors": [
      "Rubeena Doomun"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Rubeena Doomun, explores the development and application of advanced systems in 'From Concept to Classroom: Gamifying lesson design in Open and Distance Learning'. Published in 'Proceedings of The International Conference on Innovation in Teaching and Education' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "concept",
      "classroom",
      "gamifying",
      "lesson",
      "design",
      "distance",
      "learning"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-107",
    "title": "Efektivitas Penggunaan Platform E-Learning Berbasis Moodle untuk Meningkatkan Motivasi Belajar Siswa",
    "authors": [
      "Haykal Kholid Khoirujzaman",
      "Sofhian Fazrin Nasrulloh"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Haykal Kholid Khoirujzaman and Sofhian Fazrin Nasrulloh, explores the development and application of advanced systems in 'Efektivitas Penggunaan Platform E-Learning Berbasis Moodle untuk Meningkatkan Motivasi Belajar Siswa'. Published in 'Indo-MathEdu Intellectuals Journal' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "efektivitas",
      "penggunaan",
      "platform",
      "e-learning",
      "berbasis",
      "moodle",
      "untuk"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-108",
    "title": "The Use of AI for Learning Planning Viewed from the UTAUT Perspective",
    "authors": [
      "Ezra Abdiel Ratumanan",
      "Krismiyati Krismiyati"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Ezra Abdiel Ratumanan and Krismiyati Krismiyati, explores the development and application of advanced systems in 'The Use of AI for Learning Planning Viewed from the UTAUT Perspective'. Published in 'International Journal of Active Learning' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "learning",
      "planning",
      "viewed",
      "utaut",
      "perspective"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-109",
    "title": "A Machine Learning Approach to Resolving Conflicts in Physical Human\u00e2\u20ac\u201cRobot Interaction",
    "authors": [
      "Enes Ulas Dincer",
      "Zaid Al-Saadi",
      "Yahya M. Hamad",
      "Yusuf Aydin",
      "Ayse Kucukyilmaz",
      "Cagatay Basdogan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Enes Ulas Dincer, Zaid Al-Saadi, Yahya M. Hamad, Yusuf Aydin, Ayse Kucukyilmaz and Cagatay Basdogan, explores the development and application of advanced systems in 'A Machine Learning Approach to Resolving Conflicts in Physical Human\u00e2\u20ac\u201cRobot Interaction'. Published in 'ACM Transactions on Human-Robot Interaction' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "approach",
      "resolving",
      "conflicts",
      "physical",
      "human\u00e2\u20ac\u201crobot"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-110",
    "title": "Editorial: Health, wellbeing, performance and learning in extreme contexts and natural environments",
    "authors": [
      "Royce L. Willis",
      "Vinathe Sharma-Brymer",
      "Matthew Leach",
      "Eric Brymer"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Royce L. Willis, Vinathe Sharma-Brymer, Matthew Leach and Eric Brymer, explores the development and application of advanced systems in 'Editorial: Health, wellbeing, performance and learning in extreme contexts and natural environments'. Published in 'Frontiers in Psychology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "editorial",
      "health",
      "wellbeing",
      "performance",
      "learning",
      "extreme",
      "contexts"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-111",
    "title": "Machine learning risk-prediction model for in-hospital mortality in Takotsubo cardiomyopathy",
    "authors": [
      "Ankit Agrawal",
      "Umesh Bhagat",
      "Aro Daniela Arockiam",
      "Elio Haroun",
      "Michael Faulx",
      "Milind Y. Desai",
      "Wael Jaber",
      "Venu Menon",
      "Brian Griffin",
      "Tom Kai Ming Wang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Ankit Agrawal, Umesh Bhagat, Aro Daniela Arockiam, Elio Haroun, Michael Faulx, Milind Y. Desai, Wael Jaber, Venu Menon, Brian Griffin and Tom Kai Ming Wang, explores the development and application of advanced systems in 'Machine learning risk-prediction model for in-hospital mortality in Takotsubo cardiomyopathy'. Published in 'International Journal of Cardiology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "risk-prediction",
      "model",
      "in-hospital",
      "mortality",
      "takotsubo"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-112",
    "title": "Growing Through Labor-Implementation of a Gamified Tea Learning Curriculum in Kindergarten",
    "authors": [
      "Yun Gao"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Yun Gao, explores the development and application of advanced systems in 'Growing Through Labor-Implementation of a Gamified Tea Learning Curriculum in Kindergarten'. Published in 'Journal of Educational Research and Policies' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "growing",
      "labor-implementation",
      "gamified",
      "learning",
      "curriculum",
      "kindergarten"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-113",
    "title": "Implementasi MGMP sebagai Strategi Penguatan Kompetensi Guru di Community Learning Center (CLC)",
    "authors": [
      "Wilddan Rezzy Septiand",
      "Nunuk Hariyati",
      "Mustaji Mustaji",
      "Amrozi Khamidi",
      "Kaniati Amalia",
      "Mochamad Nursalim"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Wilddan Rezzy Septiand, Nunuk Hariyati, Mustaji Mustaji, Amrozi Khamidi, Kaniati Amalia and Mochamad Nursalim, explores the development and application of advanced systems in 'Implementasi MGMP sebagai Strategi Penguatan Kompetensi Guru di Community Learning Center (CLC)'. Published in 'JIIP - Jurnal Ilmiah Ilmu Pendidikan' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "implementasi",
      "sebagai",
      "strategi",
      "penguatan",
      "kompetensi",
      "community",
      "learning"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-114",
    "title": "Spatial-Spectral Aware Learning with Deformable Affinity for Weakly Supervised Semantic Segmentation",
    "authors": [
      "Yuzhen Zhou",
      "Pan Gao",
      "Li Yu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Yuzhen Zhou, Pan Gao and Li Yu, explores the development and application of advanced systems in 'Spatial-Spectral Aware Learning with Deformable Affinity for Weakly Supervised Semantic Segmentation'. Published in '2025 IEEE International Conference on Multimedia and Expo (ICME)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "spatial-spectral",
      "aware",
      "learning",
      "deformable",
      "affinity",
      "weakly",
      "supervised"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-115",
    "title": "Quantitative Analysis of Multi-Viewpoint Configuration Effects in Robotic Manipulation Policy Learning",
    "authors": [
      "Dowon Kim",
      "Sangmin Lee",
      "Sungyong Park",
      "Heewon Kim"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Dowon Kim, Sangmin Lee, Sungyong Park and Heewon Kim, explores the development and application of advanced systems in 'Quantitative Analysis of Multi-Viewpoint Configuration Effects in Robotic Manipulation Policy Learning'. Published in 'JOURNAL OF BROADCAST ENGINEERING' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "quantitative",
      "analysis",
      "multi-viewpoint",
      "configuration",
      "effects",
      "robotic",
      "manipulation"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-116",
    "title": "54\u00e2\u20ac\u0192PathBrowser: A pathology education tool for interactive flashcard-based self-learning \u00e2\u20ac\u00af",
    "authors": [
      "Stevephen Hung",
      "Maikel Benitez Barzaga",
      "Ilianne Vega Prado",
      "Hayk Simonyan",
      "Jorge Sepulveda"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Stevephen Hung, Maikel Benitez Barzaga, Ilianne Vega Prado, Hayk Simonyan and Jorge Sepulveda, explores the development and application of advanced systems in '54\u00e2\u20ac\u0192PathBrowser: A pathology education tool for interactive flashcard-based self-learning \u00e2\u20ac\u00af'. Published in 'American Journal of Clinical Pathology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "54\u00e2\u20ac\u0192pathbrowser",
      "pathology",
      "education",
      "interactive",
      "flashcard-based",
      "self-learning"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-117",
    "title": "Effectiveness of Peer-assisted learning in medical education: A meta-analysis study",
    "authors": [
      "Zhuoyang Li",
      "Quan Wang",
      "Junsong Wu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Zhuoyang Li, Quan Wang and Junsong Wu, explores the development and application of advanced systems in 'Effectiveness of Peer-assisted learning in medical education: A meta-analysis study'. Published in 'PLOS One' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "effectiveness",
      "peer-assisted",
      "learning",
      "medical",
      "education",
      "meta-analysis",
      "study"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-118",
    "title": "Federated Learning and Edge AI for Privacy-Preserving Diabetes Prediction in Healthcare",
    "authors": [
      "Ayyappan G",
      "Alex David S",
      "V Loganathan",
      "E Padma",
      "S Ilavarasan",
      "Subash A"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Ayyappan G, Alex David S, V Loganathan, E Padma, S Ilavarasan and Subash A, explores the development and application of advanced systems in 'Federated Learning and Edge AI for Privacy-Preserving Diabetes Prediction in Healthcare'. Published in '2025 3rd International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "federated",
      "learning",
      "privacy-preserving",
      "diabetes",
      "prediction",
      "healthcare"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-119",
    "title": "Classifying COVID-19 Severity from Chest X-rays Using Machine Learning Techniques",
    "authors": [
      "Maher F. Ismael",
      "Sarmad F. Ismael",
      "Mohammad H. Ismail"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Maher F. Ismael, Sarmad F. Ismael and Mohammad H. Ismail, explores the development and application of advanced systems in 'Classifying COVID-19 Severity from Chest X-rays Using Machine Learning Techniques'. Published in '2025 10th International Conference on Computer Science and Engineering (UBMK)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "classifying",
      "covid-19",
      "severity",
      "chest",
      "x-rays",
      "machine",
      "learning"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-120",
    "title": "FUN-AD: Fully Unsupervised Learning for Anomaly Detection with Noisy Training Data",
    "authors": [
      "Jiin Im",
      "Yongho Son",
      "Je Hyeong Hong"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Jiin Im, Yongho Son and Je Hyeong Hong, explores the development and application of advanced systems in 'FUN-AD: Fully Unsupervised Learning for Anomaly Detection with Noisy Training Data'. Published in '2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "fun-ad",
      "fully",
      "unsupervised",
      "learning",
      "anomaly",
      "detection",
      "noisy"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-121",
    "title": "Enhanced Neural Architecture Search with Multi-Dimensional Curriculum Learning for Defect Detection",
    "authors": [
      "Yibo Yong",
      "Lianbo Ma"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Yibo Yong and Lianbo Ma, explores the development and application of advanced systems in 'Enhanced Neural Architecture Search with Multi-Dimensional Curriculum Learning for Defect Detection'. Published in '2025 International Joint Conference on Neural Networks (IJCNN)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "enhanced",
      "neural",
      "architecture",
      "search",
      "multi-dimensional",
      "curriculum",
      "learning"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-122",
    "title": "Quantum Machine Learning and Grover's Algorithm for Quantum Optimization of Robotic Manipulators",
    "authors": [
      "Hassen Nigatu",
      "Gaokun Shi",
      "Jituo Li",
      "Jin Wang",
      "Guodong Lu",
      "Howard Li"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Hassen Nigatu, Gaokun Shi, Jituo Li, Jin Wang, Guodong Lu and Howard Li, explores the development and application of advanced systems in 'Quantum Machine Learning and Grover's Algorithm for Quantum Optimization of Robotic Manipulators'. Published in 'IEEE Robotics and Automation Letters' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "quantum",
      "machine",
      "learning",
      "grover's",
      "algorithm",
      "optimization",
      "robotic"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-123",
    "title": "Teacher-Designed AI for Personalized Learning: Evidence from Roma Students in Spain",
    "authors": [
      "Laia Navarro-Sola",
      "Luc\u00c3\u00ada Cobreros",
      "Antonio Rold\u00c3\u00a1n-Mon\u00c3\u00a9s"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Laia Navarro-Sola, Luc\u00c3\u00ada Cobreros and Antonio Rold\u00c3\u00a1n-Mon\u00c3\u00a9s, explores the development and application of advanced systems in 'Teacher-Designed AI for Personalized Learning: Evidence from Roma Students in Spain'. Published in 'AEA Randomized Controlled Trials' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "teacher-designed",
      "personalized",
      "learning",
      "evidence",
      "students",
      "spain"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-124",
    "title": "A Project-Based Learning Approach: Validating an Instructional Supplement for Phys-Fluids",
    "authors": [
      "Rahyu Setiani",
      "Rohmatus Syafi\u00e2\u20ac\u2122ah",
      "Dwikoranto",
      "Ajar Dirgantoro",
      "Diesty Hayuhantika"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Rahyu Setiani, Rohmatus Syafi\u00e2\u20ac\u2122ah, Dwikoranto, Ajar Dirgantoro and Diesty Hayuhantika, explores the development and application of advanced systems in 'A Project-Based Learning Approach: Validating an Instructional Supplement for Phys-Fluids'. Published in 'BICONE (Bhinneka International Conference)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "project-based",
      "learning",
      "approach",
      "validating",
      "instructional",
      "supplement",
      "phys-fluids"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-125",
    "title": "Learning as a missing component of digital health, environment and climate change",
    "authors": [
      "Maeghan Orton",
      "Gabrielle Samuel",
      "Mats Blakstad",
      "Peter Benjamin",
      "Javier Elkin",
      "Oscar Franco-Suarez",
      "Felix Holl",
      "Sarah J. Iribarren",
      "Richard Holman Matanta",
      "Kimberly A. Hill",
      "Matt Hulse",
      "Dimitrios Kalogeropoulos",
      "Andrew Karlyn",
      "Tanjir Rashid Soron",
      "Anicia Santos",
      "Temitayo Tella-Lah",
      "Peter Drury"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Maeghan Orton, Gabrielle Samuel, Mats Blakstad, Peter Benjamin, Javier Elkin, Oscar Franco-Suarez, Felix Holl, Sarah J. Iribarren, Richard Holman Matanta, Kimberly A. Hill, Matt Hulse, Dimitrios Kalogeropoulos, Andrew Karlyn, Tanjir Rashid Soron, Anicia Santos, Temitayo Tella-Lah and Peter Drury, explores the development and application of advanced systems in 'Learning as a missing component of digital health, environment and climate change'. Published in 'npj Digital Medicine' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "learning",
      "missing",
      "component",
      "digital",
      "health",
      "environment",
      "climate"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-126",
    "title": "On the Machines as Subjects\u00e2\u20ac\u201dBased on the Uninterpretability of Machine Learning",
    "authors": [
      "\u00e5\u00ad\u0090\u00e8\u00be\u00b0 \u00e6\u009d\u00a8"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by \u00e5\u00ad\u0090\u00e8\u00be\u00b0 \u00e6\u009d\u00a8, explores the development and application of advanced systems in 'On the Machines as Subjects\u00e2\u20ac\u201dBased on the Uninterpretability of Machine Learning'. Published in 'Advances in Philosophy' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machines",
      "subjects\u00e2\u20ac\u201dbased",
      "uninterpretability",
      "machine",
      "learning"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-127",
    "title": "PREDIKSI PERTUMBUHAN TUMOR KANKER PAYUDARA MENGGUNAKAN MODEL REGRESI LINEAR BERBASIS MACHINE LEARNING",
    "authors": [
      "Noncy Nurzilla"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Noncy Nurzilla, explores the development and application of advanced systems in 'PREDIKSI PERTUMBUHAN TUMOR KANKER PAYUDARA MENGGUNAKAN MODEL REGRESI LINEAR BERBASIS MACHINE LEARNING'. Published in 'Journal of Artificial Intelligence Application' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "prediksi",
      "pertumbuhan",
      "tumor",
      "kanker",
      "payudara",
      "menggunakan",
      "model"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-128",
    "title": "Integrating nontraditional assignments to enhance public policy students\u00e2\u20ac\u2122 learning of quantitative methods",
    "authors": [
      "Jungwon Yeo",
      "Olga Pysmenna"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Jungwon Yeo and Olga Pysmenna, explores the development and application of advanced systems in 'Integrating nontraditional assignments to enhance public policy students\u00e2\u20ac\u2122 learning of quantitative methods'. Published in 'Teaching Public Policy' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "integrating",
      "nontraditional",
      "assignments",
      "enhance",
      "public",
      "policy",
      "students\u00e2\u20ac\u2122"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-129",
    "title": "Toward a physics-guided machine learning approach for predicting chaotic systems dynamics",
    "authors": [
      "Liu Feng",
      "Yang Liu",
      "Benyun Shi",
      "Jiming Liu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Liu Feng, Yang Liu, Benyun Shi and Jiming Liu, explores the development and application of advanced systems in 'Toward a physics-guided machine learning approach for predicting chaotic systems dynamics'. Published in 'Frontiers in Big Data' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "toward",
      "physics-guided",
      "machine",
      "learning",
      "approach",
      "predicting",
      "chaotic"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-130",
    "title": "Mechanism-Driven Features Enable Asn Deamidation Reactivity Prediction via Machine Learning Methods",
    "authors": [
      "Maria Laura De Sciscio",
      "Rosa De Troia",
      "Joann Kervadec",
      "Fabio Centola",
      "Simona Saporiti",
      "Muriel Priault",
      "Marco D\u00e2\u20ac\u2122Abramo"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Maria Laura De Sciscio, Rosa De Troia, Joann Kervadec, Fabio Centola, Simona Saporiti, Muriel Priault and Marco D\u00e2\u20ac\u2122Abramo, explores the development and application of advanced systems in 'Mechanism-Driven Features Enable Asn Deamidation Reactivity Prediction via Machine Learning Methods'. Published in 'Journal of Chemical Information and Modeling' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "mechanism-driven",
      "features",
      "enable",
      "deamidation",
      "reactivity",
      "prediction",
      "machine"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-131",
    "title": "Large-scale Online Science and Engineering Professional Learning for Rural Elementary Teachers",
    "authors": [
      "Tugba Boz",
      "Min Jung Lee",
      "Meghan Macias",
      "Ryan Summers",
      "Maria Zaman",
      "Martha Inouye",
      "Julie Robinson",
      "Rebekah Hammack"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Tugba Boz, Min Jung Lee, Meghan Macias, Ryan Summers, Maria Zaman, Martha Inouye, Julie Robinson and Rebekah Hammack, explores the development and application of advanced systems in 'Large-scale Online Science and Engineering Professional Learning for Rural Elementary Teachers'. Published in 'Research in Science Education' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "large-scale",
      "online",
      "science",
      "engineering",
      "professional",
      "learning",
      "rural"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-132",
    "title": "AN ADVANCED APPROACH FOR DETECTING BEHAVIOR BASED INTRANET ATTACKS BY MACHINE LEARNING",
    "authors": [
      "Mr. B. Mohan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Mr. B. Mohan, explores the development and application of advanced systems in 'AN ADVANCED APPROACH FOR DETECTING BEHAVIOR BASED INTRANET ATTACKS BY MACHINE LEARNING'. Published in 'INTERNATIONAL JOURNAL OF SCIENTIFIC RESEARCH IN ENGINEERING AND MANAGEMENT' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "advanced",
      "approach",
      "detecting",
      "behavior",
      "intranet",
      "attacks",
      "machine"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-133",
    "title": "Reading Aid for Individuals with Learning Disabilities Using Text to Speech Technology",
    "authors": [
      "Akshaya Ajith",
      "Alokh K",
      "Anusree A",
      "Arathi M"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Akshaya Ajith, Alokh K, Anusree A and Arathi M, explores the development and application of advanced systems in 'Reading Aid for Individuals with Learning Disabilities Using Text to Speech Technology'. Published in 'INTERANTIONAL JOURNAL OF SCIENTIFIC RESEARCH IN ENGINEERING AND MANAGEMENT' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "reading",
      "individuals",
      "learning",
      "disabilities",
      "speech",
      "technology"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-134",
    "title": "Evaluating Machine Learning Algorithms for Detecting Online Text-based Fake News Content",
    "authors": [
      "Deni Kurnianto Nugroho",
      "Marwan Noor Fauzy",
      "Kardilah Rohmat Hidayat"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Deni Kurnianto Nugroho, Marwan Noor Fauzy and Kardilah Rohmat Hidayat, explores the development and application of advanced systems in 'Evaluating Machine Learning Algorithms for Detecting Online Text-based Fake News Content'. Published in 'International Journal of Computer and Information System (IJCIS)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "evaluating",
      "machine",
      "learning",
      "algorithms",
      "detecting",
      "online",
      "text-based"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-135",
    "title": "Evaluating ChatGPT\u00e2\u20ac\u2122s Reliability in Grading Writing Assignments on the EOP Learning Platform",
    "authors": [
      "Yen Van Tran",
      "Thi Huong Giang Le"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Yen Van Tran and Thi Huong Giang Le, explores the development and application of advanced systems in 'Evaluating ChatGPT\u00e2\u20ac\u2122s Reliability in Grading Writing Assignments on the EOP Learning Platform'. Published in 'ICTE Conference Proceedings' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "evaluating",
      "chatgpt\u00e2\u20ac\u2122s",
      "reliability",
      "grading",
      "writing",
      "assignments",
      "learning"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-136",
    "title": "Examining the Impact of Mathematical Critical Thinking Skills on Matrix Learning Outcomes",
    "authors": [
      "Majid Majid",
      "Fahri Katuri",
      "Kartin Usman",
      "Syafrudin Katili"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Majid Majid, Fahri Katuri, Kartin Usman and Syafrudin Katili, explores the development and application of advanced systems in 'Examining the Impact of Mathematical Critical Thinking Skills on Matrix Learning Outcomes'. Published in 'AL-ISHLAH: Jurnal Pendidikan' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "examining",
      "impact",
      "mathematical",
      "critical",
      "thinking",
      "skills",
      "matrix"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-137",
    "title": "Challenges and opportunities of interactive learning in addressing sexual harassment in policing",
    "authors": [
      "Laufey Axelsd\u00c3\u00b3ttir",
      "Finnborg Salome Stein\u00c3\u00be\u00c3\u00b3rsd\u00c3\u00b3ttir",
      "Gy\u00c3\u00b0a Margr\u00c3\u00a9t P\u00c3\u00a9tursd\u00c3\u00b3ttir"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Laufey Axelsd\u00c3\u00b3ttir, Finnborg Salome Stein\u00c3\u00be\u00c3\u00b3rsd\u00c3\u00b3ttir and Gy\u00c3\u00b0a Margr\u00c3\u00a9t P\u00c3\u00a9tursd\u00c3\u00b3ttir, explores the development and application of advanced systems in 'Challenges and opportunities of interactive learning in addressing sexual harassment in policing'. Published in 'Education Inquiry' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "challenges",
      "opportunities",
      "interactive",
      "learning",
      "addressing",
      "sexual",
      "harassment"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-138",
    "title": "Prompt-Driven Multitask Learning With Task Tokens for ORSI Salient Object Detection",
    "authors": [
      "Huilan Luo",
      "Jianlong He",
      "Shuxin Yang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Huilan Luo, Jianlong He and Shuxin Yang, explores the development and application of advanced systems in 'Prompt-Driven Multitask Learning With Task Tokens for ORSI Salient Object Detection'. Published in 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "prompt-driven",
      "multitask",
      "learning",
      "tokens",
      "salient",
      "object",
      "detection"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-139",
    "title": "Mapping Impact: Student Perceptions of Learning in the honours Year 3 Track",
    "authors": [
      "Isabel Sole Subirats",
      "Vera Adriaanse"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Isabel Sole Subirats and Vera Adriaanse, explores the development and application of advanced systems in 'Mapping Impact: Student Perceptions of Learning in the honours Year 3 Track'. Published in 'Journal of the European Honors Council' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "mapping",
      "impact",
      "student",
      "perceptions",
      "learning",
      "honours",
      "track"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-140",
    "title": "Integrating Problem-Based Learning to Develop Critical Thinking Competencies in Secondary Education",
    "authors": [
      "Baso Intang Sappaile",
      "Mokhammad Wahyudin",
      "Ahmadin Ahmadin",
      "Lindawati Lindawati",
      "Happy Kusuma Wardani"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Baso Intang Sappaile, Mokhammad Wahyudin, Ahmadin Ahmadin, Lindawati Lindawati and Happy Kusuma Wardani, explores the development and application of advanced systems in 'Integrating Problem-Based Learning to Develop Critical Thinking Competencies in Secondary Education'. Published in 'International Journal of Educational Research Excellence (IJERE)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "integrating",
      "problem-based",
      "learning",
      "develop",
      "critical",
      "thinking",
      "competencies"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-141",
    "title": "Beyond Domain Dependency: Evaluating Machine Learning Models for Cross-Domain Sentiment Classification",
    "authors": [
      "Jantima Polpinij",
      "Thananchai Khamket",
      "Chumsak Sibunruang",
      "Anirut Chottanom",
      "Jatuphum Juanchaiyaphum",
      "Theeraya Uttha",
      "Satitiphong Ua-Areemit",
      "Bancha Luaphol",
      "Khanista Namee"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Jantima Polpinij, Thananchai Khamket, Chumsak Sibunruang, Anirut Chottanom, Jatuphum Juanchaiyaphum, Theeraya Uttha, Satitiphong Ua-Areemit, Bancha Luaphol and Khanista Namee, explores the development and application of advanced systems in 'Beyond Domain Dependency: Evaluating Machine Learning Models for Cross-Domain Sentiment Classification'. Published in 'Lecture Notes in Networks and Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "beyond",
      "domain",
      "dependency",
      "evaluating",
      "machine",
      "learning",
      "models"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-142",
    "title": "A Machine Learning Approach to Solve the DC Optimal Power Flow Problem",
    "authors": [
      "Runsheng He",
      "Waqquas Bukhsh",
      "Shengming Cao",
      "Bruce Stephen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Runsheng He, Waqquas Bukhsh, Shengming Cao and Bruce Stephen, explores the development and application of advanced systems in 'A Machine Learning Approach to Solve the DC Optimal Power Flow Problem'. Published in '2025 10th IEEE Workshop on the Electronic Grid (eGRID)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "approach",
      "solve",
      "optimal",
      "power",
      "problem"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-143",
    "title": "History learning as a reinforcement of sustainable development awareness: A literature review",
    "authors": [
      "Arditya Prayogi",
      "Riki Nasrullah"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Arditya Prayogi and Riki Nasrullah, explores the development and application of advanced systems in 'History learning as a reinforcement of sustainable development awareness: A literature review'. Published in 'Arshaka: Pedagogy and Learning Review' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "history",
      "learning",
      "reinforcement",
      "sustainable",
      "development",
      "awareness",
      "literature"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-144",
    "title": "Learning Heterogeneous Tissues with Mixture of Experts for Gigapixel Whole Slide Images",
    "authors": [
      "Junxian Wu",
      "Minheng Chen",
      "Xinyi Ke",
      "Tianwang Xun",
      "Xiaoming Jiang",
      "Hongyu Zhou",
      "Lizhi Shao",
      "Youyong Kong"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Junxian Wu, Minheng Chen, Xinyi Ke, Tianwang Xun, Xiaoming Jiang, Hongyu Zhou, Lizhi Shao and Youyong Kong, explores the development and application of advanced systems in 'Learning Heterogeneous Tissues with Mixture of Experts for Gigapixel Whole Slide Images'. Published in '2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "learning",
      "heterogeneous",
      "tissues",
      "mixture",
      "experts",
      "gigapixel",
      "whole"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-145",
    "title": "Dual Enhanced Meta-Learning With Adaptive Task Scheduler for Cold-Start Recommendation",
    "authors": [
      "Dongxiao He",
      "Jiaqi Cui",
      "Xiaobao Wang",
      "Guojie Song",
      "Yuxiao Huang",
      "Lingfei Wu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Dongxiao He, Jiaqi Cui, Xiaobao Wang, Guojie Song, Yuxiao Huang and Lingfei Wu, explores the development and application of advanced systems in 'Dual Enhanced Meta-Learning With Adaptive Task Scheduler for Cold-Start Recommendation'. Published in 'IEEE Transactions on Knowledge and Data Engineering' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "enhanced",
      "meta-learning",
      "adaptive",
      "scheduler",
      "cold-start",
      "recommendation"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-146",
    "title": "Machine Learning-Driven Optimization for Digital Transformation in Non-thermal Food Processing",
    "authors": [
      "Mahdi Rashvand",
      "Nahal Dehkharghanian",
      "Mehrad Nikzadfar",
      "Tasmiyah Javed",
      "Leo Pappukutty Luke",
      "Alexander O\u00e2\u20ac\u2122Brien",
      "Alex Shenfield",
      "Francesco Genovese",
      "Attilio Matera",
      "Giuseppe Altieri",
      "Giovanni Carlo Di Renzo",
      "Hongwei Zhang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Mahdi Rashvand, Nahal Dehkharghanian, Mehrad Nikzadfar, Tasmiyah Javed, Leo Pappukutty Luke, Alexander O\u00e2\u20ac\u2122Brien, Alex Shenfield, Francesco Genovese, Attilio Matera, Giuseppe Altieri, Giovanni Carlo Di Renzo and Hongwei Zhang, explores the development and application of advanced systems in 'Machine Learning-Driven Optimization for Digital Transformation in Non-thermal Food Processing'. Published in 'Food and Bioprocess Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning-driven",
      "optimization",
      "digital",
      "transformation",
      "non-thermal",
      "processing"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-147",
    "title": "Engineering Students\u00e2\u20ac\u2122 Initial Use Schemes of ChatGPT as an Instrument for Learning",
    "authors": [
      "Zeger-jan Kock",
      "Ulises Salinas-Hern\u00c3\u00a1ndez",
      "Birgit Pepin"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Zeger-jan Kock, Ulises Salinas-Hern\u00c3\u00a1ndez and Birgit Pepin, explores the development and application of advanced systems in 'Engineering Students\u00e2\u20ac\u2122 Initial Use Schemes of ChatGPT as an Instrument for Learning'. Published in 'Digital Experiences in Mathematics Education' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "engineering",
      "students\u00e2\u20ac\u2122",
      "initial",
      "schemes",
      "chatgpt",
      "instrument",
      "learning"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-148",
    "title": "Jointly Optimizing Deployment and Antenna of Base Stations Using Hierarchical Reinforcement Learning",
    "authors": [
      "Weikang Su",
      "Haoqiang Liu",
      "Tong Li",
      "Xingzai Lv",
      "Hua Rui",
      "Wenzhen Huang",
      "Zhaocheng Wang",
      "Yong Li"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Weikang Su, Haoqiang Liu, Tong Li, Xingzai Lv, Hua Rui, Wenzhen Huang, Zhaocheng Wang and Yong Li, explores the development and application of advanced systems in 'Jointly Optimizing Deployment and Antenna of Base Stations Using Hierarchical Reinforcement Learning'. Published in 'ACM Transactions on Knowledge Discovery from Data' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "jointly",
      "optimizing",
      "deployment",
      "antenna",
      "stations",
      "hierarchical",
      "reinforcement"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-149",
    "title": "Photovoltaic Power Forecasting Using Multi-task Learning Considering Spatio-Temporal Coupling Relationship",
    "authors": [
      "Cong Li",
      "Meijie Wu",
      "Yan Wu",
      "Zhen Zhang",
      "YunYi Qin",
      "Kaihua Sun"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Cong Li, Meijie Wu, Yan Wu, Zhen Zhang, YunYi Qin and Kaihua Sun, explores the development and application of advanced systems in 'Photovoltaic Power Forecasting Using Multi-task Learning Considering Spatio-Temporal Coupling Relationship'. Published in 'Lecture Notes in Electrical Engineering' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "photovoltaic",
      "power",
      "forecasting",
      "multi-task",
      "learning",
      "considering",
      "spatio-temporal"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-150",
    "title": "INTERDISCIPLINARY LEARNING IN THE ERA OF GLOBALIZATION: STEAM APPROACH IN MUSIC EDUCATION",
    "authors": [
      "",
      "Tatjana Milosavljevi\u00c4\u2021 \u00c4\u0090uki\u00c4\u2021",
      "Teodora Kragovi\u00c4\u2021",
      "",
      "Aleksandar Stojadinovi\u00c4\u2021",
      "",
      "Ana Spasi\u00c4\u2021 Stosi\u00c4\u2021",
      ""
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by , Tatjana Milosavljevi\u00c4\u2021 \u00c4\u0090uki\u00c4\u2021, Teodora Kragovi\u00c4\u2021, , Aleksandar Stojadinovi\u00c4\u2021, , Ana Spasi\u00c4\u2021 Stosi\u00c4\u2021 and , explores the development and application of advanced systems in 'INTERDISCIPLINARY LEARNING IN THE ERA OF GLOBALIZATION: STEAM APPROACH IN MUSIC EDUCATION'. Published in 'Innovative and adaptive teaching practices for modern education : Book of proceedings' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "interdisciplinary",
      "learning",
      "globalization",
      "steam",
      "approach",
      "music",
      "education"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-151",
    "title": "Prediction of Lung Metastasis in Breast Cancer Patients Using Machine Learning Classifiers",
    "authors": [
      "Thanh Dat Nguyen",
      "Quynh-Mai Thi Nguyen",
      "Tuong Van Nguyen",
      "Phuong Thi Bui",
      "Kim Nhuong Thi Nguyen",
      "Minh Nam Nguyen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Thanh Dat Nguyen, Quynh-Mai Thi Nguyen, Tuong Van Nguyen, Phuong Thi Bui, Kim Nhuong Thi Nguyen and Minh Nam Nguyen, explores the development and application of advanced systems in 'Prediction of Lung Metastasis in Breast Cancer Patients Using Machine Learning Classifiers'. Published in 'The Journal of Molecular Diagnostics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "prediction",
      "metastasis",
      "breast",
      "cancer",
      "patients",
      "machine",
      "learning"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-152",
    "title": "Machine learning descriptors for CO activation on iron-based Fischer\u00e2\u20ac\u00af\u00e2\u02c6\u2019\u00e2\u20ac\u00afTropsch catalysts",
    "authors": [
      "Yuhan Lin",
      "Ushna",
      "Quan Lin",
      "Chongyang Wei",
      "Yue Wang",
      "Shouying Huang",
      "Xing Chen",
      "Xinbin Ma"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Yuhan Lin, Ushna, Quan Lin, Chongyang Wei, Yue Wang, Shouying Huang, Xing Chen and Xinbin Ma, explores the development and application of advanced systems in 'Machine learning descriptors for CO activation on iron-based Fischer\u00e2\u20ac\u00af\u00e2\u02c6\u2019\u00e2\u20ac\u00afTropsch catalysts'. Published in 'Journal of Catalysis' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "descriptors",
      "activation",
      "iron-based",
      "fischer\u00e2\u20ac\u00af\u00e2\u02c6\u2019\u00e2\u20ac\u00aftropsch",
      "catalysts"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-153",
    "title": "Informal learning of ICU new graduate registered nurses: An interpretive phenomenological analysis",
    "authors": [
      "Changying Liu",
      "Ying Yang",
      "Qing Zhang",
      "Yan Ma"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Changying Liu, Ying Yang, Qing Zhang and Yan Ma, explores the development and application of advanced systems in 'Informal learning of ICU new graduate registered nurses: An interpretive phenomenological analysis'. Published in 'Nurse Education Today' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "informal",
      "learning",
      "graduate",
      "registered",
      "nurses",
      "interpretive",
      "phenomenological"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-154",
    "title": "Transfer learning based fast generation method of practical dynamic security region boundary",
    "authors": [
      "Yanli Liu",
      "Ziwen Jia",
      "Ruipeng Jia",
      "Wei Xu",
      "Weilun Ni"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Yanli Liu, Ziwen Jia, Ruipeng Jia, Wei Xu and Weilun Ni, explores the development and application of advanced systems in 'Transfer learning based fast generation method of practical dynamic security region boundary'. Published in 'International Journal of Electrical Power &amp; Energy Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "transfer",
      "learning",
      "generation",
      "method",
      "practical",
      "dynamic",
      "security"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-155",
    "title": "THE IMPACT OF MARKET, LEARNING, AND ENTREPRENEURIAL ORIENTATIONS ON NIGERIAN SMES' PERFORMANCE",
    "authors": [
      "Kabiru Sa'ad Sa'id",
      "Asmat-Nizam Abdul-Talib",
      "Rohail Hassan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Kabiru Sa'ad Sa'id, Asmat-Nizam Abdul-Talib and Rohail Hassan, explores the development and application of advanced systems in 'THE IMPACT OF MARKET, LEARNING, AND ENTREPRENEURIAL ORIENTATIONS ON NIGERIAN SMES' PERFORMANCE'. Published in 'Sohar University Journal of Sustainable Business' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "impact",
      "market",
      "learning",
      "entrepreneurial",
      "orientations",
      "nigerian",
      "performance"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-156",
    "title": "A Comprehensive Survey on Split-Fed Learning: Methods, Innovations, and Future Directions",
    "authors": [
      "Geetabai S. Hukkeri",
      "R. H. Goudar",
      "G. M. Dhananjaya",
      "Vijayalaxmi N. Rathod",
      "Shilpa Ankalaki"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Geetabai S. Hukkeri, R. H. Goudar, G. M. Dhananjaya, Vijayalaxmi N. Rathod and Shilpa Ankalaki, explores the development and application of advanced systems in 'A Comprehensive Survey on Split-Fed Learning: Methods, Innovations, and Future Directions'. Published in 'IEEE Access' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "comprehensive",
      "survey",
      "split-fed",
      "learning",
      "methods",
      "innovations",
      "future"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-157",
    "title": "Enhancing 3D Printing Workflows through Multi-Objective Optimization and Reinforcement Learning Techniques",
    "authors": [
      "Ahmad Alghamdi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Ahmad Alghamdi, explores the development and application of advanced systems in 'Enhancing 3D Printing Workflows through Multi-Objective Optimization and Reinforcement Learning Techniques'. Published in 'Engineering, Technology &amp; Applied Science Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "enhancing",
      "printing",
      "workflows",
      "multi-objective",
      "optimization",
      "reinforcement",
      "learning"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-158",
    "title": "Specific energy consumption of seawater reverse osmosis desalination plants using machine learning",
    "authors": [
      "Chen Wang",
      "Li Wang",
      "Linyinxue Dong",
      "Ho Kyong Shon",
      "Jungbin Kim"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Chen Wang, Li Wang, Linyinxue Dong, Ho Kyong Shon and Jungbin Kim, explores the development and application of advanced systems in 'Specific energy consumption of seawater reverse osmosis desalination plants using machine learning'. Published in 'Desalination' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "specific",
      "energy",
      "consumption",
      "seawater",
      "reverse",
      "osmosis",
      "desalination"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-159",
    "title": "Computation and Communication Efficient Lightweighting Vertical Federated Learning for Smart Building IoT",
    "authors": [
      "Heqiang Wang",
      "Xiang Liu",
      "Yucheng Liu",
      "Jia Zhou",
      "Weihong Yang",
      "Xiaoxiong Zhong"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Heqiang Wang, Xiang Liu, Yucheng Liu, Jia Zhou, Weihong Yang and Xiaoxiong Zhong, explores the development and application of advanced systems in 'Computation and Communication Efficient Lightweighting Vertical Federated Learning for Smart Building IoT'. Published in '2025 IEEE 23rd International Conference on Industrial Informatics (INDIN)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "computation",
      "communication",
      "efficient",
      "lightweighting",
      "vertical",
      "federated",
      "learning"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-160",
    "title": "Predicting harvesting efficiency of microalgae with magnetic nanoparticles using machine learning models",
    "authors": [
      "Yu Fu",
      "Qingran Zhang",
      "Zhengying Tan",
      "Songxia Yu",
      "Yi Zhang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Yu Fu, Qingran Zhang, Zhengying Tan, Songxia Yu and Yi Zhang, explores the development and application of advanced systems in 'Predicting harvesting efficiency of microalgae with magnetic nanoparticles using machine learning models'. Published in 'Journal of Environmental Chemical Engineering' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "predicting",
      "harvesting",
      "efficiency",
      "microalgae",
      "magnetic",
      "nanoparticles",
      "machine"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-161",
    "title": "A lightweight few-shot learning model for crop pest and disease identification",
    "authors": [
      "Linsen Wei",
      "Jingjun Tang",
      "Jinxiu Chen",
      "Carine Pierrette Mukamakuza",
      "Defu Zhang",
      "Tong Zhang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Linsen Wei, Jingjun Tang, Jinxiu Chen, Carine Pierrette Mukamakuza, Defu Zhang and Tong Zhang, explores the development and application of advanced systems in 'A lightweight few-shot learning model for crop pest and disease identification'. Published in 'Artificial Intelligence Review' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "lightweight",
      "few-shot",
      "learning",
      "model",
      "disease",
      "identification"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-162",
    "title": "Reliability-enhanced data cleaning in biomedical machine learning using inductive\nconformal prediction",
    "authors": [
      "Xianghao Zhan",
      "Qinmei Xu",
      "Yuanning Zheng",
      "Guangming Lu",
      "Olivier Gevaert"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Xianghao Zhan, Qinmei Xu, Yuanning Zheng, Guangming Lu and Olivier Gevaert, explores the development and application of advanced systems in 'Reliability-enhanced data cleaning in biomedical machine learning using inductive\nconformal prediction'. Published in 'PLOS Computational Biology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "reliability-enhanced",
      "cleaning",
      "biomedical",
      "machine",
      "learning",
      "inductive",
      "conformal"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-163",
    "title": "Northern Hemisphere Midlatitude Cyclone Intensity Biases in Machine Learning Weather Prediction Models",
    "authors": [
      "H. F. Dacre",
      "A. J. Charlton-Perez",
      "S. Driscoll",
      "S. L. Gray",
      "B. Harvey",
      "N. J. Harvey",
      "K. I. Hodges",
      "K. M. R. Hunt",
      "A. Volont\u00c3\u00a9"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by H. F. Dacre, A. J. Charlton-Perez, S. Driscoll, S. L. Gray, B. Harvey, N. J. Harvey, K. I. Hodges, K. M. R. Hunt and A. Volont\u00c3\u00a9, explores the development and application of advanced systems in 'Northern Hemisphere Midlatitude Cyclone Intensity Biases in Machine Learning Weather Prediction Models'. Published in 'Bulletin of the American Meteorological Society' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "northern",
      "hemisphere",
      "midlatitude",
      "cyclone",
      "intensity",
      "biases",
      "machine"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-164",
    "title": "Social learning among the Raute, a nomadic hunter-gatherer community in Nepal",
    "authors": [
      "Man Bahadur Shahu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Man Bahadur Shahu, explores the development and application of advanced systems in 'Social learning among the Raute, a nomadic hunter-gatherer community in Nepal'. Published in 'Hunter Gatherer Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "social",
      "learning",
      "among",
      "raute",
      "nomadic",
      "hunter-gatherer",
      "community"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-165",
    "title": "Structural optimization design of dimple plate heat exchanger based on machine learning",
    "authors": [
      "Yicong Li",
      "Kim Tiow Ooi",
      "Lin He",
      "Shunan Zhao",
      "Qing Luo",
      "Wei Liu",
      "Zhichun Liu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Yicong Li, Kim Tiow Ooi, Lin He, Shunan Zhao, Qing Luo, Wei Liu and Zhichun Liu, explores the development and application of advanced systems in 'Structural optimization design of dimple plate heat exchanger based on machine learning'. Published in 'International Communications in Heat and Mass Transfer' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "structural",
      "optimization",
      "design",
      "dimple",
      "plate",
      "exchanger",
      "machine"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-166",
    "title": "Machine learning study on the structural evolution of high-nickel layered cathodes",
    "authors": [
      "Yuqi Wang",
      "Wei Shao",
      "Haishun Jin",
      "Qiang Wang",
      "Ruijuan Xiao",
      "Hong Li"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Yuqi Wang, Wei Shao, Haishun Jin, Qiang Wang, Ruijuan Xiao and Hong Li, explores the development and application of advanced systems in 'Machine learning study on the structural evolution of high-nickel layered cathodes'. Published in 'Materials Today Energy' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "study",
      "structural",
      "evolution",
      "high-nickel",
      "layered"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-167",
    "title": "Incremental self-supervised learning based on transformer for anomaly detection and localization",
    "authors": [
      "Wenping Jin",
      "Fei Guo",
      "Qi Wu",
      "Li Zhu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Wenping Jin, Fei Guo, Qi Wu and Li Zhu, explores the development and application of advanced systems in 'Incremental self-supervised learning based on transformer for anomaly detection and localization'. Published in 'Engineering Applications of Artificial Intelligence' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "incremental",
      "self-supervised",
      "learning",
      "transformer",
      "anomaly",
      "detection",
      "localization"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-168",
    "title": "Machine learning in the prediction of diabetic peripheral neuropathy: a systematic review",
    "authors": [
      "Yueying Ma",
      "Zhiying Wang",
      "Zheng Yao",
      "Bin Lu",
      "Yanming He"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Yueying Ma, Zhiying Wang, Zheng Yao, Bin Lu and Yanming He, explores the development and application of advanced systems in 'Machine learning in the prediction of diabetic peripheral neuropathy: a systematic review'. Published in 'BMC Medical Informatics and Decision Making' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "prediction",
      "diabetic",
      "peripheral",
      "neuropathy",
      "systematic"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-169",
    "title": "Using machine learning models to forecast methane emissions from agriculture in India",
    "authors": [
      "Palanichamy Narasimma Bharathi Venkatesa",
      "Muthuswamy Kalpana",
      "Natarajan Balakrishnan",
      "Vasudevan Balamurugan",
      "Appavu Suresh",
      "Marimuthu Rajavel",
      "Rajaram Dhivya"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Palanichamy Narasimma Bharathi Venkatesa, Muthuswamy Kalpana, Natarajan Balakrishnan, Vasudevan Balamurugan, Appavu Suresh, Marimuthu Rajavel and Rajaram Dhivya, explores the development and application of advanced systems in 'Using machine learning models to forecast methane emissions from agriculture in India'. Published in 'Plant Science Today' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "models",
      "forecast",
      "methane",
      "emissions",
      "agriculture"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-170",
    "title": "Hydrogen-assisted fatigue crack growth in pipeline steels: a machine learning approach",
    "authors": [
      "Hamidreza Rohani Raftar",
      "Mahdieh Safyari",
      "Masoud Moshtaghi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Hamidreza Rohani Raftar, Mahdieh Safyari and Masoud Moshtaghi, explores the development and application of advanced systems in 'Hydrogen-assisted fatigue crack growth in pipeline steels: a machine learning approach'. Published in 'Procedia Structural Integrity' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "hydrogen-assisted",
      "fatigue",
      "crack",
      "growth",
      "pipeline",
      "steels",
      "machine"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-171",
    "title": "Three-Stage Progressive Learning for Simplifying Multimodal Emotion Recognition with Singlemodality Inference",
    "authors": [
      "Jianlin Fu",
      "Zhencheng Li",
      "Huqin Weng",
      "Chen Li",
      "Yizhi Luo",
      "Xinhua Li",
      "Chuangquan Chen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Jianlin Fu, Zhencheng Li, Huqin Weng, Chen Li, Yizhi Luo, Xinhua Li and Chuangquan Chen, explores the development and application of advanced systems in 'Three-Stage Progressive Learning for Simplifying Multimodal Emotion Recognition with Singlemodality Inference'. Published in '2025 International Conference on Electronic Information, Computer and Aerospace Remote Sensing (EICARS)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "three-stage",
      "progressive",
      "learning",
      "simplifying",
      "multimodal",
      "emotion",
      "recognition"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-172",
    "title": "Correction: Antenatal preparation as care: birth stories and collective learning at work",
    "authors": [
      "Leah De Quattro"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Leah De Quattro, explores the development and application of advanced systems in 'Correction: Antenatal preparation as care: birth stories and collective learning at work'. Published in 'Frontiers in Global Women's Health' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "correction",
      "antenatal",
      "preparation",
      "birth",
      "stories",
      "collective",
      "learning"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-173",
    "title": "Intelligent Flaw Detection in Eddy Current Inspection Data Through Machine Learning Model",
    "authors": [
      "Tikesh Kumar Sahu",
      "S. Thirunavukkarasu",
      "Anish Kumar"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Tikesh Kumar Sahu, S. Thirunavukkarasu and Anish Kumar, explores the development and application of advanced systems in 'Intelligent Flaw Detection in Eddy Current Inspection Data Through Machine Learning Model'. Published in 'Journal of Nondestructive Evaluation' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "intelligent",
      "detection",
      "current",
      "inspection",
      "machine",
      "learning",
      "model"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-174",
    "title": "AI-Assisted Cyber Curricular Guideline Development: Enhancing Cognitive Rigor in Learning Outcomes",
    "authors": [
      "Paige Zaleppa",
      "Siddharth Kaza",
      "Blair Taylor"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Paige Zaleppa, Siddharth Kaza and Blair Taylor, explores the development and application of advanced systems in 'AI-Assisted Cyber Curricular Guideline Development: Enhancing Cognitive Rigor in Learning Outcomes'. Published in 'Proceedings of the 26th ACM Annual Conference on Cybersecurity &amp; Information Technology Education' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "ai-assisted",
      "cyber",
      "curricular",
      "guideline",
      "development",
      "enhancing",
      "cognitive"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-175",
    "title": "Enhancing 2D hydrodynamic flood models through machine learning and urban drainage integration",
    "authors": [
      "Husamettin Taysi",
      "Y.C. Ethan Yang",
      "Sudershan Gangrade",
      "Taher Chegini",
      "Shih-Chieh Kao",
      "Hong-Yi Li"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Husamettin Taysi, Y.C. Ethan Yang, Sudershan Gangrade, Taher Chegini, Shih-Chieh Kao and Hong-Yi Li, explores the development and application of advanced systems in 'Enhancing 2D hydrodynamic flood models through machine learning and urban drainage integration'. Published in 'Journal of Hydrology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "enhancing",
      "hydrodynamic",
      "flood",
      "models",
      "machine",
      "learning",
      "urban"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-176",
    "title": "Utilizing machine learning for predicting drug release from polymeric drug delivery systems",
    "authors": [
      "Sareh Aghajanpour",
      "Hamid Amiriara",
      "Mehdi Esfandyari-Manesh",
      "Pedram Ebrahimnejad",
      "Haziq Jeelani",
      "Andreas Henschel",
      "Hemant Singh",
      "Rassoul Dinarvand",
      "Shabir Hassan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Sareh Aghajanpour, Hamid Amiriara, Mehdi Esfandyari-Manesh, Pedram Ebrahimnejad, Haziq Jeelani, Andreas Henschel, Hemant Singh, Rassoul Dinarvand and Shabir Hassan, explores the development and application of advanced systems in 'Utilizing machine learning for predicting drug release from polymeric drug delivery systems'. Published in 'Computers in Biology and Medicine' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "utilizing",
      "machine",
      "learning",
      "predicting",
      "release",
      "polymeric",
      "delivery"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-177",
    "title": "Machine learning-enhanced dynamic path decisions for emergency stewards in emergency evacuations",
    "authors": [
      "Peng Yang",
      "Bozheng Zhang",
      "Kai Shi",
      "Yi Hui"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Peng Yang, Bozheng Zhang, Kai Shi and Yi Hui, explores the development and application of advanced systems in 'Machine learning-enhanced dynamic path decisions for emergency stewards in emergency evacuations'. Published in 'Physica A: Statistical Mechanics and its Applications' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning-enhanced",
      "dynamic",
      "decisions",
      "emergency",
      "stewards",
      "evacuations"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-178",
    "title": "Contrastive Learning Framework With Cross-Sensor Adaptive Signal Representation for Fault Diagnosis",
    "authors": [
      "Wenbin He",
      "Jianxu Mao",
      "Yaonan Wang",
      "Zhe Li",
      "Hui Zhang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Wenbin He, Jianxu Mao, Yaonan Wang, Zhe Li and Hui Zhang, explores the development and application of advanced systems in 'Contrastive Learning Framework With Cross-Sensor Adaptive Signal Representation for Fault Diagnosis'. Published in 'IEEE Transactions on Neural Networks and Learning Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "contrastive",
      "learning",
      "framework",
      "cross-sensor",
      "adaptive",
      "signal",
      "representation"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-179",
    "title": "CKDF-V2: Effectively Alleviating Representation Shift for Continual Learning With Small Memory",
    "authors": [
      "Kunchi Li",
      "Hongyang Chen",
      "Jun Wan",
      "Shan Yu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Kunchi Li, Hongyang Chen, Jun Wan and Shan Yu, explores the development and application of advanced systems in 'CKDF-V2: Effectively Alleviating Representation Shift for Continual Learning With Small Memory'. Published in 'IEEE Transactions on Neural Networks and Learning Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "ckdf-v2",
      "effectively",
      "alleviating",
      "representation",
      "shift",
      "continual",
      "learning"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-180",
    "title": "Empower Secondary School Teachers to\u00c2\u00a0Create ML-Supported Inquiry-Based Learning Activities",
    "authors": [
      "Xiaofei Zhou",
      "Hanjia Lyu",
      "Yuxin Sa",
      "Mengfan Li",
      "Advait Sarkar",
      "Jiebo Luo",
      "Michael Daley",
      "Zhen Bai"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Xiaofei Zhou, Hanjia Lyu, Yuxin Sa, Mengfan Li, Advait Sarkar, Jiebo Luo, Michael Daley and Zhen Bai, explores the development and application of advanced systems in 'Empower Secondary School Teachers to\u00c2\u00a0Create ML-Supported Inquiry-Based Learning Activities'. Published in 'Lecture Notes in Computer Science' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "empower",
      "secondary",
      "school",
      "teachers",
      "create",
      "ml-supported",
      "inquiry-based"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-181",
    "title": "The impact of professional integrity on simulation learning outcomes: A systematic review",
    "authors": [
      "Neena Xavier",
      "Jamie Quinn",
      "Brayton Amidon",
      "Roxie Barnes",
      "Sevilla Bronson",
      "Leigh Dunning"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Neena Xavier, Jamie Quinn, Brayton Amidon, Roxie Barnes, Sevilla Bronson and Leigh Dunning, explores the development and application of advanced systems in 'The impact of professional integrity on simulation learning outcomes: A systematic review'. Published in 'Clinical Simulation in Nursing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "impact",
      "professional",
      "integrity",
      "simulation",
      "learning",
      "outcomes",
      "systematic"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-182",
    "title": "Searches for heavy neutral leptons with machine learning at the CMS experiment",
    "authors": [
      "Joscha Knolle",
      ""
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Joscha Knolle and , explores the development and application of advanced systems in 'Searches for heavy neutral leptons with machine learning at the CMS experiment'. Published in 'Proceedings of 12th Large Hadron Collider Physics Conference \u00e2\u20ac\u201d PoS(LHCP2024)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "searches",
      "heavy",
      "neutral",
      "leptons",
      "machine",
      "learning",
      "experiment"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-183",
    "title": "Drivers of Counseling Services Acceptance among Online and Flexible Distance Learning Students",
    "authors": [
      "Zahir Osman",
      "Aliza Ali",
      "Raziana Che Aziz",
      "Fatimah Yusoof"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Zahir Osman, Aliza Ali, Raziana Che Aziz and Fatimah Yusoof, explores the development and application of advanced systems in 'Drivers of Counseling Services Acceptance among Online and Flexible Distance Learning Students'. Published in 'International Journal of Academic Research in Business and Social Sciences' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "drivers",
      "counseling",
      "services",
      "acceptance",
      "among",
      "online",
      "flexible"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-184",
    "title": "How Adversity Quotient and Learning Independence Affect Students' Mathematical Problem-Solving Ability",
    "authors": [
      "Gabariela Purnama Ningsi",
      "Dwi Juniati",
      "Siti Khabibah"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Gabariela Purnama Ningsi, Dwi Juniati and Siti Khabibah, explores the development and application of advanced systems in 'How Adversity Quotient and Learning Independence Affect Students' Mathematical Problem-Solving Ability'. Published in 'VYGOTSKY' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "adversity",
      "quotient",
      "learning",
      "independence",
      "affect",
      "students",
      "mathematical"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-185",
    "title": "Personalizing Learning in The Chatgpt ERA&lt;b&gt;&lt;/b&gt;",
    "authors": [
      "Khoa Ngoc Vo Nguyen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Khoa Ngoc Vo Nguyen, explores the development and application of advanced systems in 'Personalizing Learning in The Chatgpt ERA&lt;b&gt;&lt;/b&gt;'. Published in 'Social Science and Humanities Journal' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "personalizing",
      "learning",
      "chatgpt",
      "era&lt;b&gt;&lt;/b&gt"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-186",
    "title": "Radiomics and machine learning for predicting metachronous liver metastasis in rectal cancer",
    "authors": [
      "Arunkumar Krishnan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Arunkumar Krishnan, explores the development and application of advanced systems in 'Radiomics and machine learning for predicting metachronous liver metastasis in rectal cancer'. Published in 'World Journal of Gastrointestinal Oncology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "radiomics",
      "machine",
      "learning",
      "predicting",
      "metachronous",
      "liver",
      "metastasis"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-187",
    "title": "Accurate user experience estimation through real-time throughput prediction with machine learning",
    "authors": [
      "Ahmed H. Eldeeb",
      "Mohamed Nagah",
      "Hesham Kamel",
      "Wafaa Radi",
      "Sara Fouad"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Ahmed H. Eldeeb, Mohamed Nagah, Hesham Kamel, Wafaa Radi and Sara Fouad, explores the development and application of advanced systems in 'Accurate user experience estimation through real-time throughput prediction with machine learning'. Published in 'Ain Shams Engineering Journal' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "accurate",
      "experience",
      "estimation",
      "real-time",
      "throughput",
      "prediction",
      "machine"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-188",
    "title": "Dynamic graph convolutional networks with Temporal representation learning for traffic flow prediction",
    "authors": [
      "Aihua Zhang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Aihua Zhang, explores the development and application of advanced systems in 'Dynamic graph convolutional networks with Temporal representation learning for traffic flow prediction'. Published in 'Scientific Reports' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "dynamic",
      "graph",
      "convolutional",
      "networks",
      "temporal",
      "representation",
      "learning"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-189",
    "title": "A machine learning based semi-automated framework for house of quality analysis",
    "authors": [
      "Madhumathi Ponnusamy",
      "Tushar Sonvani",
      "Ratri Parida",
      "Gaurav Nanda"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Madhumathi Ponnusamy, Tushar Sonvani, Ratri Parida and Gaurav Nanda, explores the development and application of advanced systems in 'A machine learning based semi-automated framework for house of quality analysis'. Published in 'Computers &amp; Industrial Engineering' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "semi-automated",
      "framework",
      "house",
      "quality",
      "analysis"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-190",
    "title": "Performance analysis of a parallel-counterflow vortex tube using machine learning methods",
    "authors": [
      "Murat Korkmaz",
      "Ayhan Do\u00c4\u0178an",
      "Volkan K\u00c4\u00b1rmac\u00c4\u00b1"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Murat Korkmaz, Ayhan Do\u00c4\u0178an and Volkan K\u00c4\u00b1rmac\u00c4\u00b1, explores the development and application of advanced systems in 'Performance analysis of a parallel-counterflow vortex tube using machine learning methods'. Published in 'Journal of Thermal Analysis and Calorimetry' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "performance",
      "analysis",
      "parallel-counterflow",
      "vortex",
      "machine",
      "learning",
      "methods"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-191",
    "title": "The Role of Machine Learning in Improving the Quality of Academic Outcomes",
    "authors": [
      "Duha Khalid Al-Malah",
      "Wijdan Hasan Hamoody"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Duha Khalid Al-Malah and Wijdan Hasan Hamoody, explores the development and application of advanced systems in 'The Role of Machine Learning in Improving the Quality of Academic Outcomes'. Published in 'Communications in Computer and Information Science' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "improving",
      "quality",
      "academic",
      "outcomes"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-192",
    "title": "Machine Learning and Artificial Intelligence in Otorhinolaryngeology and Physical Medicine and Rehabilitation",
    "authors": [
      "Emre \u00c3\u2013lmez",
      "Orhan ER",
      "Mehmet Kemal G\u00c3\u00bcll\u00c3\u00bc"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Emre \u00c3\u2013lmez, Orhan ER and Mehmet Kemal G\u00c3\u00bcll\u00c3\u00bc, explores the development and application of advanced systems in 'Machine Learning and Artificial Intelligence in Otorhinolaryngeology and Physical Medicine and Rehabilitation'. Published in 'Physical Therapy and Rehabilitation in Otorhinolaryngology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "artificial",
      "intelligence",
      "otorhinolaryngeology",
      "physical",
      "medicine"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-193",
    "title": "Gravity Modeling in Sedimentary Basins With a Mixed Machine Learning\u00e2\u20ac\u201cInversion Method",
    "authors": [
      "Ciro Messina",
      "Luigi Bianco",
      "Mahmoud Ahmed Abbas",
      "Maurizio Fedi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Ciro Messina, Luigi Bianco, Mahmoud Ahmed Abbas and Maurizio Fedi, explores the development and application of advanced systems in 'Gravity Modeling in Sedimentary Basins With a Mixed Machine Learning\u00e2\u20ac\u201cInversion Method'. Published in 'IEEE Transactions on Geoscience and Remote Sensing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "gravity",
      "modeling",
      "sedimentary",
      "basins",
      "mixed",
      "machine",
      "learning\u00e2\u20ac\u201cinversion"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-194",
    "title": "Optimizing Diabetes Care Through Fuzzy Rule-Based Models and Machine Learning Algorithms",
    "authors": [
      "Debaswapna Mishra",
      "Bichitrananda Behera",
      "Sanghamitra Patnaik",
      "Mahendra Kumar Gourisaria",
      "Parthasarathi Pattnayak"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Debaswapna Mishra, Bichitrananda Behera, Sanghamitra Patnaik, Mahendra Kumar Gourisaria and Parthasarathi Pattnayak, explores the development and application of advanced systems in 'Optimizing Diabetes Care Through Fuzzy Rule-Based Models and Machine Learning Algorithms'. Published in '2025 6th International Conference for Emerging Technology (INCET)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "optimizing",
      "diabetes",
      "fuzzy",
      "rule-based",
      "models",
      "machine",
      "learning"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-195",
    "title": "Learning-Based Drag-Free and\u00c2\u00a0Attitude Control of\u00c2\u00a0Spacecraft with\u00c2\u00a0State Constraints",
    "authors": [
      "Haoran Li",
      "Xiaodong Shao",
      "Qinglei Hu",
      "Yonghe Zhang",
      "Pengcheng Wang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Haoran Li, Xiaodong Shao, Qinglei Hu, Yonghe Zhang and Pengcheng Wang, explores the development and application of advanced systems in 'Learning-Based Drag-Free and\u00c2\u00a0Attitude Control of\u00c2\u00a0Spacecraft with\u00c2\u00a0State Constraints'. Published in 'Lecture Notes in Electrical Engineering' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "learning-based",
      "drag-free",
      "attitude",
      "control",
      "spacecraft",
      "with\u00e2",
      "state"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-196",
    "title": "Upgrading Mathematics Learning: Investigating the Result of Localized Worktext on Student Achievement",
    "authors": [
      "Virgil Leo E. Gumanoy",
      "Razil M. Gumanoy"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Virgil Leo E. Gumanoy and Razil M. Gumanoy, explores the development and application of advanced systems in 'Upgrading Mathematics Learning: Investigating the Result of Localized Worktext on Student Achievement'. Published in 'International Journal of Research and Innovation in Social Science' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "upgrading",
      "mathematics",
      "learning",
      "investigating",
      "result",
      "localized",
      "worktext"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-197",
    "title": "Multi-View Graph-Based Hierarchical Representation Learning for Money Laundering Group Detection",
    "authors": [
      "Zhong Li",
      "Xueting Yang",
      "Changjun Jiang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Zhong Li, Xueting Yang and Changjun Jiang, explores the development and application of advanced systems in 'Multi-View Graph-Based Hierarchical Representation Learning for Money Laundering Group Detection'. Published in 'IEEE Transactions on Information Forensics and Security' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "multi-view",
      "graph-based",
      "hierarchical",
      "representation",
      "learning",
      "money",
      "laundering"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-198",
    "title": "Unsupervised Learning-Based 3-D Target Reconstruction From Single-View SAR Image",
    "authors": [
      "Yanni Wang",
      "Hecheng Jia",
      "Shilei Fu",
      "Feng Xu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Yanni Wang, Hecheng Jia, Shilei Fu and Feng Xu, explores the development and application of advanced systems in 'Unsupervised Learning-Based 3-D Target Reconstruction From Single-View SAR Image'. Published in 'IEEE Transactions on Geoscience and Remote Sensing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "unsupervised",
      "learning-based",
      "target",
      "reconstruction",
      "single-view",
      "image"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-199",
    "title": "Recognition of Prior Learning and Micro-credentials for Enhancing Inclusion, Access and Success in the UCT Postgraduate Diploma in Blended and Online Learning Design: A Social Justice Lens",
    "authors": [
      "Tabisa Mayisela",
      "Shanali Govender",
      "Daniela Gachago"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Tabisa Mayisela, Shanali Govender and Daniela Gachago, explores the development and application of advanced systems in 'Recognition of Prior Learning and Micro-credentials for Enhancing Inclusion, Access and Success in the UCT Postgraduate Diploma in Blended and Online Learning Design: A Social Justice Lens'. Published in 'Innovative Open Education: Fostering Resilient Societies for Sustainable Economic Development \u00e2\u20ac\u201d Conference Proceedings \u00e2\u20ac\u201d PCF11 Selected Papers' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "recognition",
      "prior",
      "learning",
      "micro-credentials",
      "enhancing",
      "inclusion",
      "access"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-200",
    "title": "Student\u00e2\u20ac\u2122s Adaptation to Distance Learning (on Example of Armenian and Russian Students): Psychoemotional Features",
    "authors": [
      "Asya S. Berberyan",
      "Hermine S. Berberyan"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Asya S. Berberyan and Hermine S. Berberyan, explores the development and application of advanced systems in 'Student\u00e2\u20ac\u2122s Adaptation to Distance Learning (on Example of Armenian and Russian Students): Psychoemotional Features'. Published in '\u00d0\u00a0\u00d0\u00be\u00d1\u0081\u00d1\u0081\u00d0\u00b8\u00d0\u00b9\u00d1\u0081\u00d0\u00ba\u00d0\u00b8\u00d0\u00b9 \u00d0\u00bf\u00d1\u0081\u00d0\u00b8\u00d1\u2026\u00d0\u00be\u00d0\u00bb\u00d0\u00be\u00d0\u00b3\u00d0\u00b8\u00d1\u2021\u00d0\u00b5\u00d1\u0081\u00d0\u00ba\u00d0\u00b8\u00d0\u00b9 \u00d0\u00b6\u00d1\u0192\u00d1\u20ac\u00d0\u00bd\u00d0\u00b0\u00d0\u00bb' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "student\u00e2\u20ac\u2122s",
      "adaptation",
      "distance",
      "learning",
      "example",
      "armenian",
      "russian"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-201",
    "title": "Real-Time Epileptic Seizure Prediction Method With Spatio-Temporal Information Transfer Learning",
    "authors": [
      "Kunying Meng",
      "Denghai Wang",
      "Donghui Zhang",
      "Kunlin Guo",
      "Kai Lu",
      "Junfeng Lu",
      "Renping Yu",
      "Lipeng Zhang",
      "Yuxia Hu",
      "Rui Zhang",
      "Mingming Chen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Kunying Meng, Denghai Wang, Donghui Zhang, Kunlin Guo, Kai Lu, Junfeng Lu, Renping Yu, Lipeng Zhang, Yuxia Hu, Rui Zhang and Mingming Chen, explores the development and application of advanced systems in 'Real-Time Epileptic Seizure Prediction Method With Spatio-Temporal Information Transfer Learning'. Published in 'IEEE Journal of Biomedical and Health Informatics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "real-time",
      "epileptic",
      "seizure",
      "prediction",
      "method",
      "spatio-temporal",
      "information"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-202",
    "title": "A Data Balancing and Ensemble Learning Approach for Credit Card Fraud Detection",
    "authors": [
      "Yuhan Wang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Yuhan Wang, explores the development and application of advanced systems in 'A Data Balancing and Ensemble Learning Approach for Credit Card Fraud Detection'. Published in '2025 4th International Symposium on Computer Applications and Information Technology (ISCAIT)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "balancing",
      "ensemble",
      "learning",
      "approach",
      "credit",
      "fraud",
      "detection"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-203",
    "title": "Context-Aware Biosensor Design Through Biology-Guided Machine Learning and Dynamical Modeling",
    "authors": [
      "Jonathan Tellechea-Luzardo",
      "Hector Martin Lazaro",
      "Christian Fernandez Perez",
      "David Henriques",
      "Irene Otero-Muras",
      "Pablo Carbonell"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Jonathan Tellechea-Luzardo, Hector Martin Lazaro, Christian Fernandez Perez, David Henriques, Irene Otero-Muras and Pablo Carbonell, explores the development and application of advanced systems in 'Context-Aware Biosensor Design Through Biology-Guided Machine Learning and Dynamical Modeling'. Published in 'ACS Synthetic Biology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "context-aware",
      "biosensor",
      "design",
      "biology-guided",
      "machine",
      "learning",
      "dynamical"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-204",
    "title": "ASF-Net: Robust video deraining via temporal alignment and online adaptive learning",
    "authors": [
      "Xinwei Xue",
      "Jia He",
      "Long Ma",
      "Xiangyu Meng",
      "Wenlin Li",
      "Risheng Liu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Xinwei Xue, Jia He, Long Ma, Xiangyu Meng, Wenlin Li and Risheng Liu, explores the development and application of advanced systems in 'ASF-Net: Robust video deraining via temporal alignment and online adaptive learning'. Published in 'Pattern Recognition' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "asf-net",
      "robust",
      "video",
      "deraining",
      "temporal",
      "alignment",
      "online"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-205",
    "title": "Development of a Machine Learning Framework for an Irrigation Decision Support System",
    "authors": [
      "Eric J. Wilkening",
      "Derek M. Heeren",
      "Yeyin Shi",
      "Abia Katimbo",
      "Laila A. Puntel",
      "Guillermo R. Balboa",
      "Kuan Zhang",
      "Precious N. Amori",
      "Bruno P. Lena"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Eric J. Wilkening, Derek M. Heeren, Yeyin Shi, Abia Katimbo, Laila A. Puntel, Guillermo R. Balboa, Kuan Zhang, Precious N. Amori and Bruno P. Lena, explores the development and application of advanced systems in 'Development of a Machine Learning Framework for an Irrigation Decision Support System'. Published in 'Journal of Natural Resources and Agricultural Ecosystems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "development",
      "machine",
      "learning",
      "framework",
      "irrigation",
      "decision",
      "support"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-206",
    "title": "PASS++: A Dual Bias Reduction Framework for Non-Exemplar Class-Incremental Learning",
    "authors": [
      "Fei Zhu",
      "Xu-Yao Zhang",
      "Zhen Cheng",
      "Cheng-Lin Liu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Fei Zhu, Xu-Yao Zhang, Zhen Cheng and Cheng-Lin Liu, explores the development and application of advanced systems in 'PASS++: A Dual Bias Reduction Framework for Non-Exemplar Class-Incremental Learning'. Published in 'IEEE Transactions on Pattern Analysis and Machine Intelligence' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "pass++",
      "reduction",
      "framework",
      "non-exemplar",
      "class-incremental",
      "learning"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-207",
    "title": "The Inclusive Approach to Teaching and Learning English as a Foreign Language",
    "authors": [
      "Anna Kuli\u00c5\u201eska",
      "Natalia Wrycza Toygar"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Anna Kuli\u00c5\u201eska and Natalia Wrycza Toygar, explores the development and application of advanced systems in 'The Inclusive Approach to Teaching and Learning English as a Foreign Language'. Published in 'Forum Filologiczne Ateneum' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "inclusive",
      "approach",
      "teaching",
      "learning",
      "english",
      "foreign",
      "language"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-208",
    "title": "Self-paced learning for anchor-based multi-view clustering: A progressive approach",
    "authors": [
      "Xia Ji",
      "Xinran Cheng",
      "Peng Zhou"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Xia Ji, Xinran Cheng and Peng Zhou, explores the development and application of advanced systems in 'Self-paced learning for anchor-based multi-view clustering: A progressive approach'. Published in 'Neurocomputing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "self-paced",
      "learning",
      "anchor-based",
      "multi-view",
      "clustering",
      "progressive",
      "approach"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-209",
    "title": "DDC: Dynamic distribution calibration for few-shot learning under multi-scale representation",
    "authors": [
      "Lingxing Chen",
      "Yang Gu",
      "Yi Guo",
      "Fan Dong",
      "Dongmei Jiang",
      "Yiqiang Chen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Lingxing Chen, Yang Gu, Yi Guo, Fan Dong, Dongmei Jiang and Yiqiang Chen, explores the development and application of advanced systems in 'DDC: Dynamic distribution calibration for few-shot learning under multi-scale representation'. Published in 'Knowledge-Based Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "dynamic",
      "distribution",
      "calibration",
      "few-shot",
      "learning",
      "multi-scale",
      "representation"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-210",
    "title": "WIP: Context-Aware AI in Learning Management Systems for Computer Science Courses",
    "authors": [
      "Archer Simmons",
      "Maristela Holanda",
      "Dilma Da Silva"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Archer Simmons, Maristela Holanda and Dilma Da Silva, explores the development and application of advanced systems in 'WIP: Context-Aware AI in Learning Management Systems for Computer Science Courses'. Published in '2025 IEEE Frontiers in Education Conference (FIE)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "context-aware",
      "learning",
      "management",
      "systems",
      "computer",
      "science",
      "courses"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-211",
    "title": "To Analyze and Regulate Human-in-the-Loop Learning for Congestion Games",
    "authors": [
      "Hongbo Li",
      "Lingjie Duan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Hongbo Li and Lingjie Duan, explores the development and application of advanced systems in 'To Analyze and Regulate Human-in-the-Loop Learning for Congestion Games'. Published in 'IEEE Transactions on Networking' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "analyze",
      "regulate",
      "human-in-the-loop",
      "learning",
      "congestion",
      "games"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-212",
    "title": "Music learning and school-aged children\u00e2\u20ac\u2122s and adolescents\u00e2\u20ac\u2122 wellbeing: A scoping review",
    "authors": [
      "Jason Goopy",
      "Stephanie L R MacArthur"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Jason Goopy and Stephanie L R MacArthur, explores the development and application of advanced systems in 'Music learning and school-aged children\u00e2\u20ac\u2122s and adolescents\u00e2\u20ac\u2122 wellbeing: A scoping review'. Published in 'Research Studies in Music Education' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "music",
      "learning",
      "school-aged",
      "children\u00e2\u20ac\u2122s",
      "adolescents\u00e2\u20ac\u2122",
      "wellbeing",
      "scoping"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-213",
    "title": "Towards Robust Policy: Enhancing Offline Reinforcement Learning with\u00c2\u00a0Adversarial Attacks and\u00c2\u00a0Defenses",
    "authors": [
      "Thanh Nguyen",
      "Tung M. Luu",
      "Tri Ton",
      "Chang D. Yoo"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Thanh Nguyen, Tung M. Luu, Tri Ton and Chang D. Yoo, explores the development and application of advanced systems in 'Towards Robust Policy: Enhancing Offline Reinforcement Learning with\u00c2\u00a0Adversarial Attacks and\u00c2\u00a0Defenses'. Published in 'Lecture Notes in Computer Science' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "towards",
      "robust",
      "policy",
      "enhancing",
      "offline",
      "reinforcement",
      "learning"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-214",
    "title": "The role of interdisciplinary communication in the process of learning foreign languages",
    "authors": [
      "",
      "N. Benkovska"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by  and N. Benkovska, explores the development and application of advanced systems in 'The role of interdisciplinary communication in the process of learning foreign languages'. Published in '\u00d0\u0153\u00d1\u2013\u00d0\u00b6\u00d0\u00b4\u00d0\u00b8\u00d1\u0081\u00d1\u2020\u00d0\u00b8\u00d0\u00bf\u00d0\u00bb\u00d1\u2013\u00d0\u00bd\u00d0\u00b0\u00d1\u20ac\u00d0\u00bd\u00d0\u00b8\u00d0\u00b9 \u00d0\u00bf\u00d1\u2013\u00d0\u00b4\u00d1\u2026\u00d1\u2013\u00d0\u00b4 \u00d0\u00b4\u00d0\u00be \u00d0\u00b2\u00d0\u00b8\u00d0\u00b2\u00d1\u2021\u00d0\u00b5\u00d0\u00bd\u00d0\u00bd\u00d1\u008f \u00d1\u2013\u00d0\u00bd\u00d0\u00be\u00d0\u00b7\u00d0\u00b5\u00d0\u00bc\u00d0\u00bd\u00d0\u00b8\u00d1\u2026 \u00d0\u00bc\u00d0\u00be\u00d0\u00b2 \u00d1\u0192 \u00d0\u00ba\u00d0\u00be\u00d0\u00bd\u00d1\u201a\u00d0\u00b5\u00d0\u00ba\u00d1\u0081\u00d1\u201a\u00d1\u2013 \u00d1\u20ac\u00d0\u00be\u00d0\u00b7\u00d0\u00b2\u00d0\u00b8\u00d1\u201a\u00d0\u00ba\u00d1\u0192 \u00d0\u00bf\u00d1\u20ac\u00d0\u00b8\u00d1\u20ac\u00d0\u00be\u00d0\u00b4\u00d0\u00bd\u00d0\u00b8\u00d1\u2021\u00d0\u00b8\u00d1\u2026 \u00d1\u201a\u00d0\u00b0 \u00d0\u00b3\u00d1\u0192\u00d0\u00bc\u00d0\u00b0\u00d0\u00bd\u00d1\u2013\u00d1\u201a\u00d0\u00b0\u00d1\u20ac\u00d0\u00bd\u00d0\u00b8\u00d1\u2026 \u00d0\u00bd\u00d0\u00b0\u00d1\u0192\u00d0\u00ba: \u00d0\u00b2\u00d0\u00b8\u00d0\u00ba\u00d0\u00bb\u00d0\u00b8\u00d0\u00ba\u00d0\u00b8 \u00d1\u201a\u00d0\u00b0 \u00d0\u00bf\u00d0\u00b5\u00d1\u20ac\u00d1\u0081\u00d0\u00bf\u00d0\u00b5\u00d0\u00ba\u00d1\u201a\u00d0\u00b8\u00d0\u00b2\u00d0\u00b8 : \u00d0\u00bc\u00d0\u00b0\u00d1\u201a\u00d0\u00b5\u00d1\u20ac\u00d1\u2013\u00d0\u00b0\u00d0\u00bb\u00d0\u00b8 \u00d0\u2020\u00d0\u2020\u00d0\u2020 \u00d0\u2019\u00d1\u0081\u00d0\u00b5\u00d1\u0192\u00d0\u00ba\u00d1\u20ac. \u00d0\u00bd\u00d0\u00b0\u00d1\u0192\u00d0\u00ba.-\u00d0\u00bf\u00d1\u20ac\u00d0\u00b0\u00d0\u00ba\u00d1\u201a. \u00d1\u2013\u00d0\u00bd\u00d1\u201a\u00d0\u00b5\u00d1\u20ac\u00d0\u00bd\u00d0\u00b5\u00d1\u201a-\u00d0\u00ba\u00d0\u00be\u00d0\u00bd\u00d1\u201e. (\u00d0\u017e\u00d0\u00b4\u00d0\u00b5\u00d1\u0081\u00d0\u00b0, 17 \u00d0\u00bb\u00d0\u00b8\u00d1\u0081\u00d1\u201a\u00d0\u00be\u00d0\u00bf. 2025 \u00d1\u20ac.)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "interdisciplinary",
      "communication",
      "process",
      "learning",
      "foreign",
      "languages"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-215",
    "title": "Event-triggered control with reliable Gaussian process learning for remote UAV control",
    "authors": [
      "Dohyun Jang",
      "Jaehyun Yoo"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Dohyun Jang and Jaehyun Yoo, explores the development and application of advanced systems in 'Event-triggered control with reliable Gaussian process learning for remote UAV control'. Published in 'Control Engineering Practice' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "event-triggered",
      "control",
      "reliable",
      "gaussian",
      "process",
      "learning",
      "remote"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-216",
    "title": "Federated Learning-Based Anomaly Detection Algorithm for Privacy-Preserving Health Information Systems",
    "authors": [
      "Louai A. Maghrabi",
      "Amjed Abbas Ahmed",
      "Saed Adnan Mustafa",
      "Abdelrahman H. Hussein",
      "Musab A. M. Al-Tarawni"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Louai A. Maghrabi, Amjed Abbas Ahmed, Saed Adnan Mustafa, Abdelrahman H. Hussein and Musab A. M. Al-Tarawni, explores the development and application of advanced systems in 'Federated Learning-Based Anomaly Detection Algorithm for Privacy-Preserving Health Information Systems'. Published in 'Indian Journal of Information Sources and Services' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "federated",
      "learning-based",
      "anomaly",
      "detection",
      "algorithm",
      "privacy-preserving",
      "health"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-217",
    "title": "Tau spatial distribution predicts domain\u00e2\u20ac\u0090specific cognitive performance: a machine learning approach",
    "authors": [
      "Stephanie Doering",
      "Nicole S. McKay",
      "Peter R Millar",
      "Shaney Flores",
      "Austin A. McCullough",
      "Jason J. Hassenstab",
      "John C. Morris",
      "Brian A. Gordon",
      "Tammie L.S. Benzinger"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Stephanie Doering, Nicole S. McKay, Peter R Millar, Shaney Flores, Austin A. McCullough, Jason J. Hassenstab, John C. Morris, Brian A. Gordon and Tammie L.S. Benzinger, explores the development and application of advanced systems in 'Tau spatial distribution predicts domain\u00e2\u20ac\u0090specific cognitive performance: a machine learning approach'. Published in 'Alzheimer's &amp; Dementia' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "spatial",
      "distribution",
      "predicts",
      "domain\u00e2\u20ac\u0090specific",
      "cognitive",
      "performance",
      "machine"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-218",
    "title": "Machine learning web application for predicting varicose veins utilizing global prevalence data",
    "authors": [
      "Yury Rusinovich",
      "Volha Rusinovich",
      "Markus Doss"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Yury Rusinovich, Volha Rusinovich and Markus Doss, explores the development and application of advanced systems in 'Machine learning web application for predicting varicose veins utilizing global prevalence data'. Published in 'Phlebology: The Journal of Venous Disease' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "application",
      "predicting",
      "varicose",
      "veins",
      "utilizing"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-219",
    "title": "Prescribed-Time Optimal Consensus for Switched Stochastic Multiagent Systems: Reinforcement Learning Strategy",
    "authors": [
      "Weiwei Guang",
      "Xin Wang",
      "Lihua Tan",
      "Jian Sun",
      "Tingwen Huang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Weiwei Guang, Xin Wang, Lihua Tan, Jian Sun and Tingwen Huang, explores the development and application of advanced systems in 'Prescribed-Time Optimal Consensus for Switched Stochastic Multiagent Systems: Reinforcement Learning Strategy'. Published in 'IEEE Transactions on Emerging Topics in Computational Intelligence' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "prescribed-time",
      "optimal",
      "consensus",
      "switched",
      "stochastic",
      "multiagent",
      "systems"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-220",
    "title": "Fostering adolescent creativity through blended learning: Matching cognitive style with training strategy",
    "authors": [
      "Xiaojing Gu",
      "Peiqi Shi",
      "Shihui Zhao",
      "Hao Zhang",
      "Shan Li",
      "Dandan Tong",
      "Hao Liu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Xiaojing Gu, Peiqi Shi, Shihui Zhao, Hao Zhang, Shan Li, Dandan Tong and Hao Liu, explores the development and application of advanced systems in 'Fostering adolescent creativity through blended learning: Matching cognitive style with training strategy'. Published in 'Thinking Skills and Creativity' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "fostering",
      "adolescent",
      "creativity",
      "blended",
      "learning",
      "matching",
      "cognitive"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-221",
    "title": "Predictive learning rules generate a cortical-like replay of probabilistic sensory experiences",
    "authors": [
      "Toshitake Asabuki",
      "Tomoki Fukai"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Toshitake Asabuki and Tomoki Fukai, explores the development and application of advanced systems in 'Predictive learning rules generate a cortical-like replay of probabilistic sensory experiences'. Published in 'eLife' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "predictive",
      "learning",
      "rules",
      "generate",
      "cortical-like",
      "replay",
      "probabilistic"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-222",
    "title": "Protein-ligand binding affinity prediction using multi-instance learning with docking structures",
    "authors": [
      "Hyojin Kim",
      "Heesung Shim",
      "Aditya Ranganath",
      "Stewart He",
      "Garrett Stevenson",
      "Jonathan E. Allen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Hyojin Kim, Heesung Shim, Aditya Ranganath, Stewart He, Garrett Stevenson and Jonathan E. Allen, explores the development and application of advanced systems in 'Protein-ligand binding affinity prediction using multi-instance learning with docking structures'. Published in 'Frontiers in Pharmacology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "protein-ligand",
      "binding",
      "affinity",
      "prediction",
      "multi-instance",
      "learning",
      "docking"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-223",
    "title": "Machine Learning and Artificial Intelligence Approaches for Drone Detection Using YOLOv11 Algorithm",
    "authors": [
      "Berk Demirsoy",
      "\u00c3\u2013mer Y\u00c4\u00b1lmaz",
      "Mert S\u00c3\u00bcleyman Demirsoy"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Berk Demirsoy, \u00c3\u2013mer Y\u00c4\u00b1lmaz and Mert S\u00c3\u00bcleyman Demirsoy, explores the development and application of advanced systems in 'Machine Learning and Artificial Intelligence Approaches for Drone Detection Using YOLOv11 Algorithm'. Published in 'Journal of Smart Systems Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "artificial",
      "intelligence",
      "approaches",
      "drone",
      "detection"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-224",
    "title": "Hybrid Architectures Ensemble Learning for pseudo-label refinement in semi-supervised segmentation",
    "authors": [
      "Rui Yang",
      "Yunfei Bai",
      "Chang Liu",
      "Yuehua Liu",
      "Xiaomao Li",
      "Shaorong Xie"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Rui Yang, Yunfei Bai, Chang Liu, Yuehua Liu, Xiaomao Li and Shaorong Xie, explores the development and application of advanced systems in 'Hybrid Architectures Ensemble Learning for pseudo-label refinement in semi-supervised segmentation'. Published in 'Information Fusion' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "hybrid",
      "architectures",
      "ensemble",
      "learning",
      "pseudo-label",
      "refinement",
      "semi-supervised"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-225",
    "title": "Precise multi-factor immediate implant placement decision models based on machine learning",
    "authors": [
      "Guanqi Liu",
      "Shudan Deng",
      "Runzhong Liu",
      "Yuanxiang Liu",
      "Quan Liu",
      "Shiyu Wu",
      "Zhuofan Chen",
      "Runheng Liu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Guanqi Liu, Shudan Deng, Runzhong Liu, Yuanxiang Liu, Quan Liu, Shiyu Wu, Zhuofan Chen and Runheng Liu, explores the development and application of advanced systems in 'Precise multi-factor immediate implant placement decision models based on machine learning'. Published in 'Scientific Reports' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "precise",
      "multi-factor",
      "immediate",
      "implant",
      "placement",
      "decision",
      "models"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-226",
    "title": "Robust MPC with event-triggered learning for unknown linear time-varying systems",
    "authors": [
      "Li Deng",
      "Zhan Shu",
      "Tongwen Chen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Li Deng, Zhan Shu and Tongwen Chen, explores the development and application of advanced systems in 'Robust MPC with event-triggered learning for unknown linear time-varying systems'. Published in 'Automatica' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "robust",
      "event-triggered",
      "learning",
      "unknown",
      "linear",
      "time-varying",
      "systems"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-227",
    "title": "AFE\u00e2\u20ac\u0090Dehaze: Image Dehazing Method Based on Adaptive Feature Enhancement Contrastive Learning",
    "authors": [
      "Lanqing Zhang",
      "Zhigao Cui",
      "Yanzhao Su",
      "Nian Wang",
      "Yunwei Lan",
      "Liangyu Zhu",
      "Cheng Chen"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Lanqing Zhang, Zhigao Cui, Yanzhao Su, Nian Wang, Yunwei Lan, Liangyu Zhu and Cheng Chen, explores the development and application of advanced systems in 'AFE\u00e2\u20ac\u0090Dehaze: Image Dehazing Method Based on Adaptive Feature Enhancement Contrastive Learning'. Published in 'IET Image Processing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "afe\u00e2\u20ac\u0090dehaze",
      "image",
      "dehazing",
      "method",
      "adaptive",
      "feature",
      "enhancement"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-228",
    "title": "Automated Machine Learning (AutoML): Transforming Data Science Workflows in Big Data Analytics",
    "authors": [
      "Mohammed I. Nofal",
      "Banan Mohammad Alfalah",
      "Fayiz Momani",
      "Muaadh Mukred",
      "Omar Zughoul",
      "Fathye Mohammed"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Mohammed I. Nofal, Banan Mohammad Alfalah, Fayiz Momani, Muaadh Mukred, Omar Zughoul and Fathye Mohammed, explores the development and application of advanced systems in 'Automated Machine Learning (AutoML): Transforming Data Science Workflows in Big Data Analytics'. Published in '2025 1st International Conference on Computational Intelligence Approaches and Applications (ICCIAA)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "automated",
      "machine",
      "learning",
      "automl",
      "transforming",
      "science",
      "workflows"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-229",
    "title": "Study on the Prediction of Subway Construction Settlement Based on Machine Learning",
    "authors": [
      "Xingzhong Nong",
      "Yanmei Ruan",
      "Junsheng Chen",
      "Yuefeng Wu",
      "Yuehua Liang",
      "Wentian Xu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Xingzhong Nong, Yanmei Ruan, Junsheng Chen, Yuefeng Wu, Yuehua Liang and Wentian Xu, explores the development and application of advanced systems in 'Study on the Prediction of Subway Construction Settlement Based on Machine Learning'. Published in 'Soil Mechanics and Foundation Engineering' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "study",
      "prediction",
      "subway",
      "construction",
      "settlement",
      "machine",
      "learning"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-230",
    "title": "Oxytocin modulates emotion, learning, and memory: Insights from advanced fMRI analysis techniques",
    "authors": [
      "Masoomeh Fooladi",
      "Vahab Dehlaghi",
      "Maziar Jalalvandi",
      "Hooshang Bahrami",
      "Mitra Yousefpour",
      "Hamid Sharini"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Masoomeh Fooladi, Vahab Dehlaghi, Maziar Jalalvandi, Hooshang Bahrami, Mitra Yousefpour and Hamid Sharini, explores the development and application of advanced systems in 'Oxytocin modulates emotion, learning, and memory: Insights from advanced fMRI analysis techniques'. Published in 'Brain Research Bulletin' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "oxytocin",
      "modulates",
      "emotion",
      "learning",
      "memory",
      "insights",
      "advanced"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-231",
    "title": "Adaptive soft contrastive with mutual information for biological time series representation learning",
    "authors": [
      "MingHao Yu",
      "Qing He",
      "Zhihao Yang",
      "Nisuo Du"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by MingHao Yu, Qing He, Zhihao Yang and Nisuo Du, explores the development and application of advanced systems in 'Adaptive soft contrastive with mutual information for biological time series representation learning'. Published in 'Expert Systems with Applications' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "adaptive",
      "contrastive",
      "mutual",
      "information",
      "biological",
      "series",
      "representation"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-232",
    "title": "COMPUTATIONAL AND MACHINE LEARNING FRAMEWORKS FOR MICROBIAL DATA ANALYSIS: A SYSTEMATIC REVIEW",
    "authors": [
      "",
      "H. Pallavi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by  and H. Pallavi, explores the development and application of advanced systems in 'COMPUTATIONAL AND MACHINE LEARNING FRAMEWORKS FOR MICROBIAL DATA ANALYSIS: A SYSTEMATIC REVIEW'. Published in 'international journal of advanced research in computer science' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "computational",
      "machine",
      "learning",
      "frameworks",
      "microbial",
      "analysis",
      "systematic"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-233",
    "title": "Throwing Planning Diffusion: A Solution to Learning and Planning of Robotic Throwing",
    "authors": [
      "Ziqi Xu",
      "Haodu Li",
      "Lihao Liu",
      "Jun Liu",
      "Xuechao Duan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Ziqi Xu, Haodu Li, Lihao Liu, Jun Liu and Xuechao Duan, explores the development and application of advanced systems in 'Throwing Planning Diffusion: A Solution to Learning and Planning of Robotic Throwing'. Published in '2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "throwing",
      "planning",
      "diffusion",
      "solution",
      "learning",
      "robotic"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-234",
    "title": "PET: High-Frequency Temporal Self-Consistency Learning for Partially Deepfake Audio Localization",
    "authors": [
      "Jiayi He",
      "Jiangyan Yi",
      "Jianhua Tao",
      "Siding Zeng"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Jiayi He, Jiangyan Yi, Jianhua Tao and Siding Zeng, explores the development and application of advanced systems in 'PET: High-Frequency Temporal Self-Consistency Learning for Partially Deepfake Audio Localization'. Published in 'ICASSP 2025 - 2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "high-frequency",
      "temporal",
      "self-consistency",
      "learning",
      "partially",
      "deepfake",
      "audio"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-235",
    "title": "Sequence-to-Sequence Traffic Missing Data Imputation via Self-Supervised Contrastive Learning",
    "authors": [
      "Wenfeng Zhou",
      "Guojiang Shen",
      "Yimei Zhang",
      "Zhaolin Deng",
      "Xiangjie Kong",
      "Feng Xia"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Wenfeng Zhou, Guojiang Shen, Yimei Zhang, Zhaolin Deng, Xiangjie Kong and Feng Xia, explores the development and application of advanced systems in 'Sequence-to-Sequence Traffic Missing Data Imputation via Self-Supervised Contrastive Learning'. Published in 'IEEE Transactions on Intelligent Transportation Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "sequence-to-sequence",
      "traffic",
      "missing",
      "imputation",
      "self-supervised",
      "contrastive",
      "learning"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-236",
    "title": "Learning Difficulties and Problems in the Psychosocial Functioning of School-Age Children",
    "authors": [
      "Marta Nikel"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Marta Nikel, explores the development and application of advanced systems in 'Learning Difficulties and Problems in the Psychosocial Functioning of School-Age Children'. Published in 'Family Upbringing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "learning",
      "difficulties",
      "problems",
      "psychosocial",
      "functioning",
      "school-age",
      "children"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-237",
    "title": "FogGuard: A Middleware System for Secure Machine Learning on Local IoT Devices",
    "authors": [
      "B Satheesh Kumar",
      "Putta Srivani",
      "D Kalyani",
      "Mallareddy Adudhodla",
      "Jakkala Ravichandar Reddy",
      "Pavan Kumar Reddy Manellore"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by B Satheesh Kumar, Putta Srivani, D Kalyani, Mallareddy Adudhodla, Jakkala Ravichandar Reddy and Pavan Kumar Reddy Manellore, explores the development and application of advanced systems in 'FogGuard: A Middleware System for Secure Machine Learning on Local IoT Devices'. Published in '2025 7th International Conference on Innovative Data Communication Technologies and Application (ICIDCA)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "fogguard",
      "middleware",
      "system",
      "secure",
      "machine",
      "learning",
      "local"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-238",
    "title": "Robust Speech Emotion Recognition Using Recent Self-Supervised Learning with Data Augmentation",
    "authors": [
      "Yu Hayashizaki",
      "Takashi Nose",
      "Sumiharu Kobayashi",
      "Akinori Ito"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Yu Hayashizaki, Takashi Nose, Sumiharu Kobayashi and Akinori Ito, explores the development and application of advanced systems in 'Robust Speech Emotion Recognition Using Recent Self-Supervised Learning with Data Augmentation'. Published in '2025 IEEE 14th Global Conference on Consumer Electronics (GCCE)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "robust",
      "speech",
      "emotion",
      "recognition",
      "recent",
      "self-supervised",
      "learning"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-239",
    "title": "Wayside monitoring for railway wheel flat identification: A multiclass supervised learning approach",
    "authors": [
      "Araliya Mosleh",
      "Ramin Ghiasi",
      "Meisam Gordan",
      "Diogo Ribeiro",
      "Abdollah Malekjafarian"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Araliya Mosleh, Ramin Ghiasi, Meisam Gordan, Diogo Ribeiro and Abdollah Malekjafarian, explores the development and application of advanced systems in 'Wayside monitoring for railway wheel flat identification: A multiclass supervised learning approach'. Published in 'Proceedings of the Institution of Mechanical Engineers, Part F: Journal of Rail and Rapid Transit' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "wayside",
      "monitoring",
      "railway",
      "wheel",
      "identification",
      "multiclass",
      "supervised"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-240",
    "title": "Self-supervised EEG denoising via dual-branch consistency learning with masked reconstruction",
    "authors": [
      "Wensheng Chen",
      "Cong Yu",
      "Zhenhua Zhao",
      "Nan Zheng",
      "Han Li",
      "Yurong Li"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Wensheng Chen, Cong Yu, Zhenhua Zhao, Nan Zheng, Han Li and Yurong Li, explores the development and application of advanced systems in 'Self-supervised EEG denoising via dual-branch consistency learning with masked reconstruction'. Published in 'Knowledge-Based Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "self-supervised",
      "denoising",
      "dual-branch",
      "consistency",
      "learning",
      "masked",
      "reconstruction"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-241",
    "title": "Divergent institutional language policies and family ideologies in Arabic heritage/community learning",
    "authors": [
      "Yousra Abourehab"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Yousra Abourehab, explores the development and application of advanced systems in 'Divergent institutional language policies and family ideologies in Arabic heritage/community learning'. Published in 'Current Issues in Language Planning' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "divergent",
      "institutional",
      "language",
      "policies",
      "family",
      "ideologies",
      "arabic"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-242",
    "title": "Li-MSA: Power Consumption Prediction of Servers Based on Few-Shot Learning",
    "authors": [
      "Saiqin Long",
      "Yuan Li",
      "Zhetao Li",
      "Guoqi Xie",
      "Weiwei Lin",
      "Kenli Li"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Saiqin Long, Yuan Li, Zhetao Li, Guoqi Xie, Weiwei Lin and Kenli Li, explores the development and application of advanced systems in 'Li-MSA: Power Consumption Prediction of Servers Based on Few-Shot Learning'. Published in 'IEEE Transactions on Services Computing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "li-msa",
      "power",
      "consumption",
      "prediction",
      "servers",
      "few-shot",
      "learning"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-243",
    "title": "Dual Representation Learning in CNNs: Generalised Glycolytic Patterns and Organ-specific Activations",
    "authors": [
      "R. R. John",
      "T. Rai",
      "R. Smith",
      "A. Robinson",
      "V. Prakash",
      "M. Shastry",
      "P. Strouhal",
      "K. Wells"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by R. R. John, T. Rai, R. Smith, A. Robinson, V. Prakash, M. Shastry, P. Strouhal and K. Wells, explores the development and application of advanced systems in 'Dual Representation Learning in CNNs: Generalised Glycolytic Patterns and Organ-specific Activations'. Published in '2025 IEEE Nuclear Science Symposium (NSS), Medical Imaging Conference (MIC) and Room Temperature Semiconductor Detector Conference (RTSD)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "representation",
      "learning",
      "generalised",
      "glycolytic",
      "patterns",
      "organ-specific",
      "activations"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-244",
    "title": "Adaptive knowledge transfer based on machine learning method for evolutionary multitasking optimization",
    "authors": [
      "Jiangtao Shen",
      "Huachao Dong",
      "Ye Tian",
      "Xinjing Wang",
      "Weixi Chen",
      "Haijia Zhu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Jiangtao Shen, Huachao Dong, Ye Tian, Xinjing Wang, Weixi Chen and Haijia Zhu, explores the development and application of advanced systems in 'Adaptive knowledge transfer based on machine learning method for evolutionary multitasking optimization'. Published in 'Information Sciences' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "adaptive",
      "knowledge",
      "transfer",
      "machine",
      "learning",
      "method",
      "evolutionary"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-245",
    "title": "Machine Learning and Omic Data for Prediction of Health and Chronic Diseases",
    "authors": [
      "Mark Olenik",
      "Handan Melike D\u00c3\u00b6nerta\u00c5\u0178"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Mark Olenik and Handan Melike D\u00c3\u00b6nerta\u00c5\u0178, explores the development and application of advanced systems in 'Machine Learning and Omic Data for Prediction of Health and Chronic Diseases'. Published in 'Encyclopedia of Bioinformatics and Computational Biology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "prediction",
      "health",
      "chronic",
      "diseases"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-246",
    "title": "Graph Contrastive Learning for Service Security Risk Analysis in Power Communication Networks",
    "authors": [
      "Yuanpeng Ge",
      "Songlei Zhang",
      "Huang Lin",
      "Liangsong Zhang",
      "Jialu Li"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Yuanpeng Ge, Songlei Zhang, Huang Lin, Liangsong Zhang and Jialu Li, explores the development and application of advanced systems in 'Graph Contrastive Learning for Service Security Risk Analysis in Power Communication Networks'. Published in '2025 IEEE 13th International Conference on Computer Science and Network Technology (ICCSNT)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "graph",
      "contrastive",
      "learning",
      "service",
      "security",
      "analysis",
      "power"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-247",
    "title": "Systematic Review: Machine Learning Approaches for Detecting Illicit Activities in Bitcoin Transactions",
    "authors": [
      "Ahmed Alteneiji",
      "Khaled Shaalan",
      "Suleiman Y. Yerima",
      "Usman Butt"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Ahmed Alteneiji, Khaled Shaalan, Suleiman Y. Yerima and Usman Butt, explores the development and application of advanced systems in 'Systematic Review: Machine Learning Approaches for Detecting Illicit Activities in Bitcoin Transactions'. Published in '2025 3rd International Conference on Cyber Resilience (ICCR)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "systematic",
      "review",
      "machine",
      "learning",
      "approaches",
      "detecting",
      "illicit"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-248",
    "title": "DEVELOPMENT OF AN AI-DRIVEN ADAPTIVE LEARNING MANAGEMENT SYSTEM USING DATA ANALYTICS",
    "authors": [
      "Afolabi I.Y",
      "Ugah J.O",
      "Igwe J.S",
      "Nwali M.E"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Afolabi I.Y, Ugah J.O, Igwe J.S and Nwali M.E, explores the development and application of advanced systems in 'DEVELOPMENT OF AN AI-DRIVEN ADAPTIVE LEARNING MANAGEMENT SYSTEM USING DATA ANALYTICS'. Published in 'International Journal of Scientific Research in Modern Science and Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "development",
      "ai-driven",
      "adaptive",
      "learning",
      "management",
      "system",
      "analytics"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-249",
    "title": "MANSY: Generalizing Neural Adaptive Immersive Video Streaming With Ensemble and Representation Learning",
    "authors": [
      "Duo Wu",
      "Panlong Wu",
      "Miao Zhang",
      "Fangxin Wang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Duo Wu, Panlong Wu, Miao Zhang and Fangxin Wang, explores the development and application of advanced systems in 'MANSY: Generalizing Neural Adaptive Immersive Video Streaming With Ensemble and Representation Learning'. Published in 'IEEE Transactions on Mobile Computing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "mansy",
      "generalizing",
      "neural",
      "adaptive",
      "immersive",
      "video",
      "streaming"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-250",
    "title": "Learning With Self-Calibrator for Fast and Robust Low-Light Image Enhancement",
    "authors": [
      "Long Ma",
      "Tengyu Ma",
      "Chengpei Xu",
      "Jinyuan Liu",
      "Xin Fan",
      "Zhongxuan Luo",
      "Risheng Liu"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Long Ma, Tengyu Ma, Chengpei Xu, Jinyuan Liu, Xin Fan, Zhongxuan Luo and Risheng Liu, explores the development and application of advanced systems in 'Learning With Self-Calibrator for Fast and Robust Low-Light Image Enhancement'. Published in 'IEEE Transactions on Pattern Analysis and Machine Intelligence' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "learning",
      "self-calibrator",
      "robust",
      "low-light",
      "image",
      "enhancement"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-251",
    "title": "Development of Digital Teaching Modules to Enhance Differentiated Learning in Geography Subjects",
    "authors": [
      "Md. Navri Zulirfan",
      "Syafri Anwar",
      "Dedi Hermon",
      "Bayu Wijayanto"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Md. Navri Zulirfan, Syafri Anwar, Dedi Hermon and Bayu Wijayanto, explores the development and application of advanced systems in 'Development of Digital Teaching Modules to Enhance Differentiated Learning in Geography Subjects'. Published in 'AL-ISHLAH: Jurnal Pendidikan' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "development",
      "digital",
      "teaching",
      "modules",
      "enhance",
      "differentiated",
      "learning"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-252",
    "title": "Comparison of Machine Learning Algorithms for Predicting Thyroid Disorders in Diabetic Patients",
    "authors": [
      "Hiba Oudah Sayyid",
      "Salma A. Mahmood",
      "Saad S. Hamadi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Hiba Oudah Sayyid, Salma A. Mahmood and Saad S. Hamadi, explores the development and application of advanced systems in 'Comparison of Machine Learning Algorithms for Predicting Thyroid Disorders in Diabetic Patients'. Published in 'Informatica' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "comparison",
      "machine",
      "learning",
      "algorithms",
      "predicting",
      "thyroid",
      "disorders"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-253",
    "title": "Ultrasound\u00e2\u20ac\u0090Based Transfer Learning Model to Assist Partially Cystic Thyroid Nodule Diagnosis",
    "authors": [
      "Qibo Zhang",
      "Zhaohui Sun",
      "Yudong Wang",
      "Chuanpeng Zhang",
      "Ying Zou",
      "Yan Shi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Qibo Zhang, Zhaohui Sun, Yudong Wang, Chuanpeng Zhang, Ying Zou and Yan Shi, explores the development and application of advanced systems in 'Ultrasound\u00e2\u20ac\u0090Based Transfer Learning Model to Assist Partially Cystic Thyroid Nodule Diagnosis'. Published in 'Journal of Clinical Ultrasound' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "ultrasound\u00e2\u20ac\u0090based",
      "transfer",
      "learning",
      "model",
      "assist",
      "partially",
      "cystic"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-254",
    "title": "Machine learning drives fast and accurate calibration of carbon nanotube contact parameters",
    "authors": [
      "Chenyu Gao",
      "Xijun Zhang",
      "Dianming Chu",
      "Wenjuan Bai",
      "Mingrui Liu",
      "Yan Li",
      "Yan He"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Chenyu Gao, Xijun Zhang, Dianming Chu, Wenjuan Bai, Mingrui Liu, Yan Li and Yan He, explores the development and application of advanced systems in 'Machine learning drives fast and accurate calibration of carbon nanotube contact parameters'. Published in 'Physics of Fluids' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "machine",
      "learning",
      "drives",
      "accurate",
      "calibration",
      "carbon",
      "nanotube"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-255",
    "title": "Research on How Primary School Calligraphy Teachers Maintain Students' Interest in Learning",
    "authors": [
      "Xing Bing",
      "Julius A Simon"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Xing Bing and Julius A Simon, explores the development and application of advanced systems in 'Research on How Primary School Calligraphy Teachers Maintain Students' Interest in Learning'. Published in 'East Asian Journal of Multidisciplinary Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "research",
      "primary",
      "school",
      "calligraphy",
      "teachers",
      "maintain",
      "students"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-256",
    "title": "Do Games Missed Predict Rankings in the NBA: A Machine Learning Approach",
    "authors": [
      "Brian Serrano"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Brian Serrano, explores the development and application of advanced systems in 'Do Games Missed Predict Rankings in the NBA: A Machine Learning Approach'. Published in 'Mathews Journal of Sports Medicine' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "games",
      "missed",
      "predict",
      "rankings",
      "machine",
      "learning",
      "approach"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-257",
    "title": "Prediction of crack repair percentage in self-healing concrete using machine learning",
    "authors": [
      "Hossein Khosravi",
      "Peyman Kiani",
      "Mohammad Bahram",
      "Mojtaba Lezgy-Nazargah"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Hossein Khosravi, Peyman Kiani, Mohammad Bahram and Mojtaba Lezgy-Nazargah, explores the development and application of advanced systems in 'Prediction of crack repair percentage in self-healing concrete using machine learning'. Published in 'Scientific Reports' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "prediction",
      "crack",
      "repair",
      "percentage",
      "self-healing",
      "concrete",
      "machine"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-258",
    "title": "Inception networks, data augmentation and transfer learning in EEG-based photosensitivity diagnosis",
    "authors": [
      "Fernando Moncada Martins",
      "V\u00c3\u00adctor M Gonz\u00c3\u00a1lez",
      "Jos\u00c3\u00a9 R Villar",
      "Beatriz Garc\u00c3\u00ada L\u00c3\u00b3pez",
      "Ana Isabel G\u00c3\u00b3mez-Men\u00c3\u00a9ndez"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Fernando Moncada Martins, V\u00c3\u00adctor M Gonz\u00c3\u00a1lez, Jos\u00c3\u00a9 R Villar, Beatriz Garc\u00c3\u00ada L\u00c3\u00b3pez and Ana Isabel G\u00c3\u00b3mez-Men\u00c3\u00a9ndez, explores the development and application of advanced systems in 'Inception networks, data augmentation and transfer learning in EEG-based photosensitivity diagnosis'. Published in 'Machine Learning: Science and Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "inception",
      "networks",
      "augmentation",
      "transfer",
      "learning",
      "eeg-based",
      "photosensitivity"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-259",
    "title": "A Genetic Algorithm Approach to Adaptive Learning: Enhancing Learner Satisfaction and Performance",
    "authors": [
      "Anju Kalwar",
      "Deepika Shekhawat",
      "Sandeep Joshi",
      "Amit Kumar Bairwa"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Anju Kalwar, Deepika Shekhawat, Sandeep Joshi and Amit Kumar Bairwa, explores the development and application of advanced systems in 'A Genetic Algorithm Approach to Adaptive Learning: Enhancing Learner Satisfaction and Performance'. Published in 'IEEE Access' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "genetic",
      "algorithm",
      "approach",
      "adaptive",
      "learning",
      "enhancing",
      "learner"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-260",
    "title": "Distinguishing Truth from Deception: A Machine Learning Approach to Fake News Dectection",
    "authors": [
      "Mary Ann Paulin"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Mary Ann Paulin, explores the development and application of advanced systems in 'Distinguishing Truth from Deception: A Machine Learning Approach to Fake News Dectection'. Published in 'International Journal of Information Technology, Research and Applications' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "distinguishing",
      "truth",
      "deception",
      "machine",
      "learning",
      "approach",
      "dectection"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-261",
    "title": "Prediction\nof mechanical properties of zinc alloy based on machine learning algorithm",
    "authors": [
      "Kairan Yang",
      "Yisimayili Gulisitan",
      "Junyu Yue3"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Kairan Yang, Yisimayili Gulisitan and Junyu Yue3, explores the development and application of advanced systems in 'Prediction\nof mechanical properties of zinc alloy based on machine learning algorithm'. Published in 'Metalurgija' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "prediction",
      "mechanical",
      "properties",
      "alloy",
      "machine",
      "learning",
      "algorithm"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-262",
    "title": "Evaluating reinforcement learning-based neural controllers for quadcopter navigation in windy conditions",
    "authors": [
      "Alain Andres",
      "Aritz D. Martinez",
      "S\u00c3\u00bcmer Tun\u00c3\u00a7ay",
      "Ignacio Carlucho"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Alain Andres, Aritz D. Martinez, S\u00c3\u00bcmer Tun\u00c3\u00a7ay and Ignacio Carlucho, explores the development and application of advanced systems in 'Evaluating reinforcement learning-based neural controllers for quadcopter navigation in windy conditions'. Published in 'Engineering Applications of Artificial Intelligence' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "evaluating",
      "reinforcement",
      "learning-based",
      "neural",
      "controllers",
      "quadcopter",
      "navigation"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-263",
    "title": "Continual Self-supervised Learning Considering Medical Domain Knowledge in Chest CT Images",
    "authors": [
      "Ren Tasai",
      "Guang Li",
      "Ren Togo",
      "Minghui Tang",
      "Takaaki Yoshimura",
      "Hiroyuki Sugimori",
      "Kenji Hirata",
      "Takahiro Ogawa",
      "Kohsuke Kudo",
      "Miki Haseyama"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Ren Tasai, Guang Li, Ren Togo, Minghui Tang, Takaaki Yoshimura, Hiroyuki Sugimori, Kenji Hirata, Takahiro Ogawa, Kohsuke Kudo and Miki Haseyama, explores the development and application of advanced systems in 'Continual Self-supervised Learning Considering Medical Domain Knowledge in Chest CT Images'. Published in 'ICASSP 2025 - 2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "continual",
      "self-supervised",
      "learning",
      "considering",
      "medical",
      "domain",
      "knowledge"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-264",
    "title": "Forecasting 5G Latency and Throughput in Multicloud Applications: a Machine Learning Approach",
    "authors": [
      "Vivek Bagmar"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Vivek Bagmar, explores the development and application of advanced systems in 'Forecasting 5G Latency and Throughput in Multicloud Applications: a Machine Learning Approach'. Published in '2025 2nd International Conference on Electronic Circuits and Signaling Technologies (ICECST)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "forecasting",
      "latency",
      "throughput",
      "multicloud",
      "applications",
      "machine",
      "learning"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-265",
    "title": "A Modern Machine Learning-Driven Framework for Lung Cancer Detection and Classification",
    "authors": [
      "N Manikandan",
      "P.A.Gowrisankar"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by N Manikandan and P.A.Gowrisankar, explores the development and application of advanced systems in 'A Modern Machine Learning-Driven Framework for Lung Cancer Detection and Classification'. Published in '2025 International Conference on Sustainable Communication Networks and Application (ICSCN)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "modern",
      "machine",
      "learning-driven",
      "framework",
      "cancer",
      "detection",
      "classification"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-266",
    "title": "Generative AI-Powered Chatbots in Virtual Learning Higher Education Environments: Students Expectations",
    "authors": [
      "Andrea E. Cotino-Arbelo",
      "Eduardo Nacimiento-Garc\u00c3\u00ada",
      "Jezabel Molina Gil",
      "Carina S. Gonz\u00c3\u00a1lez-Gonz\u00c3\u00a1lez"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Andrea E. Cotino-Arbelo, Eduardo Nacimiento-Garc\u00c3\u00ada, Jezabel Molina Gil and Carina S. Gonz\u00c3\u00a1lez-Gonz\u00c3\u00a1lez, explores the development and application of advanced systems in 'Generative AI-Powered Chatbots in Virtual Learning Higher Education Environments: Students Expectations'. Published in 'Lecture Notes in Educational Technology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "generative",
      "ai-powered",
      "chatbots",
      "virtual",
      "learning",
      "higher",
      "education"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-267",
    "title": "The Way Forward for STEM Teacher Learning and Practice in Developing Countries",
    "authors": [
      "Vinesh Chandra",
      "Margaret Lloyd",
      "Dann Mallet"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Vinesh Chandra, Margaret Lloyd and Dann Mallet, explores the development and application of advanced systems in 'The Way Forward for STEM Teacher Learning and Practice in Developing Countries'. Published in 'Sustainable Development Goals Series' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "forward",
      "teacher",
      "learning",
      "practice",
      "developing",
      "countries"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-268",
    "title": "AI-driven feedback system: Implementing advanced NLP and openAI for online learning",
    "authors": [
      "Liberius Sabinus Koe",
      "Cecep Kustandi",
      "Eveline Siregar"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Liberius Sabinus Koe, Cecep Kustandi and Eveline Siregar, explores the development and application of advanced systems in 'AI-driven feedback system: Implementing advanced NLP and openAI for online learning'. Published in 'Jurnal Inovasi dan Teknologi Pembelajaran' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "ai-driven",
      "feedback",
      "system",
      "implementing",
      "advanced",
      "openai",
      "online"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-269",
    "title": "Engineering highly active nuclease enzymes with machine learning and high-throughput screening",
    "authors": [
      "Neil Thomas",
      "David Belanger",
      "Chenling Xu",
      "Hanson Lee",
      "Kathleen Hirano",
      "Kosuke Iwai",
      "Vanja Polic",
      "Kendra D. Nyberg",
      "Kevin G. Hoff",
      "Lucas Frenz",
      "Charlie A. Emrich",
      "Jun W. Kim",
      "Mariya Chavarha",
      "Abi Ramanan",
      "Jeremy J. Agresti",
      "Lucy J. Colwell"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Neil Thomas, David Belanger, Chenling Xu, Hanson Lee, Kathleen Hirano, Kosuke Iwai, Vanja Polic, Kendra D. Nyberg, Kevin G. Hoff, Lucas Frenz, Charlie A. Emrich, Jun W. Kim, Mariya Chavarha, Abi Ramanan, Jeremy J. Agresti and Lucy J. Colwell, explores the development and application of advanced systems in 'Engineering highly active nuclease enzymes with machine learning and high-throughput screening'. Published in 'Cell Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "engineering",
      "highly",
      "active",
      "nuclease",
      "enzymes",
      "machine",
      "learning"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-270",
    "title": "Seaswarm: Mitigating Stragglers in Cross-Silo Swarm Learning via Semi-asynchronous Communication",
    "authors": [
      "Xiaoyue Yang",
      "Chuang Hu",
      "Dazhao Cheng"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Xiaoyue Yang, Chuang Hu and Dazhao Cheng, explores the development and application of advanced systems in 'Seaswarm: Mitigating Stragglers in Cross-Silo Swarm Learning via Semi-asynchronous Communication'. Published in 'Communications in Computer and Information Science' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "seaswarm",
      "mitigating",
      "stragglers",
      "cross-silo",
      "swarm",
      "learning",
      "semi-asynchronous"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-271",
    "title": "Quantum Meta-Learning for Adaptive Task Offloading in Dynamic Edge Computing Networks",
    "authors": [
      "Hoa Tran-Dang",
      "Dong-Seong Kim"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Hoa Tran-Dang and Dong-Seong Kim, explores the development and application of advanced systems in 'Quantum Meta-Learning for Adaptive Task Offloading in Dynamic Edge Computing Networks'. Published in '2025 IEEE International Conference on Smart Internet of Things (SmartIoT)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "quantum",
      "meta-learning",
      "adaptive",
      "offloading",
      "dynamic",
      "computing",
      "networks"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-272",
    "title": "Enabling Efficient Federated Learning at the Edge through Sparse Forward-Forward Algorithm",
    "authors": [
      "Ilenia Ficili",
      "Enrico Catalfamo",
      "Fabrizio De Vita",
      "Dario Bruneo",
      "Antonio Puliafito"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Ilenia Ficili, Enrico Catalfamo, Fabrizio De Vita, Dario Bruneo and Antonio Puliafito, explores the development and application of advanced systems in 'Enabling Efficient Federated Learning at the Edge through Sparse Forward-Forward Algorithm'. Published in '2025 IEEE International Conference on Smart Internet of Things (SmartIoT)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "enabling",
      "efficient",
      "federated",
      "learning",
      "sparse",
      "forward-forward",
      "algorithm"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-273",
    "title": "Heterogeneity-Aware Cooperative Federated Edge Learning With Adaptive Computation and Communication Compression",
    "authors": [
      "Zhenxiao Zhang",
      "Zhidong Gao",
      "Yuanxiong Guo",
      "Yanmin Gong"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Zhenxiao Zhang, Zhidong Gao, Yuanxiong Guo and Yanmin Gong, explores the development and application of advanced systems in 'Heterogeneity-Aware Cooperative Federated Edge Learning With Adaptive Computation and Communication Compression'. Published in 'IEEE Transactions on Mobile Computing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "heterogeneity-aware",
      "cooperative",
      "federated",
      "learning",
      "adaptive",
      "computation",
      "communication"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-274",
    "title": "Comprehensive machine learning analysis of liver transplant outcomes in acute alcoholic hepatitis",
    "authors": [
      "P. Gupta",
      "D. Moris",
      "K larusso",
      "C. Kaltenmeier",
      "D. Walls",
      "B. Nguyen",
      "P. Radkani"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by P. Gupta, D. Moris, K larusso, C. Kaltenmeier, D. Walls, B. Nguyen and P. Radkani, explores the development and application of advanced systems in 'Comprehensive machine learning analysis of liver transplant outcomes in acute alcoholic hepatitis'. Published in 'HPB' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "comprehensive",
      "machine",
      "learning",
      "analysis",
      "liver",
      "transplant",
      "outcomes"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-275",
    "title": "Design of machine learning-based controllers for speed control of PMSM drive",
    "authors": [
      "Ashly Mary Tom",
      "J. L. Febin Daya"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Ashly Mary Tom and J. L. Febin Daya, explores the development and application of advanced systems in 'Design of machine learning-based controllers for speed control of PMSM drive'. Published in 'Scientific Reports' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "design",
      "machine",
      "learning-based",
      "controllers",
      "speed",
      "control",
      "drive"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-276",
    "title": "Predicting Steam Processing Degree of Prepared Radix Rehmanniae (Shudihuang) Using Machine Learning",
    "authors": [
      "Qinghua Han",
      "Keyu Zhang",
      "Fangfang Yu",
      "Ye Chen",
      "Jiawen Song",
      "Zhijia Xu",
      "Yichen Zhang",
      "Ruidan Su",
      "Siyang Fan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Qinghua Han, Keyu Zhang, Fangfang Yu, Ye Chen, Jiawen Song, Zhijia Xu, Yichen Zhang, Ruidan Su and Siyang Fan, explores the development and application of advanced systems in 'Predicting Steam Processing Degree of Prepared Radix Rehmanniae (Shudihuang) Using Machine Learning'. Published in 'Pharmaceutical Fronts' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "predicting",
      "steam",
      "processing",
      "degree",
      "prepared",
      "radix",
      "rehmanniae"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-277",
    "title": "Split Happens: Combating Advanced Threats with Split Learning and Function Secret Sharing",
    "authors": [
      "Tanveer Khan",
      "Mindaugas Budzys",
      "Antonis Michalas"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by Tanveer Khan, Mindaugas Budzys and Antonis Michalas, explores the development and application of advanced systems in 'Split Happens: Combating Advanced Threats with Split Learning and Function Secret Sharing'. Published in '2025 IEEE Conference on Communications and Network Security (CNS)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "split",
      "happens",
      "combating",
      "advanced",
      "threats",
      "learning",
      "function"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-278",
    "title": "Outcomes of team based learning in teaching medical ethics: a systematic review",
    "authors": [
      "Maryam Alizadeh",
      "Shirin Bahrami",
      "Zeinabe Saeedi",
      "Loghman Khaninezhad"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Maryam Alizadeh, Shirin Bahrami, Zeinabe Saeedi and Loghman Khaninezhad, explores the development and application of advanced systems in 'Outcomes of team based learning in teaching medical ethics: a systematic review'. Published in 'BMC Medical Ethics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "outcomes",
      "learning",
      "teaching",
      "medical",
      "ethics",
      "systematic",
      "review"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-279",
    "title": "Daily runoff prediction modelling using machine learning methods based on meteorological parameters",
    "authors": [
      "Zhanyun Zhu",
      "Yue Zhou",
      "Guangyu Chen",
      "Xinhua Zhao",
      "Qiang Li",
      "Weiwei Zhang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Zhanyun Zhu, Yue Zhou, Guangyu Chen, Xinhua Zhao, Qiang Li and Weiwei Zhang, explores the development and application of advanced systems in 'Daily runoff prediction modelling using machine learning methods based on meteorological parameters'. Published in 'Hydrology Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "daily",
      "runoff",
      "prediction",
      "modelling",
      "machine",
      "learning",
      "methods"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-280",
    "title": "Enhancing E-learning through Facebook Groups: The Mediating Role of Student Engagement",
    "authors": [
      "",
      "Mollika Ghosh"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by  and Mollika Ghosh, explores the development and application of advanced systems in 'Enhancing E-learning through Facebook Groups: The Mediating Role of Student Engagement'. Published in 'BUFT Journal of Business &amp; Economics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "enhancing",
      "e-learning",
      "facebook",
      "groups",
      "mediating",
      "student",
      "engagement"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-281",
    "title": "A Novel Machine Learning Framework for Seismic Vulnerability Assessment of Urban Infrastructure",
    "authors": [
      "Kaushik Gondaliya",
      "Sneha Kumari",
      "Jignesh Amin",
      "Abdullah Ansari",
      "RC Bush"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Kaushik Gondaliya, Sneha Kumari, Jignesh Amin, Abdullah Ansari and RC Bush, explores the development and application of advanced systems in 'A Novel Machine Learning Framework for Seismic Vulnerability Assessment of Urban Infrastructure'. Published in '2025 International Conference for Artificial Intelligence, Applications, Innovation and Ethics (AI2E)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "novel",
      "machine",
      "learning",
      "framework",
      "seismic",
      "vulnerability",
      "assessment"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-282",
    "title": "Smart Learning in the 21st Century: Advancing Constructionism Across Three Digital Epochs",
    "authors": [
      "Ilya Levin",
      "Alexei L. Semenov",
      "Mikael Gorsky"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Corazon Aquino",
    "abstract": "This research, authored by Ilya Levin, Alexei L. Semenov and Mikael Gorsky, explores the development and application of advanced systems in 'Smart Learning in the 21st Century: Advancing Constructionism Across Three Digital Epochs'. Published in 'Education Sciences' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "smart",
      "learning",
      "century",
      "advancing",
      "constructionism",
      "across",
      "three"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-283",
    "title": "Understanding the Hidden Curriculum in Second Language Writing Classrooms: Learning Beyond Writing",
    "authors": [
      "Yu Zhou",
      "Shulin Yu"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Benigno Aquino",
    "abstract": "This research, authored by Yu Zhou and Shulin Yu, explores the development and application of advanced systems in 'Understanding the Hidden Curriculum in Second Language Writing Classrooms: Learning Beyond Writing'. Published in 'European Journal of Education' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "understanding",
      "hidden",
      "curriculum",
      "second",
      "language",
      "writing",
      "classrooms"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-284",
    "title": "Enhanced Fraud Detection in Financial Services Using Artificial Intelligence and Machine Learning",
    "authors": [
      "Tianyi Wang"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Miriam Santiago",
    "abstract": "This research, authored by Tianyi Wang, explores the development and application of advanced systems in 'Enhanced Fraud Detection in Financial Services Using Artificial Intelligence and Machine Learning'. Published in '2025 IEEE International Conference on Computation, Big-Data and Engineering (ICCBE)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "enhanced",
      "fraud",
      "detection",
      "financial",
      "services",
      "artificial",
      "intelligence"
    ],
    "relevanceScore": 77
  },
  {
    "id": "thesis-285",
    "title": "A Developmentally-Staged Transformer Framework for Progressive Cognitive Learning in Language Understanding",
    "authors": [
      "Jothi Prakash V",
      "Arul Antran Vijay S",
      "Gopikrishnan Sundaram",
      "Ganeshkumar Pugalendhi"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Manuel Quezon",
    "abstract": "This research, authored by Jothi Prakash V, Arul Antran Vijay S, Gopikrishnan Sundaram and Ganeshkumar Pugalendhi, explores the development and application of advanced systems in 'A Developmentally-Staged Transformer Framework for Progressive Cognitive Learning in Language Understanding'. Published in 'IEEE Transactions on Cognitive and Developmental Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "developmentally-staged",
      "transformer",
      "framework",
      "progressive",
      "cognitive",
      "learning",
      "language"
    ],
    "relevanceScore": 76
  },
  {
    "id": "thesis-286",
    "title": "Modern English teaching tools: balancing engagement and effectiveness in the learning process",
    "authors": [
      "Nataliia Hodovanets",
      "Viktoriya Lehan"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ramon Magsaysay",
    "abstract": "This research, authored by Nataliia Hodovanets and Viktoriya Lehan, explores the development and application of advanced systems in 'Modern English teaching tools: balancing engagement and effectiveness in the learning process'. Published in '\u00d0\u00a1\u00d1\u0192\u00d1\u2021\u00d0\u00b0\u00d1\u0081\u00d0\u00bd\u00d1\u2013 \u00d0\u00b4\u00d0\u00be\u00d1\u0081\u00d0\u00bb\u00d1\u2013\u00d0\u00b4\u00d0\u00b6\u00d0\u00b5\u00d0\u00bd\u00d0\u00bd\u00d1\u008f \u00d0\u00b7 \u00d1\u2013\u00d0\u00bd\u00d0\u00be\u00d0\u00b7\u00d0\u00b5\u00d0\u00bc\u00d0\u00bd\u00d0\u00be\u00d1\u2014 \u00d1\u201e\u00d1\u2013\u00d0\u00bb\u00d0\u00be\u00d0\u00bb\u00d0\u00be\u00d0\u00b3\u00d1\u2013\u00d1\u2014' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "modern",
      "english",
      "teaching",
      "tools",
      "balancing",
      "engagement",
      "effectiveness"
    ],
    "relevanceScore": 90
  },
  {
    "id": "thesis-287",
    "title": "Developing English-Speaking Materials for  Broadcasting Students by Applying Project-Based Learning",
    "authors": [
      "Maghfirah Annisa",
      "Nazriani Lubis"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Dr. Jose Laurel",
    "abstract": "This research, authored by Maghfirah Annisa and Nazriani Lubis, explores the development and application of advanced systems in 'Developing English-Speaking Materials for  Broadcasting Students by Applying Project-Based Learning'. Published in 'Indonesian Journal of ELT and Applied Linguistics' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "developing",
      "english-speaking",
      "materials",
      "broadcasting",
      "students",
      "applying",
      "project-based"
    ],
    "relevanceScore": 89
  },
  {
    "id": "thesis-288",
    "title": "Exploring lifelong literacy learning in digital gameplay among midlife-to-older adults",
    "authors": [
      "Yanan Shen",
      "Habibah Ab Jalil"
    ],
    "department": "Education",
    "year": 2025,
    "adviser": "Engr. Fidel Ramos",
    "abstract": "This research, authored by Yanan Shen and Habibah Ab Jalil, explores the development and application of advanced systems in 'Exploring lifelong literacy learning in digital gameplay among midlife-to-older adults'. Published in 'Educational Gerontology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "exploring",
      "lifelong",
      "literacy",
      "learning",
      "digital",
      "gameplay",
      "among"
    ],
    "relevanceScore": 88
  },
  {
    "id": "thesis-289",
    "title": "THE SPATIAL DISTRIBUTION OF THE TROPICAL CYCLONE PRESSURE USING MACHINE LEARNING TECHNIQUE",
    "authors": [
      "Jihyeon Youn",
      "Sangyoung Son"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Ricardo Dela Cruz",
    "abstract": "This research, authored by Jihyeon Youn and Sangyoung Son, explores the development and application of advanced systems in 'THE SPATIAL DISTRIBUTION OF THE TROPICAL CYCLONE PRESSURE USING MACHINE LEARNING TECHNIQUE'. Published in 'Coastal Engineering Proceedings' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "spatial",
      "distribution",
      "tropical",
      "cyclone",
      "pressure",
      "machine",
      "learning"
    ],
    "relevanceScore": 87
  },
  {
    "id": "thesis-290",
    "title": "Personalized medicine in colorectal mucinous adenocarcinoma (MAC): Machine learning\u00e2\u20ac\u201cbased prognostic models.",
    "authors": [
      "Tala Abdulsalam Alshwayyat",
      "Sakhr Alshwayyat",
      "Mustafa Alshwayyat",
      "Noor Almasri",
      "Abdalwahab M.Z.M. Alenezy",
      "Kholoud Alqasem",
      "Salsabeel Aljawabrah"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Elena Santos",
    "abstract": "This research, authored by Tala Abdulsalam Alshwayyat, Sakhr Alshwayyat, Mustafa Alshwayyat, Noor Almasri, Abdalwahab M.Z.M. Alenezy, Kholoud Alqasem and Salsabeel Aljawabrah, explores the development and application of advanced systems in 'Personalized medicine in colorectal mucinous adenocarcinoma (MAC): Machine learning\u00e2\u20ac\u201cbased prognostic models.'. Published in 'Journal of Clinical Oncology' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "personalized",
      "medicine",
      "colorectal",
      "mucinous",
      "adenocarcinoma",
      "machine",
      "learning\u00e2\u20ac\u201cbased"
    ],
    "relevanceScore": 86
  },
  {
    "id": "thesis-291",
    "title": "A Review of Outlier Detection Techniques in Cybersecurity: A Machine Learning Perspective",
    "authors": [
      "Fatima Rilwan Ododo",
      "Ridwan Rahmat Sadiq"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Antonio Luna",
    "abstract": "This research, authored by Fatima Rilwan Ododo and Ridwan Rahmat Sadiq, explores the development and application of advanced systems in 'A Review of Outlier Detection Techniques in Cybersecurity: A Machine Learning Perspective'. Published in 'Journal of Science Innovation and Technology Research' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "review",
      "outlier",
      "detection",
      "techniques",
      "cybersecurity",
      "machine",
      "learning"
    ],
    "relevanceScore": 85
  },
  {
    "id": "thesis-292",
    "title": "Mental Health Vulnerabilities and Environmental Justice: A Collaborative Online International Learning Experience",
    "authors": [
      "Sara J. Newman",
      "Melanie Baker",
      "Linda Sue Hammonds"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Jose Rizal",
    "abstract": "This research, authored by Sara J. Newman, Melanie Baker and Linda Sue Hammonds, explores the development and application of advanced systems in 'Mental Health Vulnerabilities and Environmental Justice: A Collaborative Online International Learning Experience'. Published in 'Creative Nursing' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "mental",
      "health",
      "vulnerabilities",
      "environmental",
      "justice",
      "collaborative",
      "online"
    ],
    "relevanceScore": 84
  },
  {
    "id": "thesis-293",
    "title": "IDENTIFIKASI ISYARAT TANGAN BISINDO DENGAN ALGORITMA CNN DAN TRANSFER LEARNING MENGGUNAKAN MOBILENETV2",
    "authors": [
      "Raihan Fahlevi",
      "Chaerur Rozikin"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Maria Clara",
    "abstract": "This research, authored by Raihan Fahlevi and Chaerur Rozikin, explores the development and application of advanced systems in 'IDENTIFIKASI ISYARAT TANGAN BISINDO DENGAN ALGORITMA CNN DAN TRANSFER LEARNING MENGGUNAKAN MOBILENETV2'. Published in 'JATI (Jurnal Mahasiswa Teknik Informatika)' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "identifikasi",
      "isyarat",
      "tangan",
      "bisindo",
      "dengan",
      "algoritma",
      "transfer"
    ],
    "relevanceScore": 83
  },
  {
    "id": "thesis-294",
    "title": "Using Artificial Intelligence in Academic Library Services: Transforming the Future of Learning",
    "authors": [
      "Sudipta Shee"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Francisco Balagtas",
    "abstract": "This research, authored by Sudipta Shee, explores the development and application of advanced systems in 'Using Artificial Intelligence in Academic Library Services: Transforming the Future of Learning'. Published in 'International Journal of Science, Architecture, Technology and Environment' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "artificial",
      "intelligence",
      "academic",
      "library",
      "services",
      "transforming",
      "future"
    ],
    "relevanceScore": 82
  },
  {
    "id": "thesis-295",
    "title": "Predicting Employees Under Stress for Pre-emptive Remediation Using Machine Learning Algorithms",
    "authors": [
      "K. Ramalakshmi",
      "Ms.M. Poojitha"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Apolinario Mabini",
    "abstract": "This research, authored by K. Ramalakshmi and Ms.M. Poojitha, explores the development and application of advanced systems in 'Predicting Employees Under Stress for Pre-emptive Remediation Using Machine Learning Algorithms'. Published in 'International Journal of Research Publication and Reviews' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "predicting",
      "employees",
      "stress",
      "pre-emptive",
      "remediation",
      "machine",
      "learning"
    ],
    "relevanceScore": 81
  },
  {
    "id": "thesis-296",
    "title": "PENINGKATAN KEMAMPUAN BERPIKIR KRITIS SISWA SEKOLAH DASAR MELALUI CHALLENGE-BASED LEARNING (CBL)",
    "authors": [
      "Fariha Azmi",
      "Taofik",
      "Dudung Amir Sholeh"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Arch. Juan Luna",
    "abstract": "This research, authored by Fariha Azmi, Taofik and Dudung Amir Sholeh, explores the development and application of advanced systems in 'PENINGKATAN KEMAMPUAN BERPIKIR KRITIS SISWA SEKOLAH DASAR MELALUI CHALLENGE-BASED LEARNING (CBL)'. Published in 'caXra: Jurnal Pendidikan Sekolah Dasar' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "peningkatan",
      "kemampuan",
      "berpikir",
      "kritis",
      "siswa",
      "sekolah",
      "dasar"
    ],
    "relevanceScore": 80
  },
  {
    "id": "thesis-297",
    "title": "Hubungan antara Learning Agility dengan Innovative Work Behavior pada Guru SMA X",
    "authors": [
      "Fani Ariska",
      "Ifani Candra",
      "Isna Asyri Syahrina"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Prof. Melchora Aquino",
    "abstract": "This research, authored by Fani Ariska, Ifani Candra and Isna Asyri Syahrina, explores the development and application of advanced systems in 'Hubungan antara Learning Agility dengan Innovative Work Behavior pada Guru SMA X'. Published in 'Psyche 165 Journal' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "hubungan",
      "antara",
      "learning",
      "agility",
      "dengan",
      "innovative",
      "behavior"
    ],
    "relevanceScore": 79
  },
  {
    "id": "thesis-298",
    "title": "Pseudo-learning to\u00c2\u00a0Identify Prototype Networks for\u00c2\u00a0Interpreting Multi-layered Neural Networks",
    "authors": [
      "Ryotaro Kamimura"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Dr. Gabriela Silang",
    "abstract": "This research, authored by Ryotaro Kamimura, explores the development and application of advanced systems in 'Pseudo-learning to\u00c2\u00a0Identify Prototype Networks for\u00c2\u00a0Interpreting Multi-layered Neural Networks'. Published in 'Lecture Notes in Networks and Systems' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "pseudo-learning",
      "identify",
      "prototype",
      "networks",
      "interpreting",
      "multi-layered",
      "neural"
    ],
    "relevanceScore": 78
  },
  {
    "id": "thesis-299",
    "title": "A Discovery Learning Model Based on Viewing Activities in Teaching News Texts",
    "authors": [
      "Rustiana Angela",
      "Ahmad Fikri Aziz Masduki",
      "Masduki Duriyat"
    ],
    "department": "Information Technology",
    "year": 2025,
    "adviser": "Engr. Emilio Aguinaldo",
    "abstract": "This research, authored by Rustiana Angela, Ahmad Fikri Aziz Masduki and Masduki Duriyat, explores the development and application of advanced systems in 'A Discovery Learning Model Based on Viewing Activities in Teaching News Texts'. Published in 'TOFEDU: The Future of Education Journal' in 2025, the study investigates key methodologies, frameworks, and practical implications within the field, providing critical insights and recommendations for future academic and professional endeavors.",
    "keywords": [
      "deep learning",
      "discovery",
      "learning",
      "model",
      "viewing",
      "activities",
      "teaching",
      "texts"
    ],
    "relevanceScore": 77
  }
];

export function getAllTheses(): Thesis[] {
  if (typeof window === 'undefined') return mockTheses;
  const saved = localStorage.getItem('local_theses');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      return mockTheses;
    }
  }
  return mockTheses;
}

export function searchTheses(
  query: string,
  filters?: {
    department?: string;
    yearFrom?: number;
    yearTo?: number;
    sortBy?: string;
  }
): Thesis[] {
  let results = [...getAllTheses()];

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.abstract.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q)) ||
        t.authors.some((a) => a.toLowerCase().includes(q)) ||
        t.department.toLowerCase().includes(q)
    );
  }

  if (filters?.department) {
    results = results.filter((t) => t.department === filters.department);
  }

  if (filters?.yearFrom) {
    results = results.filter((t) => t.year >= filters.yearFrom!);
  }

  if (filters?.yearTo) {
    results = results.filter((t) => t.year <= filters.yearTo!);
  }

  if (filters?.sortBy === 'date') {
    results.sort((a, b) => b.year - a.year);
  } else if (filters?.sortBy === 'title') {
    results.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    // Relevance sort: if scores are equal, newest first (prioritize 'thesis-new-')
    results.sort((a, b) => {
      if (b.relevanceScore !== a.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }
      return b.id.localeCompare(a.id);
    });
  }

  return results;
}

export function getThesisById(id: string): Thesis | undefined {
  return getAllTheses().find((t) => t.id === id);
}

export function getRelatedTheses(thesis: Thesis, count: number = 3): Thesis[] {
  return getAllTheses()
    .filter((t) => t.id !== thesis.id && t.department === thesis.department)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, count);
}

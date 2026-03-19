export const mcqBank = {
  Technology: {
    "Software Development": [
      {
        question: "Which HTTP method is used to update a resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: "PUT",
        explanation: "PUT is used to update an existing resource."
      },
      {
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: "Queue",
        explanation: "Queue follows the First In First Out principle."
      },
      {
        question: "What does git commit do?",
        options: [
          "Uploads code to GitHub",
          "Saves changes locally",
          "Deletes repository",
          "Creates a new branch"
        ],
        correctAnswer: "Saves changes locally",
        explanation: "git commit records changes in the local repository."
      },
      {
        question: "Which programming paradigm does JavaScript support?",
        options: [
          "Only Object-Oriented",
          "Only Functional",
          "Procedural only",
          "Multiple paradigms"
        ],
        correctAnswer: "Multiple paradigms",
        explanation: "JavaScript supports functional, object-oriented, and procedural programming."
      },
      {
        question: "What is the purpose of REST APIs?",
        options: [
          "Design user interfaces",
          "Enable communication between systems",
          "Store data permanently",
          "Compile source code"
        ],
        correctAnswer: "Enable communication between systems",
        explanation: "REST APIs allow different systems to communicate over HTTP."
      },
      {
        question: "Which keyword is used to define a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctAnswer: "const",
        explanation: "`const` is used to declare variables that cannot be reassigned."
      },
      {
        question: "What is Big O notation used for?",
        options: [
          "Measuring code readability",
          "Analyzing algorithm performance",
          "Debugging applications",
          "Version control"
        ],
        correctAnswer: "Analyzing algorithm performance",
        explanation: "Big O notation describes time and space complexity of algorithms."
      },
      {
        question: "Which tool is commonly used for version control?",
        options: ["Docker", "Jenkins", "Git", "Kubernetes"],
        correctAnswer: "Git",
        explanation: "Git is a widely used distributed version control system."
      },
      {
        question: "What does SQL stand for?",
        options: [
          "Simple Query Language",
          "Structured Query Language",
          "Standard Question Language",
          "System Query Logic"
        ],
        correctAnswer: "Structured Query Language",
        explanation: "SQL is used to manage and query relational databases."
      },
      {
        question: "Which lifecycle model follows iterative development?",
        options: ["Waterfall", "V-Model", "Agile", "Spiral only"],
        correctAnswer: "Agile",
        explanation: "Agile development uses iterative and incremental cycles."
      }
    ],

    "IT Services": [
      {
        question: "What is the primary goal of IT service management (ITSM)?",
        options: [
          "Develop new software",
          "Align IT services with business needs",
          "Manage hardware manufacturing",
          "Create databases"
        ],
        correctAnswer: "Align IT services with business needs",
        explanation: "ITSM focuses on delivering IT services that meet business requirements."
      },
      {
        question: "Which framework is widely used for IT service management?",
        options: ["COBIT", "ITIL", "Agile", "Scrum"],
        correctAnswer: "ITIL",
        explanation: "ITIL provides best practices for IT service management."
      },
      {
        question: "What does SLA stand for in IT services?",
        options: [
          "Service Level Agreement",
          "Software License Agreement",
          "System Load Allocation",
          "Server Level Access"
        ],
        correctAnswer: "Service Level Agreement",
        explanation: "An SLA defines the expected service performance between provider and client."
      },
      {
        question: "Which IT service model provides resources over the internet on demand?",
        options: ["On-premises", "Cloud services", "Colocation", "Bare metal"],
        correctAnswer: "Cloud services",
        explanation: "Cloud services deliver computing resources on a pay-as-you-go basis."
      },
      {
        question: "What is incident management primarily concerned with?",
        options: [
          "Preventing future incidents",
          "Restoring normal service quickly",
          "Updating documentation",
          "System design"
        ],
        correctAnswer: "Restoring normal service quickly",
        explanation: "Incident management aims to minimize downtime and restore services fast."
      },
      {
        question: "Which role acts as the single point of contact for users in IT services?",
        options: ["System Admin", "Service Desk", "Network Engineer", "Project Manager"],
        correctAnswer: "Service Desk",
        explanation: "The service desk handles user requests and incidents."
      },
      {
        question: "What does outsourcing in IT services mean?",
        options: [
          "Hiring internal staff",
          "Delegating IT functions to third parties",
          "Automating all services",
          "Using open-source software"
        ],
        correctAnswer: "Delegating IT functions to third parties",
        explanation: "Outsourcing transfers IT responsibilities to external service providers."
      },
      {
        question: "Which metric measures system availability?",
        options: ["Latency", "Uptime", "Bandwidth", "Throughput"],
        correctAnswer: "Uptime",
        explanation: "Uptime indicates the percentage of time a system is operational."
      },
      {
        question: "What is change management in IT services?",
        options: [
          "Managing employee roles",
          "Controlling modifications to IT systems",
          "Updating user passwords",
          "Monitoring network traffic"
        ],
        correctAnswer: "Controlling modifications to IT systems",
        explanation: "Change management ensures changes are implemented with minimal risk."
      },
      {
        question: "Which IT service focuses on proactive issue prevention?",
        options: [
          "Incident management",
          "Problem management",
          "Service request management",
          "Access management"
        ],
        correctAnswer: "Problem management",
        explanation: "Problem management identifies root causes to prevent recurring incidents."
      }
    ],
    // 🚧 Coming soon sections
    "Cybersecurity": [
      {
        question: "What is the primary goal of cybersecurity?",
        options: [
          "Increase system speed",
          "Protect systems and data",
          "Develop new software",
          "Improve user interface"
        ],
        correctAnswer: "Protect systems and data",
        explanation: "Cybersecurity focuses on protecting systems, networks, and data from attacks."
      },
      {
        question: "Which type of attack involves tricking users into revealing sensitive information?",
        options: ["DDoS", "Phishing", "Malware", "Brute force"],
        correctAnswer: "Phishing",
        explanation: "Phishing uses deceptive messages to steal sensitive data."
      },
      {
        question: "What does a firewall do?",
        options: [
          "Encrypts files",
          "Monitors employee activity",
          "Controls incoming and outgoing network traffic",
          "Removes viruses"
        ],
        correctAnswer: "Controls incoming and outgoing network traffic",
        explanation: "Firewalls filter traffic based on security rules."
      },
      {
        question: "Which malware encrypts data and demands payment?",
        options: ["Spyware", "Worm", "Ransomware", "Adware"],
        correctAnswer: "Ransomware",
        explanation: "Ransomware locks or encrypts data until a ransom is paid."
      },
      {
        question: "What does CIA stand for in cybersecurity?",
        options: [
          "Control, Inspect, Audit",
          "Confidentiality, Integrity, Availability",
          "Cybersecurity, Information, Access",
          "Compliance, Identity, Authorization"
        ],
        correctAnswer: "Confidentiality, Integrity, Availability",
        explanation: "The CIA triad represents the core principles of security."
      },
      {
        question: "Which authentication method uses two forms of verification?",
        options: [
          "Single sign-on",
          "Biometric authentication",
          "Two-factor authentication",
          "Password-only login"
        ],
        correctAnswer: "Two-factor authentication",
        explanation: "2FA requires two different authentication factors."
      },
      {
        question: "What is a DDoS attack?",
        options: [
          "An attempt to steal passwords",
          "A virus that spreads automatically",
          "Overwhelming a system with traffic",
          "Unauthorized data modification"
        ],
        correctAnswer: "Overwhelming a system with traffic",
        explanation: "DDoS attacks flood systems to make services unavailable."
      },
      {
        question: "Which tool is commonly used to detect network intrusions?",
        options: ["IDS", "VPN", "Proxy", "Load balancer"],
        correctAnswer: "IDS",
        explanation: "Intrusion Detection Systems monitor networks for suspicious activity."
      },
      {
        question: "What is encryption?",
        options: [
          "Deleting sensitive data",
          "Backing up files",
          "Converting data into unreadable format",
          "Restricting user access"
        ],
        correctAnswer: "Converting data into unreadable format",
        explanation: "Encryption protects data by making it unreadable without a key."
      },
      {
        question: "Which practice helps prevent unauthorized access?",
        options: [
          "Using default passwords",
          "Regular software updates",
          "Disabling firewalls",
          "Sharing credentials"
        ],
        correctAnswer: "Regular software updates",
        explanation: "Updates patch vulnerabilities that attackers could exploit."
      }
    ],

    "Cloud Computing": [
      {
        question: "What is cloud computing?",
        options: [
          "Storing data only on local devices",
          "Delivering computing services over the internet",
          "Using physical servers exclusively",
          "A type of networking protocol"
        ],
        correctAnswer: "Delivering computing services over the internet",
        explanation: "Cloud computing provides on-demand access to computing resources via the internet."
      },
      {
        question: "Which cloud service model provides virtual machines?",
        options: ["SaaS", "PaaS", "IaaS", "FaaS"],
        correctAnswer: "IaaS",
        explanation: "Infrastructure as a Service offers virtualized computing resources."
      },
      {
        question: "What does SaaS stand for?",
        options: [
          "Software as a Service",
          "System as a Service",
          "Storage as a Service",
          "Server as a Service"
        ],
        correctAnswer: "Software as a Service",
        explanation: "SaaS delivers software applications over the internet."
      },
      {
        question: "Which cloud deployment model is shared by multiple organizations?",
        options: ["Private cloud", "Public cloud", "Hybrid cloud", "Community cloud"],
        correctAnswer: "Public cloud",
        explanation: "Public clouds are shared infrastructures offered by third-party providers."
      },
      {
        question: "What is elasticity in cloud computing?",
        options: [
          "Fixed resource allocation",
          "Automatic scaling of resources",
          "Manual server upgrades",
          "Data encryption"
        ],
        correctAnswer: "Automatic scaling of resources",
        explanation: "Elasticity allows resources to scale up or down based on demand."
      },
      {
        question: "Which provider is a major cloud service vendor?",
        options: ["AWS", "GitHub", "Oracle VM only", "Docker Hub"],
        correctAnswer: "AWS",
        explanation: "Amazon Web Services is one of the leading cloud service providers."
      },
      {
        question: "What is a key benefit of cloud computing?",
        options: [
          "High upfront hardware cost",
          "Limited scalability",
          "Pay-as-you-go pricing",
          "Manual maintenance"
        ],
        correctAnswer: "Pay-as-you-go pricing",
        explanation: "Users pay only for the resources they consume."
      },
      {
        question: "Which service is used for cloud storage?",
        options: ["EC2", "S3", "Lambda", "CloudFront"],
        correctAnswer: "S3",
        explanation: "Amazon S3 is an object storage service."
      },
      {
        question: "What is virtualization?",
        options: [
          "Running software without hardware",
          "Creating virtual versions of resources",
          "Encrypting cloud data",
          "Monitoring cloud traffic"
        ],
        correctAnswer: "Creating virtual versions of resources",
        explanation: "Virtualization enables multiple virtual machines on a single physical system."
      },
      {
        question: "Which concept ensures high availability in cloud systems?",
        options: [
          "Single-region deployment",
          "Load balancing",
          "Manual backups",
          "Local storage"
        ],
        correctAnswer: "Load balancing",
        explanation: "Load balancing distributes traffic to maintain availability and reliability."
      }
    ],

    "Artificial Intelligence/Machine Learning": [
      {
        question: "What is Artificial Intelligence?",
        options: [
          "Traditional programming",
          "Simulation of human intelligence by machines",
          "A database management system",
          "Computer hardware design"
        ],
        correctAnswer: "Simulation of human intelligence by machines",
        explanation: "AI enables machines to mimic human thinking and decision-making."
      },
      {
        question: "What is Machine Learning?",
        options: [
          "Explicitly programmed logic",
          "Learning through hardcoded rules",
          "Systems that learn from data",
          "Manual data analysis"
        ],
        correctAnswer: "Systems that learn from data",
        explanation: "Machine Learning allows systems to improve performance using data."
      },
      {
        question: "Which type of learning uses labeled data?",
        options: ["Unsupervised learning", "Reinforcement learning", "Supervised learning", "Deep learning"],
        correctAnswer: "Supervised learning",
        explanation: "Supervised learning trains models using labeled input-output pairs."
      },
      {
        question: "Which algorithm is commonly used for classification?",
        options: ["Linear Regression", "K-Means", "Decision Tree", "Apriori"],
        correctAnswer: "Decision Tree",
        explanation: "Decision trees are widely used for classification tasks."
      },
      {
        question: "What is overfitting in machine learning?",
        options: [
          "Model performs well on unseen data",
          "Model memorizes training data",
          "Model trains too fast",
          "Model has low accuracy"
        ],
        correctAnswer: "Model memorizes training data",
        explanation: "Overfitting occurs when a model fails to generalize to new data."
      },
      {
        question: "Which metric is commonly used to evaluate classification models?",
        options: ["MSE", "RMSE", "Accuracy", "R-squared"],
        correctAnswer: "Accuracy",
        explanation: "Accuracy measures correct predictions over total predictions."
      },
      {
        question: "What is a neural network inspired by?",
        options: [
          "Computer architecture",
          "Human brain",
          "Database systems",
          "Operating systems"
        ],
        correctAnswer: "Human brain",
        explanation: "Neural networks are inspired by biological neurons."
      },
      {
        question: "Which library is widely used for machine learning in Python?",
        options: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
        correctAnswer: "Scikit-learn",
        explanation: "Scikit-learn provides efficient ML tools and algorithms."
      },
      {
        question: "What is reinforcement learning based on?",
        options: [
          "Labeled datasets",
          "Clustering techniques",
          "Reward and penalty",
          "Statistical distributions"
        ],
        correctAnswer: "Reward and penalty",
        explanation: "Reinforcement learning learns optimal actions via rewards."
      },
      {
        question: "Which AI application involves understanding human language?",
        options: ["Computer Vision", "Robotics", "Natural Language Processing", "Speech Synthesis"],
        correctAnswer: "Natural Language Processing",
        explanation: "NLP enables machines to understand and process human language."
      }
    ],
    "Data Science & Analytics": [
      {
        question: "What is data science primarily concerned with?",
        options: [
          "Designing hardware",
          "Extracting insights from data",
          "Writing system software",
          "Managing networks"
        ],
        correctAnswer: "Extracting insights from data",
        explanation: "Data science focuses on analyzing data to derive meaningful insights."
      },
      {
        question: "Which step comes first in the data science lifecycle?",
        options: [
          "Model building",
          "Data visualization",
          "Problem definition",
          "Deployment"
        ],
        correctAnswer: "Problem definition",
        explanation: "Clearly defining the problem guides the entire analysis."
      },
      {
        question: "Which tool is commonly used for data analysis in Python?",
        options: ["React", "Pandas", "Flask", "Django"],
        correctAnswer: "Pandas",
        explanation: "Pandas is widely used for data manipulation and analysis."
      },
      {
        question: "What is data cleaning?",
        options: [
          "Deleting all raw data",
          "Fixing or removing incorrect data",
          "Encrypting datasets",
          "Visualizing data"
        ],
        correctAnswer: "Fixing or removing incorrect data",
        explanation: "Data cleaning improves data quality by correcting errors."
      },
      {
        question: "Which visualization best shows trends over time?",
        options: ["Pie chart", "Histogram", "Line chart", "Scatter plot"],
        correctAnswer: "Line chart",
        explanation: "Line charts are ideal for showing trends across time."
      },
      {
        question: "What does ETL stand for?",
        options: [
          "Extract, Transform, Load",
          "Evaluate, Test, Launch",
          "Encode, Transfer, Link",
          "Extract, Transfer, Log"
        ],
        correctAnswer: "Extract, Transform, Load",
        explanation: "ETL processes move and prepare data for analysis."
      },
      {
        question: "Which metric measures central tendency?",
        options: ["Variance", "Standard deviation", "Mean", "Range"],
        correctAnswer: "Mean",
        explanation: "Mean represents the average value of a dataset."
      },
      {
        question: "What is a dashboard in analytics?",
        options: [
          "A database table",
          "A server monitor",
          "A visual summary of key metrics",
          "A programming framework"
        ],
        correctAnswer: "A visual summary of key metrics",
        explanation: "Dashboards display important metrics in a visual format."
      },
      {
        question: "Which SQL clause is used to filter records?",
        options: ["SELECT", "ORDER BY", "WHERE", "GROUP BY"],
        correctAnswer: "WHERE",
        explanation: "WHERE filters rows based on conditions."
      },
      {
        question: "What is the purpose of data normalization?",
        options: [
          "Increase data size",
          "Reduce redundancy and scale values",
          "Encrypt datasets",
          "Improve network speed"
        ],
        correctAnswer: "Reduce redundancy and scale values",
        explanation: "Normalization improves consistency and model performance."
      }
    ],
    "Internet & Web Services": [
      {
        question: "What is the primary function of the Internet?",
        options: [
          "Local file storage",
          "Global communication and information sharing",
          "Hardware manufacturing",
          "Operating system management"
        ],
        correctAnswer: "Global communication and information sharing",
        explanation: "The Internet enables worldwide communication and data exchange."
      },
      {
        question: "Which protocol is used to transfer web pages?",
        options: ["FTP", "HTTP", "SMTP", "SNMP"],
        correctAnswer: "HTTP",
        explanation: "HTTP is used for communication between web browsers and servers."
      },
      {
        question: "What does a web server do?",
        options: [
          "Designs websites",
          "Hosts and serves web content",
          "Stores passwords",
          "Manages databases only"
        ],
        correctAnswer: "Hosts and serves web content",
        explanation: "Web servers deliver web pages to users’ browsers."
      },
      {
        question: "Which language is primarily used to structure web pages?",
        options: ["CSS", "JavaScript", "HTML", "Python"],
        correctAnswer: "HTML",
        explanation: "HTML defines the structure and content of web pages."
      },
      {
        question: "What is a domain name?",
        options: [
          "An IP address",
          "A human-readable website address",
          "A hosting service",
          "A web browser"
        ],
        correctAnswer: "A human-readable website address",
        explanation: "Domain names map to IP addresses for easier access."
      },
      {
        question: "Which service translates domain names to IP addresses?",
        options: ["DHCP", "DNS", "FTP", "TCP"],
        correctAnswer: "DNS",
        explanation: "DNS resolves domain names into IP addresses."
      },
      {
        question: "What is a web browser?",
        options: [
          "A web server",
          "A tool to view web pages",
          "A database system",
          "A programming language"
        ],
        correctAnswer: "A tool to view web pages",
        explanation: "Web browsers allow users to access and view websites."
      },
      {
        question: "Which protocol is used to send emails?",
        options: ["HTTP", "FTP", "SMTP", "POP3"],
        correctAnswer: "SMTP",
        explanation: "SMTP is used for sending emails across networks."
      },
      {
        question: "What does HTTPS provide in addition to HTTP?",
        options: [
          "Faster loading",
          "Encryption and security",
          "Offline access",
          "File compression"
        ],
        correctAnswer: "Encryption and security",
        explanation: "HTTPS secures data using encryption (SSL/TLS)."
      },
      {
        question: "Which technology enables dynamic web page behavior?",
        options: ["HTML", "CSS", "JavaScript", "XML"],
        correctAnswer: "JavaScript",
        explanation: "JavaScript adds interactivity and dynamic behavior to web pages."
      }
    ],
    "Robotics": [
      {
        question: "What is robotics primarily concerned with?",
        options: [
          "Programming websites",
          "Designing and operating robots",
          "Database management",
          "Cybersecurity protocols"
        ],
        correctAnswer: "Designing and operating robots",
        explanation: "Robotics focuses on the design, construction, and operation of robots."
      },
      {
        question: "Which sensor is commonly used to detect distance in robots?",
        options: ["LIDAR", "GPS", "Accelerometer", "Gyroscope"],
        correctAnswer: "LIDAR",
        explanation: "LIDAR sensors measure distance using laser light."
      },
      {
        question: "What is an actuator in robotics?",
        options: [
          "A robot’s control algorithm",
          "A component that moves or controls a mechanism",
          "A type of sensor",
          "A software interface"
        ],
        correctAnswer: "A component that moves or controls a mechanism",
        explanation: "Actuators perform motion or control actions in robots."
      },
      {
        question: "Which type of robot mimics human movement?",
        options: ["Autonomous robot", "Industrial robot", "Humanoid robot", "Swarm robot"],
        correctAnswer: "Humanoid robot",
        explanation: "Humanoid robots are designed to resemble human appearance and behavior."
      },
      {
        question: "Which branch of robotics focuses on collaborative robots?",
        options: ["Industrial robotics", "Cobotics", "Space robotics", "Medical robotics"],
        correctAnswer: "Cobotics",
        explanation: "Cobots work safely alongside humans in shared environments."
      },
      {
        question: "What does a robot’s degree of freedom (DOF) describe?",
        options: [
          "Battery life",
          "Number of independent movements",
          "Processor speed",
          "Weight of the robot"
        ],
        correctAnswer: "Number of independent movements",
        explanation: "DOF indicates how many independent motions a robot can perform."
      },
      {
        question: "Which programming language is commonly used in robotics?",
        options: ["Python", "HTML", "CSS", "SQL"],
        correctAnswer: "Python",
        explanation: "Python is widely used for robot programming due to its simplicity and libraries."
      },
      {
        question: "What is SLAM in robotics?",
        options: [
          "Simultaneous Localization and Mapping",
          "Simple Logic and Motion",
          "Sensor Link and Measurement",
          "Systematic Learning and Modeling"
        ],
        correctAnswer: "Simultaneous Localization and Mapping",
        explanation: "SLAM helps robots map their environment while tracking their position."
      },
      {
        question: "Which robot type is used in manufacturing for repetitive tasks?",
        options: ["Industrial robot", "Humanoid robot", "Exploration robot", "Medical robot"],
        correctAnswer: "Industrial robot",
        explanation: "Industrial robots perform repetitive tasks efficiently in factories."
      },
      {
        question: "What is swarm robotics?",
        options: [
          "Robots working individually",
          "Robots mimicking humans",
          "Robots working collectively in a group",
          "Robots for medical surgery only"
        ],
        correctAnswer: "Robots working collectively in a group",
        explanation: "Swarm robotics uses multiple simple robots that cooperate to complete tasks."
      }
    ],
    "Quantum Computing": [
      {
        question: "What is quantum computing primarily based on?",
        options: [
          "Classical bits",
          "Quantum bits (qubits)",
          "Transistors only",
          "Binary logic gates"
        ],
        correctAnswer: "Quantum bits (qubits)",
        explanation: "Quantum computing uses qubits, which can represent 0, 1, or both simultaneously."
      },
      {
        question: "What principle allows qubits to be in multiple states at once?",
        options: ["Entanglement", "Superposition", "Decoherence", "Measurement"],
        correctAnswer: "Superposition",
        explanation: "Superposition allows qubits to exist in multiple states simultaneously."
      },
      {
        question: "What is quantum entanglement?",
        options: [
          "Two qubits influencing each other instantly, regardless of distance",
          "Qubits being isolated",
          "Error in computation",
          "Classical bit correlation"
        ],
        correctAnswer: "Two qubits influencing each other instantly, regardless of distance",
        explanation: "Entanglement links qubits so that the state of one affects the other instantly."
      },
      {
        question: "Which algorithm is famous for factoring large numbers on a quantum computer?",
        options: ["Dijkstra's Algorithm", "Shor's Algorithm", "Prim's Algorithm", "Bellman-Ford Algorithm"],
        correctAnswer: "Shor's Algorithm",
        explanation: "Shor's algorithm efficiently factors integers using quantum computation."
      },
      {
        question: "Which quantum gate flips the state of a qubit?",
        options: ["Hadamard gate", "Pauli-X gate", "CNOT gate", "Toffoli gate"],
        correctAnswer: "Pauli-X gate",
        explanation: "Pauli-X flips a qubit from 0 to 1 or vice versa."
      },
      {
        question: "Which challenge affects quantum computers the most?",
        options: ["Low CPU speed", "Decoherence and noise", "Lack of RAM", "Limited disk storage"],
        correctAnswer: "Decoherence and noise",
        explanation: "Qubits are sensitive to their environment, causing errors in quantum computation."
      },
      {
        question: "What does a quantum simulator do?",
        options: [
          "Simulates classical computers",
          "Mimics quantum systems on classical machines",
          "Controls robotic movements",
          "Visualizes neural networks"
        ],
        correctAnswer: "Mimics quantum systems on classical machines",
        explanation: "Quantum simulators help study quantum behavior without a physical quantum computer."
      },
      {
        question: "Which company is known for building quantum computers?",
        options: ["IBM", "Intel", "Google", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "IBM, Intel, and Google all develop quantum computing technologies."
      },
      {
        question: "What is a qubit’s measurement outcome?",
        options: ["Always 0", "Always 1", "Randomly collapses to 0 or 1", "Binary sum of multiple qubits"],
        correctAnswer: "Randomly collapses to 0 or 1",
        explanation: "Measurement collapses a qubit’s superposition into a definite state."
      },
      {
        question: "Which field studies computation using quantum mechanics?",
        options: ["Classical computing", "Quantum computing", "Cybersecurity", "Artificial Intelligence"],
        correctAnswer: "Quantum computing",
        explanation: "Quantum computing applies quantum mechanics principles to solve computational problems."
      }
    ],
    "Blockchain & Cryptocurrency": [
      {
        question: "What is a blockchain?",
        options: [
          "A centralized database",
          "A distributed ledger of transactions",
          "A type of programming language",
          "A cloud storage system"
        ],
        correctAnswer: "A distributed ledger of transactions",
        explanation: "Blockchain is a decentralized, immutable record of transactions."
      },
      {
        question: "Which is the first and most popular cryptocurrency?",
        options: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"],
        correctAnswer: "Bitcoin",
        explanation: "Bitcoin was the first cryptocurrency, introduced in 2009."
      },
      {
        question: "What is a smart contract?",
        options: [
          "A digital signature",
          "Self-executing code on the blockchain",
          "A legal contract in PDF format",
          "A mining protocol"
        ],
        correctAnswer: "Self-executing code on the blockchain",
        explanation: "Smart contracts automatically execute terms when conditions are met."
      },
      {
        question: "What is mining in cryptocurrency?",
        options: [
          "Creating wallets",
          "Validating transactions and adding blocks",
          "Encrypting messages",
          "Converting fiat currency"
        ],
        correctAnswer: "Validating transactions and adding blocks",
        explanation: "Mining confirms transactions and secures the blockchain network."
      },
      {
        question: "Which consensus mechanism uses energy-intensive computations?",
        options: ["Proof of Stake (PoS)", "Proof of Work (PoW)", "Delegated Proof of Stake", "Byzantine Fault Tolerance"],
        correctAnswer: "Proof of Work (PoW)",
        explanation: "PoW requires miners to solve complex puzzles to validate transactions."
      },
      {
        question: "What is a cryptocurrency wallet used for?",
        options: [
          "Storing private keys",
          "Mining cryptocurrencies",
          "Running smart contracts",
          "Creating blockchain networks"
        ],
        correctAnswer: "Storing private keys",
        explanation: "Wallets securely store the keys needed to access and transfer crypto assets."
      },
      {
        question: "Which feature makes blockchain tamper-proof?",
        options: [
          "Centralized authority",
          "Cryptographic hashing and chaining of blocks",
          "High-speed internet",
          "Cloud storage"
        ],
        correctAnswer: "Cryptographic hashing and chaining of blocks",
        explanation: "Hashing links blocks securely, preventing alteration."
      },
      {
        question: "What does a decentralized application (dApp) run on?",
        options: [
          "Central server",
          "Blockchain network",
          "Mobile devices only",
          "Traditional web server"
        ],
        correctAnswer: "Blockchain network",
        explanation: "dApps operate on blockchain infrastructure without central control."
      },
      {
        question: "Which cryptocurrency platform introduced smart contracts?",
        options: ["Bitcoin", "Ethereum", "Litecoin", "Ripple"],
        correctAnswer: "Ethereum",
        explanation: "Ethereum enables programmable smart contracts on its blockchain."
      },
      {
        question: "What is a public key used for?",
        options: [
          "Encrypting and verifying transactions",
          "Mining cryptocurrency",
          "Storing funds physically",
          "Accessing private servers"
        ],
        correctAnswer: "Encrypting and verifying transactions",
        explanation: "Public keys are used for secure transactions and digital signatures."
      }
    ],
    "IoT (Internet of Things)": [
      {
        question: "What does IoT stand for?",
        options: [
          "Internet of Technology",
          "Internet of Things",
          "Integration of Technology",
          "Internal Operating Tools"
        ],
        correctAnswer: "Internet of Things",
        explanation: "IoT connects physical devices to the internet for data exchange."
      },
      {
        question: "Which device is an example of IoT?",
        options: [
          "Smart thermostat",
          "Desktop PC",
          "Printer without connectivity",
          "Standalone calculator"
        ],
        correctAnswer: "Smart thermostat",
        explanation: "IoT devices collect and exchange data through networks."
      },
      {
        question: "Which protocol is commonly used in IoT for lightweight messaging?",
        options: ["HTTP", "MQTT", "FTP", "SMTP"],
        correctAnswer: "MQTT",
        explanation: "MQTT is a lightweight messaging protocol ideal for IoT devices."
      },
      {
        question: "What is a sensor’s role in IoT?",
        options: [
          "To control server software",
          "To collect data from the environment",
          "To encrypt data",
          "To store cryptocurrencies"
        ],
        correctAnswer: "To collect data from the environment",
        explanation: "Sensors capture environmental data like temperature, motion, and pressure."
      },
      {
        question: "What is an actuator in IoT?",
        options: [
          "A device that processes data",
          "A device that performs actions based on sensor input",
          "A network protocol",
          "A cloud platform"
        ],
        correctAnswer: "A device that performs actions based on sensor input",
        explanation: "Actuators respond to commands, controlling devices like motors or valves."
      },
      {
        question: "Which layer connects IoT devices to the internet?",
        options: ["Application layer", "Network layer", "Presentation layer", "Data layer"],
        correctAnswer: "Network layer",
        explanation: "The network layer ensures communication between devices and cloud services."
      },
      {
        question: "Which challenge is critical in IoT?",
        options: [
          "High-speed graphics",
          "Data privacy and security",
          "Web page design",
          "CPU optimization"
        ],
        correctAnswer: "Data privacy and security",
        explanation: "IoT devices often handle sensitive data, making security crucial."
      },
      {
        question: "Which platform is commonly used for IoT analytics?",
        options: ["AWS IoT", "Adobe Photoshop", "MySQL Workbench", "Docker"],
        correctAnswer: "AWS IoT",
        explanation: "AWS IoT provides cloud tools to manage and analyze IoT data."
      },
      {
        question: "What is edge computing in IoT?",
        options: [
          "Processing data close to where it is generated",
          "Storing all data in the cloud only",
          "Using larger servers for computation",
          "Remote desktop access"
        ],
        correctAnswer: "Processing data close to where it is generated",
        explanation: "Edge computing reduces latency by processing data locally on devices."
      },
      {
        question: "Which sector uses IoT extensively for smart solutions?",
        options: ["Healthcare", "Agriculture", "Manufacturing", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "IoT is applied across multiple industries for automation and monitoring."
      }
    ],
    "Virtual/Augmented Reality": [
      {
        question: "What is Virtual Reality (VR)?",
        options: [
          "A 2D computer simulation",
          "A fully immersive digital environment",
          "A cloud computing platform",
          "A type of IoT device"
        ],
        correctAnswer: "A fully immersive digital environment",
        explanation: "VR immerses users in a computer-generated environment using headsets and sensors."
      },
      {
        question: "What is Augmented Reality (AR)?",
        options: [
          "Overlaying digital information on the real world",
          "A virtual reality headset",
          "A cloud storage method",
          "A blockchain application"
        ],
        correctAnswer: "Overlaying digital information on the real world",
        explanation: "AR enhances real-world views with digital content like images or data."
      },
      {
        question: "Which device is commonly used for VR experiences?",
        options: ["Smartphone", "VR headset", "Laptop", "Printer"],
        correctAnswer: "VR headset",
        explanation: "VR headsets immerse users in a virtual environment with head tracking."
      },
      {
        question: "Which device is often used for AR applications?",
        options: ["AR glasses", "Monitor", "Keyboard", "Mouse"],
        correctAnswer: "AR glasses",
        explanation: "AR glasses overlay digital elements onto the user’s view of the real world."
      },
      {
        question: "What is the main difference between AR and VR?",
        options: [
          "AR is immersive, VR is not",
          "VR is immersive, AR overlays digital info on reality",
          "VR uses smartphones, AR uses headsets",
          "There is no difference"
        ],
        correctAnswer: "VR is immersive, AR overlays digital info on reality",
        explanation: "VR fully immerses users in a digital world, whereas AR enhances the real world."
      },
      {
        question: "Which industry uses VR for training simulations?",
        options: ["Healthcare", "Military", "Aviation", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "VR is widely used in various sectors for safe, controlled training."
      },
      {
        question: "Which technology tracks user movement in VR?",
        options: ["GPS", "Motion sensors", "Wi-Fi", "Cloud computing"],
        correctAnswer: "Motion sensors",
        explanation: "Motion sensors track head, hand, and body movements for VR interaction."
      },
      {
        question: "Which AR app became popular for interactive gaming outdoors?",
        options: ["Pokémon GO", "Minecraft", "Fortnite", "Among Us"],
        correctAnswer: "Pokémon GO",
        explanation: "Pokémon GO overlays virtual characters on real-world locations using AR."
      },
      {
        question: "Which field combines AR/VR with real-world environments?",
        options: ["Mixed Reality", "Data Science", "IoT", "Blockchain"],
        correctAnswer: "Mixed Reality",
        explanation: "Mixed Reality blends physical and digital objects interactively."
      },
      {
        question: "Which component is essential for VR and AR devices?",
        options: ["Head-mounted display", "Hard disk", "CPU cooler", "Printer"],
        correctAnswer: "Head-mounted display",
        explanation: "Head-mounted displays provide visual output and immersive experiences."
      }
    ],
    "Semiconductor & Electronics": [
      {
        question: "What is a semiconductor?",
        options: [
          "A material that conducts electricity under certain conditions",
          "A perfect insulator",
          "A type of battery",
          "A programming chip"
        ],
        correctAnswer: "A material that conducts electricity under certain conditions",
        explanation: "Semiconductors have conductivity between conductors and insulators, essential for electronic devices."
      },
      {
        question: "Which element is commonly used in semiconductors?",
        options: ["Silicon", "Iron", "Copper", "Aluminum"],
        correctAnswer: "Silicon",
        explanation: "Silicon is the primary material used in most semiconductor devices."
      },
      {
        question: "What is a transistor?",
        options: [
          "A switch or amplifier for electrical signals",
          "A type of battery",
          "A data storage device",
          "A network component"
        ],
        correctAnswer: "A switch or amplifier for electrical signals",
        explanation: "Transistors control or amplify current and are fundamental in electronics."
      },
      {
        question: "Which device converts AC to DC?",
        options: ["Resistor", "Diode", "Capacitor", "Inductor"],
        correctAnswer: "Diode",
        explanation: "Diodes allow current in one direction, converting alternating current to direct current."
      },
      {
        question: "Which type of semiconductor has been doped with extra electrons?",
        options: ["Intrinsic", "N-type", "P-type", "Conductive"],
        correctAnswer: "N-type",
        explanation: "N-type semiconductors have extra electrons as majority carriers."
      },
      {
        question: "Which device stores electrical energy temporarily?",
        options: ["Capacitor", "Resistor", "Diode", "Transistor"],
        correctAnswer: "Capacitor",
        explanation: "Capacitors store energy in an electric field and release it when needed."
      },
      {
        question: "What is Moore’s Law?",
        options: [
          "Transistor counts double approximately every two years",
          "Battery life doubles every year",
          "Processor speed halves every two years",
          "Electronics cost decreases exponentially"
        ],
        correctAnswer: "Transistor counts double approximately every two years",
        explanation: "Moore’s Law predicts the exponential growth of transistor density in chips."
      },
      {
        question: "Which logic gate outputs true only if both inputs are true?",
        options: ["OR", "AND", "NOT", "XOR"],
        correctAnswer: "AND",
        explanation: "AND gates output 1 only when all inputs are 1."
      },
      {
        question: "What is the role of a microcontroller?",
        options: [
          "Perform complex web computations",
          "Control electronic devices and embedded systems",
          "Store large databases",
          "Monitor network traffic"
        ],
        correctAnswer: "Control electronic devices and embedded systems",
        explanation: "Microcontrollers manage hardware tasks in embedded applications."
      },
      {
        question: "Which component regulates voltage in electronic circuits?",
        options: ["Resistor", "Voltage regulator", "Transistor", "Capacitor"],
        correctAnswer: "Voltage regulator",
        explanation: "Voltage regulators maintain a stable output voltage for circuits."
      }
    ]
  },
  finance: {
    "Banking": [
      {
        question: "What is the primary function of a bank?",
        options: [
          "Manufacturing money",
          "Accepting deposits and providing loans",
          "Regulating stock markets",
          "Issuing insurance policies"
        ],
        correctAnswer: "Accepting deposits and providing loans",
        explanation: "Banks primarily accept deposits and lend money to individuals and businesses."
      },
      {
        question: "What does KYC stand for in banking?",
        options: [
          "Know Your Customer",
          "Keep Your Credit",
          "Know Your Cash",
          "Key Yield Calculation"
        ],
        correctAnswer: "Know Your Customer",
        explanation: "KYC is used to verify customer identity and prevent fraud."
      },
      {
        question: "Which account typically earns interest?",
        options: [
          "Current account",
          "Savings account",
          "Salary account",
          "Checking account only"
        ],
        correctAnswer: "Savings account",
        explanation: "Savings accounts offer interest on deposited funds."
      },
      {
        question: "What is a fixed deposit?",
        options: [
          "Money invested in stocks",
          "A loan provided by the bank",
          "A deposit locked for a fixed period with interest",
          "Daily transaction account"
        ],
        correctAnswer: "A deposit locked for a fixed period with interest",
        explanation: "Fixed deposits earn higher interest for a specified tenure."
      },
      {
        question: "Which institution regulates banks in most countries?",
        options: [
          "Commercial banks",
          "Central bank",
          "Stock exchange",
          "Insurance regulator"
        ],
        correctAnswer: "Central bank",
        explanation: "Central banks regulate monetary policy and supervise banking systems."
      },
      {
        question: "What is interest?",
        options: [
          "Bank service charge",
          "Profit earned on investments only",
          "Cost of borrowing money",
          "Government tax"
        ],
        correctAnswer: "Cost of borrowing money",
        explanation: "Interest is the amount charged by lenders for borrowed funds."
      },
      {
        question: "What does ATM stand for?",
        options: [
          "Automatic Teller Machine",
          "Advanced Transfer Mode",
          "Any Time Money",
          "Authorized Transaction Machine"
        ],
        correctAnswer: "Automatic Teller Machine",
        explanation: "ATMs allow customers to perform basic banking transactions."
      },
      {
        question: "Which type of loan is used to purchase a house?",
        options: [
          "Personal loan",
          "Education loan",
          "Home loan",
          "Business loan"
        ],
        correctAnswer: "Home loan",
        explanation: "Home loans are specifically designed for purchasing residential property."
      },
      {
        question: "What is a cheque?",
        options: [
          "A type of loan",
          "A written order to a bank to pay money",
          "A digital wallet",
          "An interest document"
        ],
        correctAnswer: "A written order to a bank to pay money",
        explanation: "A cheque instructs a bank to transfer funds from one account to another."
      },
      {
        question: "What is online banking?",
        options: [
          "Banking only via ATM",
          "Banking services accessed through the internet",
          "Manual banking at branches",
          "Telephone-based banking only"
        ],
        correctAnswer: "Banking services accessed through the internet",
        explanation: "Online banking allows customers to manage accounts digitally."
      }
    ],
    "Investment Banking": [ [
      {
        question: "What is the primary role of an investment bank?",
        options: [
          "Accept public deposits",
          "Underwrite and issue securities",
          "Provide retail loans",
          "Offer insurance products"
        ],
        correctAnswer: "Underwrite and issue securities",
        explanation: "Investment banks help companies raise capital by underwriting securities."
      },
      {
        question: "What does IPO stand for?",
        options: [
          "Initial Price Offering",
          "International Public Offering",
          "Initial Public Offering",
          "Internal Public Offering"
        ],
        correctAnswer: "Initial Public Offering",
        explanation: "IPO is the process of offering company shares to the public for the first time."
      },
      {
        question: "Which market deals with new securities?",
        options: [
          "Secondary market",
          "Money market",
          "Primary market",
          "Forex market"
        ],
        correctAnswer: "Primary market",
        explanation: "The primary market is where new securities are issued."
      },
      {
        question: "What is underwriting?",
        options: [
          "Selling insurance",
          "Guaranteeing sale of securities",
          "Auditing company accounts",
          "Trading stocks"
        ],
        correctAnswer: "Guaranteeing sale of securities",
        explanation: "Underwriting ensures securities are sold by assuming the risk."
      },
      {
        question: "What is M&A in investment banking?",
        options: [
          "Money & Assets",
          "Management & Accounting",
          "Mergers & Acquisitions",
          "Markets & Analytics"
        ],
        correctAnswer: "Mergers & Acquisitions",
        explanation: "M&A involves advising companies on mergers, acquisitions, and takeovers."
      },
      {
        question: "Which valuation method uses future cash flows?",
        options: [
          "Comparable company analysis",
          "Discounted Cash Flow (DCF)",
          "Book value method",
          "Market capitalization"
        ],
        correctAnswer: "Discounted Cash Flow (DCF)",
        explanation: "DCF estimates value based on projected future cash flows."
      },
      {
        question: "What is a prospectus?",
        options: [
          "Loan agreement",
          "Financial audit report",
          "Document detailing investment offering",
          "Trading contract"
        ],
        correctAnswer: "Document detailing investment offering",
        explanation: "A prospectus provides details about a public offering to investors."
      },
      {
        question: "Which type of security represents ownership in a company?",
        options: [
          "Bond",
          "Debenture",
          "Equity share",
          "Derivative"
        ],
        correctAnswer: "Equity share",
        explanation: "Equity shares represent ownership stake in a company."
      },
      {
        question: "What is the role of a book runner?",
        options: [
          "Manage company books",
          "Set IPO pricing and demand",
          "Audit financials",
          "Trade shares post-IPO"
        ],
        correctAnswer: "Set IPO pricing and demand",
        explanation: "Book runners manage pricing and allocation during IPOs."
      },
      {
        question: "What is capital market?",
        options: [
          "Market for short-term funds",
          "Market for long-term securities",
          "Currency exchange market",
          "Commodity market"
        ],
        correctAnswer: "Market for long-term securities",
        explanation: "Capital markets deal with long-term debt and equity instruments."
      }
    ]],
    "Insurance": [
      {
        question: "What is the primary purpose of insurance?",
        options: [
          "Wealth creation",
          "Risk transfer",
          "Tax collection",
          "Profit sharing"
        ],
        correctAnswer: "Risk transfer",
        explanation: "Insurance transfers financial risk from an individual to an insurer."
      },
      {
        question: "Who is the policyholder?",
        options: [
          "The insurance company",
          "The person insured",
          "The person paying premium",
          "The person receiving claim"
        ],
        correctAnswer: "The person paying premium",
        explanation: "The policyholder owns the policy and pays the premium."
      },
      {
        question: "What is a premium?",
        options: [
          "Claim amount",
          "Service fee",
          "Amount paid for insurance coverage",
          "Tax benefit"
        ],
        correctAnswer: "Amount paid for insurance coverage",
        explanation: "Premium is the amount paid to keep an insurance policy active."
      },
      {
        question: "Which insurance covers loss due to fire or theft?",
        options: [
          "Life insurance",
          "Health insurance",
          "General insurance",
          "Travel insurance"
        ],
        correctAnswer: "General insurance",
        explanation: "General insurance covers property and liability risks."
      },
      {
        question: "What is a claim?",
        options: [
          "Premium refund",
          "Request for compensation",
          "Policy renewal",
          "Insurance bonus"
        ],
        correctAnswer: "Request for compensation",
        explanation: "A claim is a request made to the insurer for covered losses."
      },
      {
        question: "What does indemnity mean in insurance?",
        options: [
          "Profit from loss",
          "Restoration to original financial position",
          "Lifetime coverage",
          "Fixed payout"
        ],
        correctAnswer: "Restoration to original financial position",
        explanation: "Indemnity ensures no profit or loss from an insurance claim."
      },
      {
        question: "Which insurance is mandatory for vehicle owners?",
        options: [
          "Comprehensive insurance",
          "Life insurance",
          "Third-party insurance",
          "Travel insurance"
        ],
        correctAnswer: "Third-party insurance",
        explanation: "Third-party motor insurance is legally required in most countries."
      },
      {
        question: "What is a deductible?",
        options: [
          "Total claim amount",
          "Amount paid by insurer",
          "Amount paid by insured before claim",
          "Policy bonus"
        ],
        correctAnswer: "Amount paid by insured before claim",
        explanation: "Deductible is the portion borne by the insured during a claim."
      },
      {
        question: "What does underwriting assess?",
        options: [
          "Claim processing",
          "Risk level of policyholder",
          "Investment returns",
          "Customer service quality"
        ],
        correctAnswer: "Risk level of policyholder",
        explanation: "Underwriting evaluates risk before issuing a policy."
      },
      {
        question: "What is term insurance?",
        options: [
          "Investment-linked policy",
          "Short-term health cover",
          "Life cover for a fixed period",
          "Property insurance"
        ],
        correctAnswer: "Life cover for a fixed period",
        explanation: "Term insurance provides life coverage for a specific duration."
      }
    ],
    "FinTech": [
      {
        question: "What does FinTech stand for?",
        options: [
          "Financial Technology",
          "Final Technology",
          "Finance Technique",
          "Fiscal Technology"
        ],
        correctAnswer: "Financial Technology",
        explanation: "FinTech refers to the use of technology to improve financial services."
      },
      {
        question: "Which FinTech service enables digital payments?",
        options: [
          "E-wallets",
          "Fixed deposits",
          "Insurance policies",
          "Mutual funds"
        ],
        correctAnswer: "E-wallets",
        explanation: "E-wallets allow users to store and transfer money digitally."
      },
      {
        question: "What is a key benefit of FinTech platforms?",
        options: [
          "Higher paperwork",
          "Faster and cheaper financial services",
          "Limited accessibility",
          "Manual processing"
        ],
        correctAnswer: "Faster and cheaper financial services",
        explanation: "FinTech improves speed, efficiency, and cost-effectiveness."
      },
      {
        question: "Which technology is widely used in FinTech for security?",
        options: [
          "Blockchain",
          "Spreadsheets",
          "Email servers",
          "FTP"
        ],
        correctAnswer: "Blockchain",
        explanation: "Blockchain provides secure and transparent transaction records."
      },
      {
        question: "What is peer-to-peer (P2P) lending?",
        options: [
          "Bank-to-bank lending",
          "Government lending",
          "Direct lending between individuals",
          "Corporate bond issuance"
        ],
        correctAnswer: "Direct lending between individuals",
        explanation: "P2P platforms connect borrowers directly with lenders."
      },
      {
        question: "Which FinTech innovation automates investment decisions?",
        options: [
          "Robo-advisors",
          "ATMs",
          "Credit cards",
          "POS terminals"
        ],
        correctAnswer: "Robo-advisors",
        explanation: "Robo-advisors use algorithms to manage investments automatically."
      },
      {
        question: "What does KYC help prevent in FinTech?",
        options: [
          "High interest rates",
          "Fraud and money laundering",
          "Low returns",
          "System downtime"
        ],
        correctAnswer: "Fraud and money laundering",
        explanation: "KYC verifies user identity to reduce financial crime."
      },
      {
        question: "Which payment method uses QR codes?",
        options: [
          "Cash",
          "Cheque",
          "UPI payments",
          "Demand draft"
        ],
        correctAnswer: "UPI payments",
        explanation: "UPI enables instant payments using QR codes or IDs."
      },
      {
        question: "What is open banking?",
        options: [
          "Physical branch banking",
          "Sharing customer data via APIs",
          "Offline banking",
          "Central bank policy"
        ],
        correctAnswer: "Sharing customer data via APIs",
        explanation: "Open banking allows secure data sharing with third-party providers."
      },
      {
        question: "Which FinTech area focuses on compliance automation?",
        options: [
          "RegTech",
          "InsurTech",
          "WealthTech",
          "PayTech"
        ],
        correctAnswer: "RegTech",
        explanation: "RegTech uses technology to manage regulatory compliance efficiently."
      }
    ],
    "Wealth Management": [
      {
        question: "What is wealth management?",
        options: [
          "Only tax planning",
          "Comprehensive financial advisory services",
          "Stock trading only",
          "Insurance sales"
        ],
        correctAnswer: "Comprehensive financial advisory services",
        explanation: "Wealth management combines investment, tax, and financial planning."
      },
      {
        question: "Who typically uses wealth management services?",
        options: [
          "Only corporations",
          "High-net-worth individuals",
          "Students",
          "Government agencies"
        ],
        correctAnswer: "High-net-worth individuals",
        explanation: "Wealth management mainly serves high-net-worth clients."
      },
      {
        question: "What is asset allocation?",
        options: [
          "Buying a single stock",
          "Distributing investments across asset classes",
          "Selling all investments",
          "Only investing in bonds"
        ],
        correctAnswer: "Distributing investments across asset classes",
        explanation: "Asset allocation helps balance risk and return."
      },
      {
        question: "Which goal is primary in wealth management?",
        options: [
          "Short-term speculation",
          "Wealth preservation and growth",
          "High transaction volume",
          "Frequent trading"
        ],
        correctAnswer: "Wealth preservation and growth",
        explanation: "The focus is on growing and protecting client wealth."
      },
      {
        question: "Which instrument is commonly used for diversification?",
        options: [
          "Fixed deposit only",
          "Mutual funds",
          "Cash only",
          "Single equity stock"
        ],
        correctAnswer: "Mutual funds",
        explanation: "Mutual funds provide diversification across assets."
      },
      {
        question: "What is risk profiling?",
        options: [
          "Tracking portfolio returns",
          "Assessing client's risk tolerance",
          "Calculating taxes",
          "Auditing accounts"
        ],
        correctAnswer: "Assessing client's risk tolerance",
        explanation: "Risk profiling helps tailor investments to client comfort levels."
      },
      {
        question: "What does rebalancing a portfolio mean?",
        options: [
          "Adding more funds",
          "Withdrawing money",
          "Adjusting asset proportions",
          "Closing investments"
        ],
        correctAnswer: "Adjusting asset proportions",
        explanation: "Rebalancing maintains desired asset allocation over time."
      },
      {
        question: "Which service helps plan inheritance?",
        options: [
          "Retirement planning",
          "Estate planning",
          "Tax filing",
          "Insurance underwriting"
        ],
        correctAnswer: "Estate planning",
        explanation: "Estate planning ensures smooth wealth transfer to heirs."
      },
      {
        question: "What is a portfolio?",
        options: [
          "Single investment",
          "Collection of financial assets",
          "Bank account",
          "Loan document"
        ],
        correctAnswer: "Collection of financial assets",
        explanation: "A portfolio includes stocks, bonds, funds, and other assets."
      },
      {
        question: "Which factor most influences investment strategy?",
        options: [
          "Market rumors",
          "Client financial goals",
          "Broker commission",
          "Daily price movements"
        ],
        correctAnswer: "Client financial goals",
        explanation: "Investment strategies are aligned with client goals and timelines."
      }
    ],
    "Asset Management": [
      {
        question: "What is asset management?",
        options: [
          "Buying assets randomly",
          "Managing investments on behalf of clients",
          "Only real estate management",
          "Loan recovery process"
        ],
        correctAnswer: "Managing investments on behalf of clients",
        explanation: "Asset management involves professionally managing investments for clients."
      },
      {
        question: "Who manages mutual funds?",
        options: [
          "Stock brokers",
          "Asset management companies",
          "Central banks",
          "Insurance firms"
        ],
        correctAnswer: "Asset management companies",
        explanation: "AMCs manage pooled funds invested in various securities."
      },
      {
        question: "What is AUM?",
        options: [
          "Annual User Metric",
          "Assets Under Management",
          "Average Unit Margin",
          "Account Usage Model"
        ],
        correctAnswer: "Assets Under Management",
        explanation: "AUM represents the total market value of assets managed."
      },
      {
        question: "Which investment strategy aims to match market performance?",
        options: [
          "Active management",
          "Passive management",
          "Speculative trading",
          "Hedging"
        ],
        correctAnswer: "Passive management",
        explanation: "Passive strategies track market indexes rather than beat them."
      },
      {
        question: "What is the role of a fund manager?",
        options: [
          "Audit company accounts",
          "Decide investment strategy",
          "Approve loans",
          "Regulate markets"
        ],
        correctAnswer: "Decide investment strategy",
        explanation: "Fund managers make investment decisions for portfolios."
      },
      {
        question: "Which fee is commonly charged by asset managers?",
        options: [
          "Penalty fee",
          "Management fee",
          "Transaction tax",
          "Custody fee only"
        ],
        correctAnswer: "Management fee",
        explanation: "Management fees compensate asset managers for their services."
      },
      {
        question: "What is diversification in asset management?",
        options: [
          "Investing in one asset",
          "Spreading investments across assets",
          "Selling assets frequently",
          "Avoiding risk entirely"
        ],
        correctAnswer: "Spreading investments across assets",
        explanation: "Diversification reduces overall portfolio risk."
      },
      {
        question: "Which asset class is generally considered low risk?",
        options: [
          "Equities",
          "Cryptocurrencies",
          "Government bonds",
          "Derivatives"
        ],
        correctAnswer: "Government bonds",
        explanation: "Government bonds are typically low-risk investments."
      },
      {
        question: "What is NAV in mutual funds?",
        options: [
          "Net Asset Value",
          "National Asset Volume",
          "New Allocation Value",
          "Net Annual Variance"
        ],
        correctAnswer: "Net Asset Value",
        explanation: "NAV represents the per-unit value of a mutual fund."
      },
      {
        question: "Which regulation protects investors?",
        options: [
          "Market rumors",
          "Regulatory authorities",
          "Fund advertisements",
          "Trading strategies"
        ],
        correctAnswer: "Regulatory authorities",
        explanation: "Regulators ensure transparency and investor protection."
      }
    ],
    "Real Estate Investment": [
      {
        question: "What is real estate investment?",
        options: [
          "Buying property for personal use only",
          "Investing in property to earn returns",
          "Providing home loans",
          "Property maintenance services"
        ],
        correctAnswer: "Investing in property to earn returns",
        explanation: "Real estate investment aims to generate income or appreciation."
      },
      {
        question: "Which return comes from renting a property?",
        options: [
          "Capital gain",
          "Rental income",
          "Dividend",
          "Interest"
        ],
        correctAnswer: "Rental income",
        explanation: "Rental income is earned by leasing property."
      },
      {
        question: "What is capital appreciation?",
        options: [
          "Decrease in property value",
          "Increase in property value over time",
          "Rental income",
          "Maintenance cost"
        ],
        correctAnswer: "Increase in property value over time",
        explanation: "Capital appreciation refers to growth in property value."
      },
      {
        question: "What is REIT?",
        options: [
          "Real Estate Investment Trust",
          "Residential Equity Investment Tool",
          "Real Estate Insurance Term",
          "Registered Equity Income Trust"
        ],
        correctAnswer: "Real Estate Investment Trust",
        explanation: "REITs allow investors to invest in income-generating real estate."
      },
      {
        question: "Which property type is typically commercial?",
        options: [
          "Apartments",
          "Office buildings",
          "Villas",
          "Farmhouses"
        ],
        correctAnswer: "Office buildings",
        explanation: "Office buildings are classified as commercial real estate."
      },
      {
        question: "What is leverage in real estate?",
        options: [
          "Using cash only",
          "Using borrowed funds to invest",
          "Selling property quickly",
          "Avoiding risk"
        ],
        correctAnswer: "Using borrowed funds to invest",
        explanation: "Leverage uses loans to increase investment capacity."
      },
      {
        question: "What is due diligence in real estate?",
        options: [
          "Marketing property",
          "Legal and financial verification",
          "Property renovation",
          "Rent collection"
        ],
        correctAnswer: "Legal and financial verification",
        explanation: "Due diligence ensures property legality and financial soundness."
      },
      {
        question: "Which factor most affects property value?",
        options: [
          "Interior paint color",
          "Location",
          "Furniture",
          "Owner reputation"
        ],
        correctAnswer: "Location",
        explanation: "Location is a key determinant of real estate value."
      },
      {
        question: "What is a mortgage?",
        options: [
          "Property tax",
          "Insurance premium",
          "Loan secured against property",
          "Rental agreement"
        ],
        correctAnswer: "Loan secured against property",
        explanation: "A mortgage is a loan taken to purchase real estate."
      },
      {
        question: "What is liquidity risk in real estate?",
        options: [
          "Property damage risk",
          "Difficulty in selling property quickly",
          "Rental default risk",
          "Interest rate risk"
        ],
        correctAnswer: "Difficulty in selling property quickly",
        explanation: "Real estate assets are relatively illiquid."
      }
    ],
    "Private Equity": [
      {
        question: "What is private equity?",
        options: [
          "Investment in publicly traded stocks",
          "Investment in privately held companies",
          "Bank lending activity",
          "Government bond investment"
        ],
        correctAnswer: "Investment in privately held companies",
        explanation: "Private equity involves investing in companies not listed on public exchanges."
      },
      {
        question: "What is the typical goal of private equity firms?",
        options: [
          "Short-term trading",
          "Long-term value creation",
          "Providing retail loans",
          "Managing mutual funds"
        ],
        correctAnswer: "Long-term value creation",
        explanation: "PE firms aim to improve companies and exit at a higher valuation."
      },
      {
        question: "Which stage company do PE firms usually invest in?",
        options: [
          "Early-stage startups",
          "Mature or established companies",
          "Pre-revenue startups",
          "Public sector firms"
        ],
        correctAnswer: "Mature or established companies",
        explanation: "PE investments target stable businesses with growth potential."
      },
      {
        question: "What is an exit strategy?",
        options: [
          "Initial investment plan",
          "Method of selling investment",
          "Risk analysis tool",
          "Loan repayment schedule"
        ],
        correctAnswer: "Method of selling investment",
        explanation: "Exit strategies include IPOs, mergers, or buyouts."
      },
      {
        question: "What is a leveraged buyout (LBO)?",
        options: [
          "Purchase using investor equity only",
          "Acquisition financed largely with debt",
          "Government acquisition",
          "Hostile takeover"
        ],
        correctAnswer: "Acquisition financed largely with debt",
        explanation: "LBOs use borrowed funds to acquire companies."
      },
      {
        question: "Which role do PE firms play in management?",
        options: [
          "No involvement",
          "Active involvement in operations",
          "Only advisory",
          "Regulatory oversight"
        ],
        correctAnswer: "Active involvement in operations",
        explanation: "PE firms often influence strategy and management decisions."
      },
      {
        question: "What is carried interest?",
        options: [
          "Management fee",
          "Performance-based profit share",
          "Loan interest",
          "Dividend payout"
        ],
        correctAnswer: "Performance-based profit share",
        explanation: "Carried interest rewards PE managers for successful investments."
      },
      {
        question: "What is the investment horizon for PE?",
        options: [
          "Days to weeks",
          "1–2 years",
          "3–7 years",
          "Decades"
        ],
        correctAnswer: "3–7 years",
        explanation: "PE investments are typically held for several years."
      },
      {
        question: "Which investor commonly invests in PE funds?",
        options: [
          "Retail investors",
          "Pension funds",
          "Day traders",
          "Central banks"
        ],
        correctAnswer: "Pension funds",
        explanation: "Institutional investors allocate capital to PE for higher returns."
      },
      {
        question: "What is value creation in PE?",
        options: [
          "Cost cutting and growth initiatives",
          "Short-term stock trading",
          "Issuing bonds",
          "Currency trading"
        ],
        correctAnswer: "Cost cutting and growth initiatives",
        explanation: "PE firms improve operational efficiency and growth."
      }
    ],
    "Venture Capital":  [
      {
        question: "What is venture capital (VC)?",
        options: [
          "Loans to established companies",
          "Equity investment in startups",
          "Bank deposits",
          "Government grants"
        ],
        correctAnswer: "Equity investment in startups",
        explanation: "VC provides funding to early-stage startups in exchange for equity."
      },
      {
        question: "What type of risk is high in VC investments?",
        options: [
          "Low risk",
          "Market risk only",
          "High risk of failure",
          "No risk"
        ],
        correctAnswer: "High risk of failure",
        explanation: "Startups have high uncertainty, making VC risky but potentially high-return."
      },
      {
        question: "Which stage do VC firms typically invest in?",
        options: [
          "Seed and early-stage",
          "Mature corporations",
          "Government entities",
          "Public sector banks"
        ],
        correctAnswer: "Seed and early-stage",
        explanation: "VC focuses on early-stage startups with growth potential."
      },
      {
        question: "What is an exit in VC?",
        options: [
          "Starting a new fund",
          "Selling equity for profit",
          "Providing a loan",
          "IPO only"
        ],
        correctAnswer: "Selling equity for profit",
        explanation: "Exits occur when investors sell their stake via IPO, acquisition, or secondary sale."
      },
      {
        question: "Which sector is commonly targeted by VC?",
        options: [
          "Technology and innovation",
          "Government bonds",
          "Retail banking",
          "Insurance only"
        ],
        correctAnswer: "Technology and innovation",
        explanation: "VCs often invest in high-growth innovative sectors."
      },
      {
        question: "What is a term sheet in VC?",
        options: [
          "Loan agreement",
          "Preliminary investment agreement",
          "Insurance policy",
          "Bank deposit certificate"
        ],
        correctAnswer: "Preliminary investment agreement",
        explanation: "Term sheets outline the terms and conditions of the investment."
      },
      {
        question: "What is dilution in VC?",
        options: [
          "Reduction in ownership due to new shares",
          "Profit sharing",
          "Loss of funds",
          "Government taxation"
        ],
        correctAnswer: "Reduction in ownership due to new shares",
        explanation: "Issuing new shares reduces the percentage ownership of existing investors."
      },
      {
        question: "Which investor group typically invests in VC funds?",
        options: [
          "Retail investors",
          "Institutional investors",
          "Day traders",
          "Government banks"
        ],
        correctAnswer: "Institutional investors",
        explanation: "VC funds often receive capital from institutional investors like pension funds."
      },
      {
        question: "What is a unicorn startup?",
        options: [
          "Startup valued over $1 billion",
          "Startup with 10 employees",
          "Startup in fintech only",
          "Government-backed startup"
        ],
        correctAnswer: "Startup valued over $1 billion",
        explanation: "Unicorns are rare high-value private startups."
      },
      {
        question: "Which metric is crucial for VC evaluation?",
        options: [
          "Revenue growth and scalability",
          "Number of branches",
          "Cash deposit size",
          "Fixed deposit interest rate"
        ],
        correctAnswer: "Revenue growth and scalability",
        explanation: "VCs evaluate startups based on potential for rapid growth and scalability."
      }
    ],
    "Cryptocurrency & Digital Assets":  [
      {
        question: "What is cryptocurrency?",
        options: [
          "Digital or virtual currency secured by cryptography",
          "Physical cash",
          "Bank deposit",
          "Government-issued bond"
        ],
        correctAnswer: "Digital or virtual currency secured by cryptography",
        explanation: "Cryptocurrencies are digital currencies that use cryptography for security."
      },
      {
        question: "Which was the first cryptocurrency?",
        options: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"],
        correctAnswer: "Bitcoin",
        explanation: "Bitcoin, launched in 2009, was the first cryptocurrency."
      },
      {
        question: "What is a digital wallet used for?",
        options: [
          "Storing physical money",
          "Storing cryptocurrencies and private keys",
          "Paying taxes",
          "Banking without ID"
        ],
        correctAnswer: "Storing cryptocurrencies and private keys",
        explanation: "Digital wallets securely store crypto and enable transactions."
      },
      {
        question: "What is blockchain in crypto?",
        options: [
          "Centralized database",
          "Distributed ledger of transactions",
          "Stock exchange platform",
          "Bank server"
        ],
        correctAnswer: "Distributed ledger of transactions",
        explanation: "Blockchain records transactions across a decentralized network."
      },
      {
        question: "Which crypto allows smart contracts?",
        options: ["Bitcoin", "Ethereum", "Litecoin", "Ripple"],
        correctAnswer: "Ethereum",
        explanation: "Ethereum supports programmable smart contracts on its blockchain."
      },
      {
        question: "What is a public key?",
        options: [
          "Private password",
          "Used to encrypt and receive crypto",
          "Exchange login ID",
          "Bank account PIN"
        ],
        correctAnswer: "Used to encrypt and receive crypto",
        explanation: "Public keys allow others to send cryptocurrency securely."
      },
      {
        question: "Which is a high-risk crypto activity?",
        options: ["HODLing", "Day trading", "Long-term investing", "Staking"],
        correctAnswer: "Day trading",
        explanation: "Frequent trading in volatile crypto markets is risky."
      },
      {
        question: "What does DeFi stand for?",
        options: [
          "Decentralized Finance",
          "Digital Finance",
          "Distributed Funds",
          "Direct Forex"
        ],
        correctAnswer: "Decentralized Finance",
        explanation: "DeFi offers financial services using blockchain without intermediaries."
      },
      {
        question: "What is a stablecoin?",
        options: [
          "Highly volatile crypto",
          "Crypto pegged to a stable asset like USD",
          "Mining token",
          "Unregulated coin"
        ],
        correctAnswer: "Crypto pegged to a stable asset like USD",
        explanation: "Stablecoins maintain stable value by pegging to assets or currencies."
      },
      {
        question: "Which activity secures cryptocurrency networks?",
        options: ["Mining", "Banking", "Trading", "Insurance"],
        correctAnswer: "Mining",
        explanation: "Mining validates transactions and secures blockchain networks."
      }
    ],
    "Risk Management":  [
      {
        question: "What is risk management?",
        options: [
          "Ignoring financial risks",
          "Identifying, assessing, and mitigating risks",
          "Investing in high-risk stocks only",
          "Government regulation"
        ],
        correctAnswer: "Identifying, assessing, and mitigating risks",
        explanation: "Risk management involves systematically managing potential risks to minimize loss."
      },
      {
        question: "Which is a type of financial risk?",
        options: ["Market risk", "Operational risk", "Credit risk", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Financial risks include market, operational, credit, and other risk types."
      },
      {
        question: "What is hedging?",
        options: [
          "Ignoring market fluctuations",
          "Using instruments to reduce risk exposure",
          "Short-term speculation",
          "Increasing leverage"
        ],
        correctAnswer: "Using instruments to reduce risk exposure",
        explanation: "Hedging protects against potential losses using derivatives or other tools."
      },
      {
        question: "What is credit risk?",
        options: [
          "Risk of default by a borrower",
          "Risk of losing market share",
          "Risk of natural disaster",
          "Risk of employee turnover"
        ],
        correctAnswer: "Risk of default by a borrower",
        explanation: "Credit risk arises when a borrower fails to meet obligations."
      },
      {
        question: "Which tool is commonly used for risk assessment?",
        options: ["VaR (Value at Risk)", "NAV", "AUM", "ROI"],
        correctAnswer: "VaR (Value at Risk)",
        explanation: "VaR estimates potential loss in a portfolio over a given time and confidence level."
      },
      {
        question: "What is operational risk?",
        options: [
          "Risk from financial markets",
          "Risk from internal processes, systems, or people",
          "Risk of new investments",
          "Risk of low interest rates"
        ],
        correctAnswer: "Risk from internal processes, systems, or people",
        explanation: "Operational risk arises from internal failures or inefficiencies."
      },
      {
        question: "What is liquidity risk?",
        options: [
          "Inability to meet short-term obligations",
          "Risk of market fluctuation",
          "Risk from regulations",
          "Risk of inflation only"
        ],
        correctAnswer: "Inability to meet short-term obligations",
        explanation: "Liquidity risk occurs when assets cannot be quickly converted to cash."
      },
      {
        question: "Which risk management strategy involves diversification?",
        options: [
          "Spreading investments across assets",
          "Concentrating on a single asset",
          "Ignoring low-risk assets",
          "Hedging with loans only"
        ],
        correctAnswer: "Spreading investments across assets",
        explanation: "Diversification reduces the impact of losses in any single asset."
      },
      {
        question: "What is stress testing in finance?",
        options: [
          "Evaluating portfolio performance under extreme scenarios",
          "Measuring daily trading profits",
          "Bank audit procedure",
          "Tax calculation method"
        ],
        correctAnswer: "Evaluating portfolio performance under extreme scenarios",
        explanation: "Stress testing assesses resilience against worst-case financial events."
      },
      {
        question: "Who is responsible for risk management in a firm?",
        options: [
          "Risk manager or risk management team",
          "Sales team",
          "Auditors only",
          "Marketing team"
        ],
        correctAnswer: "Risk manager or risk management team",
        explanation: "Dedicated teams identify, assess, and mitigate risks across the organization."
      }
    ],
    "Payment Processing": [
      {
        question: "What is payment processing?",
        options: [
          "Issuing loans",
          "Handling electronic payment transactions",
          "Providing insurance",
          "Trading stocks"
        ],
        correctAnswer: "Handling electronic payment transactions",
        explanation: "Payment processing manages the authorization and settlement of transactions."
      },
      {
        question: "Which entity typically processes card payments?",
        options: [
          "Merchant bank",
          "Central bank",
          "Payment gateway",
          "Stock exchange"
        ],
        correctAnswer: "Payment gateway",
        explanation: "Payment gateways securely handle online card and digital payments."
      },
      {
        question: "What is a POS terminal?",
        options: [
          "Point-of-Sale device for payment",
          "Profit-of-Stock terminal",
          "Payment-only software",
          "Policy-of-Service system"
        ],
        correctAnswer: "Point-of-Sale device for payment",
        explanation: "POS terminals allow merchants to accept card or digital payments."
      },
      {
        question: "Which technology enables contactless payments?",
        options: ["NFC", "Wi-Fi", "Bluetooth", "QR code scanning"],
        correctAnswer: "NFC",
        explanation: "Near Field Communication (NFC) allows tap-and-go payments."
      },
      {
        question: "What does PCI DSS ensure?",
        options: [
          "Customer privacy in online payments",
          "Employee training",
          "Bank liquidity",
          "Tax compliance"
        ],
        correctAnswer: "Customer privacy in online payments",
        explanation: "PCI DSS sets security standards for handling cardholder data."
      },
      {
        question: "Which is a common digital payment method?",
        options: ["UPI", "Cheque", "Cash only", "Demand draft"],
        correctAnswer: "UPI",
        explanation: "UPI enables instant electronic payments between bank accounts."
      },
      {
        question: "What is settlement in payment processing?",
        options: [
          "Approving the transaction",
          "Transfer of funds to merchant account",
          "Refunding the customer",
          "Charging fees only"
        ],
        correctAnswer: "Transfer of funds to merchant account",
        explanation: "Settlement completes the transaction and moves funds."
      },
      {
        question: "Which fee is charged by payment processors?",
        options: ["Transaction fee", "Income tax", "Loan interest", "Service tax only"],
        correctAnswer: "Transaction fee",
        explanation: "Payment processors charge a small fee per transaction for services."
      },
      {
        question: "Which is a risk in payment processing?",
        options: [
          "Fraud and chargebacks",
          "Low interest",
          "Real estate loss",
          "Currency exchange"
        ],
        correctAnswer: "Fraud and chargebacks",
        explanation: "Payment processors manage fraud and dispute resolution."
      },
      {
        question: "Which system connects banks for electronic payments?",
        options: ["SWIFT", "ATM", "POS", "Cheque clearing"],
        correctAnswer: "SWIFT",
        explanation: "SWIFT enables secure international bank payment messaging."
      }
    ],
    "Credit Services": [
      {
        question: "What is a credit service?",
        options: [
          "Providing loans and credit facilities",
          "Accepting deposits",
          "Trading stocks",
          "Insurance underwriting"
        ],
        correctAnswer: "Providing loans and credit facilities",
        explanation: "Credit services involve lending money or extending credit to customers."
      },
      {
        question: "What is a credit score?",
        options: [
          "A measure of financial literacy",
          "A numerical representation of creditworthiness",
          "Bank account balance",
          "Annual income"
        ],
        correctAnswer: "A numerical representation of creditworthiness",
        explanation: "Credit scores indicate the likelihood of repaying debt on time."
      },
      {
        question: "Which factor affects a credit score?",
        options: [
          "Payment history",
          "Age",
          "Job title",
          "Favorite color"
        ],
        correctAnswer: "Payment history",
        explanation: "Timely payments improve credit scores, while defaults reduce them."
      },
      {
        question: "What is a secured loan?",
        options: [
          "Loan backed by collateral",
          "Loan without interest",
          "Loan from friends only",
          "Government grant"
        ],
        correctAnswer: "Loan backed by collateral",
        explanation: "Secured loans are guaranteed by an asset to reduce lender risk."
      },
      {
        question: "What is an unsecured loan?",
        options: [
          "Loan backed by collateral",
          "Loan without collateral",
          "Government bond",
          "Insurance policy"
        ],
        correctAnswer: "Loan without collateral",
        explanation: "Unsecured loans rely on the borrower's creditworthiness, not assets."
      },
      {
        question: "Which type of credit card charges interest if balance is unpaid?",
        options: [
          "Secured credit card",
          "Standard credit card",
          "Debit card",
          "Prepaid card"
        ],
        correctAnswer: "Standard credit card",
        explanation: "Credit cards accrue interest on unpaid balances."
      },
      {
        question: "What is a loan default?",
        options: [
          "Early repayment",
          "Failure to repay debt as agreed",
          "Partial payment only",
          "Collateral sale"
        ],
        correctAnswer: "Failure to repay debt as agreed",
        explanation: "Default occurs when the borrower fails to meet repayment obligations."
      },
      {
        question: "Which organization provides credit reporting?",
        options: [
          "Credit bureaus",
          "Insurance companies",
          "Stock exchanges",
          "Central banks only"
        ],
        correctAnswer: "Credit bureaus",
        explanation: "Credit bureaus collect and maintain individual credit histories."
      },
      {
        question: "What is the purpose of a credit limit?",
        options: [
          "Max allowed borrowing",
          "Minimum repayment",
          "Interest rate setting",
          "Loan approval only"
        ],
        correctAnswer: "Max allowed borrowing",
        explanation: "Credit limits define the maximum amount a borrower can use."
      },
      {
        question: "Which is a method to improve credit score?",
        options: [
          "Paying bills on time",
          "Defaulting loans",
          "Ignoring credit reports",
          "Using cash only"
        ],
        correctAnswer: "Paying bills on time",
        explanation: "Timely payments demonstrate reliability and boost credit scores."
      }
    ]

  },
  healthcare: {

  },
  manufacturing: {

  },
  retail:{

  },
  media:{

  },
  education:{

  },
  energy:{

  },
  consulting:{

  },
  telecom:{

  },
  transportation:{

  },
  agriculture:{

  },
  construction:{

  },
  hospitality:{

  },
  nonprofit:{

  }
};

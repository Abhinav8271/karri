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
    "Insurance": [{
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
      }],
    "FinTech": [{
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
      }],
    "Wealth Management": [{
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
      }],
    "Asset Management": [ {
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
      }],
    "Real Estate Investment": [{
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
      }],
    "Private Equity": [{
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
      }],
    "Venture Capital": [{
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
      }],
    "Cryptocurrency & Digital Assets": [{
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
      }],
    "Risk Management": [{
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
      }],
    "Payment Processing": [{
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
      }],
    "Credit Services": [ {
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
      }]

  },
  healthcare: {
    "Healthcare Services": [{
        question: "What are healthcare services?",
        options: [
          "Services related to education",
          "Services for diagnosing and treating patients",
          "Financial services",
          "IT services"
        ],
        correctAnswer: "Services for diagnosing and treating patients",
        explanation: "Healthcare services include medical care, diagnosis, and treatment."
      },
      {
        question: "Who provides primary healthcare?",
        options: [
          "Specialists only",
          "General physicians",
          "Surgeons only",
          "Pharmacists only"
        ],
        correctAnswer: "General physicians",
        explanation: "Primary healthcare is typically provided by general practitioners."
      },
      {
        question: "What is a hospital?",
        options: [
          "Educational institution",
          "Place for treating patients",
          "Pharmacy store",
          "Insurance office"
        ],
        correctAnswer: "Place for treating patients",
        explanation: "Hospitals provide medical and surgical care to patients."
      },
      {
        question: "What is outpatient care?",
        options: [
          "Care requiring overnight stay",
          "Care without hospital admission",
          "Emergency care only",
          "Surgical procedures only"
        ],
        correctAnswer: "Care without hospital admission",
        explanation: "Outpatient care allows patients to receive treatment without staying overnight."
      },
      {
        question: "What is inpatient care?",
        options: [
          "Home treatment",
          "Treatment without admission",
          "Treatment requiring hospital stay",
          "Telemedicine care"
        ],
        correctAnswer: "Treatment requiring hospital stay",
        explanation: "Inpatient care involves admission to a hospital."
      },
      {
        question: "Which department handles emergencies?",
        options: [
          "OPD",
          "Emergency department",
          "Radiology",
          "Pharmacy"
        ],
        correctAnswer: "Emergency department",
        explanation: "Emergency departments provide urgent medical care."
      },
      {
        question: "What is preventive healthcare?",
        options: [
          "Treating diseases",
          "Preventing diseases before they occur",
          "Surgical care",
          "Emergency care"
        ],
        correctAnswer: "Preventing diseases before they occur",
        explanation: "Preventive care includes vaccinations and health screenings."
      },
      {
        question: "Who assists doctors in patient care?",
        options: [
          "Engineers",
          "Nurses",
          "Lawyers",
          "Accountants"
        ],
        correctAnswer: "Nurses",
        explanation: "Nurses provide direct patient care and assist doctors."
      },
      {
        question: "What is diagnosis?",
        options: [
          "Treatment process",
          "Identifying a disease",
          "Giving medication",
          "Performing surgery"
        ],
        correctAnswer: "Identifying a disease",
        explanation: "Diagnosis is the process of determining a disease or condition."
      },
      {
        question: "What is rehabilitation?",
        options: [
          "Preventing illness",
          "Restoring health after illness or injury",
          "Emergency response",
          "Surgical treatment"
        ],
        correctAnswer: "Restoring health after illness or injury",
        explanation: "Rehabilitation helps patients recover and regain abilities."
      }],
    "Biotechnology": [{
        question: "What is biotechnology?",
        options: [
          "Study of computers",
          "Use of living organisms in technology",
          "Financial technology",
          "Mechanical engineering"
        ],
        correctAnswer: "Use of living organisms in technology",
        explanation: "Biotechnology uses biological systems to develop products and processes."
      },
      {
        question: "Which field is part of biotechnology?",
        options: [
          "Genetic engineering",
          "Civil engineering",
          "Accounting",
          "Marketing"
        ],
        correctAnswer: "Genetic engineering",
        explanation: "Biotechnology includes genetic modification and biological research."
      },
      {
        question: "What is DNA?",
        options: [
          "Energy molecule",
          "Genetic material",
          "Protein",
          "Enzyme"
        ],
        correctAnswer: "Genetic material",
        explanation: "DNA carries genetic information in living organisms."
      },
      {
        question: "What is genetic engineering?",
        options: [
          "Studying ecosystems",
          "Modifying an organism’s DNA",
          "Creating machines",
          "Producing chemicals"
        ],
        correctAnswer: "Modifying an organism’s DNA",
        explanation: "Genetic engineering alters DNA to achieve desired traits."
      },
      {
        question: "What are GMOs?",
        options: [
          "Natural organisms",
          "Genetically modified organisms",
          "Medical devices",
          "Chemical compounds"
        ],
        correctAnswer: "Genetically modified organisms",
        explanation: "GMOs have altered DNA for specific purposes."
      },
      {
        question: "Which organism is commonly used in biotech experiments?",
        options: [
          "Humans",
          "Bacteria",
          "Birds",
          "Fish"
        ],
        correctAnswer: "Bacteria",
        explanation: "Bacteria are widely used due to rapid growth and simple genetics."
      },
      {
        question: "What is cloning?",
        options: [
          "Destroying DNA",
          "Creating identical copies of an organism",
          "Mixing chemicals",
          "Producing vaccines"
        ],
        correctAnswer: "Creating identical copies of an organism",
        explanation: "Cloning produces genetically identical organisms."
      },
      {
        question: "Which product is made using biotechnology?",
        options: [
          "Insulin",
          "Plastic",
          "Steel",
          "Paper"
        ],
        correctAnswer: "Insulin",
        explanation: "Biotech is used to produce insulin using recombinant DNA."
      },
      {
        question: "What is a vaccine?",
        options: [
          "Cure for disease",
          "Substance to prevent disease",
          "Antibiotic",
          "Vitamin"
        ],
        correctAnswer: "Substance to prevent disease",
        explanation: "Vaccines stimulate immunity against diseases."
      },
      {
        question: "Which area uses biotechnology for crops?",
        options: [
          "Agriculture",
          "Banking",
          "Construction",
          "Retail"
        ],
        correctAnswer: "Agriculture",
        explanation: "Biotech improves crop yield, resistance, and nutrition."
      }],
    "Pharmaceuticals": [{
        question: "What is the pharmaceutical industry?",
        options: [
          "Manufacturing electronics",
          "Developing and producing medicines",
          "Providing insurance",
          "Building hospitals"
        ],
        correctAnswer: "Developing and producing medicines",
        explanation: "Pharmaceuticals focus on drug discovery, development, and distribution."
      },
      {
        question: "What is a drug?",
        options: [
          "A type of machine",
          "Substance used to diagnose or treat disease",
          "Financial product",
          "Nutritional supplement only"
        ],
        correctAnswer: "Substance used to diagnose or treat disease",
        explanation: "Drugs are substances used in the prevention or treatment of illness."
      },
      {
        question: "What does FDA approval ensure?",
        options: [
          "Marketing success",
          "Drug safety and efficacy",
          "Low price",
          "High demand"
        ],
        correctAnswer: "Drug safety and efficacy",
        explanation: "Regulatory approval ensures drugs are safe and effective for use."
      },
      {
        question: "What is a generic drug?",
        options: [
          "New patented drug",
          "Brand-name medicine",
          "Equivalent to branded drug at lower cost",
          "Experimental drug"
        ],
        correctAnswer: "Equivalent to branded drug at lower cost",
        explanation: "Generic drugs have the same active ingredients as branded ones."
      },
      {
        question: "What is clinical testing?",
        options: [
          "Laboratory testing only",
          "Testing drugs on humans for safety and efficacy",
          "Animal testing only",
          "Marketing research"
        ],
        correctAnswer: "Testing drugs on humans for safety and efficacy",
        explanation: "Clinical trials evaluate drug performance in humans."
      },
      {
        question: "What is dosage?",
        options: [
          "Drug packaging",
          "Amount of drug to be taken",
          "Type of disease",
          "Manufacturing process"
        ],
        correctAnswer: "Amount of drug to be taken",
        explanation: "Dosage determines how much medicine should be consumed."
      },
      {
        question: "What is a side effect?",
        options: [
          "Primary effect of drug",
          "Unintended effect of a drug",
          "Drug dosage",
          "Treatment plan"
        ],
        correctAnswer: "Unintended effect of a drug",
        explanation: "Side effects are additional effects beyond the intended use."
      },
      {
        question: "Which form is a common drug delivery method?",
        options: [
          "Tablet",
          "Concrete",
          "Metal",
          "Glass"
        ],
        correctAnswer: "Tablet",
        explanation: "Tablets are one of the most common drug forms."
      },
      {
        question: "What is a prescription drug?",
        options: [
          "Available freely",
          "Requires doctor authorization",
          "Only online purchase",
          "Experimental drug"
        ],
        correctAnswer: "Requires doctor authorization",
        explanation: "Prescription drugs must be prescribed by a licensed doctor."
      },
      {
        question: "What is drug discovery?",
        options: [
          "Selling drugs",
          "Finding new medicines",
          "Packaging drugs",
          "Advertising medicines"
        ],
        correctAnswer: "Finding new medicines",
        explanation: "Drug discovery involves identifying new compounds for treatment."
      }],
    "Medical Devices": [ {
        question: "What is a medical device?",
        options: [
          "A type of medicine",
          "Instrument used for diagnosis or treatment",
          "Health insurance plan",
          "Hospital building"
        ],
        correctAnswer: "Instrument used for diagnosis or treatment",
        explanation: "Medical devices are tools used to diagnose, monitor, or treat patients."
      },
      {
        question: "Which is an example of a medical device?",
        options: [
          "Stethoscope",
          "Tablet medicine",
          "Syrup",
          "Vitamin"
        ],
        correctAnswer: "Stethoscope",
        explanation: "A stethoscope is used to listen to internal body sounds."
      },
      {
        question: "What is the purpose of an MRI machine?",
        options: [
          "Measure temperature",
          "Create detailed internal images",
          "Provide oxygen",
          "Monitor heart rate only"
        ],
        correctAnswer: "Create detailed internal images",
        explanation: "MRI uses magnetic fields to produce detailed images of organs."
      },
      {
        question: "What does a pacemaker do?",
        options: [
          "Measures blood pressure",
          "Regulates heart rhythm",
          "Provides oxygen",
          "Detects infections"
        ],
        correctAnswer: "Regulates heart rhythm",
        explanation: "Pacemakers help control abnormal heartbeats."
      },
      {
        question: "What is a diagnostic device?",
        options: [
          "Device for treatment only",
          "Device used to identify diseases",
          "Device for surgery",
          "Device for storage"
        ],
        correctAnswer: "Device used to identify diseases",
        explanation: "Diagnostic devices help detect medical conditions."
      },
      {
        question: "Which device measures blood pressure?",
        options: [
          "Thermometer",
          "Sphygmomanometer",
          "Stethoscope",
          "X-ray machine"
        ],
        correctAnswer: "Sphygmomanometer",
        explanation: "This device measures systolic and diastolic blood pressure."
      },
      {
        question: "What is sterilization in medical devices?",
        options: [
          "Cleaning devices only",
          "Removing all microorganisms",
          "Painting devices",
          "Testing devices"
        ],
        correctAnswer: "Removing all microorganisms",
        explanation: "Sterilization ensures devices are safe for use."
      },
      {
        question: "What is a wearable medical device?",
        options: [
          "Stationary machine",
          "Device worn on the body",
          "Surgical equipment",
          "Lab instrument"
        ],
        correctAnswer: "Device worn on the body",
        explanation: "Wearables like fitness trackers monitor health continuously."
      },
      {
        question: "Which device is used for imaging bones?",
        options: [
          "X-ray machine",
          "ECG machine",
          "Thermometer",
          "Ventilator"
        ],
        correctAnswer: "X-ray machine",
        explanation: "X-rays are commonly used to view bones and fractures."
      },
      {
        question: "What is the function of a ventilator?",
        options: [
          "Measure heart rate",
          "Assist breathing",
          "Check blood sugar",
          "Scan organs"
        ],
        correctAnswer: "Assist breathing",
        explanation: "Ventilators help patients breathe when they cannot do so independently."
      }],
    "Healthcare IT": [{
        question: "What is Healthcare IT?",
        options: [
          "Medical equipment manufacturing",
          "Use of technology to manage healthcare data",
          "Insurance services",
          "Pharmaceutical production"
        ],
        correctAnswer: "Use of technology to manage healthcare data",
        explanation: "Healthcare IT involves digital systems for storing and managing patient data."
      },
      {
        question: "What does EHR stand for?",
        options: [
          "Electronic Health Record",
          "Emergency Health Response",
          "Electronic Hospital Report",
          "External Health Resource"
        ],
        correctAnswer: "Electronic Health Record",
        explanation: "EHR stores patient medical history digitally."
      },
      {
        question: "What is the purpose of EHR systems?",
        options: [
          "Entertainment",
          "Store and share patient data",
          "Sell medicines",
          "Monitor stock markets"
        ],
        correctAnswer: "Store and share patient data",
        explanation: "EHR systems allow efficient access to patient information."
      },
      {
        question: "What is telehealth?",
        options: [
          "Hospital construction",
          "Remote healthcare services using technology",
          "Insurance service",
          "Pharmacy operation"
        ],
        correctAnswer: "Remote healthcare services using technology",
        explanation: "Telehealth uses digital tools to deliver care remotely."
      },
      {
        question: "Which system manages hospital operations?",
        options: [
          "ERP",
          "Hospital Information System (HIS)",
          "CRM",
          "ATM"
        ],
        correctAnswer: "Hospital Information System (HIS)",
        explanation: "HIS integrates hospital management functions."
      },
      {
        question: "What is data privacy in healthcare IT?",
        options: [
          "Sharing all data publicly",
          "Protecting patient information",
          "Deleting records",
          "Selling data"
        ],
        correctAnswer: "Protecting patient information",
        explanation: "Patient data must be kept secure and confidential."
      },
      {
        question: "What is interoperability?",
        options: [
          "Using one system only",
          "Ability of systems to exchange data",
          "System failure",
          "Manual record keeping"
        ],
        correctAnswer: "Ability of systems to exchange data",
        explanation: "Interoperability allows seamless data sharing between systems."
      },
      {
        question: "Which technology helps analyze healthcare data?",
        options: [
          "Data analytics",
          "Painting tools",
          "Mechanical tools",
          "Printing devices"
        ],
        correctAnswer: "Data analytics",
        explanation: "Analytics helps improve healthcare decisions and outcomes."
      },
      {
        question: "What is e-prescription?",
        options: [
          "Paper-based prescription",
          "Digital prescription sent electronically",
          "Verbal instruction",
          "Insurance form"
        ],
        correctAnswer: "Digital prescription sent electronically",
        explanation: "E-prescriptions reduce errors and improve efficiency."
      },
      {
        question: "What is cybersecurity in healthcare IT?",
        options: [
          "Physical security",
          "Protection of digital health systems",
          "Patient care",
          "Medical research"
        ],
        correctAnswer: "Protection of digital health systems",
        explanation: "Cybersecurity safeguards healthcare data from breaches."
      }],
    "Telemedicine": [{
        question: "What is telemedicine?",
        options: [
          "Hospital-based surgery",
          "Remote medical consultation using technology",
          "Pharmacy service",
          "Insurance service"
        ],
        correctAnswer: "Remote medical consultation using technology",
        explanation: "Telemedicine enables healthcare delivery without physical presence."
      },
      {
        question: "Which device is commonly used in telemedicine?",
        options: [
          "Smartphone",
          "Hammer",
          "Printer",
          "Calculator"
        ],
        correctAnswer: "Smartphone",
        explanation: "Smartphones enable video calls and remote consultations."
      },
      {
        question: "What is a key benefit of telemedicine?",
        options: [
          "Increased travel",
          "Faster access to care",
          "Higher costs",
          "Limited access"
        ],
        correctAnswer: "Faster access to care",
        explanation: "Telemedicine reduces waiting time and improves accessibility."
      },
      {
        question: "Which service is provided via telemedicine?",
        options: [
          "Online consultation",
          "Surgical operation",
          "Laboratory testing only",
          "Physical therapy only"
        ],
        correctAnswer: "Online consultation",
        explanation: "Doctors can consult patients remotely via video or chat."
      },
      {
        question: "What is remote patient monitoring?",
        options: [
          "Monitoring patients in hospital",
          "Tracking patient health data remotely",
          "Manual record keeping",
          "Insurance tracking"
        ],
        correctAnswer: "Tracking patient health data remotely",
        explanation: "Devices send patient health data to doctors remotely."
      },
      {
        question: "Which technology supports telemedicine?",
        options: [
          "Internet",
          "Typewriter",
          "Fax machine",
          "Radio only"
        ],
        correctAnswer: "Internet",
        explanation: "Telemedicine relies on internet connectivity for communication."
      },
      {
        question: "What is a limitation of telemedicine?",
        options: [
          "Accessibility",
          "Lack of physical examination",
          "Low cost",
          "Convenience"
        ],
        correctAnswer: "Lack of physical examination",
        explanation: "Doctors cannot physically examine patients remotely."
      },
      {
        question: "Which field benefits from telemedicine?",
        options: [
          "Rural healthcare",
          "Construction",
          "Manufacturing",
          "Retail"
        ],
        correctAnswer: "Rural healthcare",
        explanation: "Telemedicine improves access in remote and rural areas."
      },
      {
        question: "What is virtual consultation?",
        options: [
          "In-person meeting",
          "Online doctor-patient interaction",
          "Phone recharge",
          "Insurance claim"
        ],
        correctAnswer: "Online doctor-patient interaction",
        explanation: "Virtual consultations happen via video or messaging platforms."
      },
      {
        question: "What is e-health?",
        options: [
          "Electronic healthcare services",
          "Emergency care",
          "Physical therapy",
          "Surgery"
        ],
        correctAnswer: "Electronic healthcare services",
        explanation: "E-health uses digital tools to deliver healthcare services."
      }],
    "Mental Health Services": [ {
        question: "What are mental health services?",
        options: [
          "Physical fitness programs",
          "Services for emotional and psychological well-being",
          "Financial advisory",
          "Surgical procedures"
        ],
        correctAnswer: "Services for emotional and psychological well-being",
        explanation: "Mental health services focus on diagnosing and treating mental conditions."
      },
      {
        question: "Who provides mental health care?",
        options: [
          "Engineers",
          "Psychiatrists and psychologists",
          "Accountants",
          "Lawyers"
        ],
        correctAnswer: "Psychiatrists and psychologists",
        explanation: "Mental health professionals provide therapy and treatment."
      },
      {
        question: "What is depression?",
        options: [
          "Physical injury",
          "Mood disorder with persistent sadness",
          "Heart disease",
          "Infection"
        ],
        correctAnswer: "Mood disorder with persistent sadness",
        explanation: "Depression affects emotions, thoughts, and daily functioning."
      },
      {
        question: "What is anxiety disorder?",
        options: [
          "Normal happiness",
          "Excessive fear or worry",
          "Physical illness",
          "Nutritional deficiency"
        ],
        correctAnswer: "Excessive fear or worry",
        explanation: "Anxiety disorders involve intense and persistent worry."
      },
      {
        question: "What is therapy?",
        options: [
          "Medication only",
          "Talking-based treatment",
          "Surgery",
          "Exercise program"
        ],
        correctAnswer: "Talking-based treatment",
        explanation: "Therapy helps individuals manage mental health issues through discussion."
      },
      {
        question: "What is counseling?",
        options: [
          "Financial advice",
          "Professional guidance for personal issues",
          "Medical surgery",
          "Drug treatment"
        ],
        correctAnswer: "Professional guidance for personal issues",
        explanation: "Counseling supports individuals in managing life challenges."
      },
      {
        question: "Which is a mental health professional?",
        options: [
          "Dentist",
          "Psychologist",
          "Architect",
          "Chef"
        ],
        correctAnswer: "Psychologist",
        explanation: "Psychologists specialize in mental health assessment and therapy."
      },
      {
        question: "What is stress?",
        options: [
          "Physical strength",
          "Body's response to pressure",
          "Type of infection",
          "Diet plan"
        ],
        correctAnswer: "Body's response to pressure",
        explanation: "Stress is a natural reaction to challenges or demands."
      },
      {
        question: "What is a coping mechanism?",
        options: [
          "Ignoring problems",
          "Strategies to manage stress",
          "Medical device",
          "Financial tool"
        ],
        correctAnswer: "Strategies to manage stress",
        explanation: "Coping mechanisms help individuals deal with stress and emotions."
      },
      {
        question: "What is mental wellness?",
        options: [
          "Absence of disease only",
          "Balanced emotional and psychological state",
          "Physical strength",
          "Financial stability"
        ],
        correctAnswer: "Balanced emotional and psychological state",
        explanation: "Mental wellness involves overall emotional well-being and resilience."
      }],
    "Genomics": [{
        question: "What is genomics?",
        options: [
          "Study of cells",
          "Study of genes and genomes",
          "Study of organs",
          "Study of diseases only"
        ],
        correctAnswer: "Study of genes and genomes",
        explanation: "Genomics focuses on the structure, function, and mapping of genomes."
      },
      {
        question: "What is a genome?",
        options: [
          "Single gene",
          "Complete set of DNA in an organism",
          "Protein structure",
          "Cell membrane"
        ],
        correctAnswer: "Complete set of DNA in an organism",
        explanation: "The genome includes all genetic material of an organism."
      },
      {
        question: "What does DNA stand for?",
        options: [
          "Dynamic Network Analysis",
          "Deoxyribonucleic Acid",
          "Digital Network Array",
          "Data Numeric Algorithm"
        ],
        correctAnswer: "Deoxyribonucleic Acid",
        explanation: "DNA carries genetic instructions in living organisms."
      },
      {
        question: "What is gene sequencing?",
        options: [
          "Destroying DNA",
          "Determining order of DNA nucleotides",
          "Mixing chemicals",
          "Creating vaccines"
        ],
        correctAnswer: "Determining order of DNA nucleotides",
        explanation: "Sequencing identifies the exact arrangement of DNA bases."
      },
      {
        question: "Which technology is used in genomics?",
        options: [
          "PCR",
          "Printing press",
          "Steam engine",
          "Calculator"
        ],
        correctAnswer: "PCR",
        explanation: "PCR (Polymerase Chain Reaction) amplifies DNA segments."
      },
      {
        question: "What is personalized medicine?",
        options: [
          "Same treatment for all",
          "Treatment based on genetic profile",
          "Traditional medicine",
          "Emergency care"
        ],
        correctAnswer: "Treatment based on genetic profile",
        explanation: "Genomics enables tailored treatments based on DNA."
      },
      {
        question: "What is a mutation?",
        options: [
          "Stable DNA structure",
          "Change in DNA sequence",
          "Protein synthesis",
          "Cell division"
        ],
        correctAnswer: "Change in DNA sequence",
        explanation: "Mutations are alterations in genetic material."
      },
      {
        question: "Which project mapped the human genome?",
        options: [
          "Genome Initiative",
          "Human Genome Project",
          "DNA Mapping Program",
          "BioTech Project"
        ],
        correctAnswer: "Human Genome Project",
        explanation: "This project identified and mapped all human genes."
      },
      {
        question: "What is gene expression?",
        options: [
          "DNA storage",
          "Process of converting genes into proteins",
          "Cell death",
          "Mutation process"
        ],
        correctAnswer: "Process of converting genes into proteins",
        explanation: "Gene expression leads to protein synthesis."
      },
      {
        question: "Which field combines genomics with data analysis?",
        options: [
          "Bioinformatics",
          "Mechanical engineering",
          "Accounting",
          "Architecture"
        ],
        correctAnswer: "Bioinformatics",
        explanation: "Bioinformatics uses computational tools to analyze genetic data."
      }],
    "Clinical Research": [{
        question: "What is clinical research?",
        options: [
          "Laboratory testing only",
          "Research involving human participants",
          "Animal farming",
          "Medical device manufacturing"
        ],
        correctAnswer: "Research involving human participants",
        explanation: "Clinical research studies health and treatments in humans."
      },
      {
        question: "What is a clinical trial?",
        options: [
          "Testing drugs in a lab",
          "Study to evaluate medical treatments in humans",
          "Marketing survey",
          "Hospital audit"
        ],
        correctAnswer: "Study to evaluate medical treatments in humans",
        explanation: "Clinical trials test safety and effectiveness of treatments."
      },
      {
        question: "What is Phase I trial?",
        options: [
          "Large population testing",
          "Testing safety in small group",
          "Market launch",
          "Post-marketing study"
        ],
        correctAnswer: "Testing safety in small group",
        explanation: "Phase I focuses on safety and dosage."
      },
      {
        question: "What is Phase III trial?",
        options: [
          "Animal testing",
          "Testing on large population",
          "Initial safety testing",
          "Lab experiment"
        ],
        correctAnswer: "Testing on large population",
        explanation: "Phase III confirms effectiveness and monitors side effects."
      },
      {
        question: "What is informed consent?",
        options: [
          "Signing a contract blindly",
          "Participant agreement after understanding study",
          "Doctor’s approval",
          "Government approval"
        ],
        correctAnswer: "Participant agreement after understanding study",
        explanation: "Participants must be informed before joining trials."
      },
      {
        question: "Who oversees clinical trials?",
        options: [
          "Marketing team",
          "Regulatory authorities",
          "Sales team",
          "Engineers"
        ],
        correctAnswer: "Regulatory authorities",
        explanation: "Authorities ensure trials follow ethical and safety standards."
      },
      {
        question: "What is placebo?",
        options: [
          "Active drug",
          "Inactive substance used as control",
          "Vaccine",
          "Supplement"
        ],
        correctAnswer: "Inactive substance used as control",
        explanation: "Placebos help compare treatment effects."
      },
      {
        question: "What is double-blind study?",
        options: [
          "Only doctor knows treatment",
          "Both patient and researcher unaware of treatment",
          "Only patient knows",
          "Open-label study"
        ],
        correctAnswer: "Both patient and researcher unaware of treatment",
        explanation: "Double-blind studies reduce bias."
      },
      {
        question: "What is a protocol in clinical research?",
        options: [
          "Financial plan",
          "Detailed study plan",
          "Marketing strategy",
          "Insurance policy"
        ],
        correctAnswer: "Detailed study plan",
        explanation: "Protocol outlines how the study is conducted."
      },
      {
        question: "What is adverse event?",
        options: [
          "Positive outcome",
          "Unexpected negative effect",
          "Financial loss",
          "Data error"
        ],
        correctAnswer: "Unexpected negative effect",
        explanation: "Adverse events are unwanted effects during trials."
      }],
    "Healthcare Analytics": [{
        question: "What is healthcare analytics?",
        options: [
          "Manual record keeping",
          "Analysis of healthcare data for insights",
          "Hospital construction",
          "Drug manufacturing"
        ],
        correctAnswer: "Analysis of healthcare data for insights",
        explanation: "Healthcare analytics uses data to improve patient outcomes and efficiency."
      },
      {
        question: "What type of data is used in healthcare analytics?",
        options: [
          "Financial market data only",
          "Patient records and clinical data",
          "Weather data",
          "Sports data"
        ],
        correctAnswer: "Patient records and clinical data",
        explanation: "Healthcare analytics relies on medical and patient-related data."
      },
      {
        question: "What is predictive analytics in healthcare?",
        options: [
          "Analyzing past trends to predict future outcomes",
          "Random guessing",
          "Manual diagnosis",
          "Insurance billing"
        ],
        correctAnswer: "Analyzing past trends to predict future outcomes",
        explanation: "Predictive analytics helps forecast disease risks and outcomes."
      },
      {
        question: "Which tool is commonly used in healthcare analytics?",
        options: [
          "Excel",
          "Hammer",
          "Stethoscope",
          "Microscope only"
        ],
        correctAnswer: "Excel",
        explanation: "Tools like Excel, Python, and R are widely used for analysis."
      },
      {
        question: "What is descriptive analytics?",
        options: [
          "Predicting future diseases",
          "Summarizing historical data",
          "Performing surgery",
          "Creating medicines"
        ],
        correctAnswer: "Summarizing historical data",
        explanation: "Descriptive analytics explains what has already happened."
      },
      {
        question: "What is a KPI in healthcare?",
        options: [
          "Key Performance Indicator",
          "Known Patient Index",
          "Kidney Pressure Index",
          "Key Prescription Item"
        ],
        correctAnswer: "Key Performance Indicator",
        explanation: "KPIs measure performance in healthcare systems."
      },
      {
        question: "What is data visualization?",
        options: [
          "Writing reports only",
          "Graphical representation of data",
          "Data deletion",
          "Manual filing"
        ],
        correctAnswer: "Graphical representation of data",
        explanation: "Charts and graphs help understand healthcare data easily."
      },
      {
        question: "What is EHR data used for in analytics?",
        options: [
          "Entertainment",
          "Patient history analysis",
          "Advertising",
          "Hospital building design"
        ],
        correctAnswer: "Patient history analysis",
        explanation: "EHR data helps analyze patient health trends."
      },
      {
        question: "What is operational analytics?",
        options: [
          "Analysis of hospital daily operations",
          "Drug testing",
          "Surgical procedures",
          "Insurance fraud only"
        ],
        correctAnswer: "Analysis of hospital daily operations",
        explanation: "It improves efficiency in healthcare systems."
      },
      {
        question: "Why is healthcare analytics important?",
        options: [
          "To increase paperwork",
          "To improve decision making and patient care",
          "To reduce doctors",
          "To replace hospitals"
        ],
        correctAnswer: "To improve decision making and patient care",
        explanation: "Analytics helps improve healthcare quality and efficiency."
      }],
    "Elder Care Services": [{
        question: "What are elder care services?",
        options: [
          "Services for children education",
          "Care and support for elderly people",
          "Sports training services",
          "Hospital construction services"
        ],
        correctAnswer: "Care and support for elderly people",
        explanation: "Elder care services focus on assisting senior citizens with health and daily needs."
      },
      {
        question: "Which is a common need in elder care?",
        options: [
          "Computer programming",
          "Assistance with daily activities",
          "Stock trading",
          "Software installation"
        ],
        correctAnswer: "Assistance with daily activities",
        explanation: "Elderly individuals often need help with daily living tasks."
      },
      {
        question: "What is assisted living?",
        options: [
          "Living independently without help",
          "Housing with support services for elderly",
          "Hospital surgery unit",
          "Temporary hotel stay"
        ],
        correctAnswer: "Housing with support services for elderly",
        explanation: "Assisted living provides care while allowing some independence."
      },
      {
        question: "What is home care in elder services?",
        options: [
          "Care provided in hospitals only",
          "Medical and personal care at home",
          "Insurance services",
          "Pharmacy delivery only"
        ],
        correctAnswer: "Medical and personal care at home",
        explanation: "Home care allows elderly to receive support in their own homes."
      },
      {
        question: "What is geriatric care?",
        options: [
          "Care for newborn babies",
          "Medical care for elderly people",
          "Dental care only",
          "Surgical training"
        ],
        correctAnswer: "Medical care for elderly people",
        explanation: "Geriatric care specializes in health issues of older adults."
      },
      {
        question: "Which professional works in elder care?",
        options: [
          "Civil engineer",
          "Caregiver",
          "Software developer",
          "Pilot"
        ],
        correctAnswer: "Caregiver",
        explanation: "Caregivers assist elderly people with daily needs and health support."
      },
      {
        question: "What is palliative care?",
        options: [
          "Fitness training",
          "Comfort care for serious illness",
          "Sports therapy",
          "Financial planning"
        ],
        correctAnswer: "Comfort care for serious illness",
        explanation: "Palliative care focuses on improving quality of life."
      },
      {
        question: "What is a retirement home?",
        options: [
          "School for seniors",
          "Residential facility for elderly people",
          "Hospital emergency unit",
          "Office space"
        ],
        correctAnswer: "Residential facility for elderly people",
        explanation: "Retirement homes provide housing and care for seniors."
      },
      {
        question: "Why is elder care important?",
        options: [
          "To increase population",
          "To support aging population health and wellbeing",
          "To reduce hospitals",
          "To improve tourism"
        ],
        correctAnswer: "To support aging population health and wellbeing",
        explanation: "It ensures dignity, safety, and health for elderly people."
      },
      {
        question: "What is dementia care?",
        options: [
          "Care for athletes",
          "Special care for memory-related conditions",
          "Financial assistance",
          "Dental treatment"
        ],
        correctAnswer: "Special care for memory-related conditions",
        explanation: "Dementia care supports people with memory loss conditions."
      }],
    "Veterinary Services": [{
        question: "What are veterinary services?",
        options: [
          "Medical services for humans only",
          "Healthcare services for animals",
          "Financial services for farms",
          "Animal transportation services"
        ],
        correctAnswer: "Healthcare services for animals",
        explanation: "Veterinary services focus on diagnosing and treating animal health issues."
      },
      {
        question: "Who provides veterinary care?",
        options: [
          "Dentist",
          "Veterinarian",
          "Pharmacist",
          "Surgeon assistant only"
        ],
        correctAnswer: "Veterinarian",
        explanation: "Veterinarians are trained medical professionals for animals."
      },
      {
        question: "What is a common veterinary procedure?",
        options: [
          "Computer repair",
          "Vaccination for animals",
          "Car washing",
          "Banking services"
        ],
        correctAnswer: "Vaccination for animals",
        explanation: "Vaccinations protect animals from diseases."
      },
      {
        question: "What is zoonotic disease?",
        options: [
          "Disease only in plants",
          "Disease that spreads between animals and humans",
          "Disease in machines",
          "Genetic disorder in humans only"
        ],
        correctAnswer: "Disease that spreads between animals and humans",
        explanation: "Zoonotic diseases can transfer from animals to humans."
      },
      {
        question: "What is animal surgery?",
        options: [
          "Financial operation for animals",
          "Medical procedure performed on animals",
          "Animal training",
          "Breeding process"
        ],
        correctAnswer: "Medical procedure performed on animals",
        explanation: "Veterinarians perform surgeries to treat injuries or illnesses."
      },
      {
        question: "What is pet care?",
        options: [
          "Software maintenance",
          "Routine care and health management of pets",
          "Industrial cleaning",
          "Vehicle maintenance"
        ],
        correctAnswer: "Routine care and health management of pets",
        explanation: "Pet care includes feeding, grooming, and medical attention."
      },
      {
        question: "What is livestock health management?",
        options: [
          "Managing stock markets",
          "Maintaining health of farm animals",
          "Managing human hospitals",
          "Building infrastructure"
        ],
        correctAnswer: "Maintaining health of farm animals",
        explanation: "It ensures productivity and health of farm animals."
      },
      {
        question: "What is animal vaccination?",
        options: [
          "Feeding animals",
          "Giving immunity against diseases",
          "Training animals",
          "Selling animals"
        ],
        correctAnswer: "Giving immunity against diseases",
        explanation: "Vaccines help protect animals from infections."
      },
      {
        question: "Where do veterinarians usually work?",
        options: [
          "Banks",
          "Animal hospitals and clinics",
          "Schools",
          "Airports only"
        ],
        correctAnswer: "Animal hospitals and clinics",
        explanation: "Veterinarians treat animals in clinical settings."
      },
      {
        question: "Why is veterinary care important?",
        options: [
          "To improve animal health and prevent diseases",
          "To increase car production",
          "To manage human banking",
          "To build houses"
        ],
        correctAnswer: "To improve animal health and prevent diseases",
        explanation: "It ensures wellbeing of animals and public health safety."
      }],
    "Alternative Medicine": [{
        question: "What is alternative medicine?",
        options: [
          "Conventional hospital surgery",
          "Non-traditional medical treatments",
          "Pharmaceutical manufacturing",
          "Medical insurance system"
        ],
        correctAnswer: "Non-traditional medical treatments",
        explanation: "Alternative medicine includes treatments outside standard modern medicine."
      },
      {
        question: "Which is an example of alternative medicine?",
        options: [
          "Chemotherapy",
          "Acupuncture",
          "X-ray scan",
          "Blood test"
        ],
        correctAnswer: "Acupuncture",
        explanation: "Acupuncture uses needles to stimulate specific body points."
      },
      {
        question: "What is Ayurveda?",
        options: [
          "A type of surgery",
          "Traditional Indian system of medicine",
          "Modern pharmaceutical drug",
          "Medical device"
        ],
        correctAnswer: "Traditional Indian system of medicine",
        explanation: "Ayurveda is a holistic healing system originating in India."
      },
      {
        question: "What is herbal medicine?",
        options: [
          "Medicine made from synthetic chemicals",
          "Treatment using plant-based substances",
          "Surgical procedure",
          "Radiation therapy"
        ],
        correctAnswer: "Treatment using plant-based substances",
        explanation: "Herbal medicine uses plants for healing and treatment."
      },
      {
        question: "What is homeopathy?",
        options: [
          "Surgical technique",
          "Treatment using highly diluted substances",
          "Physical therapy only",
          "Radiology method"
        ],
        correctAnswer: "Treatment using highly diluted substances",
        explanation: "Homeopathy is based on the principle of 'like cures like'."
      },
      {
        question: "What is holistic healing?",
        options: [
          "Treating only physical symptoms",
          "Treating mind, body, and spirit together",
          "Only surgical treatment",
          "Only drug-based treatment"
        ],
        correctAnswer: "Treating mind, body, and spirit together",
        explanation: "Holistic healing focuses on overall wellness."
      },
      {
        question: "What is naturopathy?",
        options: [
          "Use of natural methods for healing",
          "Use of surgery",
          "Use of antibiotics only",
          "Use of radiation"
        ],
        correctAnswer: "Use of natural methods for healing",
        explanation: "Naturopathy promotes natural therapies and lifestyle changes."
      },
      {
        question: "Which therapy uses essential oils?",
        options: [
          "Chemotherapy",
          "Aromatherapy",
          "Radiotherapy",
          "Physiotherapy"
        ],
        correctAnswer: "Aromatherapy",
        explanation: "Aromatherapy uses plant-based oils for healing and relaxation."
      },
      {
        question: "What is the main goal of alternative medicine?",
        options: [
          "Replace hospitals completely",
          "Support healing using natural or traditional methods",
          "Increase surgery rates",
          "Develop vaccines"
        ],
        correctAnswer: "Support healing using natural or traditional methods",
        explanation: "It focuses on natural and complementary treatments."
      },
      {
        question: "Is alternative medicine always scientifically proven?",
        options: [
          "Always yes",
          "Always no",
          "Not always, evidence varies",
          "Only in hospitals"
        ],
        correctAnswer: "Not always, evidence varies",
        explanation: "Some alternative treatments lack strong scientific validation."
      }]
  },
  manufacturing: {
    "Automotive": [ {
        question: "What is the main function of the automotive industry?",
        options: [
          "Producing food products",
          "Designing and manufacturing vehicles",
          "Providing banking services",
          "Building software systems"
        ],
        correctAnswer: "Designing and manufacturing vehicles",
        explanation: "The automotive industry focuses on vehicle design, production, and sales."
      },
      {
        question: "What powers an internal combustion engine?",
        options: [
          "Electricity only",
          "Fuel combustion",
          "Solar energy",
          "Wind energy"
        ],
        correctAnswer: "Fuel combustion",
        explanation: "It generates power by burning fuel inside the engine."
      },
      {
        question: "What is an electric vehicle (EV)?",
        options: [
          "A vehicle powered by fuel",
          "A vehicle powered by electricity",
          "A vehicle powered by steam",
          "A vehicle powered by hydrogen only"
        ],
        correctAnswer: "A vehicle powered by electricity",
        explanation: "EVs use electric motors and batteries instead of fuel engines."
      },
      {
        question: "What is a hybrid vehicle?",
        options: [
          "Uses only electricity",
          "Uses both fuel and electricity",
          "Uses only diesel",
          "Uses solar panels only"
        ],
        correctAnswer: "Uses both fuel and electricity",
        explanation: "Hybrid vehicles combine internal combustion engines and electric motors."
      },
      {
        question: "What does ABS stand for?",
        options: [
          "Automatic Battery System",
          "Anti-lock Braking System",
          "Auto Body Structure",
          "Advanced Brake Sensor"
        ],
        correctAnswer: "Anti-lock Braking System",
        explanation: "ABS prevents wheels from locking during braking."
      },
      {
        question: "What is torque in vehicles?",
        options: [
          "Engine sound",
          "Rotational force produced by the engine",
          "Fuel type",
          "Wheel alignment"
        ],
        correctAnswer: "Rotational force produced by the engine",
        explanation: "Torque determines the engine's ability to rotate wheels."
      },
      {
        question: "What is fuel efficiency?",
        options: [
          "Car speed",
          "Distance traveled per unit of fuel",
          "Engine size",
          "Brake strength"
        ],
        correctAnswer: "Distance traveled per unit of fuel",
        explanation: "It measures how efficiently a vehicle uses fuel."
      },
      {
        question: "What is a transmission system?",
        options: [
          "System that cools the engine",
          "System that transfers power to wheels",
          "System that paints the car",
          "System that controls airbags"
        ],
        correctAnswer: "System that transfers power to wheels",
        explanation: "Transmission controls how engine power reaches the wheels."
      },
      {
        question: "What is automotive manufacturing?",
        options: [
          "Making vehicles and parts",
          "Cooking food",
          "Producing medicines",
          "Building roads"
        ],
        correctAnswer: "Making vehicles and parts",
        explanation: "It includes designing and assembling automobiles."
      },
      {
        question: "What is crash testing?",
        options: [
          "Testing car speed",
          "Testing vehicle safety in collisions",
          "Testing fuel consumption",
          "Testing paint quality"
        ],
        correctAnswer: "Testing vehicle safety in collisions",
        explanation: "Crash tests evaluate passenger safety in accidents."
      }],
    "Aerospace & Defense": [{
        question: "What does the aerospace industry focus on?",
        options: [
          "Building ships only",
          "Designing and manufacturing aircraft and spacecraft",
          "Producing food items",
          "Developing software applications"
        ],
        correctAnswer: "Designing and manufacturing aircraft and spacecraft",
        explanation: "Aerospace deals with aircraft, spacecraft, and related technologies."
      },
      {
        question: "What is a spacecraft?",
        options: [
          "Vehicle designed for space travel",
          "Underwater vehicle",
          "Land transport vehicle",
          "Medical device"
        ],
        correctAnswer: "Vehicle designed for space travel",
        explanation: "Spacecraft are designed to operate beyond Earth's atmosphere."
      },
      {
        question: "What is aerodynamics?",
        options: [
          "Study of sound waves",
          "Study of how air interacts with moving objects",
          "Study of electricity",
          "Study of metals"
        ],
        correctAnswer: "Study of how air interacts with moving objects",
        explanation: "Aerodynamics helps improve aircraft design and performance."
      },
      {
        question: "What is the primary purpose of defense industry?",
        options: [
          "Food production",
          "National security and military equipment development",
          "Retail services",
          "Software development"
        ],
        correctAnswer: "National security and military equipment development",
        explanation: "Defense industry focuses on protecting a country through technology and equipment."
      },
      {
        question: "What is a jet engine?",
        options: [
          "Engine used in bicycles",
          "Engine that produces thrust using air and fuel",
          "Engine for washing machines",
          "Engine for ships only"
        ],
        correctAnswer: "Engine that produces thrust using air and fuel",
        explanation: "Jet engines power aircraft by generating high-speed thrust."
      },
      {
        question: "What is a drone?",
        options: [
          "Manned aircraft",
          "Unmanned aerial vehicle",
          "Submarine vehicle",
          "Ground robot only"
        ],
        correctAnswer: "Unmanned aerial vehicle",
        explanation: "Drones are remotely controlled or autonomous flying devices."
      },
      {
        question: "What is satellite technology used for?",
        options: [
          "Cooking food",
          "Communication, navigation, and observation",
          "Building cars",
          "Mining operations"
        ],
        correctAnswer: "Communication, navigation, and observation",
        explanation: "Satellites support GPS, weather tracking, and communications."
      },
      {
        question: "What is a missile system?",
        options: [
          "A food delivery system",
          "A guided weapon system",
          "A medical device",
          "A transport system"
        ],
        correctAnswer: "A guided weapon system",
        explanation: "Missiles are used in defense for precision targeting."
      },
      {
        question: "What is aviation?",
        options: [
          "Study of oceans",
          "Operation of aircraft",
          "Study of plants",
          "Banking system"
        ],
        correctAnswer: "Operation of aircraft",
        explanation: "Aviation covers all aspects of flying aircraft."
      },
      {
        question: "Why is lightweight material important in aerospace?",
        options: [
          "To increase weight",
          "To improve fuel efficiency and performance",
          "To reduce speed",
          "To increase cost only"
        ],
        correctAnswer: "To improve fuel efficiency and performance",
        explanation: "Light materials help aircraft fly efficiently and safely."
      }],
    "Electronics Manufacturing": [ {
        question: "What is electronics manufacturing?",
        options: [
          "Production of electronic devices and components",
          "Farming electronic crops",
          "Construction of buildings",
          "Financial trading systems"
        ],
        correctAnswer: "Production of electronic devices and components",
        explanation: "It involves designing and producing electronic goods like chips, circuits, and devices."
      },
      {
        question: "What is a semiconductor?",
        options: [
          "Material that conducts only heat",
          "Material with controlled electrical conductivity",
          "Pure insulator",
          "Mechanical component"
        ],
        correctAnswer: "Material with controlled electrical conductivity",
        explanation: "Semiconductors are key materials used in electronic devices."
      },
      {
        question: "What is a microchip?",
        options: [
          "Large mechanical engine",
          "Small integrated electronic circuit",
          "Type of battery",
          "Cooling device"
        ],
        correctAnswer: "Small integrated electronic circuit",
        explanation: "Microchips contain millions of electronic components on a tiny chip."
      },
      {
        question: "What is PCB in electronics?",
        options: [
          "Personal Computer Board",
          "Printed Circuit Board",
          "Power Control Box",
          "Plastic Cable Base"
        ],
        correctAnswer: "Printed Circuit Board",
        explanation: "PCB connects electronic components using conductive pathways."
      },
      {
        question: "What does IC stand for?",
        options: [
          "Internal Control",
          "Integrated Circuit",
          "Input Connector",
          "Industrial Code"
        ],
        correctAnswer: "Integrated Circuit",
        explanation: "ICs are miniaturized electronic circuits used in devices."
      },
      {
        question: "What is soldering?",
        options: [
          "Removing components",
          "Joining electronic components using metal alloy",
          "Testing software",
          "Cooling devices"
        ],
        correctAnswer: "Joining electronic components using metal alloy",
        explanation: "Soldering is used to create electrical connections."
      },
      {
        question: "What is a resistor?",
        options: [
          "Device that stores electricity",
          "Component that limits current flow",
          "Power generator",
          "Battery charger"
        ],
        correctAnswer: "Component that limits current flow",
        explanation: "Resistors control the flow of electric current."
      },
      {
        question: "What is a capacitor?",
        options: [
          "Device that stores electrical energy",
          "Device that produces sound",
          "Cooling system",
          "Switching device"
        ],
        correctAnswer: "Device that stores electrical energy",
        explanation: "Capacitors temporarily store and release electrical energy."
      },
      {
        question: "What is quality testing in electronics?",
        options: [
          "Checking food quality",
          "Ensuring electronic products work correctly",
          "Packaging products",
          "Marketing products"
        ],
        correctAnswer: "Ensuring electronic products work correctly",
        explanation: "Testing ensures devices are safe and functional."
      },
      {
        question: "Why is miniaturization important in electronics?",
        options: [
          "To make devices larger",
          "To reduce size and improve efficiency",
          "To increase weight",
          "To slow performance"
        ],
        correctAnswer: "To reduce size and improve efficiency",
        explanation: "Smaller devices improve portability and performance."
      }],
    "Industrial Manufacturing": [{
        question: "What is industrial manufacturing?",
        options: [
          "Production of goods using large-scale machines and processes",
          "Small home-based crafting",
          "Software development",
          "Financial trading"
        ],
        correctAnswer: "Production of goods using large-scale machines and processes",
        explanation: "Industrial manufacturing focuses on mass production using machinery."
      },
      {
        question: "What is mass production?",
        options: [
          "Producing one item at a time",
          "Producing large quantities of identical goods",
          "Producing only handmade goods",
          "Producing software only"
        ],
        correctAnswer: "Producing large quantities of identical goods",
        explanation: "Mass production increases efficiency and reduces cost per unit."
      },
      {
        question: "What is automation in manufacturing?",
        options: [
          "Manual labor only",
          "Use of machines and systems to perform tasks automatically",
          "Cooking process",
          "Financial auditing"
        ],
        correctAnswer: "Use of machines and systems to perform tasks automatically",
        explanation: "Automation reduces human effort and increases efficiency."
      },
      {
        question: "What is a production line?",
        options: [
          "A financial report",
          "A sequence of steps in manufacturing process",
          "A software system",
          "A transport route"
        ],
        correctAnswer: "A sequence of steps in manufacturing process",
        explanation: "Production lines help organize efficient manufacturing workflows."
      },
      {
        question: "What is quality control?",
        options: [
          "Marketing strategy",
          "Ensuring products meet required standards",
          "Hiring employees",
          "Financial planning"
        ],
        correctAnswer: "Ensuring products meet required standards",
        explanation: "Quality control checks defects and maintains product standards."
      },
      {
        question: "What is lean manufacturing?",
        options: [
          "Increasing waste in production",
          "Reducing waste and improving efficiency",
          "Slowing production speed",
          "Manual-only production"
        ],
        correctAnswer: "Reducing waste and improving efficiency",
        explanation: "Lean manufacturing aims to maximize value and minimize waste."
      },
      {
        question: "What is supply chain in manufacturing?",
        options: [
          "Chain of software systems",
          "Flow of materials from supplier to customer",
          "Internet connection system",
          "Employee hierarchy"
        ],
        correctAnswer: "Flow of materials from supplier to customer",
        explanation: "Supply chain manages production and distribution processes."
      },
      {
        question: "What is industrial robotics?",
        options: [
          "Robots used for entertainment only",
          "Robots used in manufacturing processes",
          "Medical surgery only",
          "Agriculture only"
        ],
        correctAnswer: "Robots used in manufacturing processes",
        explanation: "Industrial robots perform repetitive manufacturing tasks."
      },
      {
        question: "What is factory floor?",
        options: [
          "Office space",
          "Area where manufacturing happens",
          "Parking lot",
          "Warehouse only"
        ],
        correctAnswer: "Area where manufacturing happens",
        explanation: "Factory floors are where production processes take place."
      },
      {
        question: "Why is efficiency important in manufacturing?",
        options: [
          "To increase waste",
          "To reduce cost and increase output",
          "To slow production",
          "To reduce quality"
        ],
        correctAnswer: "To reduce cost and increase output",
        explanation: "Efficiency improves profitability and productivity."
      }],
    "Chemical Manufacturing": [ {
        question: "What is chemical manufacturing?",
        options: [
          "Production of software systems",
          "Production of chemicals and chemical products",
          "Construction of buildings",
          "Food delivery services"
        ],
        correctAnswer: "Production of chemicals and chemical products",
        explanation: "It involves large-scale production of industrial and consumer chemicals."
      },
      {
        question: "What is a chemical reaction?",
        options: [
          "Mixing colors only",
          "Process that transforms substances into new ones",
          "Physical movement of objects",
          "Data processing method"
        ],
        correctAnswer: "Process that transforms substances into new ones",
        explanation: "Chemical reactions change the composition of substances."
      },
      {
        question: "What is a catalyst?",
        options: [
          "A substance that speeds up a reaction without being consumed",
          "A type of chemical waste",
          "A cooling device",
          "A cleaning agent only"
        ],
        correctAnswer: "A substance that speeds up a reaction without being consumed",
        explanation: "Catalysts increase reaction speed without changing themselves."
      },
      {
        question: "What is polymer production?",
        options: [
          "Production of metals",
          "Creation of large molecules from smaller units",
          "Breaking down proteins",
          "Water purification only"
        ],
        correctAnswer: "Creation of large molecules from smaller units",
        explanation: "Polymers are long-chain molecules used in plastics and materials."
      },
      {
        question: "What is a chemical plant?",
        options: [
          "A garden for chemical experiments",
          "Industrial facility for producing chemicals",
          "A laboratory school",
          "A hospital unit"
        ],
        correctAnswer: "Industrial facility for producing chemicals",
        explanation: "Chemical plants manufacture large quantities of chemicals."
      },
      {
        question: "What is distillation?",
        options: [
          "Mixing substances together",
          "Separating liquids based on boiling points",
          "Freezing liquids",
          "Burning chemicals"
        ],
        correctAnswer: "Separating liquids based on boiling points",
        explanation: "Distillation is used to purify or separate liquid mixtures."
      },
      {
        question: "What is a solvent?",
        options: [
          "A substance that dissolves other substances",
          "A solid material",
          "A machine",
          "A type of gas only"
        ],
        correctAnswer: "A substance that dissolves other substances",
        explanation: "Solvents dissolve solutes to form solutions."
      },
      {
        question: "What is chemical safety?",
        options: [
          "Ignoring lab rules",
          "Handling chemicals safely to prevent harm",
          "Mixing random chemicals",
          "Storing chemicals anywhere"
        ],
        correctAnswer: "Handling chemicals safely to prevent harm",
        explanation: "Safety ensures protection from hazardous chemical exposure."
      },
      {
        question: "What is batch production?",
        options: [
          "Continuous nonstop production",
          "Producing chemicals in defined quantities",
          "Manual crafting only",
          "Random production"
        ],
        correctAnswer: "Producing chemicals in defined quantities",
        explanation: "Batch production makes products in specific controlled amounts."
      },
      {
        question: "Why is temperature control important in chemical manufacturing?",
        options: [
          "To increase noise",
          "To ensure proper reaction conditions",
          "To reduce safety",
          "To slow down all processes"
        ],
        correctAnswer: "To ensure proper reaction conditions",
        explanation: "Temperature affects reaction speed and product quality."
      }],
    "Consumer Goods": [{
        question: "What are consumer goods?",
        options: [
          "Goods used by businesses only",
          "Products purchased by individuals for personal use",
          "Military equipment",
          "Raw industrial materials only"
        ],
        correctAnswer: "Products purchased by individuals for personal use",
        explanation: "Consumer goods are products bought for everyday personal use."
      },
      {
        question: "What are fast-moving consumer goods (FMCG)?",
        options: [
          "Expensive machinery",
          "Products sold quickly at low cost",
          "Industrial robots",
          "Long-term investment assets"
        ],
        correctAnswer: "Products sold quickly at low cost",
        explanation: "FMCG includes items like food, toiletries, and cleaning products."
      },
      {
        question: "Which is an example of a durable consumer good?",
        options: [
          "Milk",
          "Bread",
          "Washing machine",
          "Fruit"
        ],
        correctAnswer: "Washing machine",
        explanation: "Durable goods last for a long time, like appliances."
      },
      {
        question: "What is product packaging?",
        options: [
          "Destroying products",
          "Wrapping and protecting goods for sale",
          "Advertising only",
          "Transporting people"
        ],
        correctAnswer: "Wrapping and protecting goods for sale",
        explanation: "Packaging protects products and helps in branding."
      },
      {
        question: "What is branding?",
        options: [
          "Cooking process",
          "Creating identity for a product",
          "Manufacturing machines",
          "Shipping goods only"
        ],
        correctAnswer: "Creating identity for a product",
        explanation: "Branding helps customers recognize and trust products."
      },
      {
        question: "What is consumer demand?",
        options: [
          "Government policy",
          "Desire of consumers to buy goods",
          "Factory output only",
          "Machine production speed"
        ],
        correctAnswer: "Desire of consumers to buy goods",
        explanation: "Demand drives production and market supply."
      },
      {
        question: "What is quality in consumer goods?",
        options: [
          "Only price",
          "Standard of excellence of a product",
          "Number of factories",
          "Shipping time only"
        ],
        correctAnswer: "Standard of excellence of a product",
        explanation: "Quality determines how well a product performs."
      },
      {
        question: "What is retail in consumer goods?",
        options: [
          "Selling directly to consumers",
          "Manufacturing raw materials",
          "Industrial production",
          "Exporting machinery"
        ],
        correctAnswer: "Selling directly to consumers",
        explanation: "Retail involves selling goods to end customers."
      },
      {
        question: "What is supply chain in consumer goods?",
        options: [
          "Chain of social media posts",
          "Flow from production to consumer",
          "Only manufacturing process",
          "Advertising system only"
        ],
        correctAnswer: "Flow from production to consumer",
        explanation: "Supply chain ensures goods reach consumers efficiently."
      },
      {
        question: "Why is customer feedback important?",
        options: [
          "To increase production waste",
          "To improve product quality and satisfaction",
          "To reduce sales",
          "To stop manufacturing"
        ],
        correctAnswer: "To improve product quality and satisfaction",
        explanation: "Feedback helps companies improve their products."
      }],
    "Food & Beverage Processing": [{
        question: "What is food processing?",
        options: [
          "Cooking at home only",
          "Transforming raw ingredients into consumable food products",
          "Growing crops",
          "Selling farm equipment"
        ],
        correctAnswer: "Transforming raw ingredients into consumable food products",
        explanation: "Food processing converts raw materials into edible and packaged food."
      },
      {
        question: "Why is food processing important?",
        options: [
          "To reduce food variety",
          "To improve safety and shelf life",
          "To increase waste",
          "To stop production"
        ],
        correctAnswer: "To improve safety and shelf life",
        explanation: "Processing helps preserve food and make it safe for consumption."
      },
      {
        question: "What is pasteurization?",
        options: [
          "Freezing food instantly",
          "Heating food to kill harmful microbes",
          "Adding chemicals to food",
          "Drying food in sunlight only"
        ],
        correctAnswer: "Heating food to kill harmful microbes",
        explanation: "Pasteurization reduces pathogens in milk and beverages."
      },
      {
        question: "What is food packaging?",
        options: [
          "Cooking food",
          "Protecting and enclosing food products",
          "Growing food",
          "Testing food taste"
        ],
        correctAnswer: "Protecting and enclosing food products",
        explanation: "Packaging keeps food safe and extends shelf life."
      },
      {
        question: "What is quality control in food processing?",
        options: [
          "Selling food quickly",
          "Ensuring food meets safety and quality standards",
          "Cooking food faster",
          "Increasing food prices"
        ],
        correctAnswer: "Ensuring food meets safety and quality standards",
        explanation: "Quality control prevents contamination and defects."
      },
      {
        question: "What is a beverage?",
        options: [
          "Solid food",
          "Drinkable liquid",
          "Cooking tool",
          "Packaging material"
        ],
        correctAnswer: "Drinkable liquid",
        explanation: "Beverages include water, juice, soda, etc."
      },
      {
        question: "What is food preservation?",
        options: [
          "Making food spicy",
          "Preventing food spoilage",
          "Growing food faster",
          "Cooking food twice"
        ],
        correctAnswer: "Preventing food spoilage",
        explanation: "Preservation extends the usability of food products."
      },
      {
        question: "What is fermentation?",
        options: [
          "Heating food at high pressure",
          "Chemical breakdown of food by microorganisms",
          "Freezing food",
          "Drying food in oven"
        ],
        correctAnswer: "Chemical breakdown of food by microorganisms",
        explanation: "Fermentation is used in bread, yogurt, and alcohol production."
      },
      {
        question: "What is automation in food processing?",
        options: [
          "Manual cooking only",
          "Using machines to process food",
          "Growing crops manually",
          "Transporting food only"
        ],
        correctAnswer: "Using machines to process food",
        explanation: "Automation improves efficiency and consistency in production."
      },
      {
        question: "Why is hygiene important in food processing?",
        options: [
          "To increase taste only",
          "To prevent contamination and illness",
          "To increase production cost",
          "To reduce packaging"
        ],
        correctAnswer: "To prevent contamination and illness",
        explanation: "Hygiene ensures food safety for consumers."
      }],
    "Textile Manufacturing": [{
        question: "What is textile manufacturing?",
        options: [
          "Production of software systems",
          "Production of fabrics and garments",
          "Mining minerals",
          "Food processing"
        ],
        correctAnswer: "Production of fabrics and garments",
        explanation: "Textile manufacturing involves converting fibers into fabrics and clothing."
      },
      {
        question: "What are natural fibers?",
        options: [
          "Fibers made in labs only",
          "Fibers obtained from plants and animals",
          "Plastic-based fibers",
          "Metal-based fibers"
        ],
        correctAnswer: "Fibers obtained from plants and animals",
        explanation: "Cotton and wool are examples of natural fibers."
      },
      {
        question: "What is weaving?",
        options: [
          "Cutting fabric",
          "Interlacing yarns to form fabric",
          "Dyeing clothes",
          "Packaging textiles"
        ],
        correctAnswer: "Interlacing yarns to form fabric",
        explanation: "Weaving combines threads to create fabric."
      },
      {
        question: "What is spinning in textiles?",
        options: [
          "Printing designs on fabric",
          "Turning fibers into yarn",
          "Bleaching clothes",
          "Sewing garments"
        ],
        correctAnswer: "Turning fibers into yarn",
        explanation: "Spinning converts raw fibers into yarn for weaving."
      },
      {
        question: "What is dyeing?",
        options: [
          "Cutting fabric into shapes",
          "Adding color to textiles",
          "Weaving yarn",
          "Packaging clothes"
        ],
        correctAnswer: "Adding color to textiles",
        explanation: "Dyeing gives color to fabrics and garments."
      },
      {
        question: "What is synthetic fiber?",
        options: [
          "Fiber from animals",
          "Man-made fiber produced chemically",
          "Natural plant fiber",
          "Food-based fiber"
        ],
        correctAnswer: "Man-made fiber produced chemically",
        explanation: "Examples include polyester and nylon."
      },
      {
        question: "What is knitting?",
        options: [
          "Joining loops of yarn to make fabric",
          "Painting fabric",
          "Cutting cloth",
          "Ironing clothes"
        ],
        correctAnswer: "Joining loops of yarn to make fabric",
        explanation: "Knitting creates fabric using interlinked loops."
      },
      {
        question: "What is a loom?",
        options: [
          "A machine used for weaving fabric",
          "A dyeing chemical",
          "A cutting tool",
          "A sewing needle"
        ],
        correctAnswer: "A machine used for weaving fabric",
        explanation: "Looms are used to weave yarn into cloth."
      },
      {
        question: "Why is textile finishing important?",
        options: [
          "To increase fabric weight",
          "To improve appearance and durability",
          "To destroy fabric",
          "To reduce color quality"
        ],
        correctAnswer: "To improve appearance and durability",
        explanation: "Finishing enhances fabric quality and usability."
      },
      {
        question: "What is garment manufacturing?",
        options: [
          "Growing cotton",
          "Making finished clothing products",
          "Producing dyes",
          "Mining textiles"
        ],
        correctAnswer: "Making finished clothing products",
        explanation: "It involves cutting, sewing, and assembling clothes."
      }],
    "Metal Fabrication": [{
        question: "What is metal fabrication?",
        options: [
          "Process of growing metals naturally",
          "Process of building metal structures and parts",
          "Process of cooking metal",
          "Process of painting wood"
        ],
        correctAnswer: "Process of building metal structures and parts",
        explanation: "Metal fabrication involves cutting, shaping, and assembling metal components."
      },
      {
        question: "What is welding?",
        options: [
          "Cutting metal using water",
          "Joining metals using heat or pressure",
          "Painting metal surfaces",
          "Cooling metal objects"
        ],
        correctAnswer: "Joining metals using heat or pressure",
        explanation: "Welding fuses metal parts together."
      },
      {
        question: "What is casting in metal fabrication?",
        options: [
          "Melting metal and pouring into a mold",
          "Cutting metal sheets",
          "Polishing metal surfaces",
          "Welding metal pipes"
        ],
        correctAnswer: "Melting metal and pouring into a mold",
        explanation: "Casting shapes metal by using molds."
      },
      {
        question: "What is machining?",
        options: [
          "Removing material to shape metal parts",
          "Heating metal only",
          "Painting metal surfaces",
          "Transporting metal goods"
        ],
        correctAnswer: "Removing material to shape metal parts",
        explanation: "Machining uses tools like lathes and mills to shape metal."
      },
      {
        question: "What is a CNC machine?",
        options: [
          "Computer-controlled machine tool",
          "Cooling system for metals",
          "Manual cutting tool",
          "Metal storage unit"
        ],
        correctAnswer: "Computer-controlled machine tool",
        explanation: "CNC machines automate precision metal cutting."
      },
      {
        question: "What is sheet metal?",
        options: [
          "Thick wooden board",
          "Thin, flat metal sheet",
          "Liquid metal",
          "Plastic material"
        ],
        correctAnswer: "Thin, flat metal sheet",
        explanation: "Sheet metal is widely used in fabrication processes."
      },
      {
        question: "What is forging?",
        options: [
          "Shaping metal using compressive force",
          "Melting metal completely",
          "Painting metal",
          "Cooling metal in water"
        ],
        correctAnswer: "Shaping metal using compressive force",
        explanation: "Forging strengthens metal by shaping it under pressure."
      },
      {
        question: "What is a lathe machine used for?",
        options: [
          "Cutting fabric",
          "Rotating and shaping metal parts",
          "Painting walls",
          "Washing metals"
        ],
        correctAnswer: "Rotating and shaping metal parts",
        explanation: "Lathes are used to shape cylindrical metal objects."
      },
      {
        question: "Why is metal fabrication important?",
        options: [
          "To produce food items",
          "To build industrial and structural components",
          "To grow crops",
          "To create software systems"
        ],
        correctAnswer: "To build industrial and structural components",
        explanation: "It is essential for construction and manufacturing industries."
      },
      {
        question: "What is surface finishing in metals?",
        options: [
          "Adding decorative fabric",
          "Improving surface quality and protection",
          "Melting metal again",
          "Breaking metal into pieces"
        ],
        correctAnswer: "Improving surface quality and protection",
        explanation: "Finishing improves appearance and corrosion resistance."
      }],
    "3D Printing/Additive Manufacturing": [{
        question: "What is 3D printing?",
        options: [
          "A process of subtracting material from a block",
          "A process of creating objects layer by layer",
          "A method of painting objects",
          "A way of melting metals only"
        ],
        correctAnswer: "A process of creating objects layer by layer",
        explanation: "3D printing builds objects by adding material layer by layer."
      },
      {
        question: "What is additive manufacturing?",
        options: [
          "Removing material from a solid block",
          "Adding material to create objects",
          "Only painting objects",
          "Only assembling pre-made parts"
        ],
        correctAnswer: "Adding material to create objects",
        explanation: "Additive manufacturing creates objects by adding layers of material."
      },
      {
        question: "Which file format is commonly used in 3D printing?",
        options: [
          "PDF",
          "STL",
          "MP3",
          "JPEG"
        ],
        correctAnswer: "STL",
        explanation: "STL files describe 3D object geometry for printing."
      },
      {
        question: "What is a 3D printer?",
        options: [
          "A device that scans paper documents",
          "A machine that creates physical objects from digital models",
          "A camera device",
          "A painting tool"
        ],
        correctAnswer: "A machine that creates physical objects from digital models",
        explanation: "3D printers build real objects from computer designs."
      },
      {
        question: "What materials are used in 3D printing?",
        options: [
          "Only paper",
          "Plastics, metals, resins",
          "Only wood",
          "Only glass"
        ],
        correctAnswer: "Plastics, metals, resins",
        explanation: "3D printing supports various materials depending on technology."
      },
      {
        question: "What is prototyping in 3D printing?",
        options: [
          "Final product manufacturing",
          "Creating a test model of a design",
          "Packaging products",
          "Selling products"
        ],
        correctAnswer: "Creating a test model of a design",
        explanation: "Prototyping helps test designs before mass production."
      },
      {
        question: "What is layer-by-layer printing called?",
        options: [
          "Subtractive manufacturing",
          "Additive manufacturing",
          "Injection molding",
          "Casting"
        ],
        correctAnswer: "Additive manufacturing",
        explanation: "Objects are built layer by layer in additive manufacturing."
      },
      {
        question: "What is rapid prototyping?",
        options: [
          "Slow manual crafting",
          "Quick creation of models using 3D printing",
          "Mass production only",
          "Metal welding"
        ],
        correctAnswer: "Quick creation of models using 3D printing",
        explanation: "It speeds up product design and testing."
      },
      {
        question: "Where is 3D printing used?",
        options: [
          "Only in schools",
          "Healthcare, aerospace, manufacturing",
          "Only in farming",
          "Only in banking"
        ],
        correctAnswer: "Healthcare, aerospace, manufacturing",
        explanation: "3D printing is widely used in multiple industries."
      },
      {
        question: "Why is 3D printing important?",
        options: [
          "It increases waste",
          "It allows fast and cost-effective production",
          "It slows production",
          "It removes design flexibility"
        ],
        correctAnswer: "It allows fast and cost-effective production",
        explanation: "It reduces cost and speeds up product development."
      }],
    "Machinery & Equipment": [{
        question: "What is industrial machinery?",
        options: [
          "Machines used for entertainment only",
          "Machines used in production and manufacturing processes",
          "Kitchen appliances only",
          "Software programs"
        ],
        correctAnswer: "Machines used in production and manufacturing processes",
        explanation: "Industrial machinery is used to manufacture goods at scale."
      },
      {
        question: "What is preventive maintenance?",
        options: [
          "Fixing machines after they break",
          "Regular maintenance to avoid breakdowns",
          "Ignoring machine issues",
          "Replacing machines daily"
        ],
        correctAnswer: "Regular maintenance to avoid breakdowns",
        explanation: "It helps reduce unexpected machine failures."
      },
      {
        question: "What is a conveyor system used for?",
        options: [
          "Cooking food",
          "Transporting materials within a factory",
          "Cutting metals",
          "Printing documents"
        ],
        correctAnswer: "Transporting materials within a factory",
        explanation: "Conveyors move items efficiently in production lines."
      },
      {
        question: "What is automation in machinery?",
        options: [
          "Manual machine control",
          "Using machines with minimal human intervention",
          "Painting machines",
          "Disassembling machines"
        ],
        correctAnswer: "Using machines with minimal human intervention",
        explanation: "Automation increases efficiency and reduces labor."
      },
      {
        question: "What is a production line?",
        options: [
          "A line for customer service",
          "A sequence of machines for manufacturing products",
          "A storage unit",
          "A transport road"
        ],
        correctAnswer: "A sequence of machines for manufacturing products",
        explanation: "Production lines streamline manufacturing processes."
      },
      {
        question: "What is machine calibration?",
        options: [
          "Destroying machine settings",
          "Adjusting machines for accurate performance",
          "Painting machines",
          "Moving machines"
        ],
        correctAnswer: "Adjusting machines for accurate performance",
        explanation: "Calibration ensures machines produce correct outputs."
      },
      {
        question: "What is a hydraulic system?",
        options: [
          "System using water for communication",
          "System using liquid pressure to perform work",
          "Electrical software system",
          "Air cooling system"
        ],
        correctAnswer: "System using liquid pressure to perform work",
        explanation: "Hydraulics are used in heavy machinery for force generation."
      },
      {
        question: "What is a gear system?",
        options: [
          "A system of interlocking wheels to transmit motion",
          "A software update system",
          "A cooling system",
          "A food processing unit"
        ],
        correctAnswer: "A system of interlocking wheels to transmit motion",
        explanation: "Gears transfer motion and torque in machines."
      },
      {
        question: "Why is lubrication important in machines?",
        options: [
          "To increase noise",
          "To reduce friction and wear",
          "To damage parts",
          "To slow machines"
        ],
        correctAnswer: "To reduce friction and wear",
        explanation: "Lubrication improves machine life and efficiency."
      },
      {
        question: "What is CNC machinery?",
        options: [
          "Computer-controlled precision machines",
          "Cooling nuclear components",
          "Manual hand tools",
          "Cleaning devices"
        ],
        correctAnswer: "Computer-controlled precision machines",
        explanation: "CNC machines automate precise manufacturing tasks."
      }],
    "Packaging": [{
        question: "What is packaging?",
        options: [
          "Destroying products for transport",
          "Wrapping or enclosing products for protection and sale",
          "Manufacturing raw materials",
          "Designing machines"
        ],
        correctAnswer: "Wrapping or enclosing products for protection and sale",
        explanation: "Packaging protects goods and makes them ready for distribution."
      },
      {
        question: "Why is packaging important?",
        options: [
          "It increases product weight only",
          "It protects products and provides information",
          "It reduces product quality",
          "It slows down production"
        ],
        correctAnswer: "It protects products and provides information",
        explanation: "Packaging ensures safety and communicates product details."
      },
      {
        question: "What is primary packaging?",
        options: [
          "Packaging used for shipping cartons only",
          "Packaging that directly contains the product",
          "Outer warehouse storage",
          "Factory machinery packing"
        ],
        correctAnswer: "Packaging that directly contains the product",
        explanation: "Primary packaging is the first layer around the product."
      },
      {
        question: "What is secondary packaging?",
        options: [
          "Inner wrapping of product",
          "Grouping of primary packages",
          "Machine packaging",
          "Liquid packaging only"
        ],
        correctAnswer: "Grouping of primary packages",
        explanation: "Secondary packaging groups multiple items together."
      },
      {
        question: "What is sustainable packaging?",
        options: [
          "Packaging that cannot be reused",
          "Eco-friendly packaging made from recyclable materials",
          "Plastic-only packaging",
          "Packaging that increases waste"
        ],
        correctAnswer: "Eco-friendly packaging made from recyclable materials",
        explanation: "Sustainable packaging reduces environmental impact."
      },
      {
        question: "What is labeling in packaging?",
        options: [
          "Destroying packaging materials",
          "Providing information on product packaging",
          "Manufacturing raw goods",
          "Transporting machines"
        ],
        correctAnswer: "Providing information on product packaging",
        explanation: "Labels include product details, usage, and warnings."
      },
      {
        question: "What is vacuum packaging?",
        options: [
          "Packaging with air trapped inside",
          "Removing air from packaging to preserve food",
          "Using only paper boxes",
          "Heating products for packaging"
        ],
        correctAnswer: "Removing air from packaging to preserve food",
        explanation: "Vacuum packaging extends shelf life by reducing oxygen."
      },
      {
        question: "What is blister packaging?",
        options: [
          "Packaging using liquid containers",
          "Plastic packaging with a cavity for products",
          "Metal-only packaging",
          "Fabric packaging"
        ],
        correctAnswer: "Plastic packaging with a cavity for products",
        explanation: "Common in pills and small consumer goods."
      },
      {
        question: "What is automated packaging?",
        options: [
          "Manual wrapping only",
          "Using machines to package products",
          "Transporting goods manually",
          "Designing product logos"
        ],
        correctAnswer: "Using machines to package products",
        explanation: "Automation increases speed and efficiency in packaging."
      },
      {
        question: "Why is packaging design important?",
        options: [
          "It only increases cost",
          "It attracts customers and protects products",
          "It reduces product safety",
          "It slows sales"
        ],
        correctAnswer: "It attracts customers and protects products",
        explanation: "Good design improves marketing and usability."
      }],
    "Plastics & Rubber": [{
        question: "What are plastics made from?",
        options: [
          "Wood fibers only",
          "Polymers derived from petrochemicals",
          "Metal ores",
          "Glass materials"
        ],
        correctAnswer: "Polymers derived from petrochemicals",
        explanation: "Most plastics are made from petroleum-based polymers."
      },
      {
        question: "What is thermoplastic?",
        options: [
          "Plastic that cannot be reheated",
          "Plastic that can be melted and reshaped multiple times",
          "Metal-based plastic",
          "Rubber that hardens permanently"
        ],
        correctAnswer: "Plastic that can be melted and reshaped multiple times",
        explanation: "Thermoplastics can be reused by melting."
      },
      {
        question: "What is thermosetting plastic?",
        options: [
          "Plastic that can be remelted repeatedly",
          "Plastic that hardens permanently after heating",
          "Liquid plastic only",
          "Natural rubber type"
        ],
        correctAnswer: "Plastic that hardens permanently after heating",
        explanation: "Thermosets cannot be reshaped after setting."
      },
      {
        question: "What is rubber?",
        options: [
          "A type of metal",
          "Elastic material used in tires and seals",
          "A type of glass",
          "A ceramic compound"
        ],
        correctAnswer: "Elastic material used in tires and seals",
        explanation: "Rubber is known for its flexibility and elasticity."
      },
      {
        question: "What is vulcanization?",
        options: [
          "Cooling rubber to freeze it",
          "Strengthening rubber using sulfur and heat",
          "Breaking rubber into pieces",
          "Painting rubber products"
        ],
        correctAnswer: "Strengthening rubber using sulfur and heat",
        explanation: "Vulcanization improves rubber durability and elasticity."
      },
      {
        question: "What is injection molding?",
        options: [
          "Cutting plastic sheets manually",
          "Injecting molten plastic into a mold",
          "Freezing plastic shapes",
          "Painting plastic surfaces"
        ],
        correctAnswer: "Injecting molten plastic into a mold",
        explanation: "Injection molding is used for mass-producing plastic parts."
      },
      {
        question: "What is biodegradable plastic?",
        options: [
          "Plastic that lasts forever",
          "Plastic that decomposes naturally over time",
          "Metal-reinforced plastic",
          "Glass-based plastic"
        ],
        correctAnswer: "Plastic that decomposes naturally over time",
        explanation: "Biodegradable plastics reduce environmental pollution."
      },
      {
        question: "Where is rubber commonly used?",
        options: [
          "Only in construction",
          "Tires, footwear, seals, and industrial products",
          "Only in electronics",
          "Only in food packaging"
        ],
        correctAnswer: "Tires, footwear, seals, and industrial products",
        explanation: "Rubber is widely used due to its elasticity."
      },
      {
        question: "What is plastic recycling?",
        options: [
          "Burning plastic waste",
          "Reprocessing used plastic into new products",
          "Throwing plastic in oceans",
          "Melting metal scraps"
        ],
        correctAnswer: "Reprocessing used plastic into new products",
        explanation: "Recycling helps reduce environmental pollution."
      },
      {
        question: "Why is plastic widely used?",
        options: [
          "It is always biodegradable",
          "It is durable, lightweight, and versatile",
          "It is expensive and rare",
          "It is only used in medicine"
        ],
        correctAnswer: "It is durable, lightweight, and versatile",
        explanation: "Plastic’s properties make it useful in many industries."
      }]
  },
  retail:{
 "E-commerce Platforms": [
    {
      question: "E-commerce platforms primarily provide:",
      options: ["Online marketplaces for buying and selling", "Mining operations", "Factory production", "Farming services"],
      correctAnswer: "Online marketplaces for buying and selling",
      explanation: "Platforms like Amazon and Shopify facilitate digital transactions."
    },
    {
      question: "A key feature of e-commerce platforms is:",
      options: ["Shopping cart and checkout systems", "Mining equipment", "Factory machines", "Farming tools"],
      correctAnswer: "Shopping cart and checkout systems",
      explanation: "These allow users to select, pay, and track purchases online."
    },
    {
      question: "Payment gateways enable:",
      options: ["Secure online transactions", "Mining payments", "Factory accounting", "Farm payments"],
      correctAnswer: "Secure online transactions",
      explanation: "They process payments safely between buyers and sellers."
    },
    {
      question: "E-commerce platforms use:",
      options: ["Product catalogs and inventory management", "Mining logs", "Factory tools", "Farm tools"],
      correctAnswer: "Product catalogs and inventory management",
      explanation: "Organizes products for customers and tracks stock levels."
    },
    {
      question: "Customer reviews help:",
      options: ["Guide purchasing decisions", "Mining decisions", "Factory output", "Farm yield"],
      correctAnswer: "Guide purchasing decisions",
      explanation: "Reviews provide social proof and improve trust."
    },
    {
      question: "E-commerce platforms benefit businesses by:",
      options: ["Expanding reach and sales online", "Mining operations", "Factory output", "Farming sales"],
      correctAnswer: "Expanding reach and sales online",
      explanation: "Businesses can sell to a global audience digitally."
    },
    {
      question: "Mobile apps for e-commerce improve:",
      options: ["Convenience and accessibility for users", "Mining safety", "Factory management", "Farm management"],
      correctAnswer: "Convenience and accessibility for users",
      explanation: "Apps allow shopping anytime, anywhere."
    },
    {
      question: "Inventory tracking ensures:",
      options: ["Products are in stock and fulfillable", "Mining output", "Factory production", "Crop yield"],
      correctAnswer: "Products are in stock and fulfillable",
      explanation: "Prevents overselling and improves customer experience."
    },
    {
      question: "Personalization in e-commerce platforms:",
      options: ["Recommends products based on behavior", "Mining personalization", "Factory automation", "Farm automation"],
      correctAnswer: "Recommends products based on behavior",
      explanation: "Enhances user experience and increases sales."
    },
    {
      question: "E-commerce analytics help businesses to:",
      options: ["Make data-driven decisions", "Mine data", "Manage factories", "Plan crops"],
      correctAnswer: "Make data-driven decisions",
      explanation: "Insights from user behavior improve sales and marketing."
    }
  ],

  "Retail Technology": [
    {
      question: "Retail technology includes:",
      options: ["Point-of-sale systems, inventory software, and analytics", "Mining machines", "Factory software", "Farm software"],
      correctAnswer: "Point-of-sale systems, inventory software, and analytics",
      explanation: "Technology improves efficiency and customer experience in stores."
    },
    {
      question: "Self-checkout kiosks are used to:",
      options: ["Reduce wait times and improve convenience", "Mine minerals", "Run factories", "Harvest crops"],
      correctAnswer: "Reduce wait times and improve convenience",
      explanation: "Customers scan and pay without cashier assistance."
    },
    {
      question: "Retail analytics help businesses to:",
      options: ["Understand customer behavior", "Mine data", "Factory operations", "Farm data"],
      correctAnswer: "Understand customer behavior",
      explanation: "Insights improve sales, promotions, and inventory management."
    },
    {
      question: "RFID technology is used for:",
      options: ["Tracking inventory efficiently", "Mining safety", "Factory output", "Farm logistics"],
      correctAnswer: "Tracking inventory efficiently",
      explanation: "RFID tags improve stock accuracy and reduce losses."
    },
    {
      question: "Omnichannel retail integrates:",
      options: ["Online and offline shopping experiences", "Mining channels", "Factory processes", "Farm markets"],
      correctAnswer: "Online and offline shopping experiences",
      explanation: "Seamless experience across web, mobile, and stores."
    },
    {
      question: "Customer relationship management (CRM) systems:",
      options: ["Help track and manage customer interactions", "Mine customer data", "Manage factories", "Track farms"],
      correctAnswer: "Help track and manage customer interactions",
      explanation: "CRM tools improve engagement and loyalty."
    },
    {
      question: "Digital signage in retail stores:",
      options: ["Displays promotions and information", "Mining signs", "Factory signs", "Farm signs"],
      correctAnswer: "Displays promotions and information",
      explanation: "Enhances in-store marketing and communication."
    },
    {
      question: "Retail automation can include:",
      options: ["Inventory management and checkout processes", "Mining automation", "Factory automation", "Farm automation"],
      correctAnswer: "Inventory management and checkout processes",
      explanation: "Automation reduces manual work and improves accuracy."
    },
    {
      question: "Electronic shelf labels allow:",
      options: ["Dynamic pricing and updates", "Mine labeling", "Factory labeling", "Farm labeling"],
      correctAnswer: "Dynamic pricing and updates",
      explanation: "Retailers can update prices digitally in real-time."
    },
    {
      question: "Beacon technology in stores helps:",
      options: ["Send location-based offers to customers", "Mine signals", "Factory signals", "Farm signals"],
      correctAnswer: "Send location-based offers to customers",
      explanation: "Enhances marketing by targeting shoppers in-store."
    }
  ],

  "Fashion & Apparel": [
    {
      question: "Fashion retail focuses on:",
      options: ["Clothing, footwear, and accessories", "Mining products", "Factory equipment", "Farm produce"],
      correctAnswer: "Clothing, footwear, and accessories",
      explanation: "Fashion retailers sell apparel and style products."
    },
    {
      question: "Fast fashion emphasizes:",
      options: ["Quick production of trendy items", "Mining speed", "Factory speed", "Farm speed"],
      correctAnswer: "Quick production of trendy items",
      explanation: "Fast fashion quickly responds to current trends."
    },
    {
      question: "Branding in fashion retail is important because:",
      options: ["It differentiates products and builds loyalty", "Mining branding", "Factory branding", "Farm branding"],
      correctAnswer: "It differentiates products and builds loyalty",
      explanation: "Strong branding attracts customers and maintains trust."
    },
    {
      question: "Fashion retailers use seasonal collections to:",
      options: ["Update styles regularly", "Mine resources seasonally", "Operate factories seasonally", "Farm crops seasonally"],
      correctAnswer: "Update styles regularly",
      explanation: "Keeps products relevant and attractive."
    },
    {
      question: "Inventory management ensures:",
      options: ["Popular items are in stock", "Mining inventory", "Factory inventory", "Farm inventory"],
      correctAnswer: "Popular items are in stock",
      explanation: "Reduces stockouts and lost sales."
    },
    {
      question: "E-commerce for fashion allows:",
      options: ["Shopping anytime, anywhere", "Mining online", "Factory online", "Farm online"],
      correctAnswer: "Shopping anytime, anywhere",
      explanation: "Convenience increases sales and reach."
    },
    {
      question: "Sustainable fashion focuses on:",
      options: ["Eco-friendly production and materials", "Mining sustainability", "Factory sustainability", "Farm sustainability"],
      correctAnswer: "Eco-friendly production and materials",
      explanation: "Reduces environmental impact."
    },
    {
      question: "Customer reviews help fashion retailers to:",
      options: ["Improve products and styles", "Mine reviews", "Factory reviews", "Farm reviews"],
      correctAnswer: "Improve products and styles",
      explanation: "Feedback guides design and inventory decisions."
    },
    {
      question: "Return policies affect:",
      options: ["Customer satisfaction and trust", "Mining returns", "Factory returns", "Farm returns"],
      correctAnswer: "Customer satisfaction and trust",
      explanation: "Flexible policies encourage purchases and reduce risk."
    },
    {
      question: "Visual merchandising is used to:",
      options: ["Display products appealingly in stores", "Mine visuals", "Factory displays", "Farm displays"],
      correctAnswer: "Display products appealingly in stores",
      explanation: "Enhances customer experience and drives sales."
    }
  ],

  "Consumer Electronics": [
    {
      question: "Consumer electronics retail sells:",
      options: ["Devices like smartphones, TVs, and laptops", "Mining equipment", "Factory machinery", "Farm equipment"],
      correctAnswer: "Devices like smartphones, TVs, and laptops",
      explanation: "Focuses on tech products for personal or home use."
    },
    {
      question: "Retailers may offer:",
      options: ["Warranty and after-sales support", "Mining support", "Factory support", "Farm support"],
      correctAnswer: "Warranty and after-sales support",
      explanation: "Ensures customers are satisfied and devices are maintained."
    },
    {
      question: "E-commerce electronics sales provide:",
      options: ["Convenience and product variety", "Mining convenience", "Factory convenience", "Farm convenience"],
      correctAnswer: "Convenience and product variety",
      explanation: "Customers can compare products and purchase easily online."
    },
    {
      question: "Bundling products in electronics retail:",
      options: ["Encourages more purchases", "Mining bundles", "Factory bundles", "Farm bundles"],
      correctAnswer: "Encourages more purchases",
      explanation: "Combining items increases perceived value."
    },
    {
      question: "Consumer electronics retailers track:",
      options: ["Inventory and demand trends", "Mining output", "Factory output", "Farm output"],
      correctAnswer: "Inventory and demand trends",
      explanation: "Helps stock popular items and reduce overstock."
    },
    {
      question: "Promotions and discounts:",
      options: ["Boost sales and attract customers", "Mining sales", "Factory sales", "Farm sales"],
      correctAnswer: "Boost sales and attract customers",
      explanation: "Encourages purchases during specific periods."
    },
    {
      question: "Retailers provide product demos to:",
      options: ["Help customers understand features", "Mine demos", "Factory demos", "Farm demos"],
      correctAnswer: "Help customers understand features",
      explanation: "Demonstrations influence buying decisions."
    },
    {
      question: "Customer feedback helps:",
      options: ["Improve products and services", "Mining feedback", "Factory feedback", "Farm feedback"],
      correctAnswer: "Improve products and services",
      explanation: "Guides future offerings and support."
    },
    {
      question: "Price comparison tools in electronics retail:",
      options: ["Help customers find the best deals", "Mine prices", "Factory prices", "Farm prices"],
      correctAnswer: "Help customers find the best deals",
      explanation: "Transparency builds trust and encourages purchases."
    },
    {
      question: "Omnichannel electronics retail:",
      options: ["Integrates online and offline shopping experiences", "Mining channels", "Factory channels", "Farm channels"],
      correctAnswer: "Integrates online and offline shopping experiences",
      explanation: "Provides convenience and flexibility for consumers."
    }
  ],
  "Grocery & Food Retail": [
    {
      question: "Grocery retailers sell:",
      options: ["Food and household items", "Mining equipment", "Factory tools", "Farming machinery"],
      correctAnswer: "Food and household items",
      explanation: "They provide everyday essentials to consumers."
    },
    {
      question: "Supermarkets often use:",
      options: ["Inventory management systems", "Mining logs", "Factory logs", "Farm logs"],
      correctAnswer: "Inventory management systems",
      explanation: "Ensures products are stocked and tracked efficiently."
    },
    {
      question: "Perishable goods require:",
      options: ["Proper refrigeration and storage", "Mining storage", "Factory storage", "Farm storage"],
      correctAnswer: "Proper refrigeration and storage",
      explanation: "Maintains freshness and prevents spoilage."
    },
    {
      question: "Grocery promotions include:",
      options: ["Discounts, loyalty programs, and bundle deals", "Mining promotions", "Factory promotions", "Farm promotions"],
      correctAnswer: "Discounts, loyalty programs, and bundle deals",
      explanation: "Increases customer purchases and retention."
    },
    {
      question: "Online grocery platforms:",
      options: ["Allow home delivery and pickup options", "Mine groceries", "Factory groceries", "Farm groceries"],
      correctAnswer: "Allow home delivery and pickup options",
      explanation: "Enhances convenience for customers."
    },
    {
      question: "Seasonal products are stocked based on:",
      options: ["Demand patterns and holidays", "Mining patterns", "Factory patterns", "Farm seasons"],
      correctAnswer: "Demand patterns and holidays",
      explanation: "Aligns supply with customer expectations."
    },
    {
      question: "Quality control ensures:",
      options: ["Safe and fresh products", "Mining quality", "Factory quality", "Farm quality"],
      correctAnswer: "Safe and fresh products",
      explanation: "Protects consumers and maintains trust."
    },
    {
      question: "Retailers track:",
      options: ["Sales and inventory trends", "Mining output", "Factory output", "Farm output"],
      correctAnswer: "Sales and inventory trends",
      explanation: "Helps optimize stock and pricing strategies."
    },
    {
      question: "Grocery delivery services improve:",
      options: ["Convenience for busy customers", "Mining logistics", "Factory logistics", "Farm logistics"],
      correctAnswer: "Convenience for busy customers",
      explanation: "Provides flexibility and saves time."
    },
    {
      question: "Sustainability efforts in grocery retail include:",
      options: ["Reducing packaging and food waste", "Mining sustainability", "Factory sustainability", "Farm sustainability"],
      correctAnswer: "Reducing packaging and food waste",
      explanation: "Supports eco-friendly practices and reduces costs."
    }
  ],

  "Luxury Goods": [
    {
      question: "Luxury retailers focus on:",
      options: ["High-end products with premium pricing", "Mining luxury", "Factory luxury", "Farm luxury"],
      correctAnswer: "High-end products with premium pricing",
      explanation: "Products often include fashion, watches, jewelry, and accessories."
    },
    {
      question: "Brand reputation is critical because:",
      options: ["It influences customer trust and desirability", "Mining reputation", "Factory reputation", "Farm reputation"],
      correctAnswer: "It influences customer trust and desirability",
      explanation: "Strong branding maintains exclusivity and loyalty."
    },
    {
      question: "Customer experience in luxury retail:",
      options: ["Is personalized and high-quality", "Mining experience", "Factory experience", "Farm experience"],
      correctAnswer: "Is personalized and high-quality",
      explanation: "Enhances perception of value and exclusivity."
    },
    {
      question: "Limited editions create:",
      options: ["Scarcity and higher demand", "Mining editions", "Factory editions", "Farm editions"],
      correctAnswer: "Scarcity and higher demand",
      explanation: "Exclusive products increase desirability."
    },
    {
      question: "Luxury retailers often provide:",
      options: ["Concierge and premium services", "Mining services", "Factory services", "Farm services"],
      correctAnswer: "Concierge and premium services",
      explanation: "Enhances customer loyalty and satisfaction."
    },
    {
      question: "Authenticity verification:",
      options: ["Ensures genuine luxury products", "Mining verification", "Factory verification", "Farm verification"],
      correctAnswer: "Ensures genuine luxury products",
      explanation: "Prevents counterfeits and protects brand integrity."
    },
    {
      question: "Retail locations for luxury brands are:",
      options: ["High-end neighborhoods or flagship stores", "Mining locations", "Factory locations", "Farm locations"],
      correctAnswer: "High-end neighborhoods or flagship stores",
      explanation: "Attracts target customers and reinforces brand image."
    },
    {
      question: "Marketing emphasizes:",
      options: ["Exclusivity, quality, and lifestyle", "Mining marketing", "Factory marketing", "Farm marketing"],
      correctAnswer: "Exclusivity, quality, and lifestyle",
      explanation: "Communicates brand value and differentiates products."
    },
    {
      question: "Online luxury retail requires:",
      options: ["Premium visuals and secure checkout", "Mining online", "Factory online", "Farm online"],
      correctAnswer: "Premium visuals and secure checkout",
      explanation: "Maintains brand image and customer trust."
    },
    {
      question: "Customer loyalty programs:",
      options: ["Reward repeat purchases and engagement", "Mining loyalty", "Factory loyalty", "Farm loyalty"],
      correctAnswer: "Reward repeat purchases and engagement",
      explanation: "Encourages long-term relationships with clients."
    }
  ],

  "Sports & Recreation": [
    {
      question: "Sports retail sells:",
      options: ["Equipment, apparel, and footwear for activities", "Mining equipment", "Factory equipment", "Farm equipment"],
      correctAnswer: "Equipment, apparel, and footwear for activities",
      explanation: "Products cater to athletes and enthusiasts."
    },
    {
      question: "Retailers track:",
      options: ["Trends in sports and fitness products", "Mining trends", "Factory trends", "Farm trends"],
      correctAnswer: "Trends in sports and fitness products",
      explanation: "Ensures inventory meets customer demand."
    },
    {
      question: "Seasonal demand affects:",
      options: ["Outdoor and seasonal gear sales", "Mining seasons", "Factory seasons", "Farm seasons"],
      correctAnswer: "Outdoor and seasonal gear sales",
      explanation: "Retailers adjust stock for holidays and seasons."
    },
    {
      question: "Brand partnerships with athletes:",
      options: ["Increase credibility and sales", "Mining partnerships", "Factory partnerships", "Farm partnerships"],
      correctAnswer: "Increase credibility and sales",
      explanation: "Endorsements attract fans and boost visibility."
    },
    {
      question: "E-commerce for sports products:",
      options: ["Expands reach to online customers", "Mine online", "Factory online", "Farm online"],
      correctAnswer: "Expands reach to online customers",
      explanation: "Enables global sales and convenience."
    },
    {
      question: "Loyalty programs reward:",
      options: ["Frequent shoppers and members", "Mining loyalty", "Factory loyalty", "Farm loyalty"],
      correctAnswer: "Frequent shoppers and members",
      explanation: "Encourages repeat business and engagement."
    },
    {
      question: "In-store demos help:",
      options: ["Showcase products to customers", "Mine demos", "Factory demos", "Farm demos"],
      correctAnswer: "Showcase products to customers",
      explanation: "Improves understanding and purchase likelihood."
    },
    {
      question: "Product quality ensures:",
      options: ["Safety and performance", "Mining quality", "Factory quality", "Farm quality"],
      correctAnswer: "Safety and performance",
      explanation: "Critical for sports gear reliability."
    },
    {
      question: "Promotions include:",
      options: ["Discounts, bundles, and seasonal offers", "Mining promotions", "Factory promotions", "Farm promotions"],
      correctAnswer: "Discounts, bundles, and seasonal offers",
      explanation: "Drives sales and attracts customers."
    },
    {
      question: "Customer feedback helps:",
      options: ["Improve product selection and service", "Mining feedback", "Factory feedback", "Farm feedback"],
      correctAnswer: "Improve product selection and service",
      explanation: "Guides inventory and marketing decisions."
    }
  ],

  "Home & Garden": [
    {
      question: "Home & garden retail includes:",
      options: ["Furniture, decor, and gardening supplies", "Mining equipment", "Factory tools", "Farm tools"],
      correctAnswer: "Furniture, decor, and gardening supplies",
      explanation: "Products enhance homes and outdoor spaces."
    },
    {
      question: "Seasonal items include:",
      options: ["Plants, decor, and outdoor products", "Mining seasons", "Factory seasons", "Farm seasons"],
      correctAnswer: "Plants, decor, and outdoor products",
      explanation: "Stock aligns with holidays and gardening seasons."
    },
    {
      question: "Retailers use:",
      options: ["Product displays and in-store signage", "Mining displays", "Factory signage", "Farm signage"],
      correctAnswer: "Product displays and in-store signage",
      explanation: "Attracts attention and promotes purchases."
    },
    {
      question: "Online catalogs help:",
      options: ["Expand product reach", "Mining catalogs", "Factory catalogs", "Farm catalogs"],
      correctAnswer: "Expand product reach",
      explanation: "Customers browse and order from home."
    },
    {
      question: "Loyalty programs reward:",
      options: ["Frequent purchases", "Mining loyalty", "Factory loyalty", "Farm loyalty"],
      correctAnswer: "Frequent purchases",
      explanation: "Encourages repeat business."
    },
    {
      question: "DIY workshops promote:",
      options: ["Customer engagement and product use", "Mining workshops", "Factory workshops", "Farm workshops"],
      correctAnswer: "Customer engagement and product use",
      explanation: "Enhances skills and interest in products."
    },
    {
      question: "Sustainable products focus on:",
      options: ["Eco-friendly materials and processes", "Mining sustainability", "Factory sustainability", "Farm sustainability"],
      correctAnswer: "Eco-friendly materials and processes",
      explanation: "Supports environmental responsibility."
    },
    {
      question: "Customer reviews guide:",
      options: ["Product improvement and purchase decisions", "Mining feedback", "Factory feedback", "Farm feedback"],
      correctAnswer: "Product improvement and purchase decisions",
      explanation: "Feedback informs stock and marketing."
    },
    {
      question: "Inventory management ensures:",
      options: ["Availability of popular items", "Mining inventory", "Factory inventory", "Farm inventory"],
      correctAnswer: "Availability of popular items",
      explanation: "Prevents stockouts and lost sales."
    },
    {
      question: "Home & garden promotions include:",
      options: ["Seasonal discounts and bundles", "Mining promotions", "Factory promotions", "Farm promotions"],
      correctAnswer: "Seasonal discounts and bundles",
      explanation: "Attracts customers during peak seasons."
    }
  ],

  "Beauty & Personal Care": [
    {
      question: "Beauty retail includes:",
      options: ["Cosmetics, skincare, and personal care products", "Mining cosmetics", "Factory cosmetics", "Farm cosmetics"],
      correctAnswer: "Cosmetics, skincare, and personal care products",
      explanation: "Focuses on health, beauty, and grooming products."
    },
    {
      question: "Product testing ensures:",
      options: ["Safety and effectiveness", "Mining tests", "Factory tests", "Farm tests"],
      correctAnswer: "Safety and effectiveness",
      explanation: "Protects consumers and builds trust."
    },
    {
      question: "Loyalty programs reward:",
      options: ["Frequent purchases", "Mining loyalty", "Factory loyalty", "Farm loyalty"],
      correctAnswer: "Frequent purchases",
      explanation: "Encourages repeat business."
    },
    {
      question: "Retailers offer:",
      options: ["Makeover and sampling services", "Mining services", "Factory services", "Farm services"],
      correctAnswer: "Makeover and sampling services",
      explanation: "Enhances customer experience and product trial."
    },
    {
      question: "Online beauty platforms provide:",
      options: ["Convenient browsing and purchase", "Mining online", "Factory online", "Farm online"],
      correctAnswer: "Convenient browsing and purchase",
      explanation: "Expands accessibility to a wider audience."
    },
    {
      question: "Seasonal collections include:",
      options: ["New shades, scents, and product launches", "Mining collections", "Factory collections", "Farm collections"],
      correctAnswer: "New shades, scents, and product launches",
      explanation: "Keeps offerings fresh and trendy."
    },
    {
      question: "Influencer marketing:",
      options: ["Promotes products to targeted audiences", "Mining marketing", "Factory marketing", "Farm marketing"],
      correctAnswer: "Promotes products to targeted audiences",
      explanation: "Drives awareness and sales via social influence."
    },
    {
      question: "Inventory tracking ensures:",
      options: ["Products are in stock for sale", "Mining inventory", "Factory inventory", "Farm inventory"],
      correctAnswer: "Products are in stock for sale",
      explanation: "Prevents out-of-stock situations."
    },
    {
      question: "Customer feedback helps:",
      options: ["Improve formulas and offerings", "Mining feedback", "Factory feedback", "Farm feedback"],
      correctAnswer: "Improve formulas and offerings",
      explanation: "Feedback informs product development."
    },
    {
      question: "Sustainability efforts include:",
      options: ["Eco-friendly packaging and cruelty-free products", "Mining sustainability", "Factory sustainability", "Farm sustainability"],
      correctAnswer: "Eco-friendly packaging and cruelty-free products",
      explanation: "Supports ethical and environmental responsibility."
    }
  ],

  "Pet Products": [
    {
      question: "Pet retail focuses on:",
      options: ["Food, toys, and care products for pets", "Mining pet products", "Factory pet products", "Farm pet products"],
      correctAnswer: "Food, toys, and care products for pets",
      explanation: "Provides essentials for companion animals."
    },
    {
      question: "Specialty stores may sell:",
      options: ["Breed-specific or premium items", "Mining products", "Factory products", "Farm products"],
      correctAnswer: "Breed-specific or premium items",
      explanation: "Cater to particular pet needs or preferences."
    },
    {
      question: "Pet product e-commerce allows:",
      options: ["Convenient home delivery", "Mining delivery", "Factory delivery", "Farm delivery"],
      correctAnswer: "Convenient home delivery",
      explanation: "Enhances customer convenience."
    },
    {
      question: "Customer loyalty programs:",
      options: ["Reward repeat purchases and engagement", "Mining loyalty", "Factory loyalty", "Farm loyalty"],
      correctAnswer: "Reward repeat purchases and engagement",
      explanation: "Encourages ongoing customer relationships."
    },
    {
      question: "Pet product promotions include:",
      options: ["Bundles, discounts, and seasonal offers", "Mining promotions", "Factory promotions", "Farm promotions"],
      correctAnswer: "Bundles, discounts, and seasonal offers",
      explanation: "Drives sales and attracts buyers."
    },
    {
      question: "Quality control ensures:",
      options: ["Safe and suitable products for pets", "Mining quality", "Factory quality", "Farm quality"],
      correctAnswer: "Safe and suitable products for pets",
      explanation: "Prevents harm and maintains trust."
    },
    {
      question: "Retailers track:",
      options: ["Inventory and sales trends", "Mining output", "Factory output", "Farm output"],
      correctAnswer: "Inventory and sales trends",
      explanation: "Helps manage stock effectively."
    },
    {
      question: "Pet care workshops help:",
      options: ["Educate owners on proper care", "Mine workshops", "Factory workshops", "Farm workshops"],
      correctAnswer: "Educate owners on proper care",
      explanation: "Enhances knowledge and responsible pet ownership."
    },
    {
      question: "Subscription services offer:",
      options: ["Regular delivery of pet supplies", "Mining subscriptions", "Factory subscriptions", "Farm subscriptions"],
      correctAnswer: "Regular delivery of pet supplies",
      explanation: "Provides convenience and recurring sales."
    },
    {
      question: "Eco-friendly pet products:",
      options: ["Reduce environmental impact", "Mining eco-products", "Factory eco-products", "Farm eco-products"],
      correctAnswer: "Reduce environmental impact",
      explanation: "Supports sustainable pet care practices."
    }
  ],

  "Specialty Retail": [
    {
      question: "Specialty retail focuses on:",
      options: ["Niche products and unique categories", "Mining specialty", "Factory specialty", "Farm specialty"],
      correctAnswer: "Niche products and unique categories",
      explanation: "Targets specific customer interests or needs."
    },
    {
      question: "Customer experience is important because:",
      options: ["It drives loyalty and repeat purchases", "Mining experience", "Factory experience", "Farm experience"],
      correctAnswer: "It drives loyalty and repeat purchases",
      explanation: "Engaging experiences enhance brand value."
    },
    {
      question: "Retailers may offer:",
      options: ["Expert advice and personalized service", "Mining advice", "Factory advice", "Farm advice"],
      correctAnswer: "Expert advice and personalized service",
      explanation: "Supports informed buying decisions."
    },
    {
      question: "Inventory management ensures:",
      options: ["Availability of niche products", "Mining inventory", "Factory inventory", "Farm inventory"],
      correctAnswer: "Availability of niche products",
      explanation: "Prevents lost sales and disappointed customers."
    },
    {
      question: "Online presence helps:",
      options: ["Reach specialized audiences globally", "Mining online", "Factory online", "Farm online"],
      correctAnswer: "Reach specialized audiences globally",
      explanation: "Expands customer base beyond local markets."
    },
    {
      question: "Marketing focuses on:",
      options: ["Highlighting unique features and expertise", "Mining marketing", "Factory marketing", "Farm marketing"],
      correctAnswer: "Highlighting unique features and expertise",
      explanation: "Differentiates products from mass-market offerings."
    },
    {
      question: "Events and workshops:",
      options: ["Engage and educate customers", "Mine events", "Factory events", "Farm events"],
      correctAnswer: "Engage and educate customers",
      explanation: "Builds community and brand loyalty."
    },
    {
      question: "Customer feedback helps:",
      options: ["Improve product selection and service", "Mining feedback", "Factory feedback", "Farm feedback"],
      correctAnswer: "Improve product selection and service",
      explanation: "Guides inventory and marketing decisions."
    },
    {
      question: "Loyalty programs reward:",
      options: ["Repeat customers", "Mining loyalty", "Factory loyalty", "Farm loyalty"],
      correctAnswer: "Repeat customers",
      explanation: "Encourages ongoing engagement."
    },
    {
      question: "Specialty retailers often partner with:",
      options: ["Suppliers and influencers to promote niche products", "Mining partners", "Factory partners", "Farm partners"],
      correctAnswer: "Suppliers and influencers to promote niche products",
      explanation: "Expands reach and credibility within niche markets."
    }
  ],

  "Direct-to-Consumer (D2C)": [
    {
      question: "D2C brands sell:",
      options: ["Directly to consumers without intermediaries", "Mining direct", "Factory direct", "Farm direct"],
      correctAnswer: "Directly to consumers without intermediaries",
      explanation: "Eliminates middlemen to control branding and pricing."
    },
    {
      question: "E-commerce platforms are critical for:",
      options: ["Selling directly online", "Mining online", "Factory online", "Farm online"],
      correctAnswer: "Selling directly online",
      explanation: "Supports D2C business models."
    },
    {
      question: "Customer data helps:",
      options: ["Personalize marketing and offerings", "Mining data", "Factory data", "Farm data"],
      correctAnswer: "Personalize marketing and offerings",
      explanation: "Builds stronger relationships and improves targeting."
    },
    {
      question: "D2C models reduce:",
      options: ["Distribution costs", "Mining costs", "Factory costs", "Farm costs"],
      correctAnswer: "Distribution costs",
      explanation: "Saves money by removing intermediaries."
    },
    {
      question: "Brand control allows:",
      options: ["Consistent messaging and product quality", "Mining control", "Factory control", "Farm control"],
      correctAnswer: "Consistent messaging and product quality",
      explanation: "Maintains brand integrity and consumer trust."
    },
    {
      question: "Marketing often focuses on:",
      options: ["Social media and digital campaigns", "Mining marketing", "Factory marketing", "Farm marketing"],
      correctAnswer: "Social media and digital campaigns",
      explanation: "Reaches consumers directly and cost-effectively."
    },
    {
      question: "Customer service in D2C:",
      options: ["Enhances satisfaction and loyalty", "Mining service", "Factory service", "Farm service"],
      correctAnswer: "Enhances satisfaction and loyalty",
      explanation: "Direct communication improves experience."
    },
    {
      question: "Subscription models:",
      options: ["Provide recurring revenue and convenience", "Mining subscriptions", "Factory subscriptions", "Farm subscriptions"],
      correctAnswer: "Provide recurring revenue and convenience",
      explanation: "Stabilizes cash flow and engages customers."
    },
    {
      question: "Inventory management is critical for:",
      options: ["Meeting demand and avoiding stockouts", "Mining inventory", "Factory inventory", "Farm inventory"],
      correctAnswer: "Meeting demand and avoiding stockouts",
      explanation: "Ensures products are available when needed."
    },
    {
      question: "Direct feedback allows brands to:",
      options: ["Improve products quickly", "Mine feedback", "Factory feedback", "Farm feedback"],
      correctAnswer: "Improve products quickly",
      explanation: "Fast adaptation strengthens competitiveness."
    }
  ],

  "Department Stores": [
    {
      question: "Department stores offer:",
      options: ["Multiple product categories under one roof", "Mining departments", "Factory departments", "Farm departments"],
      correctAnswer: "Multiple product categories under one roof",
      explanation: "Convenience for shoppers to buy varied items in one location."
    },
    {
      question: "Sales associates help:",
      options: ["Guide customers and promote products", "Mine associates", "Factory associates", "Farm associates"],
      correctAnswer: "Guide customers and promote products",
      explanation: "Enhances shopping experience."
    },
    {
      question: "In-store promotions:",
      options: ["Drive foot traffic and sales", "Mining promotions", "Factory promotions", "Farm promotions"],
      correctAnswer: "Drive foot traffic and sales",
      explanation: "Encourages purchases and customer visits."
    },
    {
      question: "Department stores use:",
      options: ["Loyalty programs and rewards", "Mining loyalty", "Factory loyalty", "Farm loyalty"],
      correctAnswer: "Loyalty programs and rewards",
      explanation: "Encourages repeat visits and long-term customers."
    },
    {
      question: "Merchandising displays:",
      options: ["Highlight products and attract attention", "Mining displays", "Factory displays", "Farm displays"],
      correctAnswer: "Highlight products and attract attention",
      explanation: "Enhances visibility and sales."
    },
    {
      question: "Customer service desks:",
      options: ["Handle inquiries and returns", "Mine service", "Factory service", "Farm service"],
      correctAnswer: "Handle inquiries and returns",
      explanation: "Improves satisfaction and loyalty."
    },
    {
      question: "Inventory tracking ensures:",
      options: ["Availability across departments", "Mining inventory", "Factory inventory", "Farm inventory"],
      correctAnswer: "Availability across departments",
      explanation: "Prevents out-of-stock issues."
    },
    {
      question: "Online presence helps:",
      options: ["Reach wider audience and offer e-commerce options", "Mining online", "Factory online", "Farm online"],
      correctAnswer: "Reach wider audience and offer e-commerce options",
      explanation: "Combines physical and digital retail experiences."
    },
    {
      question: "Seasonal promotions:",
      options: ["Drive sales during holidays", "Mining promotions", "Factory promotions", "Farm promotions"],
      correctAnswer: "Drive sales during holidays",
      explanation: "Aligns marketing with key shopping periods."
    },
    {
      question: "Store layout aims to:",
      options: ["Enhance customer navigation and product discovery", "Mining layout", "Factory layout", "Farm layout"],
      correctAnswer: "Enhance customer navigation and product discovery",
      explanation: "Optimizes the shopping experience."
    }
  ]
  },
  media:{
"Digital Media": [
    {
      question: "Digital media includes:",
      options: ["Content distributed online via websites, apps, and social platforms", "Mining content", "Factory content", "Farm content"],
      correctAnswer: "Content distributed online via websites, apps, and social platforms",
      explanation: "Digital media uses electronic channels to reach audiences."
    },
    {
      question: "A key advantage of digital media is:",
      options: ["Real-time analytics and audience targeting", "Mining analytics", "Factory analytics", "Farm analytics"],
      correctAnswer: "Real-time analytics and audience targeting",
      explanation: "Allows brands to adjust campaigns and content effectively."
    },
    {
      question: "Digital media content types include:",
      options: ["Articles, videos, podcasts, and graphics", "Mining content", "Factory content", "Farm content"],
      correctAnswer: "Articles, videos, podcasts, and graphics",
      explanation: "Various formats engage diverse audiences."
    },
    {
      question: "Monetization strategies involve:",
      options: ["Advertising, subscriptions, and sponsorships", "Mining ads", "Factory ads", "Farm ads"],
      correctAnswer: "Advertising, subscriptions, and sponsorships",
      explanation: "Generates revenue from digital content."
    },
    {
      question: "SEO helps content creators to:",
      options: ["Increase visibility in search engines", "Mine SEO", "Factory SEO", "Farm SEO"],
      correctAnswer: "Increase visibility in search engines",
      explanation: "Optimizes content for discoverability."
    },
    {
      question: "Digital media analytics track:",
      options: ["User engagement, reach, and conversions", "Mining analytics", "Factory analytics", "Farm analytics"],
      correctAnswer: "User engagement, reach, and conversions",
      explanation: "Helps measure effectiveness and ROI."
    },
    {
      question: "Social media integration helps:",
      options: ["Distribute content widely and engage audiences", "Mine integration", "Factory integration", "Farm integration"],
      correctAnswer: "Distribute content widely and engage audiences",
      explanation: "Combines digital media and social platforms for reach."
    },
    {
      question: "Interactive media allows:",
      options: ["User participation and feedback", "Mining interactivity", "Factory interactivity", "Farm interactivity"],
      correctAnswer: "User participation and feedback",
      explanation: "Enhances engagement and experience."
    },
    {
      question: "Digital media campaigns are often optimized by:",
      options: ["A/B testing and performance metrics", "Mining testing", "Factory testing", "Farm testing"],
      correctAnswer: "A/B testing and performance metrics",
      explanation: "Improves effectiveness through data-driven decisions."
    },
    {
      question: "Content personalization improves:",
      options: ["Relevance and engagement for users", "Mining personalization", "Factory personalization", "Farm personalization"],
      correctAnswer: "Relevance and engagement for users",
      explanation: "Tailors content to audience preferences."
    }
  ],

  "Gaming & Esports": [
    {
      question: "Gaming & esports involves:",
      options: ["Competitive video gaming and related events", "Mining games", "Factory games", "Farm games"],
      correctAnswer: "Competitive video gaming and related events",
      explanation: "Esports is organized, competitive play of video games."
    },
    {
      question: "Popular esports games include:",
      options: ["MOBA, FPS, and battle royale titles", "Mining games", "Factory games", "Farm games"],
      correctAnswer: "MOBA, FPS, and battle royale titles",
      explanation: "Genres like Dota 2, CS:GO, and Fortnite dominate esports."
    },
    {
      question: "Streaming platforms for gaming:",
      options: ["Allow live broadcasts to fans worldwide", "Mining streaming", "Factory streaming", "Farm streaming"],
      correctAnswer: "Allow live broadcasts to fans worldwide",
      explanation: "Platforms like Twitch and YouTube Gaming provide access."
    },
    {
      question: "Sponsorship in esports:",
      options: ["Supports teams and events financially", "Mining sponsorship", "Factory sponsorship", "Farm sponsorship"],
      correctAnswer: "Supports teams and events financially",
      explanation: "Brands fund tournaments and players for marketing exposure."
    },
    {
      question: "Esports tournaments measure success by:",
      options: ["Viewership, engagement, and prize pools", "Mining metrics", "Factory metrics", "Farm metrics"],
      correctAnswer: "Viewership, engagement, and prize pools",
      explanation: "Key indicators of popularity and competitiveness."
    },
    {
      question: "Professional players often sign:",
      options: ["Contracts with teams and sponsors", "Mining contracts", "Factory contracts", "Farm contracts"],
      correctAnswer: "Contracts with teams and sponsors",
      explanation: "Formal agreements define obligations and compensation."
    },
    {
      question: "Gaming analytics track:",
      options: ["Player behavior and performance metrics", "Mining analytics", "Factory analytics", "Farm analytics"],
      correctAnswer: "Player behavior and performance metrics",
      explanation: "Improves training and game development."
    },
    {
      question: "Community engagement involves:",
      options: ["Forums, streams, and social interaction", "Mining engagement", "Factory engagement", "Farm engagement"],
      correctAnswer: "Forums, streams, and social interaction",
      explanation: "Builds loyalty and fanbase for games and players."
    },
    {
      question: "Game developers monetize by:",
      options: ["In-game purchases, ads, and subscriptions", "Mining monetization", "Factory monetization", "Farm monetization"],
      correctAnswer: "In-game purchases, ads, and subscriptions",
      explanation: "Revenue models sustain games and esports ecosystems."
    },
    {
      question: "Esports coaching helps players to:",
      options: ["Improve skills and team strategy", "Mining coaching", "Factory coaching", "Farm coaching"],
      correctAnswer: "Improve skills and team strategy",
      explanation: "Professional guidance enhances competitive performance."
    }
  ],

  "Streaming Services": [
    {
      question: "Streaming services provide:",
      options: ["On-demand digital content like video and music", "Mining streaming", "Factory streaming", "Farm streaming"],
      correctAnswer: "On-demand digital content like video and music",
      explanation: "Platforms like Netflix, Spotify, and Disney+ deliver media online."
    },
    {
      question: "Subscription models allow:",
      options: ["Unlimited access for a fixed fee", "Mining subscriptions", "Factory subscriptions", "Farm subscriptions"],
      correctAnswer: "Unlimited access for a fixed fee",
      explanation: "Users pay monthly/yearly for content access."
    },
    {
      question: "Ad-supported streaming:",
      options: ["Provides free content with ads", "Mining ads", "Factory ads", "Farm ads"],
      correctAnswer: "Provides free content with ads",
      explanation: "Revenue comes from advertising instead of subscription fees."
    },
    {
      question: "Streaming analytics track:",
      options: ["Viewership, engagement, and retention", "Mining analytics", "Factory analytics", "Farm analytics"],
      correctAnswer: "Viewership, engagement, and retention",
      explanation: "Helps optimize content and recommend relevant shows or songs."
    },
    {
      question: "Content libraries include:",
      options: ["Movies, TV shows, documentaries, and music", "Mining content", "Factory content", "Farm content"],
      correctAnswer: "Movies, TV shows, documentaries, and music",
      explanation: "Wide selection attracts diverse audiences."
    },
    {
      question: "Original programming:",
      options: ["Differentiates platforms from competitors", "Mining programming", "Factory programming", "Farm programming"],
      correctAnswer: "Differentiates platforms from competitors",
      explanation: "Exclusive content drives subscriptions and loyalty."
    },
    {
      question: "Multi-device access allows:",
      options: ["Streaming on smartphones, tablets, and TVs", "Mining devices", "Factory devices", "Farm devices"],
      correctAnswer: "Streaming on smartphones, tablets, and TVs",
      explanation: "Enhances user convenience and flexibility."
    },
    {
      question: "Download features let users:",
      options: ["Watch offline without internet", "Mining downloads", "Factory downloads", "Farm downloads"],
      correctAnswer: "Watch offline without internet",
      explanation: "Provides flexibility in content consumption."
    },
    {
      question: "Personalized recommendations:",
      options: ["Suggest content based on user behavior", "Mining recommendations", "Factory recommendations", "Farm recommendations"],
      correctAnswer: "Suggest content based on user behavior",
      explanation: "Improves engagement and retention."
    },
    {
      question: "Content licensing involves:",
      options: ["Obtaining rights to stream media", "Mining licensing", "Factory licensing", "Farm licensing"],
      correctAnswer: "Obtaining rights to stream media",
      explanation: "Ensures legal distribution of films, shows, and music."
    }
  ],
    "Social Media": [
    {
      question: "Social media platforms are used for:",
      options: ["Connecting users, sharing content, and networking", "Mining platforms", "Factory platforms", "Farm platforms"],
      correctAnswer: "Connecting users, sharing content, and networking",
      explanation: "Platforms like Facebook, Instagram, and LinkedIn enable communication and content sharing."
    },
    {
      question: "User engagement is measured by:",
      options: ["Likes, shares, comments, and time spent", "Mining engagement", "Factory engagement", "Farm engagement"],
      correctAnswer: "Likes, shares, comments, and time spent",
      explanation: "Helps gauge content popularity and effectiveness."
    },
    {
      question: "Influencer marketing involves:",
      options: ["Collaborating with users who have large followings", "Mining marketing", "Factory marketing", "Farm marketing"],
      correctAnswer: "Collaborating with users who have large followings",
      explanation: "Influencers promote products or content to their audience."
    },
    {
      question: "Content moderation ensures:",
      options: ["Safe and compliant posts", "Mining moderation", "Factory moderation", "Farm moderation"],
      correctAnswer: "Safe and compliant posts",
      explanation: "Protects users and maintains platform standards."
    },
    {
      question: "Advertising on social media can be:",
      options: ["Targeted based on demographics and interests", "Mining ads", "Factory ads", "Farm ads"],
      correctAnswer: "Targeted based on demographics and interests",
      explanation: "Increases ad relevance and effectiveness."
    },
    {
      question: "Social listening tools help brands:",
      options: ["Monitor conversations about their products", "Mining tools", "Factory tools", "Farm tools"],
      correctAnswer: "Monitor conversations about their products",
      explanation: "Provides insights for marketing and strategy."
    },
    {
      question: "User-generated content:",
      options: ["Increases authenticity and engagement", "Mining content", "Factory content", "Farm content"],
      correctAnswer: "Increases authenticity and engagement",
      explanation: "Encourages community participation."
    },
    {
      question: "Algorithmic feeds prioritize:",
      options: ["Content likely to engage the user", "Mining algorithms", "Factory algorithms", "Farm algorithms"],
      correctAnswer: "Content likely to engage the user",
      explanation: "Determines which posts are most visible to users."
    },
    {
      question: "Analytics dashboards track:",
      options: ["Growth, engagement, and conversions", "Mining dashboards", "Factory dashboards", "Farm dashboards"],
      correctAnswer: "Growth, engagement, and conversions",
      explanation: "Helps brands optimize content strategies."
    },
    {
      question: "Privacy settings allow users to:",
      options: ["Control visibility and data sharing", "Mining privacy", "Factory privacy", "Farm privacy"],
      correctAnswer: "Control visibility and data sharing",
      explanation: "Protects personal information on platforms."
    }
  ],

  "Digital Marketing": [
    {
      question: "Digital marketing uses:",
      options: ["Online channels to promote products and services", "Mining marketing", "Factory marketing", "Farm marketing"],
      correctAnswer: "Online channels to promote products and services",
      explanation: "Includes SEO, social media, email, and ads."
    },
    {
      question: "SEO stands for:",
      options: ["Search Engine Optimization", "Social Engagement Online", "Systematic E-marketing Operation", "Search Efficiency Operation"],
      correctAnswer: "Search Engine Optimization",
      explanation: "Improves website visibility on search engines."
    },
    {
      question: "PPC advertising refers to:",
      options: ["Pay-per-click campaigns", "Pay-per-consumption", "Platform-per-click", "Product-price control"],
      correctAnswer: "Pay-per-click campaigns",
      explanation: "Advertisers pay each time their ad is clicked."
    },
    {
      question: "Email marketing aims to:",
      options: ["Engage subscribers and drive conversions", "Mining email", "Factory email", "Farm email"],
      correctAnswer: "Engage subscribers and drive conversions",
      explanation: "Targets audiences directly via newsletters and offers."
    },
    {
      question: "Content marketing focuses on:",
      options: ["Providing valuable content to attract customers", "Mining content", "Factory content", "Farm content"],
      correctAnswer: "Providing valuable content to attract customers",
      explanation: "Builds trust and long-term engagement."
    },
    {
      question: "Analytics helps marketers to:",
      options: ["Measure campaign performance", "Mining analytics", "Factory analytics", "Farm analytics"],
      correctAnswer: "Measure campaign performance",
      explanation: "Data-driven decisions improve ROI."
    },
    {
      question: "Social media ads are effective because:",
      options: ["They can target specific audiences", "Mining ads", "Factory ads", "Farm ads"],
      correctAnswer: "They can target specific audiences",
      explanation: "Precision targeting increases ad relevance."
    },
    {
      question: "Affiliate marketing relies on:",
      options: ["Partners promoting products for a commission", "Mining affiliate", "Factory affiliate", "Farm affiliate"],
      correctAnswer: "Partners promoting products for a commission",
      explanation: "Encourages third parties to drive sales."
    },
    {
      question: "Marketing automation tools:",
      options: ["Streamline repetitive marketing tasks", "Mining automation", "Factory automation", "Farm automation"],
      correctAnswer: "Streamline repetitive marketing tasks",
      explanation: "Saves time and improves efficiency."
    },
    {
      question: "Retargeting ads are shown to:",
      options: ["Users who previously visited a website", "Mining retargeting", "Factory retargeting", "Farm retargeting"],
      correctAnswer: "Users who previously visited a website",
      explanation: "Encourages conversions by reminding potential customers."
    }
  ],

  "Film & Television": [
    {
      question: "Film and TV productions involve:",
      options: ["Creating scripted content for entertainment", "Mining production", "Factory production", "Farm production"],
      correctAnswer: "Creating scripted content for entertainment",
      explanation: "Includes movies, TV shows, and series."
    },
    {
      question: "Directors are responsible for:",
      options: ["Visual storytelling and creative vision", "Mining directors", "Factory directors", "Farm directors"],
      correctAnswer: "Visual storytelling and creative vision",
      explanation: "Guides actors, sets, and production."
    },
    {
      question: "Producers handle:",
      options: ["Financing and project management", "Mining producers", "Factory producers", "Farm producers"],
      correctAnswer: "Financing and project management",
      explanation: "Ensures the production stays on schedule and budget."
    },
    {
      question: "Screenwriters create:",
      options: ["Scripts and storylines", "Mining scripts", "Factory scripts", "Farm scripts"],
      correctAnswer: "Scripts and storylines",
      explanation: "Defines dialogue, plot, and character arcs."
    },
    {
      question: "Post-production involves:",
      options: ["Editing, sound, and visual effects", "Mining post-production", "Factory post-production", "Farm post-production"],
      correctAnswer: "Editing, sound, and visual effects",
      explanation: "Polishes raw footage into final content."
    },
    {
      question: "Distribution channels include:",
      options: ["Cinemas, TV networks, and streaming platforms", "Mining distribution", "Factory distribution", "Farm distribution"],
      correctAnswer: "Cinemas, TV networks, and streaming platforms",
      explanation: "Ensures content reaches audiences effectively."
    },
    {
      question: "Cinematography focuses on:",
      options: ["Camera work and visual composition", "Mining cinematography", "Factory cinematography", "Farm cinematography"],
      correctAnswer: "Camera work and visual composition",
      explanation: "Defines the look and feel of scenes."
    },
    {
      question: "Sound design includes:",
      options: ["Music, effects, and dialogue editing", "Mining sound", "Factory sound", "Farm sound"],
      correctAnswer: "Music, effects, and dialogue editing",
      explanation: "Enhances immersion and storytelling."
    },
    {
      question: "Casting directors select:",
      options: ["Actors suitable for roles", "Mining casting", "Factory casting", "Farm casting"],
      correctAnswer: "Actors suitable for roles",
      explanation: "Ensures talent fits creative vision."
    },
    {
      question: "TV ratings measure:",
      options: ["Viewership and audience demographics", "Mining ratings", "Factory ratings", "Farm ratings"],
      correctAnswer: "Viewership and audience demographics",
      explanation: "Guides advertising and programming decisions."
    }
  ],
    "Music & Audio": [
    {
      question: "Music & audio industries produce:",
      options: ["Songs, albums, podcasts, and soundtracks", "Mining music", "Factory music", "Farm music"],
      correctAnswer: "Songs, albums, podcasts, and soundtracks",
      explanation: "Covers all audio-based entertainment and content."
    },
    {
      question: "Streaming platforms allow:",
      options: ["On-demand listening online", "Mining streaming", "Factory streaming", "Farm streaming"],
      correctAnswer: "On-demand listening online",
      explanation: "Platforms like Spotify, Apple Music, and SoundCloud distribute audio digitally."
    },
    {
      question: "Recording studios handle:",
      options: ["Professional audio recording and mixing", "Mining recording", "Factory recording", "Farm recording"],
      correctAnswer: "Professional audio recording and mixing",
      explanation: "Ensures high-quality production."
    },
    {
      question: "Royalty payments are:",
      options: ["Earnings for artists based on usage or sales", "Mining royalties", "Factory royalties", "Farm royalties"],
      correctAnswer: "Earnings for artists based on usage or sales",
      explanation: "Compensates creators for their work."
    },
    {
      question: "Music distribution channels include:",
      options: ["Digital streaming, radio, and physical media", "Mining distribution", "Factory distribution", "Farm distribution"],
      correctAnswer: "Digital streaming, radio, and physical media",
      explanation: "Reaches audiences via multiple platforms."
    },
    {
      question: "Audio mastering ensures:",
      options: ["Consistent sound quality across platforms", "Mining mastering", "Factory mastering", "Farm mastering"],
      correctAnswer: "Consistent sound quality across platforms",
      explanation: "Prepares recordings for final release."
    },
    {
      question: "Music marketing includes:",
      options: ["Social media, tours, and collaborations", "Mining marketing", "Factory marketing", "Farm marketing"],
      correctAnswer: "Social media, tours, and collaborations",
      explanation: "Promotes artists and content to audiences."
    },
    {
      question: "Podcasts often generate revenue via:",
      options: ["Sponsorships and advertising", "Mining podcasts", "Factory podcasts", "Farm podcasts"],
      correctAnswer: "Sponsorships and advertising",
      explanation: "Supports production and monetization of content."
    },
    {
      question: "Music licensing allows:",
      options: ["Use of tracks in films, games, or ads", "Mining licensing", "Factory licensing", "Farm licensing"],
      correctAnswer: "Use of tracks in films, games, or ads",
      explanation: "Legal permissions for third-party usage."
    },
    {
      question: "Fan engagement includes:",
      options: ["Live shows, social media, and exclusive content", "Mining engagement", "Factory engagement", "Farm engagement"],
      correctAnswer: "Live shows, social media, and exclusive content",
      explanation: "Builds loyalty and community around artists."
    }
  ],

  "Publishing": [
    {
      question: "Publishing involves:",
      options: ["Producing books, magazines, and digital content", "Mining publishing", "Factory publishing", "Farm publishing"],
      correctAnswer: "Producing books, magazines, and digital content",
      explanation: "Covers both print and electronic formats."
    },
    {
      question: "Editors are responsible for:",
      options: ["Reviewing and refining content", "Mining editors", "Factory editors", "Farm editors"],
      correctAnswer: "Reviewing and refining content",
      explanation: "Ensures quality, clarity, and accuracy."
    },
    {
      question: "ISBN numbers are used for:",
      options: ["Unique identification of books", "Mining ISBN", "Factory ISBN", "Farm ISBN"],
      correctAnswer: "Unique identification of books",
      explanation: "Standard identifier for commercial books."
    },
    {
      question: "Digital publishing allows:",
      options: ["E-books and online magazines distribution", "Mining digital", "Factory digital", "Farm digital"],
      correctAnswer: "E-books and online magazines distribution",
      explanation: "Reaches global audiences efficiently."
    },
    {
      question: "Copyright protects:",
      options: ["Original written and creative works", "Mining copyright", "Factory copyright", "Farm copyright"],
      correctAnswer: "Original written and creative works",
      explanation: "Prevents unauthorized use of intellectual property."
    },
    {
      question: "Publishing platforms include:",
      options: ["Amazon Kindle, Wattpad, and Medium", "Mining platforms", "Factory platforms", "Farm platforms"],
      correctAnswer: "Amazon Kindle, Wattpad, and Medium",
      explanation: "Facilitate distribution and readership."
    },
    {
      question: "Revenue in publishing comes from:",
      options: ["Sales, subscriptions, and licensing", "Mining revenue", "Factory revenue", "Farm revenue"],
      correctAnswer: "Sales, subscriptions, and licensing",
      explanation: "Different monetization models for content."
    },
    {
      question: "Proofreading ensures:",
      options: ["Correct spelling, grammar, and formatting", "Mining proofreading", "Factory proofreading", "Farm proofreading"],
      correctAnswer: "Correct spelling, grammar, and formatting",
      explanation: "Maintains professional quality."
    },
    {
      question: "Marketing for publishing includes:",
      options: ["Book launches, social media, and author events", "Mining marketing", "Factory marketing", "Farm marketing"],
      correctAnswer: "Book launches, social media, and author events",
      explanation: "Promotes titles and drives sales."
    },
    {
      question: "Print-on-demand services:",
      options: ["Produce copies as ordered to reduce waste", "Mining POD", "Factory POD", "Farm POD"],
      correctAnswer: "Produce copies as ordered to reduce waste",
      explanation: "Efficient production model for low-volume titles."
    }
  ],

  "Advertising": [
    {
      question: "Advertising aims to:",
      options: ["Promote products and services to audiences", "Mining advertising", "Factory advertising", "Farm advertising"],
      correctAnswer: "Promote products and services to audiences",
      explanation: "Creates awareness and drives sales or engagement."
    },
    {
      question: "Types of advertising include:",
      options: ["Digital, print, TV, radio, and outdoor", "Mining types", "Factory types", "Farm types"],
      correctAnswer: "Digital, print, TV, radio, and outdoor",
      explanation: "Different channels reach varied audiences."
    },
    {
      question: "Target audience refers to:",
      options: ["Specific group of consumers an ad aims to reach", "Mining target", "Factory target", "Farm target"],
      correctAnswer: "Specific group of consumers an ad aims to reach",
      explanation: "Improves ad relevance and effectiveness."
    },
    {
      question: "ROI in advertising measures:",
      options: ["Return on investment from campaigns", "Mining ROI", "Factory ROI", "Farm ROI"],
      correctAnswer: "Return on investment from campaigns",
      explanation: "Indicates effectiveness of advertising spend."
    },
    {
      question: "Creative strategy involves:",
      options: ["Concepts, messaging, and visuals", "Mining strategy", "Factory strategy", "Farm strategy"],
      correctAnswer: "Concepts, messaging, and visuals",
      explanation: "Defines how an advertisement communicates to the audience."
    },
    {
      question: "Programmatic advertising uses:",
      options: ["Automated platforms to buy and display ads", "Mining programmatic", "Factory programmatic", "Farm programmatic"],
      correctAnswer: "Automated platforms to buy and display ads",
      explanation: "Optimizes targeting and efficiency in digital campaigns."
    },
    {
      question: "Branding ensures:",
      options: ["Recognition and loyalty among consumers", "Mining branding", "Factory branding", "Farm branding"],
      correctAnswer: "Recognition and loyalty among consumers",
      explanation: "Differentiates products from competitors."
    },
    {
      question: "Advertising metrics include:",
      options: ["Impressions, clicks, conversions, and engagement", "Mining metrics", "Factory metrics", "Farm metrics"],
      correctAnswer: "Impressions, clicks, conversions, and engagement",
      explanation: "Helps evaluate campaign performance."
    },
    {
      question: "Influencer partnerships:",
      options: ["Leverage personalities to promote brands", "Mining partnerships", "Factory partnerships", "Farm partnerships"],
      correctAnswer: "Leverage personalities to promote brands",
      explanation: "Accesses loyal audiences for effective campaigns."
    },
    {
      question: "Ad compliance ensures:",
      options: ["Ads meet legal and ethical standards", "Mining compliance", "Factory compliance", "Farm compliance"],
      correctAnswer: "Ads meet legal and ethical standards",
      explanation: "Prevents penalties and maintains brand reputation."
    }
  ],
    "Sports Entertainment": [
    {
      question: "Sports entertainment combines:",
      options: ["Athletic competition with entertainment elements", "Mining sports", "Factory sports", "Farm sports"],
      correctAnswer: "Athletic competition with entertainment elements",
      explanation: "Includes professional wrestling, exhibition events, and live shows."
    },
    {
      question: "Major revenue sources include:",
      options: ["Tickets, merchandise, media rights, and sponsorships", "Mining revenue", "Factory revenue", "Farm revenue"],
      correctAnswer: "Tickets, merchandise, media rights, and sponsorships",
      explanation: "Drives profitability for leagues and events."
    },
    {
      question: "Broadcasting rights are:",
      options: ["Contracts to televise or stream sports events", "Mining rights", "Factory rights", "Farm rights"],
      correctAnswer: "Contracts to televise or stream sports events",
      explanation: "Significant source of income for sports organizations."
    },
    {
      question: "Athlete branding involves:",
      options: ["Promoting an athlete’s personal image and endorsements", "Mining branding", "Factory branding", "Farm branding"],
      correctAnswer: "Promoting an athlete’s personal image and endorsements",
      explanation: "Increases revenue opportunities and fan engagement."
    },
    {
      question: "Event management in sports includes:",
      options: ["Planning venues, logistics, and promotions", "Mining events", "Factory events", "Farm events"],
      correctAnswer: "Planning venues, logistics, and promotions",
      explanation: "Ensures smooth execution and fan experience."
    },
    {
      question: "Fan engagement strategies involve:",
      options: ["Social media, apps, and interactive content", "Mining engagement", "Factory engagement", "Farm engagement"],
      correctAnswer: "Social media, apps, and interactive content",
      explanation: "Builds loyalty and audience interaction."
    },
    {
      question: "Merchandising helps:",
      options: ["Generate revenue through apparel and collectibles", "Mining merchandising", "Factory merchandising", "Farm merchandising"],
      correctAnswer: "Generate revenue through apparel and collectibles",
      explanation: "Capitalizes on team and athlete popularity."
    },
    {
      question: "Sponsorship deals:",
      options: ["Provide financial support for branding opportunities", "Mining sponsorship", "Factory sponsorship", "Farm sponsorship"],
      correctAnswer: "Provide financial support for branding opportunities",
      explanation: "Brands gain exposure while supporting events."
    },
    {
      question: "Sports analytics are used to:",
      options: ["Enhance player performance and fan experience", "Mining analytics", "Factory analytics", "Farm analytics"],
      correctAnswer: "Enhance player performance and fan experience",
      explanation: "Data-driven insights improve both play and engagement."
    },
    {
      question: "Live streaming sports allows:",
      options: ["Global viewership in real-time", "Mining streaming", "Factory streaming", "Farm streaming"],
      correctAnswer: "Global viewership in real-time",
      explanation: "Expands audience reach beyond stadiums."
    }
  ],

  "News & Journalism": [
    {
      question: "Journalism involves:",
      options: ["Reporting, investigating, and publishing news", "Mining journalism", "Factory journalism", "Farm journalism"],
      correctAnswer: "Reporting, investigating, and publishing news",
      explanation: "Provides accurate information to the public."
    },
    {
      question: "Ethical journalism requires:",
      options: ["Accuracy, fairness, and objectivity", "Mining ethics", "Factory ethics", "Farm ethics"],
      correctAnswer: "Accuracy, fairness, and objectivity",
      explanation: "Maintains trust and credibility."
    },
    {
      question: "News mediums include:",
      options: ["Print, TV, radio, and digital platforms", "Mining mediums", "Factory mediums", "Farm mediums"],
      correctAnswer: "Print, TV, radio, and digital platforms",
      explanation: "Covers all major channels for distribution."
    },
    {
      question: "Fact-checking ensures:",
      options: ["Information is verified before publication", "Mining fact-checking", "Factory fact-checking", "Farm fact-checking"],
      correctAnswer: "Information is verified before publication",
      explanation: "Prevents misinformation and errors."
    },
    {
      question: "Investigative journalism focuses on:",
      options: ["Exposing hidden truths or wrongdoing", "Mining investigative", "Factory investigative", "Farm investigative"],
      correctAnswer: "Exposing hidden truths or wrongdoing",
      explanation: "Requires in-depth research and verification."
    },
    {
      question: "Editorial content expresses:",
      options: ["Opinions or commentary from journalists", "Mining editorial", "Factory editorial", "Farm editorial"],
      correctAnswer: "Opinions or commentary from journalists",
      explanation: "Distinguishes news reporting from opinion pieces."
    },
    {
      question: "Multimedia journalism uses:",
      options: ["Video, audio, and graphics to enhance storytelling", "Mining multimedia", "Factory multimedia", "Farm multimedia"],
      correctAnswer: "Video, audio, and graphics to enhance storytelling",
      explanation: "Engages audiences across formats."
    },
    {
      question: "News aggregation platforms:",
      options: ["Collect articles from multiple sources", "Mining aggregation", "Factory aggregation", "Farm aggregation"],
      correctAnswer: "Collect articles from multiple sources",
      explanation: "Provides convenience and variety for readers."
    },
    {
      question: "Breaking news coverage requires:",
      options: ["Speed, accuracy, and updates", "Mining breaking", "Factory breaking", "Farm breaking"],
      correctAnswer: "Speed, accuracy, and updates",
      explanation: "Delivers timely information while maintaining credibility."
    },
    {
      question: "Journalists follow codes of conduct to:",
      options: ["Ensure responsible reporting and accountability", "Mining conduct", "Factory conduct", "Farm conduct"],
      correctAnswer: "Ensure responsible reporting and accountability",
      explanation: "Maintains professional and ethical standards."
    }
  ],

  "Animation": [
    {
      question: "Animation involves:",
      options: ["Creating moving images from drawings or computer models", "Mining animation", "Factory animation", "Farm animation"],
      correctAnswer: "Creating moving images from drawings or computer models",
      explanation: "Used in films, games, and media content."
    },
    {
      question: "2D animation is:",
      options: ["Flat, hand-drawn or digitally created", "Mining 2D", "Factory 2D", "Farm 2D"],
      correctAnswer: "Flat, hand-drawn or digitally created",
      explanation: "Traditional or vector-based animation style."
    },
    {
      question: "3D animation uses:",
      options: ["Computer-generated three-dimensional models", "Mining 3D", "Factory 3D", "Farm 3D"],
      correctAnswer: "Computer-generated three-dimensional models",
      explanation: "Creates depth and realistic movement."
    },
    {
      question: "Rigging in animation refers to:",
      options: ["Building a digital skeleton for characters", "Mining rigging", "Factory rigging", "Farm rigging"],
      correctAnswer: "Building a digital skeleton for characters",
      explanation: "Allows smooth movement of animated models."
    },
    {
      question: "Keyframing involves:",
      options: ["Setting positions at specific times for animation", "Mining keyframing", "Factory keyframing", "Farm keyframing"],
      correctAnswer: "Setting positions at specific times for animation",
      explanation: "Defines motion between frames."
    },
    {
      question: "Storyboarding is used to:",
      options: ["Plan scenes and visual sequences", "Mining storyboard", "Factory storyboard", "Farm storyboard"],
      correctAnswer: "Plan scenes and visual sequences",
      explanation: "Maps out animation workflow before production."
    },
    {
      question: "Rendering produces:",
      options: ["Final visual output of animation", "Mining rendering", "Factory rendering", "Farm rendering"],
      correctAnswer: "Final visual output of animation",
      explanation: "Converts models and effects into viewable media."
    },
    {
      question: "Motion graphics focus on:",
      options: ["Animating text and graphics", "Mining motion", "Factory motion", "Farm motion"],
      correctAnswer: "Animating text and graphics",
      explanation: "Used in commercials, presentations, and videos."
    },
    {
      question: "Voice acting provides:",
      options: ["Character voices and dialogue", "Mining voice", "Factory voice", "Farm voice"],
      correctAnswer: "Character voices and dialogue",
      explanation: "Brings animated characters to life."
    },
    {
      question: "Animation pipelines ensure:",
      options: ["Efficient production from concept to final output", "Mining pipeline", "Factory pipeline", "Farm pipeline"],
      correctAnswer: "Efficient production from concept to final output",
      explanation: "Streamlines team collaboration and workflow."
    }
  ],

  "Event Management": [
    {
      question: "Event management involves:",
      options: ["Planning and organizing events for attendees", "Mining events", "Factory events", "Farm events"],
      correctAnswer: "Planning and organizing events for attendees",
      explanation: "Covers corporate, entertainment, and social events."
    },
    {
      question: "Key aspects include:",
      options: ["Venue selection, logistics, and promotion", "Mining logistics", "Factory logistics", "Farm logistics"],
      correctAnswer: "Venue selection, logistics, and promotion",
      explanation: "Ensures smooth and successful events."
    },
    {
      question: "Event budgeting helps:",
      options: ["Manage costs and allocate resources effectively", "Mining budget", "Factory budget", "Farm budget"],
      correctAnswer: "Manage costs and allocate resources effectively",
      explanation: "Prevents overspending and ensures resource efficiency."
    },
    {
      question: "Marketing for events involves:",
      options: ["Social media, email, and partnerships", "Mining marketing", "Factory marketing", "Farm marketing"],
      correctAnswer: "Social media, email, and partnerships",
      explanation: "Promotes attendance and engagement."
    },
    {
      question: "Risk management includes:",
      options: ["Identifying and mitigating potential issues", "Mining risk", "Factory risk", "Farm risk"],
      correctAnswer: "Identifying and mitigating potential issues",
      explanation: "Prepares for emergencies or unforeseen problems."
    },
    {
      question: "Event registration systems:",
      options: ["Handle attendee sign-ups and ticketing", "Mining registration", "Factory registration", "Farm registration"],
      correctAnswer: "Handle attendee sign-ups and ticketing",
      explanation: "Streamlines participant management."
    },
    {
      question: "On-site coordination ensures:",
      options: ["Smooth execution during the event", "Mining coordination", "Factory coordination", "Farm coordination"],
      correctAnswer: "Smooth execution during the event",
      explanation: "Maintains schedule, logistics, and attendee experience."
    },
    {
      question: "Post-event evaluation helps:",
      options: ["Measure success and identify improvements", "Mining evaluation", "Factory evaluation", "Farm evaluation"],
      correctAnswer: "Measure success and identify improvements",
      explanation: "Provides insights for future events."
    },
    {
      question: "Vendor management includes:",
      options: ["Coordinating catering, equipment, and services", "Mining vendors", "Factory vendors", "Farm vendors"],
      correctAnswer: "Coordinating catering, equipment, and services",
      explanation: "Ensures all event needs are met efficiently."
    },
    {
      question: "Sponsorships provide:",
      options: ["Funding and brand partnerships for events", "Mining sponsorship", "Factory sponsorship", "Farm sponsorship"],
      correctAnswer: "Funding and brand partnerships for events",
      explanation: "Helps cover costs and enhances event promotion."
    }
  ]
  },
  education:{
    "EdTech": [
    {
      question: "EdTech refers to:",
      options: ["Using technology to enhance education and learning", "Mining EdTech", "Factory EdTech", "Farm EdTech"],
      correctAnswer: "Using technology to enhance education and learning",
      explanation: "EdTech integrates software, apps, and digital platforms into learning."
    },
    {
      question: "Learning management systems (LMS) are used to:",
      options: ["Organize, track, and deliver online courses", "Mining LMS", "Factory LMS", "Farm LMS"],
      correctAnswer: "Organize, track, and deliver online courses",
      explanation: "LMS platforms manage digital education efficiently."
    },
    {
      question: "Gamification in EdTech:",
      options: ["Uses game mechanics to increase engagement", "Mining gamification", "Factory gamification", "Farm gamification"],
      correctAnswer: "Uses game mechanics to increase engagement",
      explanation: "Makes learning interactive and motivating."
    },
    {
      question: "Virtual classrooms enable:",
      options: ["Remote learning with live interaction", "Mining virtual", "Factory virtual", "Farm virtual"],
      correctAnswer: "Remote learning with live interaction",
      explanation: "Teachers and students interact in real-time online."
    },
    {
      question: "Adaptive learning platforms:",
      options: ["Adjust content based on learner performance", "Mining adaptive", "Factory adaptive", "Farm adaptive"],
      correctAnswer: "Adjust content based on learner performance",
      explanation: "Personalizes education for better outcomes."
    },
    {
      question: "EdTech analytics track:",
      options: ["Student progress, engagement, and outcomes", "Mining analytics", "Factory analytics", "Farm analytics"],
      correctAnswer: "Student progress, engagement, and outcomes",
      explanation: "Helps educators measure effectiveness."
    },
    {
      question: "Mobile learning allows:",
      options: ["Access to courses via smartphones and tablets", "Mining mobile", "Factory mobile", "Farm mobile"],
      correctAnswer: "Access to courses via smartphones and tablets",
      explanation: "Enables learning anytime, anywhere."
    },
    {
      question: "Digital assessments are:",
      options: ["Tests and quizzes delivered online", "Mining assessments", "Factory assessments", "Farm assessments"],
      correctAnswer: "Tests and quizzes delivered online",
      explanation: "Allows quick evaluation of learning progress."
    },
    {
      question: "EdTech platforms often support:",
      options: ["Collaborative learning and discussion forums", "Mining collaboration", "Factory collaboration", "Farm collaboration"],
      correctAnswer: "Collaborative learning and discussion forums",
      explanation: "Encourages interaction among learners."
    },
    {
      question: "E-learning content can include:",
      options: ["Videos, simulations, quizzes, and readings", "Mining content", "Factory content", "Farm content"],
      correctAnswer: "Videos, simulations, quizzes, and readings",
      explanation: "Various formats cater to diverse learning styles."
    }
  ],

  "Higher Education": [
    {
      question: "Higher education typically includes:",
      options: ["Universities, colleges, and graduate programs", "Mining higher ed", "Factory higher ed", "Farm higher ed"],
      correctAnswer: "Universities, colleges, and graduate programs",
      explanation: "Focuses on advanced learning beyond secondary school."
    },
    {
      question: "Accreditation ensures:",
      options: ["Institutions meet quality standards", "Mining accreditation", "Factory accreditation", "Farm accreditation"],
      correctAnswer: "Institutions meet quality standards",
      explanation: "Validates the credibility of programs."
    },
    {
      question: "Academic research involves:",
      options: ["Systematic investigation to create new knowledge", "Mining research", "Factory research", "Farm research"],
      correctAnswer: "Systematic investigation to create new knowledge",
      explanation: "Supports evidence-based learning and innovation."
    },
    {
      question: "Undergraduate programs typically last:",
      options: ["3–4 years depending on country and degree", "Mining undergraduate", "Factory undergraduate", "Farm undergraduate"],
      correctAnswer: "3–4 years depending on country and degree",
      explanation: "Leads to a bachelor's degree."
    },
    {
      question: "Graduate programs include:",
      options: ["Master’s and doctoral studies", "Mining graduate", "Factory graduate", "Farm graduate"],
      correctAnswer: "Master’s and doctoral studies",
      explanation: "Advanced studies following a bachelor’s degree."
    },
    {
      question: "Campus facilities support:",
      options: ["Libraries, labs, housing, and sports", "Mining facilities", "Factory facilities", "Farm facilities"],
      correctAnswer: "Libraries, labs, housing, and sports",
      explanation: "Enhances student learning and experience."
    },
    {
      question: "Scholarships are:",
      options: ["Financial aid based on merit or need", "Mining scholarships", "Factory scholarships", "Farm scholarships"],
      correctAnswer: "Financial aid based on merit or need",
      explanation: "Supports students in paying tuition or fees."
    },
    {
      question: "Student unions provide:",
      options: ["Clubs, advocacy, and social activities", "Mining unions", "Factory unions", "Farm unions"],
      correctAnswer: "Clubs, advocacy, and social activities",
      explanation: "Fosters student community and engagement."
    },
    {
      question: "Distance learning offers:",
      options: ["Access to courses without attending campus", "Mining distance", "Factory distance", "Farm distance"],
      correctAnswer: "Access to courses without attending campus",
      explanation: "Supports remote or international learners."
    },
    {
      question: "Alumni networks help:",
      options: ["Career development and mentorship", "Mining alumni", "Factory alumni", "Farm alumni"],
      correctAnswer: "Career development and mentorship",
      explanation: "Connects graduates for professional growth."
    }
  ],

  "Professional Training": [
    {
      question: "Professional training focuses on:",
      options: ["Skill development for careers and jobs", "Mining training", "Factory training", "Farm training"],
      correctAnswer: "Skill development for careers and jobs",
      explanation: "Improves performance and employability."
    },
    {
      question: "Workshops and seminars are:",
      options: ["Interactive sessions to enhance skills", "Mining workshops", "Factory workshops", "Farm workshops"],
      correctAnswer: "Interactive sessions to enhance skills",
      explanation: "Provide hands-on learning opportunities."
    },
    {
      question: "Certifications indicate:",
      options: ["Competency in a specific skill or area", "Mining certifications", "Factory certifications", "Farm certifications"],
      correctAnswer: "Competency in a specific skill or area",
      explanation: "Validated by recognized institutions or organizations."
    },
    {
      question: "Soft skills training includes:",
      options: ["Communication, teamwork, and problem-solving", "Mining soft skills", "Factory soft skills", "Farm soft skills"],
      correctAnswer: "Communication, teamwork, and problem-solving",
      explanation: "Enhances interpersonal abilities in professional settings."
    },
    {
      question: "Compliance training ensures:",
      options: ["Employees follow laws and regulations", "Mining compliance", "Factory compliance", "Farm compliance"],
      correctAnswer: "Employees follow laws and regulations",
      explanation: "Reduces legal and operational risks."
    },
    {
      question: "On-the-job training provides:",
      options: ["Hands-on experience during regular work", "Mining on-the-job", "Factory on-the-job", "Farm on-the-job"],
      correctAnswer: "Hands-on experience during regular work",
      explanation: "Integrates learning with practical application."
    },
    {
      question: "Mentorship programs offer:",
      options: ["Guidance from experienced professionals", "Mining mentorship", "Factory mentorship", "Farm mentorship"],
      correctAnswer: "Guidance from experienced professionals",
      explanation: "Supports growth and career advancement."
    },
    {
      question: "Training needs assessment:",
      options: ["Identifies skill gaps in employees", "Mining assessment", "Factory assessment", "Farm assessment"],
      correctAnswer: "Identifies skill gaps in employees",
      explanation: "Helps design effective programs."
    },
    {
      question: "Learning outcomes should be:",
      options: ["Specific, measurable, and achievable", "Mining outcomes", "Factory outcomes", "Farm outcomes"],
      correctAnswer: "Specific, measurable, and achievable",
      explanation: "Ensures training effectiveness."
    },
    {
      question: "Evaluation of training measures:",
      options: ["Knowledge retention and performance improvement", "Mining evaluation", "Factory evaluation", "Farm evaluation"],
      correctAnswer: "Knowledge retention and performance improvement",
      explanation: "Determines ROI and impact of programs."
    }
  ],
    "Online Learning": [
    {
      question: "Online learning allows:",
      options: ["Access to courses via the internet anytime, anywhere", "Mining online", "Factory online", "Farm online"],
      correctAnswer: "Access to courses via the internet anytime, anywhere",
      explanation: "Learners can study remotely without attending physical classrooms."
    },
    {
      question: "MOOCs stand for:",
      options: ["Massive Open Online Courses", "Mining MOOCs", "Factory MOOCs", "Farm MOOCs"],
      correctAnswer: "Massive Open Online Courses",
      explanation: "Online courses accessible to large audiences."
    },
    {
      question: "Synchronous learning involves:",
      options: ["Real-time interaction between students and instructors", "Mining synchronous", "Factory synchronous", "Farm synchronous"],
      correctAnswer: "Real-time interaction between students and instructors",
      explanation: "Occurs live online, like virtual classrooms or webinars."
    },
    {
      question: "Asynchronous learning allows:",
      options: ["Learning at one's own pace without real-time interaction", "Mining asynchronous", "Factory asynchronous", "Farm asynchronous"],
      correctAnswer: "Learning at one's own pace without real-time interaction",
      explanation: "Includes pre-recorded lectures and self-paced modules."
    },
    {
      question: "Learning analytics track:",
      options: ["Student engagement, progress, and outcomes", "Mining analytics", "Factory analytics", "Farm analytics"],
      correctAnswer: "Student engagement, progress, and outcomes",
      explanation: "Helps educators measure the effectiveness of online programs."
    },
    {
      question: "Gamification in online learning:",
      options: ["Uses rewards, points, and challenges to motivate learners", "Mining gamification", "Factory gamification", "Farm gamification"],
      correctAnswer: "Uses rewards, points, and challenges to motivate learners",
      explanation: "Makes learning interactive and fun."
    },
    {
      question: "Video lectures provide:",
      options: ["Visual and auditory learning content", "Mining video", "Factory video", "Farm video"],
      correctAnswer: "Visual and auditory learning content",
      explanation: "Supports understanding and retention of information."
    },
    {
      question: "Discussion forums enable:",
      options: ["Peer-to-peer interaction and collaboration", "Mining forums", "Factory forums", "Farm forums"],
      correctAnswer: "Peer-to-peer interaction and collaboration",
      explanation: "Encourages engagement and idea exchange among learners."
    },
    {
      question: "Digital assessments include:",
      options: ["Online quizzes, assignments, and exams", "Mining assessments", "Factory assessments", "Farm assessments"],
      correctAnswer: "Online quizzes, assignments, and exams",
      explanation: "Allows efficient evaluation of learning progress."
    },
    {
      question: "Online certifications:",
      options: ["Provide proof of skills or course completion", "Mining certifications", "Factory certifications", "Farm certifications"],
      correctAnswer: "Provide proof of skills or course completion",
      explanation: "Can enhance career opportunities and credibility."
    }
  ],

  "K-12 Education": [
    {
      question: "K-12 education includes:",
      options: ["Kindergarten through 12th grade", "Mining K-12", "Factory K-12", "Farm K-12"],
      correctAnswer: "Kindergarten through 12th grade",
      explanation: "Covers primary and secondary schooling."
    },
    {
      question: "Curriculum design focuses on:",
      options: ["Learning objectives, content, and assessment methods", "Mining curriculum", "Factory curriculum", "Farm curriculum"],
      correctAnswer: "Learning objectives, content, and assessment methods",
      explanation: "Ensures age-appropriate, standards-aligned education."
    },
    {
      question: "Formative assessments:",
      options: ["Monitor student progress during learning", "Mining formative", "Factory formative", "Farm formative"],
      correctAnswer: "Monitor student progress during learning",
      explanation: "Helps teachers adjust instruction for improvement."
    },
    {
      question: "Summative assessments:",
      options: ["Evaluate learning at the end of a unit or course", "Mining summative", "Factory summative", "Farm summative"],
      correctAnswer: "Evaluate learning at the end of a unit or course",
      explanation: "Measures overall achievement and performance."
    },
    {
      question: "Differentiated instruction means:",
      options: ["Tailoring teaching to student needs and abilities", "Mining differentiated", "Factory differentiated", "Farm differentiated"],
      correctAnswer: "Tailoring teaching to student needs and abilities",
      explanation: "Supports diverse learners effectively."
    },
    {
      question: "STEM education emphasizes:",
      options: ["Science, Technology, Engineering, and Math skills", "Mining STEM", "Factory STEM", "Farm STEM"],
      correctAnswer: "Science, Technology, Engineering, and Math skills",
      explanation: "Develops analytical and problem-solving abilities."
    },
    {
      question: "Project-based learning involves:",
      options: ["Hands-on projects to apply knowledge", "Mining project-based", "Factory project-based", "Farm project-based"],
      correctAnswer: "Hands-on projects to apply knowledge",
      explanation: "Encourages critical thinking and collaboration."
    },
    {
      question: "Inclusive education aims to:",
      options: ["Support students with diverse abilities and backgrounds", "Mining inclusive", "Factory inclusive", "Farm inclusive"],
      correctAnswer: "Support students with diverse abilities and backgrounds",
      explanation: "Ensures equitable learning opportunities."
    },
    {
      question: "Digital tools in K-12 can:",
      options: ["Enhance engagement and personalized learning", "Mining digital", "Factory digital", "Farm digital"],
      correctAnswer: "Enhance engagement and personalized learning",
      explanation: "Includes tablets, apps, and interactive platforms."
    },
    {
      question: "Parental involvement helps:",
      options: ["Improve student motivation and achievement", "Mining parental", "Factory parental", "Farm parental"],
      correctAnswer: "Improve student motivation and achievement",
      explanation: "Strengthens learning support outside school."
    }
  ],

  "Corporate Training": [
    {
      question: "Corporate training aims to:",
      options: ["Enhance employee skills and performance", "Mining corporate", "Factory corporate", "Farm corporate"],
      correctAnswer: "Enhance employee skills and performance",
      explanation: "Improves productivity and business outcomes."
    },
    {
      question: "Onboarding programs help:",
      options: ["Integrate new employees into the company culture and processes", "Mining onboarding", "Factory onboarding", "Farm onboarding"],
      correctAnswer: "Integrate new employees into the company culture and processes",
      explanation: "Supports smooth transition and productivity."
    },
    {
      question: "Leadership training develops:",
      options: ["Management and decision-making skills", "Mining leadership", "Factory leadership", "Farm leadership"],
      correctAnswer: "Management and decision-making skills",
      explanation: "Prepares employees for supervisory or executive roles."
    },
    {
      question: "Compliance training ensures:",
      options: ["Employees follow laws and company policies", "Mining compliance", "Factory compliance", "Farm compliance"],
      correctAnswer: "Employees follow laws and company policies",
      explanation: "Reduces risks and legal issues."
    },
    {
      question: "Soft skills training includes:",
      options: ["Communication, teamwork, and conflict resolution", "Mining soft skills", "Factory soft skills", "Farm soft skills"],
      correctAnswer: "Communication, teamwork, and conflict resolution",
      explanation: "Enhances interpersonal abilities in workplace settings."
    },
    {
      question: "E-learning modules in corporate training:",
      options: ["Provide flexible, self-paced learning", "Mining e-learning", "Factory e-learning", "Farm e-learning"],
      correctAnswer: "Provide flexible, self-paced learning",
      explanation: "Allows employees to learn without disrupting work schedules."
    },
    {
      question: "Mentorship programs support:",
      options: ["Guidance and career development", "Mining mentorship", "Factory mentorship", "Farm mentorship"],
      correctAnswer: "Guidance and career development",
      explanation: "Helps employees grow professionally under experienced guidance."
    },
    {
      question: "Performance metrics in training evaluate:",
      options: ["Knowledge retention and skill improvement", "Mining metrics", "Factory metrics", "Farm metrics"],
      correctAnswer: "Knowledge retention and skill improvement",
      explanation: "Determines training effectiveness and ROI."
    },
    {
      question: "Team-building workshops:",
      options: ["Enhance collaboration and trust among employees", "Mining team-building", "Factory team-building", "Farm team-building"],
      correctAnswer: "Enhance collaboration and trust among employees",
      explanation: "Strengthens workplace relationships."
    },
    {
      question: "Blended learning combines:",
      options: ["Online digital learning with in-person sessions", "Mining blended", "Factory blended", "Farm blended"],
      correctAnswer: "Online digital learning with in-person sessions",
      explanation: "Provides a flexible and comprehensive learning experience."
    }
  ],

  "Language Learning": [
    {
      question: "Language learning focuses on:",
      options: ["Developing reading, writing, listening, and speaking skills", "Mining language", "Factory language", "Farm language"],
      correctAnswer: "Developing reading, writing, listening, and speaking skills",
      explanation: "Supports communication proficiency in a target language."
    },
    {
      question: "Immersion methods:",
      options: ["Expose learners to the language in real-life contexts", "Mining immersion", "Factory immersion", "Farm immersion"],
      correctAnswer: "Expose learners to the language in real-life contexts",
      explanation: "Accelerates fluency by practical experience."
    },
    {
      question: "Grammar and vocabulary lessons:",
      options: ["Build foundation for correct usage", "Mining grammar", "Factory grammar", "Farm grammar"],
      correctAnswer: "Build foundation for correct usage",
      explanation: "Essential for understanding and communication."
    },
    {
      question: "Speaking practice improves:",
      options: ["Fluency and pronunciation", "Mining speaking", "Factory speaking", "Farm speaking"],
      correctAnswer: "Fluency and pronunciation",
      explanation: "Enhances conversational ability."
    },
    {
      question: "Language apps like Duolingo:",
      options: ["Provide gamified learning experiences", "Mining apps", "Factory apps", "Farm apps"],
      correctAnswer: "Provide gamified learning experiences",
      explanation: "Make learning interactive and fun."
    },
    {
      question: "Language assessments measure:",
      options: ["Proficiency levels and progress", "Mining assessments", "Factory assessments", "Farm assessments"],
      correctAnswer: "Proficiency levels and progress",
      explanation: "Helps learners and teachers track improvement."
    },
    {
      question: "Cultural context is important for:",
      options: ["Understanding idioms, expressions, and etiquette", "Mining cultural", "Factory cultural", "Farm cultural"],
      correctAnswer: "Understanding idioms, expressions, and etiquette",
      explanation: "Enables effective communication."
    },
    {
      question: "Listening exercises develop:",
      options: ["Comprehension and recognition of spoken language", "Mining listening", "Factory listening", "Farm listening"],
      correctAnswer: "Comprehension and recognition of spoken language",
      explanation: "Critical for real-world conversations."
    },
    {
      question: "Language exchange programs:",
      options: ["Pair learners to practice with native speakers", "Mining exchange", "Factory exchange", "Farm exchange"],
      correctAnswer: "Pair learners to practice with native speakers",
      explanation: "Provides practical speaking opportunities."
    },
    {
      question: "Online platforms support:",
      options: ["Remote learning, lessons, and tutor interaction", "Mining platforms", "Factory platforms", "Farm platforms"],
      correctAnswer: "Remote learning, lessons, and tutor interaction",
      explanation: "Offers flexibility and accessibility for learners."
    }
  ],
    "Special Education": [
    {
      question: "Special education supports:",
      options: ["Students with disabilities or learning differences", "Mining special", "Factory special", "Farm special"],
      correctAnswer: "Students with disabilities or learning differences",
      explanation: "Provides tailored instruction to meet unique needs."
    },
    {
      question: "Individualized Education Programs (IEPs) are:",
      options: ["Customized learning plans for students", "Mining IEP", "Factory IEP", "Farm IEP"],
      correctAnswer: "Customized learning plans for students",
      explanation: "Defines goals, services, and accommodations."
    },
    {
      question: "Assistive technology includes:",
      options: ["Tools like speech-to-text and hearing aids", "Mining assistive", "Factory assistive", "Farm assistive"],
      correctAnswer: "Tools like speech-to-text and hearing aids",
      explanation: "Supports accessibility and learning participation."
    },
    {
      question: "Inclusion in education means:",
      options: ["Integrating students with disabilities in mainstream classrooms", "Mining inclusion", "Factory inclusion", "Farm inclusion"],
      correctAnswer: "Integrating students with disabilities in mainstream classrooms",
      explanation: "Promotes equality and social interaction."
    },
    {
      question: "Specialized instruction addresses:",
      options: ["Academic, behavioral, and social-emotional needs", "Mining specialized", "Factory specialized", "Farm specialized"],
      correctAnswer: "Academic, behavioral, and social-emotional needs",
      explanation: "Supports holistic student development."
    },
    {
      question: "Collaboration with families ensures:",
      options: ["Better support and progress monitoring", "Mining collaboration", "Factory collaboration", "Farm collaboration"],
      correctAnswer: "Better support and progress monitoring",
      explanation: "Strengthens learning consistency at school and home."
    },
    {
      question: "Early intervention is important for:",
      options: ["Addressing developmental delays as soon as possible", "Mining early", "Factory early", "Farm early"],
      correctAnswer: "Addressing developmental delays as soon as possible",
      explanation: "Improves long-term educational outcomes."
    },
    {
      question: "Behavioral support plans help:",
      options: ["Manage challenging behaviors constructively", "Mining behavioral", "Factory behavioral", "Farm behavioral"],
      correctAnswer: "Manage challenging behaviors constructively",
      explanation: "Promotes positive learning environments."
    },
    {
      question: "Specialized assessments:",
      options: ["Identify student strengths and areas of need", "Mining assessment", "Factory assessment", "Farm assessment"],
      correctAnswer: "Identify student strengths and areas of need",
      explanation: "Guides appropriate instructional strategies."
    },
    {
      question: "Professional development for educators includes:",
      options: ["Training on disability awareness and strategies", "Mining professional", "Factory professional", "Farm professional"],
      correctAnswer: "Training on disability awareness and strategies",
      explanation: "Equips teachers to support diverse learners effectively."
    }
  ],

  "Early Childhood Education": [
    {
      question: "Early childhood education focuses on:",
      options: ["Learning and development from birth to age 8", "Mining early childhood", "Factory early childhood", "Farm early childhood"],
      correctAnswer: "Learning and development from birth to age 8",
      explanation: "Covers foundational cognitive, social, and emotional skills."
    },
    {
      question: "Play-based learning promotes:",
      options: ["Cognitive and social development through interactive play", "Mining play", "Factory play", "Farm play"],
      correctAnswer: "Cognitive and social development through interactive play",
      explanation: "Engages children while supporting growth."
    },
    {
      question: "Early literacy includes:",
      options: ["Reading, writing, and language exposure", "Mining literacy", "Factory literacy", "Farm literacy"],
      correctAnswer: "Reading, writing, and language exposure",
      explanation: "Prepares children for formal education."
    },
    {
      question: "Social-emotional learning teaches:",
      options: ["Empathy, self-regulation, and collaboration", "Mining SEL", "Factory SEL", "Farm SEL"],
      correctAnswer: "Empathy, self-regulation, and collaboration",
      explanation: "Builds healthy relationships and behavior."
    },
    {
      question: "Family engagement supports:",
      options: ["Learning continuity and child development at home", "Mining family", "Factory family", "Farm family"],
      correctAnswer: "Learning continuity and child development at home",
      explanation: "Strengthens overall education outcomes."
    },
    {
      question: "Early childhood assessments:",
      options: ["Monitor developmental milestones and learning progress", "Mining assessments", "Factory assessments", "Farm assessments"],
      correctAnswer: "Monitor developmental milestones and learning progress",
      explanation: "Guides instruction and interventions."
    },
    {
      question: "Inclusive early childhood programs:",
      options: ["Accommodate children of all abilities", "Mining inclusive", "Factory inclusive", "Farm inclusive"],
      correctAnswer: "Accommodate children of all abilities",
      explanation: "Fosters diversity and equity in learning."
    },
    {
      question: "Teacher-child ratios are important for:",
      options: ["Ensuring individualized attention and safety", "Mining ratios", "Factory ratios", "Farm ratios"],
      correctAnswer: "Ensuring individualized attention and safety",
      explanation: "Supports quality care and instruction."
    },
    {
      question: "Hands-on activities develop:",
      options: ["Fine motor, problem-solving, and critical thinking skills", "Mining activities", "Factory activities", "Farm activities"],
      correctAnswer: "Fine motor, problem-solving, and critical thinking skills",
      explanation: "Encourages practical learning experiences."
    },
    {
      question: "Curriculum frameworks guide:",
      options: ["Age-appropriate learning goals and experiences", "Mining frameworks", "Factory frameworks", "Farm frameworks"],
      correctAnswer: "Age-appropriate learning goals and experiences",
      explanation: "Ensures consistent quality in early education."
    }
  ],

  "Career Development": [
    {
      question: "Career development helps individuals:",
      options: ["Plan and achieve career goals", "Mining career", "Factory career", "Farm career"],
      correctAnswer: "Plan and achieve career goals",
      explanation: "Supports long-term professional growth."
    },
    {
      question: "Career counseling provides:",
      options: ["Guidance on career choices and skill development", "Mining counseling", "Factory counseling", "Farm counseling"],
      correctAnswer: "Guidance on career choices and skill development",
      explanation: "Helps individuals make informed decisions."
    },
    {
      question: "Job shadowing allows:",
      options: ["Observation of professionals in their work environment", "Mining shadowing", "Factory shadowing", "Farm shadowing"],
      correctAnswer: "Observation of professionals in their work environment",
      explanation: "Provides practical insights into careers."
    },
    {
      question: "Resume workshops teach:",
      options: ["Effective ways to present skills and experience", "Mining resume", "Factory resume", "Farm resume"],
      correctAnswer: "Effective ways to present skills and experience",
      explanation: "Improves chances in job applications."
    },
    {
      question: "Networking helps:",
      options: ["Build professional relationships and opportunities", "Mining networking", "Factory networking", "Farm networking"],
      correctAnswer: "Build professional relationships and opportunities",
      explanation: "Essential for career advancement."
    },
    {
      question: "Skill assessments identify:",
      options: ["Strengths and areas for improvement", "Mining assessments", "Factory assessments", "Farm assessments"],
      correctAnswer: "Strengths and areas for improvement",
      explanation: "Guides career planning and learning focus."
    },
    {
      question: "Internships provide:",
      options: ["Practical work experience in a field", "Mining internships", "Factory internships", "Farm internships"],
      correctAnswer: "Practical work experience in a field",
      explanation: "Bridges education with real-world application."
    },
    {
      question: "Career planning includes:",
      options: ["Goal setting, skill development, and job exploration", "Mining planning", "Factory planning", "Farm planning"],
      correctAnswer: "Goal setting, skill development, and job exploration",
      explanation: "Creates a roadmap for professional growth."
    },
    {
      question: "Professional portfolios showcase:",
      options: ["Skills, achievements, and projects", "Mining portfolios", "Factory portfolios", "Farm portfolios"],
      correctAnswer: "Skills, achievements, and projects",
      explanation: "Helps demonstrate competency to employers."
    },
    {
      question: "Continuing education supports:",
      options: ["Ongoing learning to maintain or enhance skills", "Mining continuing", "Factory continuing", "Farm continuing"],
      correctAnswer: "Ongoing learning to maintain or enhance skills",
      explanation: "Keeps professionals competitive and updated."
    }
  ],

  "Educational Publishing": [
    {
      question: "Educational publishing produces:",
      options: ["Textbooks, workbooks, and digital learning materials", "Mining publishing", "Factory publishing", "Farm publishing"],
      correctAnswer: "Textbooks, workbooks, and digital learning materials",
      explanation: "Provides structured content for learners and teachers."
    },
    {
      question: "Curriculum alignment ensures:",
      options: ["Materials match educational standards", "Mining alignment", "Factory alignment", "Farm alignment"],
      correctAnswer: "Materials match educational standards",
      explanation: "Supports effective teaching and assessment."
    },
    {
      question: "Digital textbooks allow:",
      options: ["Interactive and accessible content online", "Mining digital", "Factory digital", "Farm digital"],
      correctAnswer: "Interactive and accessible content online",
      explanation: "Enhances engagement and flexibility."
    },
    {
      question: "Assessment tools include:",
      options: ["Quizzes, exercises, and test banks", "Mining assessment", "Factory assessment", "Farm assessment"],
      correctAnswer: "Quizzes, exercises, and test banks",
      explanation: "Helps teachers evaluate student learning."
    },
    {
      question: "Copyright in publishing protects:",
      options: ["Authors’ and publishers’ intellectual property", "Mining copyright", "Factory copyright", "Farm copyright"],
      correctAnswer: "Authors’ and publishers’ intellectual property",
      explanation: "Prevents unauthorized reproduction or distribution."
    },
    {
      question: "Open educational resources (OER) are:",
      options: ["Free learning materials for educators and students", "Mining OER", "Factory OER", "Farm OER"],
      correctAnswer: "Free learning materials for educators and students",
      explanation: "Promotes equitable access to education."
    },
    {
      question: "Print-on-demand reduces:",
      options: ["Overproduction and waste", "Mining POD", "Factory POD", "Farm POD"],
      correctAnswer: "Overproduction and waste",
      explanation: "Provides efficient and sustainable printing solutions."
    },
    {
      question: "Supplemental materials support:",
      options: ["Additional practice and enrichment for students", "Mining supplemental", "Factory supplemental", "Farm supplemental"],
      correctAnswer: "Additional practice and enrichment for students",
      explanation: "Enhances learning outcomes alongside main curriculum."
    },
    {
      question: "Interactive e-books can include:",
      options: ["Quizzes, animations, and multimedia content", "Mining interactive", "Factory interactive", "Farm interactive"],
      correctAnswer: "Quizzes, animations, and multimedia content",
      explanation: "Engages learners and improves retention."
    },
    {
      question: "Teacher guides provide:",
      options: ["Instructions and resources for effective instruction", "Mining guides", "Factory guides", "Farm guides"],
      correctAnswer: "Instructions and resources for effective instruction",
      explanation: "Helps teachers implement curriculum efficiently."
    }
  ],

  "Educational Consulting": [
    {
      question: "Educational consulting provides:",
      options: ["Guidance on curriculum, assessment, and teaching strategies", "Mining consulting", "Factory consulting", "Farm consulting"],
      correctAnswer: "Guidance on curriculum, assessment, and teaching strategies",
      explanation: "Supports schools and institutions to improve outcomes."
    },
    {
      question: "Consultants assist with:",
      options: ["Policy development, accreditation, and training", "Mining assistance", "Factory assistance", "Farm assistance"],
      correctAnswer: "Policy development, accreditation, and training",
      explanation: "Enhances institutional effectiveness and compliance."
    },
    {
      question: "Program evaluation measures:",
      options: ["Effectiveness and impact of educational initiatives", "Mining evaluation", "Factory evaluation", "Farm evaluation"],
      correctAnswer: "Effectiveness and impact of educational initiatives",
      explanation: "Provides data-driven insights for improvement."
    },
    {
      question: "Professional development consulting helps:",
      options: ["Train educators and staff", "Mining development", "Factory development", "Farm development"],
      correctAnswer: "Train educators and staff",
      explanation: "Builds capacity within educational institutions."
    },
    {
      question: "Technology integration consulting supports:",
      options: ["Effective use of EdTech and digital tools", "Mining technology", "Factory technology", "Farm technology"],
      correctAnswer: "Effective use of EdTech and digital tools",
      explanation: "Enhances teaching and learning outcomes."
    },
    {
      question: "Accreditation consulting helps:",
      options: ["Institutions meet quality and regulatory standards", "Mining accreditation", "Factory accreditation", "Farm accreditation"],
      correctAnswer: "Institutions meet quality and regulatory standards",
      explanation: "Prepares schools and colleges for recognition."
    },
    {
      question: "Curriculum mapping ensures:",
      options: ["Alignment of learning objectives across courses", "Mining mapping", "Factory mapping", "Farm mapping"],
      correctAnswer: "Alignment of learning objectives across courses",
      explanation: "Maintains consistency and coverage of standards."
    },
    {
      question: "Data-driven decision-making involves:",
      options: ["Using metrics and analytics to guide educational strategies", "Mining data", "Factory data", "Farm data"],
      correctAnswer: "Using metrics and analytics to guide educational strategies",
      explanation: "Improves efficiency and learning outcomes."
    },
    {
      question: "Change management consulting supports:",
      options: ["Smooth implementation of new policies or programs", "Mining change", "Factory change", "Farm change"],
      correctAnswer: "Smooth implementation of new policies or programs",
      explanation: "Reduces disruption and ensures adoption."
    },
    {
      question: "Stakeholder engagement includes:",
      options: ["Involving teachers, parents, and administrators in decisions", "Mining stakeholders", "Factory stakeholders", "Farm stakeholders"],
      correctAnswer: "Involving teachers, parents, and administrators in decisions",
      explanation: "Ensures collaboration and support for initiatives."
    }
  ],

  "Vocational Training": [
    {
      question: "Vocational training focuses on:",
      options: ["Practical skills for specific trades and occupations", "Mining vocational", "Factory vocational", "Farm vocational"],
      correctAnswer: "Practical skills for specific trades and occupations",
      explanation: "Prepares learners for immediate employment."
    },
    {
      question: "Apprenticeships provide:",
      options: ["On-the-job training combined with classroom instruction", "Mining apprenticeship", "Factory apprenticeship", "Farm apprenticeship"],
      correctAnswer: "On-the-job training combined with classroom instruction",
      explanation: "Helps learners gain practical experience."
    },
    {
      question: "Certifications indicate:",
      options: ["Competency in a specific trade or skill", "Mining certifications", "Factory certifications", "Farm certifications"],
      correctAnswer: "Competency in a specific trade or skill",
      explanation: "Validates learners’ qualifications for employers."
    },
    {
      question: "Hands-on workshops:",
      options: ["Provide practical experience and skill application", "Mining workshops", "Factory workshops", "Farm workshops"],
      correctAnswer: "Provide practical experience and skill application",
      explanation: "Enhances learning through real-world tasks."
    },
    {
      question: "Vocational schools offer:",
      options: ["Programs in areas like plumbing, IT, healthcare, and automotive", "Mining schools", "Factory schools", "Farm schools"],
      correctAnswer: "Programs in areas like plumbing, IT, healthcare, and automotive",
      explanation: "Covers diverse career-focused pathways."
    },
    {
      question: "Skill assessment helps:",
      options: ["Evaluate learners’ competence and readiness for work", "Mining assessment", "Factory assessment", "Farm assessment"],
      correctAnswer: "Evaluate learners’ competence and readiness for work",
      explanation: "Ensures employability and safety standards."
    },
    {
      question: "Industry partnerships provide:",
      options: ["Real-world exposure and job placement opportunities", "Mining partnerships", "Factory partnerships", "Farm partnerships"],
      correctAnswer: "Real-world exposure and job placement opportunities",
      explanation: "Bridges education with workforce needs."
    },
    {
      question: "Safety training is essential for:",
      options: ["Trades with potential hazards", "Mining safety", "Factory safety", "Farm safety"],
      correctAnswer: "Trades with potential hazards",
      explanation: "Prevents accidents and ensures workplace compliance."
    },
    {
      question: "Continuing vocational education allows:",
      options: ["Updating skills and learning new techniques", "Mining continuing", "Factory continuing", "Farm continuing"],
      correctAnswer: "Updating skills and learning new techniques",
      explanation: "Keeps workers competitive in their field."
    },
    {
      question: "Career readiness programs focus on:",
      options: ["Workplace skills, resume building, and interview preparation", "Mining readiness", "Factory readiness", "Farm readiness"],
      correctAnswer: "Workplace skills, resume building, and interview preparation",
      explanation: "Prepares learners for successful employment."
    }
  ]

  },
  energy:{
 "Renewable Energy": [
    {
      question: "Renewable energy comes from:",
      options: ["Sources that are naturally replenished", "Coal", "Petroleum", "Nuclear waste"],
      correctAnswer: "Sources that are naturally replenished",
      explanation: "Examples include solar, wind, hydro, and geothermal energy."
    },
    {
      question: "Solar energy converts:",
      options: ["Sunlight into electricity or heat", "Coal into energy", "Wind into electricity", "Water into electricity"],
      correctAnswer: "Sunlight into electricity or heat",
      explanation: "Uses photovoltaic panels or solar thermal systems."
    },
    {
      question: "Wind energy uses:",
      options: ["Turbines to generate electricity", "Solar panels", "Hydropower", "Coal plants"],
      correctAnswer: "Turbines to generate electricity",
      explanation: "Wind turns blades connected to generators."
    },
    {
      question: "Hydropower generates electricity from:",
      options: ["Flowing or falling water", "Wind", "Sunlight", "Fossil fuels"],
      correctAnswer: "Flowing or falling water",
      explanation: "Uses dams or run-of-the-river systems."
    },
    {
      question: "Geothermal energy taps into:",
      options: ["Heat from the Earth’s interior", "Solar radiation", "Wind currents", "Ocean waves"],
      correctAnswer: "Heat from the Earth’s interior",
      explanation: "Used for electricity and direct heating."
    },
    {
      question: "Biomass energy comes from:",
      options: ["Organic materials like wood or crop waste", "Coal", "Natural gas", "Wind"],
      correctAnswer: "Organic materials like wood or crop waste",
      explanation: "Can be burned or converted into biofuels."
    },
    {
      question: "Renewables help reduce:",
      options: ["Greenhouse gas emissions", "Wind speed", "Water consumption", "Mining output"],
      correctAnswer: "Greenhouse gas emissions",
      explanation: "Promotes cleaner energy and climate sustainability."
    },
    {
      question: "Grid integration of renewables requires:",
      options: ["Balancing supply with demand", "More coal plants", "Higher water use", "Less electricity"],
      correctAnswer: "Balancing supply with demand",
      explanation: "Ensures stability despite intermittent sources like wind and solar."
    },
    {
      question: "Offshore wind farms are located:",
      options: ["In oceans or large water bodies", "In deserts", "On mountains", "Underground"],
      correctAnswer: "In oceans or large water bodies",
      explanation: "Leverages stronger and consistent winds."
    },
    {
      question: "Renewable energy adoption reduces:",
      options: ["Dependence on fossil fuels", "Water supply", "Solar output", "Air pressure"],
      correctAnswer: "Dependence on fossil fuels",
      explanation: "Helps diversify energy sources and enhance energy security."
    }
  ],

  "Clean Technology": [
    {
      question: "Clean technology aims to:",
      options: ["Reduce environmental impact while providing services", "Increase fossil fuel use", "Pollute water", "Burn coal efficiently"],
      correctAnswer: "Reduce environmental impact while providing services",
      explanation: "Includes sustainable energy, water, and waste solutions."
    },
    {
      question: "Carbon capture technology:",
      options: ["Removes CO2 from emissions", "Generates electricity from coal", "Produces oil", "Measures wind speed"],
      correctAnswer: "Removes CO2 from emissions",
      explanation: "Helps mitigate climate change."
    },
    {
      question: "Energy-efficient appliances:",
      options: ["Use less energy to perform the same function", "Consume more energy", "Generate energy", "Store energy chemically"],
      correctAnswer: "Use less energy to perform the same function",
      explanation: "Reduces electricity consumption and costs."
    },
    {
      question: "Electric vehicles (EVs) are part of:",
      options: ["Clean transportation technology", "Fossil fuel cars", "Coal mining", "Nuclear plants"],
      correctAnswer: "Clean transportation technology",
      explanation: "Reduce emissions compared to conventional vehicles."
    },
    {
      question: "Sustainable building materials:",
      options: ["Minimize environmental impact during production", "Are always plastic", "Increase CO2 emissions", "Require mining"],
      correctAnswer: "Minimize environmental impact during production",
      explanation: "Include recycled, low-carbon, or locally sourced materials."
    },
    {
      question: "Water purification technologies help:",
      options: ["Provide clean water with minimal environmental footprint", "Increase water pollution", "Use fossil fuels", "Reduce energy efficiency"],
      correctAnswer: "Provide clean water with minimal environmental footprint",
      explanation: "Supports public health and sustainability."
    },
    {
      question: "Smart meters monitor:",
      options: ["Energy consumption in real-time", "Water temperature", "Wind speed", "Nuclear radiation"],
      correctAnswer: "Energy consumption in real-time",
      explanation: "Helps households and utilities optimize energy use."
    },
    {
      question: "Clean tech reduces:",
      options: ["Pollution and greenhouse gas emissions", "Renewable energy", "Water supply", "Wind power"],
      correctAnswer: "Pollution and greenhouse gas emissions",
      explanation: "Promotes a sustainable economy."
    },
    {
      question: "Battery recycling in clean tech:",
      options: ["Reduces hazardous waste and recovers materials", "Increases emissions", "Pollutes rivers", "Depletes lithium"],
      correctAnswer: "Reduces hazardous waste and recovers materials",
      explanation: "Supports circular economy practices."
    },
    {
      question: "Lifecycle assessment in clean tech measures:",
      options: ["Environmental impact from production to disposal", "Battery voltage", "Wind speed", "Fossil fuel energy"],
      correctAnswer: "Environmental impact from production to disposal",
      explanation: "Ensures products are sustainable across their entire life."
    }
  ],

  "Oil & Gas": [
    {
      question: "Upstream activities in oil & gas involve:",
      options: ["Exploration and production", "Refining", "Distribution", "Marketing"],
      correctAnswer: "Exploration and production",
      explanation: "Includes finding and extracting crude oil or natural gas."
    },
    {
      question: "Downstream activities include:",
      options: ["Refining, distribution, and sales", "Exploration", "Drilling", "Pipeline maintenance"],
      correctAnswer: "Refining, distribution, and sales",
      explanation: "Processes crude oil into usable products."
    },
    {
      question: "Natural gas is primarily composed of:",
      options: ["Methane (CH4)", "CO2", "Hydrogen", "Nitrogen"],
      correctAnswer: "Methane (CH4)",
      explanation: "Used for heating, electricity, and industrial purposes."
    },
    {
      question: "Offshore drilling occurs:",
      options: ["In oceans and large water bodies", "Deserts", "Mountains", "Urban areas"],
      correctAnswer: "In oceans and large water bodies",
      explanation: "Requires specialized platforms for extraction."
    },
    {
      question: "Hydraulic fracturing (fracking) is used to:",
      options: ["Release oil and gas from shale formations", "Refine crude oil", "Burn natural gas", "Measure pipeline flow"],
      correctAnswer: "Release oil and gas from shale formations",
      explanation: "Involves high-pressure fluid to fracture rock."
    },
    {
      question: "Oil spills impact:",
      options: ["Marine and coastal ecosystems", "Wind energy", "Solar panels", "Coal mines"],
      correctAnswer: "Marine and coastal ecosystems",
      explanation: "Causes environmental and economic damage."
    },
    {
      question: "Refineries convert:",
      options: ["Crude oil into fuel and petrochemical products", "Natural gas into coal", "Solar energy into electricity", "Wind energy into electricity"],
      correctAnswer: "Crude oil into fuel and petrochemical products",
      explanation: "Produces gasoline, diesel, and other products."
    },
    {
      question: "Pipeline safety measures:",
      options: ["Prevent leaks and explosions", "Increase extraction", "Burn gas", "Reduce renewable energy"],
      correctAnswer: "Prevent leaks and explosions",
      explanation: "Essential for worker and environmental safety."
    },
    {
      question: "Liquefied natural gas (LNG) is:",
      options: ["Natural gas cooled to liquid for transport", "Crude oil derivative", "Coal gas", "Methane gas in pipelines"],
      correctAnswer: "Natural gas cooled to liquid for transport",
      explanation: "Facilitates shipping over long distances."
    },
    {
      question: "Oil & gas companies face:",
      options: ["Environmental regulations and market volatility", "Solar panel challenges", "Wind turbine maintenance", "Hydropower dams"],
      correctAnswer: "Environmental regulations and market volatility",
      explanation: "Affects operational and financial planning."
    }
  ],

  "Nuclear Energy": [
    {
      question: "Nuclear energy generates electricity through:",
      options: ["Fission of atomic nuclei", "Solar panels", "Wind turbines", "Hydropower"],
      correctAnswer: "Fission of atomic nuclei",
      explanation: "Splitting atoms releases heat to produce steam and electricity."
    },
    {
      question: "Radioactive waste requires:",
      options: ["Careful handling and long-term storage", "Immediate burning", "Mixing with water", "Exposure to sunlight"],
      correctAnswer: "Careful handling and long-term storage",
      explanation: "Reduces risks to humans and the environment."
    },
    {
      question: "Nuclear reactors use:",
      options: ["Uranium or plutonium as fuel", "Coal", "Natural gas", "Solar panels"],
      correctAnswer: "Uranium or plutonium as fuel",
      explanation: "Fission reactions produce heat for electricity generation."
    },
    {
      question: "Nuclear energy produces:",
      options: ["Minimal greenhouse gas emissions", "CO2", "Methane", "Sulfur dioxide"],
      correctAnswer: "Minimal greenhouse gas emissions",
      explanation: "Helps combat climate change compared to fossil fuels."
    },
    {
      question: "Cooling systems in nuclear plants:",
      options: ["Remove heat from the reactor core", "Store fuel", "Generate coal", "Capture wind energy"],
      correctAnswer: "Remove heat from the reactor core",
      explanation: "Prevents overheating and ensures safety."
    },
    {
      question: "Nuclear accidents require:",
      options: ["Emergency response and containment measures", "Solar panels", "Wind turbines", "Coal mining"],
      correctAnswer: "Emergency response and containment measures",
      explanation: "Minimizes human and environmental impact."
    },
    {
      question: "Nuclear power contributes to:",
      options: ["Stable baseload electricity supply", "Intermittent energy only", "Coal use", "Wind energy"],
      correctAnswer: "Stable baseload electricity supply",
      explanation: "Provides consistent energy regardless of weather."
    },
    {
      question: "Fusion energy differs from fission because it:",
      options: ["Combines nuclei instead of splitting them", "Splits uranium", "Uses coal", "Generates methane"],
      correctAnswer: "Combines nuclei instead of splitting them",
      explanation: "Fusion is still experimental but offers clean energy potential."
    },
    {
      question: "Nuclear proliferation concerns:",
      options: ["Spread of nuclear weapons technology", "Solar technology", "Wind farms", "Coal plants"],
      correctAnswer: "Spread of nuclear weapons technology",
      explanation: "Requires international monitoring and agreements."
    },
    {
      question: "Spent fuel is:",
      options: ["Used nuclear fuel removed from reactors", "Unused uranium", "Solar panel waste", "Coal ash"],
      correctAnswer: "Used nuclear fuel removed from reactors",
      explanation: "Needs safe handling due to radioactivity."
    }
  ],
    "Energy Management": [
    {
      question: "Energy management aims to:",
      options: ["Optimize energy use and reduce costs", "Increase fossil fuel consumption", "Ignore efficiency", "Store energy in coal"],
      correctAnswer: "Optimize energy use and reduce costs",
      explanation: "Helps organizations save money and lower emissions."
    },
    {
      question: "Demand-side management involves:",
      options: ["Controlling energy use at the consumer end", "Mining energy", "Building power plants", "Storing coal"],
      correctAnswer: "Controlling energy use at the consumer end",
      explanation: "Reduces peak demand and grid stress."
    },
    {
      question: "Energy audits:",
      options: ["Assess energy consumption and identify savings opportunities", "Produce electricity", "Refine oil", "Measure water quality"],
      correctAnswer: "Assess energy consumption and identify savings opportunities",
      explanation: "Provides actionable recommendations for efficiency."
    },
    {
      question: "Smart meters support:",
      options: ["Real-time monitoring and usage analysis", "Generate electricity", "Store energy", "Produce coal"],
      correctAnswer: "Real-time monitoring and usage analysis",
      explanation: "Enables informed decisions and cost reduction."
    },
    {
      question: "Peak load management helps:",
      options: ["Reduce energy consumption during high-demand periods", "Increase fossil fuel use", "Store water", "Generate nuclear energy"],
      correctAnswer: "Reduce energy consumption during high-demand periods",
      explanation: "Prevents grid overload and outages."
    },
    {
      question: "Energy benchmarking compares:",
      options: ["Energy performance against standards or peers", "Wind turbines", "Solar panels", "Coal output"],
      correctAnswer: "Energy performance against standards or peers",
      explanation: "Identifies areas for improvement."
    },
    {
      question: "Renewable integration in energy management:",
      options: ["Balances supply from variable renewable sources", "Burns coal", "Measures oil", "Stores gas"],
      correctAnswer: "Balances supply from variable renewable sources",
      explanation: "Ensures reliability despite intermittent generation."
    },
    {
      question: "Energy storage systems:",
      options: ["Store electricity for later use", "Consume coal", "Generate gas", "Increase emissions"],
      correctAnswer: "Store electricity for later use",
      explanation: "Supports peak demand and grid stability."
    },
    {
      question: "Building automation systems optimize:",
      options: ["Lighting, HVAC, and energy use", "Coal mining", "Water storage", "Solar panels only"],
      correctAnswer: "Lighting, HVAC, and energy use",
      explanation: "Improves efficiency and comfort."
    },
    {
      question: "ISO 50001 standard relates to:",
      options: ["Energy management systems", "Water quality", "Mining regulations", "Nuclear safety"],
      correctAnswer: "Energy management systems",
      explanation: "Provides a framework for systematic energy performance improvement."
    }
  ],

  "Utilities": [
    {
      question: "Utilities provide:",
      options: ["Essential services like electricity, water, and gas", "Coal mining", "Oil refining", "Nuclear waste disposal"],
      correctAnswer: "Essential services like electricity, water, and gas",
      explanation: "Critical for households, businesses, and industries."
    },
    {
      question: "Electric utilities generate and distribute:",
      options: ["Electricity to consumers", "Water", "Natural gas", "Coal"],
      correctAnswer: "Electricity to consumers",
      explanation: "Includes power plants, transmission, and distribution networks."
    },
    {
      question: "Water utilities manage:",
      options: ["Supply, treatment, and distribution of water", "Oil refining", "Wind turbines", "Coal plants"],
      correctAnswer: "Supply, treatment, and distribution of water",
      explanation: "Ensures clean and reliable water for communities."
    },
    {
      question: "Gas utilities supply:",
      options: ["Natural gas for heating, cooking, and industrial use", "Solar energy", "Coal", "Hydropower"],
      correctAnswer: "Natural gas for heating, cooking, and industrial use",
      explanation: "Delivered via pipelines to consumers."
    },
    {
      question: "Utility regulation ensures:",
      options: ["Fair pricing, reliability, and safety", "Mining", "Solar efficiency", "Wind output"],
      correctAnswer: "Fair pricing, reliability, and safety",
      explanation: "Protects consumers and ensures service quality."
    },
    {
      question: "Smart grids help utilities by:",
      options: ["Monitoring and managing energy flows efficiently", "Mining coal", "Generating oil", "Purifying water"],
      correctAnswer: "Monitoring and managing energy flows efficiently",
      explanation: "Supports renewable integration and demand response."
    },
    {
      question: "Utility maintenance ensures:",
      options: ["Reliable service and infrastructure safety", "Coal mining", "Solar panel cleaning", "Wind turbine repair only"],
      correctAnswer: "Reliable service and infrastructure safety",
      explanation: "Prevents outages and accidents."
    },
    {
      question: "Customer service in utilities includes:",
      options: ["Billing, support, and outage management", "Coal mining", "Oil refining", "Wind turbines"],
      correctAnswer: "Billing, support, and outage management",
      explanation: "Enhances user satisfaction and engagement."
    },
    {
      question: "Renewable energy in utilities:",
      options: ["Reduces environmental impact and diversifies supply", "Increases coal use", "Generates natural gas", "Purifies water"],
      correctAnswer: "Reduces environmental impact and diversifies supply",
      explanation: "Supports sustainability goals."
    },
    {
      question: "Utility reliability metrics track:",
      options: ["Service interruptions and response times", "Wind speed", "Solar output", "Coal quality"],
      correctAnswer: "Service interruptions and response times",
      explanation: "Measures performance and identifies improvement areas."
    }
  ],

  "Smart Grid Technology": [
    {
      question: "A smart grid uses:",
      options: ["Digital communication to monitor and manage electricity", "Coal plants", "Wind turbines", "Solar panels only"],
      correctAnswer: "Digital communication to monitor and manage electricity",
      explanation: "Enhances efficiency, reliability, and integration of renewables."
    },
    {
      question: "Smart meters provide:",
      options: ["Real-time consumption data to utilities and consumers", "Coal data", "Water flow", "Solar energy"],
      correctAnswer: "Real-time consumption data to utilities and consumers",
      explanation: "Enables better energy management."
    },
    {
      question: "Demand response programs:",
      options: ["Adjust consumer energy use to balance the grid", "Generate coal", "Store natural gas", "Produce wind energy"],
      correctAnswer: "Adjust consumer energy use to balance the grid",
      explanation: "Reduces peak load and prevents outages."
    },
    {
      question: "Integration of renewables in smart grids:",
      options: ["Ensures stable and reliable electricity supply", "Burns fossil fuels", "Generates coal", "Purifies water"],
      correctAnswer: "Ensures stable and reliable electricity supply",
      explanation: "Manages intermittent energy sources effectively."
    },
    {
      question: "Grid automation enables:",
      options: ["Remote monitoring and control of the network", "Solar energy only", "Coal production", "Water treatment"],
      correctAnswer: "Remote monitoring and control of the network",
      explanation: "Improves fault detection and response time."
    },
    {
      question: "Energy storage integration in smart grids:",
      options: ["Balances supply and demand efficiently", "Increases coal use", "Generates oil", "Purifies water"],
      correctAnswer: "Balances supply and demand efficiently",
      explanation: "Helps manage intermittent renewables and peak loads."
    },
    {
      question: "Advanced sensors in smart grids:",
      options: ["Detect faults and monitor performance", "Produce coal", "Generate gas", "Purify water"],
      correctAnswer: "Detect faults and monitor performance",
      explanation: "Improves reliability and prevents outages."
    },
    {
      question: "Smart grid cybersecurity ensures:",
      options: ["Protection from cyberattacks and data breaches", "Mining coal", "Solar efficiency", "Water quality"],
      correctAnswer: "Protection from cyberattacks and data breaches",
      explanation: "Maintains grid security and operational integrity."
    },
    {
      question: "Two-way communication in smart grids allows:",
      options: ["Utilities and consumers to exchange information", "Coal burning", "Oil refining", "Wind measurement"],
      correctAnswer: "Utilities and consumers to exchange information",
      explanation: "Supports real-time demand response and feedback."
    },
    {
      question: "Smart grid technology reduces:",
      options: ["Energy losses and operational costs", "Water supply", "Solar output", "Wind speed"],
      correctAnswer: "Energy losses and operational costs",
      explanation: "Enhances efficiency and sustainability of electricity delivery."
    }
  ],

  "Energy Storage": [
    {
      question: "Energy storage systems store:",
      options: ["Electricity for later use", "Coal", "Oil", "Water"],
      correctAnswer: "Electricity for later use",
      explanation: "Helps balance supply and demand."
    },
    {
      question: "Batteries are used for:",
      options: ["Storing energy in chemical form", "Generating coal", "Solar panels only", "Wind turbines"],
      correctAnswer: "Storing energy in chemical form",
      explanation: "Includes lithium-ion, lead-acid, and flow batteries."
    },
    {
      question: "Pumped hydro storage works by:",
      options: ["Moving water between reservoirs to store energy", "Coal burning", "Wind turbines", "Solar panels"],
      correctAnswer: "Moving water between reservoirs to store energy",
      explanation: "Stores potential energy for later electricity generation."
    },
    {
      question: "Flywheels store energy as:",
      options: ["Rotational kinetic energy", "Coal", "Oil", "Water"],
      correctAnswer: "Rotational kinetic energy",
      explanation: "Provides short-term, high-power energy storage."
    },
    {
      question: "Compressed air energy storage:",
      options: ["Stores energy by compressing air into underground caverns", "Generates oil", "Burns coal", "Solar panels"],
      correctAnswer: "Stores energy by compressing air into underground caverns",
      explanation: "Releases energy by expanding the air to drive turbines."
    },
    {
      question: "Thermal energy storage stores:",
      options: ["Heat or cold for later use", "Coal", "Oil", "Water"],
      correctAnswer: "Heat or cold for later use",
      explanation: "Used for heating, cooling, or power generation."
    },
    {
      question: "Grid-scale storage supports:",
      options: ["Stability and integration of renewable energy", "Coal mining", "Oil refining", "Water treatment"],
      correctAnswer: "Stability and integration of renewable energy",
      explanation: "Helps smooth out intermittent generation."
    },
    {
      question: "Battery degradation occurs due to:",
      options: ["Charge-discharge cycles and aging", "Coal use", "Wind turbines", "Water flow"],
      correctAnswer: "Charge-discharge cycles and aging",
      explanation: "Reduces storage capacity over time."
    },
    {
      question: "Energy storage improves:",
      options: ["Reliability, efficiency, and flexibility of energy systems", "Coal burning", "Oil refining", "Wind farms"],
      correctAnswer: "Reliability, efficiency, and flexibility of energy systems",
      explanation: "Supports modern energy grids and sustainability."
    },
    {
      question: "Hybrid storage systems combine:",
      options: ["Different storage technologies for optimal performance", "Coal and oil", "Water and gas", "Wind and solar only"],
      correctAnswer: "Different storage technologies for optimal performance",
      explanation: "Leverages strengths of multiple systems."
    }
  ],
    "Carbon Management": [
    {
      question: "Carbon management aims to:",
      options: ["Reduce and offset greenhouse gas emissions", "Increase coal usage", "Produce oil", "Burn natural gas"],
      correctAnswer: "Reduce and offset greenhouse gas emissions",
      explanation: "Helps mitigate climate change and comply with regulations."
    },
    {
      question: "Carbon footprint measures:",
      options: ["Total greenhouse gas emissions from an individual or organization", "Energy stored", "Water usage", "Coal mined"],
      correctAnswer: "Total greenhouse gas emissions from an individual or organization",
      explanation: "Helps identify reduction opportunities."
    },
    {
      question: "Carbon trading involves:",
      options: ["Buying and selling emission allowances", "Mining carbon", "Burning coal", "Generating electricity only"],
      correctAnswer: "Buying and selling emission allowances",
      explanation: "Provides financial incentives for emission reductions."
    },
    {
      question: "Carbon offset projects:",
      options: ["Reduce emissions elsewhere to compensate for emissions", "Increase fossil fuel use", "Store coal", "Refine oil"],
      correctAnswer: "Reduce emissions elsewhere to compensate for emissions",
      explanation: "Includes reforestation, renewable energy, and efficiency projects."
    },
    {
      question: "Scope 1 emissions are:",
      options: ["Direct emissions from owned sources", "Indirect electricity emissions", "Transport emissions only", "Waste emissions only"],
      correctAnswer: "Direct emissions from owned sources",
      explanation: "E.g., fuel combustion in company vehicles or factories."
    },
    {
      question: "Scope 2 emissions are:",
      options: ["Indirect emissions from purchased electricity or heat", "Direct emissions", "Fossil fuel mining", "Water use"],
      correctAnswer: "Indirect emissions from purchased electricity or heat",
      explanation: "Depends on the energy mix used by suppliers."
    },
    {
      question: "Carbon capture and storage (CCS) technology:",
      options: ["Removes CO2 from emissions and stores it underground", "Burns coal efficiently", "Generates oil", "Purifies water"],
      correctAnswer: "Removes CO2 from emissions and stores it underground",
      explanation: "Reduces atmospheric greenhouse gas concentrations."
    },
    {
      question: "Life cycle assessment helps in carbon management by:",
      options: ["Evaluating emissions from production to disposal", "Mining coal", "Generating electricity", "Purifying water"],
      correctAnswer: "Evaluating emissions from production to disposal",
      explanation: "Identifies high-impact stages for reduction."
    },
    {
      question: "Net zero means:",
      options: ["Balancing emissions with removals to achieve zero net emissions", "Eliminating all energy use", "Stopping all industry", "Using coal only"],
      correctAnswer: "Balancing emissions with removals to achieve zero net emissions",
      explanation: "Achieves climate neutrality while allowing some emissions."
    },
    {
      question: "Carbon reporting involves:",
      options: ["Tracking and disclosing emissions data", "Burning coal", "Mining gas", "Measuring wind speed"],
      correctAnswer: "Tracking and disclosing emissions data",
      explanation: "Supports transparency and regulatory compliance."
    }
  ],

  "Waste Management": [
    {
      question: "Waste management includes:",
      options: ["Collection, treatment, recycling, and disposal of waste", "Coal mining", "Electricity generation", "Solar panel cleaning"],
      correctAnswer: "Collection, treatment, recycling, and disposal of waste",
      explanation: "Maintains environmental hygiene and resource recovery."
    },
    {
      question: "Recycling reduces:",
      options: ["Raw material consumption and landfill waste", "Coal use", "Oil refining", "Solar production"],
      correctAnswer: "Raw material consumption and landfill waste",
      explanation: "Promotes circular economy and sustainability."
    },
    {
      question: "Composting converts:",
      options: ["Organic waste into nutrient-rich soil", "Coal to gas", "Oil to fuel", "Plastic to energy"],
      correctAnswer: "Organic waste into nutrient-rich soil",
      explanation: "Reduces landfill waste and enriches soil."
    },
    {
      question: "Hazardous waste requires:",
      options: ["Special handling and disposal to prevent harm", "Burning in open air", "Dumping in rivers", "Landfilling only"],
      correctAnswer: "Special handling and disposal to prevent harm",
      explanation: "Protects humans and the environment from toxic materials."
    },
    {
      question: "Electronic waste (e-waste) includes:",
      options: ["Old computers, phones, and electronics", "Coal waste", "Water waste", "Solar panels only"],
      correctAnswer: "Old computers, phones, and electronics",
      explanation: "Contains valuable materials and toxic components."
    },
    {
      question: "Waste-to-energy converts:",
      options: ["Waste materials into electricity or heat", "Coal into gas", "Oil into fuel", "Water into energy"],
      correctAnswer: "Waste materials into electricity or heat",
      explanation: "Reduces landfill waste while generating energy."
    },
    {
      question: "Landfill management prevents:",
      options: ["Leachate contamination and gas emissions", "Coal mining", "Oil spills", "Wind erosion"],
      correctAnswer: "Leachate contamination and gas emissions",
      explanation: "Protects soil, water, and air quality."
    },
    {
      question: "Extended Producer Responsibility (EPR) means:",
      options: ["Producers are responsible for product disposal", "Consumers manage waste", "Government only", "Recycle coal only"],
      correctAnswer: "Producers are responsible for product disposal",
      explanation: "Encourages sustainable product design."
    },
    {
      question: "Segregation of waste helps:",
      options: ["Efficient recycling and disposal", "Coal mining", "Oil refining", "Water purification"],
      correctAnswer: "Efficient recycling and disposal",
      explanation: "Separates recyclable, organic, and hazardous materials."
    },
    {
      question: "Incineration reduces:",
      options: ["Volume of waste and generates energy", "Coal use", "Oil refining", "Water waste"],
      correctAnswer: "Volume of waste and generates energy",
      explanation: "Burns waste at high temperatures safely."
    }
  ],

  "Water & Wastewater": [
    {
      question: "Water utilities ensure:",
      options: ["Safe and reliable drinking water supply", "Coal mining", "Oil refining", "Wind energy"],
      correctAnswer: "Safe and reliable drinking water supply",
      explanation: "Protects public health and sanitation."
    },
    {
      question: "Wastewater treatment removes:",
      options: ["Contaminants before discharge into the environment", "Coal", "Oil", "Solar energy"],
      correctAnswer: "Contaminants before discharge into the environment",
      explanation: "Prevents water pollution and protects ecosystems."
    },
    {
      question: "Primary treatment of wastewater involves:",
      options: ["Physical separation of solids", "Chemical reactions", "Biological oxidation", "Filtration only"],
      correctAnswer: "Physical separation of solids",
      explanation: "Removes large debris and sediments."
    },
    {
      question: "Secondary treatment uses:",
      options: ["Microorganisms to break down organic matter", "Coal", "Oil", "Solar panels"],
      correctAnswer: "Microorganisms to break down organic matter",
      explanation: "Reduces biochemical oxygen demand (BOD) in water."
    },
    {
      question: "Tertiary treatment involves:",
      options: ["Advanced filtration and chemical treatment", "Coal mining", "Oil refining", "Wind turbines"],
      correctAnswer: "Advanced filtration and chemical treatment",
      explanation: "Removes remaining nutrients and pathogens."
    },
    {
      question: "Desalination converts:",
      options: ["Saltwater into freshwater", "Coal into energy", "Oil into gas", "Wastewater into coal"],
      correctAnswer: "Saltwater into freshwater",
      explanation: "Provides potable water in arid regions."
    },
    {
      question: "Stormwater management prevents:",
      options: ["Flooding and water pollution", "Coal mining", "Oil spills", "Solar energy"],
      correctAnswer: "Flooding and water pollution",
      explanation: "Controls runoff and protects infrastructure."
    },
    {
      question: "Water recycling involves:",
      options: ["Treating wastewater for reuse", "Coal burning", "Oil refining", "Wind turbines"],
      correctAnswer: "Treating wastewater for reuse",
      explanation: "Reduces freshwater consumption and pollution."
    },
    {
      question: "Groundwater monitoring ensures:",
      options: ["Sustainable and safe water extraction", "Coal mining", "Oil refining", "Solar panels"],
      correctAnswer: "Sustainable and safe water extraction",
      explanation: "Protects aquifers and water quality."
    },
    {
      question: "UV disinfection in water treatment:",
      options: ["Kills bacteria and viruses without chemicals", "Burns coal", "Generates electricity", "Measures wind speed"],
      correctAnswer: "Kills bacteria and viruses without chemicals",
      explanation: "Provides safe potable water without chemical residues."
    }
  ],

  "Mining": [
    {
      question: "Mining extracts:",
      options: ["Minerals, metals, and other geological materials", "Water", "Solar energy", "Wind energy"],
      correctAnswer: "Minerals, metals, and other geological materials",
      explanation: "Supports construction, energy, and manufacturing industries."
    },
    {
      question: "Surface mining involves:",
      options: ["Removing overlying soil to access resources", "Underground tunnels", "Wind turbines", "Solar panels"],
      correctAnswer: "Removing overlying soil to access resources",
      explanation: "Used for coal, metals, and other deposits near the surface."
    },
    {
      question: "Underground mining is used when:",
      options: ["Resources are deep below the surface", "Solar energy only", "Wind energy only", "Coal mines only"],
      correctAnswer: "Resources are deep below the surface",
      explanation: "Minimizes surface disruption but requires safety measures."
    },
    {
      question: "Mineral processing includes:",
      options: ["Crushing, grinding, and refining ore", "Coal burning", "Oil refining", "Solar panels"],
      correctAnswer: "Crushing, grinding, and refining ore",
      explanation: "Extracts valuable metals and minerals efficiently."
    },
    {
      question: "Environmental management in mining aims to:",
      options: ["Reduce impacts on land, water, and air", "Increase emissions", "Burn coal", "Generate oil"],
      correctAnswer: "Reduce impacts on land, water, and air",
      explanation: "Supports sustainable and responsible mining practices."
    },
    {
      question: "Mine safety includes:",
      options: ["Protecting workers from accidents and hazards", "Mining coal", "Generating electricity", "Solar panels"],
      correctAnswer: "Protecting workers from accidents and hazards",
      explanation: "Critical for underground and surface mining operations."
    },
    {
      question: "Tailings are:",
      options: ["Waste materials left after mineral extraction", "Coal", "Water", "Solar energy"],
      correctAnswer: "Waste materials left after mineral extraction",
      explanation: "Require careful storage to avoid environmental damage."
    },
    {
      question: "Rehabilitation in mining means:",
      options: ["Restoring land after mine closure", "Burning coal", "Oil refining", "Solar panels only"],
      correctAnswer: "Restoring land after mine closure",
      explanation: "Reduces environmental and social impacts."
    },
    {
      question: "Ore grade indicates:",
      options: ["Concentration of valuable minerals in rock", "Coal quality", "Water content", "Solar panel efficiency"],
      correctAnswer: "Concentration of valuable minerals in rock",
      explanation: "Higher grades are more economically valuable."
    },
    {
      question: "Sustainable mining practices include:",
      options: ["Reducing waste, recycling water, and minimizing environmental footprint", "Coal burning", "Oil refining", "Solar panels"],
      correctAnswer: "Reducing waste, recycling water, and minimizing environmental footprint",
      explanation: "Ensures long-term resource and community sustainability."
    }
  ],

  "Environmental Services": [
    {
      question: "Environmental services provide:",
      options: ["Solutions for pollution control, conservation, and sustainability", "Coal mining", "Oil refining", "Wind energy"],
      correctAnswer: "Solutions for pollution control, conservation, and sustainability",
      explanation: "Supports businesses, governments, and communities."
    },
    {
      question: "Environmental impact assessments (EIA):",
      options: ["Evaluate potential effects of projects on ecosystems", "Coal mining", "Oil refining", "Solar panels"],
      correctAnswer: "Evaluate potential effects of projects on ecosystems",
      explanation: "Informs mitigation and decision-making."
    },
    {
      question: "Remediation involves:",
      options: ["Cleaning up contaminated sites", "Mining coal", "Generating oil", "Burning gas"],
      correctAnswer: "Cleaning up contaminated sites",
      explanation: "Restores environmental quality and safety."
    },
    {
      question: "Air quality monitoring measures:",
      options: ["Pollutant levels in the atmosphere", "Coal quality", "Water flow", "Solar energy"],
      correctAnswer: "Pollutant levels in the atmosphere",
      explanation: "Supports public health and regulatory compliance."
    },
    {
      question: "Water quality management ensures:",
      options: ["Safe and clean water for ecosystems and humans", "Coal mining", "Oil refining", "Wind turbines"],
      correctAnswer: "Safe and clean water for ecosystems and humans",
      explanation: "Prevents pollution and protects health."
    },
    {
      question: "Sustainability consulting helps organizations:",
      options: ["Develop and implement eco-friendly practices", "Coal burning", "Oil refining", "Solar panel manufacturing"],
      correctAnswer: "Develop and implement eco-friendly practices",
      explanation: "Improves environmental performance and compliance."
    },
    {
      question: "Waste audits identify:",
      options: ["Opportunities to reduce, reuse, and recycle waste", "Coal mines", "Oil production", "Wind energy"],
      correctAnswer: "Opportunities to reduce, reuse, and recycle waste",
      explanation: "Supports efficient resource management."
    },
    {
      question: "Biodiversity conservation aims to:",
      options: ["Protect species and habitats", "Burn coal", "Generate oil", "Solar panels"],
      correctAnswer: "Protect species and habitats",
      explanation: "Maintains ecosystem balance and resilience."
    },
    {
      question: "Environmental compliance ensures:",
      options: ["Adherence to laws and regulations", "Coal mining", "Oil refining", "Wind energy"],
      correctAnswer: "Adherence to laws and regulations",
      explanation: "Avoids legal penalties and environmental harm."
    },
    {
      question: "Sustainable resource management involves:",
      options: ["Using natural resources responsibly for long-term availability", "Coal burning", "Oil refining", "Solar panels only"],
      correctAnswer: "Using natural resources responsibly for long-term availability",
      explanation: "Supports ecological balance and economic sustainability."
    }
  ]
  },
  consulting:{
    "Management Consulting": [
      {
        question: "What is the main goal of management consulting?",
        options: [
          "Develop software",
          "Improve organizational performance",
          "Audit financial records",
          "Manage daily operations"
        ],
        correctAnswer: "Improve organizational performance",
        explanation: "Management consulting focuses on improving strategy, operations, and efficiency."
      },
      {
        question: "Which framework is commonly used for internal analysis?",
        options: ["SWOT", "PESTLE", "Porter’s Five Forces", "BCG Matrix"],
        correctAnswer: "SWOT",
        explanation: "SWOT analyzes strengths and weaknesses internally."
      },
      {
        question: "What is a client deliverable?",
        options: [
          "Consultant salary",
          "Final output given to the client",
          "Internal memo",
          "Invoice only"
        ],
        correctAnswer: "Final output given to the client",
        explanation: "Deliverables include reports, decks, and recommendations."
      },
      {
        question: "What does KPI stand for?",
        options: [
          "Key Performance Indicator",
          "Known Profit Index",
          "Key Process Input",
          "Knowledge Performance Index"
        ],
        correctAnswer: "Key Performance Indicator",
        explanation: "KPIs measure performance against objectives."
      },
      {
        question: "Which skill is most important for consultants?",
        options: ["Coding", "Communication", "Design", "Hardware repair"],
        correctAnswer: "Communication",
        explanation: "Clear communication is critical for client impact."
      },
      {
        question: "What is benchmarking?",
        options: [
          "Comparing performance against competitors",
          "Hiring new employees",
          "Reducing costs",
          "Setting KPIs"
        ],
        correctAnswer: "Comparing performance against competitors",
        explanation: "Benchmarking compares metrics to industry standards."
      },
      {
        question: "Which firm is part of MBB?",
        options: ["Deloitte", "PwC", "McKinsey", "EY"],
        correctAnswer: "McKinsey",
        explanation: "McKinsey is part of the MBB firms."
      },
      {
        question: "What is change management?",
        options: [
          "Replacing leadership",
          "Managing financial change",
          "Helping organizations adopt change",
          "Updating IT systems"
        ],
        correctAnswer: "Helping organizations adopt change",
        explanation: "Change management focuses on people and adoption."
      },
      {
        question: "What is a case interview?",
        options: [
          "Legal interview",
          "HR discussion",
          "Problem-solving interview",
          "Technical test"
        ],
        correctAnswer: "Problem-solving interview",
        explanation: "Case interviews test analytical thinking."
      },
      {
        question: "Which document summarizes insights visually?",
        options: ["Spreadsheet", "Presentation deck", "Email", "Invoice"],
        correctAnswer: "Presentation deck",
        explanation: "Slide decks are standard consulting outputs."
      }
    ],

    "IT Consulting": [
      {
        question: "What is the role of IT consulting?",
        options: [
          "Hardware manufacturing",
          "Align IT solutions with business goals",
          "Marketing automation",
          "Payroll processing"
        ],
        correctAnswer: "Align IT solutions with business goals",
        explanation: "IT consulting bridges technology and business needs."
      },
      {
        question: "What does ERP stand for?",
        options: [
          "Enterprise Resource Planning",
          "Electronic Revenue Platform",
          "Enterprise Risk Program",
          "External Resource Planning"
        ],
        correctAnswer: "Enterprise Resource Planning",
        explanation: "ERP integrates core business processes."
      },
      {
        question: "Which system manages customer relationships?",
        options: ["ERP", "CRM", "HRMS", "SCM"],
        correctAnswer: "CRM",
        explanation: "CRM systems manage customer interactions."
      },
      {
        question: "What is system integration?",
        options: [
          "Developing new software",
          "Connecting multiple IT systems",
          "Auditing IT assets",
          "Hiring IT staff"
        ],
        correctAnswer: "Connecting multiple IT systems",
        explanation: "Integration ensures systems work together."
      },
      {
        question: "What is cloud migration?",
        options: [
          "Moving offices",
          "Moving data to cloud platforms",
          "Changing vendors",
          "Upgrading hardware"
        ],
        correctAnswer: "Moving data to cloud platforms",
        explanation: "Cloud migration shifts workloads to cloud services."
      },
      {
        question: "Which cloud model offers shared infrastructure?",
        options: ["Private", "Public", "Hybrid", "On-premise"],
        correctAnswer: "Public",
        explanation: "Public cloud shares infrastructure across clients."
      },
      {
        question: "What is cybersecurity assessment?",
        options: [
          "Network installation",
          "Evaluating security risks",
          "Software testing",
          "System design"
        ],
        correctAnswer: "Evaluating security risks",
        explanation: "Assessments identify vulnerabilities."
      },
      {
        question: "Which role gathers business requirements?",
        options: ["Developer", "Business Analyst", "Tester", "Admin"],
        correctAnswer: "Business Analyst",
        explanation: "Business analysts translate business needs into IT requirements."
      },
      {
        question: "What is legacy system modernization?",
        options: [
          "Deleting old systems",
          "Upgrading outdated systems",
          "Hiring new staff",
          "Changing vendors"
        ],
        correctAnswer: "Upgrading outdated systems",
        explanation: "Modernization improves performance and scalability."
      },
      {
        question: "Which methodology is iterative?",
        options: ["Waterfall", "Agile", "V-Model", "Spiral"],
        correctAnswer: "Agile",
        explanation: "Agile uses iterative development cycles."
      }
    ],

    "Strategy Consulting": [
      {
        question: "What is strategy consulting focused on?",
        options: [
          "Daily operations",
          "Long-term business direction",
          "Accounting",
          "IT infrastructure"
        ],
        correctAnswer: "Long-term business direction",
        explanation: "Strategy consulting focuses on growth and competitive advantage."
      },
      {
        question: "What does PESTLE analyze?",
        options: [
          "Internal processes",
          "External macro-environment",
          "Financial statements",
          "Customer satisfaction"
        ],
        correctAnswer: "External macro-environment",
        explanation: "PESTLE evaluates political, economic, social factors."
      },
      {
        question: "Which matrix analyzes market growth vs share?",
        options: ["SWOT", "BCG Matrix", "Ansoff", "Porter"],
        correctAnswer: "BCG Matrix",
        explanation: "BCG Matrix evaluates business portfolio."
      },
      {
        question: "What is competitive advantage?",
        options: [
          "Lower employee count",
          "Unique value over competitors",
          "Higher prices",
          "More offices"
        ],
        correctAnswer: "Unique value over competitors",
        explanation: "Competitive advantage differentiates a firm."
      },
      {
        question: "What is market entry strategy?",
        options: [
          "Hiring staff",
          "Entering new markets",
          "Product testing",
          "Customer support"
        ],
        correctAnswer: "Entering new markets",
        explanation: "It defines how to expand geographically or segment-wise."
      },
      {
        question: "What does ROI measure?",
        options: [
          "Risk level",
          "Return on Investment",
          "Revenue only",
          "Operating cost"
        ],
        correctAnswer: "Return on Investment",
        explanation: "ROI measures profitability."
      },
      {
        question: "Which force affects supplier power?",
        options: ["Customers", "Competitors", "Suppliers", "Substitutes"],
        correctAnswer: "Suppliers",
        explanation: "Supplier power is one of Porter’s Five Forces."
      },
      {
        question: "What is cost leadership?",
        options: [
          "Premium pricing",
          "Lowest cost producer",
          "High differentiation",
          "Niche targeting"
        ],
        correctAnswer: "Lowest cost producer",
        explanation: "Cost leadership focuses on efficiency."
      },
      {
        question: "What is differentiation strategy?",
        options: [
          "Lower costs",
          "Unique offerings",
          "Mass marketing",
          "Limited products"
        ],
        correctAnswer: "Unique offerings",
        explanation: "Differentiation focuses on uniqueness."
      },
      {
        question: "What is corporate strategy?",
        options: [
          "Department planning",
          "Overall company direction",
          "Marketing tactics",
          "HR policies"
        ],
        correctAnswer: "Overall company direction",
        explanation: "Corporate strategy defines overall scope and direction."
      }
    ],
    "Digital Transformation": [
      {
        question: "What is digital transformation?",
        options: [
          "Replacing employees with machines",
          "Using digital technology to improve business processes",
          "Migrating data centers",
          "Developing mobile apps only"
        ],
        correctAnswer: "Using digital technology to improve business processes",
        explanation: "Digital transformation integrates digital tech into all business areas."
      },
      {
        question: "Which technology enables scalable computing resources?",
        options: ["Blockchain", "Cloud Computing", "IoT", "AR"],
        correctAnswer: "Cloud Computing",
        explanation: "Cloud provides on-demand scalable resources."
      },
      {
        question: "What role does automation play?",
        options: [
          "Increases manual work",
          "Reduces efficiency",
          "Streamlines repetitive tasks",
          "Stops innovation"
        ],
        correctAnswer: "Streamlines repetitive tasks",
        explanation: "Automation improves speed and accuracy."
      },
      {
        question: "What does RPA stand for?",
        options: [
          "Robotic Process Automation",
          "Rapid Process Analysis",
          "Remote Programming Access",
          "Resource Planning Automation"
        ],
        correctAnswer: "Robotic Process Automation",
        explanation: "RPA automates rule-based processes."
      },
      {
        question: "Which metric measures digital success?",
        options: ["KPIs", "Invoices", "Headcount", "Assets"],
        correctAnswer: "KPIs",
        explanation: "KPIs track transformation outcomes."
      },
      {
        question: "What is customer-centric transformation?",
        options: [
          "Internal-only focus",
          "Improving customer experience",
          "Reducing staff",
          "Outsourcing work"
        ],
        correctAnswer: "Improving customer experience",
        explanation: "Customer-centric models enhance satisfaction."
      },
      {
        question: "What is legacy modernization?",
        options: [
          "Deleting systems",
          "Upgrading outdated systems",
          "Hiring consultants",
          "Buying hardware"
        ],
        correctAnswer: "Upgrading outdated systems",
        explanation: "Modernization improves agility."
      },
      {
        question: "Which tech enables data-driven decisions?",
        options: ["Analytics", "Fax", "Paper records", "Email"],
        correctAnswer: "Analytics",
        explanation: "Analytics converts data into insights."
      },
      {
        question: "What is digital maturity?",
        options: [
          "Company age",
          "Level of digital adoption",
          "Revenue size",
          "Market share"
        ],
        correctAnswer: "Level of digital adoption",
        explanation: "Digital maturity reflects transformation progress."
      },
      {
        question: "Who leads digital strategy?",
        options: ["CIO/CDO", "HR Manager", "Accountant", "Sales Lead"],
        correctAnswer: "CIO/CDO",
        explanation: "Chief Digital/Information Officers lead initiatives."
      }
    ],

    "Business Advisory": [
      {
        question: "What does business advisory focus on?",
        options: [
          "Legal disputes",
          "Strategic and operational guidance",
          "IT development",
          "Payroll"
        ],
        correctAnswer: "Strategic and operational guidance",
        explanation: "Business advisory helps improve performance."
      },
      {
        question: "Which area is commonly advised?",
        options: ["Growth strategy", "Code testing", "UI design", "Network setup"],
        correctAnswer: "Growth strategy",
        explanation: "Advisors guide expansion and optimization."
      },
      {
        question: "What is risk advisory?",
        options: [
          "Ignoring risks",
          "Identifying and managing risks",
          "Buying insurance",
          "Auditing only"
        ],
        correctAnswer: "Identifying and managing risks",
        explanation: "Risk advisory mitigates threats."
      },
      {
        question: "What does compliance mean?",
        options: [
          "Profit maximization",
          "Following laws and regulations",
          "Hiring consultants",
          "Tax filing"
        ],
        correctAnswer: "Following laws and regulations",
        explanation: "Compliance ensures legal adherence."
      },
      {
        question: "Which skill is essential for advisors?",
        options: ["Listening", "Programming", "Drawing", "Welding"],
        correctAnswer: "Listening",
        explanation: "Understanding client needs is critical."
      },
      {
        question: "What is operational efficiency?",
        options: [
          "More staff",
          "Lower productivity",
          "Optimized processes",
          "Higher costs"
        ],
        correctAnswer: "Optimized processes",
        explanation: "Efficiency improves output with fewer resources."
      },
      {
        question: "What is financial advisory?",
        options: [
          "Software deployment",
          "Budgeting and planning support",
          "Hiring staff",
          "Auditing networks"
        ],
        correctAnswer: "Budgeting and planning support",
        explanation: "Financial advisory improves fiscal health."
      },
      {
        question: "What is restructuring?",
        options: [
          "Office relocation",
          "Organizational redesign",
          "Marketing campaign",
          "System upgrade"
        ],
        correctAnswer: "Organizational redesign",
        explanation: "Restructuring improves performance."
      },
      {
        question: "Which output is common?",
        options: ["Advisory report", "Invoice", "Source code", "Poster"],
        correctAnswer: "Advisory report",
        explanation: "Reports summarize findings."
      },
      {
        question: "Who typically hires advisors?",
        options: ["Executives", "Interns", "Vendors", "Students"],
        correctAnswer: "Executives",
        explanation: "Senior leadership seeks advisory support."
      }
    ],

    "Legal Services": [
      {
        question: "What do legal services provide?",
        options: [
          "Financial audits",
          "Legal advice and representation",
          "Software solutions",
          "Marketing strategies"
        ],
        correctAnswer: "Legal advice and representation",
        explanation: "Legal services support law-related matters."
      },
      {
        question: "What is a contract?",
        options: [
          "Verbal promise",
          "Legally binding agreement",
          "Company policy",
          "Invoice"
        ],
        correctAnswer: "Legally binding agreement",
        explanation: "Contracts define obligations."
      },
      {
        question: "What does compliance law ensure?",
        options: [
          "Profit growth",
          "Legal conformity",
          "Tax savings",
          "Operational speed"
        ],
        correctAnswer: "Legal conformity",
        explanation: "Compliance prevents violations."
      },
      {
        question: "What is litigation?",
        options: [
          "Negotiation",
          "Legal dispute in court",
          "Mediation",
          "Consulting"
        ],
        correctAnswer: "Legal dispute in court",
        explanation: "Litigation resolves disputes legally."
      },
      {
        question: "What is intellectual property?",
        options: [
          "Physical assets",
          "Ideas and creations",
          "Financial records",
          "Employee data"
        ],
        correctAnswer: "Ideas and creations",
        explanation: "IP protects inventions and brands."
      },
      {
        question: "Which is a form of IP?",
        options: ["Patent", "Invoice", "Resume", "Policy"],
        correctAnswer: "Patent",
        explanation: "Patents protect inventions."
      },
      {
        question: "What is due diligence?",
        options: [
          "Ignoring risks",
          "Legal investigation",
          "Hiring staff",
          "Marketing analysis"
        ],
        correctAnswer: "Legal investigation",
        explanation: "Due diligence checks legal risks."
      },
      {
        question: "What does corporate law cover?",
        options: [
          "Criminal cases",
          "Business legal matters",
          "Family disputes",
          "Property sales"
        ],
        correctAnswer: "Business legal matters",
        explanation: "Corporate law governs companies."
      },
      {
        question: "What is mediation?",
        options: [
          "Court trial",
          "Third-party dispute resolution",
          "Legal punishment",
          "Compliance audit"
        ],
        correctAnswer: "Third-party dispute resolution",
        explanation: "Mediation avoids litigation."
      },
      {
        question: "Who provides legal opinions?",
        options: ["Lawyers", "Auditors", "Engineers", "Consultants"],
        correctAnswer: "Lawyers",
        explanation: "Lawyers interpret laws."
      }
    ],

    "Accounting & Tax": [
      {
        question: "What is accounting?",
        options: [
          "Marketing analysis",
          "Recording financial transactions",
          "Hiring employees",
          "IT development"
        ],
        correctAnswer: "Recording financial transactions",
        explanation: "Accounting tracks financial activity."
      },
      {
        question: "What is taxation?",
        options: [
          "Company profit",
          "Government levy on income",
          "Internal expense",
          "Investment return"
        ],
        correctAnswer: "Government levy on income",
        explanation: "Taxes fund public services."
      },
      {
        question: "What does GAAP stand for?",
        options: [
          "Generally Accepted Accounting Principles",
          "Global Accounting Access Policy",
          "General Asset Allocation Plan",
          "Government Accounting Act"
        ],
        correctAnswer: "Generally Accepted Accounting Principles",
        explanation: "GAAP standardizes accounting."
      },
      {
        question: "What is an audit?",
        options: [
          "Tax payment",
          "Independent financial examination",
          "Budget creation",
          "Consulting"
        ],
        correctAnswer: "Independent financial examination",
        explanation: "Audits verify accuracy."
      },
      {
        question: "What is a balance sheet?",
        options: [
          "Income report",
          "Assets, liabilities, equity statement",
          "Tax document",
          "Cash forecast"
        ],
        correctAnswer: "Assets, liabilities, equity statement",
        explanation: "Balance sheets show financial position."
      },
      {
        question: "What is depreciation?",
        options: [
          "Asset appreciation",
          "Loss of asset value",
          "Profit increase",
          "Tax exemption"
        ],
        correctAnswer: "Loss of asset value",
        explanation: "Depreciation allocates cost."
      },
      {
        question: "What is tax planning?",
        options: [
          "Tax evasion",
          "Optimizing tax liability legally",
          "Ignoring taxes",
          "Late filing"
        ],
        correctAnswer: "Optimizing tax liability legally",
        explanation: "Tax planning reduces legal burden."
      },
      {
        question: "What is cash flow?",
        options: [
          "Profit only",
          "Movement of cash",
          "Assets only",
          "Liabilities"
        ],
        correctAnswer: "Movement of cash",
        explanation: "Cash flow tracks inflow/outflow."
      },
      {
        question: "What is bookkeeping?",
        options: [
          "Strategic planning",
          "Daily financial recording",
          "Auditing",
          "Budget approval"
        ],
        correctAnswer: "Daily financial recording",
        explanation: "Bookkeeping is transactional."
      },
      {
        question: "Who files tax returns?",
        options: ["Accountants", "Engineers", "Designers", "Developers"],
        correctAnswer: "Accountants",
        explanation: "Accountants manage tax filings."
      }
    ],

    "Human Resources": [
      {
        question: "What is HR responsible for?",
        options: [
          "IT infrastructure",
          "Employee management",
          "Product sales",
          "Legal compliance"
        ],
        correctAnswer: "Employee management",
        explanation: "HR manages people operations."
      },
      {
        question: "What is recruitment?",
        options: [
          "Employee training",
          "Hiring new employees",
          "Payroll processing",
          "Policy making"
        ],
        correctAnswer: "Hiring new employees",
        explanation: "Recruitment fills roles."
      },
      {
        question: "What is onboarding?",
        options: [
          "Employee exit",
          "New employee integration",
          "Salary negotiation",
          "Performance review"
        ],
        correctAnswer: "New employee integration",
        explanation: "Onboarding helps employees settle."
      },
      {
        question: "What is performance appraisal?",
        options: [
          "Hiring process",
          "Evaluating employee performance",
          "Payroll",
          "Training"
        ],
        correctAnswer: "Evaluating employee performance",
        explanation: "Appraisals assess contribution."
      },
      {
        question: "What does HR compliance ensure?",
        options: [
          "Higher profits",
          "Labor law adherence",
          "Automation",
          "Cost cutting"
        ],
        correctAnswer: "Labor law adherence",
        explanation: "Compliance avoids legal issues."
      },
      {
        question: "What is employee engagement?",
        options: [
          "Attendance",
          "Emotional commitment to work",
          "Salary size",
          "Job title"
        ],
        correctAnswer: "Emotional commitment to work",
        explanation: "Engagement improves productivity."
      },
      {
        question: "What is payroll?",
        options: [
          "Hiring process",
          "Salary processing",
          "Training budget",
          "Employee database"
        ],
        correctAnswer: "Salary processing",
        explanation: "Payroll manages compensation."
      },
      {
        question: "What is workforce planning?",
        options: [
          "Office design",
          "Future staffing planning",
          "Recruitment only",
          "Performance review"
        ],
        correctAnswer: "Future staffing planning",
        explanation: "Planning aligns workforce needs."
      },
      {
        question: "Which skill is key in HR?",
        options: ["Empathy", "Coding", "Drafting", "Accounting"],
        correctAnswer: "Empathy",
        explanation: "HR handles people-centric issues."
      },
      {
        question: "What is talent management?",
        options: [
          "Hiring interns",
          "Developing and retaining employees",
          "Payroll",
          "Compliance"
        ],
        correctAnswer: "Developing and retaining employees",
        explanation: "Talent management builds workforce strength."
      }
    ],

    "Marketing Services": [
      {
        question: "What is marketing?",
        options: [
          "Product development",
          "Promoting products and services",
          "Accounting",
          "HR management"
        ],
        correctAnswer: "Promoting products and services",
        explanation: "Marketing drives demand."
      },
      {
        question: "What is branding?",
        options: [
          "Logo design only",
          "Creating brand identity",
          "Selling products",
          "Pricing strategy"
        ],
        correctAnswer: "Creating brand identity",
        explanation: "Branding shapes perception."
      },
      {
        question: "What is digital marketing?",
        options: [
          "TV advertising",
          "Online promotion",
          "Print media",
          "Outdoor ads"
        ],
        correctAnswer: "Online promotion",
        explanation: "Digital marketing uses online channels."
      },
      {
        question: "What does SEO stand for?",
        options: [
          "Search Engine Optimization",
          "Sales Execution Operation",
          "System Efficiency Output",
          "Search Engine Output"
        ],
        correctAnswer: "Search Engine Optimization",
        explanation: "SEO improves search visibility."
      },
      {
        question: "What is content marketing?",
        options: [
          "Direct selling",
          "Valuable content creation",
          "Cold calling",
          "Discount offers"
        ],
        correctAnswer: "Valuable content creation",
        explanation: "Content builds trust."
      },
      {
        question: "What does ROI measure?",
        options: [
          "Marketing cost",
          "Campaign effectiveness",
          "Audience size",
          "Brand value"
        ],
        correctAnswer: "Campaign effectiveness",
        explanation: "ROI measures returns."
      },
      {
        question: "What is market research?",
        options: [
          "Product selling",
          "Customer and market analysis",
          "Advertising",
          "Brand design"
        ],
        correctAnswer: "Customer and market analysis",
        explanation: "Research informs strategy."
      },
      {
        question: "What is lead generation?",
        options: [
          "Hiring leads",
          "Attracting potential customers",
          "Customer service",
          "Sales closing"
        ],
        correctAnswer: "Attracting potential customers",
        explanation: "Leads feed sales pipeline."
      },
      {
        question: "What is a campaign?",
        options: [
          "One-time post",
          "Planned marketing activities",
          "Internal meeting",
          "Press release"
        ],
        correctAnswer: "Planned marketing activities",
        explanation: "Campaigns have objectives."
      },
      {
        question: "Which platform is social media?",
        options: ["LinkedIn", "Excel", "SAP", "Oracle"],
        correctAnswer: "LinkedIn",
        explanation: "LinkedIn is a social platform."
      }
    ],

    "Architecture": [
      {
        question: "What do architects design?",
        options: [
          "Software",
          "Buildings and structures",
          "Marketing plans",
          "Networks"
        ],
        correctAnswer: "Buildings and structures",
        explanation: "Architecture focuses on built environments."
      },
      {
        question: "What is a blueprint?",
        options: [
          "Legal document",
          "Technical drawing",
          "Budget report",
          "Contract"
        ],
        correctAnswer: "Technical drawing",
        explanation: "Blueprints guide construction."
      },
      {
        question: "What does sustainable design focus on?",
        options: [
          "Cost only",
          "Environmental impact",
          "Speed",
          "Aesthetics only"
        ],
        correctAnswer: "Environmental impact",
        explanation: "Sustainability reduces harm."
      },
      {
        question: "What is urban planning?",
        options: [
          "Interior design",
          "City layout planning",
          "Building maintenance",
          "Land sales"
        ],
        correctAnswer: "City layout planning",
        explanation: "Urban planning designs cities."
      },
      {
        question: "What is CAD used for?",
        options: [
          "Accounting",
          "Design drafting",
          "Marketing",
          "HR"
        ],
        correctAnswer: "Design drafting",
        explanation: "CAD creates digital designs."
      },
      {
        question: "What is structural integrity?",
        options: [
          "Visual appeal",
          "Safety and strength",
          "Material cost",
          "Design speed"
        ],
        correctAnswer: "Safety and strength",
        explanation: "Integrity ensures safety."
      },
      {
        question: "Who approves designs?",
        options: ["Authorities", "Contractors", "Clients only", "Engineers"],
        correctAnswer: "Authorities",
        explanation: "Designs require regulatory approval."
      },
      {
        question: "What is interior architecture?",
        options: [
          "Furniture design",
          "Interior space planning",
          "Lighting sales",
          "Decoration only"
        ],
        correctAnswer: "Interior space planning",
        explanation: "Interior architecture optimizes space."
      },
      {
        question: "What is site analysis?",
        options: [
          "Budget check",
          "Land assessment",
          "Design drafting",
          "Client meeting"
        ],
        correctAnswer: "Land assessment",
        explanation: "Site analysis studies conditions."
      },
      {
        question: "What material is commonly used?",
        options: ["Concrete", "Paper", "Plastic", "Glass only"],
        correctAnswer: "Concrete",
        explanation: "Concrete is widely used."
      }
    ],

    "Engineering Services": [
      {
        question: "What do engineering services provide?",
        options: [
          "Legal advice",
          "Technical solutions",
          "Marketing plans",
          "HR policies"
        ],
        correctAnswer: "Technical solutions",
        explanation: "Engineering solves technical problems."
      },
      {
        question: "Which discipline designs machines?",
        options: ["Mechanical", "Civil", "Electrical", "Chemical"],
        correctAnswer: "Mechanical",
        explanation: "Mechanical engineering designs machinery."
      },
      {
        question: "What is civil engineering?",
        options: [
          "Software design",
          "Infrastructure design",
          "Product marketing",
          "Accounting"
        ],
        correctAnswer: "Infrastructure design",
        explanation: "Civil engineering builds infrastructure."
      },
      {
        question: "What is quality assurance?",
        options: [
          "Testing standards",
          "Hiring staff",
          "Design planning",
          "Cost estimation"
        ],
        correctAnswer: "Testing standards",
        explanation: "QA ensures reliability."
      },
      {
        question: "What is project management?",
        options: [
          "Task execution",
          "Planning and controlling projects",
          "Hiring engineers",
          "Budgeting only"
        ],
        correctAnswer: "Planning and controlling projects",
        explanation: "PM ensures delivery."
      },
      {
        question: "What is prototyping?",
        options: [
          "Final product",
          "Early model testing",
          "Mass production",
          "Market launch"
        ],
        correctAnswer: "Early model testing",
        explanation: "Prototypes test concepts."
      },
      {
        question: "What does CAD stand for?",
        options: [
          "Computer-Aided Design",
          "Central Architecture Diagram",
          "Computer Analysis Data",
          "Core Application Design"
        ],
        correctAnswer: "Computer-Aided Design",
        explanation: "CAD supports design creation."
      },
      {
        question: "What is risk assessment?",
        options: [
          "Ignoring hazards",
          "Identifying engineering risks",
          "Hiring staff",
          "Budget approval"
        ],
        correctAnswer: "Identifying engineering risks",
        explanation: "Risk assessment prevents failure."
      },
      {
        question: "What is maintenance engineering?",
        options: [
          "Design only",
          "Equipment upkeep",
          "System disposal",
          "Cost cutting"
        ],
        correctAnswer: "Equipment upkeep",
        explanation: "Maintenance ensures longevity."
      },
      {
        question: "What is testing?",
        options: [
          "Design phase",
          "Validating performance",
          "Production",
          "Deployment"
        ],
        correctAnswer: "Validating performance",
        explanation: "Testing ensures standards."
      }
    ],

    "Research & Development": [
      {
        question: "What is R&D focused on?",
        options: [
          "Sales",
          "Innovation",
          "Compliance",
          "Operations"
        ],
        correctAnswer: "Innovation",
        explanation: "R&D drives innovation."
      },
      {
        question: "What is product research?",
        options: [
          "Market selling",
          "Studying new product ideas",
          "Manufacturing",
          "Advertising"
        ],
        correctAnswer: "Studying new product ideas",
        explanation: "Research validates ideas."
      },
      {
        question: "What is experimentation?",
        options: [
          "Random work",
          "Testing hypotheses",
          "Final launch",
          "Sales pitch"
        ],
        correctAnswer: "Testing hypotheses",
        explanation: "Experiments validate assumptions."
      },
      {
        question: "What is innovation?",
        options: [
          "Cost cutting",
          "New or improved solutions",
          "Marketing",
          "Compliance"
        ],
        correctAnswer: "New or improved solutions",
        explanation: "Innovation adds value."
      },
      {
        question: "What does prototype testing do?",
        options: [
          "Market products",
          "Validate concepts",
          "Hire teams",
          "Scale production"
        ],
        correctAnswer: "Validate concepts",
        explanation: "Testing reduces risk."
      },
      {
        question: "What is applied research?",
        options: [
          "Theoretical study",
          "Practical problem solving",
          "Academic writing",
          "Documentation"
        ],
        correctAnswer: "Practical problem solving",
        explanation: "Applied research solves real problems."
      },
      {
        question: "What is basic research?",
        options: [
          "Immediate application",
          "Knowledge expansion",
          "Product launch",
          "Cost reduction"
        ],
        correctAnswer: "Knowledge expansion",
        explanation: "Basic research builds foundations."
      },
      {
        question: "What is innovation pipeline?",
        options: [
          "Idea-to-launch process",
          "Sales funnel",
          "Hiring system",
          "Cost analysis"
        ],
        correctAnswer: "Idea-to-launch process",
        explanation: "Pipeline tracks development."
      },
      {
        question: "What skill is key in R&D?",
        options: ["Curiosity", "Sales", "Negotiation", "Accounting"],
        correctAnswer: "Curiosity",
        explanation: "Curiosity fuels discovery."
      },
      {
        question: "What is commercialization?",
        options: [
          "Idea testing",
          "Market launch",
          "Research phase",
          "Prototyping"
        ],
        correctAnswer: "Market launch",
        explanation: "Commercialization brings products to market."
      }
    ],

    "Business Process Outsourcing (BPO)": [
      {
        question: "What is BPO?",
        options: [
          "Internal operations",
          "Outsourcing business processes",
          "Product manufacturing",
          "Marketing service"
        ],
        correctAnswer: "Outsourcing business processes",
        explanation: "BPO transfers processes to third parties."
      },
      {
        question: "Which process is commonly outsourced?",
        options: ["Customer support", "Strategy", "R&D", "Design"],
        correctAnswer: "Customer support",
        explanation: "Support is often outsourced."
      },
      {
        question: "What is cost advantage?",
        options: [
          "Higher expenses",
          "Lower operational costs",
          "Better quality",
          "Faster sales"
        ],
        correctAnswer: "Lower operational costs",
        explanation: "BPO reduces expenses."
      },
      {
        question: "What is offshoring?",
        options: [
          "Local outsourcing",
          "Overseas outsourcing",
          "Hiring freelancers",
          "Internal teams"
        ],
        correctAnswer: "Overseas outsourcing",
        explanation: "Offshoring moves work abroad."
      },
      {
        question: "What is onshore BPO?",
        options: [
          "International outsourcing",
          "Domestic outsourcing",
          "Remote work",
          "In-house work"
        ],
        correctAnswer: "Domestic outsourcing",
        explanation: "Onshore uses local vendors."
      },
      {
        question: "What is SLA?",
        options: [
          "Service Level Agreement",
          "Software License Act",
          "System Load Allocation",
          "Sales Lead Analysis"
        ],
        correctAnswer: "Service Level Agreement",
        explanation: "SLA defines service expectations."
      },
      {
        question: "What is KPO?",
        options: [
          "Knowledge Process Outsourcing",
          "Key Process Operation",
          "Known Process Output",
          "Knowledge Performance Office"
        ],
        correctAnswer: "Knowledge Process Outsourcing",
        explanation: "KPO handles knowledge-intensive tasks."
      },
      {
        question: "What is vendor management?",
        options: [
          "Hiring staff",
          "Managing service providers",
          "Sales strategy",
          "Payroll"
        ],
        correctAnswer: "Managing service providers",
        explanation: "Vendor management ensures quality."
      },
      {
        question: "What risk exists in BPO?",
        options: [
          "Data security",
          "Higher salaries",
          "Product delays",
          "Branding issues"
        ],
        correctAnswer: "Data security",
        explanation: "Security must be managed carefully."
      },
      {
        question: "What industry heavily uses BPO?",
        options: ["Banking", "Architecture", "Manufacturing", "Construction"],
        correctAnswer: "Banking",
        explanation: "Banking widely uses BPO."
      }
    ]

    },
  telecom:{
     "Wireless Communications": [
      {
        question: "What does LTE stand for?",
        options: ["Long Term Evolution", "Low Transmission Energy", "Local Telecom Exchange", "Long Transmission Ethernet"],
        correctAnswer: "Long Term Evolution",
        explanation: "LTE is a standard for high-speed wireless communication."
      },
      {
        question: "Which technology is used in 4G networks?",
        options: ["CDMA", "GSM", "LTE", "EDGE"],
        correctAnswer: "LTE",
        explanation: "LTE is the core technology behind 4G networks."
      },
      {
        question: "What is a base station in wireless communication?",
        options: ["User device", "Network core", "Radio transmitter/receiver", "Billing system"],
        correctAnswer: "Radio transmitter/receiver",
        explanation: "Base stations connect mobile devices to the network."
      },
      {
        question: "Which frequency band has longer range?",
        options: ["High frequency", "Low frequency", "Microwave", "Millimeter wave"],
        correctAnswer: "Low frequency",
        explanation: "Lower frequencies travel farther with less attenuation."
      },
      {
        question: "What is handoff in mobile networks?",
        options: ["Call termination", "Switching base stations", "Billing process", "Data encryption"],
        correctAnswer: "Switching base stations",
        explanation: "Handoff occurs when a device moves between cells."
      },
      {
        question: "Which multiple access technique is used in LTE?",
        options: ["FDMA", "TDMA", "OFDMA", "CDMA"],
        correctAnswer: "OFDMA",
        explanation: "OFDMA allows efficient spectrum utilization."
      },
      {
        question: "What causes signal fading?",
        options: ["High bandwidth", "Multipath propagation", "Low frequency", "Network congestion"],
        correctAnswer: "Multipath propagation",
        explanation: "Multiple signal paths cause interference."
      },
      {
        question: "What unit measures signal strength?",
        options: ["Hz", "dBm", "Mbps", "ms"],
        correctAnswer: "dBm",
        explanation: "dBm measures power level of signals."
      },
      {
        question: "Which generation introduced mobile internet?",
        options: ["1G", "2G", "3G", "5G"],
        correctAnswer: "3G",
        explanation: "3G enabled mobile data and internet access."
      },
      {
        question: "What is spectrum allocation?",
        options: ["Assigning frequencies", "Installing towers", "Routing traffic", "Billing users"],
        correctAnswer: "Assigning frequencies",
        explanation: "Governments allocate spectrum to operators."
      }
    ],

    "Network Infrastructure": [
      {
        question: "What device forwards packets between networks?",
        options: ["Switch", "Router", "Modem", "Repeater"],
        correctAnswer: "Router",
        explanation: "Routers connect different networks."
      },
      {
        question: "What does a switch primarily use?",
        options: ["IP address", "MAC address", "Port number", "Protocol"],
        correctAnswer: "MAC address",
        explanation: "Switches operate at Layer 2."
      },
      {
        question: "What is backbone network?",
        options: ["Local network", "High-capacity core network", "Wireless access", "User network"],
        correctAnswer: "High-capacity core network",
        explanation: "Backbone networks carry large volumes of traffic."
      },
      {
        question: "Which layer handles routing?",
        options: ["Physical", "Data Link", "Network", "Application"],
        correctAnswer: "Network",
        explanation: "Routing occurs at the Network layer."
      },
      {
        question: "What is redundancy?",
        options: ["Single path", "Backup components", "Bandwidth limit", "Security policy"],
        correctAnswer: "Backup components",
        explanation: "Redundancy improves reliability."
      },
      {
        question: "What is a core network?",
        options: ["User devices", "Access network", "Central network", "Home network"],
        correctAnswer: "Central network",
        explanation: "Core networks manage services and routing."
      },
      {
        question: "What is latency?",
        options: ["Data loss", "Transmission delay", "Bandwidth", "Signal strength"],
        correctAnswer: "Transmission delay",
        explanation: "Latency is time taken for data to travel."
      },
      {
        question: "Which topology connects all nodes to a central node?",
        options: ["Mesh", "Ring", "Star", "Bus"],
        correctAnswer: "Star",
        explanation: "Star topology uses a central hub."
      },
      {
        question: "What protocol manages IP addresses?",
        options: ["HTTP", "FTP", "DHCP", "SNMP"],
        correctAnswer: "DHCP",
        explanation: "DHCP assigns IP addresses automatically."
      },
      {
        question: "What increases network reliability?",
        options: ["Single router", "No backup", "Redundant paths", "Low bandwidth"],
        correctAnswer: "Redundant paths",
        explanation: "Multiple paths prevent failures."
      }
    ],

    "Telecom Services": [
      {
        question: "What is basic telecom service?",
        options: ["Internet", "Voice calling", "Cloud hosting", "Security"],
        correctAnswer: "Voice calling",
        explanation: "Voice service is the core telecom offering."
      },
      {
        question: "What is roaming?",
        options: ["Local calling", "Using network outside home area", "Data encryption", "Billing"],
        correctAnswer: "Using network outside home area",
        explanation: "Roaming allows service beyond home network."
      },
      {
        question: "What is prepaid service?",
        options: ["Pay after use", "Pay before use", "Free service", "Enterprise service"],
        correctAnswer: "Pay before use",
        explanation: "Prepaid users pay in advance."
      },
      {
        question: "What is postpaid service?",
        options: ["Advance payment", "Monthly billing", "Free calls", "No SIM"],
        correctAnswer: "Monthly billing",
        explanation: "Postpaid users are billed monthly."
      },
      {
        question: "What is SMS?",
        options: ["Short Message Service", "System Mail Server", "Signal Messaging System", "Secure Mobile Service"],
        correctAnswer: "Short Message Service",
        explanation: "SMS enables text messaging."
      },
      {
        question: "What is international calling?",
        options: ["Local calls", "Calls within network", "Calls across countries", "Emergency calls"],
        correctAnswer: "Calls across countries",
        explanation: "International calls connect different countries."
      },
      {
        question: "What is tariff?",
        options: ["Network device", "Pricing plan", "Signal type", "Protocol"],
        correctAnswer: "Pricing plan",
        explanation: "Tariffs define service pricing."
      },
      {
        question: "What is call forwarding?",
        options: ["Ending calls", "Redirecting calls", "Blocking calls", "Recording calls"],
        correctAnswer: "Redirecting calls",
        explanation: "Calls are redirected to another number."
      },
      {
        question: "What is voicemail?",
        options: ["Live call", "Recorded message service", "Text message", "Data service"],
        correctAnswer: "Recorded message service",
        explanation: "Voicemail stores unanswered calls."
      },
      {
        question: "What improves customer retention?",
        options: ["Poor service", "High pricing", "Quality support", "Network outages"],
        correctAnswer: "Quality support",
        explanation: "Good service keeps customers."
      }
    ],
      "5G Technology": [
      {
        question: "What is a key feature of 5G?",
        options: ["High latency", "Low bandwidth", "Ultra-low latency", "Limited devices"],
        correctAnswer: "Ultra-low latency",
        explanation: "5G significantly reduces latency compared to earlier generations."
      },
      {
        question: "Which frequency range is used by 5G?",
        options: ["Only low-band", "Only mid-band", "Only mmWave", "Low, mid, and mmWave"],
        correctAnswer: "Low, mid, and mmWave",
        explanation: "5G operates across multiple frequency ranges."
      },
      {
        question: "What does mmWave stand for?",
        options: ["Mega Mobile Wave", "Millimeter Wave", "Multi Media Wave", "Mobile Microwave"],
        correctAnswer: "Millimeter Wave",
        explanation: "mmWave enables extremely high data rates."
      },
      {
        question: "What technology enables massive device connectivity in 5G?",
        options: ["MIMO", "Massive MIMO", "LTE", "WiMAX"],
        correctAnswer: "Massive MIMO",
        explanation: "Massive MIMO supports many devices simultaneously."
      },
      {
        question: "What is network slicing?",
        options: ["Dividing bandwidth", "Creating virtual networks", "Reducing latency", "Encrypting traffic"],
        correctAnswer: "Creating virtual networks",
        explanation: "Network slicing creates multiple virtual networks on one infrastructure."
      },
      {
        question: "Which use case relies heavily on 5G?",
        options: ["Email", "Autonomous vehicles", "SMS", "Fax"],
        correctAnswer: "Autonomous vehicles",
        explanation: "Low latency is critical for self-driving cars."
      },
      {
        question: "What improves 5G coverage indoors?",
        options: ["Repeaters", "Small cells", "Routers", "Satellites"],
        correctAnswer: "Small cells",
        explanation: "Small cells enhance signal coverage."
      },
      {
        question: "Which generation comes before 5G?",
        options: ["3G", "4G", "2G", "Wi-Fi"],
        correctAnswer: "4G",
        explanation: "5G is the successor to 4G LTE."
      },
      {
        question: "What is beamforming?",
        options: ["Signal blocking", "Directional signal transmission", "Signal compression", "Routing"],
        correctAnswer: "Directional signal transmission",
        explanation: "Beamforming directs signals toward devices."
      },
      {
        question: "5G is defined by which organization?",
        options: ["IEEE", "ITU", "ISO", "W3C"],
        correctAnswer: "ITU",
        explanation: "ITU defines international telecom standards."
      }
    ],

    "Internet Service Providers": [
      {
        question: "What is the main role of an ISP?",
        options: ["Manufacture routers", "Provide internet access", "Secure devices", "Develop apps"],
        correctAnswer: "Provide internet access",
        explanation: "ISPs connect users to the internet."
      },
      {
        question: "Which technology is used for broadband?",
        options: ["DSL", "Fiber", "Cable", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "ISPs use multiple broadband technologies."
      },
      {
        question: "What does bandwidth measure?",
        options: ["Delay", "Speed capacity", "Signal strength", "Distance"],
        correctAnswer: "Speed capacity",
        explanation: "Bandwidth defines maximum data rate."
      },
      {
        question: "What is throttling?",
        options: ["Speed reduction", "Security feature", "Billing method", "Signal boosting"],
        correctAnswer: "Speed reduction",
        explanation: "ISPs may limit speed after usage thresholds."
      },
      {
        question: "What is uptime?",
        options: ["Connection speed", "Service availability", "Billing cycle", "Router capacity"],
        correctAnswer: "Service availability",
        explanation: "Uptime measures service reliability."
      },
      {
        question: "Which device connects a home to ISP?",
        options: ["Switch", "Router", "Modem", "Firewall"],
        correctAnswer: "Modem",
        explanation: "Modems convert signals for internet access."
      },
      {
        question: "What is an SLA?",
        options: ["Service Level Agreement", "System Load Access", "Secure Link Architecture", "Server Lease Account"],
        correctAnswer: "Service Level Agreement",
        explanation: "SLAs define service guarantees."
      },
      {
        question: "What is last-mile connectivity?",
        options: ["Core network", "User to ISP connection", "International routing", "Satellite link"],
        correctAnswer: "User to ISP connection",
        explanation: "Last-mile connects customers to the ISP."
      },
      {
        question: "Which is a wired ISP technology?",
        options: ["LTE", "5G", "Fiber", "Wi-Fi"],
        correctAnswer: "Fiber",
        explanation: "Fiber uses physical cables."
      },
      {
        question: "What affects internet speed?",
        options: ["Network congestion", "Distance", "Hardware", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Multiple factors impact performance."
      }
    ],

    "Satellite Communications": [
      {
        question: "What is GEO satellite altitude?",
        options: ["500 km", "2,000 km", "35,786 km", "100,000 km"],
        correctAnswer: "35,786 km",
        explanation: "GEO satellites remain fixed relative to Earth."
      },
      {
        question: "Which satellite orbit has lowest latency?",
        options: ["GEO", "MEO", "LEO", "HEO"],
        correctAnswer: "LEO",
        explanation: "LEO satellites are closest to Earth."
      },
      {
        question: "What is uplink?",
        options: ["Satellite to Earth", "Earth to satellite", "Inter-satellite", "Data storage"],
        correctAnswer: "Earth to satellite",
        explanation: "Uplink sends data to satellites."
      },
      {
        question: "What is downlink?",
        options: ["Satellite to Earth", "Earth to satellite", "Router to modem", "User to ISP"],
        correctAnswer: "Satellite to Earth",
        explanation: "Downlink delivers data to Earth."
      },
      {
        question: "Which is a satellite communication use case?",
        options: ["Remote internet", "GPS", "TV broadcasting", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Satellites serve many applications."
      },
      {
        question: "What affects satellite signal quality?",
        options: ["Weather", "Distance", "Obstacles", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Signals degrade due to multiple factors."
      },
      {
        question: "Which band is used in satellite comms?",
        options: ["Ka band", "Ku band", "C band", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Different bands serve different needs."
      },
      {
        question: "What is latency disadvantage of GEO?",
        options: ["High delay", "Low coverage", "Limited bandwidth", "High cost"],
        correctAnswer: "High delay",
        explanation: "Distance causes noticeable delay."
      },
      {
        question: "What is VSAT?",
        options: ["Very Small Aperture Terminal", "Virtual Satellite Access Tool", "Variable Signal Antenna", "Voice Satellite Terminal"],
        correctAnswer: "Very Small Aperture Terminal",
        explanation: "VSAT enables satellite connectivity."
      },
      {
        question: "Who regulates satellite spectrum?",
        options: ["ITU", "NASA", "ISRO", "IEEE"],
        correctAnswer: "ITU",
        explanation: "ITU manages global spectrum allocation."
      }
    ]
    

  },
  transportation:{
    "Electric Vehicles": [
      {
        question: "What powers an electric vehicle?",
        options: ["Diesel engine", "Petrol engine", "Electric motor", "Steam engine"],
        correctAnswer: "Electric motor",
        explanation: "EVs use electric motors powered by batteries."
      },
      {
        question: "Which battery type is common in EVs?",
        options: ["Lead-acid", "Nickel-cadmium", "Lithium-ion", "Alkaline"],
        correctAnswer: "Lithium-ion",
        explanation: "Lithium-ion batteries offer high energy density."
      },
      {
        question: "What does regenerative braking do?",
        options: ["Reduces speed only", "Charges the battery", "Stops vehicle", "Controls steering"],
        correctAnswer: "Charges the battery",
        explanation: "It converts kinetic energy back to electrical energy."
      },
      {
        question: "What is range anxiety?",
        options: ["Fear of speeding", "Battery overheating", "Fear of running out of charge", "Charging delay"],
        correctAnswer: "Fear of running out of charge",
        explanation: "Drivers worry about limited driving range."
      },
      {
        question: "What reduces EV emissions?",
        options: ["Electric drivetrain", "Heavy engine", "Exhaust system", "Fuel tank"],
        correctAnswer: "Electric drivetrain",
        explanation: "EVs produce zero tailpipe emissions."
      },
      {
        question: "What is fast charging?",
        options: ["Home charging", "DC charging", "Wireless charging", "Solar charging"],
        correctAnswer: "DC charging",
        explanation: "DC fast charging reduces charging time."
      },
      {
        question: "What is BEV?",
        options: ["Battery Electric Vehicle", "Bio Energy Vehicle", "Basic Engine Vehicle", "Backup Energy Vehicle"],
        correctAnswer: "Battery Electric Vehicle",
        explanation: "BEVs run entirely on batteries."
      },
      {
        question: "What affects EV range?",
        options: ["Driving style", "Weather", "Terrain", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Multiple factors influence battery consumption."
      },
      {
        question: "What is charging infrastructure?",
        options: ["Road network", "Charging stations", "Traffic system", "Parking space"],
        correctAnswer: "Charging stations",
        explanation: "Infrastructure enables EV charging."
      },
      {
        question: "Which country leads EV adoption?",
        options: ["USA", "China", "Germany", "Brazil"],
        correctAnswer: "China",
        explanation: "China has the largest EV market."
      }
    ],

    "Autonomous Vehicles": [
      {
        question: "What enables autonomous driving?",
        options: ["GPS only", "Sensors and AI", "Manual controls", "Fuel efficiency"],
        correctAnswer: "Sensors and AI",
        explanation: "AI processes sensor data to drive autonomously."
      },
      {
        question: "Which sensor detects distance?",
        options: ["Camera", "LiDAR", "Microphone", "GPS"],
        correctAnswer: "LiDAR",
        explanation: "LiDAR measures distance using laser pulses."
      },
      {
        question: "What does SAE Level 5 mean?",
        options: ["Driver assistance", "Partial automation", "Conditional automation", "Full automation"],
        correctAnswer: "Full automation",
        explanation: "Level 5 requires no human intervention."
      },
      {
        question: "What is ADAS?",
        options: ["Advanced Driver Assistance Systems", "Automatic Driving Access System", "Autonomous Data Analysis System", "Advanced Digital Auto System"],
        correctAnswer: "Advanced Driver Assistance Systems",
        explanation: "ADAS assists drivers with safety features."
      },
      {
        question: "What improves vehicle perception?",
        options: ["Machine learning", "Manual steering", "Fuel injection", "Gearbox"],
        correctAnswer: "Machine learning",
        explanation: "ML enables object recognition."
      },
      {
        question: "What is sensor fusion?",
        options: ["Single sensor usage", "Combining sensor data", "Removing sensors", "Wireless sensors"],
        correctAnswer: "Combining sensor data",
        explanation: "Fusion improves accuracy."
      },
      {
        question: "What is V2X?",
        options: ["Vehicle-to-Everything", "Vehicle-to-Engine", "Vehicle-to-Driver", "Vehicle-to-Fuel"],
        correctAnswer: "Vehicle-to-Everything",
        explanation: "V2X enables communication with surroundings."
      },
      {
        question: "What is a major challenge?",
        options: ["Weather conditions", "Traffic rules", "Ethical decisions", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Autonomous driving faces multiple challenges."
      },
      {
        question: "What powers decision making?",
        options: ["AI algorithms", "Brakes", "Steering wheel", "Fuel system"],
        correctAnswer: "AI algorithms",
        explanation: "AI controls driving behavior."
      },
      {
        question: "What improves safety?",
        options: ["More sensors", "Human error", "Speeding", "Manual override"],
        correctAnswer: "More sensors",
        explanation: "Sensors increase situational awareness."
      }
    ],

    "Logistics & Supply Chain": [
      {
        question: "What is supply chain?",
        options: ["Manufacturing only", "Transportation only", "Flow of goods", "Retail only"],
        correctAnswer: "Flow of goods",
        explanation: "It covers sourcing to delivery."
      },
      {
        question: "What is inventory management?",
        options: ["Stock control", "Hiring staff", "Vehicle tracking", "Pricing"],
        correctAnswer: "Stock control",
        explanation: "It manages stock levels."
      },
      {
        question: "What is just-in-time?",
        options: ["Early delivery", "On-demand inventory", "Bulk storage", "Delayed supply"],
        correctAnswer: "On-demand inventory",
        explanation: "JIT reduces storage costs."
      },
      {
        question: "What improves supply visibility?",
        options: ["Tracking systems", "Manual logs", "Paper invoices", "Delayed data"],
        correctAnswer: "Tracking systems",
        explanation: "Real-time tracking improves visibility."
      },
      {
        question: "What is lead time?",
        options: ["Shipping cost", "Order to delivery time", "Inventory size", "Warehouse size"],
        correctAnswer: "Order to delivery time",
        explanation: "Lead time measures fulfillment speed."
      },
      {
        question: "What is demand forecasting?",
        options: ["Predicting sales", "Tracking vehicles", "Hiring staff", "Warehouse design"],
        correctAnswer: "Predicting sales",
        explanation: "Forecasting helps plan inventory."
      },
      {
        question: "What reduces logistics cost?",
        options: ["Optimization", "Delays", "Overstocking", "Manual routing"],
        correctAnswer: "Optimization",
        explanation: "Optimized routes save cost."
      },
      {
        question: "What is 3PL?",
        options: ["Third-Party Logistics", "Three Point Loading", "Transport License", "Third Party Leasing"],
        correctAnswer: "Third-Party Logistics",
        explanation: "3PL providers manage logistics services."
      },
      {
        question: "What is cross-docking?",
        options: ["Direct transfer", "Long-term storage", "Manual sorting", "Packaging"],
        correctAnswer: "Direct transfer",
        explanation: "Goods move directly to outbound transport."
      },
      {
        question: "What enables automation?",
        options: ["Technology", "Paperwork", "Manual labor", "Delays"],
        correctAnswer: "Technology",
        explanation: "Automation improves efficiency."
      }
    ],

    "Aviation": [
      {
        question: "What provides lift to aircraft?",
        options: ["Engines", "Wings", "Fuselage", "Landing gear"],
        correctAnswer: "Wings",
        explanation: "Wings generate lift."
      },
      {
        question: "What type of engine is used in jets?",
        options: ["Piston", "Turbofan", "Electric", "Steam"],
        correctAnswer: "Turbofan",
        explanation: "Jets use turbofan engines."
      },
      {
        question: "What is ATC?",
        options: ["Air Traffic Control", "Aircraft Technical Crew", "Aviation Training Center", "Air Transport Channel"],
        correctAnswer: "Air Traffic Control",
        explanation: "ATC manages aircraft movement."
      },
      {
        question: "What is turbulence?",
        options: ["Smooth air", "Air disturbance", "Engine failure", "Navigation error"],
        correctAnswer: "Air disturbance",
        explanation: "Turbulence causes irregular motion."
      },
      {
        question: "What is runway?",
        options: ["Parking area", "Taxiway", "Takeoff/landing strip", "Hangar"],
        correctAnswer: "Takeoff/landing strip",
        explanation: "Aircraft take off and land on runways."
      },
      {
        question: "What is black box?",
        options: ["Flight recorder", "Fuel tank", "Navigation system", "Radar"],
        correctAnswer: "Flight recorder",
        explanation: "It records flight data."
      },
      {
        question: "What is IATA?",
        options: ["International Air Transport Association", "Internal Aviation Authority", "International Aircraft Agency", "Air Traffic Alliance"],
        correctAnswer: "International Air Transport Association",
        explanation: "IATA represents airlines globally."
      },
      {
        question: "What improves fuel efficiency?",
        options: ["Aerodynamics", "Heavier weight", "Higher drag", "Manual control"],
        correctAnswer: "Aerodynamics",
        explanation: "Streamlined design reduces fuel use."
      },
      {
        question: "What is cabin pressurization?",
        options: ["Cooling system", "Maintaining air pressure", "Noise control", "Lighting"],
        correctAnswer: "Maintaining air pressure",
        explanation: "It ensures passenger comfort."
      },
      {
        question: "What is cargo aviation?",
        options: ["Passenger flights", "Military flights", "Freight transport", "Training flights"],
        correctAnswer: "Freight transport",
        explanation: "Cargo aviation carries goods."
      }
    ],
     "Railways": [
      {
        question: "What powers electric trains?",
        options: ["Diesel engine", "Steam engine", "Electric motor", "Gas turbine"],
        correctAnswer: "Electric motor",
        explanation: "Electric trains use electric traction motors."
      },
      {
        question: "What is a railway gauge?",
        options: ["Train speed", "Distance between rails", "Track length", "Signal type"],
        correctAnswer: "Distance between rails",
        explanation: "Gauge defines the spacing of railway tracks."
      },
      {
        question: "What is signaling used for?",
        options: ["Speed increase", "Traffic control", "Fuel efficiency", "Passenger comfort"],
        correctAnswer: "Traffic control",
        explanation: "Signals ensure safe train movement."
      },
      {
        question: "What is a locomotive?",
        options: ["Passenger coach", "Cargo wagon", "Power unit", "Brake system"],
        correctAnswer: "Power unit",
        explanation: "Locomotives pull trains."
      },
      {
        question: "What improves rail safety?",
        options: ["Automatic signaling", "Manual flags", "Higher speed", "Heavier trains"],
        correctAnswer: "Automatic signaling",
        explanation: "Automation reduces human error."
      },
      {
        question: "What is high-speed rail?",
        options: ["Above 200 km/h", "Below 100 km/h", "Freight trains", "Metro rail"],
        correctAnswer: "Above 200 km/h",
        explanation: "High-speed rail operates at very high speeds."
      },
      {
        question: "What is rail electrification?",
        options: ["Track replacement", "Electric power supply", "Ticketing system", "Cargo handling"],
        correctAnswer: "Electric power supply",
        explanation: "Electrification powers trains electrically."
      },
      {
        question: "What reduces rail congestion?",
        options: ["Timetable optimization", "Manual control", "Single track", "Slower trains"],
        correctAnswer: "Timetable optimization",
        explanation: "Optimized schedules improve flow."
      },
      {
        question: "What is metro rail?",
        options: ["Intercity rail", "Urban transit rail", "Freight rail", "Tourist rail"],
        correctAnswer: "Urban transit rail",
        explanation: "Metro serves city transport."
      },
      {
        question: "What improves passenger experience?",
        options: ["Clean coaches", "Delays", "Overcrowding", "Poor lighting"],
        correctAnswer: "Clean coaches",
        explanation: "Comfort increases satisfaction."
      }
    ],

    "Maritime Transport": [
      {
        question: "What carries most global trade?",
        options: ["Airplanes", "Ships", "Trucks", "Trains"],
        correctAnswer: "Ships",
        explanation: "Maritime transport handles bulk trade."
      },
      {
        question: "What is a container ship?",
        options: ["Oil carrier", "Passenger ship", "Cargo ship", "Fishing vessel"],
        correctAnswer: "Cargo ship",
        explanation: "Container ships carry standardized containers."
      },
      {
        question: "What is a port?",
        options: ["Open sea", "Docking facility", "Warehouse only", "Rail terminal"],
        correctAnswer: "Docking facility",
        explanation: "Ports handle ship loading and unloading."
      },
      {
        question: "What does ballast do?",
        options: ["Increase speed", "Stabilize ship", "Reduce fuel", "Navigation"],
        correctAnswer: "Stabilize ship",
        explanation: "Ballast maintains ship balance."
      },
      {
        question: "What is maritime insurance?",
        options: ["Crew salary", "Cargo protection", "Navigation aid", "Fuel contract"],
        correctAnswer: "Cargo protection",
        explanation: "Insurance protects against losses."
      },
      {
        question: "What is IMO?",
        options: ["International Maritime Organization", "International Marine Office", "Inland Marine Org", "Industrial Maritime Org"],
        correctAnswer: "International Maritime Organization",
        explanation: "IMO regulates global shipping."
      },
      {
        question: "What is bulk cargo?",
        options: ["Packaged goods", "Liquid goods", "Loose goods", "Small parcels"],
        correctAnswer: "Loose goods",
        explanation: "Bulk cargo is unpackaged."
      },
      {
        question: "What affects shipping routes?",
        options: ["Weather", "Piracy", "Fuel cost", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Multiple factors influence routes."
      },
      {
        question: "What is a tanker?",
        options: ["Passenger ship", "Oil carrier", "Fishing boat", "Cargo plane"],
        correctAnswer: "Oil carrier",
        explanation: "Tankers transport liquids."
      },
      {
        question: "What improves port efficiency?",
        options: ["Automation", "Manual handling", "Delays", "Congestion"],
        correctAnswer: "Automation",
        explanation: "Automation speeds operations."
      }
    ],

    "Urban Mobility": [
      {
        question: "What is urban mobility?",
        options: ["Rural transport", "City transportation", "Air travel", "Sea travel"],
        correctAnswer: "City transportation",
        explanation: "Urban mobility focuses on city movement."
      },
      {
        question: "What reduces urban congestion?",
        options: ["Public transport", "Private cars", "Traffic jams", "Parking shortage"],
        correctAnswer: "Public transport",
        explanation: "Mass transit reduces congestion."
      },
      {
        question: "What is micromobility?",
        options: ["Small vehicles", "Large buses", "Cargo ships", "Trains"],
        correctAnswer: "Small vehicles",
        explanation: "Includes bikes and e-scooters."
      },
      {
        question: "What promotes sustainability?",
        options: ["EVs", "Carpooling", "Walking", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "These reduce emissions."
      },
      {
        question: "What is smart traffic management?",
        options: ["Manual signals", "AI-based control", "Fixed timing", "Paper maps"],
        correctAnswer: "AI-based control",
        explanation: "AI optimizes traffic flow."
      },
      {
        question: "What is congestion pricing?",
        options: ["Free travel", "Charging peak usage", "Parking discount", "Fuel subsidy"],
        correctAnswer: "Charging peak usage",
        explanation: "It discourages congestion."
      },
      {
        question: "What improves last-mile connectivity?",
        options: ["E-scooters", "Highways", "Airports", "Ports"],
        correctAnswer: "E-scooters",
        explanation: "They serve short distances."
      },
      {
        question: "What supports shared mobility?",
        options: ["Ride-hailing apps", "Private ownership", "No internet", "Manual booking"],
        correctAnswer: "Ride-hailing apps",
        explanation: "Apps enable sharing."
      },
      {
        question: "What improves safety?",
        options: ["Bike lanes", "Speeding", "No sidewalks", "Poor lighting"],
        correctAnswer: "Bike lanes",
        explanation: "Dedicated lanes improve safety."
      },
      {
        question: "What is MaaS?",
        options: ["Mobility as a Service", "Manual Auto System", "Metro Access Scheme", "Mobile Auto Service"],
        correctAnswer: "Mobility as a Service",
        explanation: "MaaS integrates transport services."
      }
    ],

    "Fleet Management": [
      {
        question: "What is fleet management?",
        options: ["Vehicle sales", "Vehicle tracking", "Vehicle repair", "Vehicle design"],
        correctAnswer: "Vehicle tracking",
        explanation: "It monitors and manages fleets."
      },
      {
        question: "What does GPS provide?",
        options: ["Fuel data", "Location tracking", "Speed limit", "Driver ID"],
        correctAnswer: "Location tracking",
        explanation: "GPS tracks vehicle location."
      },
      {
        question: "What reduces fuel cost?",
        options: ["Route optimization", "Idle time", "Over-speeding", "Manual logs"],
        correctAnswer: "Route optimization",
        explanation: "Efficient routes save fuel."
      },
      {
        question: "What is telematics?",
        options: ["Vehicle data monitoring", "Engine repair", "Manual tracking", "Paper logs"],
        correctAnswer: "Vehicle data monitoring",
        explanation: "Telematics collects vehicle data."
      },
      {
        question: "What improves driver safety?",
        options: ["Driver monitoring", "Speeding", "Fatigue", "Distraction"],
        correctAnswer: "Driver monitoring",
        explanation: "Monitoring reduces accidents."
      },
      {
        question: "What is preventive maintenance?",
        options: ["After breakdown", "Scheduled servicing", "Emergency repair", "No maintenance"],
        correctAnswer: "Scheduled servicing",
        explanation: "Prevents vehicle failure."
      },
      {
        question: "What is fleet utilization?",
        options: ["Idle vehicles", "Usage efficiency", "Vehicle age", "Fuel type"],
        correctAnswer: "Usage efficiency",
        explanation: "Measures how well fleet is used."
      },
      {
        question: "What reduces downtime?",
        options: ["Maintenance planning", "Ignoring issues", "Overloading", "Manual records"],
        correctAnswer: "Maintenance planning",
        explanation: "Planning reduces failures."
      },
      {
        question: "What improves compliance?",
        options: ["Digital logs", "Paper logs", "No tracking", "Manual checks"],
        correctAnswer: "Digital logs",
        explanation: "Digital systems improve compliance."
      },
      {
        question: "What supports scalability?",
        options: ["Fleet software", "Manual processes", "Fixed routes", "Paper records"],
        correctAnswer: "Fleet software",
        explanation: "Software scales operations."
      }
    ],

    "Last-Mile Delivery": [
      {
        question: "What is last-mile delivery?",
        options: ["Warehouse transport", "Final delivery to customer", "International shipping", "Manufacturing"],
        correctAnswer: "Final delivery to customer",
        explanation: "Last-mile completes delivery."
      },
      {
        question: "What challenges last-mile?",
        options: ["Traffic", "Cost", "Time", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Last-mile is complex."
      },
      {
        question: "What improves efficiency?",
        options: ["Route optimization", "Manual routing", "Delays", "Idle vehicles"],
        correctAnswer: "Route optimization",
        explanation: "Optimized routes save time."
      },
      {
        question: "What is contactless delivery?",
        options: ["Physical handover", "No direct contact", "Delayed delivery", "Manual confirmation"],
        correctAnswer: "No direct contact",
        explanation: "Contactless improves safety."
      },
      {
        question: "What supports fast delivery?",
        options: ["Micro-fulfillment", "Central warehouses", "Manual sorting", "Long routes"],
        correctAnswer: "Micro-fulfillment",
        explanation: "Closer warehouses speed delivery."
      },
      {
        question: "What is same-day delivery?",
        options: ["Delivery next day", "Delivery same day", "Weekly delivery", "Bulk delivery"],
        correctAnswer: "Delivery same day",
        explanation: "Orders arrive same day."
      },
      {
        question: "What vehicle is common?",
        options: ["Vans", "Ships", "Trains", "Aircraft"],
        correctAnswer: "Vans",
        explanation: "Vans handle urban deliveries."
      },
      {
        question: "What reduces failed delivery?",
        options: ["Accurate address", "Manual notes", "No tracking", "Poor communication"],
        correctAnswer: "Accurate address",
        explanation: "Correct details ensure success."
      },
      {
        question: "What improves customer satisfaction?",
        options: ["Real-time tracking", "No updates", "Delays", "Missed delivery"],
        correctAnswer: "Real-time tracking",
        explanation: "Transparency improves trust."
      },
      {
        question: "What enables scalability?",
        options: ["Delivery platforms", "Manual labor", "Paper logs", "Fixed schedules"],
        correctAnswer: "Delivery platforms",
        explanation: "Platforms scale operations."
      }
    ],

    "Warehousing": [
      {
        question: "What is warehousing?",
        options: ["Transport goods", "Store goods", "Manufacture goods", "Sell goods"],
        correctAnswer: "Store goods",
        explanation: "Warehouses store inventory."
      },
      {
        question: "What is picking?",
        options: ["Selecting items", "Packing items", "Shipping items", "Receiving goods"],
        correctAnswer: "Selecting items",
        explanation: "Picking retrieves items for orders."
      },
      {
        question: "What improves warehouse efficiency?",
        options: ["Automation", "Manual work", "Poor layout", "Paper tracking"],
        correctAnswer: "Automation",
        explanation: "Automation speeds operations."
      },
      {
        question: "What is WMS?",
        options: ["Warehouse Management System", "Worker Monitoring Service", "World Material System", "Wide Market Storage"],
        correctAnswer: "Warehouse Management System",
        explanation: "WMS manages warehouse operations."
      },
      {
        question: "What is cross-docking?",
        options: ["Direct transfer", "Long storage", "Packaging", "Sorting"],
        correctAnswer: "Direct transfer",
        explanation: "Goods move directly to outbound."
      },
      {
        question: "What reduces storage cost?",
        options: ["Space optimization", "Overstocking", "Manual tracking", "Delays"],
        correctAnswer: "Space optimization",
        explanation: "Optimized layout saves space."
      },
      {
        question: "What is inventory turnover?",
        options: ["Stock movement rate", "Warehouse size", "Delivery speed", "Order volume"],
        correctAnswer: "Stock movement rate",
        explanation: "Measures inventory efficiency."
      },
      {
        question: "What ensures accuracy?",
        options: ["Barcode scanning", "Manual counting", "Paper logs", "Memory"],
        correctAnswer: "Barcode scanning",
        explanation: "Scanning reduces errors."
      },
      {
        question: "What improves safety?",
        options: ["Clear aisles", "Overcrowding", "Poor lighting", "Manual lifting"],
        correctAnswer: "Clear aisles",
        explanation: "Clear aisles reduce accidents."
      },
      {
        question: "What supports scalability?",
        options: ["Modular layout", "Fixed design", "Manual records", "No system"],
        correctAnswer: "Modular layout",
        explanation: "Modular design scales easily."
      }
    ],

    "Freight & Cargo": [
      {
        question: "What is freight?",
        options: ["Passengers", "Goods transport", "Mail only", "Vehicles"],
        correctAnswer: "Goods transport",
        explanation: "Freight refers to cargo movement."
      },
      {
        question: "What is air freight used for?",
        options: ["Low-value goods", "High-speed delivery", "Bulk materials", "Heavy machinery"],
        correctAnswer: "High-speed delivery",
        explanation: "Air freight is fastest."
      },
      {
        question: "What is freight forwarding?",
        options: ["Manufacturing", "Logistics coordination", "Retailing", "Warehousing"],
        correctAnswer: "Logistics coordination",
        explanation: "Forwarders manage shipments."
      },
      {
        question: "What affects freight cost?",
        options: ["Weight", "Distance", "Mode", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Multiple factors affect cost."
      },
      {
        question: "What is multimodal transport?",
        options: ["Single mode", "Multiple modes", "Manual delivery", "Local shipping"],
        correctAnswer: "Multiple modes",
        explanation: "Uses more than one transport mode."
      },
      {
        question: "What document accompanies cargo?",
        options: ["Bill of lading", "Invoice only", "Receipt", "License"],
        correctAnswer: "Bill of lading",
        explanation: "It is a shipping document."
      },
      {
        question: "What is payload?",
        options: ["Vehicle weight", "Cargo capacity", "Fuel load", "Engine size"],
        correctAnswer: "Cargo capacity",
        explanation: "Payload is carrying capacity."
      },
      {
        question: "What improves cargo safety?",
        options: ["Proper packaging", "Loose loading", "Overloading", "No labels"],
        correctAnswer: "Proper packaging",
        explanation: "Packaging prevents damage."
      },
      {
        question: "What is cold chain?",
        options: ["Frozen logistics", "Temperature-controlled supply", "Manual storage", "Bulk transport"],
        correctAnswer: "Temperature-controlled supply",
        explanation: "Cold chain preserves perishables."
      },
      {
        question: "What increases efficiency?",
        options: ["Standard containers", "Manual loading", "Irregular packaging", "Delays"],
        correctAnswer: "Standard containers",
        explanation: "Containers simplify handling."
      }
    ],

    "Public Transportation": [
      {
        question: "What is public transportation?",
        options: ["Private vehicles", "Shared transport", "Freight transport", "Air cargo"],
        correctAnswer: "Shared transport",
        explanation: "Public transport serves multiple users."
      },
      {
        question: "What reduces city pollution?",
        options: ["Public transit", "Private cars", "Traffic jams", "Idling"],
        correctAnswer: "Public transit",
        explanation: "Shared transport lowers emissions."
      },
      {
        question: "What is fare integration?",
        options: ["Single ticket usage", "Multiple payments", "Manual fares", "Free rides"],
        correctAnswer: "Single ticket usage",
        explanation: "One ticket across systems."
      },
      {
        question: "What improves reliability?",
        options: ["Fixed schedules", "Real-time tracking", "Manual updates", "No data"],
        correctAnswer: "Real-time tracking",
        explanation: "Tracking improves punctuality."
      },
      {
        question: "What is BRT?",
        options: ["Bus Rapid Transit", "Basic Rail Transport", "Bulk Road Travel", "Bus Route Terminal"],
        correctAnswer: "Bus Rapid Transit",
        explanation: "BRT offers fast bus service."
      },
      {
        question: "What increases accessibility?",
        options: ["Low-floor buses", "High steps", "No ramps", "Manual tickets"],
        correctAnswer: "Low-floor buses",
        explanation: "They improve access."
      },
      {
        question: "What is ridership?",
        options: ["Vehicle speed", "Passenger count", "Route length", "Fare amount"],
        correctAnswer: "Passenger count",
        explanation: "Ridership measures usage."
      },
      {
        question: "What improves safety?",
        options: ["CCTV", "Poor lighting", "Overcrowding", "No staff"],
        correctAnswer: "CCTV",
        explanation: "Monitoring improves safety."
      },
      {
        question: "What supports sustainability?",
        options: ["Electric buses", "Diesel buses", "Private cars", "Congestion"],
        correctAnswer: "Electric buses",
        explanation: "They reduce emissions."
      },
      {
        question: "What encourages usage?",
        options: ["Affordable fares", "High prices", "Delays", "Poor coverage"],
        correctAnswer: "Affordable fares",
        explanation: "Cost affects adoption."
      }
    ],

    "Space Transportation": [
      {
        question: "What is space transportation?",
        options: ["Air travel", "Earth transport", "Space travel systems", "Maritime travel"],
        correctAnswer: "Space travel systems",
        explanation: "It involves moving payloads to space."
      },
      {
        question: "What launches spacecraft?",
        options: ["Jet engine", "Rocket", "Electric motor", "Propeller"],
        correctAnswer: "Rocket",
        explanation: "Rockets provide thrust."
      },
      {
        question: "What is payload?",
        options: ["Fuel", "Crew", "Cargo carried", "Engine"],
        correctAnswer: "Cargo carried",
        explanation: "Payload is carried mass."
      },
      {
        question: "What is reusable launch vehicle?",
        options: ["Single-use rocket", "Reusable rocket", "Satellite", "Space station"],
        correctAnswer: "Reusable rocket",
        explanation: "Reusable rockets reduce cost."
      },
      {
        question: "What is LEO?",
        options: ["Low Earth Orbit", "Large Energy Orbit", "Long Entry Orbit", "Low Escape Orbit"],
        correctAnswer: "Low Earth Orbit",
        explanation: "LEO is closest orbit."
      },
      {
        question: "What improves launch efficiency?",
        options: ["Reusability", "Heavier payload", "Single-use", "Manual control"],
        correctAnswer: "Reusability",
        explanation: "Reusability lowers cost."
      },
      {
        question: "What carries satellites?",
        options: ["Space shuttle", "Launch vehicle", "Aircraft", "Train"],
        correctAnswer: "Launch vehicle",
        explanation: "Launch vehicles deploy satellites."
      },
      {
        question: "What is spaceport?",
        options: ["Airport", "Launch site", "Seaport", "Station"],
        correctAnswer: "Launch site",
        explanation: "Spaceports host launches."
      },
      {
        question: "What is orbital insertion?",
        options: ["Launch delay", "Placing in orbit", "Landing", "Docking"],
        correctAnswer: "Placing in orbit",
        explanation: "Insertion places payload in orbit."
      },
      {
        question: "What supports commercial space?",
        options: ["Private companies", "Manual systems", "No funding", "Single agency"],
        correctAnswer: "Private companies",
        explanation: "Private sector drives innovation."
      }
    ]

  },
  agriculture:{
    "AgTech": [
      {
        question: "What does AgTech stand for?",
        options: [
          "Agricultural Technology",
          "Agricultural Trading",
          "Advanced Grain Techniques",
          "Automated Green Technology"
        ],
        correctAnswer: "Agricultural Technology",
        explanation: "AgTech refers to technology innovations designed to improve agricultural productivity and efficiency."
      },
      {
        question: "Which technology is commonly used to monitor crop health from the air?",
        options: ["Drones", "Tractors", "Irrigation pumps", "Harvesters"],
        correctAnswer: "Drones",
        explanation: "Drones equipped with cameras and sensors help monitor crop health and field conditions."
      },
      {
        question: "What is the purpose of farm management software?",
        options: [
          "Entertainment for farmers",
          "Track farm operations and productivity",
          "Replace tractors",
          "Sell crops automatically"
        ],
        correctAnswer: "Track farm operations and productivity",
        explanation: "Farm management software helps farmers monitor operations, finances, and crop performance."
      },
      {
        question: "Which technology allows farmers to collect real-time soil data?",
        options: [
          "Soil sensors",
          "Weather satellites",
          "Manual observation",
          "Harvesting machines"
        ],
        correctAnswer: "Soil sensors",
        explanation: "Soil sensors measure moisture, nutrients, and temperature to improve farming decisions."
      },
      {
        question: "Which system uses satellites to guide farm machinery?",
        options: [
          "GPS",
          "Bluetooth",
          "Wi-Fi",
          "Ethernet"
        ],
        correctAnswer: "GPS",
        explanation: "GPS technology enables precision navigation for tractors and farm equipment."
      },
      {
        question: "What is smart irrigation?",
        options: [
          "Manual watering system",
          "Watering crops using automated sensors",
          "Using only rainwater",
          "Irrigating once per season"
        ],
        correctAnswer: "Watering crops using automated sensors",
        explanation: "Smart irrigation systems automatically adjust water supply based on soil and weather data."
      },
      {
        question: "Which technology helps predict crop yields using data?",
        options: [
          "Artificial Intelligence",
          "Mechanical tools",
          "Manual forecasting",
          "Hand irrigation"
        ],
        correctAnswer: "Artificial Intelligence",
        explanation: "AI analyzes weather, soil, and crop data to predict yields and optimize farming."
      },
      {
        question: "What role does IoT play in agriculture?",
        options: [
          "Connecting farm devices and sensors",
          "Replacing farmers",
          "Creating fertilizers",
          "Harvesting crops automatically"
        ],
        correctAnswer: "Connecting farm devices and sensors",
        explanation: "IoT enables connected devices to collect and share farm data in real time."
      },
      {
        question: "Which device is used to monitor weather conditions on farms?",
        options: [
          "Weather station",
          "Laptop",
          "Plow",
          "Seeder"
        ],
        correctAnswer: "Weather station",
        explanation: "Weather stations track rainfall, temperature, and humidity for better farming decisions."
      },
      {
        question: "What is the main benefit of AgTech?",
        options: [
          "Reduced crop variety",
          "Improved productivity and efficiency",
          "Less data usage",
          "More manual labor"
        ],
        correctAnswer: "Improved productivity and efficiency",
        explanation: "AgTech helps farmers produce more food efficiently while reducing costs and waste."
      }
    ],
     "Farming": [
      {
        question: "What is farming?",
        options: ["Cultivation of crops and raising animals","Mining resources","Building factories","Manufacturing goods"],
        correctAnswer: "Cultivation of crops and raising animals",
        explanation: "Farming includes growing crops and raising livestock."
      },
      {
        question: "Which season is ideal for planting many crops?",
        options: ["Spring","Winter","Autumn","Summer"],
        correctAnswer: "Spring",
        explanation: "Spring provides favorable weather for crop growth."
      },
      {
        question: "What is irrigation?",
        options: ["Artificial supply of water to crops","Harvesting crops","Plowing fields","Plant breeding"],
        correctAnswer: "Artificial supply of water to crops",
        explanation: "Irrigation ensures crops receive adequate water."
      },
      {
        question: "Which tool is used to till soil?",
        options: ["Plow","Drone","Pump","Sensor"],
        correctAnswer: "Plow",
        explanation: "Plows turn soil to prepare it for planting."
      },
      {
        question: "Crop rotation helps to:",
        options: ["Maintain soil fertility","Reduce water","Increase pests","Decrease yield"],
        correctAnswer: "Maintain soil fertility",
        explanation: "Different crops replenish soil nutrients."
      },
      {
        question: "Livestock farming mainly involves:",
        options: ["Raising animals","Growing trees","Mining","Manufacturing"],
        correctAnswer: "Raising animals",
        explanation: "Livestock farming includes cattle, poultry, and sheep."
      },
      {
        question: "Which crop is a staple food worldwide?",
        options: ["Rice","Cotton","Rubber","Tea"],
        correctAnswer: "Rice",
        explanation: "Rice feeds billions globally."
      },
      {
        question: "Harvesting means:",
        options: ["Collecting mature crops","Planting seeds","Watering fields","Removing weeds"],
        correctAnswer: "Collecting mature crops",
        explanation: "Harvesting occurs when crops are ready."
      },
      {
        question: "Fertilizers are used to:",
        options: ["Provide nutrients","Kill pests","Increase rainfall","Improve sunlight"],
        correctAnswer: "Provide nutrients",
        explanation: "Fertilizers enrich soil nutrients."
      },
      {
        question: "Traditional farming relies heavily on:",
        options: ["Manual labor","Automation","AI","Robotics"],
        correctAnswer: "Manual labor",
        explanation: "Traditional farming uses human and animal labor."
      }
    ],
     "Food Production": [
      {
        question: "What does food production primarily involve?",
        options: ["Growing and processing food","Manufacturing electronics","Mining minerals","Producing fuel"],
        correctAnswer: "Growing and processing food",
        explanation: "Food production includes cultivating crops and processing them into edible products."
      },
      {
        question: "Which crop is a major global food staple?",
        options: ["Rice","Rubber","Cotton","Tobacco"],
        correctAnswer: "Rice",
        explanation: "Rice is a staple food for a large part of the world's population."
      },
      {
        question: "Which factor is essential for crop growth?",
        options: ["Sunlight","Plastic","Steel","Oil"],
        correctAnswer: "Sunlight",
        explanation: "Plants require sunlight for photosynthesis."
      },
      {
        question: "Which method increases crop yield by improving plant genetics?",
        options: ["Selective breeding","Painting","Packaging","Freezing"],
        correctAnswer: "Selective breeding",
        explanation: "Selective breeding improves crop traits like yield and resistance."
      },
      {
        question: "Which organization focuses on global food security?",
        options: ["FAO","NASA","WHO","FIFA"],
        correctAnswer: "FAO",
        explanation: "The Food and Agriculture Organization works to improve global food security."
      },
      {
        question: "Which process converts raw crops into edible products?",
        options: ["Food processing","Mining","Construction","Weaving"],
        correctAnswer: "Food processing",
        explanation: "Food processing prepares raw agricultural products for consumption."
      },
      {
        question: "Which nutrient is vital for plant growth?",
        options: ["Nitrogen","Iron rods","Plastic","Rubber"],
        correctAnswer: "Nitrogen",
        explanation: "Nitrogen is essential for plant development."
      },
      {
        question: "Greenhouses help food production by:",
        options: ["Controlling climate","Producing electricity","Mining soil","Reducing sunlight"],
        correctAnswer: "Controlling climate",
        explanation: "Greenhouses provide optimal growing conditions."
      },
      {
        question: "Which practice improves soil fertility naturally?",
        options: ["Composting","Burning soil","Adding plastic","Freezing soil"],
        correctAnswer: "Composting",
        explanation: "Composting adds organic nutrients to soil."
      },
      {
        question: "Which term refers to growing plants for human consumption?",
        options: ["Crop cultivation","Metal refining","Textile weaving","Oil drilling"],
        correctAnswer: "Crop cultivation",
        explanation: "Crop cultivation is the basis of food production."
      }
    ],

    "Sustainable Agriculture": [
      {
        question: "What is the goal of sustainable agriculture?",
        options: ["Protect environment while producing food","Maximize pollution","Reduce soil health","Use unlimited chemicals"],
        correctAnswer: "Protect environment while producing food",
        explanation: "Sustainable agriculture balances food production with environmental protection."
      },
      {
        question: "Which practice conserves soil?",
        options: ["Crop rotation","Burning crops","Deforestation","Overgrazing"],
        correctAnswer: "Crop rotation",
        explanation: "Crop rotation helps maintain soil nutrients."
      },
      {
        question: "Which farming method reduces chemical usage?",
        options: ["Organic farming","Industrial mining","Heavy spraying","Plastic farming"],
        correctAnswer: "Organic farming",
        explanation: "Organic farming avoids synthetic chemicals."
      },
      {
        question: "Which resource must sustainable farming conserve?",
        options: ["Water","Plastic","Coal","Rubber"],
        correctAnswer: "Water",
        explanation: "Water conservation is essential for sustainability."
      },
      {
        question: "Planting trees around farms helps:",
        options: ["Prevent soil erosion","Reduce oxygen","Increase pollution","Destroy crops"],
        correctAnswer: "Prevent soil erosion",
        explanation: "Trees stabilize soil and reduce erosion."
      },
      {
        question: "Integrated pest management focuses on:",
        options: ["Reducing chemical pesticides","Increasing pesticides","Ignoring pests","Burning crops"],
        correctAnswer: "Reducing chemical pesticides",
        explanation: "IPM combines biological and natural pest control methods."
      },
      {
        question: "Sustainable agriculture supports:",
        options: ["Long-term productivity","Short-term destruction","Excessive chemicals","Resource waste"],
        correctAnswer: "Long-term productivity",
        explanation: "It ensures farms remain productive for future generations."
      },
      {
        question: "Which energy source supports sustainability?",
        options: ["Solar energy","Coal","Diesel","Gasoline"],
        correctAnswer: "Solar energy",
        explanation: "Renewable energy reduces environmental impact."
      },
      {
        question: "Which farming practice reduces greenhouse gases?",
        options: ["Agroforestry","Burning forests","Overfertilizing","Mining"],
        correctAnswer: "Agroforestry",
        explanation: "Agroforestry integrates trees into farming systems."
      },
      {
        question: "Sustainable agriculture mainly focuses on:",
        options: ["Environment, economy, society","Mining","Manufacturing","Urban construction"],
        correctAnswer: "Environment, economy, society",
        explanation: "It balances ecological, economic, and social sustainability."
      }
    ],

    "Precision Agriculture": [
      {
        question: "What is precision agriculture?",
        options: ["Data-driven farming","Random planting","Manual farming","Urban farming"],
        correctAnswer: "Data-driven farming",
        explanation: "Precision agriculture uses technology and data to optimize farming."
      },
      {
        question: "Which technology helps map farm fields?",
        options: ["GPS","Radio","Telephone","Fax"],
        correctAnswer: "GPS",
        explanation: "GPS provides accurate field location data."
      },
      {
        question: "Which device monitors soil nutrients?",
        options: ["Soil sensor","Laptop","Drone battery","Water pump"],
        correctAnswer: "Soil sensor",
        explanation: "Sensors measure nutrient and moisture levels."
      },
      {
        question: "Precision agriculture reduces:",
        options: ["Resource waste","Crop yield","Technology use","Information"],
        correctAnswer: "Resource waste",
        explanation: "Data helps apply resources efficiently."
      },
      {
        question: "Which technology captures aerial crop images?",
        options: ["Drones","Plows","Harvesters","Trucks"],
        correctAnswer: "Drones",
        explanation: "Drones monitor crop health."
      },
      {
        question: "Variable rate technology controls:",
        options: ["Fertilizer application","Harvest time","Rainfall","Plant genetics"],
        correctAnswer: "Fertilizer application",
        explanation: "VRT adjusts input levels across fields."
      },
      {
        question: "Satellite imagery helps farmers:",
        options: ["Monitor crop growth","Cook food","Harvest manually","Repair tools"],
        correctAnswer: "Monitor crop growth",
        explanation: "Satellite data reveals plant health patterns."
      },
      {
        question: "Precision agriculture improves:",
        options: ["Efficiency","Waste","Pollution","Random farming"],
        correctAnswer: "Efficiency",
        explanation: "Data improves decision-making."
      },
      {
        question: "Which data type helps forecast yield?",
        options: ["Weather data","Music data","Movie data","Social media data"],
        correctAnswer: "Weather data",
        explanation: "Weather strongly affects crop productivity."
      },
      {
        question: "Precision farming mainly uses:",
        options: ["Technology","Manual labor only","Animal power","Paper maps"],
        correctAnswer: "Technology",
        explanation: "It relies on sensors, AI, and satellite data."
      }
    ],

    "Aquaculture": [
      {
        question: "Aquaculture refers to:",
        options: ["Farming fish and aquatic organisms","Growing trees","Mining minerals","Breeding insects"],
        correctAnswer: "Farming fish and aquatic organisms",
        explanation: "Aquaculture produces fish, shrimp, and other aquatic species."
      },
      {
        question: "Fish farms are also known as:",
        options: ["Aquafarms","Crop fields","Dairy farms","Vineyards"],
        correctAnswer: "Aquafarms",
        explanation: "Aquaculture farms raise aquatic species."
      },
      {
        question: "Which fish is commonly farmed worldwide?",
        options: ["Tilapia","Tiger","Chicken","Goat"],
        correctAnswer: "Tilapia",
        explanation: "Tilapia grows quickly and adapts well to farming."
      },
      {
        question: "Aquaculture helps meet demand for:",
        options: ["Seafood","Cars","Electronics","Steel"],
        correctAnswer: "Seafood",
        explanation: "It increases seafood supply."
      },
      {
        question: "Which environment supports aquaculture?",
        options: ["Water","Desert","Mountains","Air"],
        correctAnswer: "Water",
        explanation: "Aquatic species require water habitats."
      },
      {
        question: "Which organism is farmed in aquaculture?",
        options: ["Shrimp","Sheep","Cow","Horse"],
        correctAnswer: "Shrimp",
        explanation: "Shrimp farming is a major aquaculture industry."
      },
      {
        question: "Aquaculture reduces pressure on:",
        options: ["Wild fish populations","Road traffic","Air pollution","Forest plants"],
        correctAnswer: "Wild fish populations",
        explanation: "Farmed fish reduce overfishing."
      },
      {
        question: "Fish ponds are used to:",
        options: ["Raise fish","Grow trees","Mine soil","Dry grains"],
        correctAnswer: "Raise fish",
        explanation: "Ponds provide controlled fish habitats."
      },
      {
        question: "Which nutrient source feeds farmed fish?",
        options: ["Fish feed","Plastic","Metal","Sand"],
        correctAnswer: "Fish feed",
        explanation: "Feed supplies nutrients for fish growth."
      },
      {
        question: "Aquaculture contributes to:",
        options: ["Food security","Space exploration","Car production","Textile manufacturing"],
        correctAnswer: "Food security",
        explanation: "It provides protein-rich food globally."
      }
    ],
    "Vertical Farming": [
  {
    question: "What is vertical farming?",
    options: ["Growing crops in stacked layers","Growing crops only outdoors","Raising livestock","Mining soil"],
    correctAnswer: "Growing crops in stacked layers",
    explanation: "Vertical farming grows crops in vertically stacked layers, often indoors."
  },
  {
    question: "Vertical farming is commonly done in:",
    options: ["Urban buildings","Deserts","Oceans","Mountains"],
    correctAnswer: "Urban buildings",
    explanation: "Vertical farms are often located in cities using warehouses or buildings."
  },
  {
    question: "Which light source is commonly used in vertical farms?",
    options: ["LED lights","Candles","Fire lamps","Sun reflection mirrors"],
    correctAnswer: "LED lights",
    explanation: "LED lights provide efficient artificial light for plant growth."
  },
  {
    question: "Which farming method is often used in vertical farms?",
    options: ["Hydroponics","Burn farming","Slash-and-burn","Dryland farming"],
    correctAnswer: "Hydroponics",
    explanation: "Hydroponics grows plants without soil using nutrient solutions."
  },
  {
    question: "Vertical farming helps reduce:",
    options: ["Land usage","Crop yield","Plant growth","Water efficiency"],
    correctAnswer: "Land usage",
    explanation: "Stacking crops vertically maximizes space efficiency."
  },
  {
    question: "Vertical farms often use controlled:",
    options: ["Climate systems","Wild weather","Natural storms","Animal grazing"],
    correctAnswer: "Climate systems",
    explanation: "Indoor farms control temperature, humidity, and lighting."
  },
  {
    question: "Vertical farming allows year-round:",
    options: ["Crop production","Snowfall","Fishing","Mining"],
    correctAnswer: "Crop production",
    explanation: "Indoor conditions allow continuous production."
  },
  {
    question: "Which crop is commonly grown in vertical farms?",
    options: ["Lettuce","Wheat","Corn","Sugarcane"],
    correctAnswer: "Lettuce",
    explanation: "Leafy greens grow well in controlled environments."
  },
  {
    question: "Vertical farming reduces:",
    options: ["Transportation distance","Food quality","Plant growth","Water use efficiency"],
    correctAnswer: "Transportation distance",
    explanation: "Urban farms reduce the distance from farm to consumer."
  },
  {
    question: "Vertical farming mainly supports:",
    options: ["Urban agriculture","Ocean fishing","Mining","Forestry"],
    correctAnswer: "Urban agriculture",
    explanation: "It enables crop production inside cities."
  }
],

"Agricultural Biotechnology": [
  {
    question: "Agricultural biotechnology involves:",
    options: ["Using biological science to improve crops","Mining soil","Building tractors","Manufacturing plastic"],
    correctAnswer: "Using biological science to improve crops",
    explanation: "Biotechnology improves plant traits using scientific methods."
  },
  {
    question: "Genetic modification allows scientists to:",
    options: ["Alter plant DNA","Change weather","Control sunlight","Increase soil size"],
    correctAnswer: "Alter plant DNA",
    explanation: "GM technology modifies plant genes for better traits."
  },
  {
    question: "Biotech crops are often designed for:",
    options: ["Pest resistance","Metal production","Car manufacturing","Fuel extraction"],
    correctAnswer: "Pest resistance",
    explanation: "Some crops resist insects through genetic modification."
  },
  {
    question: "Which crop is widely genetically modified?",
    options: ["Corn","Grass","Pine","Oak"],
    correctAnswer: "Corn",
    explanation: "GM corn is widely used in agriculture."
  },
  {
    question: "Golden Rice was developed to:",
    options: ["Increase vitamin A","Improve taste only","Change color","Reduce water"],
    correctAnswer: "Increase vitamin A",
    explanation: "Golden Rice was engineered to address vitamin A deficiency."
  },
  {
    question: "Biotechnology helps improve:",
    options: ["Crop yield","Car engines","Computer speed","Road construction"],
    correctAnswer: "Crop yield",
    explanation: "Improved genetics can increase productivity."
  },
  {
    question: "Which science studies genes?",
    options: ["Genetics","Physics","Astronomy","Geology"],
    correctAnswer: "Genetics",
    explanation: "Genetics focuses on heredity and gene function."
  },
  {
    question: "Biotech crops can tolerate:",
    options: ["Herbicides","Electricity","Metal","Plastic"],
    correctAnswer: "Herbicides",
    explanation: "Some genetically modified crops resist herbicides."
  },
  {
    question: "Biotechnology may help crops resist:",
    options: ["Diseases","Sunlight","Wind","Rain"],
    correctAnswer: "Diseases",
    explanation: "Gene modifications can strengthen disease resistance."
  },
  {
    question: "Agricultural biotechnology contributes to:",
    options: ["Food security","Space travel","Road construction","Mining"],
    correctAnswer: "Food security",
    explanation: "Improved crops help meet global food demand."
  }
],

"Food Processing": [
  {
    question: "Food processing refers to:",
    options: ["Transforming raw ingredients into food products","Growing crops","Mining food","Transporting food"],
    correctAnswer: "Transforming raw ingredients into food products",
    explanation: "Processing converts raw materials into edible products."
  },
  {
    question: "Which method preserves food by removing water?",
    options: ["Drying","Freezing","Boiling","Frying"],
    correctAnswer: "Drying",
    explanation: "Drying prevents microbial growth by reducing moisture."
  },
  {
    question: "Pasteurization is used to:",
    options: ["Kill harmful bacteria","Freeze food","Dry crops","Increase salt"],
    correctAnswer: "Kill harmful bacteria",
    explanation: "Heat treatment destroys harmful microorganisms."
  },
  {
    question: "Which product is commonly pasteurized?",
    options: ["Milk","Steel","Plastic","Wood"],
    correctAnswer: "Milk",
    explanation: "Pasteurized milk is safer for consumption."
  },
  {
    question: "Canning helps food last longer by:",
    options: ["Sealing in airtight containers","Adding oxygen","Exposing to air","Drying outside"],
    correctAnswer: "Sealing in airtight containers",
    explanation: "Canning prevents contamination."
  },
  {
    question: "Freezing food helps to:",
    options: ["Slow bacterial growth","Increase bacteria","Dry food","Cook food"],
    correctAnswer: "Slow bacterial growth",
    explanation: "Low temperatures slow microbial activity."
  },
  {
    question: "Food processing improves:",
    options: ["Shelf life","Soil quality","Rainfall","Sunlight"],
    correctAnswer: "Shelf life",
    explanation: "Processed foods can be stored longer."
  },
  {
    question: "Which food is produced through fermentation?",
    options: ["Yogurt","Plastic","Steel","Sand"],
    correctAnswer: "Yogurt",
    explanation: "Fermentation uses bacteria to convert sugars."
  },
  {
    question: "Packaging helps to:",
    options: ["Protect food","Grow crops","Improve soil","Increase rainfall"],
    correctAnswer: "Protect food",
    explanation: "Packaging protects products from contamination."
  },
  {
    question: "Food processing industries are part of:",
    options: ["Food supply chain","Space exploration","Mining industry","Automotive industry"],
    correctAnswer: "Food supply chain",
    explanation: "Processing connects farms to consumers."
  }
],

"Organic Farming": [
  {
    question: "Organic farming avoids:",
    options: ["Synthetic chemicals","Water","Sunlight","Soil"],
    correctAnswer: "Synthetic chemicals",
    explanation: "Organic farming relies on natural inputs."
  },
  {
    question: "Which fertilizer is used in organic farming?",
    options: ["Compost","Chemical fertilizer","Plastic fertilizer","Synthetic powder"],
    correctAnswer: "Compost",
    explanation: "Compost provides natural nutrients."
  },
  {
    question: "Organic farming promotes:",
    options: ["Soil health","Soil destruction","Heavy pollution","Chemical waste"],
    correctAnswer: "Soil health",
    explanation: "Natural practices improve soil quality."
  },
  {
    question: "Organic pest control uses:",
    options: ["Natural predators","Chemical sprays","Plastic traps","Metal rods"],
    correctAnswer: "Natural predators",
    explanation: "Biological control helps manage pests."
  },
  {
    question: "Organic crops are grown without:",
    options: ["Synthetic pesticides","Water","Sunlight","Soil"],
    correctAnswer: "Synthetic pesticides",
    explanation: "Organic farming uses natural pest management."
  },
  {
    question: "Organic farming supports:",
    options: ["Biodiversity","Pollution","Deforestation","Soil erosion"],
    correctAnswer: "Biodiversity",
    explanation: "Organic systems support diverse ecosystems."
  },
  {
    question: "Organic certification ensures:",
    options: ["Compliance with organic standards","Higher rainfall","Better machinery","Free electricity"],
    correctAnswer: "Compliance with organic standards",
    explanation: "Certification verifies organic practices."
  },
  {
    question: "Organic farming uses crop rotation to:",
    options: ["Maintain soil nutrients","Destroy soil","Reduce plants","Increase pollution"],
    correctAnswer: "Maintain soil nutrients",
    explanation: "Rotating crops helps balance nutrients."
  },
  {
    question: "Organic food is often perceived as:",
    options: ["More natural","Artificial","Plastic-based","Synthetic"],
    correctAnswer: "More natural",
    explanation: "Consumers associate organic food with natural production."
  },
  {
    question: "Organic agriculture supports:",
    options: ["Sustainable farming","Industrial mining","Heavy chemicals","Urban pollution"],
    correctAnswer: "Sustainable farming",
    explanation: "Organic farming promotes long-term sustainability."
  }
],

"Plant-Based Foods": [
  {
    question: "Plant-based foods are derived from:",
    options: ["Plants","Animals","Metals","Minerals"],
    correctAnswer: "Plants",
    explanation: "Plant-based foods come from vegetables, grains, legumes, and fruits."
  },
  {
    question: "Which food is plant-based?",
    options: ["Tofu","Beef","Chicken","Fish"],
    correctAnswer: "Tofu",
    explanation: "Tofu is made from soybeans."
  },
  {
    question: "Plant-based diets often include:",
    options: ["Vegetables","Meat only","Fish only","Eggs only"],
    correctAnswer: "Vegetables",
    explanation: "Vegetables are a key component of plant-based diets."
  },
  {
    question: "Which nutrient is abundant in legumes?",
    options: ["Protein","Plastic","Metal","Oil"],
    correctAnswer: "Protein",
    explanation: "Beans and lentils are good protein sources."
  },
  {
    question: "Plant-based foods can reduce:",
    options: ["Environmental impact","Plant growth","Food production","Water supply"],
    correctAnswer: "Environmental impact",
    explanation: "Plant-based diets often require fewer resources."
  },
  {
    question: "Soy milk is made from:",
    options: ["Soybeans","Rice","Corn","Potatoes"],
    correctAnswer: "Soybeans",
    explanation: "Soybeans are processed to make soy milk."
  },
  {
    question: "Plant-based meat alternatives are designed to:",
    options: ["Mimic meat taste","Increase mining","Replace water","Grow trees"],
    correctAnswer: "Mimic meat taste",
    explanation: "They replicate texture and flavor of meat."
  },
  {
    question: "Which crop is commonly used in plant-based protein?",
    options: ["Peas","Steel","Coal","Rubber"],
    correctAnswer: "Peas",
    explanation: "Pea protein is widely used in meat substitutes."
  },
  {
    question: "Plant-based diets are often linked to:",
    options: ["Health benefits","Metal production","Plastic waste","Mining"],
    correctAnswer: "Health benefits",
    explanation: "They may reduce risk of some diseases."
  },
  {
    question: "Plant-based food innovation is growing due to:",
    options: ["Consumer demand","Mining demand","Metal production","Oil exploration"],
    correctAnswer: "Consumer demand",
    explanation: "More consumers seek sustainable food options."
  }
],

"Agricultural Equipment": [
  {
    question: "A tractor is mainly used for:",
    options: ["Pulling farm machinery","Cooking food","Plant breeding","Mining"],
    correctAnswer: "Pulling farm machinery",
    explanation: "Tractors power many farming tasks."
  },
  {
    question: "Which machine harvests grain crops?",
    options: ["Combine harvester","Plow","Seeder","Cultivator"],
    correctAnswer: "Combine harvester",
    explanation: "Combines harvest, thresh, and clean grains."
  },
  {
    question: "A plow is used to:",
    options: ["Turn soil","Cut trees","Harvest crops","Water fields"],
    correctAnswer: "Turn soil",
    explanation: "Plowing prepares soil for planting."
  },
  {
    question: "A seed drill helps farmers:",
    options: ["Plant seeds evenly","Harvest crops","Cut grass","Pump water"],
    correctAnswer: "Plant seeds evenly",
    explanation: "Seed drills place seeds at correct depth and spacing."
  },
  {
    question: "Irrigation pumps are used to:",
    options: ["Move water","Plant seeds","Harvest crops","Measure soil"],
    correctAnswer: "Move water",
    explanation: "Pumps supply water to fields."
  },
  {
    question: "Agricultural machinery improves:",
    options: ["Efficiency","Pollution","Random farming","Manual labor"],
    correctAnswer: "Efficiency",
    explanation: "Machines increase productivity."
  },
  {
    question: "Which tool cuts grass for animal feed?",
    options: ["Mower","Drone","Sensor","Harvester"],
    correctAnswer: "Mower",
    explanation: "Mowers cut grass for hay or silage."
  },
  {
    question: "Modern farm equipment often uses:",
    options: ["GPS technology","Paper maps","Manual wheels","Wood gears"],
    correctAnswer: "GPS technology",
    explanation: "GPS enables precision farming."
  },
  {
    question: "Threshing separates:",
    options: ["Grain from stalks","Water from soil","Roots from leaves","Seeds from soil"],
    correctAnswer: "Grain from stalks",
    explanation: "Threshing removes edible grain."
  },
  {
    question: "Farm machinery reduces:",
    options: ["Manual labor","Crop yield","Plant growth","Water supply"],
    correctAnswer: "Manual labor",
    explanation: "Machines perform tasks faster than manual work."
  }
],

"Indoor Farming": [
  {
    question: "Indoor farming refers to:",
    options: ["Growing crops inside buildings","Fishing indoors","Raising livestock indoors","Mining indoors"],
    correctAnswer: "Growing crops inside buildings",
    explanation: "Indoor farming grows crops in controlled environments."
  },
  {
    question: "Indoor farms often use:",
    options: ["Artificial lighting","Natural storms","Heavy rain","Wild animals"],
    correctAnswer: "Artificial lighting",
    explanation: "Artificial light replaces sunlight indoors."
  },
  {
    question: "Hydroponics grows plants:",
    options: ["Without soil","Only in deserts","Only in oceans","Only outdoors"],
    correctAnswer: "Without soil",
    explanation: "Plants grow in nutrient-rich water."
  },
  {
    question: "Indoor farming allows:",
    options: ["Year-round production","Seasonal drought","Wild pests","Forest fires"],
    correctAnswer: "Year-round production",
    explanation: "Controlled conditions allow continuous growth."
  },
  {
    question: "Indoor farms control:",
    options: ["Temperature","Earthquakes","Volcanoes","Gravity"],
    correctAnswer: "Temperature",
    explanation: "Climate control optimizes plant growth."
  },
  {
    question: "Which crop grows well indoors?",
    options: ["Spinach","Wheat","Sugarcane","Corn"],
    correctAnswer: "Spinach",
    explanation: "Leafy greens are ideal for indoor farming."
  },
  {
    question: "Indoor farming can reduce:",
    options: ["Water usage","Food quality","Crop growth","Plant nutrients"],
    correctAnswer: "Water usage",
    explanation: "Hydroponics recycles water efficiently."
  },
  {
    question: "Indoor agriculture often uses:",
    options: ["Climate control systems","Wild animals","Natural floods","Forest fires"],
    correctAnswer: "Climate control systems",
    explanation: "Systems regulate humidity and temperature."
  },
  {
    question: "Indoor farming helps produce food:",
    options: ["Near urban areas","Only in forests","Only in deserts","Only in oceans"],
    correctAnswer: "Near urban areas",
    explanation: "Indoor farms can operate in cities."
  },
  {
    question: "Indoor farming mainly focuses on:",
    options: ["Controlled environment agriculture","Wild agriculture","Forest agriculture","Ocean agriculture"],
    correctAnswer: "Controlled environment agriculture",
    explanation: "Indoor farms manage all environmental conditions."
  }
]

  },
  construction:{
     "Commercial Construction": [
      {
        question: "Commercial construction mainly focuses on building:",
        options: ["Business facilities", "Private houses", "Farms", "Schools only"],
        correctAnswer: "Business facilities",
        explanation: "Commercial construction includes offices, malls, and business complexes."
      },
      {
        question: "Which building is considered commercial?",
        options: ["Shopping mall", "Farmhouse", "Barn", "Village hut"],
        correctAnswer: "Shopping mall",
        explanation: "Shopping malls are business spaces used for retail."
      },
      {
        question: "Commercial construction projects usually require:",
        options: ["Large investment", "No planning", "Minimal labor", "No permits"],
        correctAnswer: "Large investment",
        explanation: "Commercial buildings involve large budgets and planning."
      },
      {
        question: "Office towers fall under:",
        options: ["Commercial construction", "Agriculture", "Mining", "Forestry"],
        correctAnswer: "Commercial construction",
        explanation: "Office buildings are business-use structures."
      },
      {
        question: "Which professional oversees construction projects?",
        options: ["Project manager", "Chef", "Pilot", "Artist"],
        correctAnswer: "Project manager",
        explanation: "Project managers coordinate construction operations."
      },
      {
        question: "Blueprints in construction represent:",
        options: ["Building plans", "Paint colors", "Furniture lists", "Marketing plans"],
        correctAnswer: "Building plans",
        explanation: "Blueprints provide technical design drawings."
      },
      {
        question: "Commercial buildings must follow:",
        options: ["Building codes", "Cooking rules", "Traffic laws only", "Farm policies"],
        correctAnswer: "Building codes",
        explanation: "Codes ensure safety and structural standards."
      },
      {
        question: "Commercial construction commonly uses:",
        options: ["Steel frameworks", "Wood only", "Plastic walls", "Paper panels"],
        correctAnswer: "Steel frameworks",
        explanation: "Steel structures support large buildings."
      },
      {
        question: "Which stage comes first in construction?",
        options: ["Planning", "Painting", "Demolition", "Maintenance"],
        correctAnswer: "Planning",
        explanation: "Planning ensures efficient project execution."
      },
      {
        question: "Skyscrapers are examples of:",
        options: ["Commercial buildings", "Agricultural buildings", "Storage huts", "Animal shelters"],
        correctAnswer: "Commercial buildings",
        explanation: "Skyscrapers are typically office or mixed-use buildings."
      }
    ],

    "Residential Construction": [
      {
        question: "Residential construction focuses on building:",
        options: ["Homes for people", "Factories", "Airports", "Shopping malls"],
        correctAnswer: "Homes for people",
        explanation: "Residential construction builds houses and apartments."
      },
      {
        question: "An apartment building is an example of:",
        options: ["Residential construction", "Mining", "Agriculture", "Shipping"],
        correctAnswer: "Residential construction",
        explanation: "Apartments are designed for living spaces."
      },
      {
        question: "Which professional designs houses?",
        options: ["Architect", "Chef", "Driver", "Mechanic"],
        correctAnswer: "Architect",
        explanation: "Architects design residential building layouts."
      },
      {
        question: "Foundations support:",
        options: ["Entire building", "Furniture only", "Paint only", "Electric wires"],
        correctAnswer: "Entire building",
        explanation: "Foundations distribute building loads."
      },
      {
        question: "Which material is commonly used in house construction?",
        options: ["Concrete", "Glass only", "Paper", "Rubber"],
        correctAnswer: "Concrete",
        explanation: "Concrete is widely used for durability."
      },
      {
        question: "Roofing protects homes from:",
        options: ["Weather", "Electricity", "Gravity", "Sound"],
        correctAnswer: "Weather",
        explanation: "Roofs shield homes from rain and sunlight."
      },
      {
        question: "Which system supplies water inside homes?",
        options: ["Plumbing", "Electrical", "Heating", "Security"],
        correctAnswer: "Plumbing",
        explanation: "Plumbing distributes water."
      },
      {
        question: "A bungalow refers to:",
        options: ["Single-story house", "Factory", "Office building", "Mall"],
        correctAnswer: "Single-story house",
        explanation: "Bungalows typically have one floor."
      },
      {
        question: "Housing developments consist of:",
        options: ["Multiple residential units", "Factories", "Airports", "Power plants"],
        correctAnswer: "Multiple residential units",
        explanation: "Developments group homes in planned communities."
      },
      {
        question: "Home insulation helps with:",
        options: ["Energy efficiency", "Traffic control", "Food storage", "Mining"],
        correctAnswer: "Energy efficiency",
        explanation: "Insulation reduces energy loss."
      }
    ],

    "Real Estate Development": [
      {
        question: "Real estate development involves:",
        options: ["Improving land and buildings", "Mining minerals", "Manufacturing cars", "Fishing"],
        correctAnswer: "Improving land and buildings",
        explanation: "Developers transform land into usable property."
      },
      {
        question: "Developers usually purchase:",
        options: ["Land", "Cars", "Aircraft", "Ships"],
        correctAnswer: "Land",
        explanation: "Land is the foundation for development projects."
      },
      {
        question: "Which step occurs first in development?",
        options: ["Land acquisition", "Selling property", "Interior design", "Maintenance"],
        correctAnswer: "Land acquisition",
        explanation: "Developers must secure land first."
      },
      {
        question: "Zoning laws regulate:",
        options: ["Land use", "Cooking methods", "Clothing styles", "Weather patterns"],
        correctAnswer: "Land use",
        explanation: "Zoning controls building types and density."
      },
      {
        question: "Developers aim to:",
        options: ["Increase property value", "Reduce land use", "Decrease construction", "Stop growth"],
        correctAnswer: "Increase property value",
        explanation: "Development improves land value."
      },
      {
        question: "Mixed-use development includes:",
        options: ["Residential and commercial spaces", "Only farms", "Only factories", "Only warehouses"],
        correctAnswer: "Residential and commercial spaces",
        explanation: "Mixed-use projects combine multiple functions."
      },
      {
        question: "Financing development often involves:",
        options: ["Bank loans", "Fishing licenses", "Farm subsidies", "Mining permits"],
        correctAnswer: "Bank loans",
        explanation: "Large projects require financing."
      },
      {
        question: "Developers work closely with:",
        options: ["Architects and engineers", "Pilots", "Farmers", "Chefs"],
        correctAnswer: "Architects and engineers",
        explanation: "Design and technical expertise are required."
      },
      {
        question: "Urban redevelopment improves:",
        options: ["Old city areas", "Ocean habitats", "Mountain forests", "Deserts"],
        correctAnswer: "Old city areas",
        explanation: "Redevelopment revitalizes urban spaces."
      },
      {
        question: "A real estate project aims to:",
        options: ["Generate profit", "Produce electricity", "Mine coal", "Harvest crops"],
        correctAnswer: "Generate profit",
        explanation: "Developers invest to earn returns."
      }
    ],

    "Property Management": [
      {
        question: "Property management involves:",
        options: ["Maintaining buildings", "Mining land", "Designing clothes", "Operating airplanes"],
        correctAnswer: "Maintaining buildings",
        explanation: "Managers oversee maintenance and tenants."
      },
      {
        question: "Property managers handle:",
        options: ["Rent collection", "Aircraft maintenance", "Hospital surgeries", "Food production"],
        correctAnswer: "Rent collection",
        explanation: "Rent management is a key responsibility."
      },
      {
        question: "Tenants are:",
        options: ["People renting property", "Builders", "Architects", "Investors"],
        correctAnswer: "People renting property",
        explanation: "Tenants occupy rental properties."
      },
      {
        question: "Lease agreements define:",
        options: ["Rental terms", "Construction plans", "Food recipes", "Travel routes"],
        correctAnswer: "Rental terms",
        explanation: "Leases outline tenant obligations."
      },
      {
        question: "Maintenance ensures:",
        options: ["Property condition", "Crop growth", "Electricity generation", "Food production"],
        correctAnswer: "Property condition",
        explanation: "Maintenance keeps properties functional."
      },
      {
        question: "Property inspections help:",
        options: ["Identify issues", "Cook meals", "Design clothes", "Build cars"],
        correctAnswer: "Identify issues",
        explanation: "Inspections detect maintenance problems."
      },
      {
        question: "Which tool tracks tenants and payments?",
        options: ["Property management software", "Music software", "Video editor", "Game engine"],
        correctAnswer: "Property management software",
        explanation: "Software simplifies property operations."
      },
      {
        question: "Vacancy rate refers to:",
        options: ["Empty units", "Construction speed", "Population growth", "Weather patterns"],
        correctAnswer: "Empty units",
        explanation: "Vacancies reduce rental income."
      },
      {
        question: "Property managers ensure:",
        options: ["Tenant satisfaction", "Crop harvesting", "Car repairs", "Mining operations"],
        correctAnswer: "Tenant satisfaction",
        explanation: "Good service improves retention."
      },
      {
        question: "A landlord is:",
        options: ["Property owner", "Builder", "Architect", "Contractor"],
        correctAnswer: "Property owner",
        explanation: "Landlords own rental properties."
      }
    ],
    "Construction Technology": [
  {
    question: "Construction technology refers to:",
    options: ["Modern tools and methods used in construction","Farming techniques","Mining tools","Cooking equipment"],
    correctAnswer: "Modern tools and methods used in construction",
    explanation: "Construction technology improves efficiency, safety, and productivity in building projects."
  },
  {
    question: "Which technology allows digital building modeling?",
    options: ["BIM","GPS","HTML","VPN"],
    correctAnswer: "BIM",
    explanation: "Building Information Modeling creates digital representations of buildings."
  },
  {
    question: "3D printing in construction can:",
    options: ["Print building components","Harvest crops","Generate electricity","Process food"],
    correctAnswer: "Print building components",
    explanation: "3D printing can produce walls or structures using special materials."
  },
  {
    question: "Drones in construction help with:",
    options: ["Site monitoring","Cooking food","Interior painting","Car repairs"],
    correctAnswer: "Site monitoring",
    explanation: "Drones capture aerial images for progress tracking."
  },
  {
    question: "Construction software helps with:",
    options: ["Project planning","Music editing","Gaming","Video streaming"],
    correctAnswer: "Project planning",
    explanation: "Software tools manage schedules and resources."
  },
  {
    question: "Robotics in construction can:",
    options: ["Automate tasks","Replace electricity","Grow crops","Produce steel"],
    correctAnswer: "Automate tasks",
    explanation: "Robots can assist with bricklaying and demolition."
  },
  {
    question: "Sensors on construction sites help track:",
    options: ["Safety conditions","Food production","Crop growth","Ocean levels"],
    correctAnswer: "Safety conditions",
    explanation: "Sensors monitor hazards and structural conditions."
  },
  {
    question: "Laser scanning technology creates:",
    options: ["Accurate 3D models","Food recipes","Paint designs","Sound waves"],
    correctAnswer: "Accurate 3D models",
    explanation: "Laser scanners map building structures precisely."
  },
  {
    question: "Mobile apps in construction improve:",
    options: ["Communication","Weather control","Food supply","Vehicle manufacturing"],
    correctAnswer: "Communication",
    explanation: "Apps allow teams to coordinate efficiently."
  },
  {
    question: "Construction technology aims to increase:",
    options: ["Efficiency","Pollution","Manual errors","Delays"],
    correctAnswer: "Efficiency",
    explanation: "Technology streamlines construction processes."
  }
],

"Building Materials": [
  {
    question: "Concrete is mainly made from:",
    options: ["Cement, sand, and gravel","Plastic and rubber","Steel and wood","Glass and clay"],
    correctAnswer: "Cement, sand, and gravel",
    explanation: "Concrete is a mixture widely used in construction."
  },
  {
    question: "Steel is commonly used because it is:",
    options: ["Strong and durable","Soft","Transparent","Lightweight like paper"],
    correctAnswer: "Strong and durable",
    explanation: "Steel provides structural strength."
  },
  {
    question: "Bricks are typically made from:",
    options: ["Clay","Plastic","Rubber","Steel"],
    correctAnswer: "Clay",
    explanation: "Clay bricks are baked in kilns for strength."
  },
  {
    question: "Glass is used in buildings mainly for:",
    options: ["Windows","Foundations","Roads","Pipes"],
    correctAnswer: "Windows",
    explanation: "Glass allows light into buildings."
  },
  {
    question: "Wood is commonly used for:",
    options: ["Framing","Road paving","Water storage","Steel reinforcement"],
    correctAnswer: "Framing",
    explanation: "Wood is used in structural frames for homes."
  },
  {
    question: "Insulation materials help:",
    options: ["Maintain temperature","Increase noise","Reduce stability","Add weight"],
    correctAnswer: "Maintain temperature",
    explanation: "Insulation improves energy efficiency."
  },
  {
    question: "Cement is primarily used to:",
    options: ["Bind materials together","Decorate walls","Produce electricity","Store water"],
    correctAnswer: "Bind materials together",
    explanation: "Cement acts as a binding agent."
  },
  {
    question: "Which material resists corrosion well?",
    options: ["Stainless steel","Iron","Paper","Wood"],
    correctAnswer: "Stainless steel",
    explanation: "Stainless steel resists rust and corrosion."
  },
  {
    question: "Recycled building materials help:",
    options: ["Reduce waste","Increase pollution","Destroy forests","Increase costs"],
    correctAnswer: "Reduce waste",
    explanation: "Recycling materials supports sustainability."
  },
  {
    question: "Stone has been used in construction for:",
    options: ["Thousands of years","Only 10 years","One decade","One century"],
    correctAnswer: "Thousands of years",
    explanation: "Stone is one of the oldest building materials."
  }
],

"Infrastructure Development": [
  {
    question: "Infrastructure refers to:",
    options: ["Basic systems supporting society","Clothing production","Food cooking","Space exploration"],
    correctAnswer: "Basic systems supporting society",
    explanation: "Infrastructure includes roads, bridges, and utilities."
  },
  {
    question: "Road construction is part of:",
    options: ["Infrastructure development","Agriculture","Retail","Tourism"],
    correctAnswer: "Infrastructure development",
    explanation: "Road networks support transportation."
  },
  {
    question: "Bridges connect:",
    options: ["Separated land areas","Airports","Factories","Markets"],
    correctAnswer: "Separated land areas",
    explanation: "Bridges allow travel across rivers or valleys."
  },
  {
    question: "Railways are designed for:",
    options: ["Train transportation","Water transport","Air travel","Road vehicles"],
    correctAnswer: "Train transportation",
    explanation: "Railways carry passengers and goods."
  },
  {
    question: "Infrastructure projects are usually funded by:",
    options: ["Governments","Restaurants","Schools","Farmers"],
    correctAnswer: "Governments",
    explanation: "Public infrastructure often requires government investment."
  },
  {
    question: "Dams are built to:",
    options: ["Control water and generate power","Store cars","Grow crops","Build houses"],
    correctAnswer: "Control water and generate power",
    explanation: "Dams regulate rivers and produce hydroelectric power."
  },
  {
    question: "Airports are part of:",
    options: ["Transportation infrastructure","Agriculture","Education","Retail"],
    correctAnswer: "Transportation infrastructure",
    explanation: "Airports support air travel."
  },
  {
    question: "Pipelines transport:",
    options: ["Oil and gas","Cars","Furniture","Clothing"],
    correctAnswer: "Oil and gas",
    explanation: "Pipelines move energy resources."
  },
  {
    question: "Infrastructure development improves:",
    options: ["Economic growth","Food recipes","Music production","Clothing design"],
    correctAnswer: "Economic growth",
    explanation: "Infrastructure supports economic activity."
  },
  {
    question: "Electric power grids deliver:",
    options: ["Electricity","Water","Food","Clothing"],
    correctAnswer: "Electricity",
    explanation: "Power grids distribute electricity."
  }
],

"Smart Buildings": [
  {
    question: "Smart buildings use:",
    options: ["Automated systems","Manual tools","Farm equipment","Mining devices"],
    correctAnswer: "Automated systems",
    explanation: "Smart buildings use sensors and automation."
  },
  {
    question: "Smart lighting systems help:",
    options: ["Save energy","Increase pollution","Reduce safety","Stop electricity"],
    correctAnswer: "Save energy",
    explanation: "Sensors adjust lighting automatically."
  },
  {
    question: "IoT in smart buildings connects:",
    options: ["Devices and sensors","Trees and soil","Roads and cars","Food and water"],
    correctAnswer: "Devices and sensors",
    explanation: "IoT enables smart control systems."
  },
  {
    question: "Smart thermostats regulate:",
    options: ["Temperature","Electricity generation","Water supply","Building height"],
    correctAnswer: "Temperature",
    explanation: "They control heating and cooling."
  },
  {
    question: "Security systems in smart buildings include:",
    options: ["Cameras","Plows","Harvesters","Tractors"],
    correctAnswer: "Cameras",
    explanation: "Smart surveillance improves safety."
  },
  {
    question: "Smart elevators optimize:",
    options: ["Passenger movement","Food storage","Water flow","Gas supply"],
    correctAnswer: "Passenger movement",
    explanation: "They reduce waiting time."
  },
  {
    question: "Smart buildings improve:",
    options: ["Energy efficiency","Noise pollution","Construction waste","Manual labor"],
    correctAnswer: "Energy efficiency",
    explanation: "Automation reduces energy consumption."
  },
  {
    question: "Sensors in smart buildings monitor:",
    options: ["Lighting and occupancy","Crop growth","Vehicle speed","Ocean waves"],
    correctAnswer: "Lighting and occupancy",
    explanation: "Sensors optimize building operations."
  },
  {
    question: "Smart building management systems control:",
    options: ["HVAC systems","Cooking appliances","Farm tractors","Industrial machines"],
    correctAnswer: "HVAC systems",
    explanation: "They regulate heating, ventilation, and air conditioning."
  },
  {
    question: "Smart buildings use technology to:",
    options: ["Improve comfort","Reduce design","Eliminate electricity","Stop automation"],
    correctAnswer: "Improve comfort",
    explanation: "Automation enhances user experience."
  }
],

"Interior Design": [
  {
    question: "Interior design focuses on:",
    options: ["Indoor spaces","Road construction","Bridge building","Mining"],
    correctAnswer: "Indoor spaces",
    explanation: "Interior designers plan interior aesthetics and functionality."
  },
  {
    question: "Which element affects room atmosphere?",
    options: ["Lighting","Road width","Bridge height","Pipeline size"],
    correctAnswer: "Lighting",
    explanation: "Lighting influences mood and visibility."
  },
  {
    question: "Interior designers often choose:",
    options: ["Furniture and color schemes","Steel beams","Cement formulas","Road materials"],
    correctAnswer: "Furniture and color schemes",
    explanation: "Designers create appealing interiors."
  },
  {
    question: "Space planning helps:",
    options: ["Optimize layout","Grow crops","Transport goods","Mine coal"],
    correctAnswer: "Optimize layout",
    explanation: "Efficient layouts improve usability."
  },
  {
    question: "Which style is simple and clean?",
    options: ["Minimalist","Industrial mining","Agricultural","Mechanical"],
    correctAnswer: "Minimalist",
    explanation: "Minimalism uses simple forms and fewer elements."
  },
  {
    question: "Interior design combines:",
    options: ["Art and functionality","Cooking and farming","Mining and transport","Music and sports"],
    correctAnswer: "Art and functionality",
    explanation: "Design must be both attractive and practical."
  },
  {
    question: "Wall colors influence:",
    options: ["Mood","Temperature only","Electricity","Water pressure"],
    correctAnswer: "Mood",
    explanation: "Colors affect psychological perception."
  },
  {
    question: "Interior design software helps:",
    options: ["Create 3D layouts","Cook meals","Write books","Design cars"],
    correctAnswer: "Create 3D layouts",
    explanation: "Software visualizes interior concepts."
  },
  {
    question: "Decorative items include:",
    options: ["Paintings","Steel rods","Concrete blocks","Bricks"],
    correctAnswer: "Paintings",
    explanation: "Decor enhances visual appeal."
  },
  {
    question: "Interior designers focus on:",
    options: ["Comfort and aesthetics","Road traffic","Electric power grids","Mining tunnels"],
    correctAnswer: "Comfort and aesthetics",
    explanation: "Design improves living experience."
  }
],

"Facilities Management": [
  {
    question: "Facilities management focuses on:",
    options: ["Maintaining buildings and services","Building cars","Growing crops","Mining coal"],
    correctAnswer: "Maintaining buildings and services",
    explanation: "It ensures buildings function efficiently."
  },
  {
    question: "Facility managers oversee:",
    options: ["Maintenance operations","Farm harvest","Ocean shipping","Car design"],
    correctAnswer: "Maintenance operations",
    explanation: "They manage maintenance staff and schedules."
  },
  {
    question: "HVAC systems control:",
    options: ["Heating and cooling","Food supply","Water irrigation","Transportation"],
    correctAnswer: "Heating and cooling",
    explanation: "HVAC ensures comfortable indoor environments."
  },
  {
    question: "Cleaning services are part of:",
    options: ["Facility operations","Mining","Agriculture","Fishing"],
    correctAnswer: "Facility operations",
    explanation: "Facilities management includes cleaning and upkeep."
  },
  {
    question: "Facility maintenance prevents:",
    options: ["Equipment failure","Plant growth","Food spoilage","Road traffic"],
    correctAnswer: "Equipment failure",
    explanation: "Regular maintenance keeps systems functional."
  },
  {
    question: "Security services protect:",
    options: ["Buildings and occupants","Farms","Oceans","Forests"],
    correctAnswer: "Buildings and occupants",
    explanation: "Security ensures safety in facilities."
  },
  {
    question: "Energy management helps:",
    options: ["Reduce energy costs","Increase pollution","Stop electricity","Grow crops"],
    correctAnswer: "Reduce energy costs",
    explanation: "Efficient systems reduce expenses."
  },
  {
    question: "Facility audits review:",
    options: ["Building performance","Food taste","Vehicle speed","Weather"],
    correctAnswer: "Building performance",
    explanation: "Audits evaluate efficiency."
  },
  {
    question: "Facility management improves:",
    options: ["Operational efficiency","Mining output","Agricultural yield","Fishing production"],
    correctAnswer: "Operational efficiency",
    explanation: "Well-managed facilities perform better."
  },
  {
    question: "Facility managers coordinate:",
    options: ["Maintenance teams","Farm workers","Drivers","Chefs"],
    correctAnswer: "Maintenance teams",
    explanation: "They organize repair and service staff."
  }
],

"Real Estate Technology": [
  {
    question: "Real estate technology is also known as:",
    options: ["PropTech","FinTech","AgTech","HealthTech"],
    correctAnswer: "PropTech",
    explanation: "PropTech refers to digital innovation in property markets."
  },
  {
    question: "Online property listings help:",
    options: ["Buyers find homes","Grow crops","Build roads","Generate electricity"],
    correctAnswer: "Buyers find homes",
    explanation: "Digital platforms list available properties."
  },
  {
    question: "Virtual tours allow:",
    options: ["Remote property viewing","Cooking meals","Mining coal","Harvesting crops"],
    correctAnswer: "Remote property viewing",
    explanation: "Virtual tours showcase homes online."
  },
  {
    question: "Real estate platforms connect:",
    options: ["Buyers and sellers","Farmers and crops","Drivers and roads","Ships and ports"],
    correctAnswer: "Buyers and sellers",
    explanation: "Digital platforms simplify transactions."
  },
  {
    question: "Blockchain in real estate helps with:",
    options: ["Secure transactions","Food production","Bridge construction","Crop harvesting"],
    correctAnswer: "Secure transactions",
    explanation: "Blockchain improves transparency."
  },
  {
    question: "Property data analytics helps:",
    options: ["Predict market trends","Cook food","Mine resources","Transport goods"],
    correctAnswer: "Predict market trends",
    explanation: "Data insights support investment decisions."
  },
  {
    question: "Smart contracts can:",
    options: ["Automate agreements","Cook meals","Design buildings","Harvest crops"],
    correctAnswer: "Automate agreements",
    explanation: "Blockchain-based contracts execute automatically."
  },
  {
    question: "Real estate apps help users:",
    options: ["Search properties","Build houses","Grow crops","Repair cars"],
    correctAnswer: "Search properties",
    explanation: "Apps simplify property search."
  },
  {
    question: "Digital property management tools help:",
    options: ["Track rent and tenants","Harvest crops","Produce steel","Cook food"],
    correctAnswer: "Track rent and tenants",
    explanation: "Technology simplifies management tasks."
  },
  {
    question: "PropTech improves:",
    options: ["Efficiency in real estate","Mining production","Agriculture output","Fishing supply"],
    correctAnswer: "Efficiency in real estate",
    explanation: "Technology modernizes the property industry."
  }
],

"Sustainable Building": [
  {
    question: "Sustainable buildings aim to:",
    options: ["Reduce environmental impact","Increase pollution","Waste resources","Ignore efficiency"],
    correctAnswer: "Reduce environmental impact",
    explanation: "Green buildings use resources responsibly."
  },
  {
    question: "Solar panels generate:",
    options: ["Electricity","Water","Food","Steel"],
    correctAnswer: "Electricity",
    explanation: "Solar energy powers buildings sustainably."
  },
  {
    question: "Green roofs help:",
    options: ["Improve insulation","Increase pollution","Stop sunlight","Destroy plants"],
    correctAnswer: "Improve insulation",
    explanation: "Vegetated roofs regulate temperature."
  },
  {
    question: "LEED certification relates to:",
    options: ["Green buildings","Mining permits","Road safety","Food quality"],
    correctAnswer: "Green buildings",
    explanation: "LEED measures sustainable design."
  },
  {
    question: "Rainwater harvesting collects:",
    options: ["Rainwater for reuse","Electricity","Natural gas","Steel"],
    correctAnswer: "Rainwater for reuse",
    explanation: "Harvested water can be reused."
  },
  {
    question: "Energy-efficient buildings reduce:",
    options: ["Energy consumption","Plant growth","Food supply","Mining activity"],
    correctAnswer: "Energy consumption",
    explanation: "Efficiency lowers resource usage."
  },
  {
    question: "Sustainable materials include:",
    options: ["Recycled wood","Plastic waste","Coal dust","Rubber scraps"],
    correctAnswer: "Recycled wood",
    explanation: "Recycled materials reduce waste."
  },
  {
    question: "Natural lighting reduces:",
    options: ["Electricity use","Sunlight","Building strength","Water supply"],
    correctAnswer: "Electricity use",
    explanation: "Daylight reduces lighting energy."
  },
  {
    question: "Green buildings benefit:",
    options: ["Environment","Pollution","Waste","Deforestation"],
    correctAnswer: "Environment",
    explanation: "Sustainability protects natural resources."
  },
  {
    question: "Sustainable architecture focuses on:",
    options: ["Eco-friendly design","Mining operations","Food production","Vehicle design"],
    correctAnswer: "Eco-friendly design",
    explanation: "Design choices reduce environmental impact."
  }
],

"Urban Planning": [
  {
    question: "Urban planning focuses on:",
    options: ["City development","Ocean exploration","Forest harvesting","Mining"],
    correctAnswer: "City development",
    explanation: "Urban planning organizes city growth."
  },
  {
    question: "Zoning regulations control:",
    options: ["Land use","Weather","Food quality","Vehicle design"],
    correctAnswer: "Land use",
    explanation: "Zoning determines building types."
  },
  {
    question: "Urban planners design:",
    options: ["Transportation systems","Farm tools","Mining equipment","Fishing nets"],
    correctAnswer: "Transportation systems",
    explanation: "Transportation networks support mobility."
  },
  {
    question: "Public parks improve:",
    options: ["Quality of life","Traffic jams","Mining output","Industrial waste"],
    correctAnswer: "Quality of life",
    explanation: "Green spaces benefit communities."
  },
  {
    question: "Urban planning helps manage:",
    options: ["Population growth","Crop yield","Ocean tides","Forest fires"],
    correctAnswer: "Population growth",
    explanation: "Cities must plan for increasing populations."
  },
  {
    question: "Walkable cities encourage:",
    options: ["Pedestrian movement","Mining activity","Fishing","Agriculture"],
    correctAnswer: "Pedestrian movement",
    explanation: "Walkability reduces car dependency."
  },
  {
    question: "Urban infrastructure includes:",
    options: ["Roads and utilities","Crops","Fishing boats","Forest trails"],
    correctAnswer: "Roads and utilities",
    explanation: "Infrastructure supports city services."
  },
  {
    question: "Sustainable urban planning promotes:",
    options: ["Environmental protection","Deforestation","Pollution","Waste"],
    correctAnswer: "Environmental protection",
    explanation: "Sustainable cities reduce environmental harm."
  },
  {
    question: "Urban planners often use:",
    options: ["GIS mapping","Cooking software","Music tools","Video games"],
    correctAnswer: "GIS mapping",
    explanation: "GIS helps analyze spatial data."
  },
  {
    question: "Urban planning improves:",
    options: ["City livability","Ocean fishing","Mining production","Forest harvesting"],
    correctAnswer: "City livability",
    explanation: "Good planning creates functional cities."
  }
],

  },
  hospitality:{
     "Hotels & Resorts": [
      {
        question: "What is the primary service provided by hotels?",
        options: ["Accommodation", "Car manufacturing", "Mining", "Farming"],
        correctAnswer: "Accommodation",
        explanation: "Hotels mainly provide lodging and related services to guests."
      },
      {
        question: "A resort typically offers:",
        options: ["Recreational facilities", "Industrial machinery", "Mining services", "Vehicle repair"],
        correctAnswer: "Recreational facilities",
        explanation: "Resorts combine accommodation with leisure activities."
      },
      {
        question: "The front desk in a hotel handles:",
        options: ["Guest check-in and check-out", "Cooking food", "Room construction", "Security patrols"],
        correctAnswer: "Guest check-in and check-out",
        explanation: "The front desk manages guest arrivals and departures."
      },
      {
        question: "Housekeeping is responsible for:",
        options: ["Cleaning rooms", "Driving guests", "Cooking food", "Managing finances"],
        correctAnswer: "Cleaning rooms",
        explanation: "Housekeeping maintains cleanliness in guest rooms and common areas."
      },
      {
        question: "Hotel ratings often range from:",
        options: ["1 to 5 stars", "10 to 20 stars", "1 to 100 points", "A to Z"],
        correctAnswer: "1 to 5 stars",
        explanation: "Hotels are commonly rated using a 1–5 star system."
      },
      {
        question: "A concierge assists guests with:",
        options: ["Information and bookings", "Building construction", "Cooking meals", "Driving taxis"],
        correctAnswer: "Information and bookings",
        explanation: "Concierges help with reservations, directions, and activities."
      },
      {
        question: "Room service provides:",
        options: ["Food delivered to rooms", "Transportation", "Laundry machines", "Construction tools"],
        correctAnswer: "Food delivered to rooms",
        explanation: "Guests can order meals delivered to their rooms."
      },
      {
        question: "Luxury hotels usually offer:",
        options: ["High-end services", "Mining services", "Industrial equipment", "Agricultural products"],
        correctAnswer: "High-end services",
        explanation: "Luxury hotels focus on premium guest experiences."
      },
      {
        question: "A hotel suite typically includes:",
        options: ["Multiple rooms", "Only a bathroom", "No furniture", "Only a kitchen"],
        correctAnswer: "Multiple rooms",
        explanation: "Suites provide more space and separate living areas."
      },
      {
        question: "Resorts are often located in:",
        options: ["Vacation destinations", "Industrial zones", "Mining areas", "Factories"],
        correctAnswer: "Vacation destinations",
        explanation: "Resorts are located where tourists travel for leisure."
      }
    ],

    "Restaurants & Food Service": [
      {
        question: "The primary function of a restaurant is to:",
        options: ["Serve food and beverages", "Manufacture vehicles", "Build houses", "Mine coal"],
        correctAnswer: "Serve food and beverages",
        explanation: "Restaurants prepare and serve meals to customers."
      },
      {
        question: "A chef is responsible for:",
        options: ["Cooking meals", "Cleaning roads", "Driving buses", "Building houses"],
        correctAnswer: "Cooking meals",
        explanation: "Chefs oversee food preparation in kitchens."
      },
      {
        question: "Fast food restaurants focus on:",
        options: ["Quick service", "Luxury rooms", "Travel bookings", "Mining services"],
        correctAnswer: "Quick service",
        explanation: "Fast food restaurants emphasize speed and convenience."
      },
      {
        question: "A menu lists:",
        options: ["Available food items", "Hotel prices", "Airplane routes", "Construction materials"],
        correctAnswer: "Available food items",
        explanation: "Menus show the dishes and beverages offered."
      },
      {
        question: "Food safety ensures:",
        options: ["Safe food preparation", "Road safety", "Building stability", "Water supply"],
        correctAnswer: "Safe food preparation",
        explanation: "Food safety standards prevent contamination."
      },
      {
        question: "Waitstaff are responsible for:",
        options: ["Serving customers", "Driving trucks", "Building furniture", "Farming crops"],
        correctAnswer: "Serving customers",
        explanation: "Waiters and servers deliver food and assist guests."
      },
      {
        question: "Takeout service allows customers to:",
        options: ["Order food to go", "Book hotel rooms", "Build houses", "Buy vehicles"],
        correctAnswer: "Order food to go",
        explanation: "Customers can take meals outside the restaurant."
      },
      {
        question: "Fine dining restaurants usually offer:",
        options: ["High-quality cuisine", "Industrial machines", "Mining equipment", "Vehicle parts"],
        correctAnswer: "High-quality cuisine",
        explanation: "Fine dining emphasizes premium meals and service."
      },
      {
        question: "A bar primarily serves:",
        options: ["Drinks", "Cars", "Building materials", "Clothing"],
        correctAnswer: "Drinks",
        explanation: "Bars specialize in beverages."
      },
      {
        question: "Restaurant management focuses on:",
        options: ["Operations and service quality", "Mining efficiency", "Vehicle production", "Construction safety"],
        correctAnswer: "Operations and service quality",
        explanation: "Managers ensure smooth restaurant operations."
      }
    ],
    "Travel Technology": [
  {
    question: "Travel technology refers to:",
    options: ["Digital tools used in travel services", "Road construction tools", "Mining equipment", "Farm machinery"],
    correctAnswer: "Digital tools used in travel services",
    explanation: "Travel technology improves booking, planning, and management of travel."
  },
  {
    question: "Online booking systems allow users to:",
    options: ["Reserve flights and hotels", "Build houses", "Grow crops", "Repair vehicles"],
    correctAnswer: "Reserve flights and hotels",
    explanation: "Travel platforms allow easy reservations online."
  },
  {
    question: "Mobile travel apps help travelers:",
    options: ["Plan trips", "Mine coal", "Cook meals", "Design buildings"],
    correctAnswer: "Plan trips",
    explanation: "Apps provide itineraries, booking tools, and navigation."
  },
  {
    question: "AI in travel technology can:",
    options: ["Provide personalized recommendations", "Build bridges", "Manufacture cars", "Harvest crops"],
    correctAnswer: "Provide personalized recommendations",
    explanation: "AI analyzes user data to suggest destinations and services."
  },
  {
    question: "Digital boarding passes are used in:",
    options: ["Air travel", "Road construction", "Agriculture", "Mining"],
    correctAnswer: "Air travel",
    explanation: "Passengers can check in digitally using smartphones."
  },
  {
    question: "Virtual reality can help travelers:",
    options: ["Preview destinations", "Cook meals", "Mine resources", "Build houses"],
    correctAnswer: "Preview destinations",
    explanation: "VR allows virtual tours of travel locations."
  },
  {
    question: "Travel data analytics helps companies:",
    options: ["Understand customer behavior", "Grow crops", "Construct roads", "Build machines"],
    correctAnswer: "Understand customer behavior",
    explanation: "Data insights help travel businesses improve services."
  },
  {
    question: "Chatbots in travel websites assist with:",
    options: ["Customer inquiries", "Mining operations", "Cooking food", "Building bridges"],
    correctAnswer: "Customer inquiries",
    explanation: "Chatbots provide instant responses to traveler questions."
  },
  {
    question: "GPS technology helps travelers:",
    options: ["Navigate locations", "Grow crops", "Cook food", "Repair vehicles"],
    correctAnswer: "Navigate locations",
    explanation: "GPS helps find routes and directions."
  },
  {
    question: "Travel technology improves:",
    options: ["Convenience for travelers", "Mining output", "Farm production", "Factory manufacturing"],
    correctAnswer: "Convenience for travelers",
    explanation: "Technology simplifies travel planning and booking."
  }
],

"Tourism": [
  {
    question: "Tourism involves:",
    options: ["Traveling for leisure or business", "Mining resources", "Manufacturing goods", "Building houses"],
    correctAnswer: "Traveling for leisure or business",
    explanation: "Tourism refers to people visiting places outside their usual environment."
  },
  {
    question: "Tourists often visit destinations for:",
    options: ["Relaxation and exploration", "Mining coal", "Factory work", "Road construction"],
    correctAnswer: "Relaxation and exploration",
    explanation: "Tourism activities include sightseeing and recreation."
  },
  {
    question: "Domestic tourism refers to:",
    options: ["Travel within one's own country", "International flights", "Ocean shipping", "Factory tours"],
    correctAnswer: "Travel within one's own country",
    explanation: "Domestic tourism occurs within national borders."
  },
  {
    question: "International tourism involves:",
    options: ["Travel across countries", "Driving within cities", "Building houses", "Farming"],
    correctAnswer: "Travel across countries",
    explanation: "Travelers visit destinations outside their home country."
  },
  {
    question: "Tourist attractions include:",
    options: ["Landmarks and natural sites", "Factories", "Warehouses", "Industrial mines"],
    correctAnswer: "Landmarks and natural sites",
    explanation: "Attractions draw visitors to destinations."
  },
  {
    question: "Tourism contributes to:",
    options: ["Economic growth", "Mining output", "Vehicle manufacturing", "Food processing"],
    correctAnswer: "Economic growth",
    explanation: "Tourism creates jobs and generates revenue."
  },
  {
    question: "Adventure tourism includes:",
    options: ["Activities like hiking and rafting", "Factory tours", "Mining trips", "Industrial work"],
    correctAnswer: "Activities like hiking and rafting",
    explanation: "Adventure tourism focuses on exciting outdoor experiences."
  },
  {
    question: "Ecotourism focuses on:",
    options: ["Environmental conservation", "Mining operations", "Vehicle repair", "Industrial production"],
    correctAnswer: "Environmental conservation",
    explanation: "Ecotourism promotes sustainable travel."
  },
  {
    question: "Tourism marketing promotes:",
    options: ["Destinations to visitors", "Mining products", "Agricultural tools", "Industrial machines"],
    correctAnswer: "Destinations to visitors",
    explanation: "Marketing encourages travelers to visit locations."
  },
  {
    question: "Tourism services include:",
    options: ["Accommodation and transportation", "Mining and drilling", "Manufacturing", "Construction"],
    correctAnswer: "Accommodation and transportation",
    explanation: "Tourism involves services supporting travelers."
  }
],

"Event Planning": [
  {
    question: "Event planning involves:",
    options: ["Organizing events and gatherings", "Mining operations", "Building bridges", "Manufacturing cars"],
    correctAnswer: "Organizing events and gatherings",
    explanation: "Event planners coordinate conferences, weddings, and other events."
  },
  {
    question: "Event planners manage:",
    options: ["Venue, schedule, and logistics", "Mining machines", "Agricultural tools", "Construction materials"],
    correctAnswer: "Venue, schedule, and logistics",
    explanation: "Planning includes coordinating locations and activities."
  },
  {
    question: "Corporate events are organized for:",
    options: ["Businesses and employees", "Farm workers", "Construction workers", "Drivers"],
    correctAnswer: "Businesses and employees",
    explanation: "Companies host meetings, seminars, and conferences."
  },
  {
    question: "A wedding planner specializes in:",
    options: ["Wedding events", "Mining projects", "Vehicle design", "Farming"],
    correctAnswer: "Wedding events",
    explanation: "Wedding planners coordinate ceremonies and receptions."
  },
  {
    question: "Event budgets help planners:",
    options: ["Control costs", "Grow crops", "Build bridges", "Produce steel"],
    correctAnswer: "Control costs",
    explanation: "Budget planning ensures financial management."
  },
  {
    question: "Event venues include:",
    options: ["Hotels and halls", "Factories", "Mines", "Power plants"],
    correctAnswer: "Hotels and halls",
    explanation: "Events are commonly held in hospitality venues."
  },
  {
    question: "Event marketing helps:",
    options: ["Attract attendees", "Mine coal", "Grow crops", "Manufacture goods"],
    correctAnswer: "Attract attendees",
    explanation: "Marketing promotes the event."
  },
  {
    question: "Audio-visual equipment is used for:",
    options: ["Presentations", "Mining", "Farming", "Road construction"],
    correctAnswer: "Presentations",
    explanation: "AV tools support speeches and displays."
  },
  {
    question: "Event planners coordinate:",
    options: ["Vendors and services", "Farmers", "Miners", "Drivers"],
    correctAnswer: "Vendors and services",
    explanation: "They manage catering, decorations, and logistics."
  },
  {
    question: "Successful events require:",
    options: ["Detailed planning", "Mining operations", "Vehicle assembly", "Industrial drilling"],
    correctAnswer: "Detailed planning",
    explanation: "Planning ensures smooth event execution."
  }
],
"Vacation Rentals": [
  {
    question: "Vacation rentals are:",
    options: ["Properties rented to travelers", "Factories", "Mines", "Construction sites"],
    correctAnswer: "Properties rented to travelers",
    explanation: "Vacation rentals provide short-term lodging for tourists."
  },
  {
    question: "Airbnb is an example of:",
    options: ["Vacation rental platform", "Hotel chain", "Travel agency", "Theme park"],
    correctAnswer: "Vacation rental platform",
    explanation: "Airbnb connects hosts with travelers for short-term stays."
  },
  {
    question: "Vacation rental owners must often:",
    options: ["Maintain property and amenities", "Mine coal", "Manufacture vehicles", "Build roads"],
    correctAnswer: "Maintain property and amenities",
    explanation: "Proper upkeep ensures guest satisfaction."
  },
  {
    question: "Guests typically book vacation rentals:",
    options: ["Online", "At airports", "At factories", "At mining sites"],
    correctAnswer: "Online",
    explanation: "Digital platforms allow easy reservation and payment."
  },
  {
    question: "Vacation rentals can include:",
    options: ["Apartments, villas, cabins", "Cars, trucks, buses", "Factories, warehouses", "Bridges, tunnels"],
    correctAnswer: "Apartments, villas, cabins",
    explanation: "Various property types are rented for holidays."
  },
  {
    question: "Vacation rentals are popular for:",
    options: ["Privacy and space", "Industrial work", "Mining", "Food production"],
    correctAnswer: "Privacy and space",
    explanation: "Guests often prefer more independence than hotels."
  },
  {
    question: "Cleaning services in rentals ensure:",
    options: ["Hygiene and comfort", "Road safety", "Mining output", "Industrial productivity"],
    correctAnswer: "Hygiene and comfort",
    explanation: "Proper cleaning improves guest experience."
  },
  {
    question: "Rental platforms often charge:",
    options: ["Service fees", "Manufacturing fees", "Mining fees", "Construction fees"],
    correctAnswer: "Service fees",
    explanation: "Fees cover platform maintenance and support."
  },
  {
    question: "Reviews on rental platforms help:",
    options: ["Future guests make decisions", "Mining efficiency", "Car production", "Factory output"],
    correctAnswer: "Future guests make decisions",
    explanation: "Ratings guide travelers in selecting properties."
  },
  {
    question: "Vacation rentals contribute to:",
    options: ["Local tourism economy", "Mining output", "Factory production", "Agriculture supply"],
    correctAnswer: "Local tourism economy",
    explanation: "They generate income for property owners and communities."
  }
],

"Cruise Lines": [
  {
    question: "Cruise lines operate:",
    options: ["Passenger ships for leisure travel", "Cargo ships", "Fishing vessels", "Mining ships"],
    correctAnswer: "Passenger ships for leisure travel",
    explanation: "Cruises provide entertainment and travel experiences on ships."
  },
  {
    question: "Cruise ships typically include:",
    options: ["Restaurants, entertainment, cabins", "Factories, warehouses, offices", "Mining equipment", "Farms"],
    correctAnswer: "Restaurants, entertainment, cabins",
    explanation: "Ships are equipped for comfort and activities."
  },
  {
    question: "Popular cruise destinations are often:",
    options: ["Tropical or scenic regions", "Industrial zones", "Mining sites", "Factories"],
    correctAnswer: "Tropical or scenic regions",
    explanation: "Cruises travel to attractive and relaxing locations."
  },
  {
    question: "Cruise packages often include:",
    options: ["Accommodation, meals, activities", "Car rentals", "Factory tours", "Mining trips"],
    correctAnswer: "Accommodation, meals, activities",
    explanation: "All-inclusive packages simplify travel planning."
  },
  {
    question: "Cruise lines generate revenue from:",
    options: ["Ticket sales and onboard services", "Mining operations", "Factory output", "Agriculture"],
    correctAnswer: "Ticket sales and onboard services",
    explanation: "Revenue comes from both tickets and extras onboard."
  },
  {
    question: "Cabin classes can be:",
    options: ["Interior, ocean view, suite", "Standard, industrial, mining", "Basic, farming, workshop", "Economy, premium, business"],
    correctAnswer: "Interior, ocean view, suite",
    explanation: "Different cabin types offer various comfort levels."
  },
  {
    question: "Onboard entertainment can include:",
    options: ["Shows, pools, casinos", "Factories", "Mines", "Agricultural equipment"],
    correctAnswer: "Shows, pools, casinos",
    explanation: "Activities keep guests engaged during the cruise."
  },
  {
    question: "Cruise staff are responsible for:",
    options: ["Hospitality and safety", "Mining operations", "Factory production", "Vehicle assembly"],
    correctAnswer: "Hospitality and safety",
    explanation: "Staff ensure guest comfort and security."
  },
  {
    question: "Cruise travel is seasonal because of:",
    options: ["Weather conditions", "Industrial output", "Mining schedules", "Farming seasons"],
    correctAnswer: "Weather conditions",
    explanation: "Cruises operate in favorable weather for safety and comfort."
  },
  {
    question: "Sustainable cruise lines aim to:",
    options: ["Reduce environmental impact", "Increase mining output", "Build factories", "Grow crops"],
    correctAnswer: "Reduce environmental impact",
    explanation: "Modern lines adopt eco-friendly practices."
  }
],

"Catering": [
  {
    question: "Catering involves:",
    options: ["Providing food and beverages for events", "Building roads", "Mining coal", "Manufacturing vehicles"],
    correctAnswer: "Providing food and beverages for events",
    explanation: "Catering services supply meals at weddings, parties, and conferences."
  },
  {
    question: "Catering companies often handle:",
    options: ["Menu planning and service", "Mining operations", "Factory production", "Farming crops"],
    correctAnswer: "Menu planning and service",
    explanation: "They manage food preparation and event delivery."
  },
  {
    question: "Buffets are:",
    options: ["Self-service meal setups", "Factories", "Construction sites", "Mining zones"],
    correctAnswer: "Self-service meal setups",
    explanation: "Guests serve themselves from a variety of dishes."
  },
  {
    question: "Event catering requires:",
    options: ["Logistics and timing management", "Mining tools", "Farming equipment", "Car parts"],
    correctAnswer: "Logistics and timing management",
    explanation: "Food must be prepared and delivered on schedule."
  },
  {
    question: "Catering staff includes:",
    options: ["Chefs and servers", "Engineers", "Miners", "Farmers"],
    correctAnswer: "Chefs and servers",
    explanation: "They prepare and serve meals at events."
  },
  {
    question: "Corporate catering often serves:",
    options: ["Meetings and conferences", "Factories", "Mines", "Construction sites"],
    correctAnswer: "Meetings and conferences",
    explanation: "Business events require catered meals."
  },
  {
    question: "Catering menus can be:",
    options: ["Customized", "Standardized only", "Random", "Industrial only"],
    correctAnswer: "Customized",
    explanation: "Menus are tailored to client preferences."
  },
  {
    question: "Food safety in catering ensures:",
    options: ["No contamination", "Mining safety", "Road safety", "Construction safety"],
    correctAnswer: "No contamination",
    explanation: "Proper handling prevents foodborne illnesses."
  },
  {
    question: "Offsite catering means:",
    options: ["Food is delivered to a different location", "Food cooked on ships", "Food grown on farms", "Food mined from soil"],
    correctAnswer: "Food is delivered to a different location",
    explanation: "Meals are prepared and served outside the caterer's main facility."
  },
  {
    question: "Catering contributes to:",
    options: ["Event success and guest satisfaction", "Mining efficiency", "Vehicle manufacturing", "Construction productivity"],
    correctAnswer: "Event success and guest satisfaction",
    explanation: "Food quality and service impact the overall event experience."
  }
],

"Theme Parks": [
  {
    question: "Theme parks are:",
    options: ["Entertainment venues with rides and attractions", "Factories", "Farms", "Construction sites"],
    correctAnswer: "Entertainment venues with rides and attractions",
    explanation: "Theme parks provide recreational experiences for visitors."
  },
  {
    question: "Popular theme park attractions include:",
    options: ["Roller coasters and shows", "Mining equipment", "Construction machinery", "Industrial factories"],
    correctAnswer: "Roller coasters and shows",
    explanation: "Rides and performances are key attractions."
  },
  {
    question: "Theme parks often have:",
    options: ["Restaurants and gift shops", "Factories", "Mining zones", "Agricultural plots"],
    correctAnswer: "Restaurants and gift shops",
    explanation: "Amenities enhance visitor experience."
  },
  {
    question: "Safety in theme parks is managed by:",
    options: ["Trained staff and inspections", "Miners", "Construction engineers", "Farmers"],
    correctAnswer: "Trained staff and inspections",
    explanation: "Safety protocols prevent accidents."
  },
  {
    question: "Theme park tickets can be:",
    options: ["Single-day or season passes", "Mining licenses", "Construction permits", "Agriculture certifications"],
    correctAnswer: "Single-day or season passes",
    explanation: "Tickets control park access and revenue."
  },
  {
    question: "Theme parks attract visitors for:",
    options: ["Entertainment and recreation", "Mining operations", "Factory work", "Farming"],
    correctAnswer: "Entertainment and recreation",
    explanation: "Visitors come for fun and leisure."
  },
  {
    question: "Popular theme parks include:",
    options: ["Disneyland, Universal Studios", "Factories, Mines", "Farm fields, Barns", "Road construction zones"],
    correctAnswer: "Disneyland, Universal Studios",
    explanation: "Famous parks are globally recognized destinations."
  },
  {
    question: "Theme park staff includes:",
    options: ["Ride operators and entertainers", "Miners", "Factory workers", "Farmers"],
    correctAnswer: "Ride operators and entertainers",
    explanation: "Staff manage rides and engage visitors."
  },
  {
    question: "Seasonal events in theme parks include:",
    options: ["Halloween and Christmas festivals", "Mining contests", "Factory exhibitions", "Agriculture fairs"],
    correctAnswer: "Halloween and Christmas festivals",
    explanation: "Special events attract visitors during holidays."
  },
  {
    question: "Theme parks generate revenue from:",
    options: ["Tickets, food, merchandise", "Mining sales", "Factory production", "Farm output"],
    correctAnswer: "Tickets, food, merchandise",
    explanation: "Multiple income streams support park operations."
  }
],

"Travel Agencies": [
  {
    question: "Travel agencies provide:",
    options: ["Trip planning and booking services", "Mining operations", "Factory tours", "Farming services"],
    correctAnswer: "Trip planning and booking services",
    explanation: "Agencies assist clients in arranging travel."
  },
  {
    question: "Travel agents help with:",
    options: ["Flights, hotels, and tours", "Mining licenses", "Factory tools", "Agricultural machinery"],
    correctAnswer: "Flights, hotels, and tours",
    explanation: "Agents coordinate travel logistics."
  },
  {
    question: "Package tours include:",
    options: ["Pre-arranged travel and accommodations", "Mining expeditions", "Factory visits", "Farm stays"],
    correctAnswer: "Pre-arranged travel and accommodations",
    explanation: "Packages simplify planning for travelers."
  },
  {
    question: "Travel agencies earn revenue from:",
    options: ["Service fees and commissions", "Mining output", "Factory production", "Crop sales"],
    correctAnswer: "Service fees and commissions",
    explanation: "Agencies charge for booking and planning services."
  },
  {
    question: "Travel insurance is often offered by:",
    options: ["Agencies", "Factories", "Mines", "Farms"],
    correctAnswer: "Agencies",
    explanation: "Insurance protects travelers against unforeseen events."
  },
  {
    question: "Corporate travel management focuses on:",
    options: ["Business trips", "Mining", "Farming", "Construction"],
    correctAnswer: "Business trips",
    explanation: "Agencies arrange company travel efficiently."
  },
  {
    question: "Travel agencies provide:",
    options: ["Visa assistance and documentation", "Vehicle repair", "Factory construction", "Mining permits"],
    correctAnswer: "Visa assistance and documentation",
    explanation: "Agencies help with entry requirements."
  },
  {
    question: "Online agencies allow:",
    options: ["Self-service booking", "Mining operations", "Factory tours", "Agriculture management"],
    correctAnswer: "Self-service booking",
    explanation: "Travelers can book flights and hotels directly online."
  },
  {
    question: "Travel consultancy services include:",
    options: ["Custom itineraries", "Mining planning", "Factory design", "Farming schedules"],
    correctAnswer: "Custom itineraries",
    explanation: "Tailored travel plans meet individual needs."
  },
  {
    question: "Travel agencies improve:",
    options: ["Convenience and planning efficiency", "Mining efficiency", "Factory productivity", "Crop yield"],
    correctAnswer: "Convenience and planning efficiency",
    explanation: "Agencies save time and reduce travel complexity."
  }
],

"Hospitality Management": [
  {
    question: "Hospitality management involves:",
    options: ["Running hotels, resorts, and related services", "Mining", "Farming", "Factory production"],
    correctAnswer: "Running hotels, resorts, and related services",
    explanation: "It focuses on operations, staff, and guest satisfaction."
  },
  {
    question: "Front office management includes:",
    options: ["Guest reception and services", "Mining", "Vehicle production", "Crop management"],
    correctAnswer: "Guest reception and services",
    explanation: "Managing check-in, check-out, and guest inquiries."
  },
  {
    question: "Housekeeping management ensures:",
    options: ["Clean and well-maintained rooms", "Mining safety", "Factory maintenance", "Farm irrigation"],
    correctAnswer: "Clean and well-maintained rooms",
    explanation: "Cleanliness impacts guest experience."
  },
  {
    question: "Food and beverage management oversees:",
    options: ["Restaurant operations", "Mining sites", "Factories", "Farms"],
    correctAnswer: "Restaurant operations",
    explanation: "Covers menu planning, kitchen, and service staff."
  },
  {
    question: "Revenue management in hospitality focuses on:",
    options: ["Maximizing profit and occupancy", "Mining output", "Factory production", "Crop yield"],
    correctAnswer: "Maximizing profit and occupancy",
    explanation: "Pricing and inventory strategies improve revenue."
  },
  {
    question: "Hospitality managers coordinate:",
    options: ["Staff and operations", "Mining teams", "Farm workers", "Factory workers"],
    correctAnswer: "Staff and operations",
    explanation: "Management ensures smooth daily functioning."
  },
  {
    question: "Customer satisfaction is measured by:",
    options: ["Feedback and reviews", "Mining output", "Factory output", "Crop yield"],
    correctAnswer: "Feedback and reviews",
    explanation: "Guest opinions guide service improvement."
  },
  {
    question: "Training programs in hospitality focus on:",
    options: ["Service quality and skills", "Mining safety", "Factory efficiency", "Farming techniques"],
    correctAnswer: "Service quality and skills",
    explanation: "Staff training enhances guest experience."
  },
  {
    question: "Hospitality management improves:",
    options: ["Guest experience and efficiency", "Mining productivity", "Factory output", "Agricultural yield"],
    correctAnswer: "Guest experience and efficiency",
    explanation: "Effective management ensures smooth operations and happy guests."
  },
  {
    question: "Sustainability in hospitality involves:",
    options: ["Reducing waste and energy usage", "Mining", "Factory production", "Farming"],
    correctAnswer: "Reducing waste and energy usage",
    explanation: "Eco-friendly practices are increasingly important in hospitality."
  }
],

"Online Travel Booking": [
  {
    question: "Online travel booking allows:",
    options: ["Booking flights, hotels, and tours digitally", "Mining operations", "Factory visits", "Farming"],
    correctAnswer: "Booking flights, hotels, and tours digitally",
    explanation: "Users can plan and pay for travel online."
  },
  {
    question: "Travel aggregator websites:",
    options: ["Compare multiple providers", "Mine resources", "Build factories", "Farm crops"],
    correctAnswer: "Compare multiple providers",
    explanation: "Aggregators help users find best options and prices."
  },
  {
    question: "Mobile booking apps provide:",
    options: ["Convenient travel reservations", "Mining data", "Factory scheduling", "Agricultural tracking"],
    correctAnswer: "Convenient travel reservations",
    explanation: "Apps make bookings accessible anytime, anywhere."
  },
  {
    question: "Cancellation policies are important for:",
    options: ["Travel bookings", "Mining operations", "Factory output", "Farming plans"],
    correctAnswer: "Travel bookings",
    explanation: "Policies outline rules for refunds or changes."
  },
  {
    question: "Online booking systems improve:",
    options: ["Efficiency and convenience", "Mining output", "Factory productivity", "Crop yields"],
    correctAnswer: "Efficiency and convenience",
    explanation: "Digital tools save time and reduce errors."
  },
  {
    question: "Travel websites often include:",
    options: ["Reviews and ratings", "Mining results", "Factory reports", "Crop statistics"],
    correctAnswer: "Reviews and ratings",
    explanation: "User feedback helps others make decisions."
  },
  {
    question: "Booking platforms may offer:",
    options: ["Discounts and deals", "Mining tools", "Factory machines", "Agriculture products"],
    correctAnswer: "Discounts and deals",
    explanation: "Promotions attract customers."
  },
  {
    question: "Payment methods for online bookings include:",
    options: ["Credit cards, digital wallets", "Mining licenses", "Factory materials", "Crop seeds"],
    correctAnswer: "Credit cards, digital wallets",
    explanation: "Multiple payment options make bookings easier."
  },
  {
    question: "Travel apps can provide:",
    options: ["Itineraries and notifications", "Mining schedules", "Factory production reports", "Farming alerts"],
    correctAnswer: "Itineraries and notifications",
    explanation: "Apps keep travelers informed and organized."
  },
  {
    question: "Online travel booking enhances:",
    options: ["User convenience and planning", "Mining output", "Factory efficiency", "Agricultural yield"],
    correctAnswer: "User convenience and planning",
    explanation: "It simplifies travel management for users."
  }
],

"Cultural Tourism": [
  {
    question: "Cultural tourism focuses on:",
    options: ["Experiencing local culture and heritage", "Mining operations", "Factory work", "Farming"],
    correctAnswer: "Experiencing local culture and heritage",
    explanation: "Visitors engage with traditions, art, and history."
  },
  {
    question: "Tourists may visit:",
    options: ["Museums, historical sites, festivals", "Factories", "Mining areas", "Farms"],
    correctAnswer: "Museums, historical sites, festivals",
    explanation: "Cultural attractions include places and events showcasing heritage."
  },
  {
    question: "Cultural tourism supports:",
    options: ["Local communities and preservation", "Mining output", "Factory productivity", "Agriculture"],
    correctAnswer: "Local communities and preservation",
    explanation: "It provides income and awareness for cultural conservation."
  },
  {
    question: "Guided cultural tours provide:",
    options: ["Expert explanations and insights", "Mining guidance", "Factory tours", "Agriculture lessons"],
    correctAnswer: "Expert explanations and insights",
    explanation: "Tour guides enhance visitor understanding."
  },
  {
    question: "Traditional food and crafts are:",
    options: ["Cultural tourism highlights", "Industrial outputs", "Mining products", "Factory items"],
    correctAnswer: "Cultural tourism highlights",
    explanation: "Local cuisine and handicrafts attract visitors."
  },
  {
    question: "Cultural festivals often include:",
    options: ["Music, dance, and art", "Mining demonstrations", "Factory tours", "Farming exhibitions"],
    correctAnswer: "Music, dance, and art",
    explanation: "Festivals showcase cultural expression."
  },
  {
    question: "Cultural tourism encourages:",
    options: ["Heritage preservation", "Mining", "Factory work", "Farming"],
    correctAnswer: "Heritage preservation",
    explanation: "Tourism revenue helps maintain historical sites."
  },
  {
    question: "Local guides in cultural tourism:",
    options: ["Provide knowledge and context", "Operate machinery", "Farm crops", "Mine resources"],
    correctAnswer: "Provide knowledge and context",
    explanation: "Guides interpret history and traditions for visitors."
  },
  {
    question: "Cultural tourism experiences may include:",
    options: ["Workshops, performances, and local visits", "Mining tours", "Factory workshops", "Agriculture visits"],
    correctAnswer: "Workshops, performances, and local visits",
    explanation: "Interactive experiences immerse tourists in culture."
  },
  {
    question: "Sustainable cultural tourism aims to:",
    options: ["Preserve culture and environment", "Increase mining output", "Build factories", "Grow crops"],
    correctAnswer: "Preserve culture and environment",
    explanation: "Tourism should benefit communities without harming heritage."
  }
]


  },
  nonprofit:{
      "Charitable Organizations": [
    {
      question: "Charitable organizations primarily aim to:",
      options: ["Provide help or relief without profit", "Generate industrial output", "Build vehicles", "Grow crops"],
      correctAnswer: "Provide help or relief without profit",
      explanation: "Charities focus on serving a social cause rather than making money."
    },
    {
      question: "Non-profits rely mainly on:",
      options: ["Donations and grants", "Mining", "Factory production", "Vehicle sales"],
      correctAnswer: "Donations and grants",
      explanation: "Funding comes from supporters rather than commercial activities."
    },
    {
      question: "A fundraising event helps organizations to:",
      options: ["Raise money for programs", "Build factories", "Mine resources", "Grow crops"],
      correctAnswer: "Raise money for programs",
      explanation: "Events encourage donors to contribute."
    },
    {
      question: "Charitable organizations are often governed by:",
      options: ["A board of directors", "Miners", "Factory managers", "Farmers"],
      correctAnswer: "A board of directors",
      explanation: "Boards oversee strategy, accountability, and governance."
    },
    {
      question: "Volunteers in charities:",
      options: ["Assist without financial compensation", "Drive vehicles", "Operate factories", "Mine resources"],
      correctAnswer: "Assist without financial compensation",
      explanation: "Volunteers provide services to support the mission."
    },
    {
      question: "Transparency in charitable organizations ensures:",
      options: ["Trust and accountability", "Mining efficiency", "Factory productivity", "Agricultural output"],
      correctAnswer: "Trust and accountability",
      explanation: "Donors and stakeholders can see how funds are used."
    },
    {
      question: "Non-profits must comply with:",
      options: ["Local laws and regulations", "Mining regulations", "Factory safety rules", "Farming standards"],
      correctAnswer: "Local laws and regulations",
      explanation: "Legal compliance ensures legitimacy and tax benefits."
    },
    {
      question: "Impact measurement in charities assesses:",
      options: ["Effectiveness of programs", "Mining output", "Factory production", "Crop yield"],
      correctAnswer: "Effectiveness of programs",
      explanation: "Helps determine if goals are achieved."
    },
    {
      question: "Donor management involves:",
      options: ["Maintaining relationships with supporters", "Mining operations", "Factory scheduling", "Farming operations"],
      correctAnswer: "Maintaining relationships with supporters",
      explanation: "Strong donor relationships encourage continued support."
    },
    {
      question: "Charities often collaborate with:",
      options: ["Other non-profits and government", "Factories", "Mines", "Farms"],
      correctAnswer: "Other non-profits and government",
      explanation: "Partnerships amplify impact and resource sharing."
    }
  ],

  "Social Services": [
    {
      question: "Social services aim to:",
      options: ["Support vulnerable populations", "Build vehicles", "Manufacture goods", "Mine resources"],
      correctAnswer: "Support vulnerable populations",
      explanation: "Services provide assistance for health, housing, and well-being."
    },
    {
      question: "Common social services include:",
      options: ["Healthcare, housing, counseling", "Mining operations", "Factory production", "Farming advice"],
      correctAnswer: "Healthcare, housing, counseling",
      explanation: "They address basic needs and social support."
    },
    {
      question: "Social workers primarily:",
      options: ["Provide guidance and support to clients", "Drive trucks", "Build factories", "Operate farms"],
      correctAnswer: "Provide guidance and support to clients",
      explanation: "They help individuals and families navigate challenges."
    },
    {
      question: "Government agencies often fund:",
      options: ["Social service programs", "Factories", "Mines", "Farms"],
      correctAnswer: "Social service programs",
      explanation: "Funding ensures accessibility and sustainability."
    },
    {
      question: "Crisis intervention services include:",
      options: ["Emergency support for individuals in distress", "Mining safety", "Factory repairs", "Crop emergency management"],
      correctAnswer: "Emergency support for individuals in distress",
      explanation: "Immediate assistance addresses urgent social needs."
    },
    {
      question: "Child welfare programs focus on:",
      options: ["Safety and well-being of children", "Mining operations", "Factory labor", "Farming techniques"],
      correctAnswer: "Safety and well-being of children",
      explanation: "Programs protect children from harm and neglect."
    },
    {
      question: "Elderly care services provide:",
      options: ["Support and assistance to senior citizens", "Mining supervision", "Factory output management", "Crop advice"],
      correctAnswer: "Support and assistance to senior citizens",
      explanation: "Includes healthcare, social engagement, and daily living help."
    },
    {
      question: "Case management in social services involves:",
      options: ["Coordinating resources for clients", "Mining operations", "Factory workflow", "Farm logistics"],
      correctAnswer: "Coordinating resources for clients",
      explanation: "Ensures individuals receive appropriate support."
    },
    {
      question: "Non-profits delivering social services rely on:",
      options: ["Funding, volunteers, and community support", "Mining equipment", "Factory labor", "Agricultural output"],
      correctAnswer: "Funding, volunteers, and community support",
      explanation: "Resources are critical to sustain programs."
    },
    {
      question: "Outcome evaluation measures:",
      options: ["Effectiveness of social service programs", "Mining output", "Factory efficiency", "Crop yield"],
      correctAnswer: "Effectiveness of social service programs",
      explanation: "Helps organizations improve service delivery."
    }
  ],

  "Environmental Conservation": [
    {
      question: "Environmental conservation aims to:",
      options: ["Protect natural resources and ecosystems", "Build factories", "Mine coal", "Grow crops"],
      correctAnswer: "Protect natural resources and ecosystems",
      explanation: "It focuses on sustainability and biodiversity."
    },
    {
      question: "Activities in conservation include:",
      options: ["Reforestation, wildlife protection, pollution control", "Factory production", "Mining", "Farming"],
      correctAnswer: "Reforestation, wildlife protection, pollution control",
      explanation: "These actions reduce environmental degradation."
    },
    {
      question: "Non-profits in conservation often work with:",
      options: ["Government and local communities", "Factories", "Mines", "Farms"],
      correctAnswer: "Government and local communities",
      explanation: "Partnerships strengthen environmental impact."
    },
    {
      question: "Sustainable practices help:",
      options: ["Maintain ecological balance", "Increase mining output", "Grow crops", "Build factories"],
      correctAnswer: "Maintain ecological balance",
      explanation: "Responsible practices prevent resource depletion."
    },
    {
      question: "Wildlife sanctuaries are designed to:",
      options: ["Protect animal habitats", "Factories", "Mines", "Farms"],
      correctAnswer: "Protect animal habitats",
      explanation: "Sanctuaries provide safe living spaces for species."
    },
    {
      question: "Climate action initiatives aim to:",
      options: ["Reduce greenhouse gas emissions", "Mine coal", "Construct factories", "Farm crops"],
      correctAnswer: "Reduce greenhouse gas emissions",
      explanation: "Mitigation efforts help combat climate change."
    },
    {
      question: "Environmental education raises:",
      options: ["Awareness about conservation", "Mining skills", "Factory techniques", "Farming knowledge"],
      correctAnswer: "Awareness about conservation",
      explanation: "Education encourages sustainable behavior."
    },
    {
      question: "Non-profits may monitor:",
      options: ["Water quality, air quality, and biodiversity", "Mining output", "Factory efficiency", "Crop yield"],
      correctAnswer: "Water quality, air quality, and biodiversity",
      explanation: "Monitoring ensures ecosystems are healthy."
    },
    {
      question: "Community participation helps:",
      options: ["Enhance conservation efforts", "Mining production", "Factory output", "Crop harvest"],
      correctAnswer: "Enhance conservation efforts",
      explanation: "Engaged communities support sustainable practices."
    },
    {
      question: "Environmental policies are important for:",
      options: ["Guiding conservation actions", "Mining regulation", "Factory management", "Farm planning"],
      correctAnswer: "Guiding conservation actions",
      explanation: "Policies create legal frameworks for protection."
    }
  ],

  "Humanitarian Aid": [
    {
      question: "Humanitarian aid provides:",
      options: ["Emergency assistance during crises", "Industrial services", "Mining support", "Farming tools"],
      correctAnswer: "Emergency assistance during crises",
      explanation: "Aid helps people affected by disasters or conflicts."
    },
    {
      question: "Aid can include:",
      options: ["Food, water, shelter, and medical care", "Mining equipment", "Factory machinery", "Farming products"],
      correctAnswer: "Food, water, shelter, and medical care",
      explanation: "Basic necessities are provided to affected populations."
    },
    {
      question: "Organizations delivering aid must often:",
      options: ["Coordinate logistics and resources", "Operate factories", "Manage mines", "Grow crops"],
      correctAnswer: "Coordinate logistics and resources",
      explanation: "Efficient planning ensures timely delivery."
    },
    {
      question: "Disaster relief focuses on:",
      options: ["Immediate support for affected communities", "Mining safety", "Factory output", "Agricultural productivity"],
      correctAnswer: "Immediate support for affected communities",
      explanation: "Helps victims recover quickly."
    },
    {
      question: "Humanitarian aid is guided by:",
      options: ["Principles of neutrality and impartiality", "Mining regulations", "Factory standards", "Farming techniques"],
      correctAnswer: "Principles of neutrality and impartiality",
      explanation: "Aid should not favor any side in conflicts."
    },
    {
      question: "Medical aid programs provide:",
      options: ["Emergency healthcare and vaccination", "Mining safety", "Factory health checks", "Farm veterinary services"],
      correctAnswer: "Emergency healthcare and vaccination",
      explanation: "Health services are critical in crises."
    },
    {
      question: "Refugee assistance programs offer:",
      options: ["Shelter and basic needs", "Mining camps", "Factory dorms", "Farm housing"],
      correctAnswer: "Shelter and basic needs",
      explanation: "Support is provided to displaced populations."
    },
    {
      question: "Humanitarian organizations work with:",
      options: ["Governments and NGOs", "Factories", "Mining companies", "Farms"],
      correctAnswer: "Governments and NGOs",
      explanation: "Collaboration ensures wider reach and efficiency."
    },
    {
      question: "Aid delivery may face challenges such as:",
      options: ["Access, logistics, and security issues", "Mining efficiency", "Factory downtime", "Crop failures"],
      correctAnswer: "Access, logistics, and security issues",
      explanation: "Conflicts and disasters can hinder aid operations."
    },
    {
      question: "Funding for humanitarian aid comes from:",
      options: ["Donors, governments, and organizations", "Mining companies", "Factories", "Farmers"],
      correctAnswer: "Donors, governments, and organizations",
      explanation: "Multiple sources finance relief operations."
    }
  ],
  "Education Non-Profits": [
  {
    question: "Education non-profits focus on:",
    options: ["Improving access to learning and knowledge", "Mining operations", "Factory production", "Farming"],
    correctAnswer: "Improving access to learning and knowledge",
    explanation: "They provide education opportunities to underserved communities."
  },
  {
    question: "Scholarship programs are designed to:",
    options: ["Support students financially", "Mine coal", "Build factories", "Grow crops"],
    correctAnswer: "Support students financially",
    explanation: "Financial aid helps students pursue education."
  },
  {
    question: "Non-profit schools may offer:",
    options: ["Free or low-cost education", "Mining workshops", "Factory tours", "Farm training"],
    correctAnswer: "Free or low-cost education",
    explanation: "Tuition is subsidized to increase accessibility."
  },
  {
    question: "Education advocacy organizations aim to:",
    options: ["Promote policies for better learning", "Operate factories", "Manage mines", "Grow crops"],
    correctAnswer: "Promote policies for better learning",
    explanation: "They influence government and community policies."
  },
  {
    question: "Adult literacy programs help:",
    options: ["Adults improve reading and writing skills", "Mine safety", "Factory operations", "Crop production"],
    correctAnswer: "Adults improve reading and writing skills",
    explanation: "Programs target literacy and lifelong learning."
  },
  {
    question: "Educational non-profits may partner with:",
    options: ["Schools and governments", "Mining companies", "Factories", "Farms"],
    correctAnswer: "Schools and governments",
    explanation: "Partnerships expand reach and effectiveness."
  },
  {
    question: "Teacher training programs aim to:",
    options: ["Improve instructional quality", "Mine efficiency", "Factory output", "Farm productivity"],
    correctAnswer: "Improve instructional quality",
    explanation: "Skilled teachers enhance student learning outcomes."
  },
  {
    question: "Non-profits may provide:",
    options: ["Learning materials and technology", "Mining equipment", "Factory machinery", "Agricultural tools"],
    correctAnswer: "Learning materials and technology",
    explanation: "Resources support education in classrooms or remotely."
  },
  {
    question: "Education non-profits measure success by:",
    options: ["Student outcomes and literacy rates", "Mining output", "Factory production", "Crop yield"],
    correctAnswer: "Student outcomes and literacy rates",
    explanation: "Assessing progress ensures effective programs."
  },
  {
    question: "Funding for education non-profits often comes from:",
    options: ["Donations, grants, and foundations", "Mining operations", "Factories", "Farms"],
    correctAnswer: "Donations, grants, and foundations",
    explanation: "Financial support allows non-profits to operate."
  }
],

"Healthcare Non-Profits": [
  {
    question: "Healthcare non-profits aim to:",
    options: ["Provide medical services to underserved populations", "Mine minerals", "Manufacture goods", "Grow crops"],
    correctAnswer: "Provide medical services to underserved populations",
    explanation: "They focus on access to health care and well-being."
  },
  {
    question: "Common healthcare services include:",
    options: ["Clinics, vaccinations, health education", "Factories", "Mines", "Farms"],
    correctAnswer: "Clinics, vaccinations, health education",
    explanation: "Services prevent and treat diseases and improve health knowledge."
  },
  {
    question: "Medical outreach programs target:",
    options: ["Rural or low-income communities", "Factory workers", "Mining areas", "Farms"],
    correctAnswer: "Rural or low-income communities",
    explanation: "Outreach ensures access to healthcare where it’s limited."
  },
  {
    question: "Non-profit hospitals are often funded by:",
    options: ["Donations, grants, and government support", "Mining operations", "Factory production", "Agriculture"],
    correctAnswer: "Donations, grants, and government support",
    explanation: "Funding sustains operations and services."
  },
  {
    question: "Health awareness campaigns promote:",
    options: ["Preventive care and healthy lifestyles", "Mining safety", "Factory safety", "Farm safety"],
    correctAnswer: "Preventive care and healthy lifestyles",
    explanation: "Education helps reduce illness and improve community health."
  },
  {
    question: "Volunteer medical staff help by:",
    options: ["Providing care and support", "Mining supervision", "Factory management", "Farming"],
    correctAnswer: "Providing care and support",
    explanation: "Volunteers extend the reach of healthcare programs."
  },
  {
    question: "Healthcare non-profits monitor:",
    options: ["Disease outbreaks and health indicators", "Mining output", "Factory production", "Crop yield"],
    correctAnswer: "Disease outbreaks and health indicators",
    explanation: "Monitoring allows quick responses to health crises."
  },
  {
    question: "Non-profits may partner with:",
    options: ["Hospitals, governments, and NGOs", "Factories", "Mines", "Farms"],
    correctAnswer: "Hospitals, governments, and NGOs",
    explanation: "Collaboration improves service delivery."
  },
  {
    question: "Funding is critical for:",
    options: ["Purchasing medical supplies and paying staff", "Mining equipment", "Factory machinery", "Farming tools"],
    correctAnswer: "Purchasing medical supplies and paying staff",
    explanation: "Resources are necessary for smooth healthcare operations."
  },
  {
    question: "Success is measured by:",
    options: ["Patient health outcomes and coverage", "Mining productivity", "Factory efficiency", "Crop yield"],
    correctAnswer: "Patient health outcomes and coverage",
    explanation: "Impact assessment ensures effectiveness."
  }
],

"Arts & Culture": [
  {
    question: "Arts & culture non-profits aim to:",
    options: ["Promote artistic expression and cultural heritage", "Mine minerals", "Build factories", "Grow crops"],
    correctAnswer: "Promote artistic expression and cultural heritage",
    explanation: "They support artists, museums, and cultural programs."
  },
  {
    question: "Programs may include:",
    options: ["Exhibitions, performances, workshops", "Factories", "Mining operations", "Farms"],
    correctAnswer: "Exhibitions, performances, workshops",
    explanation: "Activities showcase art and engage communities."
  },
  {
    question: "Cultural preservation focuses on:",
    options: ["Protecting historic sites and traditions", "Mining output", "Factory production", "Agriculture"],
    correctAnswer: "Protecting historic sites and traditions",
    explanation: "Preservation maintains heritage for future generations."
  },
  {
    question: "Arts education programs provide:",
    options: ["Creative learning opportunities", "Mining training", "Factory skills", "Farm techniques"],
    correctAnswer: "Creative learning opportunities",
    explanation: "Programs teach art, music, theater, and crafts."
  },
  {
    question: "Non-profits in arts may fund:",
    options: ["Artists and community projects", "Mining workers", "Factories", "Farmers"],
    correctAnswer: "Artists and community projects",
    explanation: "Grants and support help cultural initiatives thrive."
  },
  {
    question: "Collaborations with schools promote:",
    options: ["Arts education for students", "Mining safety", "Factory operations", "Farm training"],
    correctAnswer: "Arts education for students",
    explanation: "Exposure fosters creativity and cultural awareness."
  },
  {
    question: "Public events help organizations:",
    options: ["Engage communities and raise awareness", "Mine minerals", "Manage factories", "Farm produce"],
    correctAnswer: "Engage communities and raise awareness",
    explanation: "Events build support and participation."
  },
  {
    question: "Funding sources include:",
    options: ["Donations, grants, and sponsorships", "Mining companies", "Factories", "Farms"],
    correctAnswer: "Donations, grants, and sponsorships",
    explanation: "Financial support enables programming."
  },
  {
    question: "Arts & culture non-profits measure success by:",
    options: ["Audience engagement and impact", "Mining output", "Factory efficiency", "Crop yield"],
    correctAnswer: "Audience engagement and impact",
    explanation: "Participation and reach indicate effectiveness."
  },
  {
    question: "Cultural exchange programs allow:",
    options: ["Sharing traditions and art globally", "Mining collaboration", "Factory tours", "Agricultural training"],
    correctAnswer: "Sharing traditions and art globally",
    explanation: "Exchange fosters appreciation and learning across cultures."
  }
],

"Community Development": [
  {
    question: "Community development focuses on:",
    options: ["Improving quality of life locally", "Mining", "Factory work", "Farming"],
    correctAnswer: "Improving quality of life locally",
    explanation: "Projects enhance education, housing, health, and participation."
  },
  {
    question: "Programs may address:",
    options: ["Infrastructure, education, healthcare", "Mining operations", "Factory output", "Crop yield"],
    correctAnswer: "Infrastructure, education, healthcare",
    explanation: "Holistic initiatives benefit the community broadly."
  },
  {
    question: "Non-profits work with:",
    options: ["Local governments and residents", "Factories", "Mines", "Farms"],
    correctAnswer: "Local governments and residents",
    explanation: "Collaboration ensures relevance and sustainability."
  },
  {
    question: "Community engagement helps:",
    options: ["Identify needs and solutions", "Mine coal", "Operate factories", "Grow crops"],
    correctAnswer: "Identify needs and solutions",
    explanation: "Involving people improves outcomes and ownership."
  },
  {
    question: "Affordable housing programs aim to:",
    options: ["Provide safe homes for low-income families", "Mine minerals", "Build factories", "Farm products"],
    correctAnswer: "Provide safe homes for low-income families",
    explanation: "Housing stability improves quality of life."
  },
  {
    question: "Skills training programs support:",
    options: ["Employment and economic development", "Mining labor", "Factory labor", "Farm labor"],
    correctAnswer: "Employment and economic development",
    explanation: "Training enhances job opportunities."
  },
  {
    question: "Community centers provide:",
    options: ["Education, recreation, and social services", "Mining facilities", "Factory workshops", "Farming tools"],
    correctAnswer: "Education, recreation, and social services",
    explanation: "Centers support learning, leisure, and social cohesion."
  },
  {
    question: "Non-profits measure impact by:",
    options: ["Participation, satisfaction, and outcomes", "Mining output", "Factory efficiency", "Crop yield"],
    correctAnswer: "Participation, satisfaction, and outcomes",
    explanation: "Evaluation ensures programs are effective."
  },
  {
    question: "Funding comes from:",
    options: ["Donations, grants, and local contributions", "Mining companies", "Factories", "Farmers"],
    correctAnswer: "Donations, grants, and local contributions",
    explanation: "Financial support sustains programs."
  },
  {
    question: "Sustainable community development includes:",
    options: ["Environmentally and socially responsible initiatives", "Mining practices", "Factory productivity", "Farming methods"],
    correctAnswer: "Environmentally and socially responsible initiatives",
    explanation: "Ensures long-term benefits for communities."
  }
],

"International Development": [
  {
    question: "International development focuses on:",
    options: ["Reducing poverty and improving living standards globally", "Mining globally", "Factory production", "Farming techniques"],
    correctAnswer: "Reducing poverty and improving living standards globally",
    explanation: "Programs target social, economic, and environmental improvements worldwide."
  },
  {
    question: "Development organizations work with:",
    options: ["Governments, NGOs, and communities", "Factories", "Mines", "Farms"],
    correctAnswer: "Governments, NGOs, and communities",
    explanation: "Collaboration maximizes effectiveness and reach."
  },
  {
    question: "Aid programs may include:",
    options: ["Education, healthcare, and economic development", "Mining", "Factory production", "Agriculture"],
    correctAnswer: "Education, healthcare, and economic development",
    explanation: "Multifaceted programs address key human needs."
  },
  {
    question: "Capacity building focuses on:",
    options: ["Strengthening local skills and institutions", "Mining output", "Factory labor", "Farm techniques"],
    correctAnswer: "Strengthening local skills and institutions",
    explanation: "Empowers communities to sustain progress."
  },
  {
    question: "International development often addresses:",
    options: ["Inequality and social justice", "Mining safety", "Factory efficiency", "Crop yield"],
    correctAnswer: "Inequality and social justice",
    explanation: "Programs aim for equitable access to resources and opportunities."
  },
  {
    question: "Monitoring and evaluation ensures:",
    options: ["Programs are effective and accountable", "Mining output", "Factory production", "Agricultural yield"],
    correctAnswer: "Programs are effective and accountable",
    explanation: "Tracking outcomes improves impact and transparency."
  },
  {
    question: "Sustainable development goals (SDGs) guide:",
    options: ["Global non-profit initiatives", "Mining operations", "Factories", "Farming"],
    correctAnswer: "Global non-profit initiatives",
    explanation: "SDGs provide a framework for reducing poverty and promoting sustainability."
  },
  {
    question: "Disaster risk reduction programs aim to:",
    options: ["Prepare communities for emergencies", "Mine safety", "Factory production", "Farm planning"],
    correctAnswer: "Prepare communities for emergencies",
    explanation: "Helps minimize harm from natural or man-made disasters."
  },
  {
    question: "Funding comes from:",
    options: ["International donors, grants, and governments", "Factories", "Mines", "Farms"],
    correctAnswer: "International donors, grants, and governments",
    explanation: "Financial support sustains programs globally."
  },
  {
    question: "Success in international development is measured by:",
    options: ["Improved livelihoods and well-being", "Mining output", "Factory efficiency", "Crop yield"],
    correctAnswer: "Improved livelihoods and well-being",
    explanation: "Positive impact on communities reflects program effectiveness."
  }
],

"Animal Welfare": [
  {
    question: "Animal welfare non-profits aim to:",
    options: ["Protect and care for animals", "Mine minerals", "Build factories", "Grow crops"],
    correctAnswer: "Protect and care for animals",
    explanation: "They focus on rescue, adoption, and advocacy for animals."
  },
  {
    question: "Animal shelters provide:",
    options: ["Temporary homes for rescued animals", "Mining camps", "Factories", "Farms"],
    correctAnswer: "Temporary homes for rescued animals",
    explanation: "Shelters care for abandoned or injured animals."
  },
  {
    question: "Non-profits promote:",
    options: ["Humane treatment and adoption", "Mining safety", "Factory efficiency", "Farm output"],
    correctAnswer: "Humane treatment and adoption",
    explanation: "Ensures animals are treated ethically and placed in homes."
  },
  {
    question: "Volunteer programs support:",
    options: ["Animal care and community outreach", "Mining operations", "Factory work", "Farming"],
    correctAnswer: "Animal care and community outreach",
    explanation: "Volunteers assist with daily operations and education."
  },
  {
    question: "Fundraising events help:",
    options: ["Finance rescue operations and veterinary care", "Mine minerals", "Build factories", "Grow crops"],
    correctAnswer: "Finance rescue operations and veterinary care",
    explanation: "Funds sustain programs and animal health services."
  },
  {
    question: "Educational campaigns raise awareness about:",
    options: ["Responsible pet ownership and wildlife protection", "Mining safety", "Factory safety", "Farming techniques"],
    correctAnswer: "Responsible pet ownership and wildlife protection",
    explanation: "Education encourages ethical treatment and conservation."
  },
  {
    question: "Non-profits may collaborate with:",
    options: ["Veterinarians and governments", "Factories", "Mines", "Farms"],
    correctAnswer: "Veterinarians and governments",
    explanation: "Partnerships improve care and legal compliance."
  },
  {
    question: "Animal rescue operations include:",
    options: ["Saving injured or abandoned animals", "Mining operations", "Factory work", "Farming"],
    correctAnswer: "Saving injured or abandoned animals",
    explanation: "Rescue programs prevent suffering and death."
  },
  {
    question: "Monitoring and advocacy ensure:",
    options: ["Protection of animal rights", "Mining output", "Factory production", "Crop yield"],
    correctAnswer: "Protection of animal rights",
    explanation: "Policies and regulations safeguard welfare."
  },
  {
    question: "Success is measured by:",
    options: ["Adoptions and improved animal health", "Mining output", "Factory efficiency", "Crop yield"],
    correctAnswer: "Adoptions and improved animal health",
    explanation: "Positive outcomes indicate program effectiveness."
  }
],

"Youth Organizations": [
  {
    question: "Youth organizations aim to:",
    options: ["Support development and engagement of young people", "Mining operations", "Factory production", "Farming"],
    correctAnswer: "Support development and engagement of young people",
    explanation: "Programs focus on education, skills, and leadership for youth."
  },
  {
    question: "Programs may include:",
    options: ["Mentorship, training, and recreation", "Mining training", "Factory workshops", "Farm programs"],
    correctAnswer: "Mentorship, training, and recreation",
    explanation: "Activities help youth develop personally and socially."
  },
  {
    question: "Youth organizations collaborate with:",
    options: ["Schools, governments, and communities", "Factories", "Mines", "Farms"],
    correctAnswer: "Schools, governments, and communities",
    explanation: "Partnerships maximize impact and access."
  },
  {
    question: "Volunteer opportunities allow youth to:",
    options: ["Gain skills and contribute to society", "Mine minerals", "Work in factories", "Farm crops"],
    correctAnswer: "Gain skills and contribute to society",
    explanation: "Participation fosters personal growth and civic engagement."
  },
  {
    question: "Funding comes from:",
    options: ["Donations, grants, and sponsorships", "Mining companies", "Factories", "Farms"],
    correctAnswer: "Donations, grants, and sponsorships",
    explanation: "Financial support sustains programs and activities."
  },
  {
    question: "Youth leadership programs focus on:",
    options: ["Developing decision-making and teamwork skills", "Mining management", "Factory management", "Farm management"],
    correctAnswer: "Developing decision-making and teamwork skills",
    explanation: "Skills empower youth to take initiative in communities."
  },
  {
    question: "Recreational programs include:",
    options: ["Sports, arts, and cultural activities", "Mining exercises", "Factory drills", "Farming games"],
    correctAnswer: "Sports, arts, and cultural activities",
    explanation: "Recreation promotes physical, social, and emotional development."
  },
  {
    question: "Mentorship programs provide:",
    options: ["Guidance from experienced individuals", "Mining supervision", "Factory guidance", "Farming advice"],
    correctAnswer: "Guidance from experienced individuals",
    explanation: "Mentors help youth navigate education, career, and life challenges."
  },
  {
    question: "Evaluation measures:",
    options: ["Participation, skill growth, and community impact", "Mining output", "Factory efficiency", "Crop yield"],
    correctAnswer: "Participation, skill growth, and community impact",
    explanation: "Ensures programs are effective and meaningful."
  },
  {
    question: "Youth empowerment programs aim to:",
    options: ["Increase confidence and community engagement", "Mine minerals", "Run factories", "Farm crops"],
    correctAnswer: "Increase confidence and community engagement",
    explanation: "Empowered youth contribute positively to society."
  }
],

"Social Enterprise": [
  {
    question: "Social enterprises aim to:",
    options: ["Generate revenue while addressing social problems", "Mine minerals", "Operate factories", "Farm crops"],
    correctAnswer: "Generate revenue while addressing social problems",
    explanation: "They balance profit-making with social impact."
  },
  {
    question: "Revenue is often reinvested into:",
    options: ["Programs and social impact initiatives", "Mining operations", "Factory production", "Farming"],
    correctAnswer: "Programs and social impact initiatives",
    explanation: "Reinvestment supports the mission rather than private profit."
  },
  {
    question: "Social enterprises may produce:",
    options: ["Products or services that solve social issues", "Mining output", "Factory products", "Crops"],
    correctAnswer: "Products or services that solve social issues",
    explanation: "Business activities are aligned with social goals."
  },
  {
    question: "Impact measurement focuses on:",
    options: ["Social outcomes and community benefits", "Mining output", "Factory efficiency", "Crop yield"],
    correctAnswer: "Social outcomes and community benefits",
    explanation: "Effectiveness is judged by positive societal changes."
  },
  {
    question: "Funding sources include:",
    options: ["Investors, grants, and earned revenue", "Mining companies", "Factories", "Farms"],
    correctAnswer: "Investors, grants, and earned revenue",
    explanation: "Financial sustainability requires multiple sources."
  },
  {
    question: "Social enterprises differ from charities because they:",
    options: ["Earn revenue while pursuing social goals", "Mine minerals", "Run factories", "Grow crops"],
    correctAnswer: "Earn revenue while pursuing social goals",
    explanation: "They operate like businesses but prioritize social impact."
  },
  {
    question: "Partnerships help:",
    options: ["Expand reach and effectiveness", "Mining operations", "Factory management", "Farming"],
    correctAnswer: "Expand reach and effectiveness",
    explanation: "Collaborations improve sustainability and impact."
  },
  {
    question: "Social entrepreneurs focus on:",
    options: ["Innovative solutions to societal problems", "Mining innovations", "Factory innovations", "Agricultural innovations"],
    correctAnswer: "Innovative solutions to societal problems",
    explanation: "Creative approaches address community challenges."
  },
  {
    question: "Success is measured by:",
    options: ["Social impact and financial sustainability", "Mining output", "Factory efficiency", "Crop yield"],
    correctAnswer: "Social impact and financial sustainability",
    explanation: "Both social goals and economic viability matter."
  },
  {
    question: "Employees in social enterprises often:",
    options: ["Align work with mission and values", "Mine minerals", "Operate factories", "Farm crops"],
    correctAnswer: "Align work with mission and values",
    explanation: "Staff commitment drives social outcomes."
  }
],

"Advocacy Organizations": [
  {
    question: "Advocacy organizations aim to:",
    options: ["Promote policy changes or social causes", "Mine minerals", "Build factories", "Grow crops"],
    correctAnswer: "Promote policy changes or social causes",
    explanation: "They raise awareness and influence decisions."
  },
  {
    question: "Methods include:",
    options: ["Campaigns, lobbying, public education", "Mining operations", "Factory production", "Farming techniques"],
    correctAnswer: "Campaigns, lobbying, public education",
    explanation: "Multiple approaches influence public and policy decisions."
  },
  {
    question: "Advocates work with:",
    options: ["Government, communities, and media", "Factories", "Mines", "Farms"],
    correctAnswer: "Government, communities, and media",
    explanation: "Collaboration amplifies their message."
  },
  {
    question: "Petitions and protests are:",
    options: ["Ways to raise awareness and influence policy", "Mining activities", "Factory operations", "Farming methods"],
    correctAnswer: "Ways to raise awareness and influence policy",
    explanation: "Public actions draw attention to causes."
  },
  {
    question: "Funding comes from:",
    options: ["Donations, grants, and foundations", "Mining companies", "Factories", "Farms"],
    correctAnswer: "Donations, grants, and foundations",
    explanation: "Resources support advocacy campaigns."
  },
  {
    question: "Advocacy organizations measure success by:",
    options: ["Policy changes and public engagement", "Mining output", "Factory efficiency", "Crop yield"],
    correctAnswer: "Policy changes and public engagement",
    explanation: "Impact is reflected in awareness and legislative outcomes."
  },
  {
    question: "Campaigns may address:",
    options: ["Human rights, environment, social justice", "Mining safety", "Factory standards", "Farming practices"],
    correctAnswer: "Human rights, environment, social justice",
    explanation: "They target societal issues to create change."
  },
  {
    question: "Non-profits may use:",
    options: ["Media and social platforms to advocate", "Mining tools", "Factory tools", "Farming tools"],
    correctAnswer: "Media and social platforms to advocate",
    explanation: "Communication spreads awareness and mobilizes supporters."
  },
  {
    question: "Volunteers in advocacy:",
    options: ["Support campaigns and outreach", "Mine minerals", "Work in factories", "Farm crops"],
    correctAnswer: "Support campaigns and outreach",
    explanation: "Volunteer engagement strengthens efforts."
  },
  {
    question: "Transparency ensures:",
    options: ["Public trust and credibility", "Mining safety", "Factory quality", "Crop output"],
    correctAnswer: "Public trust and credibility",
    explanation: "Clear reporting builds legitimacy for advocacy work."
  }
]
  }
};

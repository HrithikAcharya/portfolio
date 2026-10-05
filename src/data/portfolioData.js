export const profile = {
  name: 'Hrithik Acharya',
  role: 'Software Engineer — QA, Full-Stack & Cloud',
  location: 'Tallahassee, FL',
  status: 'Open to work',
  resumeUrl: 'https://drive.google.com/file/d/1PMR60N-WpWnrCSMRf2uWvWfZSiHoK2eA/view?usp=sharing',
  email: 'hrithikacharya2001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hrithik-acharya-208660149/',
  github: 'https://github.com/HrithikAcharya',
};

export const aboutText =
  "I'm a software engineer and Information Technology graduate student at Florida State University, drawn to work that sits where careful building meets careful testing. Most recently I designed a production-grade Retrieval-Augmented Generation system — one that grounds every answer in its sources, scores its own responses with local quality metrics, and is backed by property-based tests — on a foundation of QA, Python, and full-stack development. The details I enjoy are the ones that keep software trustworthy: adaptive retrieval, sensible rate limiting, and thorough test coverage. I'm now looking for a team that treats shipping thoughtfully and verifying rigorously as two halves of the same craft.";

export const skillGroups = [
  {
    category: 'Languages',
    items: ['Core Java', 'Python', 'JavaScript'],
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'React'],
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'Express', 'EJS', 'MySQL'],
  },
  {
    category: 'AI / ML',
    items: ['LangChain', 'RAG', 'FAISS', 'Google Gemini'],
  },
  {
    category: 'Testing & Tools',
    items: ['Selenium (Java)', 'pytest', 'Hypothesis', 'Git'],
  },
];

// NOTE: company names and dates below are placeholders — replace with the
// real employer and timeframe for each role before publishing.
export const timeline = [
  {
    type: 'Education',
    title: "Master's in Information Technology",
    org: 'Florida State University',
    period: 'In progress',
    points: ['Coursework centered on cloud computing and scalable systems design.'],
  },
  {
    type: 'Training',
    title: 'Programming & QA Training',
    org: 'QSpiders',
    period: 'Add dates',
    points: ['Hands-on training in core programming, manual/automated testing, and QA fundamentals.'],
  },
  {
    type: 'Experience',
    title: 'Software Testing Intern',
    org: 'Add company name',
    period: 'Add dates',
    points: [
      'Executed manual and automated test cases to validate functionality across web applications.',
      'Logged and tracked defects, working with developers to verify fixes before release.',
    ],
  },
  {
    type: 'Experience',
    title: 'Python & Web Development Intern',
    org: 'Add company name',
    period: 'Add dates',
    points: ['Built and maintained internal web tools end-to-end, from data handling to UI.'],
  },
  {
    type: 'Experience',
    title: 'Machine Learning Intern — Image Data Analysis',
    org: 'Add company name',
    period: 'Add dates',
    points: ['Applied object-detection models to image datasets for autonomous-vehicle use cases.'],
  },
];

export const projects = [
  {
    title: 'Document Intelligence Assistant',
    description:
      'A production-grade RAG application for querying PDFs through chat, built with Chainlit, LangChain, and Google Gemini. Every answer is grounded solely in the uploaded documents with mandatory [Source: file, Page N] citations, and each response carries five locally-computed quality metrics (confidence, faithfulness, citation accuracy, and more) at zero extra API cost. Features query-adaptive retrieval (MMR and balanced multi-document search), proactive rate limiting with backoff, in-session caching, and 105 tests including property-based testing with Hypothesis.',
    link: 'https://github.com/HrithikAcharya/DocumentIntelligenceAssistant',
    tags: ['AI / RAG', 'Python', 'LLM'],
  },
  {
    title: 'Swarm Exploration and Target Searching',
    description:
      'A Webots simulation locating a target in a maze using a robot swarm, then reproduced on physical hardware in a maze-like environment using a DFS search algorithm.',
    link: 'https://github.com/Guruprasad-G/Swarm-Exploration-and-Target-Searching',
    tags: ['Robotics'],
  },
  {
    title: 'Image Data Analysis: Object Detection Using EfficientDet',
    description: 'Used the EfficientDet architecture to detect objects for autonomous-vehicle applications.',
    link: 'https://drive.google.com/drive/folders/1k-0Qe3wZKHXr1hniECE4xqPnRXW45TBw?usp=sharing',
    tags: ['Machine Learning'],
  },
  {
    title: 'Login Authentication System',
    description: 'A secure login authentication system covering session handling and credential validation.',
    link: 'https://github.com/HrithikAcharya/HrithikAcharya.devtern',
    tags: ['Web'],
  },
  {
    title: 'Weather App',
    description: 'A React weather app showing live conditions for cities around the world.',
    link: 'https://github.com/HrithikAcharya/ReactWeatherApp',
    tags: ['Web'],
  },
  {
    title: 'Spotify (Clone)',
    description: "A front-end reproduction of Spotify's interface and interaction patterns.",
    link: 'https://github.com/HrithikAcharya/Spotify_Clone',
    tags: ['Web'],
  },
  {
    title: 'Tribute to Doctors',
    description: 'Article-style web pages honoring doctors who died during the second wave of COVID-19.',
    link: 'https://github.com/HrithikAcharya/HrithikAcharya.TIE',
    tags: ['Web'],
  },
  {
    title: 'Portfolio Website Using Nuxt.js',
    description: 'An earlier personal portfolio built with Nuxt.js.',
    link: 'https://github.com/HrithikAcharya/PortfolioWebsiteUsingNuxtJS',
    tags: ['Web'],
  },
  {
    title: 'Typing Test Application',
    description: 'A Python/Tkinter typing test with real-time word display, scoring, and a countdown timer.',
    link: 'https://github.com/HrithikAcharya/TypingTestUsingPython.devtern',
    tags: ['Python'],
  },
  {
    title: 'Hand Gesture Brightness Control',
    description: 'A computer-vision system using OpenCV and MediaPipe to adjust screen brightness via hand gestures.',
    link: 'https://github.com/HrithikAcharya/HandGestureBrightnessControlUsingPython.devtern',
    tags: ['Python', 'Machine Learning'],
  },
  {
    title: 'Message Encryption System',
    description:
      'A secure message encryption tool converting plaintext to ciphertext with unique decryption keys, built with Python cryptography (Hazmat) primitives.',
    link: 'https://github.com/HrithikAcharya/MessageEncryptionUsingPython.devtern',
    tags: ['Python', 'Security'],
  },
  {
    title: 'Chatbot Using Python',
    description: 'An autonomous chatbot built with NLTK-based natural language processing and a Streamlit interface.',
    link: 'https://github.com/HrithikAcharya/ChatbotUsingPython.devtern',
    tags: ['Python', 'Machine Learning'],
  },
  {
    title: 'Educational App Prototype on Ethical AI Usage',
    description:
      'A Figma prototype promoting ethical AI use among high-school students, with personalized learning paths, AI-content detection, and scheduling — shaped by iterative user testing.',
    link: 'https://www.figma.com/proto/2MHFgDiHlEeTHALB0s645m/High-Fidelity-Prototype?node-id=115-3229&p=f&t=JN1YPKLWrHehzFrK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=115%3A3229',
    tags: ['Design'],
  },
];

// Headshot: drop your photo at public/headshot.jpg (portrait crop, ~880x1100 or
// larger works best). If the file is missing the hero falls back to a monogram.

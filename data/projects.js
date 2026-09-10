// Content for the Projects and Publications pages.
// note: optional label by the title, either a plain tag or a { label, href } link.

export const projects = [
  {
    title: 'Climbing Coach',
    href: 'https://github.com/ishizzz/Climbing-Coach',
    note: { label: 'Live', href: 'https://climbing-coach-xhn7.onrender.com' },
    description:
      'A multi-agent coaching assistant for climbers. A planner reads each question and routes it to the right specialist — injury, training, recovery, or nutrition — and a coach agent pulls those answers into a single, safety-first plan. Built with LangGraph and Claude behind a FastAPI backend, containerized with Docker, and deployed on Render with a Neon Postgres store. A four-part eval suite runs in CI and has to pass before anything ships.',
  },
  {
    title: 'Quantum Tree Generator for 0-1 Knapsack',
    href: 'https://github.com/ishizzz/quantum-knapsack-qtg',
    description:
      "A reproduction of the Quantum Tree Generator algorithm for the 0-1 knapsack problem (Wilkening et al., arXiv:2310.06623). I got the original C++/Python simulator building and running, then wrote my own Qiskit experiments on the amplitude-amplification step — tracking how success probability shifts with the number of Grover iterations, problem size, and a small depolarizing/T1-T2 noise model.",
  },
  {
    title: 'Real-Time Traffic Analytics',
    href: 'https://github.com/somya1212/realtime-traffic-pyspark',
    note: { label: 'Team project' },
    description:
      'A streaming pipeline over LA freeway sensor data from the PEMS system. Kafka feeds a PySpark Structured Streaming job that computes rolling traffic aggregates over windowed data, with scripts to benchmark throughput and latency as the stream scales. A four-person course project (CS532) that I contributed to.',
  },
  {
    title: 'Emotionally Intelligent Chatbot',
    href: 'https://github.com/ishizzz/EI-Assistant',
    description:
      'Built a memory-augmented conversational AI that combines Cache- and Retrieval-Augmented Generation (CAG + RAG) to maintain context and respond with emotional intelligence. It fine-tunes lightweight LLMs (GPT-4o-mini, LLaMA 3.2 1B) and uses ChromaDB for fast, personalized memory retrieval, ensuring relevant and empathetic user interactions.',
  },
  {
    title: 'OutBox',
    href: 'https://github.com/ishizzz/OutBox',
    description:
      'A job-outreach tool that drafts personalized cold emails from your resume with GPT-4o, then fact-checks every claim in the draft against that resume before anything gets sent, so nothing embellished slips through. Handles bulk CSV import, review-and-edit, and pipeline tracking from queued through sent to replied.',
  },
  {
    title: 'Centralized Quantum Network for Multipartite Entanglement Distribution',
    href: 'https://github.com/sagnikpal2004/690qc-project',
    description:
      'A Julia simulation of a star-topology quantum network where a central node generates and distributes GHZ states to several end nodes, with realistic noise (Werner states, dephasing) and probabilistic Bell-state-measurement failures. Over a million trials, it measures how link distance and node count affect fidelity, latency, and success probability — longer distances and more participants sharply raise latency and cut both fidelity and success.',
  },
  {
    title: 'UMass Hangout',
    href: 'https://github.com/hvgh88/chat-app/tree/main',
    description:
      'A student collaboration platform built with ReactJS, Spring Boot, MySQL, Elasticsearch, and Docker to make group creation, event scheduling, and activity management easier. Includes authentication, profile management, Elasticsearch-powered group discovery, and calendar-invite integration.',
  },
];

export const publications = [
  {
    title: 'Design and Development of an Efficient Risk Prediction Model for Cervical Cancer',
    href: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10185919',
    venue: 'IEEE',
    year: '2023',
    description:
      'A Gradient Boosting model that predicts an individual’s risk of cervical cancer from lifestyle, clinical, and demographic factors (age, sexual history, HPV status, smoking). After preprocessing — handling missing values and building a combined cancer-status target from Dx:Cancer and Dx:CIN — features were ranked with XGBoost, and SMOTE oversampling plus stratified cross-validation addressed class imbalance, reaching 98.9% accuracy.',
  },
  {
    title: 'DistilBERT-BiLSTM for Multi-Category Web Content Classification',
    href: 'https://ieeexplore.ieee.org/abstract/document/10425205',
    venue: 'IEEE',
    year: '2024',
    description:
      'A hybrid model pairing DistilBERT’s contextual embeddings with a bidirectional LSTM to sort web pages into up to ten categories (Science & Technology, NSFW, Entertainment, News, Fitness, and more). Combining transformer feature extraction with sequential modeling gives precise identification across text, audio, video, and image content, improving web filtering for all age groups.',
  },
  {
    title: 'Enhanced Credit Card Fraud Detection with Tuned Isolation Forest Ensemble',
    href: 'https://www.mecs-press.org/ijeme/ijeme-v15-n1/v15n1-5.html',
    venue: 'MECS Press',
    year: '2025',
    description:
      'An ensemble of K-Nearest Neighbors, Random Forest, Logistic Regression, and an Isolation Forest, with the Isolation Forest’s hyperparameters tuned automatically via GridSearchCV, for real-time credit card fraud detection. Comparing the individual models against the tuned ensemble shows that combining classifiers and fine-tuning the Isolation Forest meaningfully improves accuracy and adaptability across different transaction datasets.',
  },
];

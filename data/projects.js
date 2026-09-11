// Content for the Projects and Publications pages.
// note: optional label by the title, either a plain tag or a { label, href } link.

export const projects = [
  {
    title: 'Climbing Coach',
    href: 'https://github.com/ishizzz/Climbing-Coach',
    note: { label: 'Live', href: 'https://climbing-coach-xhn7.onrender.com' },
    description:
      'A coaching assistant for climbers built from a few specialist agents. A planner figures out whether a question is about injury, training, recovery, or nutrition, hands it to the right specialist, and a coach agent turns their answers into one plan that leans cautious. It runs on LangGraph and Claude with a FastAPI backend, Docker, and Postgres on Render, and there is an eval suite in CI that has to pass before I ship anything.',
  },
  {
    title: 'Quantum Tree Generator for 0-1 Knapsack',
    href: 'https://github.com/ishizzz/quantum-knapsack-qtg',
    description:
      'My reproduction of the Quantum Tree Generator algorithm for the 0-1 knapsack problem (Wilkening et al., arXiv:2310.06623). I got the original C++/Python simulator building and running, then wrote my own Qiskit experiments on the amplitude-amplification step to see how the success probability moves with the number of Grover iterations, the problem size, and a small noise model.',
  },
  {
    title: 'Real-Time Traffic Analytics',
    href: 'https://github.com/somya1212/realtime-traffic-pyspark',
    note: { label: 'Team project' },
    description:
      'A streaming pipeline over LA freeway sensor data (PEMS). Kafka feeds a PySpark Structured Streaming job that computes rolling traffic stats over time windows, plus a few scripts to measure throughput and latency as the stream grows. A four-person course project for CS532 that I worked on.',
  },
  {
    title: 'Emotionally Intelligent Chatbot',
    href: 'https://github.com/ishizzz/EI-Assistant',
    description:
      'A chatbot that tries to hold context and respond with some emotional awareness. It mixes cached and retrieved memory (CAG + RAG) so it remembers earlier parts of a conversation, uses ChromaDB to pull up relevant history quickly, and runs on small fine-tuned models like GPT-4o-mini and LLaMA 3.2 1B.',
  },
  {
    title: 'OutBox',
    href: 'https://github.com/ishizzz/OutBox',
    description:
      'A tool for cold job outreach. It drafts a tailored email from your resume with GPT-4o, then checks every claim in the draft back against the resume so nothing gets exaggerated before it goes out. It also handles bulk CSV import, a review step, and tracking from queued to sent to replied.',
  },
  {
    title: 'Centralized Quantum Network for Multipartite Entanglement Distribution',
    href: 'https://github.com/sagnikpal2004/690qc-project',
    description:
      'A Julia simulation of a star-shaped quantum network, where a central node makes GHZ states and shares them out to several end nodes. It models real noise (Werner states, dephasing) and Bell-measurement failures, and over a million trials it looks at how link distance and the number of nodes affect fidelity, latency, and success rate. Longer links and more nodes push latency up and pull the other two down.',
  },
  {
    title: 'UMass Hangout',
    href: 'https://github.com/hvgh88/chat-app/tree/main',
    description:
      'A platform for students to find each other and plan things together, built with React, Spring Boot, MySQL, Elasticsearch, and Docker. You can create groups, schedule events, search for groups (backed by Elasticsearch), manage a profile, and send calendar invites.',
  },
];

export const publications = [
  {
    title: 'Design and Development of an Efficient Risk Prediction Model for Cervical Cancer',
    href: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10185919',
    venue: 'IEEE',
    year: '2023',
    description:
      'A gradient boosting model that estimates someone’s risk of cervical cancer from lifestyle, clinical, and demographic factors like age, HPV status, and smoking. I cleaned the data, built a single cancer-status label from the Dx:Cancer and Dx:CIN columns, ranked features with XGBoost, and used SMOTE with stratified cross-validation to handle the class imbalance. It reached 98.9% accuracy.',
  },
  {
    title: 'DistilBERT-BiLSTM for Multi-Category Web Content Classification',
    href: 'https://ieeexplore.ieee.org/abstract/document/10425205',
    venue: 'IEEE',
    year: '2024',
    description:
      'A model that runs DistilBERT embeddings through a bidirectional LSTM to sort web pages into up to ten categories (Science & Technology, NSFW, Entertainment, News, Fitness, and so on). Pairing the transformer with the sequence model handled text, audio, video, and image content well, which is useful for web filtering across age groups.',
  },
  {
    title: 'Enhanced Credit Card Fraud Detection with Tuned Isolation Forest Ensemble',
    href: 'https://www.mecs-press.org/ijeme/ijeme-v15-n1/v15n1-5.html',
    venue: 'MECS Press',
    year: '2025',
    description:
      'A fraud-detection setup that combines K-Nearest Neighbors, Random Forest, Logistic Regression, and an Isolation Forest, with the Isolation Forest tuned through GridSearchCV. Comparing each model on its own against the tuned ensemble showed the ensemble was more accurate and held up better across different transaction datasets.',
  },
];

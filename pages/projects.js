import Link from 'next/link';

import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 text-justify dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container title="About – Ishita Chauhan">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        {/* <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1> */}

        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h2>

        <Talk
          title="Emotionally Intelligent Chatbot"
          link="https://github.com/ishizzz/EI-Assistant"
        >
          Built a memory-augmented conversational AI that combines Cache- and Retrieval-Augmented Generation (CAG + RAG) to maintain context and respond with emotional intelligence. It fine-tunes lightweight LLMs (GPT-4o-mini, LLaMA 3.2 1B) and uses ChromaDB for fast, personalized memory retrieval, ensuring relevant and empathetic user interactions.
        </Talk>
        <Talk
          title="Umass Hangout"
          link="https://github.com/hvgh88/chat-app/tree/main"
        >
          Developed a student collaboration platform using ReactJS, Spring Boot, MySQL, Elasticsearch, and Docker to streamline group creation, event scheduling, and activity management. Features include user authentication, profile management, real-time group discovery with Elasticsearch-powered search, and calendar invite integration.
        </Talk>
        <Talk
          title="Simulation of a Centralized Quantum Network for Multipartite Entanglement Distribution"
          link="https://github.com/sagnikpal2004/690qc-project"
        >
          rBuilt a Julia-based simulation modeling a star-topology quantum network in which a central node generates and distributes GHZ states to multiple end nodes, incorporating realistic noise effects (Werner states, dephasing) and probabilistic Bell state measurement failures. By running over one million trials, the project evaluates how link distance and the number of end nodes impact key metrics—fidelity, latency, and success probability—revealing that longer distances and more participants sharply increase latency and decrease both fidelity and success rates.
        </Talk>
        <Talk
          title="Design and Development of an Efficient Risk
          Prediction Model for Cervical Cancer (Published)"
          link="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10185919"
        >
          A Gradient Boosting–based model was developed to predict an individual’s risk of developing cervical cancer by incorporating a comprehensive set of lifestyle, clinical, and demographic factors (e.g., age, sexual history, HPV status, smoking). After preprocessing (including handling missing values and creating a combined “Cancer status” target variable from Dx:Cancer and Dx:CIN), feature importance was determined via XGBoost to select the most relevant predictors, and SMOTE oversampling plus stratified cross-validation were applied to address class imbalance and optimize performance—resulting in a final model accuracy of 98.9% .
        </Talk>
        <Talk
          title="DistilBERT-BiLSTM for Multi-Category Web Content Classification (Published)"
          link="https://ieeexplore.ieee.org/abstract/document/10425205"
        >
          A hybrid model combining DistilBERT’s contextual embeddings with a Bidirectional LSTM (BiLSTM) layer to classify web pages into up to ten categories (e.g., Science & Technology, NSFW, Entertainment, News, Fitness). By leveraging transformer-based feature extraction and sequential modeling, it achieves precise identification of diverse content types—including text, audio, video, and images—thereby enhancing web filtering effectiveness for all age groups.
        </Talk>
        <Talk
          title="Enhanced Credit Card Fraud Detection with Tuned Isolation Forest Ensemble"
          link="https://www.mecs-press.org/ijeme/ijeme-v15-n1/v15n1-5.html"
        >
          This study combines K-Nearest Neighbors, Random Forest, Logistic Regression, and an Isolation Forest (iForest) within an ensemble framework—automatically optimizing iForest hyperparameters via GridSearchCV—to detect credit card fraud in real time. By comparing individual models to the tuned ensemble, it demonstrates that integrating multiple classifiers and fine-tuning iForest significantly improves detection accuracy and adaptability across varying transaction datasets.
        </Talk>
        

      </div>
    </Container>
  );
}

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
    <Container title="Blogs">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        {/* <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1> */}

        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Blogs
        </h2>

        <Talk
          title="Quantum: A Threat to Encryption"
          link="https://medium.com/student-technical-community-vit-vellore/quantum-a-threat-to-encryption-ba24691519c1"
        >
          Quantum computers can break widely used public-key schemes like RSA and elliptic-curve cryptography by efficiently factoring large integers (Shor’s algorithm) and speed up brute-force attacks on symmetric ciphers (Grover’s algorithm). To counter this, the article highlights post-quantum cryptography (e.g., lattice-based schemes) and quantum key distribution as strategies for maintaining security in a future with powerful quantum machines.
        </Talk>
        <Talk
          title="The Quantum Gaming Journey"
          link="https://medium.com/ieee-women-in-engineering-vit/the-quantum-gaming-journey-36ba1d490370"
        >
        This article envisions a future where quantum computers revolutionize gaming by leveraging qubit properties like superposition and entanglement to create richer, more complex experiences. It explores how industry pioneers are already experimenting with quantum-driven game design, educational tools, and procedural content generation, suggesting that quantum hardware could redefine interactive entertainment.
        </Talk>
        
        

      </div>
    </Container>
  );
}

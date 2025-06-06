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
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-justify text-gray-600 dark:text-gray-400">
        <p>
          Hey there! I’m Ishita—a self-declared coding nerd by day and outdoor explorer by every spare minute I can steal. When I’m not knee-deep in Python scripts, TensorFlow models, or React components, you’ll usually find me chasing the golden hour with my camera in hand, trying to capture that perfect streak of light across a city skyline or a quiet forest trail. 
        </p>
        <p >
          Born with an insatiable curiosity, I’ve always been the type to ask “Why?” or “How?”—which is probably why I wound up in Computer Science at UMass Amherst, building everything from intelligent chatbots that remember your coffee order to slick full-stack apps that keep my friends organized for weekends out. But coding isn’t my only jam: I lace up for 5Ks whenever I can, conquer new cycling routes (the hill climbs around Amherst are my nemesis and best friend), and follow whichever hiking trail promises the coolest view. 
        </p>
        <p >
          When I’m home, you might catch me curled up with a steaming mug of chai and my laptop—typing out a blog post about the latest AI trick I learned, or sketching a quick story about that morning sunrise I caught on the quad. I believe tech and creativity are two sides of the same coin: one helps you solve problems, the other helps you share the solutions in a way that people actually care about. That’s why you’ll see both code snippets and photo galleries sprinkled throughout this site. 
        </p>
        <p >
          Whether I’m debugging a neural network or planning my next weekend adventure, I’m constantly seeking that sweet spot where curiosity, innovation, and a little bit of fun collide. So if you’re into AI, photography tips, or swapping trail-running routes, stick around—I guarantee there’s always something here to spark a smile or inspire your next passion project.
        </p>
        </div>
      </div>
    </Container>
  );
}

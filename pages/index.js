import Link from 'next/link';
import Container from '../components/Container';

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Ishita Chauhan
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-6">
          Master’s student in Computer Science at UMass Amherst, working in
          machine learning and AI.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          I mostly build things with LLMs, with a bit of quantum computing on the
          side, and I’ve published a few ML papers along the way. When I’m not at
          a screen I’m usually climbing, running, or out with a camera. Have a
          look around, or grab my resume below.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition"
            href="/resume.pdf"
            download="Ishita Chauhan - Resume.pdf"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
              />
            </svg>
            Resume
          </a>
          <Link href="/projects">
            <a className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              See my work
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
}

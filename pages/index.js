import Link from 'next/link';
import Container from '../components/Container';

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Ishita Chauhan
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          Master’s student in Computer Science at UMass Amherst<br />
          AI/ML enthusiast, photographer, writer, and outdoor adventurer.
        </h2>
      </div>
    </Container>
  );
}

import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About | Ishita Chauhan">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-justify text-gray-600 dark:text-gray-400">
          <p>
            I&apos;m Ishita. I do machine learning for a living, mostly multi-agent LLM
            systems with a little quantum computing on the side. But you probably want the
            part that isn&apos;t on my resume.
          </p>
          <p>
            I climb. It&apos;s the one thing that reliably gets me off a laptop. I&apos;ll
            spend twenty minutes failing the same move, walk away annoyed, and think about
            nothing else until I go back and finally stick it. I run too, mostly 5Ks and
            whatever loop around Amherst has the fewest hills. The hills and I have a
            complicated relationship.
          </p>
          <p>
            The rest of the time I&apos;ve usually got a camera on me or I&apos;m writing
            something down, whether that&apos;s a photo from a morning walk or a half-formed
            thought about something I just learned. If you&apos;re into any of it, whether
            that&apos;s AI, climbing beta, or arguing about running routes, we&apos;ll get
            along.
          </p>
        </div>
      </div>
    </Container>
  );
}

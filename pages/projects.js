import Container from '@/components/Container';
import { projects } from '@/data/projects';

function ExternalArrow() {
  return (
    <svg
      className="h-4 w-4 ml-1 shrink-0"
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
  );
}

function Project({ title, href, description, note }) {
  return (
    <div className="mb-8">
      <h3 className="font-medium text-lg mb-1">
        <a
          className="flex items-center text-gray-900 dark:text-gray-100"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {title}
          <ExternalArrow />
        </a>
      </h3>
      {note &&
        (note.href ? (
          <a
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={note.href}
          >
            {note.label} →
          </a>
        ) : (
          <span className="text-sm text-gray-500 dark:text-gray-400">{note.label}</span>
        ))}
      <p className="text-gray-600 text-justify dark:text-gray-400 mt-1">{description}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <Container title="Projects | Ishita Chauhan">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>

        {projects.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </div>
    </Container>
  );
}

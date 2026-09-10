import Container from '@/components/Container';
import { publications } from '@/data/projects';

function Publication({ title, href, venue, year, description }) {
  return (
    <div className="mb-10 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
      <div className="flex items-center flex-wrap gap-2 mb-1">
        {venue && (
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 rounded px-2 py-0.5">
            {venue}
          </span>
        )}
        {year && (
          <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
        )}
      </div>
      <h2 className="font-medium text-lg text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-justify dark:text-gray-400 mb-2">{description}</p>
      <a
        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        Read paper →
      </a>
    </div>
  );
}

export default function Publications() {
  return (
    <Container title="Publications | Ishita Chauhan">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Publications
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Peer-reviewed work in machine learning and applied AI.
        </p>

        {publications.map((p) => (
          <Publication key={p.title} {...p} />
        ))}
      </div>
    </Container>
  );
}

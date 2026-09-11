import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <a
        className="text-gray-900 dark:text-gray-100 font-medium hover:text-gray-600 dark:hover:text-gray-300 transition mb-8"
        href="mailto:ishita.chauhan2025@gmail.com"
      >
        Write to me →
      </a>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/ishizzz">
            GitHub
          </ExternalLink>
          
        </div>
        <div className="flex flex-col space-y-4">
        <ExternalLink href="https://www.linkedin.com/in/hey-i-am-ishita/">
            LinkedIn
          </ExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://medium.com/@ishitachauhxn">
            Medium
          </ExternalLink>
        </div>
        
      </div>
    </footer>
  );
}

import Head from 'next/head';
import Container from '@/components/Container';

const galleryImages = [
  // '/static/images/Image 4.JPG',
  '/static/images/Image 5.png',
  '/static/images/Image 3.jpg',
  '/static/images/Image 13.png',

  '/static/images/Image 11.JPG',
  '/static/images/Image 12.JPG',
  '/static/images/Image 1.JPG',
  '/static/images/Image 2.JPG',
  '/static/images/Image 5.JPG',
  
  '/static/images/Image 3.png',
  '/static/images/Image 8.png',
  '/static/images/Image 9.png',
  '/static/images/Image 14.png',
  
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Ishita Chauhan | Gallery</title>
        <meta name="description" content="Photo gallery of Ishita Chauhan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container title="Gallery – Ishita Chauhan">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Gallery</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Welcome to my personal photo gallery! Here, I share moments captured during my outdoor adventures, city explorations, and everyday scenes that inspire me. Feel free to browse through these images to get a glimpse of my world through the lens.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            
            {galleryImages.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="object-cover w-full h-48 sm:h-56 lg:h-64"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
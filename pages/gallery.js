import Head from 'next/head';
import Container from '@/components/Container';

const galleryImages = [
  'https://iamyajat.com/images/ishizz/Image1.JPG',
  'https://iamyajat.com/images/ishizz/Image2.JPG',
  'https://iamyajat.com/images/ishizz/Image3.JPG',
  'https://iamyajat.com/images/ishizz/Image4.png',
  'https://iamyajat.com/images/ishizz/Image5.JPG',
  'https://iamyajat.com/images/ishizz/Image6.png',
  'https://iamyajat.com/images/ishizz/Image7.PNG',
  'https://iamyajat.com/images/ishizz/Image8.png',
  'https://iamyajat.com/images/ishizz/Image9.JPG',
  'https://iamyajat.com/images/ishizz/Image10.JPG',
  'https://iamyajat.com/images/ishizz/Image11.png',
  'https://iamyajat.com/images/ishizz/Image12.png',
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Ishita Chauhan | Gallery</title>
        <meta name="description" content="Photo gallery of Ishita Chauhan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container title="Gallery | Ishita Chauhan">
        <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
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

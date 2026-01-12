import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mediaImages = [
  { src: '/images/prajavani.png', alt: 'Prajavani Coverage' },
  { src: '/images/prajavani2.png', alt: 'Prajavani Coverage 2' },
  { src: '/images/kannadapraba.png', alt: 'Kannada Prabha Coverage' },
  { src: '/images/vijaykarnataka.jpeg', alt: 'Vijay Karnataka Coverage' },
];

export default function ImagesPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-16 bg-section min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center primary-text">Media Coverages</h1>
          <p className="text-lg text-gray-700 text-center mb-12">
            Print media coverages and publications featuring our work
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-600">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

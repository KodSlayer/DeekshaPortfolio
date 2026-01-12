'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface WorkItem {
  image: string;
  imageAlt: string;
  date: string;
  title: string;
  description: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

interface WorkSliderProps {
  items: WorkItem[];
}

export default function WorkSlider({ items }: WorkSliderProps) {
  const settings = {
    centerMode: true,
    centerPadding: '15%',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '10%',
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '5%',
        },
      },
    ],
  };

  return (
    <div className="work-slider-container relative">
      <Slider {...settings} className="work-slider">
        {items.map((item, index) => (
          <div key={index} className="work-slide px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 md:h-96 bg-gray-200 relative">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className="text-sm gold-text mb-2">{item.date}</p>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 primary-text">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base">{item.description}</p>
                <div className="flex flex-wrap gap-4">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center font-medium primary-text text-sm"
                    >
                      {link.label}
                      <svg
                        className="ml-1 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

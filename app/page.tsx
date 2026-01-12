import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialIcons from '@/components/SocialIcons';
import WorkSlider from '@/components/WorkSlider';

const workItems = [
  {
    image: '/images/tiranga-project.jpg',
    imageAlt: 'Tiranga Project',
    date: 'Knowledgeum Academy • August 2024',
    title: '79.5-Foot Tiranga Project',
    description: 'The high-energy team of Knowledgeum Academy IB world school created 79.5-foot-long Tiranga in just 41 minutes, setting a new record. Beyond the impressive numbers, this project embodied the spirit of unity and national pride among students. I coordinated media coverage that captured not just the feat itself, but the collaborative journey behind it, resulting in features across multiple publications and a significant boost in the academy\'s profile.',
    links: [
      { label: 'View Project', href: 'https://www.knowledgeum.in/events/78th-independence-day-78-knowledgeumites-78-feet-long-tiranga', external: true },
      { label: 'Media Coverages', href: '/images' },
    ],
  },
  {
    image: '/images/hepatitis-campaign.jpg',
    imageAlt: 'Hepatitis Awareness Campaign',
    date: 'Knowledgeum Academy • September 2024',
    title: 'Hepatitis Awareness Campaign',
    description: 'Transformed a standard health screening initiative into a community education moment. By crafting compelling messaging around prevention and early detection, I secured coverage in local health sections and digital platforms. The campaign connected medical professionals with the community, positioning Knowledgeum Academy as an institution that cares about public health beyond its campus boundaries.',
    links: [
      { label: 'View Campaign', href: 'https://www.knowledgeum.in/events/beat-hepatitis-knowledgeum-academy-takes-action', external: true },
      { label: 'Media Coverages', href: '/images' },
    ],
  },
  {
    image: '/images/entreprenuer.jpg',
    imageAlt: 'Entrepreneurial Guest Speaker Series',
    date: 'Knowledgeum Academy • November 2024',
    title: 'Entrepreneurial Guest Speaker Series',
    description: 'Curated and managed a series of talks bringing industry leaders to inspire students. More than just event coordination, this involved identifying speakers whose journeys would resonate with students, crafting personalized pitches, and creating an intimate atmosphere despite the formal setting. The series has grown into a cornerstone of the academy\'s reputation for real-world education.',
    links: [
      { label: 'View Campaign', href: 'https://www.knowledgeum.in/events/shaping-responsible-digital-citizens-at-knowledgeum-academy', external: true },
    ],
  },
  {
    image: '/images/thread.jpg',
    imageAlt: 'Connect Within Activity',
    date: 'Knowledgeum Academy • September 2024',
    title: 'Connect Within: Visualizing Your Inner Catalyst Activity',
    description: 'This activity was designed to help students visualize connections between their emotions, skills and aspirations through an interactive yarn-mapping activity, making abstract self-discovery tangible and fostering personal growth through creative reflection.',
    links: [
      { label: 'Media Coverages', href: 'https://docs.google.com/document/d/1b5KkUfhhuBf3h6n2bmJcWgUPYGFtVmw0_yukuJhbpHg/edit?usp=sharing', external: true },
    ],
  },
  {
    image: '/images/gamebites.jpg',
    imageAlt: 'GameBites Cafe',
    date: 'Gamebitescafe • March 2024',
    title: 'Strategic Content Planning',
    description: 'Revitalized the social presence of this Tumakuru gaming hub through strategic content planning that spoke directly to the gaming community. By creating content calendars that aligned with gaming trends and local events, I increased engagement by 45% in just six months. My approach focused on building an authentic community rather than just growing numbers.',
    links: [
      { label: 'View Project', href: 'https://www.instagram.com/gamebitescafe/?hl=en', external: true },
    ],
  },
  {
    image: '/images/boroka.jpg',
    imageAlt: 'Boroka Event',
    date: 'Goa • December 2023',
    title: 'BOROKA Launch Campaign',
    description: 'Orchestrated a 20-day launch campaign across premium cafes in Goa, coordinating with 15+ venue partners. This wasn\'t just about logistics; it was about creating distinct experiences at each location while maintaining brand consistency. I developed relationships with venue owners that turned into ongoing partnerships, creating a sustainable presence for the brand beyond the initial launch.',
    links: [
      { label: 'View Project', href: 'https://www.instagram.com/boroka.co/?hl=en', external: true },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-section">
        {/* Background Decorative Elements */}
        <div className="shape-blob w-96 h-96 top-24 right-24 animate-pulse"></div>
        <div className="shape-blob w-64 h-64 bottom-24 left-24 animate-pulse delay-animation"></div>
        <div className="absolute inset-0 pattern-grid"></div>

        <div className="max-w-6xl mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Photo on Left */}
            <div className="md:w-5/12 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl transform -rotate-3 scale-105 opacity-20"></div>
                <Image
                  src="/images/Photoroom-20250212_002448.png"
                  alt="Deeksha"
                  width={500}
                  height={500}
                  className="relative rounded-2xl shadow-xl object-cover w-full aspect-square z-10 floating"
                  priority
                />
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full decorative-circle-light"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full decorative-circle-gold"></div>
              </div>
            </div>

            {/* Content on Right */}
            <div className="md:w-3/4 animate-fade-in">
              <h3 className="subheading mb-6 text-lg tracking-wider primary-text">
                PR & EVENTS EXECUTIVE
              </h3>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight gold-text">
                Deeksha Hemanth
              </h1>
              <p className="text-xl font-semibold mb-8 leading-relaxed">
                Passionate about people, stories and connections, <br /> where every pitch matters.
              </p>
              <div className="flex flex-wrap space-x-0 space-y-4 md:space-x-4 md:space-y-0">
                <Link
                  href="/contact"
                  className="primary-btn px-8 py-4 rounded-lg inline-block font-medium"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/experience"
                  className="secondary-btn px-6 py-4 rounded-lg transition-all inline-block font-medium"
                >
                  View Portfolio
                </Link>
                <a
                  href="/Deeksha_Resume.pdf"
                  download="Deeksha_Resume.pdf"
                  className="download-btn px-6 py-4 rounded-lg transition-all inline-flex items-center font-medium gap-2 ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download Resume</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4V16M12 16L7 11M12 16L17 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 20H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              {/* Social Media Icons */}
              <div className="mt-12">
                <p className="subheading text-sm mb-4 primary-text">CONNECT WITH ME</p>
                <SocialIcons className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-14 relative bg-section">
        <div className="absolute inset-0 diamond-pattern"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="section-title text-4xl font-bold mb-12 primary-text">About Me</h2>
          <div className="flex flex-justify-center gap-0">
            <div className="space-y-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m a storyteller at heart with an intuitive understanding of what makes people
                connect. My journey in public relations and communications began with a simple
                love for sharing stories that matter, evolving into a career where I craft
                narratives that build bridges between brands and their audiences.
              </p>
              <Link
                href="/about"
                className="primary-btn px-6 py-3 rounded-lg inline-flex items-center gap-2 mt-6"
              >
                Learn More About Me
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section with Slider */}
      <section className="py-4 bg-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center primary-text">Recent Works</h2>
          <div className="border-b-2 border-primary w-20 mx-auto mb-12"></div>
          <WorkSlider items={workItems} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-14 relative cta-section">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Let&apos;s Create Your Next PR Success Story
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg font-medium cta-button"
          >
            Get in Touch
          </Link>

          {/* Feature boxes */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-white">
              <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic PR</h3>
              <p className="opacity-80">
                Comprehensive PR strategies tailored to your brand&apos;s unique needs
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-white">
              <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 9l3 3-3 3M13 15h3M3 5h18v14H3V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
              <p className="opacity-80">
                Compelling storytelling that captivates your target audience
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-white">
              <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Management</h3>
              <p className="opacity-80">
                End-to-end event planning and execution for maximum impact
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorkSlider from '@/components/WorkSlider';

const experiences = [
  {
    icon: '🤝',
    title: 'PR & Events Executive',
    company: 'Jain Group Bengaluru | July 2024 - Present',
    points: [
      'Led PR strategy and event execution for Knowledgeum Academy, achieving 20% increase in media coverage',
      'Set a record with 79.5-foot-long Tiranga project completed in just 41 minutes',
      'Managed media relations for successful Hepatitis screening initiatives',
    ],
    link: { label: 'View Organization', href: 'https://knowledgeum.in/' },
  },
  {
    icon: '📱',
    title: 'Social Media Manager',
    company: 'Gamebitescafe | January 2024 - June 2024',
    points: [
      'Increased social media engagement by 45% through strategic content planning',
      'Managed end-to-end event planning and execution',
      'Created and implemented comprehensive social media calendar',
    ],
    link: { label: 'View Organization', href: 'https://www.instagram.com/gamebitescafe/' },
  },
  {
    icon: '📝',
    title: 'Previous Roles',
    company: 'Various Organizations | 2020-2023',
    points: [
      'Social Media Assistant and Artist Manager at Paper Plane (remote)',
      'Marketing and Operational Intern at BOROKA',
      'Freelance Content Writer and Video Editor at Hosakannada Website',
      'Stringer at Vijayakarnataka',
    ],
    note: 'These early roles helped shape my understanding of digital marketing, content creation, and media relations.',
  },
];

const workItems = [
  {
    image: '/images/vijaykarnataka.jpeg',
    imageAlt: 'Vijay Karnataka',
    date: 'Stringer @ Vijay karnataka and Bangalore Mirror',
    title: 'Conducted interviews with VK and BM Educational Excellence Awardees',
    description: 'As a stringer for Vijay Karnataka and Bangalore Mirror, I had the opportunity to interact with exceptional individuals who have made significant contributions to the field of education. I conducted in-depth interviews with few esteemed awardees of the VK and BM Educational Excellence Awards.',
    links: [
      { label: 'View Article', href: 'https://bangaloremirror.indiatimes.com/bangalore/others/vk-bm-education-excellence-awards-presented/articleshow/108050906.cms', external: true },
    ],
  },
  {
    image: '/images/tiranga-project.jpg',
    imageAlt: 'Tiranga Project',
    date: 'Knowledgeum Academy • August 2024',
    title: '79.5-Foot Tiranga Project',
    description: 'The high-energy team of Knowledgeum Academy IB world school created 79.5-foot-long Tiranga in just 41 minutes, setting a new record. I coordinated media coverage that captured not just the feat itself, but the collaborative journey behind it.',
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
    description: 'Transformed a standard health screening initiative into a community education moment. By crafting compelling messaging around prevention and early detection, I secured coverage in local health sections and digital platforms.',
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
    description: 'Curated and managed a series of talks bringing industry leaders to inspire students. The series has grown into a cornerstone of the academy\'s reputation for real-world education.',
    links: [
      { label: 'View Campaign', href: 'https://www.knowledgeum.in/events/shaping-responsible-digital-citizens-at-knowledgeum-academy', external: true },
    ],
  },
  {
    image: '/images/thread.jpg',
    imageAlt: 'Connect Within Activity',
    date: 'Knowledgeum Academy • September 2024',
    title: 'Connect Within: Visualizing Your Inner Catalyst Activity',
    description: 'This activity was designed to help students visualize connections between their emotions, skills and aspirations through an interactive yarn-mapping activity.',
    links: [
      { label: 'Media Coverages', href: 'https://docs.google.com/document/d/1b5KkUfhhuBf3h6n2bmJcWgUPYGFtVmw0_yukuJhbpHg/edit?usp=sharing', external: true },
    ],
  },
  {
    image: '/images/gamebites.jpg',
    imageAlt: 'GameBites Cafe',
    date: 'Gamebitescafe • March 2024',
    title: 'Strategic Content Planning',
    description: 'Revitalized the social presence of this Tumakuru gaming hub through strategic content planning. I increased engagement by 45% in just six months.',
    links: [
      { label: 'View Project', href: 'https://www.instagram.com/gamebitescafe/?hl=en', external: true },
    ],
  },
  {
    image: '/images/boroka.jpg',
    imageAlt: 'Boroka Event',
    date: 'Goa • December 2023',
    title: 'BOROKA Launch Campaign',
    description: 'Orchestrated a 20-day launch campaign across premium cafes in Goa, coordinating with 15+ venue partners.',
    links: [
      { label: 'View Project', href: 'https://www.instagram.com/boroka.co/?hl=en', external: true },
    ],
  },
  {
    image: '/images/hosakannada.jpeg',
    imageAlt: 'Hosakannada',
    date: 'Digital Storytelling',
    title: 'Hosakannada Website',
    description: 'Created bilingual content that bridged traditional Kannada literature with digital media audiences.',
    links: [
      { label: 'View Article', href: 'https://hosakannada.com/2024/12/31/bangalores-largest-international-art-exhibition/', external: true },
    ],
  },
];

const projects = [
  {
    tag: 'Journalism',
    title: 'Public Speaking Engagements',
    description: 'Sharing my story with the students of my own school was an incredible experience, and I\'m honored to have had the opportunity to inspire and motivate my juniors.',
    link: { label: 'Click Here', href: 'https://docs.google.com/document/d/1rJwOtPPqgHsZv2Gwr1RLveuYE9P9mszQ1Q6elZCLzgU/edit?usp=drivesdk' },
  },
  {
    tag: 'Journalism',
    title: 'News Anchor - TUTV',
    description: 'Covered campus events and created news reports for Tumakuru University TV. Developed interview skills while working with diverse subjects.',
    link: { label: 'Watch Now', href: 'https://www.youtube.com/watch?v=r1MDjMUdHwE' },
  },
  {
    tag: 'Interview',
    title: 'Editor Interview Series',
    description: 'In-depth interview with the editor of Tumkuru Varthe newspaper exploring the changing landscape of local journalism and media ethics.',
    link: { label: 'Watch Interview', href: 'https://www.youtube.com/watch?v=ntB_X-ZTUR8' },
  },
  {
    tag: 'Educational',
    title: 'Gyan Deepa Channel',
    description: 'Educational content on history, current affairs, and Kannada literature designed to make complex subjects accessible to a wide audience.',
    link: { label: 'View Channel', href: 'https://www.youtube.com/@gyan_deepa680' },
  },
];

const achievements = [
  {
    icon: '📰',
    title: 'Print Media Coverages',
    description: 'Enhanced brand visibility through strategic media placements in leading publications.',
    link: { label: 'View Coverages', href: '/images' },
  },
  {
    icon: '🏆',
    title: 'Tiranga Record',
    description: 'Set a new record by creating a 79.5-foot-long Tiranga in just 41 minutes, demonstrating exceptional event coordination skills.',
    link: { label: 'Learn More', href: 'https://knowledgeum.in/events/78th-independence-day-78-knowledgeumites-78-feet-long-tiranga' },
  },
  {
    icon: '🎥',
    title: 'Educational Content Creation',
    description: 'Developed the Gyan Deepa Channel to deliver educational content on history, current affairs, and Kannada literature.',
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="diagonal-box pt-36 pb-40 hero-section">
        <div className="max-w-6xl mx-auto px-4 text-center" style={{ paddingTop: '40px' }}>
          <h1 className="text-5xl font-bold mb-7 text-white">My Portfolio</h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-8">
            Showcasing my journey in PR, events management, and strategic storytelling through
            professional experiences, projects, and key achievements.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-14 bg-primary-lightest">
        <div className="max-w-4xl mx-auto px-2">
          <h2 className="section-title text-4xl font-bold mb-12 primary-text">
            Professional Experience
          </h2>

          <div className="space-y-9">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all card-border-top"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center items-start">
                    <div className="w-16 h-16 bg-primary-lightest rounded-full flex items-center justify-center">
                      <span className="text-7xl">{exp.icon}</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-semibold primary-text">{exp.title}</h3>
                    <p className="text-sm gold-text font-medium my-2">{exp.company}</p>
                    <ul className="space-y-2 text-gray-700 mt-4">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex}>• {point}</li>
                      ))}
                    </ul>
                    {exp.note && (
                      <p className="mt-3 text-sm text-gray-500">{exp.note}</p>
                    )}
                    {exp.link && (
                      <a
                        href={exp.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-sm primary-text font-medium"
                      >
                        {exp.link.label}
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section with Slider */}
      <section className="py-4 hero-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center primary-text">My Works</h2>
          <div className="border-b-2 border-primary w-20 mx-auto mb-12"></div>
          <WorkSlider items={workItems} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-14 bg-primary-lightest">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-4xl font-bold mb-1 primary-text">Notable Projects</h2>

          <div className="space-y-6 mt-8">
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full text-sm text-white bg-primary">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 primary-text">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium transition-colors primary-text"
                    >
                      {project.link.label}
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 diagonal-box">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Key Achievements</h2>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg text-center text-white backdrop-filter backdrop-blur-sm">
              <span className="text-6xl font-bold block mb-4 gold-text">20%</span>
              <h3 className="text-xl font-semibold mb-2">Media Coverage Growth</h3>
              <p className="opacity-80">
                Achieved 20% increase in media coverage through strategic PR campaigns.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-lg text-center text-white backdrop-filter backdrop-blur-sm">
              <span className="text-6xl font-bold block mb-4 gold-text">45%</span>
              <h3 className="text-xl font-semibold mb-2">Social Media Growth</h3>
              <p className="opacity-80">
                Increased social media engagement by 45% through strategic content planning.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-lg text-center text-white backdrop-filter backdrop-blur-sm">
              <span className="text-6xl font-bold block mb-4 gold-text">79.5</span>
              <h3 className="text-xl font-semibold mb-2">Feet Tiranga</h3>
              <p className="opacity-80">
                Set a new record by creating a 79.5-foot-long Tiranga in just 41 minutes.
              </p>
            </div>
          </div>

          {/* Highlighted Achievements */}
          <div className="bg-white rounded-lg p-8 shadow-lg hero-section">
            <h3 className="text-2xl font-semibold mb-6 primary-text">Notable Achievements</h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary-lightest rounded-full flex items-center justify-center">
                    <span className="text-xl">{achievement.icon}</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold primary-text">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                    {achievement.link && (
                      <a
                        href={achievement.link.href}
                        target={achievement.link.href.startsWith('/') ? undefined : '_blank'}
                        rel={achievement.link.href.startsWith('/') ? undefined : 'noopener noreferrer'}
                        className="text-sm inline-flex items-center mt-1 primary-text"
                      >
                        {achievement.link.label}
                        <svg
                          className="ml-1 w-4 h-4"
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
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-3 bg-section text-center">
        <div className="max-w-2xl mx-auto px-2">
          <h2 className="text-3xl font-bold mb-4 primary-text">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s create impactful PR strategies and compelling stories together.
          </p>
          <Link
            href="/contact"
            className="primary-btn px-8 py-4 rounded-lg inline-block font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const skills = [
  {
    icon: '📝',
    title: 'Content Creation',
    items: ['Strategic PR Planning', 'Creative Writing', 'Digital Storytelling'],
  },
  {
    icon: '📰',
    title: 'Communication',
    items: ['Media Relations', 'Public Speaking', 'Bilingual (English & Kannada)'],
  },
  {
    icon: '💡',
    title: 'Leadership',
    items: ['Event Management', 'Team Coordination', 'Project Management'],
  },
];

const education = [
  {
    degree: 'Bachelor of Arts in Mass Communication and Journalism',
    institution: 'Tumakuru University | 2020-2023',
  },
  {
    degree: 'Pre-University Course (PCMB)',
    institution: 'Sarvodaya PU College, Tumakuru | 2018-2020',
  },
  {
    degree: 'High School',
    institution: 'Maruthi Vidya Kendra(CBSE) | 2018',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* About Hero Section */}
      <section className="pt-28 pb-9 hero-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 primary-text">About Me</h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                I&apos;m a storyteller at heart with an intuitive understanding of what makes
                people connect. My journey in public relations and communications began with a
                simple love for sharing stories that matter, evolving into a career where I
                craft narratives that build bridges between brands and their audiences.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                With roots in journalism and a degree in Mass Communication, I&apos;ve developed
                a keen eye for what makes a story newsworthy. But more than that, I understand
                how to translate a brand&apos;s vision into stories that resonate with both media
                and the public.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                When I&apos;m not crafting press releases or coordinating events, you&apos;ll find
                me creating content for my YouTube channel, writing in both English and Kannada,
                or volunteering at literary festivals. I believe that authentic communication is
                what transforms good PR into great PR, and I bring that authenticity to every
                project I touch.
              </p>
            </div>
            <div className="animate-fade-in p-15">
              <div className="hero-image-wrapper">
                <div className="image-backdrop"></div>
                <div className="image-glow"></div>
                <div className="image-border"></div>
                <Image
                  src="/images/deeksha.jpg"
                  alt="Deeksha"
                  width={400}
                  height={400}
                  className="hero-image relative rounded-xl shadow-xl object-cover w-full aspect-square z-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 bg-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-12 primary-text">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-sm hover:shadow-md transition-all skill-card"
              >
                <div className="w-12 h-12 icon-bg-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 primary-text">{skill.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-12 primary-text">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all border-l-4 border-primary"
              >
                <h3 className="text-xl font-semibold primary-text">{edu.degree}</h3>
                <p className="gold-text font-medium">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

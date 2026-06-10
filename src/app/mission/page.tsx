import Footer01 from '@/components/footer-01';
import Header05 from '@/components/header-05';
import MissionVisionPage from '@/components/mission-vision-page';

const missionSections = [
  'Our mission is to develop and deliver high-performance engineering solutions, advanced technologies, and strategic industrial capabilities that enable our clients and partners to overcome complex operational challenges. Through a combination of innovation, technical expertise, and disciplined execution, we provide sustainable and effective solutions that enhance efficiency, security, and long-term performance.',
  'We are dedicated to supporting strategic sectors including defense, aerospace, advanced metallurgy, infrastructure development, water management, and energy systems. By leveraging modern technologies and engineering best practices, we create products and services that strengthen operational readiness, improve critical infrastructure resilience, and contribute to national and industrial development objectives.',
  'At the core of our mission lies a commitment to continuous improvement, responsible innovation, and uncompromising quality standards. We strive to cultivate a culture that values integrity, technical excellence, safety, and accountability, ensuring that every project and solution reflects the highest levels of professionalism and reliability.',
  'Through strong partnerships, customer-focused solutions, and a forward-looking approach to technology and industry, Burkut Global Holding seeks to generate sustainable growth while delivering measurable value to clients, shareholders, employees, and the communities in which we operate.',
];

export default function MissionPage() {
  return (
    <main className='min-h-screen bg-bg-white-0'>
      <Header05 />
      <MissionVisionPage
        eyebrow='Our Mission'
        title='Deliver engineering excellence for mission-critical industries.'
        intro='We build advanced technologies and strategic industrial capabilities that help partners solve complex operational challenges with confidence.'
        image='https://alignui.com/images/blocks/blog-4-image-1.jpg'
        imageAlt='Engineering team reviewing mission-critical industrial systems'
        sections={missionSections}
      />
      <Footer01 />
    </main>
  );
}

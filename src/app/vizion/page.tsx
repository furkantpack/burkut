import Footer01 from '@/components/footer-01';
import Header05 from '@/components/header-05';
import MissionVisionPage from '@/components/mission-vision-page';

const visionSections = [
  'At Burkut Global Holding, our vision is to become a globally recognized engineering and technology group that shapes the future of strategic industries through innovation, technical excellence, and sustainable development. We aspire to establish new benchmarks in defense, advanced materials, infrastructure, energy, and industrial technologies by delivering solutions that address the evolving needs of governments, institutions, and commercial stakeholders worldwide.',
  'We envision a future where engineering is not merely a tool for solving technical challenges but a driving force for economic resilience, national security, and societal advancement. By integrating cutting-edge research, advanced manufacturing capabilities, and multidisciplinary expertise, we aim to contribute to the development of resilient infrastructures, secure environments, and technologically empowered industries across multiple regions.',
  'Our long-term objective is to build a diversified global ecosystem of innovation, bringing together strategic partners, industry leaders, research institutions, and emerging technologies under a unified vision. Through continuous investment in knowledge, talent, and technological capabilities, we seek to remain at the forefront of industrial transformation and technological progress.',
  'As we expand our international footprint, we are committed to becoming a trusted partner in the delivery of mission-critical solutions, setting global standards for quality, reliability, and operational excellence while creating lasting value for our stakeholders, communities, and future generations.',
];

export default function VizionPage() {
  return (
    <main className='min-h-screen bg-bg-white-0'>
      <Header05 />
      <MissionVisionPage
        eyebrow='Our Vision'
        title='Shape the future of strategic industries through technology.'
        intro='We aspire to build a global engineering ecosystem where innovation, technical excellence, and sustainable development create lasting value.'
        image='https://alignui.com/images/blocks/blog-4-image-3.jpg'
        imageAlt='Strategic technology team shaping future engineering systems'
        sections={visionSections}
      />
      <Footer01 />
    </main>
  );
}

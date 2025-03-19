import CvButton from '@/components/CvButton'
import VerticalTimeline from '@/components/temps'

const About = () => (
  <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-20 py-12 flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-28">
    {/* Timeline Section - Maintenant exactement 50% sur desktop */}
    <div className="w-full md:w-1/2">
      <VerticalTimeline />
    </div>

    {/* Content Section - Aussi 50% */}
    <div className="w-full md:w-2/3 flex flex-col justify-start items-start">
      <div className="w-full sm:w-[208.48px] mb-4">
        <span className="text-[#faad1b] text-xl sm:text-2xl md:text-[26px] font-bold font-['Heebo']">-</span>
        <span className="text-white text-xl sm:text-2xl md:text-[26px] font-bold font-['Heebo']"> About Me</span>
      </div>
      
      <div className="w-full mb-6">
        <span className="text-[#f8f8f8] text-2xl sm:text-3xl md:text-[40px] font-bold font-['Heebo']">Who is </span>
        <span className="text-[#faad1b] text-2xl sm:text-3xl md:text-[40px] font-bold font-['Heebo']">Riham Kaddour Bakir</span>
      </div>

      <p className="text-white font-heebo text-sm sm:text-base md:text-lg mb-6">
        I have been studying computer science since 2021. The goal of my
        portfolio is not just to showcase my skills, but also to highlight my
        motivation and enthusiasm for gaining professional experience. I 
        am currently looking for an apprenticeship contract, following a
        rhythm of one month in a company and one month at Sup Galilée 
        (USPN).
      </p>
      
          

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 md:gap-20 w-full">
        <CvButton />

        <div className="text-[#faad1b] text-3xl sm:text-4xl font-normal font-['Hurricane']">
          Riham Kaddour Bakir
        </div>
      </div>
      
      <a  href="/pdf/lettre_motivation_apprentissage.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start  justify-center h-full w-full my-16">
        <div className="w-1/2 flex justify-center">
          <button className="relative group overflow-hidden bg-white text-main-green px-8 py-4 rounded-md font-bold text-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-70 w-2/3">
            <span className="relative z-10">
              Motivation Letter
            </span>
            <div className="absolute inset-0 bg-main-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>
      </a>
    </div>
  </div>
);

export default About;
  
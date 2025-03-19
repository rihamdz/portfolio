import Image from 'next/image';
import CvButton from '@/components/CvButton';

const HomeSection = () => {
  return (
    <div className="w-auto">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Text Section */}
          <div className="text-left space-y-4 md:space-y-6 w-full md:w-[60%]  order-2 md:order-1 mt-8 md:mt-0">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold font-heebo text-text-color">
                I'm <span className="text-main-yellow">Riham Kaddour Bakir</span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold font-heebo text-text-color whitespace-nowrap">
                Computer Science Student
              </div>
              <div className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold font-heebo text-text-color whitespace-nowrap">
                Based in France
              </div>
            </div>

            <div className="text-sm sm:text-base md:text-lg text-gray-700 font-normal font-heebo max-w-[480px] ">
              <span className="block ">High school student with skills in frontend, Laravel, and Flutter, focused on creating high-quality, innovative solutions. Eager to make an impact in the tech world.</span>
            </div>

            {/* Download CV Button */}
            <div className="pt-2">
              <CvButton />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-[40%] h-[300px] sm:h-[350px] md:h-[392px] order-1 md:order-2">
            <div className="relative w-full max-w-[402px] h-full mx-auto scale-75 sm:scale-90 md:scale-100">
              {/* Background Circles Group */}
              <div className="absolute left-0 top-[86.29px] w-[365.95px] h-[255.08px]">
                <div className="absolute left-[23.43px] top-[18.93px] w-[219.03px] h-[219.03px] bg-main-bel rounded-full" />
                <div className="absolute left-0 top-[36.05px] w-[219.03px] h-[219.03px] bg-main-bel rounded-full" />
                <div className="absolute left-[137.91px] top-[18.93px] w-[219.03px] h-[219.03px] bg-main-bel rounded-full" />
                <div className="absolute left-0 top-[31.55px] w-[219.03px] h-[219.03px] bg-main-bel rounded-full" />
                <div className="absolute left-[146.92px] top-0 w-[219.03px] h-[219.03px] bg-main-bel rounded-full" />
              </div>

              {/* Main Image */}
              <Image
                className="absolute left-[65px] top-0 w-[267.43px] h-[392px]"
                src="/images/riham.png"
                alt="Riham Kaddour Bakir"
                width={267}
                height={392}
                priority
              />

              {/* White Circle Background */}
              <div className="absolute left-[311.87px] top-[105.22px] w-[90.13px] h-[90.13px] bg-[#DDF2F1] rounded-full" />
              
              {/* Green Circle with R */}
              <div className="absolute left-[315px] top-[108px] w-[85px] h-[85px] bg-main-green rounded-full">
                <div className="absolute left-[18px] top-[19px] w-12 h-[47px] bg-main-yellow rounded-full flex items-center justify-center">
                  <span className="text-main-green text-2xl font-bold font-aleo">R</span>
                </div>
              </div>

              {/* Laravel Expert Badge */}
              <div className="absolute left-[11px] top-[318px] w-[120px] sm:w-[130px] md:w-[140px] h-[32px] sm:h-[35px] md:h-[38px]">
                <div className="absolute w-full h-full bg-main-green rounded-[35px] flex items-center justify-center">
                  <span className="text-xs sm:text-sm md:text-base font-medium font-heebo">Laravel Expert</span>
                </div>
                <img
                  src="/images/greenI.png"
                  alt="Laravel icon"
                  className="absolute -top-1 sm:-top-1.5 md:-top-2 -left-1 sm:-left-1.5 md:-left-2 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3"
                />
              </div>

              {/* Web Developer Badge */}
              <div className="absolute left-[299px] top-[263px] w-[120px] sm:w-[130px] md:w-[140px] h-[32px] sm:h-[35px] md:h-[38px]">
                <div className="absolute w-full h-full bg-main-yellow rounded-[35px] flex items-center justify-center">
                  <span className="text-xs sm:text-sm md:text-base font-medium font-heebo">Web Developer</span>
                </div>
                <img
                  src="/images/yellowIi.png"
                  alt="Web dev icon"
                  className="absolute -top-1 sm:-top-1.5 md:-top-2 -left-1 sm:-left-1.5 md:-left-2 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

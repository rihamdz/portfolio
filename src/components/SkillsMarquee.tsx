import { useState, useEffect } from 'react';

const skills = [
  "Problem Solver",
  "Laravel & React Dev",
  "Tech Explorer",
  "Creative Mind",
  "Algorithm & Optimization",
  "Problem Solver",
  "Laravel & React Dev",
  "Tech Explorer",
  "Creative Mind",
  "Algorithm & Optimization",
  "Problem Solver",
  "Laravel & React Dev",
  "Tech Explorer",
  "Creative Mind",
  "Algorithm & Optimization",
];

const SkillsMarquee = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="relative h-[113px]">
        <div className="absolute w-[170vw] h-[70px] left-[-45vw] bg-main-green transform rotate-[-1.1deg] translate-y-[20px]" />
        <div className="absolute w-[170vw] h-[65px] left-[-45vw] my-6 bg-main-bel">
          <div className="relative h-full flex items-center">
            <div className="max-w-full mx-auto overflow-hidden">
              <div className={`flex whitespace-nowrap ${isClient ? 'animate-scroll' : ''}`}
                   style={{ animation: 'scrollText 12s linear infinite' }}
              >
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="mx-8 text-2xl font-bold text-text-color font-heebo"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMarquee;
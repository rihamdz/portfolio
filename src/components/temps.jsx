import React from 'react';

const VerticalTimeline = () => {
    const timelineData = [
        {
            title: "2021 - 2022",
            content: "Joined the Higher School of Computer Science (ESI SBA)Built strong foundations in algorithms, both static and dynamic, and gained expertise in software engineering principles.",
        },
        {
            title: "2021 - 2022",
            content: "First experience with Flutter, working in a team to develop a car location app as part of a multidisciplinary project. Also participated in my first hackathon, gaining valuable teamwork experience."
        },
        {
            title: "2022 - 2023",
            content: "Developed two web applications for managing social services, applying my knowledge of Laravel and React, while following the Agile methodology and using UML diagrams."
        },
        {
            title: "2023 - 2024",
            content: "Joined the Higher School of Computer Science in France (Sup Galilée - USPN) to further my studies and foucsing on Algorithm opmitisation and Complexity."
        },
    ];

    return (
        <div className="relative flex flex-col items-start w-full py-8">
            {/* Ligne verticale à gauche */}
            <div className="absolute left-4 top-[24px] h-[calc(100%-48px)] w-1 bg-gray-300" />

            {/* Stations */}
            {timelineData.map((item, index) => (
                <div key={index} 
                     className="relative flex items-start w-full mb-12"
                >
                    {/* Point/Station */}
                    <div className="absolute left-4 transform -translate-x-1/2 z-10">
                        <div className="w-6 h-6 bg-main-green rounded-full" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-main-yellow rounded-full" />
                    </div>

                    {/* Contenu - Toujours à droite */}
                    <div className="ml-12 w-[calc(100%-3rem)]">
                        <div className="bg-white/10 p-6 rounded-lg">
                            {/* Date */}
                            <h2 className="text-xl font-bold text-main-yellow mb-3">
                                {item.title}
                            </h2>
                            {/* Texte */}
                            <p className="text-white text-sm sm:text-base leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VerticalTimeline;
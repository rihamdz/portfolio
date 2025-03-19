export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  skills: string[];
  imageUrl: string;
  date: string;
  sourceCode?: string;
  liveDemo?: string;
}

export const projectsList: Project[] = [
  {
    id: 1,
    title: "Social Welfare Management - Web Site Solution",
    shortDescription: "A web platform for managing employees' social welfare services.",
    fullDescription: "This web solution efficiently manages employees' social welfare services by providing features such as registration, request tracking, and subsidy management. The application is developed with a robust architecture and a smooth user interface.",
    skills: ["Back-end", "Front-end", "UML Design"],
    imageUrl: "/images/p1.png",
    date: "February 2024",
    sourceCode: "https://github.com/saadiahmed-hash/Gestion_Oeuvres_Sociales_1cs",
  },
  {
    id: 2,
    title: "CureLink - Mobile App Solution for Pharmaceutical Operations",
    shortDescription: "A mobile app to optimize pharmaceutical operations.",
    fullDescription: "CureLink is a mobile solution that facilitates stock management, medication distribution, and communication between pharmacies and suppliers. With its intuitive interface and advanced features, it optimizes the pharmaceutical logistics process.",
    skills: ["Flutter", "teamWork", "Firebase"],
    imageUrl: "/images/p2.png",
    date: "November 2024",
    sourceCode: "https://github.com/rihamdz/kodiKoss",
  },
  {
    id: 3,
    title: "Optimized Pathfinding: Maximizing Gains and Analyzing Complexity",
    shortDescription: "An algorithm for optimal pathfinding while maximizing gains.",
    fullDescription: "This project aims to implement and analyze an algorithm that finds the shortest path in a matrix while maximizing gains. The study includes complexity analysis and comparisons with other optimization methods.",
    skills: [ "Optimization", "Complexity Analysis"],
    imageUrl: "/images/p3.png",
    date: "January 2025",
    sourceCode: "https://github.com/rihamdz/Exercice_Chasse_au_tresor",
  },
  {
    id: 4,
    title: "Huffman Coding Project",
    shortDescription: "Implementation of the Huffman coding algorithm for data compression.",
    fullDescription: "This project explores the Huffman algorithm used for data compression. It includes a full implementation of the algorithm in Python, as well as an interface to test file encoding and decoding.",
    skills: ["Algorithms", "Data Compression", "Python"],
    imageUrl: "/images/p4.png",
    date: "February 2025",
    sourceCode: "https://github.com/username/huffman-coding",
  },
];

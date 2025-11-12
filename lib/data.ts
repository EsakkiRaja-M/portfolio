import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import quizsyncImg from "@/public/quizsyncImg.jpg";
import printqueueImg from "@/public/printqueueImg.jpg";
import garmentImg from "@/public/garmentImg.png";
import disasterImg from "@/public/idmasImg.png";
import taxnotifyImg from "@/public/propertyImg.jpg";
import sentimentImg from "@/public/Sentiment.jpg";
import aidkriyaImg from "@/public/walker_midpoint.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Higher Secondary Education",
    location: "Tirunelveli, Tamil Nadu",
    description:
      "Completed my schooling at Pushpalata Matric Higher Secondary School with a strong academic foundation and active participation in sports and events.",
    icon: React.createElement(LuGraduationCap),
    date: "Up to 2022",
  },
  {
    title: "B.Tech in Information Technology",
    location: "Mepco Schlenk Engineering College, Sivakasi",
    description:
      "Currently pursuing a Bachelor's degree in Information Technology (2022–2026). Developed multiple academic and research projects while maintaining a CGPA of 7.33 up to the 6th semester. Actively involved in software development, cybersecurity exploration, and collegiate hockey.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
] as const;


export const projectsData = [
  {
    title: "QuizSync – Multiplayer Quiz Game",
    description:
      "Developed a real-time multiplayer quiz platform using multithreaded socket communication. The Swing-based GUI supports live play, scoring, and image-based questions.",
    tags: ["Java", "MySQL", "Swing", "Socket Programming"],
    imageUrl: quizsyncImg,
  },
  {
    title: "Disaster Management & Alert System",
    description:
      "Created an emergency alert application with real-time status updates, automated email notifications, and resource tracking to assist in disaster response management.",
    tags: ["Java", "MySQL", "JDBC", "SMTP"],
    imageUrl: disasterImg,
  },
  {
    title: "Garment Inventory System",
    description:
      "Built a secure desktop system to manage vendors, products, and orders with role-based authentication and Oracle database integration.",
    tags: ["Java", "Swing", "Oracle DB", "JDBC", "NetBeans"],
    imageUrl: garmentImg,
  },
  {
    title: "Print Queue Management System",
    description:
      "Implemented an efficient print job management system with a backend in C and a Streamlit-based Python GUI to prioritize tasks dynamically.",
    tags: ["C", "Python", "Streamlit", "GCC"],
    imageUrl: printqueueImg,
  },
  {
    title: "Property Tax Notification System",
    description:
      "Developed an automation tool to send tax reminders, calculate property tax dues, and visualize compliance data through dashboards.",
    tags: ["Java", "JUnit", "MySQL", "SMTP"],
    imageUrl: taxnotifyImg,
  },
  {
    title: "Deep Learning-Based Sentiment Analysis",
    description:
      "Designed a privacy-preserving sentiment analysis model for Amazon product reviews using deep learning to enhance review accuracy and data security.",
    tags: ["Python", "Deep Learning", "NLP", "Pandas", "TensorFlow"],
    imageUrl: sentimentImg,
  },
  {
    title: "WalkFusion – Aidothon 4.0",
    description:
      "Developed an Android application that connects walkers and users . Includes Firebase authentication, real-time walk tracking, SOS alerts.",
    tags: ["Android Studio", "Java", "Firebase", "Firestore", "RecyclerView"],
    imageUrl: aidkriyaImg,
  },
] as const;


export const skillsData = [
  // Core Programming Languages
  "Java",
  "C",
  "Python",

  // Web Technologies
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Streamlit",

  // Databases
  "MySQL",
  "MongoDB",
  "Oracle DB",

  // Tools & Platforms
  "Git",
  "GitHub",
  "Postman",
  "NetBeans",
  "Android Studio",
  "Angular",
 

  // Concepts & Interests
  "System Administration",
  "Cybersecurity Fundamentals",
  "Machine Learning ",
] as const;

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quizsyncImg from "@/public/quizsyncImg.jpg";
import printqueueImg from "@/public/printqueueImg.jpg";
import garmentImg from "@/public/garmentImg.png";
import idmasImg from "@/public/idmasImg.png";
import propertyImg from "@/public/propertyImg.jpg";

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
  title: "B.Tech in Information Technology",
  location: "Mepco Schlenk Engineering College, Sivakasi",
  description:
    "Currently pursuing my Bachelor's degree in Information Technology. I have maintained a CGPA of 7.35 up to the 5th semester. Passionate about cybersecurity, full-stack development, and real-world projects.",
  icon: React.createElement(LuGraduationCap),
  date: "2022 - present",
}
// ,
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   }
  ,{
  title: "Aspiring Cybersecurity Professional  ",
  location: "Open to Remote/On-site Internships or Roles",
  description:
    "Actively learning ethical hacking and security practices. Building a strong portfolio and aiming for a role in cybersecurity or full-stack development.",
  icon: React.createElement(CgWorkAlt),
  date: "2025 - Present",
},
] as const;

export const projectsData = [
   {
    title: "QuizSync – Multiplayer Quiz Game",
    description:
      "Real-time multiplayer quiz game platform where users can join quiz rooms, answer questions, and see live scoreboards. Built using WebSockets for real-time communication.",
    tags: ["JavaScript", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
    imageUrl: quizsyncImg,
    githubUrl: "https://github.com/EsakkiRaja-M/QuizSync-Multiplayer-Quiz-Game-Platform",
  },
  {
    title: "Print Queue Management System",
    description:
      "C-based print queue system enhanced with a Python Streamlit GUI. Prioritizes print jobs based on file size and urgency in academic labs.",
    tags: ["C", "Python", "Streamlit", "Data Structures"],
    imageUrl: printqueueImg,
    githubUrl: "https://github.com/EsakkiRaja-M/Efficient-Print-Queue-Management-System-with-Prioritization-and-Streamlit-GUI",
  },
  {
    title: "Garment Management System",
    description:
      "A centralized system for managing employee data, vendor relationships, and order records in garment production.",
    tags: ["Java", "MySQL", "JSP", "Servlets", "JDBC"],
    imageUrl: garmentImg,
    githubUrl: "https://github.com/EsakkiRaja-M/Garment-Management-System",
  },
  {
    title: "Integrated Disaster Management & Alert System (IDMAS)",
    description:
      "An integrated system for disaster alerting and emergency contact during crises. Includes location tracking and SMS alerts.",
    tags: ["Java", "MySQL","SMS Gateway","SMTP Email"],
    imageUrl: idmasImg,
    githubUrl: "https://github.com/EsakkiRaja-M/Integrated-Disaster-Management-and-Alert-System-IDMAS-",
  },
  {
    title: "Property Tax Awareness & Notification System",
    description:
      "Web-based system for sending reminders about property tax deadlines and educating citizens on local tax policies.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    imageUrl: propertyImg,
    githubUrl: "https://github.com/EsakkiRaja-M/Property-Tax-Awareness-and-Notification-System",
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git & GitHub",
  "Tailwind CSS",
  "Streamlit",
  "JSP",
  "Servlets",
  "Socket.IO",
  "Firebase",
  "Linux",
  "Bash",
  "Cybersecurity Basics",
] as const;


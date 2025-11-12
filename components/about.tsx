"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
  <p className="mb-3">
  I am <span className="font-medium">Esakki Raja</span>, a final-year 
  <span className="font-medium"> B.Tech Information Technology</span> student at 
  Mepco Schlenk Engineering College, Sivakasi. With a strong foundation in 
  software development and system design, I am passionate about building 
  reliable, scalable, and performance-oriented applications. My core strength 
  lies in <span className="font-medium">Java programming</span>, and I enjoy 
  designing end-to-end solutions that combine clean logic, usability, and 
  security.
</p>

<p className="mb-3">
  Throughout my academic journey, I have developed a range of impactful projects 
  across multiple domains — including web applications, desktop tools, and 
  hybrid systems. These works span technologies such as 
  <span className="font-medium">Java, C, Python, HTML, CSS, JavaScript, MySQL, and Android Studio,.</span>. 
  Among these, one project focused on an 
  <span className="font-medium"> Enhanced Deep Learning–Based Sentiment Analysis</span> for Amazon product reviews, emphasizing 
  <span className="font-medium"> privacy-preserving sentiment analysis</span> using natural language processing techniques.
</p>

<p className="mb-3">
  Beyond software development, I am deeply interested in the 
  <span className="font-medium"> cybersecurity and system administration </span> 
  domains. I enjoy understanding how systems operate, managing networks, 
  troubleshooting technical issues, and exploring secure design principles — 
  skills that align with my goal of becoming a well-rounded software professional 
  with a focus on system reliability and data security.
</p>

<p className="mb-3">
  Outside the world of technology, I am an enthusiastic 
  <span className="font-medium"> field hockey player</span>. I proudly represented 
  the <span className="font-medium">Virudhunagar District</span> in the 
  <span className="font-medium">Tamil Nadu Chief Minister’s Trophy – State-Level Field Hockey Championship</span> organized by the Sports Development Authority of Tamil Nadu (SDAT) in October 2024, 
  and also secured <span className="font-medium">first place</span> in the 
  <span className="font-medium"> Anna University Zonal Tournaments</span>. 
  Sports have taught me discipline, focus, and teamwork — qualities I bring to 
  every project and professional challenge I take on.
</p>

<p>
  I am currently seeking a <span className="font-medium"> full-time opportunity</span> as a Software Developer or Software Engineer, where I can contribute my 
  technical expertise, strengthen my cybersecurity knowledge, and create 
  meaningful software solutions that deliver real-world impact.
</p>

 
    </motion.section>
  );
}

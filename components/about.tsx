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
  I’m currently pursuing my{" "}
  <span className="font-medium">B.Tech in Information Technology</span> and have developed a strong interest in{" "}
  <span className="font-medium">cybersecurity and ethical hacking</span>. I’ve built several academic and personal projects — including{" "}
  <span className="italic">a print queue management system and a deep learning-based sentiment analyzer</span>.{" "}
  <span className="italic">What I love most about technology</span> is its power to solve real-world problems. My core stack includes{" "}
  <span className="font-medium">
    React, Next.js, Tailwind CSS, Python, and Linux
  </span>
  . I’m also exploring tools and topics related to ethical hacking and system-level programming. I'm currently seeking{" "}
  <span className="font-medium">internships or entry-level roles</span> in web development or cybersecurity.
</p>

<p>
  <span className="italic">When I’m not coding</span>, you’ll often find me on the hockey field. I’ve represented my district and college in{" "}
  <span className="font-medium">state-level hockey tournaments</span>. I also enjoy exploring{" "}
  <span className="font-medium">tech hacks, command-line tools, and open-source projects</span>.{" "}
  Right now, I'm diving deeper into{" "}
  <span className="font-medium">Linux internals and ethical hacking frameworks</span>.
</p>

    </motion.section>
  );
}

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";
import design from "../public/design.png";
import dsa from "../public/DS.png";

import deved from "../public/laptop-front.png";

import web from "../public/webdev.png";
import GlobeIcon from "./components/GlobeIcon";

import mail from "../public/gmail.png";

import TypingText from "./components/TypingText";
import { motion } from "framer-motion";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobexd,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { SiNodedotjs, SiExpress, SiNextdotjs } from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";

export default function Home() {
  const iconSlugs = [
    "html5",
    "css3",
    "javascript",
    "node-dot-js",
    "express",
    "mongodb",
    "react",
    "tailwindcss",
    "nextjs",
    "adobephotoshop",
    "figma",
    "blender",
    "vite",
    "git",
    "adobexd",
    "typescript",
    "linux",
    "python",
    "java",
  ];

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  const [darkMode, setDarkMode] = useState(false);

  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  const date = new Date();
  const hours = date.getHours();
  let Greet;

  if (hours < 12) {
    Greet = "Morning! Have a jovial and an errorless day ahead.";
  } else if (hours < 16) {
    Greet = "Hey, Good Afternoon. How's the tech world treating you today?";
  } else {
    Greet =
      "Warm Evening wishes to you!  I hope you had a successful day of troubleshooting.";
  }

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Rohit Kartik</title>
          <meta
            name="description"
            content="Rohit Kartik -  Portfolio Website"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" sizes="180x180" href="/favicon-32x32.png" />
          <link rel="icon" sizes="180x180" href="/favicon-16x16.png" />
        </Head>
        <main className=" bg-white text-slate-950  md:px-20 lg:px-20 dark:bg-gray-900 selection:bg-pink-400 ">
          <section className="">
            <nav className="p-3 py-6 mb-11 flex flex-col lg:flex-row justify-between items-center lg:items-start">
              <TypingText
                className=" text-3xl  text-teal-600 font-burtons font-medium md:text-3xl dark:text-cyan-400"
                text="Rohit Kartik"
              />
              <ul className="flex items-center space-x-4 lg:space-x-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    className="sr-only peer"
                    value=""
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleToggle}
                  />
                  <div
                    className={`w-12 h-7 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden
            before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️']
            before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all
            before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400
            peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d]
            after:rounded-full after:top-[2px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all
            after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0
            lg:w-20 lg:h-10 lg:before:w-8 lg:before:h-8 lg:after:w-8 lg:after:h-8
            sm:w-10 sm:h-5 sm:before:w-3 sm:before:h-3 sm:after:w-3 sm:after:h-3
        `}
                  ></div>
                </label>

                <li>
                  <a
                    href="https://drive.google.com/file/d/1BvQbuwIjRrXLkSVhBiYUEFXVVrP4a4Gl/view?usp=drive_link"
                    className="lg:w-[120px] font-burtons w-[90px] bg-teal-600 dark:bg-cyan-400 h-[50px] mx-2 lg:mx-8 my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#3babe3] before:to-[rgb(39,227,241)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
                <li className="text-0.5rem">
                  <a
                    href="https://form.typeform.com/to/pXJfDEE5"
                    className="lg:w-[150px] font-burtons w-[100px] bg-teal-600 dark:bg-cyan-400 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r  before:from-[#3babe3] before:to-[rgb(39,227,241)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                    target="_blank"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </nav>

            {/* <div className="text-center ">
              <h3 className="greet text-xl py-1 text-teal-600 font-medium md:text-2xl dark:text-cyan-400">
                {Greet}
              </h3>
            </div> */}

            <div className="text-center p-1">
              <h3 className="text-xl py-2 text-teal-600 font-burtons font-medium md:text-2xl dark:text-cyan-400">
                Software Developer Intern at{" "}
                <span className=" text-orange-600">Orangewood Labs </span>
              </h3>
            </div>

            <div className="p-3 lg:text-5xl flex justify-center gap-16 py-3 mb-6 text-gray-600 text-3xl  ">
              <a
                href="https://www.linkedin.com/in/rohit-kumar-760b0b1b6/"
                target="_blank"
                className=" bg-teal-200 dark:bg-cyan-400  p-5 rounded-lg shadow-md border border-transparent transition-transform duration-500 hover:shadow-inner hover:translate-y-1 hover:border hover:border-gray-200 hover:border-opacity-25 hover:-rotate-x-1 hover:rotate-y-1  "
              >
                {darkMode ? <FiLinkedin /> : <AiFillLinkedin />}
              </a>
              <a
                href="https://github.com/RKartik9"
                target="_blank"
                className=" bg-teal-200 dark:bg-cyan-400  p-5 rounded-lg shadow-md border border-transparent transition-transform duration-500 hover:shadow-inner hover:translate-y-1 hover:border hover:border-gray-200 hover:border-opacity-25 hover:-rotate-x-1 hover:rotate-y-1  "
              >
                {darkMode ? <FiGithub /> : <AiFillGithub />}
              </a>
              <a
                href="https://www.behance.net/rkartik9"
                target="_blank"
                className="bg-teal-200 dark:bg-cyan-400  p-5 rounded-lg shadow-md border border-transparent transition-transform duration-500 hover:shadow-inner hover:translate-y-1 hover:border hover:border-gray-200 hover:border-opacity-25 hover:-rotate-x-1 hover:rotate-y-1 "
              >
                {darkMode ? <SlSocialBehance /> : <AiFillBehanceCircle />}
              </a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-87 mt-19 md:h-70 md:w-70">
              <Image src={deved} />
            </div>
          </section>

          {/* Second Section */}
          <section className="p-7 ">
            <div>
              <h3 className="text-center font-burtons text-xl py-2 text-teal-600 font-medium md:text-3xl dark:text-cyan-400">
                Skills
              </h3>
            </div>
            <div className="lg:flex gap-8 flex-1 ">
              <div className="flex-grow text-center shadow-xl p-10 rounded-xl my-5 dark:shadow-slate-600 hover:scale-110 duration-500 hover:shadow-2xl cursor-pointer">
                <Image
                  className="inline-flex"
                  src={web}
                  width={80}
                  height={80}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                  Web Developer
                </h3>
                <p className="py-2 dark:text-white">
                  Developing Full Stack Website using latest frameworks like
                  NextJs, ExpressJs, NodeJs
                </p>
                <h4 className="py-4 text-teal-600 dark:text-cyan-400">
                  Some Frameworks are
                </h4>
                <div className="flex justify-center gap-9 py-2">
                  <SiNodedotjs
                    size={40}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                  <SiExpress
                    size={40}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                  <SiNextdotjs
                    size={40}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className=" flex-grow text-center shadow-xl p-12 rounded-xl my-10 dark:shadow-slate-600 hover:scale-110 duration-500 hover:shadow-2xl cursor-pointer">
                <Image
                  className="inline-flex"
                  src={design}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                  UI Designer
                </h3>
                <p className=" w- dark:text-white ">
                  Creating beautiful and elegant designs which enhances the user
                  experience.
                </p>
                <h4 className="py-4 text-teal-600 dark:text-cyan-400">
                  Design tools I use
                </h4>
                <div className="flex justify-center gap-7 py-2">
                  <SiFigma
                    size={40}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                  <SiAdobephotoshop
                    size={40}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                  <SiAdobexd
                    size={40}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex-grow  text-center shadow-xl p-10 rounded-xl my-10 dark:shadow-slate-600 hover:scale-110 duration-500 hover:shadow-2xl cursor-pointer  ">
                <Image
                  className="inline-flex"
                  src={dsa}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                  Data Structures and Algorithm.
                </h3>
                <p className="py-2 dark:text-white">
                  I have a good command in Data Structures and Algorithms,
                  solving problems daily to improve my problem solving abilty.
                </p>
                <h4 className="py-4 text-teal-600 dark:text-cyan-400 ">
                  Languages I know
                </h4>
                <div className="flex justify-center gap-9 py-5">
                  <FaJava
                    size={40}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                  <SiJavascript
                    size={40}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                  <SiPython
                    size={40}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* <div className="flex justify-center gap-9 py-5">
                  <FaJava
                    size={50}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                  <TbBrandJavascript
                    size={50}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                  <AiOutlinePython
                    size={50}
                    className="text-teal-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                  />
                </div> */}
              </div>
            </div>
          </section>
          {/* Third Section */}

          <section className="p-10">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }} // More dramatic start: further down and slightly smaller
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Fade in, move up, and scale to normal size
              transition={{
                duration: 1.5, // Longer duration for a smoother effect
                ease: [0.2, 0.8, 0.2, 1], // Custom cubic-bezier easing for a bouncy feel
              }}
              viewport={{ once: true, margin: "-80px" }} // Trigger animation slightly before element is fully in view
              className=" text-center shadow-lg p-10 rounded-xl my-10 xs:w-20 dark:shadow-slate-400  "
            >
              <h3 className="text-center text-xl py-7 text-teal-600 font-medium md:text-3xl dark:text-cyan-400 font-burtons">
                Technologies, I have worked upon !
              </h3>

              <div className="flex justify-center items-center h-[600px] w-full">
                {/* <IconCloud images={techIcons} />
                 */}
                <GlobeIcon iconSlugs={iconSlugs} />
              </div>

              {/* <div className="flex justify-around gap-5 w-auto">
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={html} width={100} height={100} />
                </div>

                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={css} width={80} height={90} />
                </div>

                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={js} width={90} height={90} />
                </div>
              </div>

              <div className="flex justify-around px-1.5 py-10 gap-5">
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={node} width={110} height={90} />
                </div>
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={express} width={90} height={90} />
                </div>
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image
                    src={mongo}
                    width={100}
                    height={90}
                    className=" rounded-md"
                  />
                </div>
              </div>

              <div className="flex justify-around px-1.5 gap-5 ">
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={reac} width={100} height={90} />
                </div>
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={tailwind} width={100} height={90} />
                </div>
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={next} width={110} height={90} />
                </div>
              </div>

              <div className="flex justify-around px-1.5 py-8 gap-5">
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={adobepremiere} width={100} height={90} />
                </div>
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={figma} width={80} height={90} />
                </div>
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={blender} width={116} height={90} />
                </div>
              </div>
              <div className="flex justify-around px-1.5 py-8 gap-5">
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={vite} width={100} height={90} />
                </div>
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={git} width={90} height={110} />
                </div>
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={xd} width={116} height={110} />
                </div>
              </div> */}
            </motion.div>
          </section>

          {/* <section className="p-10"> */}
          {/* <div className=" text-center shadow-lg p-10 rounded-xl my-10 xs:w-20 dark:shadow-slate-400  ">
              <h3 className="text-center text-xl py-7 font-burtons text-teal-600 font-medium md:text-3xl dark:text-cyan-400 ">
                Projects
              </h3>
            </div> */}
          {/* <div className="text-center p-1">
            <h2 className="text-3xl  py-2 text-teal-600 font-burtons font-medium md:text-3xl dark:text-cyan-400">
              My Projects
            </h2>
            <div
              className="card-container"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-between", // Adds spacing between cards
                gap: "2rem",
                margin: "1rem 0",
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div> */}
          {/* </section> */}

          {/* Testng here */}
          {/* <div className="relative w-full h-screen bg-white dark:bg-black">
            <FlickeringGrid
              squareSize={4}
              gridGap={6}
              flickerChance={0.5}
              color="rgba(0, 150, 255, 0.5)"
              maxOpacity={0.5}
              width={800}
              height={600}
              className="absolute top-0 left-0"
            />
          </div> */}

          <section>
            <div className="lg:flex gap-10   lg: flex justify-center ">
              <div>
                <p className="text-center text-sm py-2 text-teal-600 font-burtons font-medium md:text-3xl dark:text-cyan-400 ">
                  Mail me at
                </p>
                <a
                  className="block w-24 lg:w-36 lg:p-5 "
                  href={`mailto:rohit.kartik9@gmail.com`}
                >
                  <Image src={mail} />
                </a>
              </div>
            </div>
          </section>
          <section className=" py-4">
            <div className="copyright text-center">
              <p className="font-bold text-sm  dark:text-white">
                &copy; {currentYear} Rohit Kartik. All rights reserved.
                {/* <Image src={sign} /> */}
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

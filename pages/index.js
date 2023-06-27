import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";
import deved from "../public/laptop-front.png";
import design from "../public/design.png";
import web from "../public/webdev.png";
import dsa from "../public/DS.png";
import js from "../public/javascript.png";
import html from "../public/html.png";
import css from "../public/css.png";
import node from "../public/node.png";
import express from "../public/expressJs.png";
import mongo from "../public/mongo.png";
import next from "../public/nextjs.png";
import reac from "../public/react.png";
import tailwind from "../public/tailwind.png";
import figma from "../public/figma.png";
import adobepremiere from "../public/adobepremiere.png";
import blender from "../public/blender.png";
import photoshop from "../public/photoshop.png";
import { useState } from "react";
import { BsSun } from "react-icons/bs";
import mail from "../public/gmail.png";
import xd from "../public/xd.png";
import java from "../public/java.png";
import python from "../public/python.png";
import javascript from "../public/javascript.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const color = {
    color: "#fff",
  };

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Rohit Kumar-Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" sizes="180x180" href="/favicon-32x32.png" />
          <link rel="icon" sizes="180x180" href="/favicon-16x16.png" />
        </Head>
        <main className=" bg-white text-slate-950  md:px-20 lg:px-20 dark:bg-gray-900 selection:bg-pink-400 ">
          <section className="min-h-screen">
            <nav className="p-3 py-6 mb-11 flex justify-around">
              <h1 className="text-xl  font-burtons dark:text-white">
                Rohit Kumar
              </h1>
              <ul className="flex items-center ">
                <li text-xl>
                  {darkMode ? (
                    <BsSun
                      onClick={() => setDarkMode(!darkMode)}
                      style={color}
                      className="cursor-pointer "
                    />
                  ) : (
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className=" cursor-pointer text-2xl"
                    />
                  )}
                </li>

                <li>
                  <a
                    className=" bg-gradient-to-r from bg-cyan-500 to-teal-500 text-white
                    px-1
                  lg:px-2 py-2 rounded-md ml-3 lg:ml-8 text-0.5rem "
                    href="https://drive.google.com/file/d/19XixYutWocD-xDn1n8ZX2KIX_1QMcpin/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
                <li className="text-0.5rem">
                  <a
                    className=" bg-gradient-to-r from bg-cyan-500 to-teal-500 text-white
                 px-1 lg:px-4 py-2 rounded-md ml-3 lg:ml-8 text-0.5rem"
                    href="https://cyeb6azqdh9.typeform.com/to/pXJfDEE5"
                    target="_blank"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-9">
              <h2 className="text-3xl py-2 text-teal-600 font-medium md:text-6xl dark:text-cyan-400">
                Developer || Designer
              </h2>
              <h3 className="text-xl py-2 text-teal-600 font-medium md:text-3xl dark:text-cyan-400">
                Web Developer Co-lead at Google Developer Student Clubs, NIET
              </h3>
              <p className="text-md py-6 leading-7 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
                I am an undergraduate student who is very much enthusiastic to
                learn new thing. I am a very adaptive person and I love
                challenges. I always focus on the process but I do focus on the
                result too. I always strive forward to learn new things and also
                love to help my peers.
              </p>
            </div>
            <h1 className="text-center text-xl py-2 text-teal-600 font-medium md:text-3xl dark:text-cyan-400">
              My Socials
            </h1>
            <div className="p-3 text-6xl flex justify-center gap-16 py-3 text-gray-600  ">
              <a
                href="https://www.linkedin.com/in/rohit-kumar-760b0b1b6/"
                target="_blank"
              >
                {darkMode ? <FiLinkedin /> : <AiFillLinkedin />}
              </a>
              <a href="https://github.com/RKartik9" target="_blank">
                {darkMode ? <FiGithub /> : <AiFillGithub />}
              </a>
              <a href="https://www.behance.net/rkartik9" target="_blank">
                {darkMode ? <SlSocialBehance /> : <AiFillBehanceCircle />}
              </a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-87 mt-20 md:h-70 md:w-70">
              <Image src={deved} />
            </div>
          </section>

          {/* Second Section */}
          <section className="px-6">
            <div className=" text-center p-9">
              <h3 className="text-3xl align-middle py-2 dark:text-white">
                Skills
              </h3>
              <p className="text-md py-2 leading-10 text-gray-800 dark:text-white md:text-xl max-w-3xl mx-auto">
                I am Rohit Kumar, a driven and talented Computer Science
                Engineering student, with a passion for technology and design, I
                have honed my skills in{" "}
                <span className=" text-teal-600 font-medium dark:text-cyan-400">
                  MERN Stack development
                </span>{" "}
                and Data Structures and algorithm. I strive to make a difference
                in the tech industry with my innovative ideas and
                problem-solving skills. I also love Ui designing and Video
                Editing. I am very much capable of working in tools like{" "}
                <span className=" text-teal-600 font-medium dark:text-cyan-400">
                  Figma, Adobe Photoshop, Adobe Premiere Pro
                </span>{" "}
                etc.
              </p>
            </div>
            <div className="lg:flex gap-10 flex-1 ">
              <div className="flex-grow text-center shadow-xl p-10 rounded-xl my-10 dark:shadow-slate-600 hover:scale-110 duration-500 hover:shadow-2xl cursor-pointer">
                <Image
                  className="inline-flex"
                  src={web}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                  Web Developer
                </h3>
                <p className="py-2 dark:text-white">
                  Developing fully responsive Website using latest frameworks
                  like ReactJs, NextJs, ExpressJs
                </p>
                <h4 className="py-4 text-teal-600 dark:text-cyan-400">
                  Some Frameworks are
                </h4>
                <div className=" flex justify-center gap-9 ">
                  <Image src={reac} width={40}></Image>
                  <Image src={next} width={50}></Image>
                  <Image src={tailwind} width={50}></Image>
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
                <div className=" flex justify-center gap-7 py-2">
                  <Image src={figma} width={40}></Image>
                  <Image src={photoshop} width={50}></Image>
                  <Image src={xd} width={60}></Image>
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
                  Data Structures and Algorithm
                </h3>
                <p className="py-2 dark:text-white">
                  I have a good command in Data Structures and Algorithms,
                  solving problems daily to improve my problem solving abilty.
                </p>
                <h4 className="py-4 text-teal-600 dark:text-cyan-400 ">
                  Languages I know
                </h4>
                <div className=" flex justify-center gap-9 py-5">
                  <Image src={java} width={40}></Image>
                  <Image src={javascript} width={50}></Image>
                  <Image src={python} width={50}></Image>
                </div>
              </div>
            </div>
          </section>
          {/* Third Section */}

          <section className="p-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 xs:w-20 dark:shadow-slate-400  ">
              <h3 className="text-lg font-medium pt-8 pb-8 dark:text-white ">
                Technologies, I have worked upon
              </h3>
              {/* row-1 */}
              <div className="flex justify-around gap-5 w-auto">
                {/* html */}
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={html} width={100} height={100} />
                </div>
                {/* css */}
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={css} width={80} height={90} />
                </div>
                {/* JS */}
                <div className="hover:scale-110 duration-500 cursor-pointer">
                  <Image src={js} width={90} height={90} />
                </div>
              </div>
              {/* row-2 */}
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

              {/* row-3 */}
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
              {/* 4-th row */}
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
            </div>
          </section>
          <section>
            <div className="lg:flex gap-10 justify-center  lg: flex justify-center ">
              <div>
                <p className=" dark:text-cyan-400 text-2xl font-medium text-center ">
                  Mail me at
                </p>
                <a
                  className="block w-44 p-4"
                  href={`mailto:rohit.kartik9@gmail.com`}
                >
                  <Image src={mail} />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

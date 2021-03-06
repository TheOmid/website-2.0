import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Activity from "../components/activity"

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <h1 class="text-primary text-4xl md:text-6xl text-left md:text-center px-2 mt-10 mb-10 tracking-tight">
      About Me.
    </h1>
    <div class="flex flex-col md:flex-row justify-center">
      <div class="w-full">
        <Image alt="Profile Pic" filename="profile.jpg" />
      </div>
      <p class="float-right md:pl-4 max-w-screen-sm my-1 md:mx-2 text-justify md:tracking-tight tracking-tighter">
        Hello, I'm Omid Shahidi. I am a sophomore studying Computer Science and
        Data Science (with a minor in Philosophy) at the University of
        Michigan-College of Engineering. As an aspiring engineer, I love working
        with multidisciplinary teams, and I believe my biggest strength lies in
        collaboration with engineers, artists, and designers. Right now, my
        research team and I are aiming to turn sleep data into ambient,
        electronic music! Outside of school, I am always trying to learn new
        things, and to explore different hobbies. Right now, I am learning more
        about ML, Algorithms, and APIs (
        <a
          class="underline"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/TheOmid"
        >
          github
        </a>
        ). I am watching countless hours on YouTube about Sound Design, Music
        Production, and Audio Engineering. I host my podcast,{" "}
        <a
          class="italic underline"
          rel="noreferrer"
          target="_blank"
          href="https://anchor.fm/tat-podcast"
        >
          Thoughts about Thoughts
        </a>
        . Check it out! Each month, I have a conversation with my awesome guests
        about their life stories revolving around a topic related to personal
        growth and philosphy. I enjoy reading about philosphy, and I write about
        it in my{" "}
        <Link class="underline" to="/blog/">
          blog
        </Link>{" "}
        (coming soon!). My biggest dream is to climb many mountains, and
        complete the{" "}
        <a
          class="underline"
          rel="noreferrer"
          target="_blank"
          href="https://explorersgrandslam.com/"
        >
          Explorers Grand Slam
        </a>{" "}
        Challenge. My life goal is to become a teacher or mentor for someone. If
        you like to chat use the{" "}
        <Link class="underline" to="/contact/">
          contact page
        </Link>
        .<br></br>
        <br></br>
        <span class="font-bold">tl;dr</span> cs. code. philosophy. learning.
        music. mountaineering. mentorship. inspire.
      </p>
    </div>

    <h1 class="text-primary text-4xl tracking-tight mt-6">I am...</h1>
    {/* FIXME: Activity component issues */}
    {/* TODO: Add Spotify Component */}
    <Activity
      symbol="🎒"
      text="Studying CS x DS @ University of Michigan (BSE '23)"
    ></Activity>
    <Activity symbol="💻" text="Working on personal" to="/projects/">
      projects
    </Activity>
    <Activity
      symbol="🌌"
      text="Hosting Thoughts about Thoughts Podcast"
      to=""
    ></Activity>
    <Activity symbol="🎧" text="Jamming to" special="music"></Activity>
    <Activity
      symbol="📗"
      text="Reading the Meditations by Marcus Aurelius"
    ></Activity>
    <Activity
      symbol="🎹"
      text="Learning to make Electronic music and DJ"
    ></Activity>
  </Layout>
)

export default About

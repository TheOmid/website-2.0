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
        Hello, I'm Omid Shahidi. I am a rising senior studying Computer Science
        (with a minor in Philosophy) at the University of Michigan. As an
        aspiring engineer, I love working with multidisciplinary teams, and I
        believe my biggest strengths lie in collaboration with engineers,
        artists, and designers and in actively participating in clear,
        transparent communication. I am very interested in Distributed Systems
        and more broadly, systems with a focus on partition tolerance. Once upon
        a time, I hosted a podcast,{" "}
        <a
          class="italic underline"
          rel="noreferrer"
          target="_blank"
          href="https://anchor.fm/tat-podcast"
        >
          Thoughts about Thoughts
        </a>
        ! Check it out! It was about having conversations with my awesome guests
        about their life stories revolving around a topic related to personal
        growth and philosophy. I enjoy reading about philosophy, but I am not sure
        if I quite understand what I read... My biggest dream is to be a
        mountaineer, and complete the{" "}
        <a
          class="underline"
          rel="noreferrer"
          target="_blank"
          href="https://explorersgrandslam.com/"
        >
          Explorers Grand Slam
        </a>{" "}
        Challenge. My life goal is to become a teacher. I feel like everyday I
        am getting closer to this goal! If you like to chat use the{" "}
        <Link class="underline" to="/contact/">
          contact page
        </Link>
        .<br></br>
        <br></br>
        <span class="font-bold">tl;dr</span> Omid. cs @ Michigan. code.
        philosophy. learning. music. mountaineering. mentorship.
      </p>
    </div>

    <h1 class="text-primary text-4xl tracking-tight mt-6">I am...</h1>
    <Activity
      symbol="🎒"
      text="Studying CS @ University of Michigan (BSE '23)"
    ></Activity>
    <Activity
      symbol="💻"
      text="Contributing to open-source"
      to="https://github.com/apache/impala"
    >
      projects
    </Activity>
    <Activity
      symbol="🌌"
      text="IAing for eecs 482 (Intro to Operating Systems)
      "
    ></Activity>
    <Activity
      symbol="🎧"
      text="Jamming to"
      to="https://open.spotify.com/playlist/3cfyMD0hledGVaJTBPQnUX?si=acbd281437bf4faa"
    >
      {" "}
      music{" "}
    </Activity>
    <Activity
      symbol="📗"
      text="Reading Le Petit Prince (The Little Prince)"
    ></Activity>
    <Activity
      symbol="🎹"
      text="Learning about playing the piano, playing the persian santur, and music theory"
    ></Activity>
  </Layout>
)

export default About

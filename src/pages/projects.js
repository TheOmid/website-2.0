import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 class="text-primary text-4xl md:text-6xl text-center px-2 mt-10 mb-10 tracking-tight">Projects.</h1>

    <h2 class="text-primary text-2xl md:text-4xl text-center px-2 mt-10 mb-10 tracking-tight">I'm working on new projects, for now check these out!</h2>
    <div class="flex justify-center flex-col">
      <div id="wrapper">
        <Project title="Personal Website 2.0"
        alt="Personal Website screenshot"
        filename="website2.jpg" 
        link="/"
        githubLink="https://github.com/TheOmid/website-2.0"
        description="Well...you're here! I rewrote personal website using gatsbyjs and tailwindcss to 
        learn about React and front-end. I learned about react components and nested layouts."
        tech="Gatsbyjs, TailwindCSS, p5.js"/>
      </div>

      <div id="wrapper">
        <Project title="Personal Website 1.0"
        alt="First Personal Website screenshot" 
        filename="website.jpg"
        link="/"
        githubLink="https://github.com/TheOmid/personal-website"
        description="First personal project and personal website. Using pure HTML/CSS/JS. I learned about the 
        fundamentals of web development."
        tech="HTML/CSS/JS, p5.js"/>
      </div>
    </div>
  </Layout>
)

export default ProjectsPage
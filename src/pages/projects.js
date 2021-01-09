import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 class="text-primary text-4xl md:text-6xl text-center px-2 mt-10 mb-10 tracking-tight">Projects.</h1>
    <div class="flex justify-center">
      <div id="wrapper">
        <Project title="Personal Website 2.0" 
        link="/"
        githubLink="https://github.com/TheOmid/website-2.0"
        description="Well...you're here! I rewrote personal website using gatsbyjs and tailwindcss to 
        learn about React and front-end. I learned about react components and nested layouts"
        tech="Gatsbyjs, TailwindCSS"/>
      </div>
    </div>
  </Layout>
)

export default ProjectsPage
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 class="text-primary text-4xl md:text-6xl text-center px-2 mt-10 mb-10 tracking-tight">Projects.</h1>
    <div class="flex justify-center">
    <div class="w-2/4"><Project/></div>
    </div>
  </Layout>
)

export default ProjectsPage
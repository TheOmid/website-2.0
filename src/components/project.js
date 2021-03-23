import React from "react"
import Image from "./image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Project(props) {
  return (
    <div class="flex justify-center">
      <div class="flex flex-col md:flex-row bg-footer rounded-custom w-5/7 my-6 mx-2">
        <div
          style={{ maxWidth: `220.76px` }}
          class="w-full my-2 mx-auto md:mx-2"
        >
          <Image alt={props.alt} filename={props.filename} />
        </div>
        <div class="flex justify-center">
          <div class="flex justify-center flex-row md:flex-col pl-2 max-w-min">
            <div class="mr-2 hover:text-secondary">
              <a rel="noreferrer" target="_blank" href={props.link}>
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
            <div class="mr-2 hover:text-secondary">
              <a rel="noreferrer" target="_blank" href={props.githubLink}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div class="float-left md:pl-2 my-1 mx-1 py-1 px-1 relative flex flex-col">
          <p class="font-bold mb-auto">{props.title}</p>
          <br></br>
          <p>{props.description}</p>
          <br></br>
          <div class="mt-auto pt-2">
            <span class="font-bold">Tech: </span>
            <span>{props.tech}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

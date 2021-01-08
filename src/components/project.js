import React from "react"
import Image from "./image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Project(props) {
    return (
            <div class="flex flex-row bg-footer rounded-custom">
                <div class="w-1/5"><Image /></div>
                <div class="flex justify-center flex-col pl-2">
                <div><FontAwesomeIcon icon={faLink}/></div>
                <div><FontAwesomeIcon icon={faGithub}/></div>
                </div>
                <div class="float-left pl-2 max-w-screen-sm my-1 md:mx-4"><p>project description</p></div>
            </div>
    )
  }
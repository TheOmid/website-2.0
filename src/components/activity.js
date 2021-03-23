import React from "react"
import { Link } from "gatsby"

export default function Activity(props) {
  return (
    <li class="list-none mx-8 my-4">
      <span
        class="text-xl"
        role="img"
        aria-label={props.symbol ? props.symbol : ""}
        aria-hidden={props.symbol ? "false" : "true"}
      >
        {props.symbol}
        <span class="pl-2 text-md tracking-tighter">
          {props.text}
          <Link to={props.to}>
            {" "}
            <span class="underline">{props.children}</span>
          </Link>
          <span>{props.special}</span>
        </span>
      </span>
    </li>
  )
}

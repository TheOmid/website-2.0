import React from "react"
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => (
<Layout>
<SEO title="Contact" />

<h1 class="text-primary text-4xl md:text-6xl text-center px-2 mt-10 mb-10 tracking-tight">Oh, hey there<span role="img" aria-label="waving-hand"
    aria-hidden="true">👋</span></h1>

{/* Form Template by Tailwind UI */}

<p class="text-primary text-xl md:text-3xl my-4 mx-2 px-2 py-2">You can stalk me on LinkedIn, like my tweets, roast me for my code, jam to my playlists, or shoot me an email.</p>

<div class="flex justify-center items-center mt-4 mb-6">
<a class="text-linkedin hover:text-secondary ml-6" rel="noreferrer" target="_blank" href="https://linkedin.com/in/omid-shahidi">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
</a>

<a class="text-twitter hover:text-secondary ml-6" rel="noreferrer" target="_blank" href="https://twitter.com/u_omid">
        <FontAwesomeIcon icon={faTwitter} size="2x"/>
</a>

<a class="text-github hover:text-secondary ml-6" rel="noreferrer" target="_blank" href="https://github.com/TheOmid">
        <FontAwesomeIcon icon={faGithub} size="2x"/>
</a>

<a class="text-spotify bg-clip-text bg-spotify hover:text-secondary ml-6" rel="noreferrer" target="_blank" href="https://open.spotify.com/user/22fgjchkktikjz2zpeg62uydq?si=WpA5Qsk9S4GJrzcTHihAeQ">
        <FontAwesomeIcon icon={faSpotify} size="2x"/>
</a>

<a class="text-gold hover:text-secondary ml-6" rel="noreferrer" target="_blank" href="mailto: omidsh@umich.edu">
        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
</a>
</div>


<div class="mt-10 mb-15 sm:mt-0 my-6 mx-2 px-2 py-4">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Contact Form</h3>
        <p class="mt-1 text-sm text-gray-600">
          If you wanna say hi use the form :)
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form class="contact-form" netlify-honeypot="bot-field" action="contact.html#contact" enctype="application/x-www-form-urlencoded" method="POST" data-netlify="true" name="contact">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-footer sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" class="block text-sm font-medium text-gray-700">First name
                <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                </label>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name
                <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                </label>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address
                <input type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                </label>
              </div>
            </div>

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Message
              <div class="mt-1">
                <textarea id="about" name="about" rows="4" class="shadow-sm focus:ring-indigo-500 focus:border-yellow-300 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="How's your day been?"></textarea>
              </div>
              </label>
            </div>

          </div>
          <div class="px-4 py-3 bg-footer text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button hover:bg-body focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</Layout>
)

export default ContactPage
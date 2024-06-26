import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faBandcamp,
  faFacebook,
  faYoutube,
  faSpotify,
  faSoundcloud,
  faApple,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Kontakt = () => (
  <Layout>
    <div className="text-left">
      <div className="text-xl hidden">
        Ich hass es, wenn man mich kontaktiert
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col items-center justify-center"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="subject" value="Message from a fan" />
        <div className="mb-4 w-3/4">
          <label className="block text-gray-700 text-sm mb-2">
            Name:
            <input
              type="text"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4  w-3/4">
          <label className="block text-gray-700 text-sm mb-2">
            Email:
            <input
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4  w-3/4">
          <label className="block text-gray-700 text-sm mb-2">
            Message:
            <textarea
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </label>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>

    <div className="flex flex-wrap text-3xl justify-center items-center  mt-4 space-x-6 space-y-2 p-2">
      <a
        href="https://www.instagram.com/konstantinunwohl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://bandcamp.com/konstantinunwohl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faBandcamp} />
      </a>
      <a
        href="https://www.facebook.com/konstantinunwohl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>

      <a
        href="https://www.youtube.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a
        href="https://open.spotify.com/artist/1paiVvuz7pRxsb3tTkJOSd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSpotify} />
      </a>
      <a
        href="https://soundcloud.com/unwohl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSoundcloud} />
      </a>
      <a
        href="https://music.apple.com/de/artist/konstantin-unwohl/1539275591?l=en-GB"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faApple} />
      </a>
      <a
        href={"https://www.youtube.com/channel/UCZCl8tIfSnmEmZxS8Co7NeA"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Kontakt" />

export default Kontakt

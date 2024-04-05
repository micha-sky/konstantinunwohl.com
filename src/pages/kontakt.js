import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faBandcamp,
  faFacebook,
  faTwitter,
  faYoutube,
  faSpotify,
  faSoundcloud,
  faApple,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Kontakt = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Contact me </h1>

      <a
        href="https://www.instagram.com/konstantinunwohl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>
      <a
        href="https://bandcamp.com/konstantinunwohl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faBandcamp} /> Bandcamp
      </a>
      <a
        href="https://www.facebook.com/konstantinunwohl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} /> Facebook
      </a>
      <a
        href="https://twitter.com/konstantinunwohl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} /> Twitter
      </a>
      <a
        href="https://www.youtube.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} /> Youtube
      </a>
      <a
        href="https://open.spotify.com/artist/1paiVvuz7pRxsb3tTkJOSd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSpotify} /> Spotify
      </a>
      <a
        href="https://soundcloud.com/unwohl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSoundcloud} /> Soundcloud
      </a>
      <a
        href="https://music.apple.com/de/artist/konstantin-unwohl/1539275591?l=en-GB"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faApple} /> Apple Music
      </a>
      <a
        href={"https://www.youtube.com/channel/UCZCl8tIfSnmEmZxS8Co7NeA"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} /> Youtube
      </a>
    </div>
    <div className={styles.textCenter}>
  <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="subject" value="Message frm a fan" />
    <p>
      <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</div>
  </Layout>
)

export const Head = () => <Seo title="Kontakt" />

export default Kontakt

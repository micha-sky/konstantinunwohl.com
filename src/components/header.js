import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="flex flex-col items-center justify-between fixed w-full mx-auto p-4 z-10">
    <div className="flex justify-center">
      <Link to="/" className="text-sm no-underline mb-3">
        <StaticImage
          src="../images/logo.png"
          loading="lazy"
          width={250}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      </Link>
    </div>

    <div className="flex justify-center space-x-6">
      <Link
        to="https://konstantinunwohl.bandcamp.com/"
        className="text-sm no-underline mb-3"
      >
        <StaticImage
          src="../images/musik.png"
          loading="lazy"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          className="w-10 sm:w-28 md:w-36 lg:w-48 2xl:w-60"
        />
      </Link>
      <Link
        to="/lyrics"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src="../images/lyrics.png"
          className="w-10 sm:w-28 md:w-36 lg:w-48"
          loading="lazy"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Lyrics"
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Link>
    </div>

    <div className="flex space-x-6 links-container justify-between">
      <Link
        to="/kontakt"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src="../images/kontakt.png"
          loading="lazy"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Kontakt"
          className="w-14  sm:w-28 md:w-36 lg:w-48 2xl:w-60"
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Link>

      <Link
        to="/konzerte"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src="../images/konzerte.png"
          loading="lazy"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Konzerte"
          className="w-10 sm:w-28 md:w-36 lg:w-48"
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Link>
      <Link
        to="/projekte"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src="../images/projekte.png"
          loading="lazy"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Projekte"
          className="w-10 sm:w-28 md:w-36 lg:w-48"
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Link>
    </div>
  </header>
)

export default Header

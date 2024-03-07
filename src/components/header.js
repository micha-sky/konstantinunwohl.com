import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="flex flex-col items-center justify-between fixed w-full mx-auto p-4">
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

    <div className="links-container flex flex-row justify-between w-8/12">
      <Link
        to="https://konstantinunwohl.bandcamp.com/"
        className="text-sm no-underline mb-3"
      >
        <StaticImage
          src="../images/musik.png"
          loading="lazy"
          width={150}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
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
          className="text-sm no-underline mb-3"
          loading="lazy"
          width={150}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Link>

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
          width={150}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
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
          width={150}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
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
          width={150}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Link>
    </div>
  </header>
)

export default Header

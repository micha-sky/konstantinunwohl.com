import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <header className={`flex flex-col   w-full mx-auto p-4 z-10 `}>
      <div className="flex justify-center">
        <Link to="/" className="text-sm no-underline mb-3">
          <StaticImage
            src="../images/logo.png"
            loading="lazy"
            width={250}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Konstantin Unwohl"
          />
        </Link>
      </div>

      <div className="flex justify-center space-x-6">
        <Link to="/musik" className="text-sm no-underline mb-3">
          <StaticImage
            src="../images/musik.png"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Musik"
            height={75}
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
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Lyrics"
            height={75}
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
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Kontakt"
            height={75}
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
            height={75}
          />
        </Link>
      </div>
    </header>
  )
}
export default Header

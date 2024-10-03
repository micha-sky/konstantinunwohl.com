import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <header className="w-full mx-auto p-4 z-10">
      <div className="flex justify-center mb-6">
        <Link to="/" className="text-sm no-underline">
          <StaticImage
            src="../images/logo.png"
            loading="lazy"
            width={250}
            height={75}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Konstantin Unwohl"
          />
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-4xl">
          <Link to="/musik" className="text-sm no-underline block">
            <StaticImage
              src="../images/musik.png"
              loading="lazy"
              width={150}
              height={75}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Musik"
              className="w-full h-auto"
            />
          </Link>
          <Link to="/lyrics" className="text-sm no-underline block">
            <StaticImage
              src="../images/lyrics.png"
              loading="lazy"
              width={150}
              height={75}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Lyrics"
              className="w-full h-auto"
            />
          </Link>
          <Link to="/kontakt" className="text-sm no-underline block">
            <StaticImage
              src="../images/kontakt.png"
              loading="lazy"
              width={150}
              height={75}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Kontakt"
              className="w-full h-auto"
            />
          </Link>
          <Link to="/konzerte" className="text-sm no-underline block">
            <StaticImage
              src="../images/konzerte.png"
              loading="lazy"
              width={150}
              height={75}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Konzerte"
              className="w-full h-auto"
            />
          </Link>
          <Link to="/videos" className="text-sm no-underline block">
            <StaticImage
              src="../images/videos.png"
              loading="lazy"
              width={150}
              height={75}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Videos"
              className="w-full h-auto"
            />
          </Link>
          <Link
            to="https://konstantinunwohl.bandcamp.com/merch"
            className="text-sm no-underline block"
          >
            <StaticImage
              src="../images/shop.png"
              loading="lazy"
              width={150}
              height={75}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Shop"
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

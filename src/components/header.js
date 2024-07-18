import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <header className={`w-full mx-auto p-4 z-10`}>
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

      <div className="flex justify-center">
        <div
          className="grid
    grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
    gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 xl:gap-2
    w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7/12"
        >
          <Link
            to="/musik"
            className="text-sm no-underline transform scale-75 sm:scale-85 md:scale-100"
          >
            <StaticImage
              src="../images/musik.png"
              loading="lazy"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Musik"
              className="w-full h-auto"
            />
          </Link>
          <Link
            to="/lyrics"
            className="text-sm no-underline transform scale-75 sm:scale-85 md:scale-100"
          >
            <StaticImage
              src="../images/lyrics.png"
              loading="lazy"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Lyrics"
              height={75}
              className="w-full h-auto"
            />
          </Link>

          <Link
            to="/kontakt"
            className="text-sm no-underline transform scale-75 sm:scale-85 md:scale-100"
          >
            <StaticImage
              src="../images/kontakt.png"
              loading="lazy"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Kontakt"
              height={75}
              className="w-full h-auto"
            />
          </Link>

          <Link
            to="/konzerte"
            className="text-sm no-underline transform scale-75 sm:scale-85 md:scale-100"
          >
            <StaticImage
              src="../images/konzerte.png"
              loading="lazy"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Konzerte"
              height={75}
              className="w-full h-auto"
            />
          </Link>
          <Link
            to="/videos"
            className="text-sm no-underline transform scale-75 sm:scale-85 md:scale-100"
          >
            <StaticImage
              src="../images/videos.png"
              loading="lazy"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Konzerte"
              height={75}
              className="w-full h-auto"
            />
          </Link>

          <Link
            to="https://konstantinunwohl.bandcamp.com/merch"
            className="text-sm no-underline transform scale-75 sm:scale-85 md:scale-100"
          >
            <StaticImage
              src="../images/shop.png"
              loading="lazy"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Shop"
              height={75}
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header

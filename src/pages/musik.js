import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ThemeContext } from "../components/theme-context"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Musik = ({ data }) => {
  const theme = React.useContext(ThemeContext)
  return (
    <div data-theme={theme}>
      <Layout>
        <div className={styles.textCenter}>
          <div className="sm:grid-cols-1 md:grid-cols-3 grid">
            <Link
              to="https://konstantinunwohl.bandcamp.com/album/im-institut-f-r-str-mungstechnik-remixed"
              className="text-sm no-underline mb-3"
            >
              <StaticImage
                src="../images/musik/remixes.png"
                loading="lazy"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Ich gehe"
                className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50 "
              />
              <div className="text-center mt-4 font-bold">
                Im Institut für Strömungstechnik Remixed
              </div>
            </Link>
            <Link
              to="https://konstantinunwohl.bandcamp.com/track/hoch-auf-dem-gelben-wagen-single-edit"
              className="text-sm no-underline mb-3"
            >
              <StaticImage
                src="../images/musik/wagen.jpg"
                loading="lazy"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Ich gehe"
                className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
              />
              <p className="text-center mt-4 font-bold">
                Hoch auf dem gelben Wagen (Single Edit)
              </p>
            </Link>
            <Link
              to="https://ernstlabel.bandcamp.com/album/nicht-dein-ernst"
              className="text-sm no-underline mb-3"
            >
              <StaticImage
                src="../images/musik/ernst.jpg"
                loading="lazy"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Ich gehe"
                className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
              />
              <p className="text-center mt-4 font-bold">
                Ernst Leben - Nicht dein Ernst
              </p>
            </Link>
             <Link
              to="https://luxrec.bandcamp.com/album/mrt009-ehre"
              className="text-sm no-underline mb-3"
            >
              <StaticImage
                src="../images/musik/ehre.jpg"
                loading="lazy"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Ich gehe"
                className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
              />
              <p className="text-center mt-4 font-bold">
                Acid Ernst - Ehre
              </p>
            </Link>
            <Link
              to="https://konstantinunwohl.bandcamp.com/album/im-institut-f-r-str-mungstechnik"
              className="text-sm no-underline mb-3"
            >
              <StaticImage
                src="../images/musik/institut.jpg"
                loading="lazy"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Ich gehe"
                className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
              />
              <div className="text-center mt-4 font-bold">
                Im Institut für Strömungstechnik
              </div>
            </Link>
            <Link
              to="https://ernstlabel.bandcamp.com/album/bald-wirds-ernst"
              className="text-sm no-underline mb-3"
            >
              <StaticImage
                src="../images/musik/bald.jpg"
                loading="lazy"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Ich gehe"
                className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
              />
              <div className="text-center mt-4 font-bold">Ernst Leben - Bald wirds ernst</div>
            </Link>
            <Link
              to="https://konstantinunwohl.bandcamp.com/album/ich-w-rd-lieber-nicht"
              className="text-sm no-underline mb-3"
            >
              <StaticImage
                src="../images/musik/lieber.jpg"
                loading="lazy"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Ich gehe"
                className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
              />
              <p className="text-center mt-4 font-bold">
                Ich Würd Lieber Nicht{" "}
              </p>
            </Link>
            <Link
              to="https://konstantinunwohl.bandcamp.com/album/ich-gehe"
              className="text-sm no-underline mb-3"
            >
              <StaticImage
                src="../images/musik/ichgehe.jpg"
                loading="lazy"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Ich gehe"
                className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
              />
              <div className="text-center mt-4 font-bold">Ich gehe</div>
            </Link>
            <Link
              to="https://konstantinunwohl.bandcamp.com/album/ich-ging-vier-mal-spatieren"
              className="text-sm no-underline mb-3"
            >
              <StaticImage
                src="../images/musik/ginge.jpg"
                loading="lazy"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Ich ginge vier mal spazieren"
                className="w-48 sm:w-48 md:w-36 lg:w-48 2xl:w-50"
              />
              <div className="text-center mt-4 font-bold">
                Ich ginge vier mal spazieren
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Musik" />

export default Musik

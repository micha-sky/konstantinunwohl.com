import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Lyrics = ({ data }) => {
  const lyrics = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className="flex flex-col main-container">
        l
        <div className="flex flex-row space-x-0 lyrics-container">
          <div className={styles.coverPlace}>
            <StaticImage
              src="../images/cover.jpeg"
              loading="lazy"
              width={250}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Lyrics"
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>

          <div className={styles.tracklist}>
            <ol className="list-decimal list-inside">
              <li>
                <Link to="#ichhasse">ich hass es, wenn man spass hat</Link>
              </li>
              <li>
                <Link to="#bruecke">ich liebe es, wenn man spass hat</Link>
              </li>
              <li>track3</li>
              <li>track4</li>
              <li>track5</li>
            </ol>
          </div>
        </div>
        <div id="ichhasse" className="text-container space-x-0 ml-14">
          Strophe 1:
          <br />
          Ich lauf' durch die Straßen, allein in der Nacht,
          <br />
          überall Lachen, doch mein Herz schwer gemacht.
          <br />
          Sie tanzen und singen, ohne Sorgen, so frei,
          <br />
          ich wünscht', ich könnt' auch, doch etwas hält mich dabei.
          <br />
          <br />
          Refrain:
          <br />
          Ich hass' es, wenn man Spaß hat, und ich steh' nur am Rand,
          <br />
          gefangen in Gedanken, in meinem eigenen Land.
          <br />
          Ich hass' es, wenn die Lichter so hell und bunt scheinen,
          <br />
          während in meiner Welt nur Wolken erscheinen.
          <br />
          <br />
          Strophe 2:
          <br />
          Sie sagen, komm doch, lass dich einfach mal geh'n,
          <br />
          doch in ihren Augen kann ich die Wahrheit seh'n.
          <br />
          Sie verstehen nicht, wie schwer es ist, zu sein wie ich,
          <br />
          immer außerhalb, im Schatten, fern vom Licht.
          <br />
          <br />
          <div id="bruecke">
            Brücke:
            <br />{" "}
          </div>
          Doch vielleicht ist es Zeit, zu lernen und zu versteh'n,
          <br />
          dass auch im Dunkeln Sterne wunderschön.
          <br />
          Vielleicht ist es nicht Hass, sondern Neid oder Angst,
          <br />
          die mich hält gefangen, in diesem traurigen Tanz.
          <br />
          <br />
          Refrain:
          <br />
          Ich hass' es, wenn man Spaß hat, und ich steh' nur am Rand,
          <br />
          gefangen in Gedanken, in meinem eigenen Land.
          <br />
          Aber vielleicht, ja vielleicht, find' ich meinen eigenen Glanz,
          <br />
          lerne zu tanzen, im Regen, beginne meinen Tanz.
          <br />
          <br />
          Outro:
          <br />
          Also schau' ich hinauf, in die Nacht, so klar,
          <br />
          und finde dort Hoffnung, sie war immer da.
          <br />
          Es ist okay zu sein, wer ich bin, mit all meinem Schmerz,
          <br />
          denn auch in der Dunkelheit, findet das Licht seinen Platz.
          <br />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Lyrics" />

export default Lyrics

export const pageQuery = graphql`
  query AllLyrics {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/lyrics/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
        fields {
          slug
        }
      }
    }
  }
`

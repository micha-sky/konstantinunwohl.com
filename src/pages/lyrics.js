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
                <Link to="#ichhasse">Ich hass es, wenn man Spaß hat</Link>
              </li>
              <li>
                <Link to="#anleitung">Anleitung zum Versagen</Link>
              </li>
              <li>
                <Link to="#balance">Balance</Link>
              </li>
              <li>track4</li>
              <li>track5</li>
            </ol>
          </div>
        </div>
        <div id="ichhasse" className="text-container space-x-0 ml-14 mb-8">
          <div className="text-2xl bold">Ich hass es, wenn man Spaß hat</div>
          An der Holstenstraße fährt der letzte Zug
          <br />
          und ich falle in Gedanken auf ie Gleise
          <br />
          ich dachte eigentlich ich hätt genug gehabt
          <br />
          am Bahnhof wie zuhause immer das gleiche
          <br />
          <br />
          ich gehe meinen Weg in Richtung hier und da
          <br />
          ich weiß schon lange nicht mehr, wo ich gestern war
          <br />
          die Tage zieht vorbei, nur die leere Hülle bleibt
          <br />
          im andern zimmer wird gelacht
          <br />
          wenn man Spaß hat
          <br />
          <br />
          Ich hass es, wenn man Spaß hat
          <br />
          Wenn man
          <br />
          Ich hass es, wenn man Spaß hat
          <br />
          Ich hass es, wenn man Spaß hat
          <br />
          Wenn man
          <br />
          <br />
          Seitdem ich mich kenne
          <br />
          komm ich jedes Jahr im Winter auf dieselben Gedanken
          <br />
          die Lebenden sind tot
          <br />
          und die toten, die leben
          <br />
          geben Geld aus und gehen wandern
          <br />
          <br />
          oh es windet sich im Bett ein Körper
          <br />
          den ich besaß
          <br />
          oh ich habe viele Bücher, worin ich davon las
          <br />
          <br />
          und wenn der Überdruss
          <br />
          der Weile nach mir greift
          <br />
          wenn ich alles vernein
          <br />
          da bin ich daheim
          <br />
          die Funken singen im Zaun
          <br />
          wenn man nicht mehr weiß, wofür man zu bleiben braucht
          <br />
          wenn ich alles vernein
          <br />
          da bin ich daheim
          <br />
          <br />
          bleib bevor du gehst, aber geh bevor du fährst
          <br />
          schau zu lange in den Spiegel und du siehst nicht mehr dich selbst
          <br />
          das sage dem, der Sorgen trägt
          <br />
          und dass die Sorgen immer dauern
          <br />
          wenn die Freude auch verweht
          <br />
          <br />
          Jedes Abenteuer ist nur ein ironischer Besuch
          <br />
          sowieso ist es zu früh, oder zu spät für den Versuch
          <br />
          schon viel davon gehört, vielleicht versuch ich mich daran
          <br />
          fall langsam auseinander und was übrig bleibt ist Angst
          <br />
          <br />
          und selbst wenn und selbst wenn und selbst wenn und selbst wenn
          <br />
          solang ich alles vernein
          <br />
          da bin ich daheim
          <br />
          die Funken singen im Zaun
          <br />
          wenn man nicht mehr weiß, wofür man zu bleiben braucht
          <br />
          wenn ich alles vernein
          <br />
          da bin ich daheim
          <br />
        </div>
        <div id="anleitung" className="text-container space-x-0 ml-14">
          <div className="text-2xl bold">Anleitung zum Versagen </div>
          Du musst langsam gehen beim schleppen <br />
          denn du musst hören können
          <br />
          wie die Schritte auf der Treppe langsam verhallen
          <br />
          <br />
          <br />
          immer noch fest dran drauf dran lebendig zu verfallen
          <br />
          mancher stirbt an Lebenslust
          <br />
          andere am Leben <br />
          trinke ein Bier, ein Schnaps, schäm dich, denk dumm gemacht
          <br />
          dumm gemacht
          <br />
          <br />
          <br />
          maße dir die Kleider der Wahrheit an
          <br />
          denn was auch immer diese nutzlosen Hände vollbracht haben
          <br />
          hält nicht lang
          <br />
          <br />
          sieh die Einsamkeit der Welt, aber frag nicht nach
          <br />
          ja studiere keine Quellen mehr, nur noch Kommentar
          <br />
          und du wirst irgendwann vergessen haben
          <br />
          ob es immer schon so war
          <br />
          immer schon so war
          <br />
          <br />
          <br />
          und dann fühle dich
          <br />
          und fühle dich fremd
          <br />
          und dann fühle dich fremd
          <br />
          und dann fühle dich fremd fühl dich fremd fühl dich fremd
          <br />
          ja dann fühle dich fremd
          <br />
          dann fühle dich fremd
          <br />
          dann fühle dich fremd
          <br />
          ja dann fühle dich fremd fühl dich fremd fühl dich fremd
          <br />
          <br />
          <br />
          zwischen quälend ungewissen Entitäten
          <br />
          ständig falsch gesetzten Prioritäten
          <br />
          allen diesen schambefleckten Zeiten
          <br />
          und allen diesen Unzulänglichkeiten
          <br />
          genau da da da da da da da da
          <br />
          <br />
          <br />
          wenn ein Stein fallen will
          <br />
          gib ihm besser einen Stoß
          <br />
          es gibt nie lang Befreiung <br />
          aus den Klauen des Tods
          <br />
          werd zum Schatten der Bekannten
          <br />
          wart wie Wiesen auf den Schnitter
          <br />
          werd die Vase deren Blumen auf den Abfall harrn
          <br />
          <br />
          <br />
          ja fürchte nicht die Höhen
          <br />
          aber fürchte den Reflex
          <br />
          fürcht die Sehnsucht deines Körpers <br />
          und die Leute um dich rum, die sagen Pech Pech Pech Pech Pech
          <br />
          <br />
          <br />
          Lad ein, zur Besichtigung der inneren Unruhe
          <br />
          gib auf, wenn die bestätigenden Stimmen verstummen
          <br />
          frag nie, ob es noch irgendetwas anderes gibt
          <br />
          als das, was zwischen deiner und der Weltenleere liegt
          <br />
          <br />
          <br />
          sieh die Wolken ein fallender Mann
          <br />
          der über den Himmel zieht
          <br />
          und dann fühle dich fühle dich fremd <br />
          fühle dich fremd
          <br />
          ja dann fühle dich fremd
          <br />
          dann fühle dich fremd
          <br />
          ja dann fühle dich fremd fühl dich fremd fühl dich fremd fühl dich
          fremd
          <br />
          dann fühle dich fremd
          <br />
          ja dann fühle dich fremd
          <br />
          und dann fühle dich fremd
          <br />
          ja dann fühle dich fremd fühl dich fremd fühl dich fremd fühl dich
          fremd
          <br />
          <br />
          zwischen quälend ungewissen Entitäten
          <br />
          ständig falsch gesetzten Prioritäten
          <br />
          allen diesen schambefleckten Zeiten
          <br />
          und allen diesen Unzulänglichkeiten
          <br />
          genau da da da da da da da da
          <br />
        </div>
        <div id="balance" className="text-container space-x-0 ml-14 mb-8">
          <div className="text-2xl bold">Balance</div>
          <p>
            Ich z&auml;hle wieder meine Schritte
            <br />
            wie Geburtstage und alte Geschichten
            <br />
            ich hab viel gesehen, doch die Leute in der Werbung
            <br />
            die machen mich nerv&ouml;s
          </p>

          <p>
            ja an Tagen wie diesen, sei lieber kriminell
            <br />
            so stehl ich abends heimlich Blumen auf dem Weg
            <br />
            es ist gut wenn niemand sieht, wie man sich bewegt
            <br />
            denn es geht hier um Balance
          </p>

          <p>
            Balance
            <br />
            es geht hier um Balance
            <br />
            Balance
          </p>

          <p>
            ich kann mit Silberfischen sprechen
            <br />
            und mit &auml;hnlichem Gesocks
            <br />
            wir k&ouml;nnten in Symbiose leben
            <br />
            aber ich entscheide mich dagegen
          </p>

          <p>
            oh man darf nicht viel daran denken
            <br />
            wenn man nicht wei&szlig;, woran man ist
            <br />
            denn wenn der Wind sich zu oft dreht
            <br />
            hilft es dir nichts mehr, wenn du gehst
          </p>

          <p>
            Und so schlaf ich im Vorraum der Stille
            <br />
            da ruht es sich halb so gut aus
            <br />
            ich warf mich in vielerlei Dinge
            <br />
            und jetzt komm ich da nicht mehr gut raus
            <br />
            Ich schlafe im Vorraum der Stille
            <br />
            ein Ort, der zum Enden nichts taugt
            <br />
            ich sch&auml;m mich sogar f&uuml;r die Dinge
            <br />
            an die man schon lang nicht mehr glaubt
          </p>

          <p>es geht hier um Balance</p>

          <p>
            Ich habe eine Schw&auml;che f&uuml;r Phantome
            <br />
            sie machen alles so spannend
            <br />
            nur man gew&ouml;hnt sich auch zu schnell daran
            <br />
            dass Enth&uuml;llung nur entt&auml;uschen kann
            <br />
            poetisches Bereuen
            <br />
            das macht sich immer gut
            <br />
            denn um &uuml;berhaupt zu handeln fehlt dann doch der Mut
          </p>

          <p>
            und eines sch&ouml;nen Tages
            <br />
            h&ouml;rt man auf davon zu reden
            <br />
            geschafft davon, sich selbst zu h&ouml;ren
            <br />
            und alles zu verstehen
            <br />
            man wird das Gegenteil der andern
            <br />
            die man nicht mal gehen sah
            <br />
            und man nagt am Gnadenbrot <br />
            der Fotoalben jedes Jahr
          </p>

          <p>
            Und so schlaf ich im Vorraum der Stille
            <br />
            da ruht es sich halb so gut aus
            <br />
            ich warf mich in vielerlei Dinge
            <br />
            und jetzt komm ich da nicht mehr gut raus
            <br />
            Ich schlafe im Vorraum der Stille
            <br />
            ein Ort, der zum Enden nichts taugt
            <br />
            ich sch&auml;m mich sogar f&uuml;r die Dinge
            <br />
            an die man schon l&auml;ngst nicht mehr glaubt
          </p>
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

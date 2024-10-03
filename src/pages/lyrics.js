import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const Lyrics = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 350) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])
  return (
    <Layout>
      <div className="flex flex-col main-container">
        <div className="flex sm:flex-row xs:flex-row flex-col space-x-0 lyrics-container">
          <div className="flex text-left mt-1 ml-12">
            <StaticImage
              src="../images/cover.jpeg"
              loading="lazy"
              className="w-48 sm:w-48 md:w-56 lg:w-64 2xl:w-72"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Lyrics"
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>

          <div className="text-left mt-8">
            <ul className="list-decimal list-inside">
              <li>
                <Link to="#balance">Balance</Link>
              </li>
              <li>
                <Link to="#rekrut">Eine Träne kein Rekrut</Link>
              </li>
              <li>
                <Link to="#wagen">Hoch auf dem gelben Wagen</Link>
              </li>
              <li>
                <Link to="#ichhasse">Ich hass es, wenn man Spaß hat</Link>
              </li>
              <li>
                <Link to="#ozean">Ozean der Zeit</Link>
              </li>
              <li>
                <Link to="#sein">Sein ist Nein</Link>
              </li>
              <li>
                <Link to="#anleitung">Anleitung zum Versagen</Link>
              </li>

              <li>
                <Link to="#fenster">Fenster zur Welt</Link>
              </li>
            </ul>
          </div>
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
        <div id="rekrut" className="text-container space-x-0 ml-14 mb-8">
          <div className="text-2xl bold">Eine Träne kein Rekrut</div>

          <p>
            Heute ist ein sch&ouml;ner Tag
            <br />
            die Sonne scheint sehr unbedarft
            <br />
            die Rennr&auml;der der Stadt sammeln Staub
          </p>

          <p>
            du wolltest einkaufen gehen
            <br />
            f&uuml;r eine nette Kleinigkeit
            <br />
            so oft hast dus versucht
            <br />
            aber kamst damit nie weit
          </p>

          <p>
            wirf dich mitten ins Get&uuml;mmel
            <br />
            deren Ziele du nicht teilst
            <br />
            zieh dir eine kleine M&uuml;tze an
            <br />
            dann blendest du dich ein
          </p>

          <p>
            Vergangenheit ist zur Strafe vorbei
            <br />
            du musst in Zeiten der Verwirrung nur mit dir im reinen sein
          </p>

          <p>
            nur vergiss nicht deine Freunde an der S-Bahn
            <br />
            und vergiss nicht deine Freunde in der Bar
            <br />
            ja morgen ist ein neuer Tag
            <br />
            und es bleibt alles so, wie es war
            <br />
            eine Tr&auml;ne kein Rekrut
          </p>

          <p>
            Man geht nicht ohne Folgen unter Palmen
            <br />
            wenn man nur handelt, nach Bedarf
            <br />
            verb&uuml;ndet im Versagen
            <br />
            dieselben Kinder, andre Namen
            <br />
            man redet von der Liebe, aber spricht dabei von sich
            <br />
            vom tiefen Stich im K&ouml;rper, nur den K&ouml;rper sieht man nicht
            <br />
            also kn&ouml;pf dir deine Hemden zu
            <br />
            und scheitle deine Stirn
            <br />
            denn wer wei&szlig; denn heutzutage noch
            <br />
            wohin alle seine Blumen f&uuml;hren
            <br />
            Ins offene Herz dr&auml;ngt der Himmel
            <br />
            und er fragt sich, was er da soll
            <br />
            wie jemand, der zu Waffen greift
            <br />
            und vergessen hat, was er damit wollt
          </p>

          <p>
            steh fr&uuml;h auf und gehe auf den Markt
            <br />
            versuch doch mal spazieren gehen im Park
            <br />
            vertrete dir die Seele, sie wird gr&ouml;&szlig;er als geahnt
            <br />
            kratz die Totenkopftapete von der Wand
            <br />
            nur vergiss nicht deine Freunde an der S-Bahn
            <br />
            und vergiss nicht deine Freunde in der Bar
            <br />
            ja morgen ist ein neuer Tag
            <br />
            und es bleibt alles so, wie es war
            <br />
            eine Tr&auml;ne kein Rekrut
          </p>

          <p>
            Mancher sucht das Leben nur, ums wieder zu vergessen
            <br />
            andre kaufen ein, nur um nichts davon zu essen
            <br />
            versuch verschiedne Dinge, aber sch&auml;m dich nicht dabei
            <br />
            ein lebenswertes Leben ist erst lebenswert von Scham befreit
          </p>

          <p>
            gib besser schnell zur&uuml;ck, was du von fr&uuml;her noch
            besa&szlig;t
            <br />
            denn sie wollen alles wieder haben und mit Pech ist nichts mehr da
            <br />
            befleck dich nicht mit der Gewinnsucht, interessant ist nur Verlust
            <br />
            und wenn du auf den Friedhof gehst, dann sei dir deines Grabs
            bewusst
            <br />
            es gibt viele Gr&uuml;nde, f&uuml;r den Guten, der nur schlechtes
            tut
            <br />
            am anderen Ende der Sintflut
            <br />
            eine Tr&auml;ne kein Rekrut
            <br />
          </p>
        </div>
        <div id="wagen" className="text-container space-x-0 ml-14 mb-8">
          <div className="text-2xl bold">Hoch auf dem gelben Wagen</div>
          <p>
            Es weht ein kalter Wind im Neubaugebiet
            <br />
            aber dennoch gehen die Leute auf der Straße
            <br />
            mir ist nicht mehr ganz klar, was man hier gewinnt
            <br />
            und die Sirenen singen mir Lieder vom Schlafen
          </p>

          <p>
            Man unterhielt sich mit mir vom Balkon aus
            <br />
            und ich stand dabei im Garten
            <br />
            das Gras war schön und es war frisch gemäht
            <br />
            ich weiß nicht, ob sie mir das übel nahmen
          </p>

          <p>
            An Orten, wo nur Stille herrscht, da nimmt man sich in Acht
            <br />
            und belästigt besser kein mit seinen Fragen.
            <br />
            Wo Gemäßigkeit spazieren geht, da horcht man, wenn gerufen wird
            <br />
            so führ ein kleines Buch mit deinen Taten
            <br />
            Und am schönsten aller Tage, ja da lauf ich euch davon
            <br />
            die Sonne wärmt die Haut, wenn ich entschlafe
            <br />
            niemand, der von groß und wichtig sprich
            <br />
            meint, dass es das wirklich gibt
            <br />
            so fürchte nicht den Tod, sondern die Sprache
          </p>

          <p>
            Man fährt noch nicht so lang mit mir
            <br />
            hoch auf dem gelben Wagen
            <br />
            es gibt so viele Dinge
            <br />
            die andre schon gesehen haben
            <br />
            ich malt mir viele Bilder aus
            <br />
            in völlig andren Farben
            <br />
            auch dafür gibt es Orte
            <br />
            nur was soll man schon erwarten
          </p>

          <p>
            Man fährt noch nicht so lang mit mir
            <br />
            hoch auf dem gelben Wagen
            <br />
            wer will schon jung und weise sein
            <br />
            was soll man da schon sagen
          </p>

          <p>
            Ich dachte ja auch, man versteht sich
            <br />
            aber nun geb ich meinen Anspruch zurück
            <br />
            vielleicht wars zu viel, oder zu wenig
            <br />
            aber wer Verrückten in die Karten schaut ist selbst verrückt
          </p>

          <p>
            Man hätte sich ja so viel zu sagen
            <br />
            nur leider sieht man sich so selten
            <br />
            jetzt sind die Ziele vergessen und der Wille verfehlt
            <br />
            aber man fährt hoch auf dem gelben Wagen
          </p>

          <p>
            Und alle Stimmen der Vernunft
            <br />
            singen in einem Chor
            <br />
            aber warten eigentlich nur auf ihre Pause
            <br />
            im Gedachten war es gut und nur im Echten tuts nicht Not
            <br />
            hätt ich wissen sollen, als ich noch daran glaubte
            <br />
            denn am schönsten aller Tage
            <br />
            da lauf ich euch davon
            <br />
            die Sonne wärmt die Haut, wenn ich entschlafe
            <br />
            niemand, der von groß und wichtig spricht
            <br />
            meint, dass es das wirklich gibt
            <br />
            so fürchte nicht den Tod, sondern die Sprache
          </p>
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
        <div id="ozean" className="text-container space-x-0 ml-14 mb-8">
          <div className="text-2xl bold">Ozean der Zeit</div>
          <p>
            In Treppenhäusern, wo man nicht so gern die Stiege steigt
            <br />
            da geh ich lieber allein
            <br />
            denn wenn der Faden wieder einmal reißt
            <br />
            dann gibt es einen Rückfall
          </p>

          <p>
            mit Liebeskummer darf man nicht allein aufs Feld zum hacken,
            <br />
            nicht allein
            <br />
            denn man vergisst leicht, dass es regnen kann
            <br />
            wenn die Maschine nicht mehr läuft
            <br />
            bist du allein
          </p>

          <p>
            immer wenn ich Durst hab,
            <br />
            dann geh ich in den Ozean der Zeit
            <br />
            wo alle Nächte Ewigkeit erlangen
            <br />
            ich zöger nicht, versprech die Wahrheit
            <br />
            aber lüg wie ichs vermag
            <br />
            und dann geh ich in die Arbeit jeden Tag
            <br />
            immer wenn ich Durst hab
          </p>

          <p>
            wer viel vergisst,
            <br />
            und nichts mehr weiß
            <br />
            ja der stirbt
            <br />
            als junger Mensch
            <br />
            da wo die Liebenden sich vieles erzählen
            <br />
            sind andere längst gefallen
            <br />
            auf diesen Stühlen stirbt man langsam
            <br />
            ich tausche Kleidung gegen Wein
          </p>

          <p>
            morgens bin ich trotzig,
            <br />
            aber abends werd ich schwach
            <br />
            mein Wort gegen keines
            <br />
            nicht mal mein eignes
            <br />
            wenn nicht
            <br />
            mal mehr die Hunde auf den Straßen sind,
            <br />
            dann entfremdet sich die Welt
            <br />
            denn sie wird wieder wie sie selbst
          </p>

          <p>
            die Busfahrer die wecken mich
            <br />
            dabei bin ich lang nicht da, lange nicht da
            <br />
            ich hab die Tage viel geschlafen,
            <br />
            weil der schlaf so nah am Tod ist, viel zu nah
          </p>

          <p>
            und irgendwann passierst auch du mal eines dieser Fenster,
            <br />
            Hand in Hand
            <br />
            ich werde drinnen sitzen, leicht gebeugt und habe dich bestimmt
            <br />
            nicht erkannt
          </p>

          <p>
            Immer wenn ich Durst hab,
            <br />
            dann geh ich in den Ozean der Zeit
            <br />
            wo alle Nächte Ewigkeit erlangen
            <br />
            ich zöger nicht, versprech die Wahrheit
            <br />
            aber lüg wie ichs vermag
            <br />
            und dann geh ich in die Arbeit jeden Tag
            <br />
            immer wenn ich Durst hab
          </p>
        </div>
        <div id="sein" className="text-container space-x-0 ml-14 mb-8">
          <div className="text-2xl bold">Sein ist Nein</div>
          <p>
            Die Kinder spielen im Park
            <br />
            mit den angetrunknen Tanten
            <br />
            und alle zusammen freuen sich sehr
            <br />
            über nette Bekannte
            <br />
            so viele nette Bekannte
          </p>

          <p>
            fast alle meine Freunde sind traurig
            <br />
            frag nicht nach
            <br />
            selbst auf den Terrassen dieser Stadt
            <br />
            hat man sich selbst schon lange satt
            <br />
            schon so lange satt
          </p>

          <p>
            oh sie zieh sich schönes an
            <br />
            ich quäl mich nur hinein
            <br />
            denk Abends schon im Bett daran
            <br />
            wie ich morgen vergessen kann
            <br />
            wie ich morgen vergessen kann
          </p>

          <p>
            Es gibt
            <br />
            Geldkoffer, Windowshopper, viele Kreditkarten
            <br />
            alle kennen es schon aus, verschiednen Formaten
            <br />
            aus verschiednen Formaten
            <br />
            ich kenn nur Sein ist
            <br />
            Nein Nein Nein Nein
            <br />
            ich kenn nur Sein ist
            <br />
            Nein Nein Nein Nein
            <br />
            Ich kenn nur Sein ist
          </p>

          <p>
            Ekstase für den einen
            <br />
            ist dem anderen ein Wagnis
            <br />
            nicht gleich Geige spielt
            <br />
            wenn sie dann mal nicht da ist
            <br />
            wenn sie dann mal nicht da ist
          </p>

          <p>
            man muss solange nicht können
            <br />
            bis man nicht mehr mag
            <br />
            verloren auf der Schwelle
            <br />
            zum Gleichgewicht des Tags
            <br />
            zum Gleichgewicht
          </p>

          <p>
            oh wohin kann man entfliehen
            <br />
            wenn der Wahnsinn dich verlässt
            <br />
            ich glaub es ist ok, nervös zu werden jetzt
            <br />
            nervös zu sein
            <br />
            jetzt nervös zu sein
            <br />
            da hilft nur Sein ist
            <br />
            Nein
          </p>

          <p>
            Die Häuser der Vergangenen bleiben lange genug stehen
            <br />
            Gedächtnis und Familien
            <br />
            die hört man hier verwesen
            <br />
            du, dem nichts mehr dazu einfällt
            <br />
            dir, dem alles anders wird
            <br />
            wenn Unglück, dann Routine
            <br />
            lang gesucht und kompensiert
            <br />
            sage Ja mein
            <br />
            Nein
            <br />
            sage Sein ist
            <br />
            Nein
            <br />
            sage Ja mein
            <br />
            Nein
            <br />
            sage Sein ist
            <br />
            Nein Nein Nein Nein
          </p>
        </div>
        <div id="anleitung" className="text-container space-x-0 ml-14">
          <div className="text-2xl bold">Anleitung zum Versagen</div>
          Du musst langsam gehen beim schleppen <br />
          denn du musst hören können
          <br />
          wie die Schritte auf der Treppe langsam verhallen
          <br />
          fühl den Nachklang
          <br />
          immer noch fest dran drauf dran
          <br />
          lebendig zu verfallen
          <br />
          mancher stirbt an Lebenslust
          <br />
          andere am Leben <br />
          trinke ein Bier, ein Schnaps, schäm dich, denk dumm gemacht
          <br />
          dumm gemacht
          <br />
          <br />
          maße dir die Kleider der Wahrheit an
          <br />
          denn was auch immer diese nutzlosen Hände vollbracht haben
          <br />
          hält nicht lang
          <br />
          sieh die Einsamkeit der Welt, aber frag nicht nach
          <br />
          ja studiere keine Quellen mehr, nur noch Kommentar
          <br />
          und du wirst irgendwann vergessen
          <br />
          ob es immer schon so war
          <br />
          immer schon so war
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
          ja fürchte nicht die Höhen
          <br />
          aber fürchte den Reflex
          <br />
          fürcht die Sehnsucht deines Körpers <br />
          und die Leute um dich rum, die sagen Pech Pech Pech Pech Pech
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
        </div>
        <div id="fenster" className="text-container space-x-0 ml-14 mb-8">
          <div className="text-2xl bold">Fenster zur Welt</div>
          <p>
            Lang in den Nächten
            <br />
            die Taxis fahren
            <br />
            alle suchen was, ich weiß nicht, was es gibt
            <br />
            ohne Gedächtnis
            <br />
            vom eigenen Verfall die Antwort hören wollen
            <br />
            woran einem etwas liegt
          </p>

          <p>
            du sagst es geht dir besser heut als gestern
            <br />
            aber morgen ist nicht allzu weit entfernt
            <br />
            nicht weiter drüber nachgedacht ist besser
            <br />
            leicht verdrossen ist das Fenster zur Welt
          </p>

          <p>
            und die Blätter der Bäume fallen vor meinen Augen
            <br />
            wir klettern auf Kreuze, dass man es besser sieht
            <br />
            die Blätter der Bäume fallen vor meinen Augen
            <br />
            weil es nichts besseres gibt
          </p>

          <p>
            und wo die Sonne scheint, ist ganz egal
            <br />
            denn um aufzugeben ist man nie zu alt
            <br />
            in die gläserne Leere nichts gefragt
            <br />
            verstehen kann nur, wer nicht die Wahrheit sagt
            <br />
            verstehen kann nur, wer nicht die Wahrheit sagt
          </p>

          <p>
            frag mich nicht, wie es mir geht
            <br />
            ich hab zu oft daran gedacht
            <br />
            ich wünscht, ich hätt mein Leben mehr dem Leben hingegeben
            <br />
            was auch immer das bedeuten mag
          </p>

          <p>
            da wo die Stadt ihren Schmerz lagert
            <br />
            in schalen Küssen leerer Flaschen
            <br />
            da träum ich von Gewalt
            <br />
            fühle den, der trinkt, und die Laterne leuchtet blind
            <br />
            auf eine Straße, auf die niemand sich mehr wagt
          </p>

          <p>
            und die Blätter der Bäume fallen vor meinen Augen
            <br />
            wir klettern auf Kreuze, dass man es besser sieht
            <br />
            die Blätter der Bäume fallen vor meinen Augen
            <br />
            wir klettern auf Kreuze, dass man es besser sieht
            <br />
            die Blätter der Bäume fallen vor meinen Augen
            <br />
            weil es nichts besseres gibt
          </p>

          <p>
            lang in den Nächten
            <br />
            die taxis fahren
            <br />
            und alle suchen, ich versteh nicht was es gibt
            <br />
            ohne Gedächtnis, nicht gelernt und nicht verstanden
            <br />
            woran einem eigentlich etwas liegt
          </p>

          <p>
            ich frag mich, ob man sehn kann, dass ich lächle
            <br />
            denn man fragt mich, ob mir überhaupt irgendwas gefällt
            <br />
            nicht weiter drüber nachgedacht ist besser
            <br />
            eicht verdrossen bleibt das Fenster zur Welt
          </p>
        </div>
      </div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
          className="fixed bottom-1/2 left-5 cursor-pointer text-gray-500"
        >
          go up
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
    </Layout>
  )
}

export const Head = () => <Seo title="Lyrics" />

export default Lyrics

export const pageQuery = graphql`
  query AllLyrics {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/lyrics/" } }) {
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

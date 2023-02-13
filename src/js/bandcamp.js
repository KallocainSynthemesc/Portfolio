import React from "react"
import BandcampStyle from "../css/bandcamp.module.css"

export default function Bandcamp() {
  return(
    <div id="bandcamp" className={BandcampStyle.bandcamp}>
      <iframe title="caretaker" className={BandcampStyle.iFrame} src="https://bandcamp.com/EmbeddedPlayer/album=2425378851/size=small/bgcol=333333/linkcol=9a64ff/transparent=true/" seamless><a href="https://thecaretaker.bandcamp.com/album/everywhere-at-the-end-of-time">Everywhere at the end of time by The Caretaker</a></iframe>
    </div>
    )
}
import React from 'react'
import "./style.css";

import Companie from '../../Assets/companies.png'
import Twitch from '../../Assets/twitch.png'
import Youtube from '../../Assets/youtube.png'
import Hulu from '../../Assets/hulu.png'


export default function Companies() {
  return (
    <div className='companiesContainer'>
        <h1 className='companiesTitle'>
            Large companies using the Tuvalu domain 
        </h1>

        <p className='companiesDesc'> Widely used by companies that present video, audio, and streaming content on the Internet (marketing tool).  “Most users are looking for some clue in your URL that indicates what services your brand offers.” </p>

        <section className='companiesSection'>
            <img src={Companie} alt="" />

            <div>
                <div>
                    <img src={Twitch} alt="" />
                    <p> Twitch TV is a video and live gaming service available on the web and as a free app for Android and iPhone (iOS).</p>
                </div>
                <div>
                    <img src={Youtube} alt="" />
                    <p> YouTube TV is a live TV streaming service. It provides access to live TV from over 85 broadcasts, cable, and regional sports networks.</p>
                </div>
                <div>
                    <img src={Hulu} alt="" />
                    <p> Hulu is an American entertainment company that provides video-on-demand services that also offers file hosting services owned by Hulu.</p>
                </div>
            </div>
        </section>

    </div>
  )
}

import React from 'react'
import "./style.css";
import Internet from '../../Assets/internet.png'
import Brasil from '../../Assets/brasil.png'
import PC from '../../Assets/pc.png'
import Mind from '../../Assets/mind.png'
import Aviao from '../../Assets/aviao.png'


export default function Timeline() {

    const timeline = [
        {
            date: '1985',
            img: Internet,
            desc: 'First domain in the history: ARPA First comercial domain (same year): Symbolics Computer Corporation'
        },
        {
            date: '08/17/1985',
            img: Brasil,
            desc: 'First domain in Brazil: Companhia Energética de Minas Gerais (Cemig)'
        },
        {
            date: '1986-89 ',
            img: PC,
            desc: 'Increasing popularity of TLDs (Top Level Domain) as website identifiers, increasing user’s security.'
        },
        {
            date: '1990s ',
            img: Mind,
            desc: 'Perception that the domain name causes a mental impact on users, making them relate the product to the URL more easily.'
        },
        {
            date: '1990s ',
            img: Aviao,
            desc: 'Popularization of sector-specific gTLD (generic Top Level Domains) domains, for example: ".app", ".digital", ".club", etc.'
        },


    ]


    return (
        <div className='timeLineContainer'>
            <h1 className='timelineTitle' > Domain History </h1>
            <p className='timelineDescription'> Starting in 1985 with USA Advanced Research Projects Agency (ARPA) up to today, how the domain changed the internet. </p>


            <section className='timeline'>
                {timeline.map(el => (
                    <div className='timelineElements'>
                        <img src={el.img} alt="" />
                        <h2> {el.date} </h2>
                        <p> {el.desc} </p>
                    </div>
                ))}

            </section>


        </div>
    )
}

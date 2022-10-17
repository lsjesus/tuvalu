import React from 'react'
import "./style.css";
import Cards from './Cards';


import Icon from '../../Assets/Info.png'


export default function Timeline() {

    const lista = [{
        title: 'gTDL’s',
        desc: 'Generic top-level domains (gTLDs) are the most popular TLDs, such as "com" for commercial, "net" for network, "edu" for education, and "gov" for government. They are usually three characters long.',
        width: '567px',
        icon: Icon
    },

    {
        title: 'sTDL’s',
        desc: 'Sponsored top-level domains (sTLDs) are managed by private organizations. The best known are "aero", "cat", "coop", "int", "jobs", "mil", "mobi", "tel" and "travel".',
        width: '567px',
        icon: Icon
    },
    {
        title: 'ccTDL’s',
        desc: 'ccTDL means “Country Code Top Level Domain”. Among them, the most popular ccTLDs are "cn" for China, "tk" for Tokelau, "de" for Germany, "uk" for the United Kingdom and "ru" for Russia or even “br” for Brazil. For national or hyperlocal businesses, this is the most suitable domain type because they target a well-defined group of Internet users. ".',
        width: '100%',
        icon: Icon
    },

    ]


    return (
        <div className='TDLContainer'>
            <h1 className='TDLTitle' > TDL Domain Categories </h1>
            <p className='TDLDescription'> All the Domains below were supervisioneted by Internet Assigned Number Authority (IANA), nowadays IANA is part of the Internet Corporation of Assigned Names and Numbers (ICANN), that’s responsable to coordinate the world domains.  </p>

            <div className='cardsContainer'>
                {lista.map(item =>(
                    <Cards title = {item.title} desc = {item.desc} width = {item.width} icon = {item.icon}/>
                ))}
            </div>
        </div>
    )
}

import Logo from '../../Assets/logo.svg'
import Content from '../../Assets/content.png'

import './style.css'

export default function Header() {

    return (

        <section className="headerSection">

            <div className="headerNav">
                <div className="logo">
                    <img src={Logo} />
                    <h1> Tuvalu </h1>
                </div>
                <p> Home </p>
            </div>

            <div className="headerContent">
                <div className='headerContentText'>
                    <p id = 'group'> Group - 1 </p>
                    <h1> Domain Name and Well-Being </h1>
                    <p> How the sale of the internet domain ".tv" has influenced Tuvalu's economy and population well-being?</p>

                    <button className='headerButton'> Explore </button>
                </div>

                <img src={Content} alt="" />

            </div>

        </section>

    )

}
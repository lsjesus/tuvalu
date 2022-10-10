import Logo from '../../Assets/logo.svg'


export default function Header() {

    return (

        <section className="headerSection">

            <div className="headerNav">
                <div>
                    <img src={Logo} />
                    <h1> Tuvalu </h1>
                </div>
                <p> Home </p>
            </div>

            <div className="headerContent">

                <div>
                    <p> Group - 1 </p>
                    <h1> Domain Name, Economy and Well-Being </h1>
                    <p> How the sale of the internet domain ".tv" has influenced Tuvalu's economy and population well-being?</p>

                    <button> Explore </button>
                </div>

                <img src="" alt="" />



            </div>

        </section>

    )

}
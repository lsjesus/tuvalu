import './style.css'
export default function CardMember(props){
    return (
        <>
            <div className='cardMember'>
                <img src={props.img} alt="" />
                <h1> {props.name} </h1>
                <p> {props.number}</p>
            </div>
        </>
    )
}
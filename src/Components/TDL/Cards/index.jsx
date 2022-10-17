import "./style.css";


export default function Cards(props){
    
    return (
            <div style = {{width: props.width}} className = 'cardContainer'> 
                <div>
                    <img src={props.icon} alt="" />
                    <h1> {props.title} </h1>
                </div>
                <p> {props.desc} </p>
            </div>

    )
}
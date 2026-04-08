import "./style.css"

function Propsuser(props){
    return(
        <div className="container       " style={{backgroundColor:"aqua", width:"200px", height:"280px", border:"2px solid red",
            boxShadow:"2px 5px 20px red"
        }}>
            <img id="image" src={props.rasm} style={{width:"160px", height:"160px"}} />
            <p className="text" id="name">Ism: {props.ism}</p>
            <p className="text" id="job">Kasb: {props.kasb}</p>
            <p className="text" id="location">Manzil: {props.manzil}</p>
        </div>
    )
}
export default Propsuser
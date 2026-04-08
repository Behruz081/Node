import './style.css'

function Credit(props){
    return(
        <div className='container'>
            <p className='text'>Egasi: {props.ega}</p>
            <p className='text'>Nomeri: {props.nomer}</p>
            <p className='text'>Amal qilish muddati: {props.muddat}</p>
            <p className='text'>Kompaniyasi: {props.company}</p>
        </div>
    )
}
export default Credit 
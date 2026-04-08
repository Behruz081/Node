function Header(){
    const nomi='Bizning React loyihamiz!'
    return(
        <div style={{width:"100%",backgroundColor:"green",boxShadow:"3px 5px 20px red"}}>
            <ul style={{display:"flex",justifyContent:"space-around"}}>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Header
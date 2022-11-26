export default function JoinRoom () {
    return(
        <form>
            <div className = "key-form">
                <p className = "enter-key">Enter key</p>
                <input className = "key-input" type = "text" placeholder = "000-468"></input>
                <p className =  "key-format">invalid key format</p>
            </div>
            <button className = "large-button">Join Room</button>
        </form>
    )
}
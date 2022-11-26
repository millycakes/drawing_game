export default function JoinRoomForm() {
    return(
        <form>
            <p>Or join an existing room</p>
            <div>
                <p>Enter key</p>
                <input type = "text" placeholder = "000-468"></input>
                <p>invalid key format</p>
            </div>
            <button>Join Room</button>
        </form>
    )
}
<<<<<<< Updated upstream
import CreateRoomForm from "../../components/form/CreateRoomForm";
import JoinRoomForm from "../../components/form/JoinRoomForm";

export default function Home () {
    return(
        <div>
            <h3>DRAW TOGETHER</h3>
            <CreateRoomForm />
            <JoinRoomForm />
=======
import CreateRoom from "./CreateRoom"
import JoinRoom from "./JoinRoom"
import "./style.css"
import logo from "../../assets/logo.png"

export default function Home () {
    return(
        <div className = "home" style={{height: '100vh'}}>
            <div className = "form">
                <img className = "logo" src = {logo}/>
                <CreateRoom />
                <p className = "line-block"><span>or join an existing room</span></p>
                <JoinRoom />
            </div>
>>>>>>> Stashed changes
        </div>
    )
}
import CreateRoomForm from "../../components/form/CreateRoomForm";
import JoinRoomForm from "../../components/form/JoinRoomForm";

export default function Home () {
    return(
        <div>
            <h3>DRAW TOGETHER</h3>
            <CreateRoomForm />
            <JoinRoomForm />
        </div>
    )
}
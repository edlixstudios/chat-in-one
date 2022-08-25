import Container from "../shared/container";
import {motion} from "framer-motion";

// Icons
import teams from "../assets/icons/teams.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import telegram from "../assets/icons/telegram.svg";
import {useNavigate} from "react-router-dom";

export default function MainScreen() {

    const navigate = useNavigate();

    function goToApp(){
        navigate("chat");
    }

    return (
        <Container>
            <div
                className="bg-gradient-to-b from-sky-400 to-emerald-500 bg-clip-text text-transparent text-center text-4xl font-bold leading-normal select-none">
                <h1>One App to rule them all</h1>
                <h1>One App to find them</h1>
                <h1>One App to bring them all</h1>
                <h1>and to the community bind them</h1>
            </div>
            <div className="my-4 text-center text-2xl text-slate-100">
                <h2>With Chat in One you have all your favorite Chats in One Application</h2>
                <div className=" p-2 my-4 overflow-hidden grid grid-cols-8 gap-4 content-center">
                    <img title="Microsoft Teams" className="h-full transition-all hover:scale-150 " src={teams}
                         alt={"teams"}/>
                    <img title="WhatsApp" className="h-full transition-all hover:scale-150 " src={whatsapp}
                         alt={"whatsapp"}/>
                    <img title="Telegram" className="h-full transition-all hover:scale-150 " src={telegram}
                         alt={"telegram"}/>
                </div>
            </div>
            <div className={"text-center p-2"}>
                <button
                    onClick={goToApp}
                    className={"bg-gradient-to-r from-sky-400 to-emerald-500 p-2 font-bold text-sky-50 rounded transition-all hover:scale-110"}
                    title={"Start Journey"}
                >Start Journey
                </button>
            </div>
        </Container>
    )
}
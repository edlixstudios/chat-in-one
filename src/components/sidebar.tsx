import teams from "../assets/icons/teams.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import telegram from "../assets/icons/telegram.svg";
import { emit } from "@tauri-apps/api/event";
import {Chat} from "../screens/chatscreen";
import {RefObject, useRef} from "react";

interface Sidebar{
    openChat:(chat: Chat, width: number)=>void;
}

export default function Sidebar({openChat}:Sidebar){

    const sidebarRef = useRef<HTMLDivElement>(null);

    async function clickedOnTeams(chat:Chat){

        if (!sidebarRef){
            alert("Keine Sidebar");
            return;
        }

        openChat(chat,(sidebarRef.current as HTMLDivElement).offsetWidth);
    }

    return(
        <div className={"bg-slate-100 p-2 min-w-[6rem] flex flex-col items-center justify-between"} ref={sidebarRef} >
            <h1>C1</h1>
            <div className={"flex flex-col gap-3"} >
                <img src={teams} alt={"t"} className={"p-1 rounded hover:bg-slate-300"}  onClick={()=>{clickedOnTeams("teams")}} />
                <img src={whatsapp} alt={"t"} className={"p-1 rounded hover:bg-slate-300"}  onClick={()=>{clickedOnTeams("whatsapp")}} />
                <img src={telegram} alt={"t"} className={"p-1 rounded hover:bg-slate-300"}  onClick={()=>{clickedOnTeams("telegram")}} />
            </div>
            <button className={" text-3xl hover:bg-slate-300"} >...</button>
        </div>
    )
}
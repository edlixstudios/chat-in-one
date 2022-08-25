import teams from "../assets/icons/teams.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import telegram from "../assets/icons/telegram.svg";


export default function Sidebar(){
    return(
        <div className={"bg-slate-100 p-2 min-w-[6rem] flex flex-col items-center justify-between"} >
            <h1>C1</h1>
            <div className={"flex flex-col gap-3"} >
                <img src={teams} alt={"t"} className={"p-1 rounded hover:bg-slate-300"} />
                <img src={whatsapp} alt={"t"} className={"p-1 rounded hover:bg-slate-300"} />
                <img src={telegram} alt={"t"} className={"p-1 rounded hover:bg-slate-300"} />
            </div>
            <button className={" text-3xl hover:bg-slate-300"} >...</button>
        </div>
    )
}
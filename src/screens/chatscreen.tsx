import Sidebar from "../components/sidebar";


export default function ChatScreen(){
    return(
        <div className={"flex h-screen"} >
            <Sidebar />
            <div className={"w-full"} >
                <div className={"h-full flex justify-center items-center text-5xl text-center"} >
                    Click on a Icon to open the Chat you want
                </div>
            </div>
        </div>
    )
}
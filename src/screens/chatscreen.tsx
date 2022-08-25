import Sidebar from "../components/sidebar";
import {useEffect, useMemo, useRef, useState} from "react";
import {listen} from "@tauri-apps/api/event";
import {WebviewWindow, appWindow, LogicalPosition, LogicalSize} from "@tauri-apps/api/window";

export type Chat = "whatsapp" | "telegram" | "teams";

export default function ChatScreen(){

    const [chatRoom, setChatRoom] = useState<string>("");
    let chatScreen: WebviewWindow | null;
    const chatRoomRef = useRef<HTMLDivElement>(null);

    async function openChat(chat: Chat, width: number){

        if (!chatRoom || chat !== chatRoom){

            if (chat !== chatRoom){
                chatScreen?.close();
            }

            switch (chat){
                case "whatsapp":
                    chatScreen = new WebviewWindow("chat",{
                        url:"https://web.whatsapp.com",
                        decorations: false,
                        resizable:false,
                        alwaysOnTop: true,
                        x:(await appWindow.innerPosition()).x + width,
                        y:(await appWindow.innerPosition()).y,
                        height: (chatRoomRef.current as HTMLDivElement).offsetHeight,
                        width: (chatRoomRef.current as HTMLDivElement).offsetWidth,
                        skipTaskbar:true
                    })
                    break;
                    case "telegram":
                    chatScreen = new WebviewWindow("chat",{
                        url:"https://web.telegram.org/k/",
                        decorations: false,
                        resizable:false,
                        alwaysOnTop: true,
                        x:(await appWindow.innerPosition()).x + width,
                        y:(await appWindow.innerPosition()).y,
                        height: (chatRoomRef.current as HTMLDivElement).offsetHeight,
                        width: (chatRoomRef.current as HTMLDivElement).offsetWidth,
                        skipTaskbar:true
                    })
                    break;
                    case "teams":
                    chatScreen = new WebviewWindow("chat",{
                        url:"https://teams.microsoft.com/go",
                        decorations: false,
                        resizable:false,
                        alwaysOnTop: true,
                        x:(await appWindow.innerPosition()).x + width,
                        y:(await appWindow.innerPosition()).y,
                        height: (chatRoomRef.current as HTMLDivElement).offsetHeight,
                        width: (chatRoomRef.current as HTMLDivElement).offsetWidth,
                        skipTaskbar:true
                    })
                    break;
            }

            await appWindow.onCloseRequested(async () => {
                await chatScreen?.close();
            })

            await appWindow.onFocusChanged(async ({payload: focusState}) => {
                await chatScreen?.setAlwaysOnTop(focusState);
            })

            await appWindow.onResized(async ({payload: size}) => {
                console.log("Meine Position",size);
                await chatScreen?.setSize(new LogicalSize(size.width - width, size.height));
            })

            await appWindow.onMoved(async ({payload: position}) => {
                console.log("Meine Position",position);
                await chatScreen?.setPosition(new LogicalPosition(position.x + width+6, position.y + 31));
            })


        }
    }

    return(
        <div className={"flex h-screen"} >
            <Sidebar openChat={openChat} />
            <div className={"w-full"} ref={chatRoomRef} >
                <div className={"h-full flex justify-center items-center text-5xl text-center"} />
            </div>
        </div>
    )
}
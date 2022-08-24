import { ReactElement } from "react"

interface Container{
    children: ReactElement | ReactElement[] | string;
}

export default function Container({children}:Container){
    
    return(
        <div className="w-screen h-screen bg-gradient-to-tr from-slate-900 to-slate-800" >
            <div className="container mx-auto p-4" >
                {children}
            </div>
        </div>
    )
}
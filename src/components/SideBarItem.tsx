import { ReactElement } from "react";

interface SideBarItemProp{
    text:string;
    icon:ReactElement;
    onclick:()=>void
}
export function SideBarItem(props:SideBarItemProp){

    return <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-md" onClick={props.onclick}>
        <div className="p-2">{props.icon}</div>
        <div className="text-sm">{props.text}</div>
        
    </div>
}
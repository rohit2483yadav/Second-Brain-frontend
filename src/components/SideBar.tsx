import { BrainIcon } from "../Icons/BrainIcon";
import { HomeIcon } from "../Icons/HomeIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { YoutubeIcon } from "../Icons/YoutubeIcon";
import { contentType } from "../page/DashBoard";
import { SideBarItem } from "./SideBarItem";


interface sideprops{
    typess?:any,
    whichtype:any
}

export function SideBar({whichtype}:sideprops){

    function youtubeclick(){
        whichtype(contentType.Youtube);
    }

    function twitterclick(){
        whichtype(contentType.Twitter);
    }

    function Homeclick(){
        whichtype(contentType.Home);
    }
    

    return <div className="p-2 h-screen border-r border-slate-200 w-80 position-fixed left-0 top-0">
        <div className="flex items-center gap-3 pt-2">
            <div className="pl-3"><BrainIcon size="lg"></BrainIcon> </div>
            <div className="text-xl font-bold ">Second Brain</div>
        </div>
        <div className="mt-3">
            <SideBarItem onclick={Homeclick} text="Home" icon={<HomeIcon/>} ></SideBarItem>
            <SideBarItem onclick={twitterclick} text="Tweets" icon={<TwitterIcon/>}></SideBarItem>
            <SideBarItem onclick={youtubeclick} text="Videos" icon={<YoutubeIcon/>}></SideBarItem>

        </div>

        
    </div>
}
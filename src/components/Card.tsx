import { Delete } from "../Icons/Delete";
import { PlusIcon } from "../Icons/PlusIcon";
import { LinkIcon } from "../Icons/LinkIcon"
import axios from "axios";
import { BACKEND_URL } from "../config";

interface CardProp {
    title: string;
    link: string;
    type : "twitter" | "youtube";
    date : string;
    time :string;
    id:string;
    onDelete?:any

}





export function Card({title, type, link ,date ,time , id , onDelete}:CardProp){

    
    
    async function ondelete(e:any) {
        const element=e.target.closest('.flex');
        const id = element?.getAttribute('data-id');
        const response = await axios.delete(`${BACKEND_URL}/content/${id}`,{
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        })

        console.log(response);

        if(response){
            onDelete();
        }
    }
    
    return <div  className=" bg-white rounded-md shadow-md border border-gray-200 outline-slate-200 max-w-72 min-w-72 min-h-42 ">
        <div className="flex items-center justify-between mt-4 mx-3">
            <div className="flex items-center">
                <div className="pr-2  text-gray-500"><PlusIcon size="md"></PlusIcon></div>
                <div className="text-sm">
                    {title}
                </div>

            </div>
            
            <div className="flex" data-id={id}>
                <div className="pr-4 text-gray-500"> <a href={link} target="_blank"><LinkIcon size="md"></LinkIcon></a></div>
                <div className=" text-gray-500 cursor-pointer"> <a target="_blank" onClick={ondelete}><Delete size="md"></Delete></a></div>
            </div>
            
        </div>
        <div className="flex justify-between items-center">
            <div className="pl-4 pt-2 text-xs text-gray-500">
                {date}
            </div>

            <div className="pl-4 pr-4 pt-2 text-xs text-gray-500">
                {time}
            </div>

        </div>
        
        <div className="pt-5 px-3 pb-3" >
            {type=="youtube" && <iframe className="w-full" src={link.replace("watch" , "embed").replace("?v=","/")}
             title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
             encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen>
             </iframe>}
            
            {type=="twitter" && <blockquote className="twitter-tweet"><a href={link.replace("x.com","twitter.com")}></a></blockquote>}
 
            
        </div>
    </div>
}
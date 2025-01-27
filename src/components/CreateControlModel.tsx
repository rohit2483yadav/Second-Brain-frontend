import { useRef, useState } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";


interface prop{
    open:any;
    onClose:any
}

enum ContentType{
    Youtube="youtube",
    Twitter="twitter"
}

export function CreateControlModel( {open , onClose}:prop){

    const titleRef=useRef<HTMLInputElement>();
    const linkRef=useRef<HTMLInputElement>();

    const [type , setType]=useState(ContentType.Youtube);

    async function addContent(){
        const title=titleRef.current?.value;
        const link=linkRef.current?.value;

        const data={
            title:title,
            link:link,
            type:type
        }

        await axios.post(BACKEND_URL + "/content", data,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        })

        onClose();

        
    }


    return <div>
        {open && <div className="w-screen h-screen fixed top-0 left-0  bg-slate-400 bg-opacity-60 ">
            <div className="flex items-center justify-center w-full h-full ">
                <span className=" bg-white rounded p-4 w-60 h-60 ">
                     <div className="flex justify-end ">
                        <button onClick={onClose}><CrossIcon size="md"></CrossIcon></button>
                     </div>
                     <div className="mt-3 ">
                        <div className="mb-3"><Input placeholder="Title" type="text" reference={titleRef}></Input></div>
                        <div><Input placeholder="Link" type="text" reference={linkRef}></Input></div>
                     </div>
                     <div className="flex justify-center mt-2 gap-2">
                        
                        <Button text="Youbue" varient={type==ContentType.Youtube ? "primary" : "secondary"} size="sm" onClick={()=>{setType(ContentType.Youtube)}}></Button>
                        
                        <Button text="Twitter" varient={type==ContentType.Twitter ? "primary" : "secondary"} size="sm" onClick={()=>{setType(ContentType.Twitter)}}></Button>

                     </div>
                     <div className="flex justify-center mt-5">
                        <Button  varient="primary" size="sm" text="Submit" onClick={addContent}></Button>
                     </div>

                </span>

            </div>

        </div>}
    </div>
    
}


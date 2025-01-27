import { useState } from "react";

interface InputProp{
    placeholder:string;
    type:string;
    reference?:any;
    onE?:Function
}



export function Input({type,placeholder,reference,onE}:InputProp){
    const [empty,setEmpty]=useState(true);

    function checkEmpty(){
        console.log(reference.current.value);
        if(reference.current.value ==""){
            console.log("if");
            setEmpty(true);
        }
        else{
            console.log("else");
            console.log("e1 ",empty);
            setEmpty(!empty);
            console.log("e2 ",empty);
        }
        
    }


    return <div>
        <input type={type} placeholder={placeholder} className="px-4 py-2 " ref={reference} onKeyDown={(e)=>{
            if(e.key=="Enter"){
                // alert("hello");
                checkEmpty();
                    if(onE!=undefined){
                        console.log("h");
                        console.log(empty)
                        empty ? "":onE() ;
                    }
            }
            
        }} ></input>
    </div>
}
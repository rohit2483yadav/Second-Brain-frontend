import { ReactElement } from "react";

interface ButtonProps{
    varient:"primary" | "secondary";
    size : "sm" | "md" | "lg" ;
    text : string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick : ()=>void;
    fullwidth?: boolean
}



const varientStyle={
    "primary" : "bg-purple-600 text-white",
    "secondary": 'bg-purple-300 text-purple-600'
}

const sizeStyle={
    "lg": "px-8 py-4 text-xl rounded-xl ",
    "md": "px-6 py-2 text-md rounded-md ",
    "sm": "px-2 py-1 text-sm rounded-sm " ,
    
}

export const Button=(props:ButtonProps)=>{

    return <button onClick={props.onClick}  className= {`${varientStyle[props.varient]}   ${sizeStyle[props.size]}   `} >
        <div className="flex items-center">
            {props.startIcon}
            <div className="pl-2 pr-2">
                {props.text}
            </div>
            {props.endIcon}
        </div> 
    </button>
}


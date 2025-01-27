import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const userRef=useRef<HTMLInputElement>();
    const passwordRef=useRef<HTMLInputElement>();
    const navigate=useNavigate();


    function onE(){
        passwordRef.current?.focus();
    }



    async function signup(){
        const username=userRef.current?.value;
        const password=passwordRef.current?.value;
        // console.log(username , password);

        const data={
            username,
            password
        }
        await axios.post(BACKEND_URL + "/signup", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // fetch(BACKEND_URL + "/signup", {
        //     method: 'post',
        //     headers: {
        //         "Content-Type": "application/json",
        //       },
        //     body: JSON.stringify(data)
        //    });
        alert("you have signedup")
        navigate("/signin");
        
    }

    return <div className="h-screen w-screen flex justify-center items-center bg-purple-500">
        <div className="bg-white  w-80 h-80 rounded-md shadow-md">
            <div className="mt-6 mb-1 flex justify-center font-bold">
                <div className="text-xl">Sign up</div>
            </div>
            <div className="mt-1 flex justify-center">
                <div className="text-xs">Sign up to continue</div>
            </div>

            <div className="mt-5 flex justify-center ">
                <Input type="text" placeholder="Username" reference={userRef} onE={onE}></Input>
                
            </div>
            <div className="mt-5 flex justify-center  ">
                <Input type="password" placeholder="Password" reference={passwordRef}></Input>
            </div>

            <div className="flex justify-center mt-5 ml-3 mr-3">
                <Button varient="primary" size="md" text="Sign up" onClick={signup}></Button>
            </div>
            
        </div>
    </div>
}
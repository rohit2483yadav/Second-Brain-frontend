import axios from "axios";
import { BACKEND_URL } from "../config";


export async function shareBrain(){
    const response=await axios.post(BACKEND_URL + "/brain/share",{
        share:true
    },{
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    })
    const shareURL=`http://localhost:3000/brain/${response.data.hash}`;
    alert(shareURL)
}
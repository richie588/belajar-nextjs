"use client"
import { useState } from "react";

export default function AdminProductPage(){
    const [status, setStatus] = useState("");
    const revalidate = async ()=>{
        const res = await fetch("http://localhost:3000/api/revalidate?tag=product&secret=123",{
         method : "POST",
        }
        );
        if(!res.ok){
            setStatus("revalidate failed")
        }else{
            const response = await res.json();
            if(response.revalidate){
                setStatus("revalidate success");
            }
        }
    }; 

    return(
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-4">
    <h1>{status}</h1>
        <button className="p-3 m-3 text-white bg-black rounded-sm" onClick={()=> revalidate()}>Revalidate</button>
    </div>
    )
}
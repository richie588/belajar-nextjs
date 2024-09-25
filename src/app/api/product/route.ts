import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name : "sepatu",
        price : "100000",
    },
    {
        id: 2,
        name : "baju",
        price : "900000",
    },
];

export async function GET(request : NextRequest){
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    if (id){
        const detailProduct = data.find((item)=> item.id === Number(id))
        if (detailProduct){
            return NextResponse.json({
            status: 200, 
            message: "Success",
            data : detailProduct,
        });     
    } return NextResponse.json({
        status: 404, 
        message: "not found",
        data : {},
    });   
    
    }    return NextResponse.json({status: 200, message: "success", data})
}

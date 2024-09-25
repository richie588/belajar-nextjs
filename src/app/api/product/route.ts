import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title : "sepatu",
        price : "100000",
        image : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDlubkP07teUPiSYrFJaNuOX71RuHpoBBNSROx-WK74qmIAKQS502eULRMU5MyLipu8wFG9cSc8CxtNfjxBT8CicWdFJW31TLz6houO8s&usqp=CAE"
    },
    {
        id: 2,
        title : "baju",
        price : "900000",
        image : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7nJCmPn_nlt1MThULp50E8aH7iB58Cq-hGrLNW4oNyIkCwnuASTefJzUMG2cw6O9g6NXoSaPUfEjjSeftq289DT999VvIZ-2AXAo-bGVACWzE1SnPlKS1O90&usqp=CAE"
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

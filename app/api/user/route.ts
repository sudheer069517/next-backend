import { NextRequest, NextResponse } from "next/server";
import  client  from "@/db"

export async function GET(){
    const userData = await client.user.findFirst();
    return Response.json({
        username : userData?.username,
        name : "sudheer kavuri"
    });
}

export async function POST(req:NextRequest){
    
    const body = await req.json();
    console.log("req body is " + body);
    try{
        await client.user.create({
            data :{
                username : body.username,
                password : body.password
            }
        })

        return Response.json({
            message : "Signup successful"
        })
        }catch(e){
            console.log(e);
            return NextResponse.json({
                message : "Error while signing up"
            },{
                status : 411
            })
    }
    
}
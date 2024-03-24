import client from "@/db"
import { NextResponse } from "next/server";

export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails?.name}
                </div>
                
                {userDetails?.username}
            </div>
        </div>
    </div>
  );
}

async function getUserData(){
  const userData = await client.user.findFirst();
    return {
        username : userData?.username,
        name : "sudheer kavuri"
    }
}

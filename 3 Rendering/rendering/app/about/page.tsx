import { cookies } from "next/headers"

export default function About(){
    console.log("About component")
    const cookieStore = cookies().get('theme')
    console.log(cookieStore)
    return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}
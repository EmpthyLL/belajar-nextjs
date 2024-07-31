"use client"
import { useState } from "react"

export default function Dashboard(){
    const [name, setName] = useState('')
    console.log("Dashboard component")
    return (<div>
        <h1>Dashboard Page</h1>
        <input type="text" name="nama"value={name} onChange={(e) => setName(e.target.value)}/>
        <p>Hello, {name}!</p>
    </div>)
}
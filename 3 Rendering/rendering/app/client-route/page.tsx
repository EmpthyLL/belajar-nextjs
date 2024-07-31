"use client"

import { serverSideFunction } from "@/utils/server-utils"

export default function ClientRoute(){
    console.log('Client Route')
    const result = serverSideFunction()
    return <>
        <h1>Client Route Page</h1>
        <p>{result}</p>
    </>
}
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoute(){
    console.log('Server Route')
    const result = serverSideFunction()
    return <>
        <h1>Server Route Page</h1>
        <p>{result}</p>
    </>
}
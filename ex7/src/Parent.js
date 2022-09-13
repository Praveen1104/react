import { useState } from "react"
import Child from "./Child"

export default function Parent() {
    const [data, setData] = useState("");

    const child = (childData) => {
        setData(childData)
    }




    return (
        <div>
            <h3>Passing data from parent to child</h3>
            {/* <Child data="Hi from Parent" /> */}
            <Child childToParent={child} />
            <h1>{data}</h1>
        </div>
    )
}
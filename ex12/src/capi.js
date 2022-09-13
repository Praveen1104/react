 import {Component} from 'react';
 class Ap extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        const re={
            method:"POST",
            header:{"Content-type":"application/json"},
            body:JSON.stringify({name:"praveen"}),
        }
        fetch("https://reqres.in/api/posts",re)
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    }

    render(){
        return (
            <div>
                <h1>Data Retrieval</h1>
            </div>
        )
    }
   
 }

 export default Ap;


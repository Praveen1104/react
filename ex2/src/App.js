
import './App.css';
import Card from './card';


let data=[{
  name:"praveen",
  email:"impraveenbosco@gmail.com",
  skill:"fed"},
  {
    name:"bosco",
    email:"impraveenbosco@gmail.com",
    skill:"bed"},
    {
      name:" bosco praveen",
      email:"impraveenbosco@gmail.com",
      skill:"fed"}
];
let v1=data.map((val)=>{
   return <Card da={val}/>
})
function App() {
  return (
    <div className="App">
     {v1}
    
    </div>
  );
}
let skills=props.data.skills.map((ele)=>{
  return <Skill skil={ele} />
})
function Skill(props){
  let style={
      backgroundColor:"red",
      padding:"50px",
      color:"white"
  }
  return (
      <span style={style}>{props}</span>
  )
}
export default App;

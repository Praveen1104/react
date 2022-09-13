function Card(props){
    let ds={
        border:"1px solid black",
        margin:"10px",
        width:"40%"
    }
    return(
        <div style={ds}>
        <h2>{props.da.name}</h2>
        <h4>{props.da.email}</h4>
        </div>
    )
}
export default Card;
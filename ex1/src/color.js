function Color(props){
    let bs={
        height:"30px",
        width:"100%",
        backgroundColor:props.bgcolor
    }
    return(
        <div style={bs}> I m Box

        </div>
    );
}
export default Color;
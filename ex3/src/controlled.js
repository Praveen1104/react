import { Component, createRef } from "react";

class Control extends Component {
  constructor(props) {
    super(props);
    this.val = createRef();
    this.state = {
      value: " ",
    };
    
  
    }
     subm(e){
    e.preventDefault()
  }
  change(e){
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.subm}>
        <input ref={this.val} type="text" name="" id="" value={this.state.value} onChange={this.change}/>
        <input type="submit"   value="Submit" />
      </form>
    );
  }
}
export default Control;

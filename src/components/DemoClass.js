import { Component } from "react";

class Counter1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 20,
        };
    }
    componentDidMount(){
        console.log("Component mounted!");
    }
    componentDidUpdate(){
        console.log("Component updated!");
    }
    componentWillUnmount(){
        console.log("Component unmounted - cleanup!");
    }
    render(){
        return(
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={() => this.setState({count : this.state.count - 2})}>Decrease</button>
            </div>
        )
    }
}

export default Counter1
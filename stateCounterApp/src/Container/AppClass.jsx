import React,{Component} from 'react';

class CounterApp extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

 increase(){
this.setState(
    {
    count:this.state.count+1}
,()=>{console.log(this.state.count)})
    }

decrease(){
    this.setState(
        {
            count:this.state.count-1
        },()=>{console.log(this.state.count)}
    )
}

   reset(){
    this.setState((prevState)=>({
        count:0
    }))
   }
    render(){
        return(<div>
           <h1 className='CounterApp'>Counter App</h1>
            <br/>
            <h1 className='value'>{this.state.count}</h1>
            <button onClick={()=>this.increase()}id='increament'>+</button>
            <button onClick={()=>this.decrease()} id='decrement' >-</button>
            <button id='reset' onClick={()=>this.reset()}>Reset</button>
        </div>)
    }
   
}
export default CounterApp;
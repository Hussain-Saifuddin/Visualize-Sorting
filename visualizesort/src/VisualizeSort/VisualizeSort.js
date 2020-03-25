import React from 'react';
import '../VisualizeSort/VisualizeSort.css';
import {BubbleSort} from './Sorting';

export default class VisualizeSort extends React.Component
{ 
    constructor(props)
    {
        super(props);
        this.state={
            array : [],
            start : 0,
        };
    }

    componentDidMount()
    {
        this.newArray();
        clearTimeout(this.state.start);
        
    }

    newArray = () =>
    {
        clearTimeout(this.state.start);
        const arr = [];
        for(let i=0;i<(window.innerWidth/5);i++)
        {
            arr.push(Math.floor(10 + Math.random() * ((window.innerHeight-130) - 10)));            
        }
        this.setState({array : arr});
    }

    bubble = () =>
    {
        clearTimeout(this.state.start);
        let i = -1;
        this.state.start = setInterval(() => {
            
            let j = 0;
            let temp = 0;
            const array1 = this.state.array;
            for(i=0;i !== this.state.array.length-2;i++)
            {
                const array = BubbleSort(this.state.array);
                while(j < array.length-1)
                {
                    temp = array1[array[j]];
                    array1[array[j]] = array1[array[j+1]];
                    array1[array[j+1]] = temp;  
                    this.setState({array : array1});
                    j=j+2; 
                }  
            }
            }, 1*0.25);
        
    }
    
    

    render()
    {
        const {array} = this.state;
        return(
            
            <div className="wrapper">
                <div className="Heading"><h1>Visualization of Sorting Algorithm</h1></div>
                <div className="Navbar">
                    <h4>Select An Algorithm</h4>
                    <div className="buttons">
                        <button onClick={this.merge}>Merge</button>
                        <button onClick={this.insertion}>Insertion</button>
                        <button onClick={this.bubble}>Bubble</button>
                        <button>Selection</button>
                        <button>Quick</button>
                        <button onClick={this.newArray}>New Array</button>
                    </div>
                </div>
                <div className="wrapper1">
                    {array.map((value,idx) => (
                        <div className="bars" key={idx} style = {{height:`${value}px`}}></div>
                    ))}
                </div>
                
            </div>
        );
    }
}
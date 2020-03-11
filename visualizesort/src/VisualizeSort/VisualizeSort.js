import React from 'react';
import '../VisualizeSort/VisualizeSort.css';

export default class VisualizeSort extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            array : []
        };
    }

    componentDidMount()
    {
        this.newArray();
    }

    newArray = () =>
    {
        const arr = [];
        for(let i=0;i<(window.innerWidth/5);i++)
        {
            arr.push(Math.floor(10 + Math.random() * ((window.innerHeight-130) - 10)));
        }
        this.setState({array : arr});
    }

    
    bubble = () =>
    {
        const {array} = this.state;
        console.log(array);
        for(let i =0 ;i<array.length;i++)
        {
            for(let j =0;j<array.length;j++)
            {
                if(array[j] > array[j+1])
                {
                    const temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    this.setState({array : array});
                }
            }
        }
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
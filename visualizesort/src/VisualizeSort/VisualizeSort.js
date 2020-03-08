import React, { Component } from 'react';
import { render } from '@testing-library/react';
import '../VisualizeSort/VisualizeSort.css'

export default class VisualizeSort extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { array : []};
    }

    //componentDidMount()
    //{
     //   this.genarray();
   // }
    render()
    {
        return(
            <div>
                <h3>Sorting Algorithm Visualization.</h3>
                <div className = "Navbar">
                    <h6>Select Sorting Algorithm</h6>
                    <button onClick={this.bubble}>Bubble Sort</button>
                    <button onClick={this.insertion}>Insertion Sort</button>
                    <button onClick={this.selection}>Selection Sort</button>
                    <button onClick={this.quick}>Quick Sort</button>
                    <button onClick={this.merge}>Merge Sort</button>
                    <button onClick={this.genarray}>Generate New Array</button>


                </div>
            </div>
        );
    }

    genarray = ()=>
    {
        this.state.array.length = 0;
        console.log(this.state.array);
        for(let i=0;i<100;i++)
        {
            this.state.array.push(100);
        }
        console.log(this.state.array);
        console.log(this.state.array.length);
    }

    bubble = ()=>
    {

    }

    insertion = ()=>
    {

    }

    quick = ()=>
    {

    }

    merge = ()=>
    {

    }

    selection = ()=>
    {

    }
    
}
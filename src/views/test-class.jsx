import React from 'react';

export default class TestC extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nums: [1,2,3,4]
        }
        this.increase = this.increase.bind(this)
    }

    increase(){
        let newNums = this.state.nums
        newNums[0] = this.state.nums[0] + 1
        this.setState({nums: newNums})
    }

    render(){
        return (
            <div>
                <button onClick={() => this.increase()}>+</button>
                <div>{this.state.nums.map(each => <div>{each}</div>)}</div>
            </div>
        )
    }
}
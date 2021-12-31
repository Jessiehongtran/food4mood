import { useState } from 'react';


const TestF = () => {
    const [nums, setNums] = useState([1,2,3,4])

    const increase = () => {
        let newNums = nums
        newNums[0] = nums[0] + 1
        setNums([...newNums])
    }

    console.log('out', nums)

    return (
        <div>
            <button onClick={() => increase()}>+</button>
            <div>{nums.map(each => <div>{each}</div>)}</div>
        </div>
    )
}

export default TestF;
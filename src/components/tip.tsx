import { timeStamp } from 'console';
import React, { useState } from 'react';


const TipInput = (props: any) => {

    const [tip, setTip] = useState("")

    console.log('props in TipInput', props)

    const handleChangeTip = (e: any) => {
        setTip(e.target.value)
    }
 
    return (
        <div style={{ width: '100%', display: 'flex' }}>
            <input 
                onChange={(e) => handleChangeTip(e)}
                placeholder="Tips you want to contribute..." 
                style={{ height: '40px', borderRadius: '8px', minWidth: '300px', paddingLeft: '20px' }}/>
            <button 
                onClick={() => {
                    props.setTipsFunc([...props.tips, tip])
                    props.setShareFunc(false)
                }}
                style={{ marginLeft: '10px', borderRadius: '8px', padding: '0 25px', backgroundColor: '#FFE62D' }}>Share</button>
        </div>
    )
}

export default TipInput;
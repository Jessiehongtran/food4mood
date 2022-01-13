import { foods } from '../data/foods';
import { useParams } from 'react-router';
import '../styles/foodDetail.css'
import { useState } from 'react';
import TipInput from '../components/tip';

const FoodDetail = () => {
    const [ shareTip, setShareTip ] = useState(false)

    const { id } = useParams()

    const [ tips, setTips ] = useState(foods[parseInt(id!)].tips)

    const foodToDisplay = foods.filter(food => food.id === parseInt(id!))[0]

    const functions = {
        setShareFunc: setShareTip,
        setTipsFunc: setTips
    }

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '5% 0'}}>
            <div className="wrapper" style={{ width: '70%' }}>
                <div className="title" style={{ textAlign: 'left', marginBottom: '30px', fontSize: '34px', color: '#C4200D'}}>
                    {foodToDisplay.name}
                </div>
                <div className="food-content" style={{ display: 'flex' }}>
                    <div className="food-picture" style={{  marginRight: '80px', width: '100%', maxWidth: '400px'}}>
                        <img alt={foodToDisplay.name} src={foodToDisplay.image} style={{ width: '100%'}} />
                    </div>
                    <div className="content" style={{ color: '#636060', lineHeight: '32px', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                        <div className="session" style={{ textAlign: 'left' }}>
                            <div className="title" style={{ fontSize: '24px', color: '#424141'}}>
                                Ingredients
                            </div>
                            <ul className="ingredient-list">
                                {foodToDisplay.ingredients.map(each => <><label><input type="checkbox"  />{each}</label><br/></>)}
                            </ul>
                        </div>
                        <div className="session" style={{ marginTop: '30px', textAlign: 'left' }}>
                            <div className="title" style={{ fontSize: '24px', color: '#424141'}}>
                                How to make
                            </div>
                            <ul className="make-list">
                                {foodToDisplay.instructions.map(each => <li>{each}</li>)}
                            </ul>
                        </div>
                        <div className="session" style={{ marginTop: '30px', textAlign: 'left' }}>
                            <div className="title" style={{ fontSize: '24px', color: '#424141'}}>
                                Tips by viewers
                            </div>
                            <ul className="make-list">
                                {tips.map(each => <li>{each}</li>)}
                            </ul>
                        </div>
                        {!shareTip
                        ? <button onClick={() => setShareTip(true)} style={{ fontFamily: 'Marker Felt', cursor: 'pointer', padding: '12px 30px', borderRadius: '8px', maxWidth: '150px', backgroundColor: '#FFE62D'}}>Share tips</button>
                        : <TipInput {...functions} tips={tips} />}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FoodDetail;

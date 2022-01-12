import { foods } from '../data/foods';
import { useParams } from 'react-router';
import '../styles/foodDetail.css'

const FoodDetail = () => {

    const { id } = useParams()

    const foodToDisplay = foods.filter(food => food.id === parseInt(id!))[0]

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '5% 0'}}>
            <div className="wrapper" style={{ width: '70%' }}>
                <div className="title" style={{ textAlign: 'left', marginBottom: '30px', fontSize: '34px', color: '#C4200D'}}>
                    {foodToDisplay.name}
                </div>
                <div className="food-content" style={{ display: 'flex' }}>
                    <div className="food-picture" style={{  marginRight: '80px', width: '100%', maxWidth: '400px'}}>
                        <img src={foodToDisplay.image} style={{ width: '100%'}} />
                    </div>
                    <div className="content" style={{ color: '#636060', lineHeight: '32px' }}>
                        <div className="ingredients" style={{ textAlign: 'left' }}>
                            <div className="title" style={{ fontSize: '24px', color: '#424141'}}>
                                Ingredients
                            </div>
                            <ul className="ingredient-list">
                                {foodToDisplay.ingredients.map(each => <><label><input type="radio"  style={{borderRadius: 0, width: '16px', height: '16px', boxSizing: 'border-box', appearance: 'none', outline: '1px solid #333', marginRight: '10px' }} />{each}</label><br/></>)}
                            </ul>
                        </div>
                        <div className="make" style={{ marginTop: '30px', textAlign: 'left' }}>
                            <div className="title" style={{ fontSize: '24px', color: '#424141'}}>
                                How to make
                            </div>
                            <ul className="make-list">
                                {foodToDisplay.instructions.map(each => <li>{each}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodDetail;

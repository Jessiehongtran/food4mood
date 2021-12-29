import { useParams } from 'react-router-dom';
import { foods } from '../data/foods';
import { emoji } from '../data/emoji';

export default function Foods () {

    const { id } = useParams()

    const foodsToRender = foods.filter(food => food.mood === parseInt(id!) )
    
    const emojiToRender = emoji.filter(each => each.id === parseInt(id!))[0]

    return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {foodsToRender.map(food => 
                    <div style={{ width: '300px', margin: '20px'}}>
                        <img src={food.image} style={{ width: '100%', outline: '1px solid #F0F8FF', outlineOffset: '-10px' }} />
                        <div style={{ display: 'flex', backgroundColor: 'orange', alignItems: 'center', justifyContent: 'space-between', marginTop: '-3px'}}>
                            <div style={{ backgroundColor: 'red', padding: '10px', height: '100%' }}>{food.caption}</div>
                            <img src={emojiToRender.image} style={{ width: '30px', marginRight: '10px' }} />
                        </div>
                    </div>)}
            </div>
        )
    
}
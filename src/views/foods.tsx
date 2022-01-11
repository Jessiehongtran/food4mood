import { useParams, useNavigate } from 'react-router-dom';
import { foods } from '../data/foods';
import { emoji } from '../data/emoji';
import Nav from '../components/nav';
import Menu from '../components/menu';

export default function Foods () {

    const { id } = useParams()

    const navigate = useNavigate()

    const foodsToRender = foods.filter(food => food.mood === parseInt(id!) )
    
    const emojiToRender = emoji.filter(each => each.id === parseInt(id!))[0]

    return (
            <div className="container" style={{ display: 'flex', alignItems: 'center', margin: 0, flexDirection: 'column', width: '100%'}}>
                <Nav />
                <div className="wrapper" style={{ width: '80%' }}>
                    <div className="menu" style={{ marginLeft: '-12.5%' }}>
                        <Menu />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {foodsToRender.map(food => 
                            <div style={{ width: '315px', margin: '20px'}}>
                                <div style={{maxWidth: '315px', maxHeight: '200px', overflow: 'hidden',outline: '1px solid #F0F8FF', outlineOffset: '-10px',  }}>
                                    <img src={food.image} style={{ width: '100%',  verticalAlign: 'center' }} onClick={() => navigate(`/food/detail/${food.id}`)}/>
                                </div>
                                <div style={{ display: 'flex', backgroundColor: 'orange', alignItems: 'center', justifyContent: 'space-between', height: '50px'}}>
                                    <div style={{ backgroundColor: 'red', padding: '8px', height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center' }}>{food.caption}</div>
                                    <img src={emojiToRender.image} style={{ width: '30px', marginRight: '10px', marginLeft: '10px',  backgroundColor: 'lightgoldenrodyellow', borderRadius: '50%' }} />
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    
}
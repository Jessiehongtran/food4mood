import React, {useState} from 'react';
import { emoji } from '../data/emoji';
import { useNavigate } from 'react-router-dom';

interface FoodObject {
    id: number,
    image: string,
    name: string,
    width: number
}

const  Home = () => {
    const [emojiList, setEmojiList] = useState(emoji)

    const navigate = useNavigate()

    const reverseArray = (arr: FoodObject[]) => {
        for (let i = 0; i < arr.length/2; i++){
            let el = arr[i]
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = el
        }
        return arr
    }

    const handleMouseOver = (id: number) => {
        emojiList.forEach((item: FoodObject) => {
            if (item.id === id){
                item.width += 20
            }
        });
        setEmojiList([...emojiList])
    }

    const handleMouseLeave = (id: number) => {
        emojiList.forEach((item: FoodObject) => {
            if (item.id === id){
                item.width = 80
            }
        });
        setEmojiList([...emojiList])
    }

    const handleEmojiClick = (id: number) => {
        
        navigate(`/foods/${id}`)
        // this.props.history.push({
        //     pathname: '/foods',
        //     state: {
        //         emojiId: id
        //     }
        // })
    }


    return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
                <div>
                    <div style={{ marginBottom: '40px' }}>Hey, how are you feeling today?</div>
                    <div style={{ display: 'flex', height: '100px' }}>
                        {emojiList.length > 0
                        ? reverseArray(emojiList).map(each => 
                        <div style={{ width: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img 
                                src={each.image} 
                                onMouseOver={() => handleMouseOver(each.id)}
                                onMouseLeave={() => handleMouseLeave(each.id)}
                                onClick={() => handleEmojiClick(each.id)}
                                style={{ width: `${each.width}px`, marginRight: '0px', cursor: 'pointer' }}
                            />
                        </div>)
                        : null}
                    </div>
                </div>
            </div>
    )
}

export default Home;
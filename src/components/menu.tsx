import { useState } from 'react';
import { emoji } from '../data/emoji';
import { useNavigate } from 'react-router-dom';

const Menu = () => {

    const [emojiList, setEmojiList] = useState(emoji)

    const navigate = useNavigate()

    const showEmoji = (id: number) => {
        const copiedEmojiList = emojiList
        copiedEmojiList.forEach(each => each.id === id ? each.show = true : false)
        setEmojiList([...copiedEmojiList])
    }

    const hideEmoji = (id: number) => {
        const copiedEmojiList = emojiList
        copiedEmojiList.forEach(each => each.show = false)
        setEmojiList([...copiedEmojiList])
    }

    const showFoods = (id: number) => {
        navigate(`/foods/${id}`)
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#C4200D', width: '100px', alignItems: 'center', padding: '20px 5px', position: 'fixed' }}>
            {emoji.map(each => 
            <div style={{ position: 'relative' }}>
                <img 
                    src={each.image} 
                    onMouseOver={() => showEmoji(each.id)}
                    onMouseLeave={() => hideEmoji(each.id)}
                    onClick={() => showFoods(each.id)}
                    style={{ width: '50px', margin: '5px', backgroundColor: '#F6F5F5', borderRadius: '50%' }} 
                />
                {each.show? 
                    <div style={{ backgroundColor: '#000', color: '#fff', padding: '5px 8px', borderRadius: '4px', position: 'absolute', top: '-20px', left: '35px' }}>{each.name}</div>
                    : null}
            </div>
            )}
        </div>
    )
}

export default Menu;
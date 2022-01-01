import { useState } from 'react';
import { emoji } from '../data/emoji';

const Menu = () => {

    const [emojiList, setEmojiList] = useState(emoji)

    const showEmoji = (id: number) => {
        
        
    }

    const hideEmoji = (id: number) => {
       
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#C4200D', width: '100px', alignItems: 'center', padding: '20px 5px', position: 'fixed' }}>
            {emoji.map(each => 
            <div style={{ position: 'relative' }}>
                <img 
                    src={each.image} 
                    onMouseOver={() => showEmoji(each.id)}
                    onMouseLeave={() => hideEmoji(each.id)}
                    style={{ width: '50px', margin: '5px', backgroundColor: '#F6F5F5', borderRadius: '50%' }} 
                />
                <div style={{ backgroundColor: '#000', color: '#fff', padding: '5px 8px', borderRadius: '4px', position: 'absolute', top: '-20px', left: '35px' }}>{each.name}</div>
            </div>
            )}
        </div>
    )
}

export default Menu;
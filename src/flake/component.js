import './style.scss';
import {useState} from 'react'

//HW1: Make sure the component detects the moment it reaches the bottom
//HW2: When the component reaches the bottom it should remove itself from the React DOM
const Flake = ({
        size  = 0,
        color = 0,
        top   = 0,
        left  = 0,
    }) => {

    const [_top, setTop] = useState(top)
    setTimeout(() => {
        setTop(_top + 10)
        console.log("update executed")
    }, 500)

    const style = {
        '--size': `${size}px`,
        '--color': color,
        '--top': `${_top}%`,
        '--left': `${left}%`,
    }

    return (
        <div 
            style={style} 
            className="flake"
        >
        </div>
    )
}

export default Flake
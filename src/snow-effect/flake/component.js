import './style.scss';

//HW1: Make sure the component detects the moment it reaches the bottom
//HW2: When the component reaches the bottom it should remove itself from the React DOM
const Flake = ({
        size  = 0,
        color = 0,
        top   = 0,
        left  = 0,
    }) => {
        
    const style = {
        '--size': `${size}px`,
        '--color': color,
        '--top': `${top}%`,
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
import './style.scss'
import Flake from '../flake/component'
import { useState, useEffect } from 'react'
import { randInt, randColor } from '../../helpers/generators';

const Snow = ({qty}) => {

    let color = 'rgb(50, 50, 255)'
    let [flakes, setFlakes] = useState([
        <Flake key={1} size={20} top={0} color={color} />,
        <Flake key={2} size={30} top={5} left={50} color={color} />,
    ])

    const TOP_LIMIT = 80
    const FLAKES_COUNT_LIMIT = 20

    useEffect(() => {
        setTimeout(() => {
            setFlakes(


                [
                    ...flakes,
                    ...new Array(FLAKES_COUNT_LIMIT-flakes.length)
                        .fill()
                        .map(() => <Flake 
                            key={1} 
                            size={20} 
                            top={randInt(0,35)} 
                            left={randInt(0,100)} 
                            color={randColor()} />

                        )
                ]
                    .filter(flake => flake.props.top < TOP_LIMIT)
                    .map(
                        flake => <Flake 
                            key={flake.props.key} 
                            size={flake.props.size} 
                            top={flake.props.top + 1} 
                            left={flake.props.left} 
                            color={flake.props.color} />
                    )
            )
           
        }, 40)
    })

    return (
        flakes
    )
}

export default Snow
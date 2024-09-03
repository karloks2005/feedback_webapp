import { useState } from "react"

function RatingSelect({select}){
    const [selected, setSelected] = useState(5)
    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (
        <ul className='rating'>
            <li>
                <input 
                    type='radio' 
                    id='num1'
                    value='1' 
                    checked={selected === 1} 
                    onChange={handleChange}
                />
                <label htmlFor='num1' >1</label>
            </li>
            <li>
                <input 
                    type='radio' 
                    id='num2'
                    value='2' 
                    checked={selected === 2} 
                    onChange={handleChange}
                />
                <label htmlFor='num2'>2</label>
            </li>
            <li>
                <input 
                    type='radio' 
                    id='num3'
                    value='3' 
                    checked={selected === 3} 
                    onChange={handleChange}
                />
                <label htmlFor='num3'>3</label>
            </li>
            <li>
                <input 
                    type='radio' 
                    id='num4'
                    value='4' 
                    checked={selected === 4} 
                    onChange={handleChange}
                />
                <label htmlFor='num4'>4</label>
            </li>
            <li>
                <input 
                    type='radio' 
                    id='num5'
                    value='5' 
                    checked={selected === 5} 
                    onChange={handleChange}
                />
                <label htmlFor='num5'>5</label>
            </li>
        </ul>
    )
}

export default RatingSelect
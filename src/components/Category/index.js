import './index.css'
import Label from "../Label"
import { useState } from 'react'

const Category = ({
    onSelect = function () { },
    defaultSelected,
    categories = []
}) => {
    const [selected, setSelected] = useState(defaultSelected)
    return (

        <div
            className="category"
        >
            {categories.map(({ label, value }) => {
                return (
                    <div
                        key={label}
                    >
                        <Label
                            label={label}
                            value={value}
                            handleClick={onSelect}
                            selected={label===selected}
                            setSelected={setSelected}
                        />
                    </div>
                )
            })}
        </div>
    )
}


export default Category
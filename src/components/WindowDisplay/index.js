import './index.css'

const WindowDisplay=({ children, style }) => {
    return(
    <div
        className="paper"
        style={{
            ...style
        }}
    >
        {children.map(child=>{
            return(
                <div
                    className='paper-child'
                    key={child.key||Math.random()}
                >
                    {child}
                </div>    
            )
        })}
    </div>
)}

export default WindowDisplay;
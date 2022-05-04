import './index.css'
import Card from '../Card'

const WindowDisplay = ({
    children,
    height = "100%",
    width = "100%",
}) => {
    return (
        <Card
            height="100%"
            width="100%"
        >
            <div
                className="paper"
                style={{
                    height,
                    width,
                }}
            >
                {children.map(child => {
                    return (
                        <div
                            className='paper-child'
                            key={child.key || Math.random()}
                        >
                            {child}
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}

export default WindowDisplay;
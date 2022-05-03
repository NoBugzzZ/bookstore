const Card = ({
    height = "400px",
    width = "300px",
    children
}) => (
    <div
        className="card"
        style={{
            height,
            width,
        }}
    >
        {children}
    </div>
)
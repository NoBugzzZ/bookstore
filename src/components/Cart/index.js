import Card from "../Card";
import './index.css'

const Cart = ({ children }) => (
  <Card
    height="100%"
    width="100%"
  >
    <p
      style={{
        fontWeight: 'bold',
        padding: "10px 10px",
        margin: "0"
      }}
    >item</p>
    <hr
      style={{
        border: "1px solid rgba(166,166,166,0.5)",
        margin: "0"
      }}
    />
    <div
      className="items"
    >
      {children.map(child => {
        return (
          <>
            {child}
            <hr
              style={{
                border: "1px solid rgba(166,166,166,0.5)",
                margin: "0"
              }}
            />
          </>
        )
      })}
    </div>
    <div
    style={{
      padding:"20px"
    }}
    >
      <p
        className="p"
      >
        <span className="left span bold-span">Tax</span>
        <span className="right span">12%</span>
      </p>
      <p
        className="p"
      >
        <span className="left span bold-span">Discount</span>
        <span className="right span">0%</span>
      </p>
      <p
        className="p"
      >
        <span className="left span bold-span">Sub Total</span>
        <span className="right span">$215</span>
      </p>
      <p
        className="p"
      >
        <span className="left span bold-span">Total</span>
        <span className="right span">$147.9</span>
      </p>
      <button>cancle</button>
      <button>charge</button>
    </div>
  </Card>
)

export default Cart;
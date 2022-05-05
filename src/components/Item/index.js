import './index.css'

const Item = ({ image, name, amount }) => (
  <div
    className='item'
  >
    <img
      src={image}
      alt="this is a book"
      height="100px"
      width="90px"
      style={{
        float: "left"
      }}
    />
    <div
      className='item-title-wrap'
    >
      <span
        className='item-title'
      >
        {name}
      </span>
    </div>
    <div
      className='amount'
    >
      <span
      >
        {amount}
      </span>
    </div>

  </div>
)

export default Item;
import './index.css'

const Item = ({ image, name }) => (
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
    <span
    className='title'
    >
      {name}
    </span>
  </div>
)

export default Item;
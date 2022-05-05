import { useState, useEffect } from "react";
import { WindowDisplay, Book, Cart, Item } from "./components";
import './App.css'
import { getProducts } from "./requests";

function App() {

  // const [items, setItems] = useState([])
  const [products, setProducts] = useState([])
  const [productsToCart, setProductsToCart] = useState([])

  useEffect(() => {
    // getCart(0).then(res => {
    //   setItems(res?.items || []);
    // });
    getProducts().then(res => {
      setProducts(res)
    })
  }, [])

  function handleAddBtn(product) {
    return () => {
      setProductsToCart(prev => {
        const findIndex = prev.findIndex(e => e.product.id === product.id);
        const newData = [...prev];
        if (findIndex > -1) {
          newData.splice(findIndex, 1, {
            amount: prev[findIndex].amount + 1,
            product
          })
        } else {
          newData.push({
            amount: 1,
            product
          })
        }
        return newData
      })
    }
  }

  function handleCancelBtn() {
    setProductsToCart([])
  }

  function handleChargeBtn(charge) {
    alert(charge)
    setProductsToCart([])
  }

  return (
    <div className="App">
      <div
        className="left"
      >
        <WindowDisplay>
          {products.map(product => {
            return (
              <Book
                key={product.name}
                image={product.image}
                name={product.name}
                price={product.price.toFixed(3)}
                handleAddBtn={handleAddBtn(product)}
              />
            )
          })}
        </WindowDisplay>
      </div>
      <div
        className="right"
      >
        <Cart
          handleCancelBtn={handleCancelBtn}
          handleChargeBtn={handleChargeBtn}
          products={productsToCart}
        >
          {productsToCart.map(item => {
            const { product, amount } = item;
            return (
              <Item
                key={product.name}
                image={product.image}
                name={product.name}
                amount={amount}
              ></Item>
            )
          })}
        </Cart>
      </div>
    </div>
  );
}

export default App;

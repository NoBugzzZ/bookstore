import { useState, useEffect } from "react";
import { WindowDisplay, Book, Cart, Item, Category, Card, Pagination } from "./components";
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
        <Card
          width="100%"
          height="100%"
        >
          <div
            style={{
              position:"sticky",
              top:"0"
            }}
          >
            <Category
              onSelect={(value) => {
                console.log(value)
              }}
              defaultSelected="all"
              categories={[
                { label: "all", value: "all" },
                { label: "category1", value: "category1" },
                { label: "category2", value: "category2" },
                { label: "category3", value: "category3" },
                { label: "category4", value: "category4" },
                { label: "category5", value: "category5" },
              ]}
            />
          </div>
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
            <Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            />
            <Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            />
            <Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            />
            <Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            />
            <Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            />
            <Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            /><Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            />
            <Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            /><Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            />
            <Book
              image={'product.image'}
              name={"product.name"}
              price={12}
            />
          </WindowDisplay>
          <Pagination
            defaulPage={1}
            totalPage={20}
            onSelect={(page) => {
              console.log(page)
            }}
          />
        </Card>
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
          <Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item>
          <Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item><Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item><Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item><Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item><Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item><Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item><Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item><Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item><Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item><Item
            image={"product.image"}
            name={"product.name"}
            amount={11}
          ></Item>
        </Cart>
      </div>
    </div>
  );
}

export default App;

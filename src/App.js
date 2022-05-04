import { useState, useEffect } from "react";
import { WindowDisplay, Book, Cart, Item } from "./components";
import './App.css'
import { getCart, getProducts } from "./requests";

function App() {

  const [items, setItems] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    getCart(0).then(res => {
      console.log(res)
      setItems(res?.items||[]);
    });
    getProducts().then(res => {
      setProducts(res)
    })
  }, [])

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
                style={{
                  height: "400px",
                  width: "300px"
                }}
              />
            )
          })}
          <Book
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
            price={10.99}
            style={{
              height: "400px",
              width: "300px"
            }}
          />
          <Book
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
            price={10.99}
            style={{
              height: "400px",
              width: "300px"
            }}
          /><Book
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
            price={10.99}
            style={{
              height: "400px",
              width: "300px"
            }}
          /><Book
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
            price={10.99}
            style={{
              height: "400px",
              width: "300px"
            }}
          /><Book
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
            price={10.99}
            style={{
              height: "400px",
              width: "300px"
            }}
          /><Book
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
            price={10.99}
            style={{
              height: "400px",
              width: "300px"
            }}
          /><Book
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
            price={10.99}
            style={{
              height: "400px",
              width: "300px"
            }}
          />
        </WindowDisplay>
      </div>
      <div
        className="right"
      >
        <Cart>
          {items.map(item => {
            const { product } = item;
            return (
              <Item
                key={product.name}
                image={product.image}
                name={product.name}
              ></Item>
            )
          })}
          <Item
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
          >
          </Item>
          <Item
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
          >
          </Item>
          <Item
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
          >
          </Item>
          <Item
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
          >
          </Item>
          <Item
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
          >
          </Item>
          <Item
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
          >
          </Item>
          <Item
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
          >
          </Item>
          <Item
            image="https://www.kncat.com/images/cover/202009/15990112283732519.jpg"
            name="java编程思想,Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622"
          >
          </Item>
        </Cart>
      </div>
    </div>
  );
}

export default App;

import { WindowDisplay, Book, Cart, Item } from "./components";
import './App.css'

function App() {
  return (
    <div className="App">
      <div
        className="left"
      >
        <WindowDisplay
          style={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
          }}
        >
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

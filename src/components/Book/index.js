import './index.css'
import Card from '../Card';

const Book = ({ image, name, price, handleAddBtn }) => (
    <Card>
        <img
            src={image}
            alt={name}
            className="display-img"
        />
        <div
            className='description'
        >
            <div
                className='title'
            >
                <a href='http://localhost:3000'>{name}</a>
            </div>

            <div
                className='price'
            >
                <span>{price}</span>
                <button
                    onClick={() => {
                        handleAddBtn();
                    }}
                >
                    <svg t="1651570235787" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1420" width="16" height="16"><path d="M384 960c-47.104 0-85.312-36.48-85.312-81.472S336.896 797.12 384 797.12s85.312 36.48 85.312 81.408C469.312 923.52 431.104 960 384 960z m426.688 0c-47.168 0-85.376-36.48-85.376-81.472s38.208-81.408 85.376-81.408c47.104 0 85.312 36.48 85.312 81.408C896 923.52 857.792 960 810.688 960zM262.272 186.24H1024l-91.968 407.232h-577.92l13.12 58.56h554.112l-18.56 81.408H298.24l-31.552-139.968h-0.256l-59.52-265.6-41.152-182.4H0V64h234.752l27.52 122.24z m18.368 81.408L335.68 512h527.424l55.232-244.352H280.64z" fill="#ffffff" p-id="1421"></path></svg>
                    add
                </button>
            </div>
        </div>


    </Card>
)

export default Book;
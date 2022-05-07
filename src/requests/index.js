const url = 'https://virtserver.swaggerhub.com/nju6/bookstore/1.0.0'

const products = {
    "all": {
        "1": [
            {
                "id": "string",
                "name": "string",
                "price": 0,
                "image": "string"
            }
        ]
    }
}
async function getCarts() {
    const res = await fetch(`${url}/carts`, {
        method: 'get',
        mode: 'cors',
    });
    return res.json();
}

async function postCart(cart) {
    const res = await fetch(`${url}/carts`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart),
    })
    return res.json();
}

async function getCart(id) {
    const res = await fetch(`${url}/carts/${id}`, {
        method: 'get',
        mode: 'cors',
    });
    return res.json();
}

async function getProducts(category = "all", page = 1) {
    const res = await fetch(`${url}/products`, {
        method: 'get',
        mode: 'cors',
    });
    return res.json();
}

export {
    getCarts,
    postCart,
    getCart,
    getProducts,
}
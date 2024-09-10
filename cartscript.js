const product = [
    {
        id: 0,
        image: 'book-1.jpg',
        title: 'something 1',
        price: 120,
    },
    {
        id: 1,
        image: 'book-2.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 2,
        image: 'book-3.jpg',
        title: 'something 3',
        price: 120,
    },
    {
        id: 3,
        image: 'book-4.jpg',
        title: 'something 4',
        price: 120,
    },
    {
        id: 4,
        image: 'book-5.jpg',
        title: 'something 5',
        price: 120,
    },
    {
        id: 5,
        image: 'book-6.jpg',
        title: 'something 6',
        price: 120,
    },
    {
        id: 6,
        image: 'book-7.jpg',
        title: 'something 7',
        price: 120,
    },
    {
        id: 7,
        image: 'book-8.jpg',
        title: 'something 8',
        price: 120,
    },
    {
        id: 8,
        image: 'book-9.jpg',
        title: 'something 9',
        price: 120,
    },
    {
        id: 9,
        image: 'book-10.jpg',
        title: 'something 10',
        price: 120,
    },
    {
        id: 10,
        image: 'book-11.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 11,
        image: 'book-12.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 12,
        image: 'book-13.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 13,
        image: 'book-14.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 14,
        image: 'book-15.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 15,
        image: 'book-16.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 16,
        image: 'book-17.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 17,
        image: 'book-18.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 18,
        image: 'book-19.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 19,
        image: 'book-20.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 20,
        image: 'book-21.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 21,
        image: 'book-22.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 22,
        image: 'book-23.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 23,
        image: 'book-24.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 24,
        image: 'book-25.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 25,
        image: 'book-26.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 26,
        image: 'book-27.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 27,
        image: 'book-28.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 28,
        image: 'book-29.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 29,
        image: 'book-30.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 30,
        image: 'book-31.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 31,
        image: 'book-32.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 32,
        image: 'book-33.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 33,
        image: 'book-34.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 34,
        image: 'book-35.jpg',
        title: 'something 2',
        price: 120,
    },
    {
        id: 35,
        image: 'book-36.jpg',
        title: 'something 2',
        price: 120,
    }
];

let i = 0;

document.getElementById('root').innerHTML = product.map((item) => {
    const { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}' alt='${title}'>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>`;
}).join('');

var cart = [];

function addtocart(index) {
    cart.push({ ...product[index] });
    displayCart();
}

function delElement(a) {
    cart.splice(a, 1);
    displayCart();
}

function displayCart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("cartitem").innerHTML = cart.map((items, index) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                '<div class="cart-item">' +
                    '<div class="row-img">' +
                        '<img class="rowimg" src="' + image + '">' +
                    '</div>' +
                    '<p style="font-size:12px;">' + title + '</p>' +
                    '<h2 style="font-size:15px;">' + price + '.00</h2>' +
                    '<i class="fa-solid fa-trash" onclick="delElement(' + index + ')"></i>' +
                '</div>'
            );
        }).join('');
    }
}

function addProductToCart(index, event) {
    event.preventDefault();
    cart.push({ ...product[index] });
    displayCart();
}
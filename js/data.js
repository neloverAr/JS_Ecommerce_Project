let productsDB = [
    {
        id: 1,
        title: "Headphone item",
        size: 'large',
        imageUrl: 'images/placeholder.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci sunt ipsa, cumque facere nesciunt.',
        qty:1,
    },
    {
        id: 2,
        title: "Laptop item",
        size: 'medium',
        imageUrl: 'images/placeholder.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci sunt ipsa, cumque facere nesciunt.',
        qty:1,
    },
    {
        id: 3,
        title: "Watch item",
        size: 'small',
        imageUrl: 'images/placeholder.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci sunt ipsa, cumque facere nesciunt.',
        qty:1,
    },
    {
        id: 4,
        title: "Glasses item",
        size: 'large',
        imageUrl: 'images/placeholder.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci sunt ipsa, cumque facere nesciunt.',
        qty:1,
    },
];

localStorage.setItem("products",JSON.stringify(productsDB));
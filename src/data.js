const list = [
    {
        id: 1,
        title: "Sony Camera",
        img:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    
        price: 89.99,
        amount: 1,
        
      },
      {
        id: 2,
        title: "Head Phones",
        img:
          "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    
        price: 599.99,
        amount: 1,
        
      },
      {
        id: 3,
        title: "iPhone",
        img:
          "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    
        price: 929.99,
        amount: 1,
        
      },
      {
        id: 4,
        title: "Sony Playstation 5 Controller",
        img:
          "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXklMjBzdGF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    
        price: 399.99,
        amount: 1,
      },
      {
        id: 5,
        title: "Laptop",
        img:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    
        price: 49.99,
        amount: 1,
      },
      {
        id: 6,
        title: "Apple Watch",
        img:
          "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    
        price: 29.99,
        amount: 1,
      },
    {
      id: 7,
      title: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 89,
      img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 8,
      title: "108 Panchatantra Stories",
      author: "by Maple Press  | 1 September 2020",
      price: 98,
      img: "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 9,
      title: "Amazing Questions & Answers Science",
      author: "by Om Books Editorial Team  | 25 November 2018",
      price: 143,
      img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 10,
      title: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 57,
      img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 11,
      title: "My First 1000 Words",
      author: "by Wonder House Books  | 1 January 2018",
      price: 149,
      img: "https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 12,
      title: "101 Panchatantra Stories for Children",
      author: "by Om Books Editorial Team | 30 September 2020",
      price: 135,
      img: "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 13,
      title: "Pre-School Activities Pack ",
      author: "by Om Books Editorial Team  | 1 January 2021",
      price: 693,
      img: "https://m.media-amazon.com/images/I/913sv4sex3L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 14,
      title: "Early Learning Library Pack 1",
      author: "by Wonder House Books  | 6 December 2020",
      price: 289,
      img: "https://m.media-amazon.com/images/I/71xMttNhr7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 15,
      title: "Blossom Moral Story Book for Kids ",
      author: "by Content Team at Target Publications",
      price: 80,
      img: "https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 16,
      title: "Brain Activity Book for Kids",
      author: "by Maple Press | 1 September 2021",
      price: 86,
      img: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 17,
      title: "Willy the Silly Panda",
      author: "by Rebecca Smith  | 14 December 2021",
      price: 120,
      img: "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 18,
      title: "Grandma's Bag of Stories",
      author: "by Sudha Murty | 1 January 2015",
      price: 157,
      img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
  ];
  
  export default list;
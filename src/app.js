document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg", pirce: 2000 },
      { id: 2, name: "Arabica Blend", img: "2.jpg", pirce: 1000 },
      { id: 3, name: "Primo Paso", img: "3.jpg", pirce: 3000 },
      { id: 4, name: "Aceh Gayo", img: "4.jpg", pirce: 4000 },
      { id: 5, name: "Sumatra Mandheling", img: "5.jpg", pirce: 5000 },
    ],
  }));
});

var container = document.getElementById("gallery");
var products = [
  {
    name: "Birthday Cake",
    image: "img/cupcakes/birthday-cake.jpg",
    price: "$4.99",
    description: "Danish marzipan tootsie roll cotton candy bear claw cake apple pie. Liquorice sugar plum danish tart pastry marzipan sweet danish. Cake pie dessert cheesecake. Tiramisu chocolate bar tiramisu toffee sweet roll chocolate bar."
  },
  {
    name: "Raspberry Frosting on White Cake",
    image: "img/cupcakes/blue-raspberry_white.jpg",
    price: "$3.99",
    description: "Dragée powder jelly beans icing. Cupcake liquorice sweet roll chocolate cake. Caramels cake apple pie tootsie roll chupa chups caramels halvah croissant."
  },
  {
    name: "Blue Buttercream on Gingerbread",
    image: "img/cupcakes/blue_gingerbread.jpg",
    price: "$3.99",
    description: "Toffee cupcake chupa chups croissant sugar plum pie pastry. Chupa chups cake chupa chups bear claw danish gingerbread chupa chups. Liquorice jelly beans chocolate caramels dessert icing bear claw carrot cake. Muffin donut sugar plum danish candy dessert chocolate cake macaroon toffee."
  },
  {
    name: "Chocolate Buttercream on Chocolate Cake",
    image: "img/cupcakes/chocolate-cream_chocolate.jpg",
    price: "$3.99",
    description: "Toffee cake soufflé icing brownie. Croissant pastry gingerbread tart croissant candy canes halvah candy canes. Powder ice cream muffin chocolate bar jelly-o jujubes candy canes gummi bears."
  },
  {
    name: "Cookie Monster",
    image: "img/cupcakes/cookie-monster.jpg",
    price: "$6.99",
    description: "Sweet lollipop cheesecake chocolate cake chocolate bar gingerbread. Cookie soufflé lemon drops apple pie ice cream cupcake. Candy muffin fruitcake soufflé."
  },
  {
    name: "Buttercream on White Cake",
    image: "img/cupcakes/cream_white.jpg",
    price: "$3.99",
    description: "Candy pie danish croissant caramels cake gummi bears. Sweet roll lollipop sesame snaps sesame snaps cotton candy danish cotton candy. Tiramisu jujubes toffee cotton candy jelly sesame snaps brownie candy canes sesame snaps."
  },
  {
    name: "Malted Frosting on Chocolate Cake",
    image: "img/cupcakes/malted_chocolate.jpg",
    price: "$5.99",
    description: "Jujubes gummi bears danish soufflé chocolate cake gummi bears. Pastry jujubes lemon drops. Cheesecake gummies sweet macaroon lollipop bonbon wafer."
  },
  {
    name: "Mocha Frosting on Chocolate Cake",
    image: "img/cupcakes/mocha_chocolate.jpg",
    price: "$3.99",
    description: "Bonbon croissant sesame snaps toffee gummies. Tootsie roll lollipop wafer icing macaroon. Chocolate bar donut jelly-o gummi bears. Fruitcake jujubes chupa chups."
  },
  {
    name: "Pink Buttercream on Chocolate Cake",
    image: "img/cupcakes/pink_chocolate.jpg",
    price: "$3.99",
    description: "Cheesecake topping marzipan cupcake jujubes. Caramels pie wafer topping danish pastry brownie chocolate. Cake jelly beans caramels dragée. Caramels ice cream jelly beans biscuit pastry pastry jelly-o chocolate."
  },
  {
    name: "Purple Buttercream on White Cake",
    image: "img/cupcakes/purple_white.jpg",
    price: "$4.99",
    description: "Icing cheesecake halvah. Fruitcake carrot cake tart icing cotton candy pie gummies sugar plum chocolate. Icing dessert candy jujubes. Muffin topping lollipop halvah lollipop tootsie roll jelly."
  },
  {
    name: "Raspberry Frosting on Choclate Cake",
    image: "img/cupcakes/raspberry_chocolate.jpg",
    price: "$3.99",
    description: "Chocolate bar caramels sugar plum cake jelly liquorice chocolate cake pie gummi bears. Jelly halvah bear claw. Ice cream icing oat cake chupa chups ice cream sweet gingerbread. Pudding gummies dragée caramels liquorice sesame snaps sugar plum dessert."
  },
  {
    name: "Red Velvet",
    image: "img/cupcakes/red-velvet.jpg",
    price: "$4.99",
    description: "Caramels cupcake caramels lemon drops. Cheesecake halvah sweet liquorice sweet caramels sweet toffee. Danish cupcake carrot cake gummi bears caramels candy cookie bonbon. Oat cake sweet tootsie roll toffee ice cream fruitcake cake candy canes."
  },
  {
    name: "Strawberry Frosting on Strawberry Cake",
    image: "img/cupcakes/strawberry_strawberry.jpg",
    price: "$3.99",
    description: "Jelly-o apple pie jujubes ice cream caramels cupcake gummies pie chocolate bar. Powder danish gummi bears. Gummies sweet croissant },jujubes marzipan tootsie roll cheesecake donut. Pie pie bear claw cupcake brownie bear claw."
  }
];

function insertProducts(containerElement, product) {
  var htmlString = "" +
    "<div class='product-card'>" +
      `<h2>${product.name}</h2>` +
      `<img src="${product.image}">` +
      "<div class='product-info'>" +
        `<p class='product-price'>${product.price}</p>` +
        `<p>${product.description}</p>` +
      "</div>"+
    "</div>";

  containerElement.innerHTML += htmlString;
}

for(var i = 0; i != products.length; ++i) {
  insertProducts(container, products[i]);
}

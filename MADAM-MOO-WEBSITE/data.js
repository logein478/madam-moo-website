const RESTAURANT = {
  name: "MADAM MOO",
  whatsapp: "201039456864",
  deliveryFee: 40 // غيّري الرقم هنا لو فيه رسوم دليفري ثابتة.
};

const products = [
  {
    id: "original",
    category: "burger",
    name: "Madam's Original",
    ar: "مدامز أوريجينال",
    description: "Classic smash patty, American cheese, Moo sauce, lettuce.",
    image: "images/og.jpg",
    variants: [
      { name: "Single", ar: "سنجل", price: 120 },
      { name: "Double", ar: "دبل", price: 170 },
      { name: "Triple", ar: "تريبل", price: 220 }
    ]
  },
  {
    id: "hot-madam",
    category: "burger",
    name: "Hot Madam",
    ar: "هوت مدام",
    description: "Classic smash patty, American cheese, spicy sauce, jalapeño, lettuce.",
    image: "images/hot.jpg",
    variants: [
      { name: "Single", ar: "سنجل", price: 130 },
      { name: "Double", ar: "دبل", price: 180 },
      { name: "Triple", ar: "تريبل", price: 230 }
    ]
  },
  {
    id: "mooshroom",
    category: "burger",
    name: "Mooshroom",
    ar: "موش روم",
    description: "Classic smash patty, creamy cheese, mushrooms, caramelized onions.",
    image: "images/mosh.jpg",
    variants: [
      { name: "Double", ar: "دبل", price: 190 },
      { name: "Triple", ar: "تريبل", price: 250 }
    ]
  },
  {
    id: "bacon-moo",
    category: "burger",
    name: "Bacon Moo",
    ar: "بيكون مو",
    description: "Classic smash patty, American cheese, beef bacon, Thousand Island sauce, lettuce.",
    image: "images/bc.jpg",
    variants: [
      { name: "Single", ar: "سنجل", price: 140 },
      { name: "Double", ar: "دبل", price: 190 },
      { name: "Triple", ar: "تريبل", price: 240 }
    ]
  },
  {
    id: "fries",
    category: "fries",
    name: "Fries",
    ar: "بطاطس",
    description: "Crispy, seasoned to perfection.",
    image: "images/frie.jpg",
    price: 40
  },
  {
    id: "cheezy-madam",
    category: "fries",
    name: "Cheezy Madam",
    ar: "تشيزي مدام",
    description: "Golden fries loaded with melted cheese sauce.",
    image: "images/cheesy.jpg",
    price: 50
  },
  {
    id: "messy-madam",
    category: "fries",
    name: "Messy Madam",
    ar: "ميسي مدام",
    description: "Fries topped with beef, Thousand Island sauce, jalapeño.",
    image: "images/messy.jpg",
    price: 100
  },
  {
    id: "classic-fizz",
    category: "drink",
    name: "Classic Fizz",
    ar: "كلاسيك فيز",
    description: "Cold & refreshing.",
    image: "images/coke.jpg",
    price: 25
  },
  {
    id: "lemon-smash",
    category: "drink",
    name: "lemon smash",
    ar: "ليمون سماش",
    description: "Cold & refreshing.",
    image: "images/sprite.jpg",
    price: 25
  },
{
    id: "zero-moo",
    category: "drink",
    name: " zero moo ",
    ar: " زيرو موو",
    description: "Cold & refreshing.",
    image: "images/zerocola.jpg",
    price: 25
  },
{
    id: "water",
    category: "drink",
    name: "water",
    ar: " مياه",
    image: "images/water.jpg",
    price: 15
  },
  {
    id: "extra-patty",
    category: "addon",
    name: "Extra Patty",
    ar: " باتي اضافي",
    image: "images/extrapatty.jpg",
    price: 50
  },
   {
    id: "extra-bacon",
    category: "addon",
    name: "Extra Bacon",
    ar: " بيكون اضافي",
    image: "images/bacon.jpg",
    price: 20
  },
  {
    id: "extra-cheese",
    category: "addon",
    name: "Extra Cheeese",
    ar: " جبنه اضافيه",
    image: "images/cheese.jpg",
    price: 10
  },
  
 {
    id: "extra-jalapenos",
    category: "addon",
    name: "Extra jalapenos",
    ar: " هالبينو اضافي",
    image: "images/jalapeno.jpg",
    price: 10
  },

  {
    id: "moo-sauce",
    category: "sauce",
    name: "moo sauce",
    ar: " صوص موو",
    image: "images/moosauce.jpg",
    price: 15
  },
  {
    id: "thousandisland-sauce",
    category: "sauce",
    name: "ThousandIsland sauce",
    ar: " صوص ثاوزند ايلاند",
    image: "images/thousandisland.jpg",
    price: 15
  },
  {
    id: "cheese-sauce",
    category: "sauce",
    name: "cheese sauce",
    ar: " صوص موو",
    image: "images/cheddersauce.jpg",
    price: 15
  },
  {
    id: "moozarella-sticks",
    category: "side",
    name: "Moozarella Sticks",
    ar: "أصابع الموزاريلا",
    description: "Crispy outside, melty inside. Cheese pull in every bite.",
    image: "images/moz.jpg",
    price: 45
  }
];

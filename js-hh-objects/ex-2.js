// Exercise #2 Product

const product = {
  name: "Xiaomi Air Purifier",
  price: 4000,
  ratings: 2.5,
  photo: null,
};
let socialMediaShare = "facebookShare";

// Start code here
product.ratings = 4.5;
product.photo =
  "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg";
product.code = "IT0101010";
product.price = 6000;
delete product.ratings;
product[socialMediaShare] = 45.5;

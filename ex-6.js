//Exercise 6
let favoriteBooks = [];

function addFavoriteBook(bookName) {
  // Start coding here !
  if (bookName.includes("Beauty")) {
    favoriteBooks.push(bookName);
    return;
  }
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

// ผลลัพธ์ที่ควรได้จาก Example case
console.log(favoriteBooks);
// ["The Beauty of Living Twice", "Black Beauty", "Monstrous Beauty"]

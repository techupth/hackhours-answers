//Exercise 1
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

function displayReceivedData(data) {
  console.log(data);
}

getJohnProfile().then(displayReceivedData);

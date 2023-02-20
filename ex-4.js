//Exercise 4
let getJohnProfile = async () => {
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

async function asynconousFunction() {
  let johnProfile = await getJohnProfile();
  console.log(johnProfile);
}

asynconousFunction();

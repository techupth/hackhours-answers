//Exercise 6
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

let getJohnOrders = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here

async function asynconousFunction() {
  try {
    let johnProfile = await getJohnProfile();
    console.log(johnProfile);
    let johnOrders = await getJohnOrders();
    console.log(johnOrders);
  } catch (errorMessage) {
    console.log(errorMessage);
  }
}

asynconousFunction();

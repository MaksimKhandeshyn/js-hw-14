const delayPromise = (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay);
  });
};
const promiseOne = delayPromise("Promise One", 2000);
const promiseTwo = delayPromise("Promise Two", 4000);
Promise.all([promiseOne, promiseTwo])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

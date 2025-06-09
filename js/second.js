const promiseFunc = (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay);
  });
};

const firstRace = promiseFunc("first try", 2000);
const secondRace = promiseFunc("second try", 5000);
const thirdRace = promiseFunc("third try", 4000);
const fourthRace = promiseFunc("fourth try", 5000);
const fifthRace = promiseFunc("fifth try", 1000);

Promise.race([firstRace, secondRace, thirdRace, fourthRace, fifthRace])
  .then((value, text) => console.log(value))
  .catch((error) => console.log(error));

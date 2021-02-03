import { arraySum } from './arraySum.js';

function sumAll(data) {
   console.log(data);
   for (let i =0; i < data.lenght; i++) {
      const numberPair = data[i];
      const sum = arraySum(numberPair);

      console.log(numberPair, sum);
   }
}
export { sumAll }
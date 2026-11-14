type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function isEven(num: number) {
  return num % 2 === 0;
}
isEven.description = "Checks if a number is even";
let fun:DescribableFunction = isEven;

uniqueId.id = 0;
function uniqueId()
{
  return uniqueId.id++;
}
console.log('uniqueId ',uniqueId());
console.log('uniqueId ',uniqueId());
function fizzbuzz(number) {
    if (!Number.isInteger(number)) throw new Error('Should be a number');

    if (number <= 0 || number >= 100) throw new Error('Number invalid');

	return result =
    fizz(number) && buzz(number)
      ? "FizzBuzz"
      : fizz(number)
      ? "Fizz"
      : buzz(number)
      ? "Buzz"
      : number;
}

const fizz = (number) => number % 3 == 0;
const buzz = (number) => number % 5 == 0;

function fizzbuzz2(number){
	if(number%15 == 0) return "FizzBuzz"
	else if (number%3 == 0) return "Fizz"
	else if (number%5 == 0) return "Buzz"
	else return number
}

module.exports = fizzbuzz;




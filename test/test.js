const fizzbuzz = require('../src/fizzbuzz.js');

describe('Testing FizzBuzz', () => {

    
	test('input is not a noober', ()=>{
    	const noValidParameters = [true, false, "pol", 'bannana', null, undefined, NaN, {}, [], () => {}];
		noValidParameters.forEach((n) => {
			expect( () => {fizzbuzz(n);}).toThrow('Should be a number');
	
		})

	})

    test('invalid rank', () =>{
        const noValidParameter = [-5, 0, 101]
        noValidParameter.forEach((n) => {
            expect( () => {fizzbuzz(n);}).toThrow('Number invalid')
        })
    })

    test('input is valid number', () => {
        const validNumber = [1, 2, 4, 7, 11, 13, 19, 23, 29, 49, 52]
        validNumber.forEach((n) => {
            expect(fizzbuzz(n)).toEqual(n);
            
        })
    })

    test('should throw fizz', () => {
        const validNumber = [3, 6, 12, 21, 24, 66]
        validNumber.forEach((n) => {
            expect(fizzbuzz(n)).toEqual("Fizz")
        })
    })

	
	
	test('should throw buzz', () => {
        const validNumber = [5,10,20,95,25,50,85, 95]
        validNumber.forEach((n) => {
            expect(fizzbuzz(n)).toEqual("Buzz")
        })
    })
	
	test('should throw fizzbuzz', () => {
        const validNumber = [15, 30, 45, 60, 75, 90]
        validNumber.forEach((n) => {
            expect(fizzbuzz(n)).toEqual("FizzBuzz")
        })
    })	
});
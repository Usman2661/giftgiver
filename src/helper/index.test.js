import { max_number } from ".";

describe('max_number', () =>{

    describe('given an empty array', () =>{
        it('returns 0', () => {
            expect(max_number([])).toEqual(0);
        })
    })
    describe('given an array of numbers', () =>{
        it('returns 0', () => {
            expect(max_number([1,2,3])).toEqual(3);
        })
    })
})
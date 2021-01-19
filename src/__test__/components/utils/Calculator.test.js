const mathOperations = require('../../../components/utils/Calculator');
const mathOps=require('../../../components/utils/Calculator');

describe('calculator',()=>{
    test('add two numbers',()=>{
        //arrange and act
        const val=mathOps.sum(3,4);
        //assert
        expect(val).toBe(7);
    }) 
    test('substract two numbers',()=>{
        //arrange and act
        const val=mathOps.substract(3,4);
        //assert
        expect(val).toBe(-1);
    })
    test('divide two numbers',()=>{
        //arrange and act
        const val=mathOps.divide(4,2);
        //assert
        expect(val).toBe(2);
    })
    test('multiply two numbers',()=>{
        //arrange and act
        const val=mathOps.multiply(4,2);
        //assert
        expect(val).toBe(8);
    })
})

// test('add two numbers to get failure',()=>{
//     //arrange and act
//     const val=mathOps.sum(3,4);
//     //assert
//     expect(val).toBe(9);
// })



/*****************************************************
 * // 1.  A. YOU ARE GIVEN AN ARRAY OF NUMBERS BELOW *
 *              //     B. USING REDUCE               *
 *****************************************************/
// subtract all of the numbers in the array from an initial number 200
// let numbers = [12, 3, 5, 3, 5, 4]

// const subtractedFrom200 = numbers.reduce((accumulator, currentValue) => {

//     return ( accumulator - currentValue, 200)
// }

// )
// console.log(subtractedFrom200)

//========================================================================================//
//========================================================================================//
/*************************************************************************
 *              // 2.  ADD 500 TO EACH BOTTLE OF RED WINE,               *
 *            //  THEN ADD ALL THE RED WINE BOTTLES TOGETHER.            *
 * // // USE ALL THREE METHODS WE LEARNED TODAY AND USE METHOD CHAINING. *
 *************************************************************************/
let data = [
    {
        wineColor: 'red',
        year: '1922',
        region: 'Bordeaux',
        numBottles: 123
    },
    {
        wineColor: 'red',
        year: '1972',
        region: 'Beaujolais',
        numBottles: 29
    },
    {
        wineColor: 'white',
        year: '2020',
        region: 'Bourgogne',
        numBottles: 224
    },
    {
        wineColor: 'white',
        year: '1987',
        region: 'Merlot',
        numBottles: 122
    },
    {
        wineColor: 'white',
        year: '1963',
        region: 'Rioja',
        numBottles: 22
    },
    {
        wineColor: 'red',
        year: '1976',
        region: 'Napa',
        numBottles: 54
    }
];


// let x =  data
// .filter(({wineColor}) => wineColor === 'red')
// .map(( {numBottles }) => numBottles + 500)
// .reduce((acc, val)=> acc + val);

// console.log(x)




//========================================================================================//
//========================================================================================//
// 3.  Just Averages
//     - Using reduce, return an integer value 
//     - for the average of all the index values and/or calculated values in an array.
//     - If the Value is a String, use the character Code number for the first letter in the String.
//     - Use all four arguments in the callback function in your solution
//     - And a ternary wouldn't hurt
const nums1 = [8, 21.3, 16, 55, 22, 44]; // should be 27
const nums2 = [11.12, 43, 56, 22, 78, 98, 11]; // should be 49
const nums3 = [2, 1222, 3444, 7254, 83.04444, 1111]; // should be 2186
const nums4 = [2, 1222, 'sneeze', 3444, 7254, 8, 'abacus']; //should be 1734

//  function accepts arrays

// const indexAverager = nums1.reduce((accumulatingValue, currentValue, index, array) => 
// {   let sum = 0
//     let average = 0

//     // if string presenst , tun char code
//     return typeof(currentValue) === 'string'? sum = accumulatingValue + currentValue : average = sum / index



// })
// console.log(indexAverager)



function justAverages(arr) {
    let total = arr.reduce((total, num, index) => {
        let isNum = typeof num === 'number' ? true : false;
        if (isNum) {
            total += num;
        }
        else {
            total += arr[index].charCodeAt(0);
        }
        return total


    }, 0)
    return Math.floor(total / arr.length);
}

console.log(justAverages(nums4))


//========================================================================================//
//========================================================================================//
/**************************************************************************************
 * // // 4.  CHOOSE ALL THE COMPANIES THAT STARTED AFTER 2000 AND SORT THEM ASCENDING *
//  **************************************************************************************/
// let businesses = [
//     { company: 'VISA', startYear: 2000 },
//     { company: 'Chase', startYear: 1998 },
//     { company: 'BOA', startYear: 1980 },
//     { company: 'Amex', startYear: 2000 },
//     { company: 'TD', startYear: 2001 },
//     { company: 'Mastercard', startYear: 2011 },
//     { company: 'Citibank', startYear: 2010 },
// ];


// const year2000 = businesses.filter(business => business.startYear > 2000)

// const sortedYears = year2000.map( year => year.startYear).sort()

// console.log(sortedYears)

//========================================================================================//
//========================================================================================//
/*****************************************************************************
 *                          // 5.  COMPUTE INTEGERS                          *
 * //     - USE THE ARRAY METHODS TO MULTIPLY ALL INTEGERS IN AN ARRAY BY 5. *
 *                 //       [1,2,3,4] SHOULD BE [5,10,15,20]                 *
 *              //       [1,2,UNDEFINED,6] SHOULD BE [5,10,30]               *
 *              //       [1,3,25.5,4,32.9] SHOULD BE [5,15,20]               *
 *****************************************************************************/
// const numbers1 = [1, 2, 3, 4]
// const numbers2 = [1, 2, undefined, 6]
// const numbers3 = [1,3,25.5,4,32.9]


// const numbersOnly = function(array){

//     const onlyNumbersAllowed =  array.filter(number => typeof(number)==='number')
// const multiplyNumbersBy5 = onlyNumbersAllowed.map((value, index, array) => {

    //         return value * 5
    //     })

    //     return (multiplyNumbersBy5)
    // }


    // console.log('numbers 1: ', numbersOnly(numbers1))
    // console.log('numbers 2: ', numbersOnly(numbers2))
    // console.log('numbers 3: ', numbersOnly(numbers3))





    // //========================================================================================//
    //========================================================================================//
    // 6.

    // - Count the number times the same element value appears in an array 
    //  - and display your answer in an object 
    //  -with the element as the key 
    // - and the number of times as the value
    // - Use reduce 
    // - and use its second argument to initialize the empty object
    // - The properties in the object will have a string for the key 
    // - and a number for the value
    // - The key in each property 
    // - should be the value in the array we are counting.
    // - The value in the object property \
    // - should be the number of times 
    // - a value appears in the original array.

    // const arr1 = [5, 3, 2, 5, 6]; //should be {'5':2,'3':1,'2':1,'6':1}
    // const arr2 = [3, 1, 2, 5, 2, 5, 7, 5] // should be { '1': 1, '2': 2, '3': 1, '5': 3, '7': 1 }

    // const numberAppearance = arr1.reduce((accumulativeValue, currentValue, array) => {
    //     let count = 0;
    //     let obj = {}

    //     if (accumulativeValue === accumulativeValue) {

    //         count += 1
    //         obj = {
    //             [accumulativeValue]: count

    //         }

    //     }

    //     // console.log('value :', accumulativeValue)
    //     // console.log('index :', currentValue)
    //     // console.log('array: ', array)
    //     // console.log('result: ', result)
    //     return obj




    // }
    // )
    // console.log(numberAppearance)
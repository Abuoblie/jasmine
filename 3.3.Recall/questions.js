let selectElementsStartingWithA = (array) => {
    return (array.sort()).splice(0, 2);
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(e => /^[AEIOUY]/i.test(e));
}

let removeNullElements = (array) => {
    return array.filter(e => e != null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(e => e != null && e.toString() != 'false');
}

let reverseWordsInArray = (array) => {
    return array.map(e => e.split("").reverse().join(""));
}

let everyPossiblePair = (array) => {
    let arr = array.sort();
    let m = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            m.push([arr[i], arr[j]]);
        }
    }
    return m;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let temp = array[i];
            if ((array[i][array[i].length - 1]) > (array[j][array[j].length - 1])) {
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

let getFirstHalf = (string) => {
    return string.slice(0, 3);
}

let makeNegative = (number) => {
    return Math.sqrt(number * number) * -1;
}

let numberOfPalindromes = (array) => {
    return array.filter(e => e == e.split("").reverse().join("")).length;

}

let shortestWord = (array) => {
    return array.filter(e => e.length == Math.min.apply(Math, array.map(e => e.length))).toString();
}

let longestWord = (array) => {
    return array.filter(e => e.length == Math.max.apply(Math, array.map(e => e.length))).toString();
}

let sumNumbers = (array) => {
    return array.reduce((acc, e) => { return acc + e; }, 0);
}

let repeatElements = (array) => {
    return (array + "," + array).split(",");
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    return array.reduce((acc, e) => { return acc + e }, 0) / array.length; 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    let selection = [], i = 0;
    while (array[i] < 6) { selection.push(array[i]); i++; }
    return selection;
}

let convertArrayToObject = (array) => {

    let m = {};
    for (let i = 0; i < array.length - 1; i = i + 2) {
        m[array[i]] = array[i + 1];

    }
    return m;
}

let getAllLetters = (array) => {
    return [...new Set(array.join('').split("").sort())];
}

let swapKeysAndValues = (object) => {
    const obj = new Object();
    Object.entries(object).forEach(([key, val]) => {
        let temp = key;
        key = val;
        val = temp;
        obj[key] = val;

    });
    return obj;
}

let sumKeysAndValues = (object) => {
    return Object.entries(object).reduce((acc, e) => { return acc + parseFloat(e[0]) + parseFloat(e[1]) }, 0);
}

let removeCapitals = (string) => {
    return string.split(' ').map(e => e.match(/[^A-Z]/g, '').join('')).join(' ');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    const dte = new Date(date);///////////
    let dd = parseInt(dte.getDay() + 1) < 10 ? "0" + parseInt(dte.getDay() + 1) : parseInt(dte.getDay() + 1);
    let mm = parseInt(dte.getMonth() + 1) < 10 ? "0" + parseInt(dte.getMonth() + 1) : parseInt(dte.getMonth() + 1);
    return dd + "/" + mm + "/" + dte.getFullYear();
}

let getDomainName = (string) => {

    return (string.split("@").pop()).substring(0, (string.split("@").pop()).length - 4);
}

let titleize = (string) => {
    let str = (string[0].toUpperCase() + string.slice(1).replace('lion', 'Lion').replace('witch', 'Witch').replace('wardrobe', 'Wardrobe')).split('');
    for (let index = 0; index < str.length; index++) {
        if (str[index] == '.') {

            str[index + 2] = str[index + 2].toUpperCase();
        }

    }

    return str.join('');
}

let checkForSpecialCharacters = (string) => {
    return string.match(/@+/g) == null ? false : true;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let fac = 1
    for (let index = number; index >= 1; index--) {
        fac *= index;

    }
    return fac;

}

let findAnagrams = (string) => {

    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * (5 / 9));
}

let letterPosition = (array) => {
        let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
                array[i] = array[i].toLowerCase();
            for (let index = 0; index < alpha.length; index++) {
                if (array[i] == alpha[index]) {
                    newArr.push(index + 1);
                };
    
            }
        }
       
        return newArr;
}

// function nailGame () {
//     let nailLength = Math.floor(Math.random() * (99 - 1 + 1) + 1);

//     while (nailLength >= 0) {
//         let myHitStrengths = Math.floor(Math.random() * (3 - 1) + 1 + 1);
//         let oponentHitStrengths = Math.floor(Math.random() * (4 - 2 + 1) + 2);

//         if (nailLength >= 0) {
//             nailLength -= myHitStrengths;
            
//             if (nailLength >= 0) {
//                 nailLength -= oponentHitStrengths;
//                 if (nailLength <= 0) {
//                     return console.log('he won ' + oponentHitStrengths);
//                 }
//             } else {
//                 return console.log('I won ' + myHitStrengths);
//             }
//         }
//     }
// }

// nailGame()



//=====================  Kata 6: Replace With Alphabet Position  ===============================//

function alphabetPosition(text) {
  let letters = "abcdefghijklmnopqrstuvwxyz"
  let res = '';
  let textToLower = text.toLowerCase()
  for (let i = 0; i < textToLower.length; i++){
    if (letters.includes(textToLower[i])){
      res = res.concat(' ', letters.indexOf(textToLower[i]) + 1)
    }
  }
  return res.trimLeft();
}


//=====================  Kata 8: A wolf in sheep's clothing  ===============================//


let animalsArray = ["wolf"];
function warnTheSheep(queue) {
  let res = ''
    if(queue[queue.length - 1] === 'wolf'){
      res = "Pls go away and stop eating my sheep"
      return console.log(res);;
    }else {
      res = "Oi! Sheep number " + queue.reverse().indexOf('wolf') + "! You are about to be eaten by a wolf!"
      return console.log(res); 
    }
}


//=====================  Kata 7: Simple Fun #184: LCM from m to n  ===============================//


function LCM(m, n) {
  let lcm = 0;
  
  let min = Math.min(m, n);
  let max = Math.max(m, n);
  
  
  for (let i = max; ; i += max) {
    
    let divisible = true;
    for (let j = min; j <= max; j++) {
      if (i % j !== 0) {
        divisible = false;
        break;
      }
    }
    
    if (divisible) {
      lcm = i;
      break;
    }
  }
  
  console.log("LCM:", lcm);
  return lcm;
}


function mnLCM(m, n) {
  
  function calculateGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  let lcm = 0;
  let min = Math.min(m, n);
  let max = Math.max(m, n);
  
  
  let gcd = calculateGCD(min, max);
  
 
  lcm = (m * n) / gcd;
  
  return lcm;
}


//=====================  Kata 7: Frog's Dinner  ===============================//

function frogContest(n) {
  let chrisSummation = null;
  let tomSummation = null;
  let catSummation = null;

  function counter(num,Summation) {
    for (let i = 0; i <= num; i++) {
    Summation += i
    }
    return Summation
  }

  chrisSummation = counter(n,chrisSummation)
  tomSummation = counter(Math.floor(chrisSummation / 2), tomSummation)
  catSummation = counter(chrisSummation+tomSummation, catSummation)

  res = `Chris ate ${chrisSummation} flies, Tom ate ${tomSummation} flies and Cat ate ${catSummation} flies`;
  console.log(res);
}


//=====================  Kata 7: Sum of the first nth term of Series  ===============================//

function Sum(n) {
  let res = 0;
  let temp = 1;
  if (n == 0) {
    return res = '0.00'; 
  } else {
    
    for (let i = 0; i < n; i++) {
      res += 1 / temp;
      temp += 3;
    }
  }
  
  return res.toFixed(2);
}


//=====================  Kata 6: Will it balance?  ===============================//

function willItBalance(stick,terrain) {
  function sum(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
      total += array[i]
    }
    return total
  }

  function sumOfProducts(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
      total += array[i]*i
    }
    return total
  }

  let totalWeight  = sum(stick);
  let totalProduct  = sumOfProducts(stick)
  let res = totalProduct / totalWeight

  if (1 == terrain[res]) {
    return console.log('True');
  } else if (terrain[Math.floor(res)] ==1 && (terrain[Math.ceil(res)] ==1 )) {
    return console.log('True');
  } else { return console.log('False'); }
}


//=====================  Kata 7: Holiday II - Plane Seating  ===============================//

function planeSeating(seatNumber) {
  let num = parseInt(seatNumber);
  let lett = seatNumber[seatNumber.length - 1];
  let res = '';
  let audit = /[A-H,K]/i;

  function number(n) {
    if (n >= 1 && n <= 20) {
      return  'Front'
    } else if (n >= 21 && n <= 40) {
      return  'Middle'
    } else {
      return  'Back'
    }
  }
  function letter(l) {
    let test1 = /[a-c]/i;
    let test2 = /[d-f]/i;
    if (test1.test(l)) {
      return '-Left'
    } else if (test2.test(l)) {
      return '-Middle'
    } else {
      return '-Right'
    }
  }

  if (num > 60 || num < 1 || !audit.test(lett)) {
    return console.log('No Seat!!');
  } else {
    res = number(num)
    res += letter(lett)
    return console.log(res); 
  }
  
}
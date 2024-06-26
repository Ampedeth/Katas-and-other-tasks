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

//=====================  Kata 6: Each n-th element of list  ===============================//

function each(num, array) {
  let res = [];
  if (num == 0) {
    return console.log(res);
  } else if (num > 0) {
    for (let i = 1; i <= array.length; i++) {
      if (i % num == 0)
        res.push(i)
    }
    return console.log(res);
  } else if (num < 0) {
    num = Math.abs(num)
    for (let i = array.length - 1; i >=0; i--) {
      if ((array.length - i) % num == 0) {
        res.push(array[i]);
      }
    }
    return console.log(res)
  }
}

//=====================  Kata 7: Stone Pickaxe Crafting  ===============================//

let craftItems = ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"]
function crafter(array) {
  let Cobblestone = null;
  let Sticks = null;
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'Cobblestone') {
      Cobblestone += 1
    } else if (array[i] == 'Sticks') {
      Sticks += 1
    } else if (array[i] == 'Wood') {
      Sticks += 4
    }
  }
  function difference () {
    return Cobblestone -= 3, Sticks -=2
  }
  while (Cobblestone >= 3 && Sticks >= 2) {
    res +=1
    difference()
  }
  
  
  console.log(res);
}

//==============  Kata 7: Measuring Average Speed =====================//

function averageSpeed(d, t) {
  let distance = d.includes("km") ? parseFloat(d): parseFloat(d)/1000;
  let time = t.includes("s") ? parseFloat(t) / 3600 : parseFloat(t) / 60;
  let res = distance / time;
  res *= 0.621371
  console.log(res + 'mph');
}

//==============  Kata 5: The Hashtag Generator =====================//

function hashtagGenerator(str) {
  let res = '#';
  str = str.replace(/\s+/g, ' ').trim()
  if (str === undefined || str.length === 0) {
    return false
  } else {
    str = str.split(' ');
    str.forEach(element => {
      element = element.replace(element[0], element[0].toUpperCase())      
      res += element
    });
  }
  if(res.length > 140){
    return false
  }else{
    return res;
  }
}

function challengeBanner(n){
    console.log('####' + 'Challenge' + n + ' #####')
}
challengeBanner(1)

//1.//
function onlyVowels(str){
   let i = 0;
   while (i <str.length){
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      console.log(str[i]);
    }
    i = i + 1;
} 
}
onlyVowels('Regular expressions are for term 2.');
 
//2.//
function firstFiveVowels(str){
    const vowels = 'aeiou';
    let count = 0;
    let i = 0;
    while (i <str.length){
     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
       if(count < 5){
        console.log(str[i]);
        count = count + 1;
     }
    }
    //  if(vowels.includes(str[i]) && count <5){
    //      console.log(str[i]);
    //      count = count + 1;
    //  }
     i = i + 1;
 } 
 }

firstFiveVowels('Regular expressions are for term 2.')

//3.//
function printEveryThirdCharacter(str){
    let i = 2;
    while (i < str.length){
        console.log(str[i])
        i = i + 3;
    }


}
printEveryThirdCharacter('I am the alfalfa and the omelette.')

//4.//
function firstFourCharacters(str, start){
    let count = 0;
    let i = start;
    while (i < str.length){
        if (count < 4) {
            console.log(str[i]);
            count = count +1;
        }

        i = i + 1;

    }

}
firstFourCharacters("Oh hi, I didn't see you there. Welcome", 4)
firstFourCharacters("Oh hi, I didn't see you there. Welcome", 36)

//5.//
// console.log('hello'.indexOf('o'))
function printOutU(str){
    let i = 0;
    while (i < str.length){
        if(str[i] === 'u'){
            console.log(i)
        } //i is just the index number, str[i] is the character//
    i = i + 1;
    }
}
printOutU('You picked the wrong house, bub.')

//6.//
function firstIndexOfU(str){
    let i = 0;
    while (i < str.length){
        if(str[i] === 'u'){
            console.log(i)
            return; //return stops the function entirely
        }
    i = i + 1;

}
}
firstIndexOfU('You picked the wrong house, bub.')

//7.//
function firstIndexOfU2(str){
    let found = false;
    let i = 0;
    while (i < str.length){
        if(str[i] === 'u' && found === false){
            console.log(i)
            
            found = true;
        }
    i = i + 1;
}
    if (found === false){
        console.log(-1)
    }

}
firstIndexOfU2('You picked the wrong house, bub.');
firstIndexOfU2("I'm Canadian.")
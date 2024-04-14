                                                               //  task1

 // let siyahi = [
//     {name:'Bob', age: 30, voted: true},
//     {name:'Jake', age: 32, voted: true},
//     {name:'Kate', age: 25, voted: false},
//     {name:'Sam', age: 20, voted: false},
//     {name:'Phil', age: 21, voted: true},
//     {name:'Ed', age:55, voted:true},
 //    {name:'Tami', age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
 //    {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
 //    {name: 'Zack', age: 19, voted: false}
 //   ];
              
  //   let totalvoted = siyahi.reduce((acc, value) => {
  //     return value.voted ? acc + 1 : acc;
 //   }, 0);
              
 //   console.log(totalvoted);

                                                                       // task2
// let wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];
                    
// let totalPrice = wishlist.reduce((acc, currentItem) => {
  //   return acc + currentItem.price;
// }, 0);
                    
// console.log(totalPrice);

                    // task3

 // function uzunsoz(str) {
//   let sozler = str.split(" ");
 //   let soz = "";
                    
//   for (let i = 0; i < sozler.length; i++) {
//     if (sozler[i].length > soz.length) {
//       soz = sozler[i];
//     }
//   }
                    
//   return soz;
// }
                    
 // console.log(uzunsoz('Web Development Tutorial')); 


                                                        // task4

       let sozler = "trendyol amazon aliexpress"      
       function words(sozler) {
       let cumle = sozler.split (' ')
       let ifade=""
       for (let i = 0; i < cumle.length; i++) {
        sozler [i]=sozler [i][0].toUpperCase()+ sozler[i].slice(1)
        ifade = ifade+sozler[i]+" "
       }

        return ifade
       }  
       console.log(words(sozler));                                        
                                                        //  task5

// function kesmek(str, numWords) {
// let words = str.split(" ");
// let kesilmisSoz = [];
                                                        
// for (let i = 0; i < numWords && i < words.length; i++) {
// kesilmisSoz.push(words[i]);
//   }
                                                        
// let result = kesilmisSoz.join(' ');
                                                        
// return result;
//   }
                                                        
// console.log(kesmek('The quick brown fox jumps over the lazy dog', 4));                          
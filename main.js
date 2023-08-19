const store = [
  {
    category : 'drama',
    movie : [
      'Barbie',
      'Spartacass'
    ]
  },
  
  {
    category : 'comedy',
    movie : [
      'FunnyShit',
      'FunnyShit2'
    ]
  }
]

let isRunnig = true;

while(isRunnig){
  const choiceOfCategory = prompt(`Hey, choose category of films, that u wanna watch:\n${categories(store)}`);

  for(const el of store){
    if(choiceOfCategory === el['category']){
      alert(`Here is ur films ${el['movie']}`);

      let isExit = prompt("R u wanna watch another category?");

      if(isExit[0].toLocaleLowerCase() === 'n') isRunnig = false;
    }
  }
}

//FUNC THAT RECIEVE ALL CATEGORIES IN ARR
function categories(arr) {
  let categoriesStr = '';

  for(const el of arr){
    if(el['category'] === arr[0]['category']){
      categoriesStr += el.category;
    } else categoriesStr += ", " + el.category;
  }

  return categoriesStr;
}

//FUNC THAT CHECKING IS IT ARR
function isArr(arr) {
  if(!isArr(arr)) return alert("R u idiot?)")
}
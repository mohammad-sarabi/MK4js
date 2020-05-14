//1

function garegoryToJalali(getGaregory) {
  let jalali = jalaali.toJalaali(getGaregory);
  return jalaali
}

// let today = new Date().toLocaleDateString('fa-IR');
// console.log(today);



//2
const diffDates = (dOne, dTwo) => {
  const year = Math.abs(dOne.getFullYear() - dTwo.getFullYear());
  const month = Math.abs(dOne.getMonth() - dTwo.getMonth()) ;
  const day = Math.abs(dOne.getDate() - dTwo.getDate());
  const hour = Math.abs(dOne.getHours() - dTwo.getHours());
  const min = Math.abs(dOne.getMinutes() - dTwo.getMinutes());
  const sec = Math.abs(dOne.getSeconds() - dTwo.getSeconds());

  return {year, month, day, hour, min, sec}

};


const dOne = new Date('2020-08-01T12:22:41');
const dTwo = new Date('2020-02-20T23:19:01');


console.log(diffDates(dOne, dTwo))
//3







//4
var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
aestTime = new Date(aestTime);
console.log('AEST time: '+aestTime.toLocaleString())

var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tehran"});
asiaTime = new Date(asiaTime);
console.log('Tehran time: '+asiaTime.toLocaleString())

var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
usaTime = new Date(usaTime);
console.log('USA time: '+usaTime.toLocaleString())
//5








//6
function subsetStr(txt) {
  const arr = [];

  for (let i = 0; i < txt.length; i++)
      for (let j = 1; j < txt.length + 1; j++)
          arr.push(txt.substr(i, j));

  return arr;
};
function removeDuplicate(arr){
  let result = [];
  arr.map(item => {
      if (!result.includes(item))
          result.push(item);
  });
  return result;
};
console.log(removeDuplicate(subsetStr('dog')))


//7
function convertObjToList(object) {
  return Object.entries(object);
}
let obj = {
  country:"Iran", 
  capital:"Tehran",
   population: "18M"
}
convertObjToList(obj)

//8
let arr=[{
  name:"mohammad",
  surname:"hatamy",
  age:"24",
  id: 454
},{
  name:"ali",
  surname:"rahmati",
  age:"29",
  id: 456
},{
  name:"mehdi",
  surname:"rezaee",
  age:"40",
  id: 782
}]

homes.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

//9
  


//10
const d = new Date(2014, 10, 2);

const addMinutes = (date, min) => {
    date.setMinutes(min);
    return date;
};

console.log(addMinutes(d, 30));
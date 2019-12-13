var hobbies = ["Football","Badminton","Cooking","Singing","Travelling"];
hobbies.push("Reading","Coding")
console.log("Hobbies after push ", hobbies)

console.log("===============")
hobbies.pop()
console.log("Hobbies after pop ", hobbies)

console.log("===============")
hobbies.unshift("Sleeping","Birdwatching")
console.log("Hobbies after unshift ", hobbies)

console.log("===============")
hobbies.shift()
console.log("Hobbies after shift ", hobbies)

console.log("=============")
var isHobbiesArray = Array.isArray(hobbies);
console.log("Is hobbies array ", isHobbiesArray)

console.log("=============================")
var hasCooking = hobbies.includes("Cooking", 5)
console.log("Has cooking ", hasCooking)

var indexSinging = hobbies.indexOf("Singing");
console.log("Index of singing ", indexSinging)

console.log("=============")

var str = hobbies.join("---");
console.log("Join method: ", str)

console.log("=============")

var brands = ["Signature","Bisleri","Kinfisher","Kinley"]
brands.splice()
// brands.splice(1,1,"Ibbani")
console.log("Brands after splice ", brands)

console.log("==================")

var movies = ["Bangara manushya", "Bhoo Kailas","Mother India","Balan","Indian"]
var m = movies.slice(1,3)
console.log("Movies after slice ", movies)
console.log("Movies after slice ", m)

console.log("==================")


var movies = ["Bangara manushya", "Bhoo Kailas","Mother India","Balan"]
var f = movies.slice(0)
console.log("Before ",movies)
var a = f.splice(2, 0,"aaaaaa")
console.log("After ",f)
console.log("Before ",movies)

console.log("==================")



function findLargestNums(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++){
    var val = arr[i].sort(function(a,b){return a<b?1: -1;});
    result.push(val[0]);
  }
  return result;
}

function firstVowel(str) {
	const vow = ['a','e','i','o','u','A','E','I','O','U']
	for (var i = 0; i < str.length; i++){
		var j = str.charAt(i)
		if (vow.includes(j)){
			console.log(i)
			return i
			consol.log(i)
		}
	}
}
firstVowel("ello")





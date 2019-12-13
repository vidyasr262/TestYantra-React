var items = [
    {
        id: 1,
        name: "lipstick",
        price: 850
    },
    {
        id: 2,
        name: "eyeliner",
        price: 500
    },
    {
        id: 3,
        name: "Beard oil",
        price: 900
    },
    {
        id: 4,
        name: "Rakhi",
        price: 250
    }

];

console.log(items[0])
console.log(items[1])
console.log(items[2])
console.log(items[3])
console.log("=======================")
// for(var item of items){
//     console.log(item)
// }
console.log("=======================")

// var filterItem = items.filter(item => items.price > 500)
// console.log("After filter ",item)
// console.log("After filter ", filterItem)

var filterItem = items.filter(value => value.price>500)
console.log(filterItem)
console.log(items)




var mapItems = items.map(gst => {

      var a = {
        price: gst.price + 50,
        id: gst.id,
        name: gst.name
      } 
      console.log(" After",a)
    return a
    
})

console.log(mapItems)
console.log(items)

console.log("========one more methode==========")
var m = items.map(item => {
var it = Object.assign({ }, item);
    it.price = it.price+50;
    console.log(it)
})
    
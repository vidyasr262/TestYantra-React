function sum(...nums) {
    let total = 0;
    for(let i = 0;i<nums.length; i++){
      total += nums[i]
    }
    return total
}

const value = sum(10,20)
console.log("Value is ", value)
const value1 = sum(10,20,30)
console.log("Value1 ",value1)

function printAnimals(animal1, animal2, ...animals){
    console.log(animal1)
    console.log(animal2)
    for(let i = 0; i< animals.length; i++){
        console.log(animals[i])
    }

}
printAnimals('lion','tiger','cow','dog')


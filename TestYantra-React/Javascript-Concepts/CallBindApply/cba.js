const john = {
    name: 'john',
    age: 25,
    presentation: function(style, timeOfDay) {
        if (style === 'formal')
            console.log(`Good ${timeOfDay}, this is ${this.name}`)
        else
            console.log(`Hey ${timeOfDay}, this is ${this.name}`)

    }
}
john.presentation('formal', 'morning')
console.log("======================")

const babitha = {
    name: 'babitha',
    age: 23
}

john.presentation.call(babitha, 'friendly', 'Evening')

console.log("========================")


const emily = {
    name: 'emily',
    age: 22
}
john.presentation.apply(emily, ['formal', 'night'])




// const john = {
//     name: 'john',
//     age: 25,
//     presentation: function(...arr) {
//         if (arr[0] === 'formal')
//             console.log(`Good ${arr[1]}, this is ${this.name}`)
//         else
//             console.log(`Hey ${arr[1]}, this is ${this.name}`)

//     }
// }



console.log("==============")

const vijay = {
    name: 'vijay',
    age: 50
}

john.presentation.bind(vijay, 'friendly', 'Afternoon')

//bind does not execute the function instead
//it will create a copy of the function and it will return it
//we can reuse the function whenever required with diff parameters

const bindFunction = john.presentation.bind(vijay, 'friendly')
bindFunction('Morning');
bindFunction('Evening');
bindFunction('night');

bindFunction();
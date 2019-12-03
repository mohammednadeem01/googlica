
const person = [{
    firstName: "hello",
    lastName: "world",
    age: 25
}, {
    firstName: "hel",
    lastName: "no",
    age: 28
}]

[{
    firstName: "hllo",
    lastName: "world",
    age: 25
}, {
    firstName: "adv",
    lastName: "abc",
    age: 24
}]

[{
    firstName: "hello",
    lastName: "world",
    age: 21
}, {
    firstName: "ghalib",
    lastName: "mirza",
    age: 22
}]

person.map((obj)=>{
    return ('$(obj.firstName) $(obj.lastName)')
})
// Code your solutions in this file
function writeCards(names, holiday) {
    const messages =[]
     for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
        messages.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
     }
     return messages 
}
writeCards(["Kalib", "Abby", "Jordan"], "easter")

function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber--)
    }
}


countDown(12)



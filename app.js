const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{
    highWaterMark: 90000,
    enconding: 'utf8',
})

// default 64kb
//last buffer - remainder
// highWaterMark - control size
// const steam = createReadStream('./content/big.txt',{ hightWaterMark:90000})
// const steam = createReadStream('./content/big.txt',{ encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error',(result) =>{
    console.log(result)
})
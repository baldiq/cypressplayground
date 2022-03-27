let promise = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve('Promise spełniony')
    } else {
        reject('Promise nie spełniony')
    }
})

promise.then((message) => {
    console.log(message + ', promise przeszedl')
}).catch((message) => {
    console.log(message + ', promise NIE przeszedl')
})

// function login(userName, password, resolve, reject) {
//     if (userName === 'admin' && password === 'admin') {
//         resolve('login success')
//     } else {
//         reject('login is failed')
//     }
// }
const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        resolve('login success')
    } else {
        reject('login is failed')
    }
}

// login('admin', 'admin', (status) => {
//     console.log(status)
// }, (err) => {
//     console.log(err)
// })

// login('xxx', 'yy', (status) => {
//     console.log(status)
// }, (err) => {
//     console.log(err)
// })

// login('admin', 'admin', (status) => console.log(status), (err) => console.log(err))
// login('xxx', 'yy', (status) => console.log(status), (err) => console.log(err))

login('admin', 'admin', status => console.log(status), err => console.log(err))
login('xxx', 'yy', status => console.log(status), err => console.log(err))
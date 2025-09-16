function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('something went wrong')
    }
}

function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    login('admin', 'admin').then(re => console.log(re)).catch(err => console.log(err))
    blockMe('end')
}
main()
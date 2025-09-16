function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'Login failed')
        }
    })
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
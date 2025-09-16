//getUser-->login--->dashboard

const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin'
        }
        // user=null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User not found')
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}
const showDashoard = status => {
    console.log('showDashoard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Welcome to Dashboard')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest')
        }
    })
}


async function main() {
    // getUser()
    //     .then(user => login(user))
    //     .then(status => showDashoard(status))
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))
    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashoard(status)
        console.log(page)
    }
    catch (err) {
        console.log(err)
    }
}
main()
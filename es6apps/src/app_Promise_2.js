function getError() {
    return Promise.reject('something went wrong')
}

function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    getError().catch(err=>console.log(err))
    blockMe('end')
}
main()
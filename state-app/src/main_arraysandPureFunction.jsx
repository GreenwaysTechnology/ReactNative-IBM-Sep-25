

// function add(todos, todo) {
//     //mutable api :push is not pure function 
//     return todos.push(todo)
// }

function add(todos, todo) {
    //mutable api :concat is  pure function 
    // return todos.concat(todo)
    return [...todos, todo]
}

let todos = [{
    title: 'Learn react',
    done: true
}];
Object.freeze(todos)
console.log(add(todos, { title: 'Learn Microservices', done: false }));

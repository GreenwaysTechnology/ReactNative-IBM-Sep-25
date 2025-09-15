//strings : "" or '' or `` with `${}`

let firstName = "Subramanian"
let lastName = 'Murugan'
// let fullName = firstName + lastName
let fullName =`${firstName} ${lastName}` //string interpolation
//console.log("Name : " + fullName)
// console.log("Name : " , fullName)
console.log(`Name : ${fullName}`)

//multi line strings
let doc = `
   <html>
      <head>
          <title></title>
      </head>
    <body>
    </body>
 </html>
`
console.log(doc)
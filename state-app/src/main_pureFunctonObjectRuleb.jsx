
//impure function
// function updateProfile(city, profile) {
//     profile.city = city
//     return profile
// }

//pure function
function updateProfile(city, profile) {
    //return new object : way 1
    // return {
    //     name: profile.name,
    //     city: city
    // }
    //way 2
    // return Object.assign({}, profile, { city: city })

    //way 3: Using spread notation
    // return {
    //     ...profile,
    //     city: city
    // }
    return {
        ...profile,
        city
    }

}


let profile = {
    name: 'Subramanian Murugan',
    city: 'Chennai'
}
console.log('Before Update ', profile)
let updatedResult = updateProfile('Coimbatore', profile)
console.log(profile === updatedResult ? "Same Object" : "Different Object")
console.log('After Update', updatedResult)


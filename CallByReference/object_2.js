// Singleton User
const reddit_user = new Object()

reddit_user.id = "user_xyz"
reddit_user.username = "USER123"
reddit_user.isLoggedIn = false

const other_details = {
    email : "user@xyz.com",
    fullname : {
     userfullname : {
        firstname: "Andrew",
        lastname: "Brown"
        }
    }
}

console.log(other_details.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "c", 4: "d"}

const new_obj = {...obj1, ...obj2}
console.log(new_obj)
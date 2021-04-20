let users=[]//this will act as a user(database)
 export const getUsers=(req,res)=>{
    console.log("in function call getUser..i this / user endpoint got hit")
    res.send(users)
}
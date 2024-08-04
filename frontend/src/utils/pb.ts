import PocketBase from 'pocketbase'
// import assert from 'node:assert/strict' // what about bun and deno? will it work there too?
export const PB_IP : string = "http://127.0.0.1:8090"

// https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs
// https://medium.com/@bhairabpatra.iitd/env-file-in-react-js-09d11dc77924
// REMINDER : CHECK IF THEYRE STRING OR UNDEFINED !!!

// const PB_IP = ""
// const PB_ADMIN_USERNAME = ""
// const PB_ADMIN_PASSWORD = ""

// NOTE: ONLY ABSTRACT WHEN FULLY SURE
// export const envPbIp = function():string{
//   const ip = PB_IP

//   if (typeof ip === 'string') {
//     console.assert(ip !== "" , "PB_IP is an empty string")
//     return ip; 
//   }
//   else if (typeof ip === 'undefined'){
//     throw new Error("PB_IP's type is undefined");
//   }
//   throw new Error("PB_IP's type is unkown");
// }

// export const envPbAdminUserName = function():string{
//   const user_name = PB_ADMIN_USERNAME

//   if (typeof user_name === 'string') {
//     console.assert(user_name !== "" , "PB_ADMIN_USERNAME is an empty string")
//     return user_name; 
//   }
//   else if (typeof user_name === 'undefined'){
//     throw new Error("PB_ADMIN_USERNAME's type is undefined");
//   }
//   throw new Error("PB_ADMIN_USERNAME's type is unkown");
// }

// export const envPbAdminPassword = function():string{
//   const password = PB_ADMIN_PASSWORD

//   if (typeof password === 'string') {
//     console.assert(password !== "" , "PB_ADMIN_PASSWORD is an empty string")
//     return password; 
//   }
//   else if (typeof password === 'undefined'){
//     throw new Error("PB_ADMIN_PASSWORD's type is undefined");
//   }
//   throw new Error("PB_ADMIN_PASSWORD's type is unkown");
// }  


// initiates a pocketbase intstance
export const newPocketBase = function(ip:string):PocketBase {
  console.assert(typeof ip === "string" , "utils newPocketBase: ip is not an string")
  console.assert(ip !== "" , "utils newPocketBase: ip is provided but empty")
  
  if (typeof ip === 'string') {
    const pb = new PocketBase(ip);
    return pb
  }
  else if (typeof ip === 'undefined') {
    // throw new Error("PB_IP's type is undefined");
    console.log("PB_IP's type is undefined")
  }
  throw new Error("PB_IP : Something went wrong! ");
}

/**
* - Make sure to `clearAuth()` when youre done
*/
export const authWithPassword = async (pb:PocketBase,username:string,password:string) => {
  console.assert(typeof username === "string" , "utils authWithPassword: username is not type of string")
  console.assert(typeof password === "string" , "utils authWithPassword: username is not type of string")

  console.assert(username !== "" , "utils authWithPassword: username is provided but empty")
  console.assert(password !== "" , "utils authWithPassword: password is provided but empty")

  const authData = await pb.admins.authWithPassword(username,password);
  return authData
}

// Clear auth data
export const clearAuth = function(pb:PocketBase) {pb.authStore.clear();}


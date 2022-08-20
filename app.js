

/*
! Front-end    =>   Tracking  <= backend
? sentry.com
*/


/*
! 7 types of error in Javascript :-
! RangeError,ReferenceError,SyntaxError,TypeError,URIError,EvalError,InternalError.
*/



// Error function

// const customError = new Error("Error occured");
// console.log(typeof(customError)); // oblect
// console.log(customError.message); // Error occured
// console.log(customError.name); // Error



const refisterUer = (user) => {
        if(! user.name || ! user.email ){   // negate = ! ( true ,false )
                // throw error here

                // const registerationError = new Error("User must have both name and email !");
                // console.log("Registeration error" ,registerationError)
                // return registerationError;

                // return new Error("User must have both name and email !");

                // send errors to sentry website by fetch method.
                throw new Error("User must have both name and email !");
        }
        return "Registered successfully!";
};
                                // you can play the codes =  email: "JT77@gamil.com"
const user = {name: "Khun Tun",email: "JT77@gamil.com"};


try {
                const status =  refisterUer(user);
                console.log(status);
        }catch(error) {
                console.log("inside of catch...", error);
}






console.log("Rest of codes that should only be if user registeration was successfull");
console.log("Rest of codes that should only be if user registeration was successfull");
console.log("Rest of codes that should only be if user registeration was successfull");
console.log("Rest of codes that should only be if user registeration was successfull");
console.log("Rest of codes that should only be if user registeration was successfull");
console.log("Rest of codes that should only be if user registeration was successfull");
console.log("Rest of codes that should only be if user registeration was successfull");

/*
! differences return and throw
? return can all run codes function scope and global scope even if error.
? throw can only run codes inside of function scope even if error.

*/

/*
! negate example
*/
// const foods = {name:"meal",id:01,location:"downtown"};
// console.log(foods.meat); // undefined
// console.log(!foods.meat); // true
// console.log(!foods.id); // false
// console.log(!foods.name || !foods.id); // false
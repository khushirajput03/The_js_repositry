const Email = "k@khushi.ai";

if(Email){
    console.log("Got the user Email")
}
else{
    console.log("Don't have the user Email")
}

// 
const userEmail = [];

if(userEmail){
    console.log("Got the user Email")
}
else{
    console.log("Don't have the user Email")
}


//false value = false , 0, -0, BigInt, 0n, "", null, undefined, Nan

// true value = "0", "false", " ", [], {}, function(){},


if(userEmail === 0){
    console.log("Array is Empty")
}




const EmptyObj = {

}

if(Object.keys(EmptyObj).length === 0){
    console.log("Object is Empty")

}



// false == 0 // true
// false == '' // true
// 0 == '' // true
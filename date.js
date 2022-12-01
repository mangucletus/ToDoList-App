
// created local module
exports.getDate = function(){
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    let today = new Date();

    return today.toLocaleDateString("en-US", options)
}


exports.getDay = function(){
    const options = { 
        weekday: 'long'
    };
    let today = new Date();

    return today.toLocaleDateString("en-US", options)
}

console.log(module.exports);



    // var currentDay = today.getDay();

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    
    //     default:
    //         console.log("Error: Current day is equal to: " + currentDay);
    //         break;
    // }
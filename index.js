function goodsDeliverySchedule(days) {
    days.forEach((day) => {
        switch (day) {
            case "monday":
                console.log("Today we deliver goods from Nairobi");
                break;

            case "tuesday":
                console.log("Today we deliver goods from Kisumu");
                break;

            case "wednesday":
                console.log("Today we deliver goods from Mombasa");
                break;

            default:
                console.log("The delivery process is closed wait until next week");
                break;

        }
    })

}

const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
goodsDeliverySchedule(days);


// Create a program that loops through an array of book statuses and prints 
// "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

// function bookStatus(status){
//     if(status = available){
//         console.log("Ready to lend")
//     }else  {
//         console.log("Checked out")
//     }
    
// }

// sttus 






const age = [19, 19, 23, 15,18];
function ageScreening(age) {

    for (i = 0; i < age.length; i++)
    {
    if (age[i] >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    };
    }
};
ageScreening(age);






//Write a program using a while loop that simulates a countdown of 
// lives in a game starting from 5 and prints "You have X lives left" 
// on each loop until it reaches 0.

function livesCountdown(lives){
 let lives = 5;
 while(life <=5){
    console.log(`You have ${lives} left`);
lives
 }
}
livesCountdown()


//Using a do...while loop, write a program that loops through an array of 
// user feedback and prints each comment until the array is empty.

function comments(feedback) {

}


//Write a program that loops through an array of user login statuses and prints 
// "Welcome back!" if the user is "logged in" or "Please log in" otherwise.


function checkStatus(status){
    status.forEach((status)=>{
        switch (status){
            case "logged in":
                console.log("Welcome back");
                break;

                default :
                console.log("Please log in")


        }
        
    })

}



//Write a program that processes an array of support ticket priorities 
// using a switch statement to print how quickly each one should be addressed 
// based on whether the priority is "low", "medium", or "high".

//Create a while loop that simulates a quiz countdown from 10 seconds, 
// printing each number until it reaches 0.







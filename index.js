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


function bookAvailability(books) {
    books.forEach((book) => {
        switch (book) {
            case "available":
                console.log("Ready to lend");
                break;
            case "checked out":
                console.log("borrowed");
                break;
            default:
                console.log("Not available")
        };


    }
    )

}

const books = ["available", "borrowed", "available"];
bookAvailability(books);











const age = [19, 19, 23, 15, 18];
function ageScreening(age) {

    for (i = 0; i < age.length; i++) {
        if (age[i] >= 18) {
            console.log("Adult");
        } else {
            console.log("Minor");
        };
    }
};
ageScreening(age);






function livesCountdown() {
    let lives = 5;
    while (lives > 0) {
        console.log(`You have ${lives} left`);
        lives--;
    }
}
livesCountdown()



function comments(feedback) {
    let i = 0;
    do {
        console.log(feedback[i]);
        i++
    } while (i < feedback.length)

}
const feedback = ["I need help", "Which services do you offer"]
comments(feedback)




function checkStatus(status) {
    status.forEach((status) => {
        switch (status) {
            case "logged in":
                console.log("Welcome back");
                break;

            default:
                console.log("Please log in");
                break;


        };

    });

};

const status = ["logged in", "not logged in", "logged in"];
checkStatus(status);



function ticketPrioritizatation(priorities) {
    priorities.forEach((priority) => {
        switch (priority) {
            case "low":
                console.log("Low level of priority");
                break;
            case "medium":
                console.log("Medium level of priority");
                break;
            case "high":
                console.log("High level of priority");
                break
            default:
                console.log("Not prioritized at all")
        }
    }
    )
}

const priorities = ["high", "low", "medium", "no ticket"];
ticketPrioritizatation(priorities);




function quizCountdown() {
    let seconds = 10;
    while (seconds > 0) {
        console.log(`${seconds}`);
        seconds--;
    }
}
quizCountdown()





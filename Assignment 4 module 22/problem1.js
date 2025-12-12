function totalFine( fare ) {
    // You have to write your code here
    if (fare < 1 || typeof(fare) !== "number")
        return "Invalid";
    else {
        let totalFare = fare + (fare * 20 / 100) + 30;
        return totalFare;
    }
}
// console.log(totalFine(65));
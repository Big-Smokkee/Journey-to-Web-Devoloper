/*  Problem 1    */
function totalFine(fare) {
    // You have to write your code here
    if (fare < 1 || typeof(fare) !== "number")
        return "Invalid";
    else {
        let totalFare = fare + (fare * 20 / 100) + 30;
        return totalFare;
    }
}

/*  Problem 2    */
function  onlyCharacter( str ) {
    // You have to write your code here
    if (typeof (str) !== "string")
    {
        return "Invalid";
    }
    str.trim();
    let outputString = "";
    for (let i of str)
    {
        if (i !== ' ')
        {
            outputString = outputString + i;
        }
    }
    let res = outputString.toUpperCase();
    return res;
}

/*  Problem 3    */
function bestTeam(player1, player2) {
    // You have to write your code here
    if (typeof (player1) !== "object" || typeof (player2) !== "object") {
        return "Invalid";
}

    const team1FoulCount = player1.foul + player1.cardY + player1.cardR;
    const team2FoulCount = player2.foul + player2.cardY + player2.cardR;

    if (team1FoulCount < team2FoulCount) {
        return player1.name;
    }
    else if (team2FoulCount < team1FoulCount) {
        return player2.name;
    }
    else
    {
        return "Tie";
    }
}


/*  Problem 4    */
function  isSame(arr1 , arr2 ) {
    // You have to write your code here
    if (!(Array.isArray(arr1)) ||!(Array.isArray(arr2)))
    {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) return false;
    // parseInt(arr1);
    for (let i = 0; i < arr1.length; i++)
    {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

/*  Problem 5   */
function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let passCount = 0;
    let failCount = 0;
    let avg = 0;
    const report = {
        finalScore: avg,
        pass: passCount,
        fail: failCount
    };
    let sum = 0; 
    for (const mark of marks)
    {
        if (mark >= 0 && mark < 40)
            failCount++;
        else if (mark >= 40 && mark <= 100)
            passCount++;
        sum += mark;
    }
    if (marks.length > 0) {
        avg = Math.round(sum / marks.length);
        report.finalScore = avg;
        report.pass = passCount;
        report.fail = failCount;
    }
    
    return report;
}
// const object1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
// const object2 = "France";


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

// console.log(bestTeam(object1, object2));
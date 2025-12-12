/*
*   class --> template
*   object --> 
*
*
*/
class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
        // console.log("Calling the Constructor method", name);
    }
    goal() {
        console.log('Score a goal');
    }
    getTeamName() {
        return 'Borsa';
    }
}
const player1 = new Player('Tom');
const player2 = new Player('Shanto', 30);
console.log(player2.location, player2.name, player2.age, player2.getTeamName());
// player1.goal()
console.log(player1);
console.log(player2);
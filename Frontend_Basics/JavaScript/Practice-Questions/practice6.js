/* Author: Pogi Tangkad
   JavaScript file for practice6
*/

function friends(peeps) {
  for (const peep of peeps) {
    peep["loyal"] = 0;
    for (const friend of peeps) {
      if (
        friend.friends.includes(peep.name) &&
        peep.friends.includes(friend.name)
      ) {
        peep["loyal"] += 1;
      }
    }
  }

  peeps.sort((a, b) => b.loyal - a.loyal);
  console.log(peeps[0].name + ", has the most loyal friends.");
  //return mostLoyal;
}

const people = [
  { name: "Pogi", friends: ["Mike", "Tim", "Sally", "John"] },
  { name: "Tim", friends: ["John", "Sally", "Pogi"] },
  { name: "John", friends: ["Tim", "Mike"] },
  { name: "Mike", friends: ["Pogi"] },
  { name: "Sally", friends: ["Tim"] },
];

friends(people);

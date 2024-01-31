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
  return peeps[0].name;
}

const people = [
  { name: "Maganda", friends: ["Pogi"] },
  { name: "Pogi", friends: ["Mike", "Tim", "Sally", "John"] },
  { name: "Tim", friends: ["John", "Sally", "Pogi"] },
  { name: "John", friends: ["Tim", "Mike", "Pogi"] },
  { name: "Mike", friends: ["Pogi"] },
  { name: "Sally", friends: ["Tim", "Pogi"] },
];

const mostLoyal = friends(people);

console.log(mostLoyal, ", has the most loyal friends.");

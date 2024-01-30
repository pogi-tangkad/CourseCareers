/* Author: Pogi Tangkad
   JavaScript file for practice4
*/

console.log("JavaScript Practice4");

const Target = "CourseCareers";
const Delimiter = "|";
const Spacing = 1;

function stringDelimiter(T, D, S) {
  let newString = "";
  let i = 0;
  for (const char of T) {
    newString = newString.concat(char);
    i++;
    if (i === S) {
      newString = newString.concat(D);
      i = 0;
    }
  }
  return newString;
}

console.log(stringDelimiter(Target, Delimiter, Spacing));

console.log(stringDelimiter("timisgreat", "-", 3));

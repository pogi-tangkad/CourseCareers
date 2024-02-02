/*
Length
Characters
- uppercase letters
- lowercase letters
- special characters
- numbers

all for copy of generated password
*/

function pwdGenerate() {
  document.getElementById("pwd-display").innerHTML = "";
  const pwdLength = document.getElementById("length").value;
  const pwdUpper = document.getElementById("uppers").checked;
  const pwdLower = document.getElementById("lowers").checked;
  const pwdSpecial = document.getElementById("specials").checked;
  const pwdNumber = document.getElementById("numbers").checked;

  let totalOptions = 0;
  if (pwdUpper) {
    totalOptions += 1;
  }
  if (pwdLower) {
    totalOptions += 1;
  }
  if (pwdSpecial) {
    totalOptions += 1;
  }
  if (pwdNumber) {
    totalOptions += 1;
  }

  const variance = Math.floor(pwdLength / totalOptions);
  const varianceOffset = pwdLength % totalOptions;

  let newPasswordCharacters = [];
  const specialCharactersOptions = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "-",
    "+",
    "/",
    "(",
    ")",
  ];

  for (let i = 0; i < variance; i++) {
    if (pwdUpper) {
      newPasswordCharacters.push(
        String.fromCharCode(65 + Math.floor(Math.random() * 26))
      );
    }
    if (pwdLower) {
      newPasswordCharacters.push(
        String.fromCharCode(97 + Math.floor(Math.random() * 26))
      );
    }
    if (pwdSpecial) {
      newPasswordCharacters.push(
        specialCharactersOptions[Math.floor(Math.random() * 13)]
      );
    }
    if (pwdNumber) {
      newPasswordCharacters.push(
        String.fromCharCode(48 + Math.floor(Math.random() * 10))
      );
    }
  }
  let offsetCharacters = [];
  if (varianceOffset > 0) {
    if (pwdUpper) {
      offsetCharacters.push(
        String.fromCharCode(65 + Math.floor(Math.random() * 26))
      );
    }
    if (pwdLower) {
      offsetCharacters.push(
        String.fromCharCode(97 + Math.floor(Math.random() * 26))
      );
    }
    if (pwdSpecial) {
      offsetCharacters.push(
        specialCharactersOptions[Math.floor(Math.random() * 13)]
      );
    }
    if (pwdNumber) {
      offsetCharacters.push(
        String.fromCharCode(48 + Math.floor(Math.random() * 10))
      );
    }
  }

  console.log(variance, " ", varianceOffset);
  console.log(newPasswordCharacters);
  console.log(offsetCharacters);
  let newPassword = "";
  for (let i = 0; i < pwdLength; i++) {
    if (newPasswordCharacters.length > 0) {
      let randomCharacterPosition = Math.floor(
        Math.random() * newPasswordCharacters.length
      );
      newPassword += newPasswordCharacters[randomCharacterPosition];
      newPasswordCharacters.splice(randomCharacterPosition, 1);
    } else {
      let randomCharacterPosition = Math.floor(
        Math.random() * offsetCharacters.length
      );
      newPassword += offsetCharacters[randomCharacterPosition];
      offsetCharacters.splice(randomCharacterPosition, 1);
    }
  }
  document.getElementById("pwd-display").innerHTML += newPassword;
}

const generateKey = (alphabet) => {
  const max = alphabet.length;
  return (length) => {
    let key = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * max);
      key = key + alphabet[index];
    }
    return key;
  };
};
const char =
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+-={}[]:;'<>?";
const generatePassword = generateKey(char);
const password = generatePassword(12);
console.log({ password });

//Exercise 5

function getLetterFrequency(words) {
  let letterFrequency = {};

  for (let i = 0; i < words.length; i++) {
    let letter = words[i].toLowerCase();

    if (!letterFrequency[letter]) {
      letterFrequency[letter] = 1;
    } else {
      letterFrequency[letter]++;
    }
  }

  return letterFrequency;
}

const str = "Techupth";

getLetterFrequency(str);

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/

/* 
    *filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.

    *filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).

    *filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).

    *filter1DistinctVowel: accepts an array of strings, and returns only those which contain only one distinct vowel (a,e,i,o,u). For example, "Alabama" contains only 1 distinct vowel "a".

    ^multiFilter: accepts an array of objects, and returns only those which:
        the key capital contains at least 8 characters.
        the key name does not start with a vowel.
        the key tag has at least one vowel.
        the key region is not "South"
 */

function filterShortStateName(states) {
  return states.filter((state) => state.length < 7);
}

function filterStartVowel(states) {
  return states.filter((state) => state.match(/^[AEIOUaeiou]/));
}

function filter5Vowels(states) {
  return states.filter((state) =>
    state.match(
      /[AEIOUaeiou].*[AEIOUaeiou].*[AEIOUaeiou].*[AEIOUaeiou].*[AEIOUaeiou]/
    )
  );
}

function filter1DistinctVowel(arr) {
  return arr.filter((str) => {
    const lowerStr = str.toLowerCase();
    const vowels = new Set();
    for (let char of lowerStr) {
      if ("aeiou".includes(char)) {
        vowels.add(char);
      }
    }
    return vowels.size === 1;
  });
}

function multiFilter(arr) {
  return arr.filter((obj) => {
    const hasLongCapital = obj.capital && obj.capital.length >= 8;
    const doesNotStartWithVowel = obj.name && !/^[aeiou]/i.test(obj.name);
    const hasVowelInTag = obj.tag && /[aeiou]/i.test(obj.tag);
    const isNotSouthRegion = obj.region && obj.region !== "South";
    return (
      hasLongCapital &&
      doesNotStartWithVowel &&
      hasVowelInTag &&
      isNotSouthRegion
    );
  });
}

/* 
    filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.

    filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).

    filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).

    filter1DistinctVowel: accepts an array of strings, and returns only those which contain only one distinct vowel (a,e,i,o,u). For example, "Alabama" contains only 1 distinct vowel "a".

    multiFilter: accepts an array of objects, and returns only those which:
        the key capital contains at least 8 characters.
        the key name does not start with a vowel.
        the key tag has at least one vowel.
        the key region is not "South"
 */

function filterShortStateName(states) {
  return states.filter((state) => state.capital.length < 7);
}

function filterStartVowel(states) {
  return states.filter((state) => /^[aeiou]/.test(state.name));
}

function filter5Vowels(states) {
  return states.filter((state) =>
    /[aeiou].*[aeiou].*[aeiou].*[aeiou].*[aeiou]/.test(state.name)
  );
}

function filter1DistinctVowel(states) {
  return states.filter(
    (state) =>
      /[aeiou]/.test(state.name) &&
      /[aeiou]/.test(state.capital) &&
      /[aeiou]/.test(state.region) &&
      /[aeiou]/.test(state.tag)
  );
}

function multiFilter(states) {
  return states.filter(
    (state) =>
      state.capital.length >= 8 &&
      !/^[aeiou]/.test(state.name) &&
      /[aeiou]/.test(state.name) &&
      state.region !== "South" &&
      /[aeiou]/.test(state.tag)
  );
}

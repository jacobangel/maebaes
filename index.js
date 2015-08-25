
const bayes = function (A, BA, B) {
  return A * BA / B;
};

/**
 * Calculating the Chance of cancer for someone given little information. Knowing
 * nothing, we assign a 1% chance of cancer as the base rate.
 *
 * If we find out that this person is 65, then we need more information, namely
 * the odds of being 65 years old, and the probabability that a person with cancer
 * is 65 years old.
 *
 * A: That we have cancer
 * B: Probability that a person is 65
 * B|A The probability that a person with cancer is also 65
 */
const chanceOfAgeGTE65 = 0.2;
const chanceOfCancerHaverIs65 = 0.5;
const generalChanceOfCancer = 1;
console.log(bayes(generalChanceOfCancer, chanceOfCancerHaverIs65, chanceOfAgeGTE65));
/**
 * I got this problem from wikipedia, and I encountered some interesting missteps.
 * I kept wanting to interpret the phrases in whole, rather than as logical units.
 * For instance, I thought for a second that B|A woudl be the answer, instead of
 * just oddly formed evidence.
 */

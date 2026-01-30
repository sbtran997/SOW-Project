/**
 * Check whether a string has at most `maxWords` words.
 * 
 * @param {string} phrase - The input string to check.
 * @param {number} maxWords - Non-negative integer word limit.
 * 
 * @returns {boolean} True if `phrase` contains `maxWords` or less words.
 */
function phraseWithinWordLimit(phrase, maxWords) {
    //ensure phrase is a string
	if (typeof phrase !== 'string') throw new TypeError('Must have a string phrase to check');
    //ensure maxWords is a number, an integer, and greater than 0
	if (typeof maxWords !== 'number' || !Number.isInteger(maxWords) || maxWords <= 0) throw new TypeError("Must have a positive integer to limit to");

    //get rid of leading/trailing spaces
	const rmvWhitespace = phrase.trim();

    //if that's empty, ret 0
	if (rmvWhitespace === '') return 0;

    //split using regex: remove all spaces of any length of grouping
	const words = rmvWhitespace.split(/\s+/);

    //return whether that is within the limit
	return words.length <= maxWords;
}

/**
 * Check whether a string has at most `maxWords` words.
 * 
 * @param {string} phrase - The input string to check.
 * 
 * @returns {boolean} True if `phrase` contains ONLY numbers.
 */
function phraseIsNumbers(phrase) {
    //ensure phrase is a string
    if (typeof phrase !== 'string') throw new TypeError('Must have a string phrase to check');

    //check if the phrase is all numbers using regex
    return /^[0-9]*[.]*[0-9]+$/.test(phrase);
}

export { phraseWithinWordLimit, phraseIsNumbers };

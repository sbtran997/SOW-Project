import { describe, it, expect } from "vitest";

import { phraseWithinWordLimit, phraseIsNumbers } from "../src/StringLimiter"

describe("limitWordsInString" , () => {
    it('Should return true when the given string is within its word limit', () => {
        //set up data

        const phraseToTest = "I want to test this.";
        const wordLimit = 5;

        //do some stuff to it

        const withinLimits = phraseWithinWordLimit(phraseToTest,wordLimit);

        //assert that it follows expectations

        expect(withinLimits).toBe(true);
    });
    
    it('Should return false when the given string is outside of its word limit', () => {
        //set up data

        const phraseToTest = "I want to test this larger string.";
        const wordLimit = 5;

        //do some stuff to it

        const withinLimits = phraseWithinWordLimit(phraseToTest,wordLimit);

        //assert that it follows expectations

        expect(withinLimits).toBe(false);
    });

    it('Should throw a TypeError when the given phrase is not a string', () => {
        //set up data
        const phraseToTest = 12345;
        const wordLimit = 5;

        //assert that it follows expectations        
        expect(() => phraseWithinWordLimit(phraseToTest, wordLimit)).toThrow(TypeError);
    });

    it('Should throw a TypeError when the given limit is negative', () => {
        //set up data
        const phraseToTest = "I want to test this.";
        const wordLimit = -1;

        //assert that it follows expectations        
        expect(() => phraseWithinWordLimit(phraseToTest, wordLimit)).toThrow(TypeError);
    });

    it('Should throw a TypeError when the given limit is not positive', () => {
        //set up data
        const phraseToTest = "I want to test this.";
        const wordLimit = 0;

        //assert that it follows expectations        
        expect(() => phraseWithinWordLimit(phraseToTest, wordLimit)).toThrow(TypeError);
    });

    it('Should throw a TypeError when the given limit is not an integer', () => {
        //set up data
        const phraseToTest = "I want to test this.";
        const wordLimit = 5.5;

        //assert that it follows expectations        
        expect(() => phraseWithinWordLimit(phraseToTest, wordLimit)).toThrow(TypeError);
    });

    it('Should throw a TypeError when the given limit is not a number', () => {
        //set up data
        const phraseToTest = "I want to test this.";
        const wordLimit = "this should be a number";

        //assert that it follows expectations        
        expect(() => phraseWithinWordLimit(phraseToTest, wordLimit)).toThrow(TypeError);
    });

});


describe("phraseIsNumbers", () => {
    it("Should return true if the given string is all numbers", () => {
        const phraseToTest = "12345";

        const isNumbers = phraseIsNumbers(phraseToTest);

        expect(isNumbers).toBe(true);
    });
    
    it("Should return true if the given string is a decimal number with leading integer", () => {
        const phraseToTest = "12345.6789";

        const isNumbers = phraseIsNumbers(phraseToTest);

        expect(isNumbers).toBe(true);
    });
    
    it("Should return true if the given string is a decimal with no leading integer number", () => {
        const phraseToTest = ".12345";

        const isNumbers = phraseIsNumbers(phraseToTest);

        expect(isNumbers).toBe(true);
    });
    
    it("Should return true if the given string is a decimal with a leading 0", () => {
        const phraseToTest = "0.12345";

        const isNumbers = phraseIsNumbers(phraseToTest);

        expect(isNumbers).toBe(true);
    });
    
    it("Should return false for only one character in the given string (beginning)", () => {
        const phraseToTest = "a12345";

        const isNumbers = phraseIsNumbers(phraseToTest);

        expect(isNumbers).toBe(false);
    });
    
    it("Should return false for only one character in the given string (middle)", () => {
        const phraseToTest = "123a456";

        const isNumbers = phraseIsNumbers(phraseToTest);

        expect(isNumbers).toBe(false);
    });
    
    it("Should return false for only one character in the given string (end)", () => {
        const phraseToTest = "123456a";

        const isNumbers = phraseIsNumbers(phraseToTest);

        expect(isNumbers).toBe(false);
    });
    
    it("Should throw a type error if a regular number is passed", () => {
        const phraseToTest = 12345;

        expect(() => phraseIsNumbers(phraseToTest)).toThrow(TypeError);
    });
    
    it("Should throw a type error if a regular decimal is passed", () => {
        const phraseToTest = 12345.6789;

        expect(() => phraseIsNumbers(phraseToTest)).toThrow(TypeError);
    });
});
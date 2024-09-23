// 1. slice()
// Syntax: string.slice(startIndex, endIndex)
// Parameters:
// startIndex: The index at which to begin extraction (inclusive).
// endIndex (optional): The index at which to end extraction (exclusive). If omitted, it extracts to the end of the string.
// Negative Indexes: Can accept negative indexes, which count from the end of the string.
// Returns: A new string containing the extracted section.
let str = "Hello, World!";
console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.slice(-6));    // Output: "World!"

// substring()
// Syntax: string.substring(startIndex, endIndex)
// Parameters:
// startIndex: The index at which to begin extraction (inclusive).
// endIndex (optional): The index at which to end extraction (exclusive). If omitted, it extracts to the end of the string.
// Negative Indexes: Ignores negative indexes and treats them as 0.
// Returns: A new string containing the extracted section.
let str1 = "Hello, World!";
console.log(str.substring(0, 5)); // Output: "Hello"
console.log(str.substring(5, 0));  // Output: "Hello" (swaps indexes)
// substr()
// Syntax: string.substr(startIndex, length)
// Parameters:
// startIndex: The index at which to begin extraction (inclusive).
// length (optional): The number of characters to extract. If omitted, it extracts to the end of the string.
// Negative Indexes: Can accept negative indexes, which count from the end of the string.
// Returns: A new string containing the extracted section.
let str3 = "Hello, World!";
console.log(str.substr(0, 5)); // Output: "Hello"
console.log(str.substr(-6, 5)); // Output: "World"

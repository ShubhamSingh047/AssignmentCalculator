export const add = (numbers: string): number => {
  if (numbers === "") {
    return 0; // Handle the empty string case
  }

  let delimiter = /,|\n/; // Default delimiters: comma or new line

  // Check if the string has a custom delimiter
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // Extract the custom delimiter
    numbers = parts[1];
  }

  // Split by the delimiter(s) and calculate the sum
  const numArray = numbers.split(delimiter).map(Number);

  // Check for negative numbers
  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numArray.reduce((acc, num) => acc + num, 0);
};

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
  return numArray.reduce((acc, num) => acc + num, 0);
};

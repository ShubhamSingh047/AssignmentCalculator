// Utility function to calculate the sum of numbers in a comma-separated string
export const add = (numbers: string): number => {
  if (numbers === "") {
    return 0; // Handle the empty string case
  }

  // Replace new line characters with commas, then split and convert to numbers
  const numArray = numbers.replace(/\n/g, ",").split(",").map(Number);
  return numArray.reduce((acc, num) => acc + num, 0);
};

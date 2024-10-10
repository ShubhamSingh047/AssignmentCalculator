// Utility function to calculate the sum of numbers in a comma-separated string
export const add = (numbers: string): number => {
  if (numbers === "") {
    return 0; // Handle the empty string case
  }

  // Split the input by comma and convert each part to a number, then sum
  const numArray = numbers.split(",").map(Number);
  return numArray.reduce((acc, num) => acc + num, 0);
};

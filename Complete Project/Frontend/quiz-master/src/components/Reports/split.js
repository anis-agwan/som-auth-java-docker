export function splitStringAfterEightWords(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Initialize variables
  let result = [];
  let currentChunk = "";

  // Loop through the words
  for (let i = 0; i < words.length; i++) {
    // Add the current word to the chunk
    currentChunk += words[i] + " ";

    // Check if we have reached 8 words
    if ((i + 1) % 8 === 0) {
      // Push the chunk to the result array
      result.push(currentChunk.trim());

      // Reset the current chunk
      currentChunk = "";
    }
  }

  // Push the remaining words as the last chunk
  if (currentChunk !== "") {
    result.push(currentChunk.trim());
  }

  // Return the resulting array
  return result;
}

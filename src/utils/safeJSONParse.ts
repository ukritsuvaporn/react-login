export function safeJSONParse(jsonString: string) {
  try {
    // Step 1: Unescape JSON strings to handle double-escaped characters
    const unescapedJSON = jsonString.replace(/\\./g, (match) => {
      switch (match) {
        case '\\"':
          return '"';
        case "\\n":
          return "\n";
        case "\\t":
          return "\t";
        // Add more escape sequences as needed
        default:
          return match[1]; // Remove the backslash
      }
    });

    // Step 2: Parse the unescaped JSON
    const parsedData = JSON.parse(unescapedJSON);

    return parsedData;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null; // Handle the error gracefully or throw an exception if necessary
  }
}

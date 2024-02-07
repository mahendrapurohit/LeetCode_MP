function frequencySort(s) {
    
    const frequencyMap = new Map();
    for (let char of s) {
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    const sortedChars = Array.from(frequencyMap.keys()).sort(
      (a, b) => frequencyMap.get(b) - frequencyMap.get(a)
    );
  
    
    let sortedString = '';
    for (let char of sortedChars) {
      sortedString += char.repeat(frequencyMap.get(char));
    }
  
    return sortedString;
  }
  
  
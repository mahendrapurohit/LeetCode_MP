var firstUniqChar = function(s) {
    const frequencyMap = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (frequencyMap.get(char) === 1) {
        return i;
      }
    
    return -1;
    }
};
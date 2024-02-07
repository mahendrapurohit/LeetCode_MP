function reverseWords(s) {
    const words = s.split(' ');
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
    const reversedString = reversedWords.join(' ');
    return reversedString;
  }
  const input1 = "Let's take LeetCode contest";
  const output1 = reverseWords(input1);
  console.log(output1); 
  const input2 = "Mr Ding";
  const output2 = reverseWords(input2);
  console.log(output2); 
  
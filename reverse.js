function rw(s) {
    let words = s.split(' ');
    let rm = words.map(word => {
      return word.split('').reverse().join('');
    });
    let rs = rm.join(' ');
    return rs;
  }

  let x = "Let's take LeetCode contest";
  let y = rw(x);

  console.log(y);

  let w = "Mr Ding";
  let v = rw(w);

  console.log(v);
  
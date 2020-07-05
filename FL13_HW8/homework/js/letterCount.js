function letterCount(word, letter) {
 let Count = 0;
 for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter) {
        Count += 1;
      }
  }
  return Count;
}

letterCount('qqqqwerty','q')


  class Formatter {
    //add static methods here
    static capitalize(word) {

      word = word.charAt(0).toUpperCase() + word.slice(1)
      return word
    }
  
    static sanitize(word) {
      const newWord = word.split(" ")
      const newWordArr = []
      for (word of newWord) {
        word = word.replace(/[^A-Za-z0-9-']+/g, "")
        newWordArr.push(word)
      }
      return newWordArr.join(" ")
    }
  
    static titleize(word) {
      const noTitleizeList = ["the","a", "an", "but", "of", "and", "for", "at", "by", "from"]
      const newWordArr = []
      word = word.charAt(0).toUpperCase() + word.slice(1)
      const words = word.split(" ")
      for (word of words) {
        if(!(noTitleizeList.includes(word))) {
          word = word.charAt(0).toUpperCase() + word.slice(1)
          newWordArr.push(word)
        }
        else {
          newWordArr.push(word)
        }
      }
      return newWordArr.join(" ")
    }
  }

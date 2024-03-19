let textbox = document.getElementById('textbox');
textbox.addEventListener('input', () => {
  let text = textbox.value;
  let count = text.length;
  document.getElementById('char').innerHTML = count;
  text = text.trim()
  let word = text.split(' ')
  let cleanList = word.filter((elm) => {
    return elm != '';
  })
  document.getElementById('word').innerHTML = cleanList.length;
})

/*
1. It gets the text input field element with the ID "textbox" and stores it in the variable "textbox".

2. It adds an event listener to the "input" event of the text input field.
When the user types in the text input field, the code gets the value of the text input, counts the number of characters in the text, and updates the content of the element with the ID "char" to show the character count.

3. It then trims the text (removes any extra spaces at the beginning or end), splits the text into an array of words using the space character as a delimiter, filters out any empty strings from the array, and updates the content of the element with the ID "word" to show the word count after all the filtering has been done.
 */
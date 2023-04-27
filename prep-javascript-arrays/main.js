const languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log(languages);

languages.firstElement = 'html';
console.log('The first element of the array is', languages.firstElement);

languages.thirdElement = 'javascript';
console.log('The third element of the array is', languages.thirdElement);

languages.length = '6';
console.log('The length of array is', languages.length);

languages.lastElement = languages[languages.length - 1];
console.log('The last element of the array is', languages.lastElement);

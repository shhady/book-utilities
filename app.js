const book1 = {
    name : 'Secret', 
    author : 'Mike', 
    year :2022
}
const book2 = {
    name: 'findout',
    author : 'bob', 
    year : 2000
}

const bookUtils= {
    getFirstPublished (book1,book2){
        if (book1.year > book2.year){
            return 'book2';
        }else {
            return 'book1';
        }
    }, setNewEdition(book1, yearEdition){
        book1.lastEdition = book1.year + yearEdition;
           let lastEdition = book1.year + yearEdition;
            return lastEdition;
    }, setLanguage(book2,language){
        book2.language = 'english';
        return book2;
    }, setTranslation (book2, language, translator){
        book2.language = 'english';
        book2.translation = 'Arabic';
        return book2;
    }, setPublisher(book1, name, location){
        book1.publisher = { name,location };
        return book1;
    }, isSamePublisher(book1, book2){
        return (
            book1.publisher.name === book2.publisher.name && 
            book1.publisher.location === book2.publisher.location
        );
    }
      }

// console.log(bookUtils.setNewEdition(book1,5));
console.log(book1());
    
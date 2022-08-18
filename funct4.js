function alphabetSort(message) {
    const arr = message.split(' ');
     var cnt = arr.filter(word => word !== '').length;
     return console.log(cnt);
}
alphabetSort('Good morning, I love JavaScript.');
function alphabetSort(message){
  var splmsg = message.split("");
  var srtmsg = splmsg.sort();
  var rsltmsg = srtmsg.join('');
  return console.log(rsltmsg);
}
alphabetSort('hello'); // should return 'ehllo'
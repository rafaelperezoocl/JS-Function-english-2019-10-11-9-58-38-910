function palindrome(str)  
{  
  const arrValue = str.split ('');  
  const reveArrVal = arrValue.reverse();   
  const revString = reveArrVal.join('');  

 if (str == revString){  
      return console.log('It is a Palindrome string ');
   }  
  else {  
      return console.log('It is not a Palindrome string') ;  
	  }  
}  
palindrome('hello'); // should return false
palindrome('abcba'); // should return true	
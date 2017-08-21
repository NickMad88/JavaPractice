function printRange (start,end,skip){
    
    for(var i = start; i < end; i += skip){
      console.log(i);
    }
    
  }
  
  printRange(1,10,2);
  printRange(3,25,4);
  printRange(2,10,2);
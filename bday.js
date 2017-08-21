function countdown(days){
    var bdaymessage;
    for(var i = days; i >= 0; i--){
      if(i > 30){
        bdaymessage = i + " days left..ugh this is taking forever";
      }
      else if(i >= 5){
        bdaymessage = i + " days left! It is getting closer!!";
      }
      else if(i > 0){
        bdaymessage = i + " DAYS LEFT!! MY BDAY IS ALMOST HERE!";
      }
      else if(i === 0){
        bdaymessage = i + " !!%#$&^OMGAH ITS MY BDAY!!*#&$&@^#@";
      }
      
      console.log(bdaymessage);
    }
  }
  
  countdown(60);
  countdown(75);
  countdown(22);
function slotmachine(quarters){
    var win = 50;
    var wincount = 0;
    
    while (quarters > 0){
      quarters --;
      if(Math.floor((Math.random() * 100)) == win){
        console.log("I won!");
        quarters += Math.floor((Math.random() * (100-50) + 50));
        wincount++;
      }
      console.log("You have " + quarters + " left. And have won " + wincount + " times");
    }
  }
  
  slotmachine(10);

var reward = .01;
var daycount;
var total;

for(var i = 1; i <= 30; i++){
  daycount = i;
  reward = reward + reward;
  total = reward / 1;
  
  
  console.log("Day " + daycount + " $" + total);
}

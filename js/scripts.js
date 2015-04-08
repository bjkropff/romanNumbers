function roman(value){
  var numo = "";
  if (value === 0) {
    return false;
  }

  var one = "I";
  var two = "II";
  var three = "III";
  var four = "IV";
  var five = "V";
  var six = "VI";
  var seven = "VII";
  var eight = "VIII";
  var nine = "IX";
  var ten = "X";

  if(value === 1){
    return one;
  }
  else if (value === 2){
    return two;
  }
  else if (value === 3){
    return three;
  }
  else if (value === 4){
    return four;
  }
  else if (value === 5){
    return five;
  }
  else if (value === 6){
    return six;
  }
  else if (value === 7){
    return seven;
  }
  else if (value === 8){
    return eight;
  }
  else if (value === 9){
    return nine;
  }
  else if (value === 10){
    return ten;
  }
};

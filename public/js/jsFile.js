function ViewElement(){
  var field = document.getElementById('viewelement').value;

  document.getElementById('result').innerHTML = field;
};
function Sum(){
  var field = document.getElementById('sum').value.split(' ');
  var result = 0;
  field.forEach((element) => {
      element = Number(element);
      result = result + element;
  });
  document.getElementById('resultTwo').innerHTML = "Сумма = " + result;
};
function ViewSqrt(){
  var field = document.getElementById('viewsqrt').value.split(' ');
  var result = ' ';
  field.forEach((element) => {

      if(isNaN(element) === true){
        element = 0;
      }else{
        element = Number(element);
        element = element * element;
      }
      result = result + element + ' ';
  });
  document.getElementById('resultThree').innerHTML = "Квадрат числа = " + result;
};


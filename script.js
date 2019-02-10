const num1 = document.getElementById('num_one');
const num2 = document.getElementById('num_two');
const num3 = document.getElementById('num_three');
const num4 = document.getElementById('num_four');
const num5 = document.getElementById('num_five');
const num6 = document.getElementById('num_six');
const submit = document.getElementById('buttonSub');





submit.addEventListener("click", () => {
   var arr = []
   while (arr.length < 6) {
      var randomnumber = Math.round(Math.random() * 57) + 1;
      if (arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
   }
   num1.innerHTML = arr[0];
   num2.innerHTML = arr[1];
   num3.innerHTML = arr[2];
   num4.innerHTML = arr[3];
   num5.innerHTML = arr[4];
   num6.innerHTML = arr[5];
});

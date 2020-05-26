function check() {
    var x = Math.floor((Math.random() * 10) + 1);
    var i = document.getElementById('inputFiled').value;
    var feedback = document.getElementById('feedback');
 
    if (i == x) {
        feedback.innerHTML = 'Richtig';
    } else {
        feedback.innerHTML = 'Leider falsch. Versuchen Sie es nochmal';
    }
   
};
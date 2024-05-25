let arr = ['Fill your life to the fullest',
         'Live your life the way you want to live',
          'let your life count it for you',
          'Live every single day '];
    
function random() {
    let result = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("outputLabel").innerHTML = result;
}

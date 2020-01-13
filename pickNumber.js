var i, x;
var str = "";
for(i = 1; i < 101; i++) {
    x = i;
    if(i%3==0 || /3/.test(String(x))) {
        x = "PA";
    }
    str += x +" ";
}
console.log(str);
var i, j;
var str = "";
for(i=1; i<=9; i++){
    for(j=1; j<=i; j++){
        str += i + "*" + j + "=" + i*j + " ";
        if(i===j){
            str +="\n";
        }
    }
}
console.log(str);

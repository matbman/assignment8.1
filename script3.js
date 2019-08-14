function isEven(value) {
    if (value % 2 == 0) {
           return true;
    }else{
           return false;
    }
}
    
function factorial(value)    {
    var result = 1;
    
    for (var i = 2; i <= value; i++) {
        result = result * i;
    }
    return result;
}

function kebabcase(string)  {
     
       return string.replace (/-/g, "_")

}
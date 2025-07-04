function addition(a,b){
    return a+b+1;
}


function division(x,y){
    if(y==0)
    throw new Error("impossible de diviser par 0");
return x/y
}

function puissance3(z){
    return z ** 3;
}

function soustraction(a, b) {
    return a - b;
    
}



module.exports = {division, addition, puissance3, soustraction}
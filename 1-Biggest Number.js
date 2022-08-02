
function biggerNumber(n){
    n = n.toString()
    n = n.split("")
    if (n <= 0 || n.length < 3 || n.length > 3){
        return null
    }
    
    for(i = 0; i < n.length-1; i++){
        if(n[i] < n[i+1]){
            a = n[i]
            n[i] = n[i+1]
            n[i+1] = a
        }
    }
    return n.join("")
}

console.log(biggerNumber(901))
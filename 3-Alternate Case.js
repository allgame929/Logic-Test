
function alternateCase(str){
    str = str.split(" ")
    result = []

    for(i = 0; i < str.length; i++){
        a = ""
        for(j = 0; j < str[i].length; j++){
            if(str[i][j] == str[i][j].toUpperCase()){
                a += str[i][j].toLowerCase()
            }else{
                a += str[i][j].toUpperCase()
            }
        }
        result.push(a)
    }
    return result.join(" ")
}

console.log(alternateCase("Hello World"));
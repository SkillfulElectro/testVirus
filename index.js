function bianry(num){
    list = []
    while (num>0){
        list.push(num%2)
        num = Math.floor(num/2)
    
    }
    return list
}

document.getElementById("x").innerHTML = bianry(5)

var x = 10
var z = 0
while (x > 0){
    document.getElementById("z").innerHTML = z
    z += 1 
}
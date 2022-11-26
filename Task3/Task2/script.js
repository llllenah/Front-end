let m = prompt("Введіть перше число")
let n = prompt("Введіть друге число")
let result = 1
for(m; m<=n; m++){
    if(m % 2 !=0){
        result*=m
    }
}
console.log(result)

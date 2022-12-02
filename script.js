function getSum(a){
    sum = 0
    for (let i=1; i < a.length; i++) {
        sum+=a[i]
    } 
    return sum
}
a=[4,5,10,5]
multiplier=a[0]
console.log(multiplier * getSum(a))

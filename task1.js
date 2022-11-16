
const text = ["one", "two", "three", "four", "five", "six"];
let result=[]
function convert (num) {
    if (num==0){
        return "zero";
    }else
    return text[(num%10)-1]}
    var a = [0,3,2,6]
for (let i=0; i<a.length; i++)
result.push(convert(a[i]))
console.log(result)

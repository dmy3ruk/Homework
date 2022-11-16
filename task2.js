function convert(Arr){
    const ones = {0:"zero", 1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine","-":"minus"}
let result=[];
for (let i=0; i<Arr.length; i++){
    let nmb_str=Arr[i].toString(10);
    console.log(nmb_str);
    if(nmb_str.length>1){
        let ComplexNumber =[];
        for(let idx=0; idx<nmb_str.length; idx++){
            const element =nmb_str[idx]
            ComplexNumber.push(ones[element]);
        }result.push(ComplexNumber.join(','));
    }else{
        result.push(ones[nmb_str]);
    }
}return result;
} const a = [11,900,2030,-73]
console.log(convert(a))
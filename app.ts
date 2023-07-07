const num1Element=document.getElementById('num1') as HTMLInputElement;
const num2Element=document.getElementById('num2') as HTMLInputElement;
const btnElement=document.querySelector('button')!;

 type numstr = number | string;
 //type res={val : number; timestamp : Date};
 interface res {
    val:number;
    timestamp:Date
 }

const numArr:number[] = [];
//const numArr:Array<number> =[];
const stArr: string[] = [];
//const stArr:Array<string> =[];


function printNow(resObj :res)
{
    console.log(resObj.val);
    console.log(resObj.timestamp);
}
function add(num1:numstr , num2:numstr ) {
 if(typeof num1==='number' && typeof num2==='number') 
 {
  return num1 + num2;
 }
 else if(typeof num1==='string' && typeof num2==='string')   
 {
    return num1 +''+ num2;
 }
}

btnElement.addEventListener('click',() =>
{
    const num1=num1Element.value;
    const num2=num2Element.value;
    const result= add(+num1, +num2);
    const stResult=add(num1, num2);
    numArr.push(result as number);
    stArr.push(stResult as string);
    console.log(result);
    console.log(stResult);
    console.log(numArr);
    console.log(stArr);
    printNow({ val: result as number, timestamp: new Date()})
})

const p1=new Promise<string>((res,rej)=>
{
    setTimeout(()=>
    {
        res("it worked");
    },1000)
})
p1.then(pr=>console.log(pr.split("w")))


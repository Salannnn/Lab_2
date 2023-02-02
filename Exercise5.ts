

let test: string ="test 1"; 

function countLetter(name:string):number{
return name.length;

}  

console.log(countLetter(test));

function countNoSpace(name: string):number{
    
    return name.replace(" ", "").length;
}
console.log(countNoSpace(test));

function myFunction(value:string, spaces?:boolean):number{
    let count:number=0;
    if(spaces){
            count= value.length;
    }else{
        count=value.replace(" ","").length;
    }
    
    return count;

}



console.log(myFunction(test));
console.log(myFunction(test,true));
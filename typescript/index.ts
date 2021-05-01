
export default class Validator {
throwExceptionFlag:boolean;

constructor(){
this.throwExceptionFlag = false;
}//const

isNumber(no:number,shout=false,message="This is not a Number"){
    //if (data === parseInt(data, 10))
        if((typeof no) != "number"){
            if(shout === true){
                throw new Error(message);                
            }else{
                return false;
            }
        }else{
            return true;
        }
}
isInteger(no:number,shout=false,message="This is not an Integer"){   
        if (Number.isInteger(no)=== false){
            if(shout === true){
                throw new Error(message);                
            }else{
                return false;
            }
        }else{
            return true;
        }
}
isSmaller(smaller:number,bigger:number,shout=false,message="First Number is not smaller than the second number"){
    if(bigger < smaller){
        if(shout === true){
            throw new Error(message);                
        }else{
            return false;
        }
    }else{
        return true;
    }
}//fn
// wholeNumber(no:number){
// return Number(no.toFixed(0));
// }


/////////////////////////////////////////////    
}//class
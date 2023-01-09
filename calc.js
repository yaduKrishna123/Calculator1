function displays(num){
   result.value +=num
}
function allclear(){
    result.value=''
}
function output(){
    try{
        result.value=eval(result.value)

    }
    catch{
        result.value='Error '
    }
   
   
}
function back(){
    result.value=result.value.slice(0,-1)
}
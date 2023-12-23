
//let output=[]
let button=document.getElementById("btn")
let output=[]
let input=["MA","SA","I","SCH","OOL"]
let lower=document.getElementById('display')
print=true
button.addEventListener("click",function(){
    if(print==true){

        input.map((ele)=>{
            let ans=ele.toLowerCase()
            output.push(ans)
            lower.innerText=output
        })

    }
   
    print=false

})









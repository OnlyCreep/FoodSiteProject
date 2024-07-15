"use strict"
let cartArr = JSON.parse(sessionStorage.getItem("carty"))
let sum = 0
for(let key in cartArr){
    sum += cartArr[key]["price1"] * cartArr[key]["count"]
}
document.querySelector(".sum").innerHTML = sum
function erInpt(id){
    document.getElementById(id).style.border = "solid 2px red"
    document.getElementById(id).style.boxShadow = "0 0 5px red"
}
function clickInpt(id){
    if(id !== "")
    document.getElementById(id).removeAttribute("style")
}
$(document).ready(function(){
    $('button').on('click', function(){
        let name = document.getElementById("name").value
        let tel = document.getElementById("tel").value
        let strt = document.getElementById("strt").value
        let hse = document.getElementById("hse").value
        let apart = document.getElementById("apart").value
        let entre = document.getElementById("entre").value
        let floor = document.getElementById("floor").value
        if(name !== ""){
            if(tel !== ""){
                if(strt !== ""){
                    if(hse !== ""){
                        $.ajax({
                            method:"POST",
                            url:"send.php",
                            data:{"send" : cartArr,
                            "name" : name,
                            "tel" : tel,
                            "strt" : strt,
                            "hse" : hse,
                            "apart" : apart,
                            "entre" : entre,
                            "floor" : floor,
                            "sum" : sum
                            }
                        })
                        sessionStorage.clear()
                        window.location.href = 'index.php';
                    }
                    else{
                        erInpt("hse")
                    }
                }
                else{
                    erInpt("strt")
                }
            }
            else{
                erInpt("tel")
            }
        }
        else{
            erInpt("name")
        }
    })
})
document.addEventListener("click", function(){
    clickInpt(event.target.id)
})
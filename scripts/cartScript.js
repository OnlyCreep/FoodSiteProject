"use strict"
let cartArr = JSON.parse(sessionStorage.getItem("carty"))
let out = "<div class='cartEmp'>Корзина пуста</div>"
let cartPrice = 0
let discount = 0
let countInCart = 0
if(discount == 0){
    document.querySelector(".discount").innerHTML = 0 + "₽"
}
function calcCart(id){
    cartPrice = 0
    for(let key in cartArr){
        cartPrice += cartArr[key]["price1"]*cartArr[key]["count"] - discount
    }
}
document.querySelector(".cartElem").innerHTML = out
function outFunc(){
    calcCart()
    if(cartPrice == 0){
        document.querySelector(".cartElem").innerHTML = "<div class='cartEmp'>Корзина пуста</div>"
        document.querySelector(".submit").remove()
        document.querySelector(".subref").remove()
        document.querySelector(".rightEl").innerHTML = "<div class='rightEl'><div class='submit submitBuf'>Оформить<div class='priceOfCartArr'></div></div>"
        document.querySelector(".count").innerHTML = 0
    }
    else{
    countInCart = 0
    out = "<div class='elementsCart'>"
    out += "<div class='CartTitle'>Корзина</div>"
    for(let key in cartArr){
        let countOfOpp = 0
        for(let dan in cartArr[key]["opptions"]){
            countOfOpp++
        }
        let sovCount = 0
        out += "<div class='elemOfCartArr'>"
        out += "<img src='images/"+cartArr[key]["image"]+"' class='imgOfCartArr'>"
        out += "<div class='Elem_sOfCartArr'>"
        out += "<div class='upElemOfCartArr'>"
        out += "<div class='nameOfCartArr'>"+cartArr[key]["name"]+"</div>"
        if(cartArr[key]["pVS"] !== undefined)
        out += "<div class='nameOfCartArr'>"+cartArr[key]["pVS"]+"</div>"
        out += "<div class='nameOfCartArr price'>"+cartArr[key]["price"]+"₽</div>"
        out += "</div>"
        out += "<div class='bottomElemOfCartArr'>"
        if(cartArr[key]["pVarOpp"] !== undefined)
        out += "<div class='bilOfCard'>"+cartArr[key]["pVarOpp"]
        else
        out += "<div>"
        if(cartArr[key]["bil"] !== undefined){
                if(countOfOpp == 0)
                    out += "<div class='bilOfCard'>"+cartArr[key]["bil"]+"."
                else
                    out += "<div class='bilOfCard'>"+cartArr[key]["bil"]+", "
                
            for(let dan in cartArr[key]["opptions"]){
                sovCount++
                if(sovCount != countOfOpp)
                out += cartArr[key]["opptions"][dan]+", "
                else out += cartArr[key]["opptions"][dan]+"."
            }
        }
        else{
            out += "</div>"
        }
        out += "</div>"
        out += "</div>"
        out += "</div>"
        out += "<div class='but_sPM'>"
        out += "<button class='butPM plus' id='"+key+"'>+</button>"
        out += "<div class='countOfElem'>"+cartArr[key]["count"]+"</div>"
        out += "<button class='butPM minus' id='"+key+"'>-</button>"
        out += "</div>"
        out += "</div>"
        out += "</div>"
        countInCart++
    }
    calcCart()
    document.querySelector(".cartElem").innerHTML = out
    document.querySelector(".count").innerHTML = countInCart
    document.querySelector(".priceOfCartArr").innerHTML = cartPrice + "₽"
}
}
outFunc()
function plusFunc(id){
    cartArr[id]["count"]++
    cartArr[id]["price"] = cartArr[id]["price1"]*cartArr[id]["count"]
}
function minusFunc(id){
    cartArr[id]["count"]--
    cartArr[id]["price"] = cartArr[id]["price1"]*cartArr[id]["count"]
    if(cartArr[id]["count"] == 0){
        delete cartArr[id]
    }
}
document.addEventListener("click", event => {
    if(event.target.classList.contains("plus")){
        plusFunc(event.target.id)
        outFunc()
    }
    if(event.target.classList.contains("minus")){
        minusFunc(event.target.id)
        outFunc()
    }
    sessionStorage.setItem("carty", JSON.stringify(cartArr))
})
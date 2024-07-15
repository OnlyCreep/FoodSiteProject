"use strict"
let evTarBut
let bodyPSP = document.getElementById("bodyId")
let scrollElem = document.getElementById("scrollEl")
let boxy = document.getElementById("box")
let coutcar = document.getElementById("counCar")
let piz_m = ""
let added = []
let cartArr = {}
let pascout = 0
if(JSON.parse(sessionStorage.getItem("carty")) !== null){
  cartArr = JSON.parse(sessionStorage.getItem("carty"))
}
let cartCount = 0
var kol = 0
for(let key in cartArr){
  cartCount += cartArr[key]["count"]
}
if(cartCount != 0){
  cartCount = 0
  coutcar.style.display = "flex"
  for(let key in cartArr){
    cartCount += cartArr[key]["count"]
  }
  document.querySelector(".countCart").innerHTML = cartCount
  cartCount = 0
}
var hout = "<div>"
var m_win1 = ""
var m_winp = ""
for(let key in cart){
  hout = "<div class='marOfCar'>"
  hout +="<img src='images/"+cart[key]["image"]+"' class='imgCard' alt=''>"
  hout += "<div class='bottomCard'>"
  hout += "<div class='nameCard'>"+cart[key]["name"]+"</div>"
  let opist = cart[key]["bil"] ?? cart[key]["txt"]
  hout += "<div class='compoundCard'>"+opist+"</div>"
  hout += "<div class='priceCart' id='"+key+"'>"
  hout += "<div class='priceCard'>От "+cart[key]["price"]+" ₽</div>"
  hout += "<button class='cartCard add' id='"+key+"'>Выбрать</button>"
  hout += "</div>"
  hout += "</div>"
  hout += "</div>"
  hout += "</div>"
  document.querySelector("."+cart[key]["category"]+"").innerHTML += hout
}
for(let dan in cart){
  for(let key in cartArr){
    if(cartArr[key]["name"] == cart[dan]["name"] && (cart[dan]["category"] === "other" || cart[dan]["category"] === "drinks" || cart[dan]["category"] === "kombo")){
      document.querySelector("#"+dan+".priceCart").innerHTML += "<div class='butNewCar' id='"+dan+"'><button class='plButCoun butCoun' data-articul='"+key+"' id='"+dan+"'>+</button><div class='counCartArr a"+key+"'>"+cartArr[key]["count"]+"</div><button class='mnButCoun butCoun' data-articul='"+key+"' id='"+dan+"'>-</button></div>"
      document.querySelector("#"+dan+".cartCard").remove()
    }
  }
}
if(pageYOffset > 99){
  scrollElem.style.top = 0;
  scrollElem.style.position = "sticky";
  scrollElem.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
  scrollElem.style.width = "100%";
  scrollElem.style.height = "70px"
  }
  else{
  scrollElem.style.top = 0;
  scrollElem.style.position = "none";
  scrollElem.style.backgroundColor = "";
  scrollElem.style.width = "60%";
  scrollElem.style.height = "50px"
  }
window.addEventListener('scroll', function() {
    if(pageYOffset > 99){
    scrollElem.style.top = 0;
    scrollElem.style.position = "sticky";
    scrollElem.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
    scrollElem.style.width = "100%";
    scrollElem.style.height = "70px"
    }
    else{
    scrollElem.style.top = 0;
    scrollElem.style.position = "none";
    scrollElem.style.backgroundColor = "";
    scrollElem.style.width = "60%";
    scrollElem.style.height = "50px"
    }
});
let pVarSize = "маленькая"
function priceOutFunc(id){
  for(let i = 0; i<4; i++)
  document.querySelectorAll(".sub")[i].innerHTML = "<div class='submitBut submit' id="+id+">В корзину "+cart[id]["price"]+"₽"
}
function addButAnim(evTarBut){
  document.querySelector("#"+evTarBut+".cartCard").classList.add("butAnim")
  document.querySelector("#"+evTarBut+".cartCard").classList.remove("add")
  document.querySelector("#"+evTarBut+".cartCard").classList.add("cartCard1")
  document.querySelector("#"+evTarBut+".cartCard").classList.remove("cartCard")
  for(let key in cartArr){
    if(cartArr[key]["name"] == cart[evTarBut]["name"]){
      document.querySelector("#"+evTarBut+".priceCart").innerHTML += "<div class='butNewCar' id='"+evTarBut+"'><button class='plButCoun butCoun' data-articul='"+key+"' id='"+evTarBut+"'>+</button><div class='counCartArr a"+key+"'>"+cartArr[key]["count"]+"</div><button class='mnButCoun butCoun' data-articul='"+key+"' id='"+evTarBut+"'>-</button></div>"
    }
  }
  setTimeout(function delAnim(){
    if(document.querySelector("#"+evTarBut+".cartCard1") !== null)
    document.querySelector("#"+evTarBut+".cartCard1").remove()
  }, 750)
}
function priceChangeFunc(id){
  cart[id]["price"] = cart[id]["price1"]
  cart[id]["category"] == "pizza"? pVarSize = "20см" : cart[id]["category"] == "grill"? pVarSize = "100грамм" : cart[id]["category"] == "shaw"? pVarSize = "300грамм" : cart[id]["category"] == "zakus"? pVarSize = "100грамм" : ""
  for(let key in addInProd[cart[id]["category"]]){
    for(let dan in added){
      if(addInProd[cart[id]["category"]][key]["name"] == added[dan]){
        cart[id]["price"] = cart[id]["price"] + addInProd[cart[id]["category"]][key]["price"]
      }
    }
  }
  priceOutFunc(id)
}
function priceChangeFunc1(id){
  cart[id]["price"] = cart[id]["price2"]
  cart[id]["category"] == "pizza"? pVarSize = "25см" : cart[id]["category"] == "grill"? pVarSize = "200грамм" : cart[id]["category"] == "shaw"? pVarSize = "350грамм" : cart[id]["category"] == "zakus"? pVarSize = "100грамм" : ""
  for(let key in addInProd[cart[id]["category"]]){
    for(let dan in added){
      if(addInProd[cart[id]["category"]][key]["name"] == added[dan]){
        cart[id]["price"] = cart[id]["price"] + addInProd[cart[id]["category"]][key]["price"]
      }
    }
  }
  priceOutFunc(id)
}
function priceChangeFunc2(id){
  cart[id]["price"] = cart[id]["price3"]
  cart[id]["category"] == "pizza"? pVarSize = "30см" : cart[id]["category"] == "grill"? pVarSize = "300грамм" : cart[id]["category"] == "shaw"? pVarSize = "400грамм" : cart[id]["category"] == "zakus"? pVarSize = "100грамм" : ""
  for(let key in addInProd[cart[id]["category"]]){
    for(let dan in added){
      if(addInProd[cart[id]["category"]][key]["name"] == added[dan]){
        cart[id]["price"] = cart[id]["price"] + addInProd[cart[id]["category"]][key]["price"]
      }
    }
  }
  priceOutFunc(id)
}
let addInProd = {
  "pizza" : {
    "bacon" : {
      "name" : "бекон",
      "img" : "беконДоб.jpg",
      "price" : 55
    },
    "cheese" : {
      "name" : "сыр",
      "img" : "сырДоб.jpg",
      "price" : 20
    },
    "tomato" : {
      "name" : "томаты",
      "img" : "помидорыДоб.jpg",
      "price" : 25
    },
    "pepperoni" : {
      "name" : "пепперони",
      "img" : "пепперониДоб.jpg",
      "price" : 65
    },
    "mushrooms" : {
      "name" : "грибы",
      "img" : "грибыДоб.jpg",
      "price" : 40
    },
    "pineapples" : {
      "name" : "ананасы",
      "img" : "ананасыДоб.jpg",
      "price" : 45
    },
    "ham" : {
      "name" : "ветчина",
      "img" : "ветчинаДоб.jpg",
      "price" : 75
    }
  },
  "grill" : {
    "ketchup" : {
      "name" : "кетчуп",
      "img" : "ket.jpg",
      "price" : 45
    },
    "onion" : {
      "name" : "лук",
      "img" : "onion.jpg",
      "price" : 15
    },
    "ukonion" : {
      "name" : "лук в уксусе",
      "img" : "oninuk.jpg",
      "price" : 35
    },
    "salad" : {
      "name" : "овощи гриль",
      "img" : "salad.jpg",
      "price" : 75
    }
  },
  "shaw" : {
    "garl" : {
      "name" : "чесносный",
      "img" : "garl.jpg",
      "price" : 0
    },
    "cheezsas" : {
      "name" : "сырный",
      "img" : "chisas.jpg",
      "price" : 0
    },
    "firas" : {
      "name" : "острый",
      "img" : "firsas.jpg",
      "price" : 0
    },
    "nosas" : {
      "name" : "без соуса",
      "img" : "empty.jpg",
      "price" : 0
    },
  },
  "zakus" : {
    "garl1" : {
      "name" : "чесносный",
      "img" : "garl.jpg",
      "price" : 0
    },
    "cheezsas1" : {
      "name" : "сырный",
      "img" : "chisas.jpg",
      "price" : 0
    },
    "firas1" : {
      "name" : "острый",
      "img" : "firsas.jpg",
      "price" : 0
    },
    "nosas1" : {
      "name" : "без соуса",
      "img" : "empty.jpg",
      "price" : 0
    },
  },
}
function shazCount(){
  for(let key in cartArr){
    pascout += cartArr[key]["count"]
  }
  cartCount = pascout
  pascout = 0
  if(cartCount == 0){
    coutcar.style.display = "none"
  }
  else{
    document.querySelector(".countCart").innerHTML = cartCount
    coutcar.style.display = "flex"
  }
}
function disFlex(cat){
  document.getElementById("modalWinId"+cat+"").style.animation = "modWin 300ms"
  document.getElementById("animModWin"+cat+"").style.animation = "miniModWin 300ms"
  document.getElementById("modalWinId"+cat+"").style.display = "flex"
  document.getElementById("animModWin"+cat+"").style.display = "flex"
  bodyPSP.style.overflow = "hidden"
}
let categ = ["pizza", "grill", "shaw", "zakus"]
var m_win = "<div class='leftEl'>"
m_win +="</div>"
m_win += "<div class='rightEl'>"
m_win += "<div class='upEl_win'>"
m_win += "</div>"
m_win += "<div class='butTypePrd'>"
m_win += "<div class='typeOfPrd but1pizza' id='but1idpizza'>маленькая</div><div class='typeOfPrd but2pizza' id='but2idpizza'>средняя</div><div class='typeOfPrd but3pizza' id='but3idpizza'>большая</div></div><div class='bottomProd'><div class='typeOfPrd but1P' id='but1idP'>классическое тесто</div><div class='typeOfPrd but2P' id='but2idP'>тонкое тесто</div></div><div class='mWin_txt'>Добавить</div><div class='extraProds'>"
for(let key in addInProd["pizza"]){
  m_win += "<div class='elemOfEP pizza' id='"+key+"' data-articul=''><img class='imgExtraProd pizza1' src='images/"+addInProd["pizza"][key]["img"]+"' id='"+key+"'><div class='txtOfEP pizza2' id='"+key+"'>"+addInProd["pizza"][key]["name"]+"<br>+"+addInProd["pizza"][key]["price"]+"₽</div></div>"
}
m_win += "</div>"
m_win += "<div class='sub'></div>"
m_win += "</div>"
document.querySelector(".win_mpizza").innerHTML = m_win
m_win = "<div class='leftEl'>"
m_win +="</div>"
m_win += "<div class='rightEl'>"
m_win += "<div class='upEl_win'>"
m_win += "</div>"
m_win += "<div class='mWin_txt1'>Добавить</div><div class='extraProds'>"
for(let key in addInProd["grill"]){
  m_win += "<div class='elemOfEP grill' id='"+key+"' data-articul=''><img class='imgExtraProd grill1' src='images/"+addInProd["grill"][key]["img"]+"' id='"+key+"'><div class='txtOfEP grill2' id='"+key+"'>"+addInProd["grill"][key]["name"]+"<br>+"+addInProd["grill"][key]["price"]+"₽</div></div>"
}
m_win += "</div>"
m_win += "<div class='butTypePrdGr'>"
m_win += "<div class='mWin_txt'>Вес</div><div class='typeOfPrdGr but1grill' id='but1idgrill'>100грамм</div><div class='typeOfPrdGr but2grill' id='but2idgrill'>200грамм</div><div class='typeOfPrdGr but3grill' id='but3idgrill'>300грамм</div></div>"
m_win += "<div class='sub'></div>"
m_win += "</div>"
document.querySelector(".win_mgrill").innerHTML = m_win
m_win = "<div class='leftEl'>"
m_win +="</div>"
m_win += "<div class='rightEl'>"
m_win += "<div class='upEl_win'>"
m_win += "</div>"
m_win += "<div class='mWin_txt1'>Соус</div><div class='extraProds'>"
for(let key in addInProd["shaw"]){
  m_win += "<div class='elemOfEP shaw' id='"+key+"' data-articul=''><img class='imgExtraProd shaw1' src='images/"+addInProd["shaw"][key]["img"]+"' id='"+key+"'><div class='txtOfEP shaw2' id='"+key+"'>"+addInProd["shaw"][key]["name"]+"</div></div>"
}
m_win += "</div>"
m_win += "<div class='butTypePrdGr'>"
m_win += "<div class='mWin_txt'>Вес</div><div class='typeOfPrdGr but1shaw' id='but1idshaw'>300грамм</div><div class='typeOfPrdGr but2shaw' id='but2idshaw'>350грамм</div><div class='typeOfPrdGr but3shaw' id='but3idshaw'>400грамм</div></div>"
m_win += "<div class='sub'></div>"
m_win += "</div>"
document.querySelector(".win_mshaw").innerHTML = m_win
m_win = "<div class='leftEl'>"
m_win +="</div>"
m_win += "<div class='rightEl'>"
m_win += "<div class='upEl_win'>"
m_win += "</div>"
m_win += "<div class='mWin_txt1'>Соус</div><div class='extraProds'>"
for(let key in addInProd["zakus"]){
  m_win += "<div class='elemOfEP zakus' id='"+key+"' data-articul=''><img class='imgExtraProd zakus1' src='images/"+addInProd["zakus"][key]["img"]+"' id='"+key+"'><div class='txtOfEP zakus2' id='"+key+"'>"+addInProd["zakus"][key]["name"]+"</div></div>"
}
m_win += "</div>"
m_win += "<div class='butTypePrdGr'>"
m_win += "<div class='mWin_txt'>Вес</div><div class='typeOfPrdGr but1zakus' id='but1idzakus'>100грамм</div><div class='typeOfPrdGr but2zakus' id='but2idzakus'>200грамм</div><div class='typeOfPrdGr but3zakus' id='but3idzakus'>300грамм</div></div>"
m_win += "<div class='sub'></div>"
m_win += "</div>"
document.querySelector(".win_mzakus").innerHTML = m_win
function addFunc(id){
  if(cart[id]["category"] === "pizza"){
    added = []
    pVarSize = "20см"
    cart[id]["price"] = cart[id]["price1"]
    pVar = "классическое тесто"
  }
  if(cart[id]["category"] === "grill"){
    added = []
    pVarSize = "100грамм"
    cart[id]["price"] = cart[id]["price1"]
    pVar = ""
  }
  if(cart[id]["category"] === "shaw"){
    added = []
    pVarSize = "300грамм"
    cart[id]["price"] = cart[id]["price1"]
    pVar = ""
  }
  if(cart[id]["category"] === "zakus"){
    added = []
    pVarSize = "100грамм"
    cart[id]["price"] = cart[id]["price1"]
    pVar = ""
  }
  if(cart[id]["category"] !== "kombo" && cart[id]["category"] !== "drinks" && cart[id]["category"] !== "other"){
    document.getElementById("but1id"+cart[id]["category"]+"").style.backgroundColor = "rgb(216, 216, 216)"
    document.getElementById("but2id"+cart[id]["category"]+"").style.backgroundColor = "white"
    document.getElementById("but3id"+cart[id]["category"]+"").style.backgroundColor = "white"
    piz_m = "<img src='images/"+cart[id]["image"]+"' class='img_win'></img>"
    m_win = "<div class='mWin_txt'>"+cart[id]["name"]+"</div>"
    m_winp = "<div class='submitBut submit' id="+id+">В корзину "+cart[id]["price"]+"₽</div>"
    document.querySelectorAll(".leftEl")[categ.indexOf(cart[id]["category"])].innerHTML = piz_m
    document.querySelectorAll(".upEl_win")[categ.indexOf(cart[id]["category"])].innerHTML = m_win
    document.querySelectorAll(".sub")[categ.indexOf(cart[id]["category"])].innerHTML = m_winp
    var cas = 0
    for(let key in addInProd[cart[id]["category"]]){
      document.querySelectorAll('.'+[cart[id]["category"]]+'')[cas].setAttribute("data-articul", id)
      document.querySelectorAll('.'+[cart[id]["category"]]+'1')[cas].setAttribute("data-articul", id)
      document.querySelectorAll('.'+[cart[id]["category"]]+'2')[cas].setAttribute("data-articul", id)
      cas++
      document.querySelectorAll('.'+[cart[id]["category"]]+'')[cas].setAttribute("data-articul", id)
    }
    disFlex(cart[id]["category"])
  }
}
function addInCartFunc(id){
  added.sort()
  console.log(cart[id]["price"])
  let productKey = md5(cart[id]["name"] + cart[id]["price"] + pVar + added)
  if(cart[id]["category"] !== "kombo" && cart[id]["category"] !== "drinks" && cart[id]["category"] !== "other"){
    if(cartArr[productKey] == undefined){
      cartArr[productKey] = {
        "count" : 1,
        "name" : cart[id]["name"],
        "image" : cart[id]["image"],
        "price" : cart[id]["price"],
        "price1" : cart[id]["price"],
        "bil" : cart[id]["bil"] ?? cart[id]["txt"],
        "pVarOpp" : pVar,
        "opptions" : added,
        "pVS" : pVarSize
      }
    }
    else{
        cartArr[productKey]["count"]++
    }
    cart[id]["price"] = cart[id]["price1"]
  }
  else{
    if(cartArr[productKey] == undefined){
      cartArr[productKey] = {
        "count" : 1,
        "name" : cart[id]["name"],
        "image" : cart[id]["image"],
        "price" : cart[id]["price"],
        "price1" : cart[id]["price"],
        "bil" : cart[id]["txt"],
      }
    }
    else{
        cartArr[productKey]["count"]++
    }
  }
}
var tan = undefined
var pVar = "классическое тесто"
document.addEventListener("click", event => {
  shazCount()
  if(event.target.classList.contains("add")){
    shazCount()
      addFunc(event.target.id)
      tan = event.target.id
      if(cart[tan]["category"] == "shaw" || cart[tan]["category"] == "zakus"){
        document.getElementById("garl").style.boxShadow = "0 0 10px green"
        document.getElementById("garl").style.border = "solid 1px green"
        document.getElementById("garl1").style.boxShadow = "0 0 10px green"
        document.getElementById("garl1").style.border = "solid 1px green"
        added = ["чесночный"]
      }
      if(cart[tan]["category"] == "kombo" || cart[tan]["category"] == "drinks" || cart[tan]["category"] == "other"){
        addInCartFunc(tan)
        addButAnim(tan)
        shazCount()
      }
  }
  if(tan !== undefined && event.target.classList.contains("but1"+cart[tan]["category"]+"")){
    document.getElementById("but1id"+cart[tan]["category"]+"").style.backgroundColor = "rgb(216, 216, 216)"
    document.getElementById("but2id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    document.getElementById("but3id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    priceChangeFunc(tan)
  }
  if(tan !== undefined && event.target.classList.contains("but2"+cart[tan]["category"]+"")){
    document.getElementById("but1id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    document.getElementById("but2id"+cart[tan]["category"]+"").style.backgroundColor = "rgb(216, 216, 216)"
    document.getElementById("but3id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    priceChangeFunc1(tan)
  }
  if(tan !== undefined && event.target.classList.contains("but3"+cart[tan]["category"]+"")){
    document.getElementById("but1id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    document.getElementById("but2id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    document.getElementById("but3id"+cart[tan]["category"]+"").style.backgroundColor = "rgb(216, 216, 216)"
    priceChangeFunc2(tan)
  }

  if(event.target.classList.contains("elemOfEP") || event.target.classList.contains("imgExtraProd") || event.target.classList.contains("txtOfEP")){
    let elem = document.getElementById(event.target.id)
    if(cart[tan]["category"] == "shaw" || cart[tan]["category"] == "zakus"){
      let mas = 0
      for(let key in addInProd["shaw"]){
        document.querySelectorAll("div[data-articul='"+tan+"'].elemOfEP")[mas].style.border = "solid 1px white"
        document.querySelectorAll("div[data-articul='"+tan+"'].elemOfEP")[mas].style.boxShadow = "0 0 10px rgb(138, 138, 138)"
        document.querySelectorAll("div[data-articul='"+tan+"'].elemOfEP")[mas].classList.remove("active")
        added = []
        mas++
      }
      elem.style.boxShadow = "0 0 10px green"
      elem.style.border = "solid 1px green"
      added.push(addInProd[cart[tan]["category"]][event.target.id]["name"])
      elem.classList.add("active")
    }
    if(elem.classList.contains("active") && cart[tan]["category"] !== "shaw" && cart[tan]["category"] !== "zakus"){
      elem.style.boxShadow = "0 0 10px rgb(138, 138, 138)"
      elem.style.border = "solid 1px white"
      for (let key in added) {
        if (added[key] === addInProd[cart[tan]["category"]][event.target.id]["name"]) {
          added.splice(key, 1);
          break;
        }
      }
      cart[event.target.getAttribute("data-articul")]["price"] = cart[event.target.getAttribute("data-articul")]["price"] - addInProd[cart[tan]["category"]][event.target.id]["price"]
      priceOutFunc(event.target.getAttribute("data-articul"))
      elem.classList.remove("active")
    }
    else if(cart[tan]["category"] !== "shaw" && cart[tan]["category"] !== "zakus"){
      elem.style.boxShadow = "0 0 10px green"
      elem.style.border = "solid 1px green"
      added.push(addInProd[cart[tan]["category"]][event.target.id]["name"])
      cart[event.target.getAttribute("data-articul")]["price"] = cart[event.target.getAttribute("data-articul")]["price"] + addInProd[cart[tan]["category"]][event.target.id]["price"]
      priceOutFunc(event.target.getAttribute("data-articul"))
      elem.classList.add("active")
    }
  }
  if(event.target.classList.contains("submit")){
    evTarBut = event.target.id
    document.getElementById("modalWinId"+cart[tan]["category"]+"").style.display = "none"
    document.getElementById("animModWin"+cart[tan]["category"]+"").style.display = "none"
    document.getElementById("modalWinId"+cart[tan]["category"]+"").removeAttribute("style");
    document.getElementById("animModWin"+cart[tan]["category"]+"").removeAttribute("style");
    bodyPSP.removeAttribute("style");
    addInCartFunc(event.target.id)
    document.getElementById("but1idP").style.backgroundColor = "rgb(216, 216, 216)"
    document.getElementById("but2idP").style.backgroundColor = "white"
    document.getElementById("but1id"+cart[tan]["category"]+"").style.backgroundColor = "rgb(216, 216, 216)"
    document.getElementById("but2id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    document.getElementById("but3id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    let mas = 0
    for(let key in addInProd[cart[tan]["category"]]){
      mas++
      document.querySelectorAll("."+cart[tan]['category']+"")[mas].style = ""
      document.querySelectorAll("."+cart[tan]['category']+"")[mas].classList.remove("active")

    }
    shazCount()
  }
  if(event.target.classList.contains("plButCoun")){
    cartArr[event.target.dataset.articul]["count"]++
    document.querySelector(".counCartArr.a"+event.target.dataset.articul+"").innerHTML = ""+cartArr[event.target.dataset.articul]["count"]+""
    shazCount()
  }
  if(event.target.classList.contains("mnButCoun")){
    cartArr[event.target.dataset.articul]["count"]--
    if(cartArr[event.target.dataset.articul]["count"] == 0){
      document.querySelector(".butNewCar#"+event.target.id+"").remove()
      document.querySelector(".priceCart#"+event.target.id+"").innerHTML += "<button class='cartCard add' id='"+event.target.id+"'>Выбрать</button>"
      if(document.querySelector("#"+evTarBut+".cartCard1") !== null)
      document.querySelector("#"+evTarBut+".cartCard1").remove()
      delete cartArr[event.target.dataset.articul]
    }
    else{
    document.querySelector(".counCartArr.a"+event.target.dataset.articul+"").innerHTML = ""+cartArr[event.target.dataset.articul]["count"]+""
    }
    shazCount()
  }
  if(tan !== undefined && event.target.classList.contains("modalWin"+cart[tan]["category"]+"")){
    document.getElementById("modalWinId"+cart[tan]["category"]+"").style.display = "none"
    document.getElementById("animModWin"+cart[tan]["category"]+"").style.display = "none"
    document.getElementById("modalWinId"+cart[tan]["category"]+"").removeAttribute("style");
    document.getElementById("animModWin"+cart[tan]["category"]+"").removeAttribute("style");
    bodyPSP.removeAttribute("style");
    document.getElementById("but1idP").style.backgroundColor = "rgb(216, 216, 216)"
    document.getElementById("but2idP").style.backgroundColor = "white"
    document.getElementById("but1id"+cart[tan]["category"]+"").style.backgroundColor = "rgb(216, 216, 216)"
    document.getElementById("but2id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    document.getElementById("but3id"+cart[tan]["category"]+"").style.backgroundColor = "white"
    let mas = 0
    for(let key in addInProd[cart[tan]["category"]]){
      mas++
      document.querySelectorAll("."+cart[tan]['category']+"")[mas].style = ""
      document.querySelectorAll("."+cart[tan]['category']+"")[mas].classList.remove("active")
    }
  }
  if(event.target.classList.contains("but1P")){
    document.getElementById("but1idP").style.backgroundColor = "rgb(216, 216, 216)"
    document.getElementById("but2idP").style.backgroundColor = "white"
    pVar = "классическое тесто"
  }
  if(event.target.classList.contains("but2P")){
    document.getElementById("but1idP").style.backgroundColor = "white"
    document.getElementById("but2idP").style.backgroundColor = "rgb(216, 216, 216)"
    pVar = "тонкое тесто"
  }
  sessionStorage.setItem("carty", JSON.stringify(cartArr))
})
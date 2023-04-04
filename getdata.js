//BITCOIN
let wsbtceur = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade')
let stockPriceElementBtceur = document.getElementById('btceuro')
let changeColorBtc = document.getElementById("change-color-btc")
let dynColB = document.getElementById("dyncolB")
let colorRed = "#83000022"
let colorGreen = "#03f30320"
let colorNeutral = "transparent"
let lastPriceBtceur = null;
const fontDefault = ".8rem";
const fontMax = ".860em";
const fontMin = ".740em"

wsbtceur.onmessage = (event) => {
  let stockObject = JSON.parse(event.data)
  let price = parseFloat(stockObject.p).toFixed(2)
  stockPriceElementBtceur.innerText = "€" + " " + parseFloat(stockObject.p).toFixed(2);
  stockPriceElementBtceur.innerText = lastPriceBtceur === price ? "€" + " " +  price : price > lastPriceBtceur ? "€" + " " +  price + '↑' : "€" + " "  +  price + '↓';
  stockPriceElementBtceur.style.color = !lastPriceBtceur || lastPriceBtceur === price ? '#fff' : price > lastPriceBtceur ? '#03f303' : '#ff0015';
  dynColB.style.color = !lastPriceBtceur || lastPriceBtceur === price ? '#fff' : price > lastPriceBtceur ? '#03f303' : '#ff0015';
  stockPriceElementBtceur.style.fontSize = !lastPriceBtceur || lastPriceBtceur === price ? fontDefault : price > lastPriceBtceur ? fontMax : fontMin;
  changeColorBtc.style.backgroundColor= !lastPriceBtceur || lastPriceBtceur === price ? colorNeutral : price > lastPriceBtceur ? colorGreen : colorRed;
  lastPriceBtceur = price;
}

//ETHERIUM
let wseth = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade')
let stockPriceElementEth = document.getElementById("etheur")
let changeColorEth = document.getElementById("change-color-eth")
let dynColE = document.getElementById("dyncolE")
let lastPriceEth = null;


wseth.onmessage = (event) => {
let stockObject = JSON.parse(event.data)
let price = parseFloat(stockObject.p).toFixed(2)
stockPriceElementEth.innerText = "€" + " " + parseFloat(stockObject.p).toFixed(2);
stockPriceElementEth.innerText = lastPriceEth === price ? "€" + " " +  price : price > lastPriceEth ? "€" + " " +  price + '↑' : "€" + " "  +  price + '↓';
stockPriceElementEth.style.color = !lastPriceEth || lastPriceEth === price ? '#fff' : price > lastPriceEth ? '#03f303' : '#ff0015';
dynColE.style.color = !lastPriceEth || lastPriceEth === price ? '#fff' : price > lastPriceEth ? '#03f303' : '#ff0015';
stockPriceElementEth.style.fontSize = !lastPriceEth || lastPriceEth === price ? fontDefault : price > lastPriceEth ? fontMax : fontMin;
changeColorEth.style.backgroundColor= !lastPriceEth || lastPriceEth === price ? colorNeutral : price > lastPriceEth ? colorGreen : colorRed;
lastPriceEth = price;
}; 

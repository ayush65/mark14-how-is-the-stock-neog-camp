const purchasePrice = document.querySelector("#purchaseprice");
const stockQuantity = document.querySelector("#stockquantity");
const currentPrice = document.querySelector("#currentprice");

const checkButton = document.querySelector("#check");

const outputDiv = document.querySelector(".output");




checkButton.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Check Button is Clicked");
    
    const purchasePriceNum = Number(purchasePrice.value);
    const stockQuantityNum = Number(stockQuantity.value);
    const currentPriceNum = Number(currentPrice.value);

    console.log(purchasePriceNum);
    console.log(stockQuantityNum);
    console.log(currentPriceNum);

    if (purchasePriceNum==0 || currentPriceNum==0){
        alert("Enter Valid Input");
        return
    }
   
   


    if (currentPriceNum > purchasePriceNum){
        
        const profit = (currentPriceNum - purchasePriceNum)*stockQuantityNum;
        const profitPercent = ((currentPriceNum - purchasePriceNum)*100/purchasePriceNum);
        console.log(profit);
        console.log(profitPercent);
        
        outputDiv.innerHTML=`<div class="result-div" style="width:100%"><h1>Your Profit is ${profitPercent}% and that is rupees ${profit}</h1></div>`;
    
        if (profitPercent>50){
            document.body.style.backgroundColor="#B3FFB3";
        }

    }else{
        const loss = (purchasePriceNum - currentPriceNum)*stockQuantityNum;
        const lossPercentage = ((purchasePriceNum - currentPriceNum)*100/purchasePriceNum);
        console.log(loss);
        console.log(lossPercentage);
        outputDiv.innerHTML=`<div class="result-div" style="width:100%"><h1>Ohh you have a Loss of ${lossPercentage}% and that is rupees ${loss}</h1></div>`;
       

        if(lossPercentage>50){
            document.body.style.backgroundColor="#EB4D4B";
        }
    }
})


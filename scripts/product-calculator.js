let total=0;

function cardClick(text){
  const selectItems=document.getElementById('selected-items');
  const items=text.childNodes[3].childNodes[3].innerText;

  const li=document.createElement("li");
  li.innerText=items;
  selectItems.appendChild(li);

  const price =text.childNodes[3].childNodes[5].innerText.split(" ")[0];
  
  total=parseFloat(total) + parseFloat(price);
  const totalPrice= document.getElementById('total-price').innerText = total;
  const discountPrice= document.getElementById('discount');

  const product=document.getElementById('product-price').innerText=total;

  if(product> 200){
    const discountPrice=totalPrice/100;
    const discount= discountPrice*20;
    // console.log(discount);
    const disTowDEcimal=discount.toFixed(2);
    // console.log(disTowDEcimal);
    const disPrice=document.getElementById('discount').innerText=discount;
    const disPriceTwoDecimal=disPrice.toFixed(3);


    const totalDiscountPrice=totalPrice-disPriceTwoDecimal;
    // console.log(totalDiscountPrice);
    document.getElementById('product-price').innerText=totalDiscountPrice;
  }
  if(total>=200){
    apply.removeAttribute('disabled');
    
  }
  else{
    apply.setAttribute('disabled',true);
  }



  const validCouponCodes = ['SELL200'];
  const couponInput = document.getElementById('couponCode');
  const applyButton = document.getElementById('apply');

  couponInput.addEventListener('input', function() {
      const enteredCouponCode = couponInput.value.toUpperCase();

      if (validCouponCodes.includes(enteredCouponCode)) {
          applyButton.disabled = false; 
      } else {
          applyButton.disabled = true;
      }
  });

  applyButton.addEventListener('click', function() {
      const enteredCouponCode = couponInput.value.toUpperCase();
      if (validCouponCodes.includes(enteredCouponCode)) {
        
        
      } 
      
  });


}


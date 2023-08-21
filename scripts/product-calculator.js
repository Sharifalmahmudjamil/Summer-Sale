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
  }
  

}
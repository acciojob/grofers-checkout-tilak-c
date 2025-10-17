const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const sumPrice=document.getElementsByClassName("price");
let sum=0;
const getSum = () => {
//Add your code here
  for(let i=0;i<sumPrice.length;i++){
	  sum+=parseInt(sumPrice[i].value);
  }
	
};

getSumBtn.addEventListener("click", getSum);


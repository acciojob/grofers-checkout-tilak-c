const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const sumPrice=document.getElementsByClassName("price");
let sum=0;
const getSum = () => {
//Add your code here
  for(let i=0;i<sumPrice.length;i++){
	  sum+=parseInt(sumPrice[i].textContent);
  }
	const table=document.getElementById('table');
	let a=document.createElement('tr');
	a.innerHTML=
		`<td>${sum}</td>`
	table.appendChild(a);
	
};

getSumBtn.addEventListener("click", getSum);


const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const sumPrice=document.getElementsByClassName("price");
let sum=0;
let flag=false;
const getSum = () => {
//Add your code here
	if(flag==false){
  for(let i=0;i<sumPrice.length;i++){
	  sum+=parseInt(sumPrice[i].textContent);
  }
	const table=document.getElementById('table');
	let a=document.createElement('tr');
	a.innerHTML=
		`<td>Total</td>
		<td id="ans">${sum}</td>`
	table.appendChild(a);
	}
	
	flag=true;
};

getSumBtn.addEventListener("click", getSum);


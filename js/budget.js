const expence_name = document.querySelector('#name');
const amount = document.querySelector('#amount');
const display = document.querySelector('.list_items');
const add = document.querySelector('.add');
const clear = document.querySelector('.clear');
var a = [];


function addNewItem(listElement, itemInput,amount_val) {
var listItem = document.createElement('li');
var listItemCheckbox = document.createElement('input');
var listItemLabel = document.createElement('label');
var listAmountLabel = document.createElement('label');
var deleteButton = document.createElement('button');

listItemCheckbox.type = 'checkbox';

deleteButton.className = 'delete';
listAmountLabel.className = 'cost';
listItemLabel.className = 'expence';
deleteButton.innerHTML = 'Delete';


listItemLabel.innerText = itemInput;
listAmountLabel.innerText = amount_val;

// budgetcheck


listElement.appendChild(listItem);
listItem.appendChild(listItemCheckbox);
listItem.appendChild(listItemLabel);
listItem.appendChild(listAmountLabel);
listItem.appendChild(deleteButton);

document.getElementById('name').value = '';
document.getElementById('amount').value = '';
document.getElementById('name').focus();
expenceCheck();
totalAmountCheck();
const check_Boxs = document.querySelectorAll('input[type="checkbox"]');

console.log(check_Boxs);
check_Boxs.forEach(e => {
e.addEventListener('change',function (a) {
    const parent = a.target.parentNode;
    if (a.target.checked) {
        parent.classList.add('active');
    }else{
        parent.classList.remove('active');
    }
});
});


const delete_btn = document.querySelectorAll('.delete');

console.log(delete_btn);
delete_btn.forEach(e => {
e.addEventListener('click',function(){
    this.parentNode.remove();
    totalAmountCheck();
    expenceCheck();
})
});



function totalAmountCheck(){
    let total= 0;
   const cost =  document.querySelectorAll('.cost');
    console.log(cost);
    cost.forEach(e => {
       if (e.innerHTML > 0) {
        total = parseInt(total) + parseInt(e.innerHTML);
        document.querySelector('#total_amount').innerHTML = total;
        expenceCheck();
       }else{
        document.querySelector('#total_amount').innerHTML = 0;
        expenceCheck();
       }
    });
}

function expenceCheck(){
    var budget = document.querySelector('#user_budget').innerHTML;
    console.log('user budget'+budget);
    let total= 0;
    const cost =  document.querySelectorAll('.cost');
     console.log(cost);
     cost.forEach(e => {
        total = total + parseInt(e.innerHTML);
        expen = budget - total;
        console.log(expen);
        if (expen <= 0) {
            expen = expen * -1;
            console.log(expen);
            document.getElementById('extraexpence').innerHTML ="Expense    "+ expen+ '/-';
            document.getElementById('extraexpence').style.color ='red';
        }else{
            document.getElementById('extraexpence').innerHTML ="Remaining   "  + expen+ '/-';
            document.getElementById('extraexpence').style.color ='green';
        }
     });
   
    
}

}





add.addEventListener('click',function(){
const itemInput = expence_name.value;
const amount_val = amount.value
const listElement = display;

if (itemInput === '' || amount_val === '') {
alert('empty input..!' );
}else{


a.push(amount_val)
addNewItem(listElement, itemInput,amount_val);

}


});

clear.addEventListener('click',function(){
var childs = display.childElementCount;
console.log(childs);
for(let i = 0; i<childs; i++){
display.removeChild(display.firstElementChild);
console.log(i);
}
document.getElementById('user_budget').innerHTML = '0';
document.getElementById('total_amount').innerHTML = '0';
document.getElementById('extraexpence').innerHTML = '0';
document.querySelector('.budget_getter').style.scale = '1';

});

// document.onkeypress = function () {
// if (event.key === 'Enter') {
// const itemInput = input.value;
// const listElement = display;
// if (itemInput === '') {
// alert('empty input..!');
// }else{
// addNewItem(listElement, itemInput);
// }
// }
// }




const budget = document.querySelector('.budget_get')
budget.addEventListener('click', function(){
    let budget_val = document.getElementById('budget').value;
    let title_val = document.getElementById('title').value;
    if (budget_val != '') {
        
        document.querySelector('.budget_getter').style.scale = '0';
        document.getElementById('main_title').innerHTML = title_val;
        document.getElementById('user_budget').innerHTML = budget_val;
        document.getElementById('title').value = '';
        document.getElementById('budget').value = '';
    }else{
        document.querySelector('.budget_getter').style.scale = '1';
    }
})


  
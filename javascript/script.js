// local time set
const time = new Date();
const timeString = time.toLocaleTimeString();
document.getElementById('current-time').innerText = timeString;


// heart button click value count
let heartCount = 0;

document.getElementById('heart-button-1')
.addEventListener('click', function(){
    const heartButtonClick = document.getElementById('heartClickNumber')
    heartCount++;
    heartButtonClick.innerText = heartCount
})
document.getElementById('heart-button-2')
.addEventListener('click', function(){
    const heartButtonClick = document.getElementById('heartClickNumber')
    heartCount++;
    heartButtonClick.innerText = heartCount
})
document.getElementById('heart-button-3')
.addEventListener('click', function(){
    const heartButtonClick = document.getElementById('heartClickNumber')
    heartCount++;
    heartButtonClick.innerText = heartCount
})
document.getElementById('heart-button-4')
.addEventListener('click', function(){
    const heartButtonClick = document.getElementById('heartClickNumber')
    heartCount++;
    heartButtonClick.innerText = heartCount
})
document.getElementById('heart-button-5')
.addEventListener('click', function(){
    const heartButtonClick = document.getElementById('heartClickNumber')
    heartCount++;
    heartButtonClick.innerText = heartCount
})
document.getElementById('heart-button-6')
.addEventListener('click', function(){
    const heartButtonClick = document.getElementById('heartClickNumber')
    heartCount++;
    heartButtonClick.innerText = heartCount
})
document.getElementById('heart-button-7')
.addEventListener('click', function(){
    const heartButtonClick = document.getElementById('heartClickNumber')
    heartCount++;
    heartButtonClick.innerText = heartCount
})
document.getElementById('heart-button-8')
.addEventListener('click', function(){
    const heartButtonClick = document.getElementById('heartClickNumber')
    heartCount++;
    heartButtonClick.innerText = heartCount
})
document.getElementById('heart-button-9')
.addEventListener('click', function(){
    const heartButtonClick = document.getElementById('heartClickNumber')
    heartCount++;
    heartButtonClick.innerText = heartCount
})


// call button action

document.getElementById('clickCallButton-1')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)
    const updateCoin = coin - 20
    if(coin > 0){
        alert('📞 National Emergency 999...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})








// function getInputValueNumber (id) {
//     const inputFiled = document.getElementById(id)
//     const inputFiledValue = inputFiled.value
//     const inputFiledValueNumber = parseInt(inputFiledValue)

//     return inputFiledValueNumber
// }



// add money features
// document.getElementById('add-money-btn')
// .addEventListener('click', function(e){
//     e.preventDefault()
    
//     const bank = document.getElementById('bank').value

//     const accountNumber = document.getElementById('account-number').value

//     // const amount = parseInt(document.getElementById('add-amount').value)
//     const amount = getInputValueNumber('add-amount')

//     // const pin = parseInt(document.getElementById('add-pin').value)
//     const pin = getInputValueNumber('add-pin')

//     const availableBalance = parseInt(document.getElementById('available-balance').innerText)

//     console.log(amount, availableBalance)

//     if(accountNumber.length < 11){
//         alert('please provide a valid account number')
//         return;
//     }

//     if(pin !== validPin){
//         alert('Please provide valid pin number')
//         return;
//     }

//     const totalNewAvailableBalance = amount + availableBalance

//     document.getElementById('available-balance').innerText = totalNewAvailableBalance

// })
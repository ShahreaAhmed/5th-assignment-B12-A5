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
        alert('📞 Calling National Emergency 999...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})
document.getElementById('clickCallButton-2')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)
    const updateCoin = coin - 20
    if(coin > 0){
        alert('📞 Calling Police Station 999...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})
document.getElementById('clickCallButton-3')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)
    const updateCoin = coin - 20
    if(coin > 0){
        alert('📞 Calling Fire Service 999...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})
document.getElementById('clickCallButton-4')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)
    const updateCoin = coin - 20
    if(coin > 0){
        alert('📞 Calling Ambulance 1994-999999...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})
document.getElementById('clickCallButton-5')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)
    const updateCoin = coin - 20
    if(coin > 0){
        alert('📞 Calling Women & Child Helpline 109...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})
document.getElementById('clickCallButton-6')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)
    const updateCoin = coin - 20
    if(coin > 0){
        alert('📞 Calling Anti-Corruption 106...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})
document.getElementById('clickCallButton-7')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)
    const updateCoin = coin - 20
    if(coin > 0){
        alert('📞 Calling Electricity Outage 16216...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})
document.getElementById('clickCallButton-8')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)
    const updateCoin = coin - 20
    if(coin > 0){
        alert('📞 Calling Brac 16445...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})
document.getElementById('clickCallButton-9')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)
    const updateCoin = coin - 20
    if(coin > 0){
        alert('📞 Calling Bangladesh Railway 163...')
    }
    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    document.getElementById('coin-value').innerText = updateCoin;  
})


// toggling
document.getElementById('clickCallButton-1')
.addEventListener('click', function(){
    document.getElementById('nationalEmergencyCallHistory').style.display = 'block'
    document.getElementById('policeCallHistory').style.display = 'none'
    document.getElementById('fireServiceCallHistory').style.display = 'none'
    document.getElementById('ambulanceCallHistory').style.display = 'none'
    document.getElementById('women&ChildHelplineCallHistory').style.display = 'none'
    document.getElementById('antiCorruptionCallHistory').style.display = 'none'
    document.getElementById('electricityOutageCallHistory').style.display = 'none'
    document.getElementById('bracCallHistory').style.display = 'none'
    document.getElementById('bangladeshRailwayCallHistory').style.display = 'none'
})
document.getElementById('clickCallButton-2')
.addEventListener('click', function(){
    document.getElementById('nationalEmergencyCallHistory').style.display = 'none'
    document.getElementById('policeCallHistory').style.display = 'block'
    document.getElementById('fireServiceCallHistory').style.display = 'none'
    document.getElementById('ambulanceCallHistory').style.display = 'none'
    document.getElementById('women&ChildHelplineCallHistory').style.display = 'none'
    document.getElementById('antiCorruptionCallHistory').style.display = 'none'
    document.getElementById('electricityOutageCallHistory').style.display = 'none'
    document.getElementById('bracCallHistory').style.display = 'none'
    document.getElementById('bangladeshRailwayCallHistory').style.display = 'none'
})
document.getElementById('clickCallButton-3')
.addEventListener('click', function(){
    document.getElementById('nationalEmergencyCallHistory').style.display = 'none'
    document.getElementById('policeCallHistory').style.display = 'none'
    document.getElementById('fireServiceCallHistory').style.display = 'block'
    document.getElementById('ambulanceCallHistory').style.display = 'none'
    document.getElementById('women&ChildHelplineCallHistory').style.display = 'none'
    document.getElementById('antiCorruptionCallHistory').style.display = 'none'
    document.getElementById('electricityOutageCallHistory').style.display = 'none'
    document.getElementById('bracCallHistory').style.display = 'none'
    document.getElementById('bangladeshRailwayCallHistory').style.display = 'none'
})
document.getElementById('clickCallButton-4')
.addEventListener('click', function(){
    document.getElementById('nationalEmergencyCallHistory').style.display = 'none'
    document.getElementById('policeCallHistory').style.display = 'none'
    document.getElementById('fireServiceCallHistory').style.display = 'none'
    document.getElementById('ambulanceCallHistory').style.display = 'block'
    document.getElementById('women&ChildHelplineCallHistory').style.display = 'none'
    document.getElementById('antiCorruptionCallHistory').style.display = 'none'
    document.getElementById('electricityOutageCallHistory').style.display = 'none'
    document.getElementById('bracCallHistory').style.display = 'none'
    document.getElementById('bangladeshRailwayCallHistory').style.display = 'none'
})
document.getElementById('clickCallButton-5')
.addEventListener('click', function(){
    document.getElementById('nationalEmergencyCallHistory').style.display = 'none'
    document.getElementById('policeCallHistory').style.display = 'none'
    document.getElementById('fireServiceCallHistory').style.display = 'none'
    document.getElementById('ambulanceCallHistory').style.display = 'none'
    document.getElementById('women&ChildHelplineCallHistory').style.display = 'block'
    document.getElementById('antiCorruptionCallHistory').style.display = 'none'
    document.getElementById('electricityOutageCallHistory').style.display = 'none'
    document.getElementById('bracCallHistory').style.display = 'none'
    document.getElementById('bangladeshRailwayCallHistory').style.display = 'none'
})
document.getElementById('clickCallButton-6')
.addEventListener('click', function(){
    document.getElementById('nationalEmergencyCallHistory').style.display = 'none'
    document.getElementById('policeCallHistory').style.display = 'none'
    document.getElementById('fireServiceCallHistory').style.display = 'none'
    document.getElementById('ambulanceCallHistory').style.display = 'none'
    document.getElementById('women&ChildHelplineCallHistory').style.display = 'none'
    document.getElementById('antiCorruptionCallHistory').style.display = 'block'
    document.getElementById('electricityOutageCallHistory').style.display = 'none'
    document.getElementById('bracCallHistory').style.display = 'none'
    document.getElementById('bangladeshRailwayCallHistory').style.display = 'none'
})
document.getElementById('clickCallButton-7')
.addEventListener('click', function(){
    document.getElementById('nationalEmergencyCallHistory').style.display = 'none'
    document.getElementById('policeCallHistory').style.display = 'none'
    document.getElementById('fireServiceCallHistory').style.display = 'none'
    document.getElementById('ambulanceCallHistory').style.display = 'none'
    document.getElementById('women&ChildHelplineCallHistory').style.display = 'none'
    document.getElementById('antiCorruptionCallHistory').style.display = 'none'
    document.getElementById('electricityOutageCallHistory').style.display = 'block'
    document.getElementById('bracCallHistory').style.display = 'none'
    document.getElementById('bangladeshRailwayCallHistory').style.display = 'none'
})
document.getElementById('clickCallButton-8')
.addEventListener('click', function(){
    document.getElementById('nationalEmergencyCallHistory').style.display = 'none'
    document.getElementById('policeCallHistory').style.display = 'none'
    document.getElementById('fireServiceCallHistory').style.display = 'none'
    document.getElementById('ambulanceCallHistory').style.display = 'none'
    document.getElementById('women&ChildHelplineCallHistory').style.display = 'none'
    document.getElementById('antiCorruptionCallHistory').style.display = 'none'
    document.getElementById('electricityOutageCallHistory').style.display = 'block'
    document.getElementById('bracCallHistory').style.display = 'none'
    document.getElementById('bangladeshRailwayCallHistory').style.display = 'none'
})
document.getElementById('clickCallButton-9')
.addEventListener('click', function(){
    document.getElementById('nationalEmergencyCallHistory').style.display = 'none'
    document.getElementById('policeCallHistory').style.display = 'none'
    document.getElementById('fireServiceCallHistory').style.display = 'none'
    document.getElementById('ambulanceCallHistory').style.display = 'none'
    document.getElementById('women&ChildHelplineCallHistory').style.display = 'none'
    document.getElementById('antiCorruptionCallHistory').style.display = 'none'
    document.getElementById('electricityOutageCallHistory').style.display = 'none'
    document.getElementById('bracCallHistory').style.display = 'none'
    document.getElementById('bangladeshRailwayCallHistory').style.display = 'block'
})







// // add mony toggling
// document.getElementById('add-button')
// .addEventListener('click', function(){
//     document.getElementById('cash-out-parent').style.display = 'none'

//     document.getElementById('transfer-money-parent').style.display = 'none'

//     document.getElementById('add-money-parent').style.display = 'block'
// })
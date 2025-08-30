// call history function
function addCallHistory (name, number){
    const callHistoryContainer = document.getElementById('call-history-box')
    const div = document.createElement('div')
    const time = new Date().toLocaleTimeString()

    div.innerHTML =`
    <div class="flex justify-between items-center mt-4 bg-[#FAFAFA] p-4 rounded-lg">
                        <div>
                            <h3 class="text-[18px] font-semibold">${name}</h3>
                            <p class="mt-1 text-[18px] font-medium text-[#5C5C5C]">${number}</p>
                        </div>
                        <div>
                            <p class="text-[18px]">${time}</p>
                        </div>
                    </div>         
    
    `
    callHistoryContainer.appendChild(div)

 document.getElementById('clear-button')
.addEventListener('click', function(){

    callHistoryContainer.innerHTML = "";
    
})

}


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

    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    const updateCoin = coin - 20

    document.getElementById('coin-value').innerText = updateCoin; 

        alert('📞 Calling National Emergency 999...')
    
     addCallHistory('জাতীয় জরুরি সেবা', '999');

})


document.getElementById('clickCallButton-2')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)

    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    const updateCoin = coin - 20

    document.getElementById('coin-value').innerText = updateCoin;

        alert('📞 Calling Police Station 999...')
    
    addCallHistory('পুলিশ', '999');  

})

document.getElementById('clickCallButton-3')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)

    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }

    const updateCoin = coin - 20

    document.getElementById('coin-value').innerText = updateCoin;  
    
        alert('📞 Calling Fire Service 999...')

    addCallHistory('ফায়ার সার্ভিস', '999');
    
})
document.getElementById('clickCallButton-4')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)

    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }
    const updateCoin = coin - 20

    document.getElementById('coin-value').innerText = updateCoin;
    
        alert('📞 Calling Ambulance 1994-999999...')
    
    addCallHistory('অ্যাম্বুলেন্স', '1994-999999');
      
})

document.getElementById('clickCallButton-5')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)

    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }

    const updateCoin = coin - 20

    document.getElementById('coin-value').innerText = updateCoin;
    
        alert('📞 Calling Women & Child Helpline 109...')
    
    addCallHistory('নারী ও শিশু সহায়তা', '109');
      
})

document.getElementById('clickCallButton-6')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)

    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }

    const updateCoin = coin - 20

    document.getElementById('coin-value').innerText = updateCoin;
    
        alert('📞 Calling Anti-Corruption 106...')
    
    addCallHistory('দুদক', '106');
      
})

document.getElementById('clickCallButton-7')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)

    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }

    const updateCoin = coin - 20

    document.getElementById('coin-value').innerText = updateCoin;
    
        alert('📞 Calling Electricity Outage 16216...')
    
    addCallHistory('বিদ্যুৎ বিভ্রাট', '16216');
      
})
document.getElementById('clickCallButton-8')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)

    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }

    const updateCoin = coin - 20

    document.getElementById('coin-value').innerText = updateCoin;
    
        alert('📞 Calling Brac 16445...')
    
    addCallHistory('ব্র্যাক', '16445');
      
})

document.getElementById('clickCallButton-9')
.addEventListener('click', function(){
    const coin = parseInt(document.getElementById('coin-value').innerText)

    if(coin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 কয়েন লাগবে।')
        return;
    }

    const updateCoin = coin - 20

    document.getElementById('coin-value').innerText = updateCoin;
    
        alert('📞 Calling Bangladesh Railway 163...')
    
    addCallHistory('বাংলাদেশ রেলওয়ে', '163');
      
})



// copy count
let copyCount = 0;

document.getElementById('copyCount1')
.addEventListener('click', function(){
    const hotLineNumber = '999'

    navigator.clipboard.writeText(hotLineNumber)
    
    alert(`নম্বর কপি হয়েছে: ${hotLineNumber}`)

    const copyButtonClick = document.getElementById('copyTotalValueCounter')
    copyCount++;
    copyButtonClick.innerText = copyCount
})
document.getElementById('copyCount2')
.addEventListener('click', function(){
    const hotLineNumber = '999'

    navigator.clipboard.writeText(hotLineNumber)
    
    alert(`নম্বর কপি হয়েছে: ${hotLineNumber}`)

    const copyButtonClick = document.getElementById('copyTotalValueCounter')
    copyCount++;
    copyButtonClick.innerText = copyCount
})
document.getElementById('copyCount3')
.addEventListener('click', function(){
    const hotLineNumber = '999'

    navigator.clipboard.writeText(hotLineNumber)
    
    alert(`নম্বর কপি হয়েছে: ${hotLineNumber}`)

    const copyButtonClick = document.getElementById('copyTotalValueCounter')
    copyCount++;
    copyButtonClick.innerText = copyCount
})
document.getElementById('copyCount4')
.addEventListener('click', function(){
    const hotLineNumber = '1994-999999'

    navigator.clipboard.writeText(hotLineNumber)
    
    alert(`নম্বর কপি হয়েছে: ${hotLineNumber}`)

    const copyButtonClick = document.getElementById('copyTotalValueCounter')
    copyCount++;
    copyButtonClick.innerText = copyCount
})
document.getElementById('copyCount5')
.addEventListener('click', function(){
    const hotLineNumber = '109'

    navigator.clipboard.writeText(hotLineNumber)
    
    alert(`নম্বর কপি হয়েছে: ${hotLineNumber}`)

    const copyButtonClick = document.getElementById('copyTotalValueCounter')
    copyCount++;
    copyButtonClick.innerText = copyCount
})
document.getElementById('copyCount6')
.addEventListener('click', function(){
    const hotLineNumber = '106'

    navigator.clipboard.writeText(hotLineNumber)
    
    alert(`নম্বর কপি হয়েছে: ${hotLineNumber}`)

    const copyButtonClick = document.getElementById('copyTotalValueCounter')
    copyCount++;
    copyButtonClick.innerText = copyCount
})
document.getElementById('copyCount7')
.addEventListener('click', function(){
    const hotLineNumber = '16216'

    navigator.clipboard.writeText(hotLineNumber)
    
    alert(`নম্বর কপি হয়েছে: ${hotLineNumber}`)

    const copyButtonClick = document.getElementById('copyTotalValueCounter')
    copyCount++;
    copyButtonClick.innerText = copyCount
})
document.getElementById('copyCount8')
.addEventListener('click', function(){
    const hotLineNumber = '16445'

    navigator.clipboard.writeText(hotLineNumber)
    
    alert(`নম্বর কপি হয়েছে: ${hotLineNumber}`)

    const copyButtonClick = document.getElementById('copyTotalValueCounter')
    copyCount++;
    copyButtonClick.innerText = copyCount
})
document.getElementById('copyCount9')
.addEventListener('click', function(){
    const hotLineNumber = '163'

    navigator.clipboard.writeText(hotLineNumber)
    
    alert(`নম্বর কপি হয়েছে: ${hotLineNumber}`)

    const copyButtonClick = document.getElementById('copyTotalValueCounter')
    copyCount++;
    copyButtonClick.innerText = copyCount
})





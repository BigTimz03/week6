const coinName1 = document.querySelector("#coin-name1");
const coinImage1 = document.querySelector("#coin-image1");
const select1 = document.querySelector("#top-coin");

select1.addEventListener('input', () =>{
    const coin1 = select1.value;
    switch(coin1){
        case "ethereum":
            coinImage1.src = "asset/ethereum.png";
            coinName1.innerHTML = "Ethereum <span>Eth</span";
            break;
        case "bitcoin":
            coinImage1.src = "asset/bitcoin.png"
            coinName1.innerHTML = "Bitcoin <span>Btc</span"
            break;
        case "ton":
            coinImage1.src = "asset/ton.png";
            coinName1.innerHTML = "Ton <span>Ton</span";
            break;
        case "solana":
            coinImage1.src = "asset/solana.png";
            coinName1.innerHTML = "Solana <span>Sol</span";

    }
});

const coinName2 = document.querySelector("#coin-name2");
const coinImage2 = document.querySelector("#coin-image2");
const select2 = document.querySelector("#down-coin");

const coin = document.querySelector("#coin");
const print = document.querySelector(".print")

select2.addEventListener('input', () =>{

    const coinInput = parseInt(coin.value);

    const coin2 = select2.value;

    switch(coin2){
        case "ethereum":
            coinImage2.src = "asset/ethereum.png";
            coinName2.innerHTML = "Ethereum <span>Eth</span";

            if (select1.value === "bitcoin"){
                print.textContent = `${coinInput} BTC = ${((coinInput * 64600) / 2521)} ETH`
                print.style.display = 'block';
            }else if (select1.value === "ethereum"){
                print.textContent = `${coinInput} ETH = ${coinInput} ETH`;
                print.style.display = 'block';
            }else if (select1.value === "ton"){
                print.textContent = `${coinInput} TON = ${((coinInput * 5) / 2521)} ETH`;
                print.style.display = 'block';
            }else if (select1.value === "solana"){
                print.textContent = `${coinInput} SOL = ${((coinInput * 155) / 2521)} ETH`;
                print.style.display = 'block';
            }
            break;

        case "bitcoin":
            coinImage2.src = "asset/bitcoin.png"
            coinName2.innerHTML = "Bitcoin <span>Btc</span"

            if (select1.value === "bitcoin"){
                print.textContent = `${coinInput} BTC = ${coinInput} BTC`;
                print.style.display = 'block';
            }else if (select1.value === "ethereum"){
                print.textContent = `${coinInput} ETH = ${((coinInput * 2521) / 64600)} BTC`;
                print.style.display = 'block';
            }else if (select1.value === "ton"){
                print.textContent = `${coinInput} TON = ${((coinInput * 5) / 64600)} BTC`;
                print.style.display = 'block';
            }else if (select1.value === "solana"){
                print.textContent = `${coinInput} SOL = ${((coinInput * 155) / 64600)} BTC`;
                print.style.display = 'block';
            }
            break;

        case "ton":
            coinImage2.src = "asset/ton.png";
            coinName2.innerHTML = "Ton <span>Ton</span";
            if (select1.value === "bitcoin"){
                print.textContent = `${coinInput} BTC = ${((coinInput * 64600) / 5)} TON`;
                print.style.display = 'block';
            }else if (select1.value === "ethereum"){
                print.textContent = `${coinInput} ETH = ${((coinInput * 2521) / 5)} TON`;
                print.style.display = 'block';
            }else if (select1.value === "ton"){
                print.textContent = `${coinInput} TON = ${coinInput} TON`;
                print.style.display = 'block';
            }else if (select1.value === "solana"){
                print.textContent = `${coinInput} SOL = ${((coinInput * 155) / 5)} TON`;
                print.style.display = 'block';
            }
            break;

        case "solana":
            coinImage2.src = "asset/solana.png";
            coinName2.innerHTML = "Solana <span>Sol</span";
            if (select1.value === "bitcoin"){
                print.textContent = `${coinInput} BTC = ${((coinInput * 64600) / 155)} SOL`;
                print.style.display = 'block';
            }else if (select1.value === "ethereum"){
                print.textContent = `${coinInput} ETH = ${((coinInput * 2521) / 155)} SOL`;
                print.style.display = 'block';
            }else if (select1.value === "ton"){
                print.textContent = `${coinInput} TON = ${((coinInput * 5) / 155)} SOL`;
                print.style.display = 'block';
            }else if (select1.value === "solana"){
                print.textContent = `${coinInput} SOL = ${coinInput} SOL`;
                print.style.display = 'block';
            }
    
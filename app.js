const goldSlider = document.getElementById("goldSlider");
const silverSlider = document.getElementById("silverSlider");
const goldValue = document.getElementById("goldValue");
const silverValue = document.getElementById("silverValue");

function updateSilverSlider() {
    silverSlider.value = 100 - goldSlider.value;
    goldValue.innerText = `${goldSlider.value}%`;
    silverValue.innerText = `${silverSlider.value}%`;
}

function updateGoldSlider() {
    goldSlider.value = 100 - silverSlider.value;
    goldValue.innerText = `${goldSlider.value}%`;
    silverValue.innerText = `${silverSlider.value}%`;
}


function submitRatios() {
    const investmentAmount = document.getElementById("investmentAmount").value;
    const goldPercentage = document.getElementById("goldSlider").value;
    const silverPercentage = document.getElementById("silverSlider").value;
    const resultDiv = document.getElementById("result");

    const goldAmount = ((investmentAmount * goldPercentage) / 100).toFixed(2);
    const silverAmount = ((investmentAmount * silverPercentage) / 100).toFixed(2);

    resultDiv.innerHTML = `Złoto: ${goldPercentage}% (${goldAmount} PLN), Srebro: ${silverPercentage}% (${silverAmount} PLN)`;
    sortProducts()
}


function sortProducts() {
    const sortSelect = document.getElementById("sortSelect");
    const selectedSort = sortSelect.value;
    
    let sortedProducts;

    switch (selectedSort) {
        case "priceLowToHigh":
            sortedProducts = listProduks.slice().sort((a, b) => a.price - b.price);
            break;
        case "priceHighToLow":
            sortedProducts = listProduks.slice().sort((a, b) => b.price - a.price);
            break;
        default:
            sortedProducts = listProduks;
    }
    renderProductList(sortedProducts);
    
}

function renderProductList(products) {
    const resultDivList = document.getElementById("resultList");

    const productListHTML = products.map(product => {
        return `
        <div class="product">
            <img src="${product.imgSrc}" alt="Product Image">
            <div>${product.name}</div>
            <div>Cena: ${product.price} PLN</div>
        </div>
        `;
    }).join("");

    resultDivList.innerHTML = productListHTML;
}



const listProduks = [
    {
        "name": "Kanadyjski Liść Klonowy 1 uncja Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Amerykanski-Orzel-1-10-uncji-Zlota-2024-9255.jpg",
        "price": 9556
    },
    {
        "name": "Krugerrand 1 uncja Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Wiedenski-Filharmonik-1-uncja-Zlota-2024-9243.jpg",
        "price": 9595
    },
    {
        "name": "Amerykański Orzeł 1/10 uncji Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Chinska-Panda-15-gramow-Zlota-2024-9238.jpg",
        "price": 1089
    },
    {
        "name": "Wiedeński Filharmonik 1 uncja Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Wielka-Brytania-Zestaw-5-monet-Sovereign-2024-Proof-9222.jpg",
        "price": 9547
    },
    {
        "name": "Chińska Panda 15 gramów Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Wielka-Brytania-Suweren-Karol-III-2024-Proof-9220.jpg",
        "price": 4829
    },
    {
        "name": "Wielka Brytania: Zestaw 5 monet Sovereign 2024 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Wielka-Brytania-1-2-Suwerena-Karol-III-2024-Proof-9219.jpg",
        "price": 29500
    },
    {
        "name": "Wielka Brytania: Suweren - Karol III 2024 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Perth-Mint-Lunar-III-Rok-Smoka-1-4-uncji-Zlota-2024-Proof-9181.jpg",
        "price": 3735
    },
    {
        "name": "Wielka Brytania: 1/2 Suwerena - Karol III 2024 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_African-Wildlife-Slon-Somalijski-0-5-grama-Zlota-2024-Proof-9161.jpg",
        "price": 1985
    },
    {
        "name": "Perth Mint: Lunar III - Rok Smoka 1/4 uncji Złota 2024 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Zestaw-8-monet-King-Charles-III-Definitives-Zloto-2023-Proof-9155.jpg",
        "price": 3100
    },
    {
        "name": "African Wildlife: Słoń Somalijski 0,5 grama Złota 2024 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Canada-Peace-Dollar-1-uncja-Zlota-2024-Proof-Ultra-High-Relief-Plated-Coin-9144.jpg",
        "price": 235
    },
    {
        "name": "Zestaw 8 monet King Charles III Definitives Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Australijski-Kangur-1000-gramow-Zlota-2024-9101.jpg",
        "price": 40200
    },
    {
        "name": "Canada: Peace Dollar 1 uncja Złota 2024 Proof Ultra High Relief Plated Coin",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Australijski-Kangur-1-10-uncji-Zlota-2024-9098.jpg",
        "price": 13990
    },
    {
        "name": "Australijski Kangur 1000 gramów Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Australijski-Kangur-1-4-uncji-Zlota-2024-9097.jpg",
        "price": 305567
    },
    {
        "name": "Australijski Kangur 1/10 uncji Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Australijski-Kangur-1-2-uncji-Zlota-2024-9096.jpg",
        "price": 1024
    },
    {
        "name": "Australijski Kangur 1/4 uncji Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Australijski-Kangur-1-uncja-Zlota-2024-9095.jpg",
        "price": 2502
    },
    {
        "name": "Australijski Kangur 1/2 uncji Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Chaim-Weizmann-100-ILP-Zloto-1963-Proof-8987.jpg",
        "price": 4912
    },
    {
        "name": "Australijski Kangur 1 uncja Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_David-Ben-Gurion-Zloto-1974-Proof-8985.jpg",
        "price": 9488
    },
    {
        "name": "Chaim Weizmann 100 ILP Złoto 1963 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_And-no-one-knew-his-burial-place-Israels-21th-Anniversary-Zloto-1969-Proof-8953.jpg",
        "price": 7394
    },
    {
        "name": "David Ben-Gurion Złoto 1974 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Let-My-People-Go-Zloto-1971-Proof-8952.jpg",
        "price": 7620
    },
    {
        "name": "And no-one knew his burial place - Israel's 21th Anniversary Złoto 1969 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Niue-Aurora-Borealis-kolorowany-1-uncja-Zlota-2023-Proof-8921.jpg",
        "price": 5995
    },
    {
        "name": "Let My People Go Złoto 1971 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Odsiecz-wiedenska-100-zl-Zloto-2023-Proof-8886.jpg",
        "price": 5937
    },
    {
        "name": "Niue: Aurora Borealis kolorowany 1 uncja Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Royal-Mint-Lunar-Rok-Smoka-1-uncja-Zlota-2024-Proof-8829.jpg",
        "price": 12700
    },
    {
        "name": "Odsiecz wiedeńska 100 zł Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Royal-Mint-Lunar-Rok-Smoka-1-4-uncji-Zlota-2024-Proof-8828.jpg",
        "price": 2690
    },
    {
        "name": "Royal Mint Lunar: Rok Smoka 1 uncja Złota 2024 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Britannia-1-uncja-Zlota-2024-8764.jpg",
        "price": 14487
    },
    {
        "name": "Royal Mint Lunar: Rok Smoka 1/4 uncji Złota 2024 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Perth-Mint-Lunar-III-Rok-Smoka-1-20-uncji-Zlota-2024-8719.jpg",
        "price": 3922
    },
    {
        "name": "Britannia 1 uncja Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Perth-Mint-Lunar-III-Rok-Smoka-10-uncji-Zlota-2024-8713.jpg",
        "price": 9498
    },
    {
        "name": "Perth Mint: Lunar III - Rok Smoka 1/20 uncji Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_-Big-Five-II-Buffalo-1-4-uncji-Zlota-2023-Proof-8695.jpg",
        "price": 605
    },
    {
        "name": "Perth Mint: Lunar III - Rok Smoka 10 uncji Złota 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Big-Five-II-Zestaw-Buffalo-2-x-1-4-uncji-Zlota-2023-Proof-8694.jpg",
        "price": 95913
    },
    {
        "name": " Big Five II: Buffalo 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Tuvalu-James-Bond-Legacy-2nd-issue-Roger-Moore-kolorowany-1-4-uncji-Zlota-2023-Proof-8139.jpg",
        "price": 2950
    },
    {
        "name": "Big Five II: Zestaw Buffalo 2 x 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Wielka-Brytania-Celebration-Sovereign-The-Coronation-of-His-Majesty-King-Charles-2023-Struck-6-May-2023-8125.jpg",
        "price": 5990
    },
    {
        "name": "The Police 1 uncja Złota 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_The-Coronation-of-His-Majesty-King-Charles-III-GBP5-Zloto-2023-Proof-8124.jpg",
        "price": 14290
    },
    {
        "name": "Star Wars: R2-D2 and C-3PO 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_The-Coronation-of-His-Majesty-King-Charles-III-50p-Zloto-2023-Proof-8120.jpg",
        "price": 3899
    },
    {
        "name": "Wielka Brytania: The Coronation 1/2 Sovereign 2023 ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Kanadyjski-Lisc-Klonowy-1-uncja-Zlota-2023-Proof-Ultra-High-Relief-8106.jpg",
        "price": 1117
    },
    {
        "name": "The Royal Tudor Beasts: The Bull of Clarence 1 uncja Złota 2023 ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_-Niue-Slovakia-Eagle-1-2-uncji-Zlota-2023-8016.jpg",
        "price": 9544
    },
    {
        "name": "Dame Shirley Bassey 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_-Niue-Slovakia-Eagle-1-uncja-Zlota-2023-8015.jpg",
        "price": 3840
    },
    {
        "name": "Canada: The Striking Bald Eagle $200 Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Niue-Azure-Kingfisher-kolorowany-1-uncja-Zlota-2023-Proof-8006.jpg",
        "price": 13330
    },
    {
        "name": "Myths & Legends: Morgan Le Fay 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Niue-Marvel-Captain-America-1-4-uncji-Zlota-2023-Proof-7951.jpg",
        "price": 3909
    },
    {
        "name": "Australijski Emu 1 uncja Złota 2023 MS 70 NGC First Day of Issue",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Niue-DC-Comics-The-Flash-1-4-uncji-Zlota-2022-Proof-7926.jpg",
        "price": 10518
    },
    {
        "name": "Australijski Emu 1 uncja Złota 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Niue-DC-Comics-The-Flash-1-uncja-Zlota-2022-Proof-7925.jpg",
        "price": 9609
    },
    {
        "name": "Canada: His Majesty King Charles III's Royal Cypher $10 Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Niue-Harry-Potter-Classic-Golden-Snitch-1-4-uncji-Zlota-2022-Proof-7900.jpg",
        "price": 915
    },
    {
        "name": "Canada: His Majesty King Charles III's Royal Cypher $200 Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Myths-Legends-Merlin-1-4-uncji-Zlota-2023-Proof-7888.jpg",
        "price": 13190
    },
    {
        "name": " Big Five: Leopard 1 uncja Złota 2020 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Myths-Legends-Merlin-1-uncja-Zlota-2023-Proof-7887.jpg",
        "price": 25900
    },
    {
        "name": "Tuvalu: James Bond Legacy 2nd issue - Roger Moore kolorowany 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Niue-Czech-Lion-1-2-uncji-Zlota-2023-7863.jpg",
        "price": 2810
    },
    {
        "name": "Wielka Brytania: Celebration Sovereign - The Coronation of His Majesty King Charles 2023 (Struck 6 May 2023)",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Harry-Potter-Hogwarts-School-of-Witchcraft-and-Wizardry-50p-Zloto-2023-Proof-7852.jpg",
        "price": 8990
    },
    {
        "name": "The Coronation of His Majesty King Charles III £5 Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Australijski-Kangur-1-uncja-Zlota-2023-Proof-High-Relief-7845.jpg",
        "price": 15750
    },
    {
        "name": "The Coronation of His Majesty King Charles III 50p Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Rwanda-Nautical-Ounce-USS-Constitution-1-uncja-Zlota-2022-7815.jpg",
        "price": 6390
    },
    {
        "name": "Kanadyjski Liść Klonowy 1 uncja Złota 2023 Proof Ultra High Relief",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Myths-Legends-King-Arthur-1-4-uncji-Zlota-2023-Proof-7734.jpg",
        "price": 13490
    },
    {
        "name": " Niue: Slovakia Eagle 1/2 uncji Złota 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_-Canada-Tall-Ships-Full-Rigged-Ship-200-Zloto-2023-Proof-7693.jpg",
        "price": 5447
    },
    {
        "name": " Niue: Slovakia Eagle 1 uncja Złota 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Canada-The-Curious-Marten-10-Zloto-2023-Proof-7692.jpg",
        "price": 10704
    },
    {
        "name": "Niue: Azure Kingfisher kolorowany 1 uncja Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mongolia-Mongolian-Falcon-1-uncja-Zlota-2023-Proof-Ultra-High-Relief-7681.jpg",
        "price": 12195
    },
    {
        "name": "Niue: Marvel - Captain America 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Tree-of-Life-kolorowany-1-uncja-Zlota-2013-7647.jpg",
        "price": 3520
    },
    {
        "name": "Niue: DC Comics - The Flash 1/4 uncji Złota 2022 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Fishes-kolorowany-1-uncja-Zlota-2013-7645.jpg",
        "price": 3520
    },
    {
        "name": "Niue: DC Comics - The Flash 1 uncja Złota 2022 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Peacock-kolorowany-1-uncja-Zlota-2013-7643.jpg",
        "price": 12760
    },
    {
        "name": "Niue: Harry Potter Classic - Golden Snitch 1/4 uncji Złota 2022 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Lion-kolorowany-1-uncja-Zlota-2014-7641.jpg",
        "price": 10250
    },
    {
        "name": "Myths & Legends: Merlin 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Autumn-kolorowany-1-uncja-Zlota-2013-7639.jpg",
        "price": 3520
    },
    {
        "name": "Myths & Legends: Merlin 1 uncja Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Pomegranates-kolorowany-1-uncja-Zlota-2013-7637.jpg",
        "price": 3890
    },
    {
        "name": "Niue: Czech Lion 1/2 uncji Złota 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_David-with-Harp-kolorowany-1-uncja-Zlota-2012-7634.jpg",
        "price": 14600
    },
    {
        "name": "Harry Potter: Hogwarts School of Witchcraft and Wizardry 50p Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Menorah-kolorowana-1-uncja-Zlota-2012-7633.jpg",
        "price": 5447
    },
    {
        "name": "Australijski Kangur 1 uncja Złota 2023 Proof High Relief\t",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Old-Jaffa-1-uncja-Zlota-2020-Prooflike-7615.jpg",
        "price": 5800
    },
    {
        "name": "Rwanda: Nautical Ounce - USS Constitution 1 uncja Złota 2022",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Old-Tiberias-1-uncja-Zlota-2021-Prooflike-7613.jpg",
        "price": 11250
    },
    {
        "name": "Zestaw 3 monet Premium Britannia Złoto 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Old-Acre-1-uncja-Zlota-2022-Prooflike-7611.jpg",
        "price": 12900
    },
    {
        "name": "Britannia 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_-Church-of-the-Nativity-1-uncja-Zlota-2019-7610.jpg",
        "price": 11100
    },
    {
        "name": "Myths & Legends: King Arthur 1/4 uncji Złota 2023 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_The-Annunciation-Church-1-uncja-Zlota-2021-7603.jpg",
        "price": 3850
    },
    {
        "name": " Canada: Tall Ships - Full-Rigged Ship $200 Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Church-of-the-Holy-Sepulchre-1-uncja-Zlota-2022-7601.jpg",
        "price": 3600
    },
    {
        "name": "Canada: The Curious Marten $10 Złoto 2023 Proof ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Jonah-in-the-Whale-10-NIS-Zloto-2010-Proof-7591.jpg",
        "price": 6590
    },
    {
        "name": "Mongolia: Mongolian Falcon 1 uncja Złota 2023 Proof Ultra High Relief",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Parting-of-the-Red-Sea-10-NIS-Zloto-2008-Proof-7589.jpg",
        "price": 959
    },
    {
        "name": "Tree of Life kolorowany 1 uncja Złota 2013",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Wolf-with-the-Lamb-10-NIS-Zloto-2007-Proof-7588.jpg",
        "price": 14990
    },
    {
        "name": "Fishes kolorowany 1 uncja Złota 2013",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Abraham-and-the-Angels-10-NIS-Zloto-2006-Proof-7587.jpg",
        "price": 11500
    },
    {
        "name": "Mexican Libertad 1/20 uncji Srebra 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mexican-Libertad-1-20-uncji-Srebra-2022-6929.jpg",
        "price": 36
    },
    {
        "name": "Arka Noego 1/4 uncji Srebra 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mexican-Libertad-1-4-uncji-Srebra-2023-8758.jpg",
        "price": 43
    },
    {
        "name": "Mexican Libertad 1/20 uncji Srebra 2022",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Arka-Noego-1-2-uncji-Srebra-2024-9200.jpg",
        "price": 57
    },
    {
        "name": "Mexican Libertad 1/4 uncji Srebra 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_USA-George-Washington-1-2-Dollar-Srebro-1982-S-Proof-3358.jpg",
        "price": 64
    },
    {
        "name": "Arka Noego 1/2 uncji Srebra 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mexican-Libertad-1-4-uncji-Srebra-2017-8978.jpg",
        "price": 65
    },
    {
        "name": "USA: George Washington 1/2 Dollar Srebro 1982-S Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mexican-Libertad-1-10-uncji-Srebra-2021-5071.jpg",
        "price": 66
    },
    {
        "name": "Mexican Libertad 1/4 uncji Srebra 2017",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Samoa-The-Teacher-1-2-uncji-Srebra-2023-Prooflike-9339.jpg",
        "price": 67
    },
    {
        "name": "Mexican Libertad 1/10 uncji Srebra 2021",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Arka-Noego-1-2-uncji-Srebra-2023-7056.jpg",
        "price": 69
    },
    {
        "name": "Samoa: The Teacher 1/2 uncji Srebra 2023 Prooflike",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Ghana-Alien-1-2-uncji-Srebra-2023-Prooflike-9854.jpg",
        "price": 73
    },
    {
        "name": "Arka Noego 1/2 uncji Srebra 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Perth-Mint-Lunar-III-Rok-Smoka-1-2-uncji-Srebra-2024-8724.jpg",
        "price": 75
    },
    {
        "name": "Ghana: Alien 1/2 uncji Srebra 2023 Prooflike",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Samoa-The-Teacher-1-2-uncji-Srebra-2023-Antiqued-Coin-9340.jpg",
        "price": 78
    },
    {
        "name": "Perth Mint: Lunar III - Rok Smoka 1/2 uncji Srebra 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Perth-Mint-Lunar-III-Rok-Smoka-kolorowany-1-2-uncji-Srebra-2024-10093.jpg",
        "price": 79
    },
    {
        "name": "Samoa: The Teacher 1/2 uncji Srebra 2023 Antiqued Coin",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Happiness-is-a-Bird-1-4-uncji-Srebra-2022-5821.jpg",
        "price": 81
    },
    {
        "name": "Perth Mint: Lunar III - Rok Smoka kolorowany 1/2 uncji Srebra 2024",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Little-I-Am-Me-1-4-uncji-Srebra-2022-6024.jpg",
        "price": 85
    },
    {
        "name": "Happiness is a Bird 1/4 uncji Srebra 2022 ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mexican-Libertad-1-20-uncji-Srebra-2021-Proof-5139.jpg",
        "price": 89
    },
    {
        "name": "Little I-Am-Me 1/4 uncji Srebra 2022 ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Canada-Moments-to-Hold-Your-Canadian-Story-1-4-uncji-Srebra-2022-Specimen-7045.jpg",
        "price": 89
    },
    {
        "name": "Mexican Libertad 1/20 uncji Srebra 2021 Proof",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Canada-Moments-to-Hold-100-rocznica-Royal-Agricultural-Winter-Fair-1-4-uncji-Srebra-2022-Specimen-7119.jpg",
        "price": 95
    },
    {
        "name": "Canada: Moments to Hold - Your Canadian Story 1/4 uncji Srebra 2022 Specimen ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mexican-Libertad-1-2-uncji-Srebra-2023-8757.jpg",
        "price": 95
    },
    {
        "name": "Canada: Moments to Hold - 100. rocznica Royal Agricultural Winter Fair 1/4 uncji Srebra 2022 Specimen ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mexican-Libertad-1-4-uncji-Srebra-2022-6927.jpg",
        "price": 95
    },
    {
        "name": "Mexican Libertad 1/2 uncji Srebra 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Canada-Moments-to-Hold-Medal-of-Bravery-50-rocznica-1-4-uncji-Srebra-2022-7035.jpg",
        "price": 96
    },
    {
        "name": "Mexican Libertad 1/4 uncji Srebra 2022",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Lucky-Pig-5-Euro-Srebro-2023-7209.jpg",
        "price": 99
    },
    {
        "name": "Canada: Moments to Hold - Medal of Bravery 50. rocznica 1/4 uncji Srebra 2022 ",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Ghana-Alien-1-2-uncji-Srebra-2022-Prooflike-7820.jpg",
        "price": 99
    },
    {
        "name": "Lucky Pig 5 Euro Srebro 2023",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mexican-Libertad-1-2-uncji-Srebra-2017-8977.jpg",
        "price": 99
    },
    {
        "name": "Ghana: Alien 1/2 uncji Srebra 2022 Prooflike",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Mexican-Libertad-1-10-uncji-Srebra-2022-6928.jpg",
        "price": 99
    },
    {
        "name": "Mexican Libertad 1/2 uncji Srebra 2017",
        "imgSrc": "https://www.metalmarket.eu/pol_il_Canada-Lunar-Year-of-the-Dragon-1-4-uncji-Srebra-2024-Specimen-8626.jpg",
        "price": 99
    },


];






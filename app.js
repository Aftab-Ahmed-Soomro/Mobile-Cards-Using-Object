let mobiles = [{
    mobileName : 'Oppo A3 Pro',
    brand : 'Oppo',
    price : 'Rs 38000',
    spec : '4 GB RAM',
    color : 'Moonlit Purple, Starry Black',
    img : 'images/oppo-a3-pro-india.jpg',
    location : 'https://www.gsmarena.com/oppo_a3_pro_(india)-13160.php'
},{
    mobileName : 'Xiaomi Redmi 13',
    brand : 'Xiaomi',
    price : 'Rs 48000',
    spec : '8 GB RAM',
    color : 'Black',
    img : 'images/xiaomi-redmi-13-.jpg',
    location : 'https://www.gsmarena.com/xiaomi_redmi_13_5g-13157.php'
},{
    mobileName : 'Oppo Reno12 Pro',
    brand : 'Oppo',
    price : 'Rs 53000',
    spec : '8 GB RAM',
    color : 'Space Brown, Sunset Gold',
    img : 'images/oppo-reno12-pro-cn.jpg',
    location : 'https://www.gsmarena.com/oppo_reno12_pro-13132.php'
},{
    mobileName : 'Samsung Galaxy A55',
    brand : 'Samsung',
    price : 'Rs 83000',
    spec : '16 GB RAM',
    color : 'Iceblue, Lilac, Navy, Lemon',
    img : 'images/samsung-galaxy-a55.jpg',
    location : 'https://www.gsmarena.com/samsung_galaxy_a55-12824.php'
},{
    mobileName : 'Oppo A3 Pro',
    brand : 'Oppo',
    price : 'Rs 38000',
    spec : '4 GB RAM',
    color : 'Moonlit Purple, Starry Black',
    img : 'images/oppo-a3-pro-india.jpg',
    location : 'https://www.gsmarena.com/oppo_a3_pro_(india)-13160.php'
},{
    mobileName : 'Xiaomi Redmi 13',
    brand : 'Xiaomi',
    price : 'Rs 48000',
    spec : '8 GB RAM',
    color : 'Black',
    img : 'images/xiaomi-redmi-13-.jpg',
    location : 'https://www.gsmarena.com/xiaomi_redmi_13_5g-13157.php'
},{
    mobileName : 'Oppo Reno12 Pro',
    brand : 'Oppo',
    price : 'Rs 53000',
    spec : '8 GB RAM',
    color : 'Space Brown, Sunset Gold',
    img : 'images/oppo-reno12-pro-cn.jpg',
    location : 'https://www.gsmarena.com/xiaomi_redmi_13_5g-13157.php'
},{
    mobileName : 'Samsung Galaxy A55',
    brand : 'Samsung',
    price : 'Rs 83000',
    spec : '16 GB RAM',
    color : 'Iceblue, Lilac, Navy, Lemon',
    img : 'images/samsung-galaxy-a55.jpg',
    location : 'https://www.gsmarena.com/samsung_galaxy_a55-12824.php'
},{
    mobileName : 'Oppo A3 Pro',
    brand : 'Oppo',
    price : 'Rs 38000',
    spec : '4 GB RAM',
    color : 'Moonlit Purple, Starry Black',
    img : 'images/oppo-a3-pro-india.jpg',
    location : 'https://www.gsmarena.com/oppo_a3_pro_(india)-13160.php'
},{
    mobileName : 'Xiaomi Redmi 13',
    brand : 'Xiaomi',
    price : 'Rs 48000',
    spec : '8 GB RAM',
    color : 'Black',
    img : 'images/xiaomi-redmi-13-.jpg',
    location : 'https://www.gsmarena.com/xiaomi_redmi_13_5g-13157.php'
},{
    mobileName : 'Oppo Reno12 Pro',
    brand : 'Oppo',
    price : 'Rs 53000',
    spec : '8 GB RAM',
    color : 'Space Brown, Sunset Gold',
    img : 'images/oppo-reno12-pro-cn.jpg',
    location : 'https://www.gsmarena.com/xiaomi_redmi_13_5g-13157.php'
},{
    mobileName : 'Samsung Galaxy A55',
    brand : 'Samsung',
    price : 'Rs 83000',
    spec : '16 GB RAM',
    color : 'Iceblue, Lilac, Navy, Lemon',
    img : 'images/samsung-galaxy-a55.jpg',
    location : 'https://www.gsmarena.com/samsung_galaxy_a55-12824.php'
},{
    mobileName : 'Oppo A3 Pro',
    brand : 'Oppo',
    price : 'Rs 38000',
    spec : '4 GB RAM',
    color : 'Moonlit Purple, Starry Black',
    img : 'images/oppo-a3-pro-india.jpg',
    location : 'https://www.gsmarena.com/oppo_a3_pro_(india)-13160.php'
},{
    mobileName : 'Xiaomi Redmi 13',
    brand : 'Xiaomi',
    price : 'Rs 48000',
    spec : '8 GB RAM',
    color : 'Black',
    img : 'images/xiaomi-redmi-13-.jpg',
    location : 'https://www.gsmarena.com/xiaomi_redmi_13_5g-13157.php'
},{
    mobileName : 'Oppo Reno12 Pro',
    brand : 'Oppo',
    price : 'Rs 53000',
    spec : '8 GB RAM',
    color : 'Space Brown, Sunset Gold',
    img : 'images/oppo-reno12-pro-cn.jpg',
    location : 'https://www.gsmarena.com/xiaomi_redmi_13_5g-13157.php'
},{
    mobileName : 'Samsung Galaxy A55',
    brand : 'Samsung',
    price : 'Rs 83000',
    spec : '16 GB RAM',
    color : 'Iceblue, Lilac, Navy, Lemon',
    img : 'images/samsung-galaxy-a55.jpg',
    location : 'https://www.gsmarena.com/samsung_galaxy_a55-12824.php'
}];

function mobileCollection() {
    let main = document.getElementById('main');
    for (let i = 0; i < mobiles.length; i++) {
        main.innerHTML += `<div class="card ms-3 mb-4 main2" style="width:18.6rem;">
    <img src="${mobiles[i].img}" class="card-img-top pana mt-3" alt="...">
    <div class="card-body d-flex flex-column">
    <h5 class="card-title text-center mb-3">${mobiles[i].mobileName}</h5>
    <p class="card-text ">Brand : ${mobiles[i].brand}</p>
    <p class="card-text ">Color : ${mobiles[i].color}</p>
    <p class="card-text ">Specs : ${mobiles[i].spec}</p>
    <p class="card-text ">Price : ${mobiles[i].price}</p>
    <a href="${mobiles[i].location}" target="_blank" class="btn mt-1 bg-primary-subtle">Check it out</a>
    </div>
    </div>`;
    }
}

mobileCollection();
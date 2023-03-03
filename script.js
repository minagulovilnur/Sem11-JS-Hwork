const products =  {
                "Cartoon1": {
                "img": "./img/product1.png", 
                "title": "ELLERY X M 'O CAPSULE", 
                "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": "52.00" },

                "Cartoon2": {
                "img": './img/product2.png', 
                "title": "ELLERY X M 'O CAPSULE", 
                "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": "52.00"},

                "Cartoon3": {
                "img": "./img/product3.png", 
                "title": "ELLERY X M 'O CAPSULE", 
                "descr": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": "52.00" },
    
                "Cartoon4": {
                "img": './img/product4.png', 
                "title": "ELLERY X M 'O CAPSULE", 
                "descr": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": "52.00"},
    
                "Cartoon5": {
                "img": "./img/product5.png", 
                "title": "ELLERY X M 'O CAPSULE", 
                "descr": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": "52.00" },
        
                "Cartoon6": {
                "img": './img/product6.png', 
                "title": "ELLERY X M 'O CAPSULE", 
                "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": "52.00"}
                }

document.body.onload = () => {    
    const FeaturedItems = document.querySelector('div.FeaturedItems');
    let array = new Array();
    for (let i in products) {
        array.push([i, products[i]]);
    }
    createCardProduct(array, FeaturedItems);
}

function createCardProduct(prod, FeaturedItems) {
    for (let i = 0; i < prod.length; i++) {
        containerCard = document.createElement('div');
        containerCard.classList.add('CardProduct');
        FeaturedItems.appendChild(containerCard);

            contImg = document.createElement('div');
            contImg.classList.add('Photo');
            containerCard.appendChild(contImg);
            
                photoProduct = document.createElement('img');
                photoProduct.src = prod[i][1].img;
                contImg.appendChild(photoProduct);
            
            containerDescription = document.createElement('div');
            containerDescription.classList.add('Description');
            containerCard.appendChild(containerDescription);

                titleProduct = document.createElement('div');
                titleProduct.classList.add('titleProduct');
                titleProduct.textContent = prod[i][1].title;
                containerDescription.appendChild(titleProduct);

                descProduct = document.createElement('span');
                descProduct.classList.add('descrProduct');
                descProduct.textContent = prod[i][1].description;
                containerDescription.appendChild(descProduct);

                priceProduct = document.createElement('div');
                priceProduct.classList.add('priceProduct');
                priceProduct.textContent = prod[i][1].price;
                containerDescription.appendChild(priceProduct);
}
    
}
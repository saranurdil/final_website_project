let blocks = [
    {
        id: 1,
        name: 'New A13 Processor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt nobis!',
        imgPath: 'cpu.png',
    },
    {
        id: 2,
        name: 'New Charging Port',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt nobis!',
        imgPath: 'charge.jpg',
    },
    {
        id: 3,
        name: '5G Supported',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt nobis!',
        imgPath: '5g.png',
    },
    {
        id: 4,
        name: 'Wide Display',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt nobis!',
        imgPath: 'display.png',
    },
    {
        id: 5,
        name: 'Camera System',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt nobis!',
        imgPath: 'camera.jpg',
    },
    {
        id: 6,
        name: 'Tough Glass',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt nobis!',
        imgPath: 'glass.png',
    },
   
];

class DOMmanager{

    createProductContainer(name, description, imgPath){
        let
            col = document.createElement('div'),
            productContainer = document.createElement('section'),
            infoContainer = document.createElement('div'),
            textContainer = document.createElement('div'),
            pictureBlock = document.createElement('img'),
            titleBlock = document.createElement('h3'),
            descriptionBlock = document.createElement('p'),
            moreButton = document.createElement('button');

        // product section
        col.className = 'col-md-3';
        productContainer.style.width = '350px';
        productContainer.style.height = '350px';
        productContainer.className = 'product-block p-3 my-5 text-center text-light';
        productContainer.style.position = 'relative';
        productContainer.style.borderRadius = '20px'

        // info section
        infoContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.600)';
        infoContainer.style.position = 'absolute';
        infoContainer.style.width = '350px';
        infoContainer.style.height = '350px';
        infoContainer.style.top = '16px';
        infoContainer.style.borderRadius = '20px';
        
        // product picture
        pictureBlock.src = `./img/${imgPath}`;
        pictureBlock.style.width = '350px';
        pictureBlock.style.height = '350px';
        pictureBlock.className = 'product-pic shadow';
        pictureBlock.style.borderRadius = '20px';

        // text section
        textContainer.style.marginTop = '130px';
        // product title
        titleBlock.innerText = name;

        // product description
        descriptionBlock.innerText = description;

        // product button
        moreButton.innerText = 'More >>';
        moreButton.className = 'btn-more btn btn-lg';

        // appendChild
        col.appendChild(productContainer);
        productContainer.appendChild(pictureBlock);
        productContainer.appendChild(infoContainer);

        infoContainer.appendChild(textContainer);

        textContainer.appendChild(titleBlock);
        textContainer.appendChild(descriptionBlock);
        textContainer.appendChild(moreButton);

        return productContainer;
    }
}
let manager = new DOMmanager();
let productsList = document.getElementById('products-list');
let productContainer = null;

document.addEventListener('DOMContentLoaded', () => {
    for(let block of blocks){
        productContainer = manager.createProductContainer(block.name, block.description, block.imgPath);
        productsList.appendChild(productContainer);
    }
})










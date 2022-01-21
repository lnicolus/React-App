 const products = [
    { id: '1', category: 'fruits by kg', name: "Apple", price: 25, pic:'https://www.burpee.com/media/catalog/product/f/8/f864249028574b4fbce956b57351a115fdcdf0d9b4c714c63147ef1b8d0e0d8e.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=427&width=320' },
    { id: '2', category: 'fruits by kg', name: "Grapes", price: 16, pic:'https://www.burpee.com/media/catalog/product/5/f/5fe24dc54e436ccf2a0b96fbef230f754e08799b411feac5cb3c143e95717a6e.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=427&width=320' },
    { id: '3', category: 'fruits by kg', name: "Strawberry", price: 21, pic:'https://www.burpee.com/media/catalog/product/1/5/15e6a1765785d12a0cc61a608654b5dd134a0cec4b976f4e8ef09e06ade21786.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=427&width=320' },
    { id: '4', category: 'fruits by kg', name: "Watermelon", price: 34, pic:'https://www.burpee.com/media/catalog/product/c/6/c66b829ea34ee65fcc3d353ba141b8e69327f968f0d1b4f79544ba12758adc1f.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=427&width=320' },
    { id: '5', category: 'vegetables by kg', name: "Carrot", price: 15, pic:'https://www.burpee.com/media/catalog/product/8/6/86f8ebdc85899533455be28ae60e288fc00070f13b930fede9c71a1d488f09d2.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=427&width=320' },
    { id: '6', category: 'vegetables by kg', name: "Tomato", price: 37, pic:'https://www.burpee.com/media/catalog/product/6/3/634a76098b555325e05d60dae6f9d49e6191a41c7b0f6bdbdad553a240a5571a.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=427&width=320' },
    { id: '7', category: 'vegetables by kg', name: "Pepper", price: 32, pic:'https://www.burpee.com/media/catalog/product/c/d/cdeece0f82398ca8472712632e288f077df9a2381eaa07f85be41eef2c4266f0.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=427&width=320' },
    { id: '7', category: 'vegetables by kg', name: "Lettuce", price: 22, pic:'https://www.burpee.com/media/catalog/product/2/6/2620d96434cc54691064adb6cc84e83e5442a8003a0786122c613abab5fb38af.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=427&width=320' },
];



 export const getFetch = new Promise( (res,rej)=> {
    //acciones
    let condition= true
    if (condition) {
        setTimeout(()=>{
            //Acciones que quiero que se resuelvan
            res(products)        
        }, 5000)
    }else{
        rej('404 not found')
    }
} )


const productos = [
    { id: '1', category: 'fruits', name: "apple", price: 25, pic:'./Assets/apple.webp' },
    { id: '2', category: 'fruits', name: "grapes", price: 16, pic:'./Assets/grapes.webp' },
    { id: '3', category: 'fruits', name: "strawberry", price: 21, pic:'./Assets/strawberry.webp' },
    { id: '4', category: 'fruits', name: "watermelon", price: 34, pic:'./Assets/watermelon.webp' },
    { id: '5', category: 'vegetables', name: "carrot", price: 15, pic:'./Assets/carrot.webp' },
    { id: '6', category: 'vegetables', name: "tomato", price: 37, pic:'./Assets/tomato.webp' },
    { id: '7', category: 'vegetables', name: "pepper", price: 32, pic:'./Assets/pepper.webp' },
    { id: '7', category: 'vegetables', name: "lettuce", price: 22, pic:'./Assets/lettuce.webp' },
];



export const getFetch = new Promise( (res,rej)=> {
    //acciones
    let condition= true
    if (condition) {
        setTimeout(()=>{
            //Acciones que quiero que se resuelvan
            res(productos)        
        }, 2000)
    }else{
        rej('404 not found')
    }
} )
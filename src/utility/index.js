// get all product form local storage
// const getAllCard=()=>{
//     const all= localStorage.getItem('card')
//    if(all){
//     const card= JSON.parse(all)
//     return card
//    }else{
//     return[]
//    }
// }

// const addCard= product =>{
//         const cards = getAllCard()
        
// if (Array.isArray(cards)) {
//     cards.push(product);
//     localStorage.setItem('card', JSON.stringify(cards));
// } else {
//     console.error("cards is not an array");
// }
// }
// add a product to local storage




// const addCard= product =>{
//     const cards = getAllCard()
//     cards.push(product)
//     localStorage.setItem('card',JSON.stringify(product))
// }



// remove a procudt from localstorage




import toast from "react-hot-toast";
const getAllCard = () => {
    const storedCards = localStorage.getItem('card');
    return storedCards ? JSON.parse(storedCards) : []; 
}


const addCard = (product) => {
    let cards = getAllCard(); 

    const isExist = cards.find(item=>item.product_id==product.product_id)
    if(isExist){
        return toast.error('This product is already exist in your card!');
    }


    if (!Array.isArray(cards)) {
        cards = [];
    }

    cards.push(product); 
    localStorage.setItem('card', JSON.stringify(cards)); 
    toast.success('Successfully added!');
}




const removeProduct=product_id=>{
    let cards = getAllCard();
    const remaing= cards.filter(product=>product.product_id !=product_id)
    localStorage.setItem('card', JSON.stringify(remaing)); 
    toast.success('Successfully deleted!');


}

export {addCard, getAllCard,removeProduct}

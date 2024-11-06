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



// getAllCard ফাংশন: localStorage থেকে ডাটা নিয়ে আসে
import toast from "react-hot-toast";
const getAllCard = () => {
    const storedCards = localStorage.getItem('card');
    return storedCards ? JSON.parse(storedCards) : []; // যদি ডাটা না থাকে, তাহলে খালি অ্যারে রিটার্ন করবে
}

// addCard ফাংশন: নতুন প্রোডাক্ট অ্যাড করা
const addCard = (product) => {
    let cards = getAllCard(); // getAllCard থেকে ডাটা আনা

    const isExist = cards.find(item=>item.product_id==product.product_id)
    if(isExist){
        return toast.error('This product is already exist in your card!');
    }

    // যদি cards অ্যারে না হলে, তাহলে খালি অ্যারে সেট করা
    if (!Array.isArray(cards)) {
        cards = [];
    }

    cards.push(product); // নতুন প্রোডাক্ট এড করা
    localStorage.setItem('card', JSON.stringify(cards)); // আপডেটেড অ্যারেটি localStorage-এ সেভ করা
    toast.success('Successfully added!');
}

export {addCard, getAllCard}

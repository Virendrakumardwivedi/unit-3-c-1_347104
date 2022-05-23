//append();
// let container=document.getElementById("all_products") 
     
function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let container=document.getElementById("all_products") 

    let trash=JSON.parse(localStorage.getItem("trash"))||[];
     
     data.forEach(function(el, index){

        let box=document.createElement("div")
        box.setAttribute("id", "box")

        let img=document.createElement("img")
        img.src=el.image;

        let t = document.createElement("h2")
         t.innerText=el.type;

        let desc = document.createElement("h3")
        desc.innerText=el.desc;

        let price =document.createElement("p")
        price.innerText=el.price;


        let btn=document.createElement("button")
        btn.setAttribute("id","remove")
        btn.innerText="REMOVE"
        btn.addEventListener("click",function(){
            //remove(index);
            data.splice(index,1);
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash))
            localStorage.setItem("products",JSON.stringify(data))
            window.location.reload();
        });
        
        box.append(img, desc, t,price,btn)
        container.append(box)
     });
     

}
append();
    
// function remove(index){
//     let data=JSON.parse(localStorage.getItem("products"))||[];

//     let Ndata=data.filter(function(el,i){
//         if(i==index){
//             let trash = JSON.parse(localStorage.getItem("trash"))||[];
//             trash.push(el)
//             localStorage.setItem("trash",JSON.stringify(trash));

//         }
//         else{
//             return i!==index
//         }
//     })
//     localStorage.setItem("products",JSON.stringify(Ndata))
//     append();
// }
//store the products array in localstorage as "products"

function Nprodata(t, d, p, i){
this.type=t;
this.desc=d;
this.price=p;
this.image=i;
}


function prodata(e){
    e.preventDefault();

    let from = document.getElementById("products");

    let type = from.type.value;
    let desc = from.desc.value;
    let price = from.price.value;
    let image = from.img.value;

    //console.log(type, desc, price, image)

    let p1=new Nprodata(type,desc,price,image)

    let data=JSON.parse(localStorage.getItem("products"))||[];

    data.push(p1)
    localStorage.setItem("products",JSON.stringify(data))

}

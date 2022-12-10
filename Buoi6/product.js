const arryListProduct = [
    {
        cate : "thịt",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJWthrm7CMIGgtMjlZRO-i7iJVqGkOWJbag&usqp=CAU",
        name : "blah blah"
    },
    {
        cate : "thịt",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJWthrm7CMIGgtMjlZRO-i7iJVqGkOWJbag&usqp=CAU",
        name : "thị"
    },
    {
        cate : "thịt",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJWthrm7CMIGgtMjlZRO-i7iJVqGkOWJbag&usqp=CAU",
        name : "thịt"
    },
    {
        cate : "cá",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJWthrm7CMIGgtMjlZRO-i7iJVqGkOWJbag&usqp=CAU",
        name : "cá"
    },
    {
        cate : "cá",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJWthrm7CMIGgtMjlZRO-i7iJVqGkOWJbag&usqp=CAU",
        name : "cá"
    }
];

function showProduct(data) {
    let main = document.querySelector(".main-conten")
    if(main) {
        for (let item of data) {
            main.innerHTML += `
    <a href="chitiet.html">
        <div class="item">
            <div class="img">
                <img src="${item.img}" alt="">
            </div>
            <div class="name">
                <p>${item.name}</p>
            </div>
        </div>
    </a>
            `;
    }
}
}
showProduct(arryListProduct)
function fitleProduct() {
    let cate = document.querySelector("#cate").Value;
    let meat = arryListProduct.filter(function(item) {
        return item.cate == "thịt";
    });
    let fiz = arryListProduct.filter(function(item) {
        return item.cate == "cá";
    });
    if(cate.value == "thịt") {showProduct(meat)}
    else showProduct(fiz)
}
cate.addEventListener("change", fitleProduct)
    //let arryNew = arryListProduct.filter(function(item) {
      //  return true;
    //});
    //console.log(arryNew)

function detailProduct () {
    let _url = new URLSearchParams(window.Location.search).get('id');
    let _product = arryListProduct.filter(function(item) {
        return item.id == _url;
    });
    let productMain = document.querySelector(".product-main");
    if(productMain) {
        productMain.innerHTML = `
        <img src="${_product[0].name}" alt="">
        <p>${_product[0].img}</p>
        <p>${_product[0].price}</p>

    `;
}
}
detailProduct ();


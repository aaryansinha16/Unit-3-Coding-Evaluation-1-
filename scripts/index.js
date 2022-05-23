//store the products array in localstorage as "products"

document.querySelector("#add_product").addEventListener("click", formFun)

let productPage = document.querySelector("#show_products").addEventListener("click", linkFun)

function linkFun(){
    window.location.href = "inventory.html"
}

let productArr = JSON.parse(localStorage.getItem("products")) || []
function formFun(event){
    event.preventDefault()
    let type = products.type.value
    
    function data(){
        this.type = products.type.value
        this.desc = products.desc.value
        this.price = products.price.value
        this.image = products.image.value
    }

    let obj = new data()
    // console.log(obj)=

    productArr.push(obj)
    localStorage.setItem("products", JSON.stringify(productArr))
    window.location.reload()
}
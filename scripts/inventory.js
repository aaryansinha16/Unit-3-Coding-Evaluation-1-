let buttonLink = document.querySelector("#add_more_product").addEventListener("click", indexLink)

function indexLink(){
    window.location.href = "index.html"
}

var productData = JSON.parse(localStorage.getItem("products"))

displayData(productData)

function displayData(data){
    data.forEach(function(elem,index){
        console.log(elem)
        let box = document.createElement("div")

        let img = document.createElement("img")
        img.setAttribute("src" , elem.image)
        img.setAttribute("class", "prodImg")

        let type = document.createElement("h3")
        type.innerText = elem.type 
        type.setAttribute("class", "type")

        let desc = document.createElement("p")
        desc.innerText = elem.desc
        desc.setAttribute("class", "description")

        let price = document.createElement("p")
        price.innerText = elem.price
        price.setAttribute("class", "price")

        let remove = document.createElement("button")
        remove.innerText = "Remove"
        remove.setAttribute("id", "remove_product")
        remove.addEventListener("click", function(){
            removeFun(elem, index)
        })

        box.append(img,type,desc,price,remove)
        document.querySelector("#all_products").append(box)
    })
}

function removeFun(elem, index){
    console.log(elem)
    productData.splice(index,1)
    console.log(productData)
    localStorage.setItem("products", JSON.stringify(productData))
    window.location.reload()
}
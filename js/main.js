function Product(title, catch_phrase, discription){// conestracter for recovering the product
    this.title = title,
    this.catch_phrase = catch_phrase,
    this.discription = discription
}

Product.prototype.writeProduct = function(){

    let firstProduct = document.getElementById("first_product");
    //create div in order to display new carts every time 
    let createDiv = document.createElement("div");
    firstProduct.appendChild(createDiv);

    let createTitle = document.createElement("p");
    createTitle.innerHTML = this.title;
    createDiv.appendChild(createTitle);

    let createDesc = document.createElement("p");
    createDesc.innerHTML = this.discription;
    createDiv.appendChild(createDesc);

    let createCatch = document.createElement("p");
    createCatch.innerHTML = this.catch_phrase;
    createDiv.appendChild(createCatch);
        //style for new carts
        createDiv.style.borderStyle= "solid #F8F7FF";
        createDiv.style.background = "#F8F8FF";
        createDiv.style.marginTop = "20px";
        
     
}

function products() {//function for recovering the form
    var title1 = document.getElementById("product").value;
    var catch_phrase1 = document.getElementById("phrase").value;
    var discription1 = document.getElementById("discription").value;

    var object = new Product(title1, catch_phrase1, discription1);
    
    document.getElementById("product").value = "";
    document.getElementById("phrase").value = "";
    document.getElementById("discription").value = "";

    object.writeProduct();

}


function Product(title, catch_phrase, discription){
    this.title = title,
    this.catch_phrase = catch_phrase,
    this.discription = discription
}

Product.prototype.writeProduct = function(){
    // alert(this.title + this.catch_phrase + this.discription);
    document.getElementById("cart1").innerHTML += this.title + "<br>";
    document.getElementById("cart2").innerHTML += this.catch_phrase + "<br>";
    document.getElementById("cart3").innerHTML += this.discription;

}

function products() {

    var title1 = document.getElementById("product").value;
    var catch_phrase1 = document.getElementById("phrase").value;
    var discription1 = document.getElementById("discription").value;

    var object = new Product(title1, catch_phrase1, discription1);
    object.writeProduct();


    // let Produit = {
    //     title: document.getElementById("product"),
    //     catch_phrase: document.getElementById("phrase"),
    //     discription: document.getElementById("discription")
    // }
}
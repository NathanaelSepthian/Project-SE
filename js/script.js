



/*alert box*/
var alertBox = document.getElementById("alertBox");
alertBox.style.display = "block"; 
setTimeout(function() {
  alertBox.style.display = "none";
}, 7000);
/* end alert box*/




let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}





//font size//
const fontSizeSelector = document.querySelector('#font-size-selector');

        fontSizeSelector.addEventListener('change', (event) => {
            const textElements = document.querySelectorAll('h2, p, span, a, button');
            textElements.forEach((element) => {
                element.style.fontSize = event.target.value;
            });

            localStorage.setItem('fontSize', event.target.value);
        });



        window.onload = () => {
            const fontSize = localStorage.getItem('fontSize');
            if (fontSize) {
                const textElements = document.querySelectorAll('h1, p, span, a');
                textElements.forEach((element) => {
                    element.style.fontSize = fontSize;
                });
            }
        }
        
   








  



















//profile page//

function updateProfile() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var country = document.getElementById("country").value;
  var cardNumber = document.getElementById("card-number").value;
  var cvv = document.getElementById("cvv").value;
  var nameOnCard = document.getElementById("name-on-card").value;

  localStorage.setItem("fullname", fullname);
  localStorage.setItem("email", email);
  localStorage.setItem("address", address);
  localStorage.setItem("country", country);
  localStorage.setItem("cardNumber", cardNumber);
  localStorage.setItem("cvv", cvv);
  localStorage.setItem("nameOnCard", nameOnCard);

  document.getElementById("fullname").value = fullname;
  document.getElementById("email").value = email;
  document.getElementById("address").value = address;
  document.getElementById("country").value = country;
  document.getElementById("card-number").value = cardNumber;
  document.getElementById("cvv").value = cvv;
  document.getElementById("name-on-card").value = nameOnCard;
}

if (localStorage.getItem("fullname")) {
  document.getElementById("fullname").value = localStorage.getItem("fullname");
}
if (localStorage.getItem("email")) {
  document.getElementById("email").value = localStorage.getItem("email");
}
if (localStorage.getItem("address")) {
  document.getElementById("address").value = localStorage.getItem("address");
}
if (localStorage.getItem("country")) {
  document.getElementById("country").value = localStorage.getItem("country");
}
if (localStorage.getItem("cardNumber")) {
  document.getElementById("card-number").value = localStorage.getItem("cardNumber");
}
if (localStorage.getItem("cvv")) {
  document.getElementById("cvv").value = localStorage.getItem("cvv");
}
if (localStorage.getItem("nameOnCard")) {
  document.getElementById("name-on-card").value = localStorage.getItem("nameOnCard");
}












document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});



















////cart///

let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")//cart
let closeCart = document.querySelector("#cart-close")


//open cart//
cartIcon.onclick = () => {
    cart.classList.add("active")
};

//close cart//
closeCart.onclick = () => {
    cart.classList.remove("active")
};
// cart working

if(document.readyState == "loading"){
   document.addEventListener("DOMContentLoaded", ready);
 }else{
     ready();
 }
// cart working

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

//making function
function ready(){
//remove Items from cart

var removeCartButtons = document.getElementsByClassName("cart-remove");
console.log(removeCartButtons);
for(var i=0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);

 }

 //Quantity changes//
 var quantityInputs = document.getElementsByClassName("cart-quantity");
 for (var i=0; i < quantityInputs.length; i++){
  var input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
 }

 //add to cart
 var addCart =document.getElementsByClassName("add-cart");
 for (var i = 0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);

  }
//  buy Button Work//
 document
     .getElementsByClassName("btn-buy")[0]
     .addEventListener("click", buyButtonClicked);

}





//buy button//
function buyButtonClicked(){
    alert("Your order is placed, thank you");
    var cartContent = document.getElementsByClassName("cart-content")[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}


//remove items from cart//
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();

}
// quantity changes

function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;

    }
    updatetotal();
}


// add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("sub-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var ProductImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, ProductImg);
    updatetotal();
    
}
function addProductToCart(title, price, ProductImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
		if (cartItemsNames[i].innerHTML == title){
        alert("you have already add this cart");
        return;
    }
}
var cartBoxContent = `
                  <img src=" ${ProductImg}" alt="" class="cart-img">
				  <div class="detail-box">
						<div class="cart-product-title">${title}</div>
						<div class="cart-price">${price}</div>
						<input type="number" value="1" class="cart-quantity">
				  </div>
				  <!--remove cart-->
				  <i class='bx bx-trash cart-remove'></i>
                  <select>
                <option>Select UK size</option>
                <option>8</option>
                <option>8.5</option>
                <option>9.5</option>
                <option>10</option>
                <option>11</option>
            </select>`;

        
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);

cartShopBox
  .getElementsByClassName('cart-remove')[0]
  .addEventListener('click', removeCartItem);

cartShopBox
  .getElementsByClassName('cart-quantity')[0]
  .addEventListener('change', quantityChanged);

	}


//update total//
function updatetotal(){
    var cartcontent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartcontent.getElementsByClassName("cart-box");
    var total = 0;

    for(var i=0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }

        total = Math.round(total * 100 )/ 100;


        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    
}


/*toggle menu */
const toggleButton = document.querySelector('#menuToggle');
 const menuItems = document.querySelector('ul#MenuItems');

 toggleButton.addEventListener('click', () => {
   menuItems.classList.toggle('show');
 });

/*end toggle menu*/




// register % login page//
const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });




         $(function() {

          $("#fname_error_message").hide();
          $("#sname_error_message").hide();
          $("#email_error_message").hide();
          $("#password_error_message").hide();
          $("#retype_password_error_message").hide();
    
          var error_fname = false;
          var error_sname = false;
          var error_email = false;
          var error_password = false;
          var error_retype_password = false;
    
          $("#form_fname").focusout(function(){
             check_fname();
          });
          $("#form_sname").focusout(function() {
             check_sname();
          });
          $("#form_email").focusout(function() {
             check_email();
          });
          $("#form_password").focusout(function() {
             check_password();
          });
          $("#form_retype_password").focusout(function() {
             check_retype_password();
          });
    
          function check_fname() {
             var pattern = /^[a-zA-Z]*$/;
             var fname = $("#form_fname").val();
             if (pattern.test(fname) && fname !== '') {
                $("#fname_error_message").hide();
                $("#form_fname").css("border-bottom","2px solid #34F458");
             } else {
                $("#fname_error_message").html("Should contain only Characters");
                $("#fname_error_message").show();
                $("#form_fname").css("border-bottom","2px solid #F90A0A");
                error_fname = true;
             }
          }
    
          function check_sname() {
             var pattern = /^[a-zA-Z]*$/;
             var sname = $("#form_sname").val()
             if (pattern.test(sname) && sname !== '') {
                $("#sname_error_message").hide();
                $("#form_sname").css("border-bottom","2px solid #34F458");
             } else {
                $("#sname_error_message").html("Should contain only Characters");
                $("#sname_error_message").show();
                $("#form_sname").css("border-bottom","2px solid #F90A0A");
                error_fname = true;
             }
          }
    
          function check_password() {
             var password_length = $("#form_password").val().length;
             if (password_length < 8) {
                $("#password_error_message").html("Atleast 8 Characters");
                $("#password_error_message").show();
                $("#form_password").css("border-bottom","2px solid #F90A0A");
                error_password = true;
             } else {
                $("#password_error_message").hide();
                $("#form_password").css("border-bottom","2px solid #34F458");
             }
          }
    
          function check_retype_password() {
             var password = $("#form_password").val();
             var retype_password = $("#form_retype_password").val();
             if (password !== retype_password) {
                $("#retype_password_error_message").html("Passwords Did not Matched");
                $("#retype_password_error_message").show();
                $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
                error_retype_password = true;
             } else {
                $("#retype_password_error_message").hide();
                $("#form_retype_password").css("border-bottom","2px solid #34F458");
             }
          }
    
          function check_email() {
             var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
             var email = $("#form_email").val();
             if (pattern.test(email) && email !== '') {
                $("#email_error_message").hide();
                $("#form_email").css("border-bottom","2px solid #34F458");
             } else {
                $("#email_error_message").html("Invalid Email");
                $("#email_error_message").show();
                $("#form_email").css("border-bottom","2px solid #F90A0A");
                error_email = true;
             }
          }
    
          $("#registration_form").submit(function() {
             error_fname = false;
             error_sname = false;
             error_email = false;
             error_password = false;
             error_retype_password = false;
    
             check_fname();
             check_sname();
             check_email();
             check_password();
             check_retype_password();
    
             if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
                alert("Registration Successfull");
                return true;
             } else {
                alert("Please Fill the form Correctly");
                return false;
             }
    
    
          });
       });

var email = document.getElementById('form_email').val();
var fname = document.getElementById('form_fname').value();
var password = document.getElementById('form_password').value();


// Store the user details in the local storage
localStorage.setItem('form_password',password );
localStorage.setItem('form_fname', fname);
localStorage.setItem('form_email',email);

document.getElementById('form_fname').value = userName;

// end register//



// //enquiry//

   function enquiry() {
  alert("Enquiry sent ")
}
//end enquiry//



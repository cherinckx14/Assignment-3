/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Christian Herinckx
 * Email: herincch@oregonstate.edu
 */

function add_blog_post(photoURL, item, price, city, condition){
  var newPost = document.createElement('section');
  
  var postDiv = document.createElement('div');
  postDiv.classList.add("post");
  postDiv.setAttribute("data-price", price);
  postDiv.setAttribute("data-city", city);
  postDiv.setAttribute("data-condition", condition);
  newPost.appendChild(postDiv);
  
  var postContentsDiv = document.createElement('div');
  postContentsDiv.classList.add("post-contents");
  postDiv.appendChild(postContentsDiv);
  
  var postImgDiv = document.createElement('div');
  postImgDiv.classList.add("post-image-container");
  postContentsDiv.appendChild(postImgDiv);
  
  var postImg = document.createElement('img');
  postImg.src = photoURL;
  postImg.alt = item;
  postImgDiv.appendChild(postImgDiv);
  
  var postInfoDiv = document.createElement('div');
  postInfoDiv.classList.add("post-info-container");
  postContentsDiv.appendChild(postInfoDiv);
  
  var postInfoA = document.createElement('a');
  postInfoA.textContent = item;
  postInfoA.href = "#";
  postInfoA.classList.add("post-title");
  postInfoDiv.appendChild(postInfoA);
  
  var postInfoPrice = document.createElement("SPAN");
  postInfoPrice.textContent = price;
  postInfoPrice.classList.add("post-price");
  postInfoDiv.appendChild(postInfoPrice);
  
  var postInfoCity = document.createElement("SPAN");
  postInfoCity.textContent = city;
  postInfoCity.classList.add("post-city");
  postInfoDiv.appendChild(postInfoCity);
  
}

function modalButtonClick() {
  var backdrop = document.getElementByID('modal-backdrop');
  backdrop.classList.remove("hidden");
  
  var sell_something = document.getElementByID('sell-something-modal');
  sell_something.classList.remove("hidden");
}

var buttons = document.getElementsByClassName('fas fa-plus');
buttons.addEventListener('click', modalButtonClick);

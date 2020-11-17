/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Christian Herinckx
 * Email: herincch@oregonstate.edu
 */

/*This function is used to add a blog post*/
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

/*Button click to open/exit modal*/
var sell_Button = document.getElementById('sell-something-button');

/*Opens up the modal and modal backdrop*/
sell_Button.addEventListener('click', function () {
  console.log("== the sell button was clicked")
  var backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.remove("hidden");
  
  var sell_something = document.getElementById('sell-something-modal');
  sell_something.classList.remove("hidden");
});

/*Resets the text in the modal when closed*/
function resetModalText(condition){
  fieldset = document.getElementById('post-condition-fieldset');
  conditionsInputted = fieldset.querySelectorAll("input");
  conditionsInputted[0].checked = true;
  for (var i = 1; i < conditionsInputted.length; ++i){
    conditionsInputted[i].checked = false;
  }
}

/*Closes the modal*/
var cancel_Modal = document.getElementById('modal-cancel');
cancel_Modal.addEventListener('click', function () {
  var backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.add("hidden");
  
  var sell_something = document.getElementById('sell-something-modal');
  sell_something.classList.add("hidden");
  
  console.log("== the exit button was clicked")
  
  
});

/*Closes the modal*/
var exit_Modal = document.getElementById('modal-close');
exit_Modal.addEventListener('click', function () {
  var backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.add("hidden");
  
  var sell_something = document.getElementById('sell-something-modal');
  sell_something.classList.add("hidden");
  
  console.log("== the exit button was clicked")
});


/* Input for the modal to turn into a post*/
function handleWordsEntered(event) {
  var text = event.currentTarget.value;
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_'{|}~]/g, '')
    .toLowerCase().split('')
  currentWord = 0
}

function getUserInputs() {
  var item = document.getElementById('post-text-input').value;

  var photoURL = document.getElementById('post-photo-input').value;

  var price = document.getElementById('post-price-input').value;

  var city = document.getElementById('post-city-input').value;

  var condition = document.getElementById('post-condition-fieldset').value;

  
  add_blog_post(photoURL, item, price, city, condition);
}

/* Button to add the post to the site*/
var postEntry = document.getElementById('modal-accept');
postEntry.addEventListener('click', function () {
  console.log("== the create post button was clicked")
  var backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.add("hidden");
  
  var sell_something = document.getElementById('sell-something-modal');
  sell_something.classList.add("hidden");
  getUserInputs();
});


/* Filtering*/
var filter_Button = document.getElementById('filter-update-button');
filter_Button.addEventListener('click', function () {
  console.log("== the filter button was clicked")
  var text = document.getElementById('filter-text');
  var min_price = document.getElementById('filter-min-price');
  var max_price = document.getElementById('filter-max-price');
  var city = document.getElementById('filter-city');
  var condition = document.getElementById('filter-condition');
  
  text.getElementsByTagName("input");
  min_price.getElementsByTagName("input");
  max_price.getElementsByTagName("input");
  city.getElementsByTagName("input");
  condition.getElementsByTagName("input");                          
  
  var posts = document.getElementById('posts');
 
  for (var i = posts.length - 1; i >= 0; --i){
    var validInput = true;
    if (posts[i].getAttribute('data-price') < min_price && min_price != ''){
      validInput = false;
    }
    else if (posts[i].getAttribute('data-price') > max_price && max_price != ''){
        validInput = false;
    }
    else if (posts[i].getAttribute('post-title') != city || city != ''){
        validInput = false;
    }
    else if (posts[i].getAttribute('text').toLowerCase().indexOf(text).toLowerCase() == -1 && text != ''){
        validInput = false;
    }
    if (conditions.length != 0){
      var validInput2 = true;
      for (var j = conditions.length - 1; j >= 0; --j){
        if (posts[i].getAttributes('data-condition') === conditions[j]){
          validInput2 = false;
        }
      }
      if (validInput2 == true){
        validInput = false;
      }
    }
    if (validInput == true){
      posts[i].remove();
    }
  }
});

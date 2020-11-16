/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Christian Herinckx
 * Email: herincch@oregonstate.edu
 */

function add_blog_post(photoURL, caption){
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
  postImgDiv.src = photoURL;
  postImgDiv.alt = item;
  postContentsDiv.appendChild(postImgDiv);
  
  var postInfoDiv = document.createElement('div');
  postInfoDiv.classList.add("post-info-container");
  postInfoDiv.textContent = caption
  postContentsDiv.appendChild(postInfoDiv);
  
  
  photoCardSection.classList.add("photo-card");
  photoCardSection.classList.add("another-class");
  photoCardSection.classList.add("another-class");
  
  var imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add("img-container");
  photoCardSection.appendChild(imgContainerDiv);
  
  
}

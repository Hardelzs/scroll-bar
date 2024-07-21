const scrollButtonEl = document.querySelector(".top-button");
const rootEl = document.documentElement;

document.addEventListener("scroll", showButton);
scrollButtonEl.addEventListener("click", scrollTop);

function showButton() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;

  if (rootEl.scrollTop / scrollTotal > 0.1) {
    scrollButtonEl.classList.remove("hide");
  } else {
    scrollButtonEl.classList.add("hide");
  }
}

function scrollTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}




window.onscroll = function() {myFunction() };

function myFunction(){
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + '%'
}





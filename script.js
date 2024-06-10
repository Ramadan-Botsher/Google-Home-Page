let searchInput = document.querySelector('#search-input');
let searchBtn = document.querySelector('.google-search-btn');
// searchInput.addEventListener('keydown',function(event){
//   if (event.code === 'Enter' || searchBtn.onclick ){
//     search();
//   }
// });
function search(){
  let input= searchInput.value;
  let url = 'https://www.google.com/search?q=' + input;
  window.open(url);
}
searchBtn.addEventListener("click", search);


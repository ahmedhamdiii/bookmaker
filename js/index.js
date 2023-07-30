var nameInput =document.getElementById('name');
var urlInput =document.getElementById('url');
var addBtn =document.getElementById('addBtn');
var tBody =document.getElementById('tBody');
var bookMarks;
if(localStorage.getItem('books')==null){
  bookMarks=[];
}else{
bookMarks = JSON.parse (localStorage.getItem('books')) 
displayBook(bookMarks)
}
addBtn.addEventListener('click',function(){
    if (
        nameInput.classList.contains("is-valid") &&
        urlInput.classList.contains("is-valid")
      ) 
{var bookMark={
name : nameInput.value,
url  : urlInput.value
}
bookMarks.push(bookMark)
localStorage.setItem('books', JSON.stringify(bookMarks))
}else {
alert('there is wrong');
}
displayBook(bookMarks)
clearData()
}
)
function displayBook(list){
var cartona = ``;
for(var i=0;i<bookMarks.length;i++){
    cartona+=`
    <tr>
    <td>${i+1}</td>
    <td>
    ${bookMarks[i].name}
    </td>
    <td><a href="${bookMarks[i].url}"target="_blank"><button class="btn btn-warning">Visit</button></a></td>
    <td><button class="btn btn-danger" onclick="deleteMark(${i})">Delete</button></td>
    </tr>
    `
    if(nameInput==bookMarks.name){
    alert('change')
    }
}
tBody.innerHTML=cartona
}
function clearData(){
nameInput.value='';
urlInput.value='';
}
function deleteMark(index){
bookMarks.splice(index,1);
localStorage.setItem('books', JSON.stringify(bookMarks))

displayBook()
}
var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
nameInput.addEventListener("input", function () {
  validate(nameInput, nameRegex);
});
urlInput.addEventListener("input", function () {
  validate(urlInput, urlRegex);
});
function validate(element, regex) {
  var testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}

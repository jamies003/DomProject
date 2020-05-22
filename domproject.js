let list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', function(e){
  if (e.target.className == 'delete') {
    let li = e.target.parentElement;
    list.removeChild(li);
    // li.parentNode.removeChild(li);
  }
});

// add book-list
let addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  let value = addForm.querySelector('input[type = "text"]').value;
  // console.log(value);

  // create element
  let li = document.createElement('li');
  let bookName = document.createElement('span');
  let deleteBtn = document.createElement('span');

  // add content 
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);



});



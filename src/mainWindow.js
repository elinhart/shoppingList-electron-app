const electron = require('electron');
const {ipcRenderer} = electron;
const ul = document.querySelector('ul');

//add item
ipcRenderer.on('item:add', function(e, item){
  const li = document.createElement('li');
  const itemText = document.createTextNode(item);
  li.appendChild(itemText);
  ul.appendChild(li);
});

//clear items
ipcRenderer.on('item:clear', function(){
  ul.innerHTML = '';
});

//remove item by double click
ul.addEventListener('dblclick', removeItem);

    function removeItem(e){
      event.target.remove();
    }
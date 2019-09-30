const electron = require('electron');
const {ipcRenderer} = electron;
const ul = document.querySelector('ul');

//add item
ipcRenderer.on('item:add', function(e, item){
  ul.className = 'collection';
  const li = document.createElement('li');
  li.className = 'collection-item';
  const itemText = document.createTextNode(item);
  li.appendChild(itemText);
  ul.appendChild(li);
});

//clear items
ipcRenderer.on('item:clear', function(){
  ul.innerHTML = '';
  ul.className = '';
});

//remove item by double click
ul.addEventListener('dblclick', removeItem);

    function removeItem(e){
      event.target.remove();
      if(ul.children.length == 0) {
        ul.className = '';
      }
    
    }
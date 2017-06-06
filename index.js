const thingForm = document.querySelector('form#thingForm');

function renderListItem(fieldName) {
  const li = document.createElement('li');
  li.innerHTML = `${fieldName}`;
  return li;
}

function renderList(thing) {
  const list = document.createElement('ul');
  Object.keys(thing).map(function(fieldName) {
    const li = renderListItem(thing[fieldName]);
    list.appendChild(li);
  });
  return list;
}

// TODO
// Add a promote button to every list item that changes the apperance of that
// item when clicked.
function changeItemBackgroundColor(ev) {
  ev.preventDefault();
  console.log("Background changed");
}

// TODO
// Add a delete button to every list item that removes the name from the list when clicked.

function handleSubmit(ev) {
  ev.preventDefault();
  const f = ev.target;
  const details = document.querySelector('#details');
  const thing = {
    Name: f.thing.value,
  };
  // This will add the ul to the top.
  details.insertBefore(renderList(thing), details.firstChild);
  thingForm.reset(); // clears input field for more entries
}

thingForm.addEventListener('submit', handleSubmit);
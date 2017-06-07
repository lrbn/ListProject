const thingForm = document.querySelector('form#thingForm');

function renderListItem (fieldName) {
  const li = document.createElement('li');
  li.innerHTML = `${fieldName}`;;
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

function handleSubmit(ev) {
  ev.preventDefault();
  const f = ev.target;
  const details = document.querySelector('#details');
  const thing = {
    Name: f.thing.value,
  };
  if (f.thing.value !== "") { // prevent empty entries
    details.insertBefore(renderList(thing), details.firstChild);
  } else {
    alert("Please enter a thing.");
  }
  thingForm.reset();
}

thingForm.addEventListener('submit', handleSubmit);
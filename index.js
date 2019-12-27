// Can this be refactored to reference another function?

function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

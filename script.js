let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function() {
  h1.textContent = this.value;
});
document.querySelector('#color').addEventListener('input', function() {
  h1.style.color = this.value;
});
document.querySelector('#bg-color').addEventListener('input', function() {
  h1.style.backgroundColor = this.value;
});
document.querySelector('#font-family').addEventListener('input', function() {
  h1.style.fontFamily = this.value;
});
document.querySelector('#font-size').addEventListener('input', function() {
  h1.style.fontSize = this.value + 'px';
  this.nextSibling.textContent = h1.style.fontSize;
});
document.querySelector('#bold').addEventListener('input', function() {
  if (this.checked) {
    h1.style.fontWeight = 'bold';
  }
  else {
    h1.style.fontWeight = 'normal';
  }
});
document.querySelector('#italic').addEventListener('input', function() {
  h1.style.fontStyle = this.checked ? 'italic' : 'normal';
});
document.querySelector('#underline').addEventListener('input', function() {
  h1.style.textDecoration = this.checked ? 'underline' : 'none';
});
document.getElementsByName('border').forEach(function(input) {
  input.addEventListener('input', function() {
    h1.style.border = `1px ${this.value} black`;
  });
});
document.querySelector('#url').addEventListener('input', function() {
  h1.innerHTML = this.value ? `<a href="${this.value}">${h1.textContent}</a>` : h1.textContent;
});
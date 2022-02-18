let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function () {
   h1.textContent = this.value;
});

document.querySelector('#color').addEventListener('input', function() {
   h1.style.color = this.value
});
document.querySelector('#bg-color').addEventListener('input', function() {
   h1.style.backgroundColor = this.value;
});

document.querySelector('#font-family').addEventListener('input', function () {
   h1.style.fontFamily = this.value;
});

document.querySelector('#font-size').addEventListener('input', function () {
   h1.style.fontSize = this.value + 'px';
   this.nextSibling.textContent = h1.style.fontSize;
});



document.getElementsByName('border').forEach(function (input) {
   input.addEventListener('input', function() {
      h1.style.border = `1px ${this.value} black`;
   })
})

let example1 = document.querySelector('#example1');
example1.addEventListener('click', function(event) {
   window.location.href = "https://google.com";

});
let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function () {
   h1.textContent = this.value;
});


document.querySelector('#color').addEventListener('input', function() {
   h1.style.color = this.value
});
document.querySelector('#').addEventListener('input', function() {
   
});
document.querySelector('#font-family').addEventListener('input', function () {
   h1.style.fontFamily = ("verdana")
});
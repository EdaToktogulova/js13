let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function () {
   h1.textContent = this.valie;
});
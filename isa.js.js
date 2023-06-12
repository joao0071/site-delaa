const btn = document.querySelector(".no");
let position = 0;

const moveButton = () => {
position = position ? 0 : 150;
btn.style.transform = `translate(${position}px, 0px)`;
btn.style.transition = "all 0.2s ease";
};

btn.addEventListener("click", moveButton);
btn.addEventListener("mouseover", moveButton);


const sim = document.getElementById('yes');

sim.addEventListener("click", () => {

let timerInterval
Swal.fire({
 title: '😍',
 html: 'Você é tudo pra mim, tudo que eu preciso para ser a pessoa mais feliz do mundo! 💘',
 timerProgressBar: true,
 didOpen: () => {
Swal.showLoading()
const b = Swal.getHtmlContainer().querySelector('b')
timerInterval = setInterval(() => {
  b.textContent = Swal.getTimerLeft()
}, 100)
},
willClose: () => {
 clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
 if (result.dismiss === Swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})

});
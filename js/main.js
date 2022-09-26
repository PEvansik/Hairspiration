let hamburger = document.querySelector('.hamburger')
let topHam = document.querySelector('.top')
let middleHam = document.querySelector('.middle')
let bottomHam = document.querySelector('.bottom')

let navigation = document.querySelector('.navigation')
let navList = document.getElementById('nav-list').children

hamburger.addEventListener('click', () => {
    topHam.classList.toggle('active')
    middleHam.classList.toggle('active')
    bottomHam.classList.toggle('active')
    navigation.classList.toggle('show')
})

// navList.forEach((el) => {
//     el.addEventListener('click', () => {
//         navigation.classList.remove('show')
//     })
// })


//Hero Background
let heroImages = []

// var docWidth = document.documentElement.offsetWidth;

// console.log(docWidth);

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );
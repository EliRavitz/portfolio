const openingElement = Array.from(
  document.getElementsByClassName('element-move')
)
const mainNav = document.querySelector('.main_nav')
const lastMainNav = document.querySelector('.last-main-nav')

const displaySmallWindow = document.querySelectorAll('.display-small-window')
const hamburger = document.querySelector('.hamburger')
const mainAbout = document.querySelector('.main_about')
const skillsList = Array.from(document.getElementsByClassName('skills_1'))
const mainProjects = document.querySelector('.main_projects')
const biggestCards = document.querySelectorAll('.Biggest_card')
const biggestCardButton = document.querySelectorAll('.Biggest_card_button')
const biggestCard1 = document.querySelector('.Biggest_card1')
const biggestCard2 = document.querySelector('.Biggest_card2')
const biggestCard3 = document.querySelector('.Biggest_card3')
const biggestCard4 = document.querySelector('.Biggest_card4')

// ////////////////////////////////////
const windowWidth = window.innerWidth

const openingHandler = () => {
  const tempArray = openingElement.splice(5, 1)
  const newOpeningElement =
    windowWidth > 500
      ? openingElement.concat(tempArray)
      : openingElement.concat(tempArray).slice(4)

  newOpeningElement.forEach((element, i) => {
    if (i !== newOpeningElement.length - 1) {
      setTimeout(() => {
        element.classList.add('element-appear')
      }, 300 * (i + 1))
    } else {
      setTimeout(() => {
        element.classList.add('Link-appear')
      }, 300 * (i + 1))
    }

    if (i === openingElement.length - 1)
      setTimeout(() => {
        element.classList.remove('element-move')
      }, 300 * (i + 1))
  })
}
openingHandler()

//Handles opening and closing the menu on a narrow screen

hamburger.addEventListener('click', function () {
  displaySmallWindow.forEach((item) => {
    item.classList.add('display-small-window-activ')
  })
  hamburger.classList.toggle('active')
  mainNav.classList.toggle('active_mainNav')
})

displaySmallWindow.forEach((item) => {
  item.addEventListener('click', function () {
    mainNav.classList.toggle('active_mainNav')
    hamburger.classList.toggle('active')
  })
})

// Handles all animations related to scrolling

const scrollHeight = document.body.scrollHeight - window.innerHeight
function animateOnScroll() {
  const scrollPercent = (window.scrollY / scrollHeight) * 100

  if (scrollPercent >= 7 && windowWidth > 500)
    lastMainNav.classList.add('last-main-nav-appears')
  if (scrollPercent <= 7 && windowWidth > 500)
    lastMainNav.classList.remove('last-main-nav-appears')

  if (
    (scrollPercent >= 10 && windowWidth > 500) ||
    (scrollPercent >= 3 && windowWidth < 500)
  ) {
    mainAbout.classList.add('main_about_animate')
  }
  if (
    (scrollPercent >= 10 && windowWidth > 500) ||
    (scrollPercent >= 27 && windowWidth < 500)
  ) {
    skillsList.forEach((skil, i) => {
      setTimeout(() => {
        skil.classList.add('skills_list_light')
      }, 150 * (i + 1))
    })
  }

  if (
    (scrollPercent >= 45 && windowWidth > 500) ||
    (scrollPercent >= 38 && windowWidth < 500)
  ) {
    mainProjects.classList.add('main_projects_animate')
  }
}
window.addEventListener('scroll', animateOnScroll)

// ///////

const cards = document.querySelectorAll('.card')

function handleMouseOver(event) {
  const element = event.target
  const parentCard = element.closest('.card')

  if (
    parentCard.classList.contains('card1') ||
    parentCard.classList.contains('card5') ||
    parentCard.classList.contains('card9')
  ) {
    parentCard.classList.add('bigger_Card_left')
  } else if (
    parentCard.classList.contains('card4') ||
    parentCard.classList.contains('card8') ||
    parentCard.classList.contains('card12')
  ) {
    parentCard.classList.add('bigger_Card_right')
  } else {
    parentCard.classList.add('bigger_Card')
  }
}

function handleMouseOut(event) {
  const element = event.target
  const parentCard = element.closest('.card')

  if (parentCard && !parentCard.classList.contains('Biggest_card')) {
    parentCard.classList.remove('bigger_Card')
    parentCard.classList.remove('bigger_Card_right')
    parentCard.classList.remove('bigger_Card_left')
  }
}

cards.forEach((card) => {
  card.addEventListener('mouseover', handleMouseOver)
  card.addEventListener('mouseout', handleMouseOut)
})

function handleClickdProjects(event) {
  const element = event.target
  const parentCard = element.closest('.card')

  if (parentCard) {
    parentCard.classList.forEach((classItem) => {
      if (classItem === 'card1') biggestCard1.classList.add('open_Biggest_card')
      if (classItem === 'card2') biggestCard2.classList.add('open_Biggest_card')
      if (classItem === 'card3') biggestCard3.classList.add('open_Biggest_card')
      if (classItem === 'card4') biggestCard4.classList.add('open_Biggest_card')
    })
  }
}

function handleClickdCloseCard(event) {
  biggestCards.forEach((biggestCard, i) => {
    if (event.target === biggestCard || event.target === biggestCardButton[i]) {
      biggestCard.classList.remove('open_Biggest_card')
    }
  })
}

cards.forEach((card) => {
  card.addEventListener('click', handleClickdProjects)
})

biggestCards.forEach((biggestCard) => {
  biggestCard.addEventListener('click', handleClickdCloseCard)
})

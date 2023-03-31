const openingElement = Array.from(
  document.getElementsByClassName('element-move')
)
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

const openingHandler = () => {
  const tempArray = openingElement.splice(5, 2)
  const newOpeningElement = openingElement.concat(tempArray)
  newOpeningElement.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add('element-appear')
    }, 300 * (i + 1))

    if (i === openingElement.length - 1)
      setTimeout(() => {
        element.classList.remove('element-move')
      }, 300 * (i + 1))
  })
}
openingHandler()

// Handles all animations related to scrolling

const scrollHeight = document.body.scrollHeight - window.innerHeight
function animateOnScroll() {
  const scrollPercent = (window.scrollY / scrollHeight) * 100

  if (scrollPercent >= 10) {
    mainAbout.classList.add('main_about_animate')

    skillsList.forEach((skil, i) => {
      setTimeout(() => {
        skil.classList.add('skills_list_light')
      }, 150 * (i + 1))
    })
  }

  if (scrollPercent >= 35) {
    mainProjects.classList.add('main_projects_animate')
  }
}
window.addEventListener('scroll', animateOnScroll)

// ///////

const cards = document.querySelectorAll('.card')

function handleMouseOver(event) {
  const element = event.target
  const parentCard = element.closest('.card')
  if (parentCard) {
    parentCard.classList.add('bigger_Card')
  }
}

function handleMouseOut(event) {
  const element = event.target
  const parentCard = element.closest('.card')

  if (parentCard && !parentCard.classList.contains('Biggest_card')) {
    parentCard.classList.remove('bigger_Card')
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

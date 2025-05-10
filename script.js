const tabs = [...document.querySelectorAll('.tab')]
const tabContent = [...document.querySelectorAll('.tab-content')]

tabs.forEach(tab => tab.addEventListener('click', tabsAnimation));

function tabsAnimation(e) {
    const indexRemove = tabs.findIndex(tab => tab.classList.contains('active-gradient'))
    tabs[indexRemove].classList.remove('active-gradient')
    tabContent[indexRemove].classList.remove('active-tab-content')

    const indexShow = tabs.indexOf(e.target) // ← ici la bonne façon
    tabs[indexShow].classList.add('active-gradient')
    tabContent[indexShow].classList.add('active-tab-content')
}

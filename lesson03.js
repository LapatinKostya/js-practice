// обработчик, handler, подписчик, subscriber, listener, слушатель -> function
// Handler будет вызван при   наступлении события
// Handler будет вызвана с аргументом ({})
// {} (сведения о произошедшем событии) -> event, ev, e, evt


// current target делает код более безопаснее используем его !!!
// свойства event
// stopPropagation / currentTarget


const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
const a = document.getElementById('a')

function anchorHandler(e) {
     e.preventDefault()
    alert('смерть ссылкам!!!!!!!!!!!!')
}

function onClickHandlerSm(e) {
    e.stopPropagation()
    alert('yo')
}
function onClickHandlerMd(e) {
    e.stopPropagation()
    console.log(e.currentTarget.id)
}
function onClickHandlerBg(e) {
    e.stopPropagation()
    console.log('hey')
}

// sm.onclick = onClickHandler
// sm.onclick = null

sm.addEventListener('click', onClickHandlerSm)
md.addEventListener('click', onClickHandlerMd)
bg.addEventListener('click', onClickHandlerBg)
a.addEventListener('click', anchorHandler)



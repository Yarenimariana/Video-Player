const $video=document.querySelector('#video')
const $play=document.querySelector('#play')
const $pause=document.querySelector('#pause')
const $backward=document.querySelector('#backward')
const $forward=document.querySelector('#forward')


$play.addEventListener ('click',handlePlay)
$pause.addEventListener ('click',handlePause)
$backward.addEventListener ('click',handleBackward)
$forward.addEventListener ('click',handleForward)


function hanglePlay(){
    $video.play()
    $play.hidden=true
    $play.hidden=false
    console.log('clic en reproducir')
}
function handlePause(){
    $video.$pause()
    $pause.hidden=true
    $play.hidden=false
    console.log('clic en pause')
}
function handleBackward(){
    $video.currentTime-=10
    console.log('regresate 10 sg')
}
function handleForward(){
    $video.currentTime +=10
    console.log('Adelantaste 10 sg')
}
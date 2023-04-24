window.addEventListener("keydown", e => {
    //let code = e.code
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`)
    console.log(audio)
})
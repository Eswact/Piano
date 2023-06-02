const keys = document.querySelectorAll(".piano-but");
const whiteKeys = document.querySelectorAll('.white-but')
const blackKeys = document.querySelectorAll('.black-but')
let activeAudio = null;
keys.forEach(function(key){
    key.addEventListener("click", function(e){
        if (activeAudio) {
            activeAudio.pause();
            activeAudio.currentTime = 0;
        }
        let noteAudio = e.target.dataset.note;
        noteAudio.currentTime = 0;
        document.getElementById(noteAudio).play();
        activeAudio = document.getElementById(noteAudio);
        e.target.classList.add('active');
        setTimeout(function() {
        e.target.classList.remove('active');
        }, 200);
    });
});
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
document.addEventListener('keydown', e => {
    if (e.repeat) return
    let key = e.key;
    let whiteKeyIndex = WHITE_KEYS.indexOf(key);
    let blackKeyIndex = BLACK_KEYS.indexOf(key);
    if (whiteKeyIndex > -1) whiteKeys[whiteKeyIndex].click();
    if (blackKeyIndex > -1) blackKeys[blackKeyIndex].click();
});
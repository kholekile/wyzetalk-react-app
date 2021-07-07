function formattext(text, index, minLength){
    return text.substring(0, index) + (text.length > minLength && " ..." || '');
}

function secondsToMinutes(time){
    return Math.floor(time / 60)+':'+Math.floor(time % 60);
}

export {
    formattext,
    secondsToMinutes
}

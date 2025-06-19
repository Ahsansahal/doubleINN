var timeString = (secs) => {
    let ss = Math.floor(secs),
        hh = Math.floor(ss / 3600),
        mm = Math.floor((ss - hh * 3600) / 60);
    ss = ss - hh * 3600 - mm * 60;
    if (hh > 0) {
        mm = mm < 10 ? "0" + mm : mm;
    }
    ss = ss < 10 ? "0" + ss : ss;
    return hh > 0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`;
};

function setProgress(elTarget) {
    let divisionNumber = elTarget.getAttribute("max") / 100;
    let rangeNewWidth = Math.floor(elTarget.value / divisionNumber);
    if (rangeNewWidth > 95) {
        elTarget.nextSibling.style.width = "95%";
    } else {
        elTarget.nextSibling.style.width = rangeNewWidth + "%";
    }
}

for (let i of document.querySelectorAll(".__mainAudio")) {
    i.audio = new Audio(encodeURI(i.dataset.src));
    (i.__playBtn = i.querySelector(".__playBtn")),
        (i.__playIcon = i.querySelector(".__playIcon")),
        (i.__rangeLimitNow = i.querySelector(".__rangeLimitNow")),
        (i.__rangeLimitTime = i.querySelector(".__rangeLimitTime")),
        (i.__rangeMovement = i.querySelector(".__rangeMovement")),
        i.seeking = false;

    i.__playBtn.onclick = () => {
        if (i.audio.paused) {
            i.audio.play();
        } else {
            i.audio.pause();
        }
    };

    i.audio.onplay = () => (i.__playIcon.innerHTML = '<i class="fa fa-pause"></i>');
    i.audio.onpause = () => (i.__playIcon.innerHTML = '<i class="fa fa-play"></i>');

    i.audio.onloadstart = () => {
        i.__rangeLimitNow.innerHTML = "Loading";
        i.__rangeLimitTime.innerHTML = "";
    };

    i.audio.onloadedmetadata = () => {
        i.__rangeLimitNow.innerHTML = timeString(0);
        i.__rangeLimitTime.innerHTML = timeString(i.audio.duration);
        i.__rangeMovement.max = Math.floor(i.audio.duration);
        i.__rangeMovement.oninput = () => (i.seeking = true);
        i.__rangeMovement.onchange = () => {
            i.audio.currentTime = i.__rangeMovement.value;
            if (!i.audio.paused) {
                i.audio.play();
            }
            i.seeking = false;
        };
        i.audio.ontimeupdate = () => {
            if (!i.seeking) {
                i.__rangeMovement.value = Math.floor(i.audio.currentTime);
            }
            i.__rangeLimitNow.innerHTML = timeString(i.audio.currentTime);
            let divisionNumber = i.__rangeMovement.getAttribute("max") / 100;
            let rangeNewWidth = Math.floor(i.__rangeMovement.value / divisionNumber);
            if (rangeNewWidth > 95) {
                i.__rangeMovement.nextSibling.style.width = "95%";
            } else {
                i.__rangeMovement.nextSibling.style.width = rangeNewWidth + "%";
            }
        };
    };
    i.audio.oncanplaythrough = () => {
        i.__playBtn.disabled = false;
        i.__rangeMovement.disabled = false;
    };
    i.audio.onwaiting = () => {
        i.__playBtn.disabled = true;
        i.__rangeMovement.disabled = true;
    };

    i.__rangeMovement.addEventListener("input", function () {
        setProgress(this);
    });

}

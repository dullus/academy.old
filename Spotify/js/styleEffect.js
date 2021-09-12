const spotifyGreen = "#01b949";
const gray = "#7a7a7a";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const tooltip = document.createElement('div');

function hoverSongActive(element, id, createdDate) {
    const event = new Date(createdDate);
    tooltip.innerHTML = `${months[event.getMonth()]} ${event.getDate()}, ${event.getFullYear()}`
    const iconWrapper = document.getElementById(`iconWrapper${id}`);
    tooltip.style.display = 'inline-block';
    element.appendChild(tooltip);
    iconWrapper.style.visibility = 'visible';
    element.style.color = spotifyGreen;
    tooltip.style.color = 'white';
    tooltip.style.border = '1px dotted white';
    tooltip.style.borderRadius = '5px'
    tooltip.style.backgroundColor = 'transparent';
    tooltip.style.marginLeft = '50px';
}

function hoverSongOut(element, id) {
    const icon = document.getElementById(`icon${id}`);
    const explicit = document.getElementById(`explicit${id}`);
    const iconWrapper = document.getElementById(`iconWrapper${id}`);
    iconWrapper.style.visibility = 'hidden';
    element.style.color = 'white';
    explicit.style.color = gray;
    explicit.style.borderColor = gray;
    icon.setAttribute("class", "fas fa-play");
}

function clickEffect(element, id, isPlaying) {
    const icon = document.getElementById(`icon${id}`);
    const iconWrapper = document.getElementById(`iconWrapper${id}`);
    const explicit = document.getElementById(`explicit${id}`);
    iconWrapper.style.visibility = 'visible';
    element.style.color = spotifyGreen;
    explicit.style.color = spotifyGreen;
    explicit.style.borderColor = spotifyGreen;
    if (isPlaying) {
        icon.setAttribute("class", "fas fa-pause");
    }
    else icon.setAttribute("class", "fas fa-play");
}
export { hoverSongActive, hoverSongOut, clickEffect };
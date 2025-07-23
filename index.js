// Initialising the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProcessBar = document.getElementById('myProcessBar');
const play = document.getElementById('play');

let songs = [
    { songName: "Julfa", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Afsos", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "Beretta", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "Kaana Pe Baal", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "Naina Nu", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "Raj Ji", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "Sufna", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" }
];

// Play or pause on master play button click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.src='svgs/play.svg';
 // here the size of play svg is small so i give the size to this svg 
        masterPlay.style.width = '50px';   
        masterPlay.style.height = '50px';
    } else {
        audioElement.pause();
        masterPlay.src='svgs/pause.svg';
    }
});

// Listen for audio time update to sync progress bar
myProcessBar.addEventListener('timeupdate', () => {
    console.log(timeupdate);
});
// Initialising the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProcessBar = document.getElementById('myProcessBar');
const play = document.getElementById('play');
const gif = document.getElementById('gif');

let songs = [
    { songName: "Julfa", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Afsos", filepath: "songs/Afsos.m4a", coverpath: "covers/2.jpg" },
    { songName: "Beretta", filepath: "songs/Beretta.m4a", coverpath: "covers/3.jpg" },
    { songName: "Kaana Pe Baal", filepath: "songs/Kaana Pe Baal.m4a", coverpath: "covers/4.jpg" },
    { songName: "Naina Nu", filepath: "songs/Kaana Pe Baal.m4a", coverpath: "covers/5.jpg" },
    { songName: "Raj Ji", filepath: "songs/Raja Ji (LoFi Remix).m4a", coverpath: "covers/6.jpg" },
    { songName: "Sufna", filepath: "songs/Sufna Banke.m4a", coverpath: "covers/7.jpg" }
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

// listen events
audioElement.addEventListener('timeupdate', () => {
   timeInPersentage = parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProcessBar.value = timeInPersentage;
});

// now changing with time 

myProcessBar.addEventListener('input', () => 
{
    audioElement.currentTime =(myProcessBar.value *audioElement.duration)/ 100;
    
})
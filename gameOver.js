const click_me = document.getElementsByClassName("click-me")[0]
var highscore_box=document.getElementById("HighScore-box")
var close_button = document.getElementsByClassName("close-button")[0]
var score = window.localStorage.getItem("score")
var score_bar = document.getElementsByClassName("name")[0]
var user_array =JSON.parse(window.localStorage.getItem("users"))
var score_list=document.getElementById("score-list")



// leaderboard click
click_me.onclick =() =>{
    highscore_box.style.visibility="visible"
    click_music.play()
}

close_button.onclick = () =>{
    highscore_box.style.visibility="hidden"
    click_music.play()
}

// score update
score_bar.innerText=`Your Score : ${score}`

// sorting the array
user_array.sort((a, b) => b[1] - a[1])

// updateing the leader board
for(let i=0;i<user_array.length;i++){
    score_list.innerHTML+=`<li>${user_array[i][0]}..............${user_array[i][1]}</li>`
}

// music
const Background_music = new Audio("./assets/Game-Over.mp3")
Background_music.play()

const click_music = new Audio("./assets/click.mp3")





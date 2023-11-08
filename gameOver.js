const click_me = document.getElementById("click-me")
var highscore_box=document.getElementById("HighScore-box")
var close_button = document.getElementById("close-button")
var score = window.localStorage.getItem("score")
var score_bar = document.getElementById("name")
var user_array =JSON.parse(window.localStorage.getItem("users"))
var score_list=document.getElementById("score-list")




click_me.onclick =() =>{
    highscore_box.style.visibility="visible"
    click_music.play()
}

close_button.onclick = () =>{
    highscore_box.style.visibility="hidden"
    click_music.play()
}

score_bar.innerText=`Your Score : ${score}`

user_array.sort((a, b) => b[1] - a[1])

for(let i=0;i<user_array.length;i++){
    console.log(i)
    console.log(user_array[i][0])

    score_list.innerHTML+=`<li>${user_array[i][0]}..............${user_array[i][1]}</li>`
}


const Background_music = new Audio("./assets/Game-Over.mp3")
Background_music.play()

const click_music = new Audio("./assets/click.mp3")





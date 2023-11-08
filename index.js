var discription_box=document.getElementById("discriptions-box")
const close_button = document.getElementsByClassName("close-button")[0]
const click_me = document.getElementsByClassName("click-me")[0]
var input_name =document.getElementById("name-input")
const play_button =document.getElementsByClassName("button_play")[0]




click_me.onclick =() =>{
    discription_box.style.visibility="visible"
    click_music.pause()
    click_music.currentTime=0
    click_music.play()
}

close_button.onclick = () =>{
    discription_box.style.visibility="hidden"
    click_music.pause()
    click_music.currentTime=0
    click_music.play()
    
}


play_button.onclick =()=>{
    click_music.pause()
    click_music.currentTime=0
    click_music.play()
    let input_value = input_name.value
    let Error = document.getElementById("Error-pop")
    if (input_value==""){
        Error.style.visibility="visible"
        
    }else{
        if (!window.localStorage.getItem("users")){
            window.localStorage.setItem("users",JSON.stringify([]))
            Background_music.pause()
            window.location.href="game.html"
        }else{
            let user_array = JSON.parse(window.localStorage.getItem("users"))
            user_array.push([input_value,0])
            console.log(user_array)
            window.localStorage.setItem("users",JSON.stringify(user_array))
            Background_music.pause()
            window.location.href="game.html"
        }
    }   
}



const click_music = new Audio("./assets/click.mp3")

const Background_music = new Audio("./assets/Background.mp3")
Background_music.play()
Background_music.loop=true

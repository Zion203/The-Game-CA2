

const wordPairs = [
    ["apple", "A popular fruit often associated with pies."],
    ["banana", "A yellow fruit that monkeys love to eat."],
    ["chocolate", "A sweet treat made from cocoa beans."],
    ["dog", "A loyal pet often referred to as 'man's best friend'."],
    ["elephant", "A large, gray mammal with a long trunk."],
    ["football", "A sport played with a round ball and two teams."],
    ["guitar", "A musical instrument with strings that you can strum."],
    ["hamburger", "A popular fast-food item made from ground beef."],
    ["ice cream", "A cold and creamy dessert available in many flavors."],
    ["jazz", "A genre of music known for improvisation and rhythm."],
    ["kangaroo", "An Australian marsupial known for its jumping ability."],
    ["lemon", "A sour citrus fruit often used for flavoring."],
    ["mountain", "A tall landform with steep sides, often covered in snow."],
    ["ninja", "A skilled and stealthy warrior often associated with Japan."],
    ["octopus", "A sea creature with eight tentacles and a bulbous head."],
    ["piano", "A musical instrument with keys and a wide sound range."],
    ["quilt", "A warm bedcover made of layers of fabric."],
    ["rainbow", "A meteorological phenomenon with colorful arches in the sky."],
    ["saxophone", "A musical instrument known for its smooth and jazzy sound."],
    ["tiger", "A large feline with distinctive stripes."],
    ["umbrella", "A device used to shield from rain or sun."],
    ["violin", "A string instrument played with a bow."],
    ["watermelon", "A juicy and refreshing fruit often enjoyed in the summer."],
    ["xylophone", "A percussion instrument with wooden bars of varying lengths."],
    ["yacht", "A luxurious boat often used for recreational purposes."],
    ["zebra", "A black-and-white striped animal native to Africa."],
    ["rocket", "A cylindrical vehicle used to travel into space."],
    ["giraffe", "A long-necked African mammal with distinctive spots."],
    ["helicopter", "A type of aircraft with rotating blades for lift."],
    ["keyboard", "A set of keys used for typing on a computer."],
    ["bicycle", "A two-wheeled vehicle powered by pedaling."],
    ["skyscraper", "A very tall and impressive building."],
    ["volcano", "A mountain that can erupt with lava and ash."],
    ["dragon", "A mythical creature often depicted as a large, fire-breathing reptile."],
    ["robot", "An artificial machine designed to perform tasks autonomously."],
    ["parrot", "A colorful bird known for its ability to mimic sounds."],
    ["beach", "A sandy shoreline by the sea, ocean, or lake."],
    ["rainforest", "A lush and tropical forest with high rainfall and biodiversity."],
    ["butterfly", "An insect with colorful wings that undergo metamorphosis."],
    ["ocean", "A vast body of saltwater covering much of the Earth's surface."],
    ["desert", "A barren and arid region with little rainfall."],
    ["lighthouse", "A tall structure with a light to guide ships at sea."],
    ["castle", "A fortified building often associated with medieval times."],
    ["volleyball", "A team sport played with a ball over a net."],
    ["sunglasses", "Eyewear designed to protect the eyes from the sun's rays."],
    ["carousel", "A rotating amusement ride with seats on which riders sit."],
    ["waterfall", "A natural cascade of water from a height."],
    ["magnet", "An object that attracts certain metals."],
    ["spaceship", "A vehicle designed for travel in outer space."],
    ["dolphin", "A highly intelligent marine mammal known for its playful behavior."],
    ["raincoat", "A waterproof garment worn to protect from rain."],
    ["ballet", "A classical dance form with precise and graceful movements."],
    ["fireworks", "Explosive pyrotechnic displays often used in celebrations."],
    ["seashell", "A hard, protective outer layer of a marine mollusk."],
    ["telescope", "An optical instrument used for distant viewing of objects."],
    ["jigsaw", "A puzzle consisting of various interlocking pieces."],
    ["squirrel", "A small, bushy-tailed rodent often seen in trees."],
]

var word=document.getElementById("words-container")
var hint_paragraph = document.getElementById("hint_p")
var answer_input = document.getElementById("answers")
var incorrect_bar = document.getElementById("incorrect")
var reset_button = document.getElementById("Reset-button")
var confirm_button = document.getElementById("button_confirm")
var time_bar=document.getElementById("timer")
var user_array = JSON.parse(window.localStorage.getItem("users"))


var seconds=30
var index=0
var score=0

function RandomIndex(){
    return Math.floor(Math.random()*60)
}

function jumble(word){
    const wordArray = word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    const jumbledWord = wordArray.join(' ');
  
    return jumbledWord;
}


function insertion(){
    index=RandomIndex()
    word.innerText=jumble(wordPairs[index][0])
    hint_paragraph.innerText=`${wordPairs[index][1]}`
    let score_points=seconds
    return score_points

}

function checker(){
    let value_input = answer_input.value
    if (value_input==wordPairs[index][0]){
        let score_points=insertion()
        score+=score_points
        incorrect_bar.style.visibility="hidden"
        seconds=30
    }else{
        incorrect_bar.style.visibility="visible"
        seconds-=5
    }
}

confirm_button.onclick =()=>{
    click_music.play()
    checker()
    answer_input.value=""
}

function updateTimerDisplay(seconds){
    time_bar.innerText=`${seconds}s`
}

function timer(){
    countdown = setInterval(function () {
        seconds--;
        updateTimerDisplay(seconds);

        if (seconds <= 0) {
          clearInterval(countdown);
          
          user_array[user_array.length-1][1]=score
          window.localStorage.setItem("score",score)
          window.localStorage.setItem("users",JSON.stringify(user_array))
          window.location.href="gameOver.html"
        }
      }, 1000);
}

reset_button.onclick = ()=>{
    click_music.play()
    seconds-=5
    insertion()
    
}


const Background_music = new Audio("./assets/Background.mp3")
Background_music.play()
Background_music.loop=true

const click_music = new Audio("./assets/click.mp3")


timer()
insertion()
const body = $('body')
const button = $('.enter');
const textInput = $(':input')
const regex = /[a-zA-z]/
const button2 = $('.complete');
const button3 = $('.nukem');
let tasks = $('.all-tasks')

function addList(input){
    console.log(regex.test(input), 'checked')
    if(regex.test(input) === true){
        console.log(input)
        const newElement = $(`<li class="incomplete">${input}</li>`);
        $('.all-tasks').append(newElement);
    }
    else{
        console.log('no')
    }
    textInput.val(' ')
}

button.on('click', function(){
    addList(textInput.val())
})

textInput.keypress(function(event){
    if(event.keyCode === 13){
        addList(textInput.val())
    }
})
tasks.on('click', 'li',function(){
        console.log('clicked')
        $(this).toggleClass("incomplete")
        $(this).toggleClass("strike")
})

button2.on('click', function(){
    $('.strike').remove()
})
button3.on('click', function(){
    tasks.children().remove()
})
const body = $('body')
const button = $('.enter');
const textInput = $(':input')
const regex = /[a-zA-z]/
const button2 = $('.complete');
const button3 = $('.nukem');
let tasks = $('.all-tasks')
const edit = $('.edit')

function addList(input){
    console.log(regex.test(input), 'checked')
    if(regex.test(input) === true){
        console.log(input)
        const newElement = $(`<li class="incomplete"><div class='list'><p class="list-items">${input}</p><button class="edit">edit</button></div></li>`);
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
edit.on('click', function(){
    console.log('edit this')
})

button2.on('click', function(){
    $('.strike').parent().remove()
})
button3.on('click', function(){
    tasks.children().remove()
})
const body = $('body')
const button = $('.enter');
const textInput = $(':input')
const regex = /[a-zA-z]/
let tasks = update()

button.on('click', function(){
    console.log(regex.test(textInput.val()), 'checked')
    if(regex.test(textInput.val()) === true){
        console.log(textInput.val())
        const newElement = $(`<li class=''>${textInput.val()}</li>`);
        $('ul.all-tasks').append(newElement);
        task = update()
        check()
        update()
    }
    else{
        console.log('no')
    }
})


tasks.each(function() {
    $(this).click(function(){
        console.log('clicked')
        $(this).toggleClass("strike")
    })
});


function check(){
    for(let task of tasks){
        console.log(task)
    }
}
function update(){
    return $('li')
    
}

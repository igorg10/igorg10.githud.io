const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeholders.forEach(function(placeholder) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)    
});

// for (const placeholder of placeholders) {
//     console.log(placeholder);
// }
        


function dragstart(event) {
    console.log('start');
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
    // event.target.classList.add('hide');
}

function dragend(event) {
    console.log('end');
    event.target.classList.remove('hold');
    event.target.classList.remove('hide');
}

function dragover(event) {
    event.preventDefault()    
}

function dragenter(event) {
    event.target.classList.add('hovered')    
}

function dragleave(event) {
    event.target.classList.remove('hovered')   
}

function drop(event) {
    event.target.append(item)  
    event.target.classList.remove('hovered')
}
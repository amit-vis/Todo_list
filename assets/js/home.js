// we have call all the require data here

const selectList = document.querySelectorAll('.select-list');
const checkbox = document.querySelector('.form-check-input');
const deleteButton = document.getElementById('deleteButton');

// here is the style function for each select option.
selectList.forEach((span) => {
    if(span.textContent.trim() =='work'){
        span.style.backgroundColor = '#9B02AC';
        span.style.padding = '.7% 1% .7% 1%';
        span.style.color = 'white';
        span.style.borderRadius = '3px';
    }
    if(span.textContent.trim() =='personal'){
        span.style.backgroundColor = '#3C6AB9';
        span.style.padding = '.7% 1% .7% 1%';
        span.style.color = 'white';
        span.style.borderRadius = '3px';
    }
    if(span.textContent.trim() == 'cleaning'){
        span.style.backgroundColor = 'green';
        span.style.padding = '.7% 1% .7% 1%';
        span.style.color = 'white';
        span.style.borderRadius = '3px';
    }
    if(span.textContent.trim() == 'school'){
        span.style.backgroundColor = '#5151c3';
        span.style.padding = '.7% 1% .7% 1%';
        span.style.color = 'white';
        span.style.borderRadius = '3px';
    }
    if(span.textContent.trim()== 'others'){
        span.style.backgroundColor = '#F82F2F';
        span.style.padding = '.7% 1% .7% 1%';
        span.style.color = 'white';
        span.style.borderRadius = '3px';
    }
    
});

// here is the function for change the backgoround color and textdecoration of the list when the input checked
function changeBgColor(checkbox) {
  const listItem = checkbox.closest('li');
  if (checkbox.checked) {
      listItem.style.textDecoration = 'line-through';
      listItem.style.color = '#555';
  } else {
      listItem.style.textDecoration = '';
      listItem.style.color = '';
  }
}






// @package - click to copy text
// @content creator - silent code

'use strict';

// get the elements
const textInp = document.getElementById('text-input'),
      copyBtn = document.getElementById('copy-btn'),
      success = document.querySelector('.success');


copyBtn.addEventListener('click', function() {
    // select the input text field
    textInp.select();
    // for mobile devices
    textInp.setSelectionRange(0, 99999);

    // execute the copy command
    document.execCommand('copy');

    // set the copy success message visible and hidden after 2s
    success.classList.add('active');
    setTimeout(function(){
        success.classList.remove('active');
    }, 2000);

    // success message log
    console.log('copy successful');
    
});

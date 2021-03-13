const typeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type method
typeWriter.prototype.type = function () {
    // console.log('Hello');

    // Current index of word(in this case sentence)
    const current = this.wordIndex % this.words.length;
    // console.log(current);

    // Get full text (sentence) of current word
    const fullTxt = this.words[current];
    // console.log(fullTxt);

    // Check if deleting
    if (this.isDeleting) {
        // Remove a character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add a character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element ''
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial type speed
    let typeSpeed = 500;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end 
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 200;
    }

    setTimeout(() => this.type(), 100);
}


// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// inot App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new typeWriter(txtElement, words, wait);
}



// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // console.log('Hello');

        // Current index of word(in this case sentence)
        const current = this.wordIndex % this.words.length;
        // console.log(current);

        // Get full text (sentence) of current word
        const fullTxt = this.words[current];
        // console.log(fullTxt);

        // Check if deleting
        if (this.isDeleting) {
            // Remove a character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add a character
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element ''
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial type speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end 
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), 500);
    }
} 
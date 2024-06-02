document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.language')) {
            dropdownContent.style.display = 'none';
        }
    });

    const options = dropdownContent.querySelectorAll('a');
    options.forEach(option => {
        option.addEventListener('click', function(event) {
            event.preventDefault();
            dropbtn.innerHTML = this.innerHTML + ' <span class="arrow">&#9662;</span>';
            dropdownContent.style.display = 'none';
        });
    });
});

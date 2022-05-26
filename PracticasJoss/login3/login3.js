// $(document).ready(function(){
    var form = document.getElementById('form');

    form.addEventListener('mousemove', (e) => {
        var x = (window.innerWidth / 2 - e.pageX) / 12;
        var y = (window.innerHeight / 2 - e.pageY) / 12;

        form.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    });

    form.addEventListener('mouseleave', () => {
        form.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

// });
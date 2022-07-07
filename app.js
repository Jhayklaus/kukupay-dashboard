const sidePopUp = () => {
    const burger = document.querySelector('.burger');
    const sideBar = document.querySelector('.left');
    const body = document.querySelector('.over')

    burger.addEventListener('click', () => {
        sideBar.classList.toggle('left-active')
        


        
        burger.classList.toggle('toggle');
        body.classList.toggle('overlay')
        
    });



}

sidePopUp();

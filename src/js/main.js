
{
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    function showMenu() {
        hamburger.classList.add('hamburger__cross');
        menu.classList.add('menu__active');
    }
    function hideMenu() {
        hamburger.classList.remove('hamburger__cross');
        menu.classList.remove('menu__active');
    }

    function init() {
        
        const menuItems = document.querySelectorAll('.menu__item');
        menuItems.forEach(e => {
            e.addEventListener('click', hideMenu);
        });

        hamburger.addEventListener('click', () => {
            if(!menu.classList.contains('menu__active')) {
                showMenu();
            } else hideMenu();
        })

    }
}

init();


// const menu = document.querySelector('nav .menu');
// function showMenu() {
//     const hamburger = document.querySelector('.hamburger');
//     hamburger.addEventListener('click', (e)=> {
//         if(hamburger.classList.contains('hamburger__cross')) {
//             hamburger.classList.remove('hamburger__cross');
//             menu.classList.remove('menu__show');
//         } else {
//             hamburger.classList.add('hamburger__cross');
//             menu.classList.add('menu__show');
//         }
//     });
// }

// function hideMenu() {
//     const hamburger = document.querySelector('.hamburger');

// }

// function hideMenuOnClick() {
//         console.log('YES');
//         const menuItems = document.querySelectorAll('.menu__item');
//         menuItems.forEach((item, value) => {
//             item.addEventListener('click', () => {
//                 console.log(item.innerHTML);
//                 hamburger.classList.remove('hamburger__cross');
//                 menu.classList.remove('menu__show');
//             })
//         });
// }
// showMenu();
// hideMenuOnClick();
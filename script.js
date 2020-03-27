let mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: false,
});

const images = ['https://basik.ru/images/nature_landscape_9/short.jpg', 
                'https://bipbap.ru/wp-content/uploads/2017/04/krasivye_kollazh_na_temu_prirody_1920x1200.jpg', 
                'https://kaifolog.ru/uploads/posts/2016-11/1480227668_00_1.jpg', 
                'https://kaifolog.ru/uploads/posts/2014-08/thumbs/1408090462_052.jpg'
            ];
let rightPanel = document.querySelector('.right-panel'),
    miniImages = null,
    mySweper = null;

rightPanel.addEventListener('click', chooseImg);

function chooseImg(ev) {
    miniImages.map((el, index)=>{
        if(el.outerHTML === ev.target.outerHTML){
            el.style.opacity = '1';
            mySwiper.slideTo(index + 1);
        }
        else el.style.opacity = '0.5';
    });
}

function changeImg(){
    let i = mySwiper.activeIndex;
    miniImages.map((el, index)=>{
        (i-1 === index)? el.style.opacity = '1' : el.style.opacity = '0.5';
    });
}

function renderRightBlock(){
    for(let i=0; i<images.length; i++){
        let div = document.createElement('div');
        div.classList.add('right-image');
        div.style.backgroundImage = `url(${images[i]})`;
        rightPanel.append(div);
    }
    miniImages = [...document.querySelectorAll('.right-image')];
    miniImages[0].style.opacity = '1';
}  

(() => {
    renderRightBlock();
    mySweper = document.querySelector('.swiper-container').swiper;
    mySwiper.on('slideChange', changeImg)
})();



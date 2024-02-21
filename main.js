
//         var x = 1

//         if(x = 1){

//         anime({
//             targets: '.page1',
//             translateY: -750,
//             delay: 4000,
//             autoplay: true
//         })

//         anime({
//             targets: '.body_second, .Navbar2',
//             translateY: -750,
//             // direction: 'alternate',
//             delay: 4000,
//             // loop: true,
//             autoplay:true,
//             easing: 'linear',
//             easing: 'spring(1, 80, 10, 0)'
//         })

//         anime({
//             targets: '.container',
//             translateY: -750,
//             delay: 4000,
//             autoplay:true
//         })

//         document.querySelector('body').style.height = '210vh'
    

//     } 

    
// anime({
//     targets: '.left_1',
//     translateY: -439,
//     duration: 2000,
//     delay: 6000,
// })


// anime({
//     targets: '.left_2',
//     translateY: -439,
//     duration: 2000,
//     delay: 6000,
// })

var styleElement = document.createElement('style');

var rule = '#home::after { content: "";  position: absolute; height: 3px ;width: 80px; background: #fff; top: 60px; margin-left: -60px  }';

styleElement.textContent = rule;

document.head.appendChild(styleElement);

        

var styleElement2 = document.createElement('style');

var rule2 = '.home2::after { content: "";  position: absolute; height: 3px ;width: 80px; background: #24cca8; top: 60px; margin-left: -60px  }';

styleElement2.textContent = rule2;

document.head.appendChild(styleElement2);

// setTimeout(function() {
//     document.querySelector('.rightPage').classList.add('hidden');
// }, 5000);     


// setTimeout(function() {
//     document.querySelector('.disappearing-div').classList.add('hidden');
// }, 3000);

setTimeout(function() {
    document.querySelector('.body').classList.add('bg');
}, 3000);

setTimeout(function() {
    var styleElement = document.createElement('style');

    var rule = '#home::after { content: "";  position: absolute; height: 3px ;width: 80px; background: #24cca8; top: 60px; margin-left: -60px  }';
    
    styleElement.textContent = rule;
    
    document.head.appendChild(styleElement);
}, 2000);

// Manu

// const ham = document.querySelector(".menu-holder");
// const menu = document.querySelector('.nav-menu-wrapper');
// const links = menu.querySelectorAll('.nav-links');
// var tl = gsap.timeline({ paused: true });

// tl.to(menu, {
// 	duration: 2,
// 	opacity: 1,
// 	width: '576px', // change this to 100vh for full-height menu
// 	ease: 'expo.inOut',
//     display:'block',
//     height:'100%',

   
// })

gsap.registerPlugin(ScrollTrigger);


const ham = document.querySelector(".menu-button");
const menu = document.querySelector('.w-nav-overlay');
const links = menu.querySelector('.w-nav[data-collapse="medium"]');
var tlo = gsap.timeline({ paused: true });

tlo.to(menu, {
	duration: 0,
	opacity: 1,
	// width: '576px', // change this to 100vh for full-height menu
	ease: 'expo.inOut',
    display:'block',
    height:'100vh',
    display:'block',
   

   
})


tlo.from(links, {
	duration: 1,
	opacity: 0,
	y: 20,
	stagger: 0.1,
	ease: 'expo.inOut',
  display:'block'
}, "-=0.5");

tlo.reverse();

ham.addEventListener('click', () => {
  console.log('Hoo')
	tlo.reversed(!tlo.reversed());
});
// Lenis smooth scrolling
let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {
	
    lenis = new Lenis({
		lerp: 0.2,
		smooth: true
	});

    lenis.on('scroll', () => ScrollTrigger.update());

	const scrollFn = (time) => {
		lenis.raf(time);
		requestAnimationFrame(scrollFn);
	};
	
    requestAnimationFrame(scrollFn);

};

  
const scroll = () => {
gsap.to('p',{
    opacity:1
}) 

gsap.utils.toArray(".project-decor-holder").forEach(box => {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: box,
    
     start:"top center",
      end: "center 0%",
      // markers: true,
      scrub: 1,
      ease: 'expo.inOut',
    }
  });

  tl2.to(box, {
    y: 0,
  
  });
});

// 
  
gsap.utils.toArray(".project-name-holder").forEach(box => {
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: box,
      
       start:"top center",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
        ease: 'expo.inOut',
      }
    });
  
    tl3.to(box, {
     
      opacity:1
    
    });
  });

  gsap.utils.toArray(".service-tag-container").forEach(box => {
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start:"top center",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
        ease: 'expo.inOut',
      }
    });
  
    tl3.to(box, {
     
      x:'20%'
    
    });
  });
  

  gsap.utils.toArray(".blog-card-holder").forEach(box => {
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: box,
      
       start:"top center",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
        ease: 'expo.inOut',
       
      }
    });
  
    tl3.to(box, {
     
      opacity:1,
     stagger:0.3
    
    });
  });


  gsap.utils.toArray(".service-image-holder").forEach(box => {
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: box,
      
       start:"top center",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
        ease: 'expo.inOut',
       
      }
    });
  
    tl3.to(box, {
     
    
      rotate:'0deg'
    
    
    });
  });


  gsap.to('.about-me-decor-holder',{
    scrollTrigger: {
        trigger:'.short-about-me-text-holder',
    start:"top 10%",
         end: "bottom bottom",
        //  markers: true,
         scrub: 1,
         ease: 'expo.inOut',
        
        
       },
       duration:2,
    rotateX:'-20deg' 
  })

    let t9 = gsap.timeline();
  
    t9.to('.services-title', {
     
        scrollTrigger: {
            trigger:'.services-title',
        start:"top center",
             end: "bottom bottom",
            //  markers: true,
             scrub: 1,
             ease: 'expo.inOut',
            
           },
      opacity:1
    
    
    });


}



function text(){
  const fx18Titles = [...document.querySelectorAll('.span-line')];
  fx18Titles.forEach(title => {
        
    const chars = title.querySelectorAll('.span-line-inner');
    
    chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
    
    gsap.fromTo(chars, { 
        
        opacity: 0,
        z: -800
    }, 
    {
        ease: 'back.out(1.2)',
        opacity: 1,
        z: 0,
        stagger: 0.04,
       
        
    });

});
}


   
    window.addEventListener('load', sabir(tot));
  

  function sabir(tot){
    document.querySelector('.pre-loader').className += ' hidden';
    setTimeout(tot,1000)
  }

  
  function tot(){
    initSmoothScrolling();
    scroll()
    initTricksWords() 
    text()
   marquee()
  }
  




  function initTricksWords() {
    
    var spanWord = document.getElementsByClassName("span-lines");
    for (var i = 0; i < spanWord.length; i++) {
  
    var wordWrap = spanWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');
  
    }
  
  }
  
 function marquee(){
  gsap.registerPlugin(ScrollTrigger);


const initMarquees = () => {
	const ambassadors = [...document.querySelectorAll(".ambassadors--gsap")];
	if (ambassadors) {
		const marqueeObject = {
			top: {
				el: null,
				width: 0
			},
			bottom: {
				el: null,
				width: 0
			}
		};
		ambassadors.forEach((ambassadorBlock) => {
			marqueeObject.top.el = ambassadorBlock.querySelector(".ambassadors__top");
			marqueeObject.bottom.el = ambassadorBlock.querySelector(
				".ambassadors__bottom"
			);
			marqueeObject.top.width = marqueeObject.top.el.offsetWidth;
			marqueeObject.bottom.width = marqueeObject.bottom.el.offsetWidth;
			marqueeObject.top.el.innerHTML += marqueeObject.top.el.innerHTML;
			marqueeObject.bottom.el.innerHTML += marqueeObject.bottom.el.innerHTML;

			let dirFromLeft = "-=50%";
			let dirFromRight = "+=50%";
			let master = gsap
				.timeline()
				.add(marquee(marqueeObject.top.el, 20, dirFromLeft), 0)
				.add(marquee(marqueeObject.bottom.el, 20, dirFromRight), 0);
			let tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });
			let timeScaleClamp = gsap.utils.clamp(1, 6);
			// disabling the scrolltrigger doesn't matter for the flashing incoming new items:
			ScrollTrigger.create({
				start: 0,
				end: "max",
				onUpdate: (self) => {
					master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
					tween.invalidate().restart();
				}
			});
		});
	}
};

const marquee = (item, time, direction) => {
	let mod = gsap.utils.wrap(0, 50);
	return gsap.to(item, {
		duration: time,
		ease: "none",
		x: direction,
		modifiers: {
			x: (x) => (direction = mod(parseFloat(x)) + "%")
		},
		repeat: -1
	});
};

initMarquees();

 }
import gsap from 'gsap';

const tl = gsap.timeline();

export const preLoaderAnim = () => {
    tl.to('body', {
        duration: 0.1,
        ease: 'power3.inOut',
    })
        .to('loader-container', {
            duration: 1,
            y: 70,
            skewY: -20,
            stagger: 0.2,
            ease: 'Power3.easeOut',
        })
        .to('body', {
            duration: 0.1,
            ease: 'power3.inOut',
        })
        .from('.landing__top', {
            duration: 1,
            opacity: 0,
            y: 80,
            ease: 'expo.easeOut',
        })
        .to(
            '.preloader',
            {
                duration: 1.2,
                height: '0vh',
                ease: 'Power3.easeOut',
            },
            '-=2'
        )
        .to('.preloader', {
            duration: 0,
            css: { display: 'none' },
        });
};

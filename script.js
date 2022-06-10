const TL = gsap.timeline({
    repeat: -1,
}

)

TL
    .to('.movingTxt p', {
        autoAlpha: 1,
        stagger: 1
    })
    .to('.movingTxt p', {
        autoAlpha: 0,
        y: -100,
        stagger: 1
    }, 1)
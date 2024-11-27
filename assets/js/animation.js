anime({
    targets: '.content .item',
    top: [1000, 0],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(500),
    easing: 'easeOutSine'
})

anime({
    targets: '.menu',
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: 3000,
    easing: 'easeOutSine'
})


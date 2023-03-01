const FIREFLIES = 20;
const maxHeight = 1020;
const maxWidth = 1366;
const colors = ['yellow', 'red', 'green', 'blue', 'purple']

const random = (min, max) => {
    return Math.floor(Math.random() * ( max - min ) + min);
}
for(var i = 0; i <= FIREFLIES; i++) {
    // Get the canvas element
    const canvas = document.querySelector('.canvas');

    for(var j = 0; j < colors.length; j++){    
        // Create a new div element
        const div = document.createElement('div');

        // Add the class name color to the new div element
        div.classList.add(colors[j]);
        // Insert the new div element into the canvas element
        canvas.appendChild(div);
    }
}
for(var c = 0; c < colors.length; c++){
    var fireflies = document.querySelectorAll('.'+colors[c]);
    for(var i = 0; i < FIREFLIES; i++) {
        let ix = random(-10, maxWidth+10);
        let fx = random(-10, maxWidth+10);
        
        let iy = random(-10, maxHeight+10);
        let fy = random(-10, maxHeight+10);

        gsap.fromTo(fireflies[i], {
            x: ix,
            y: iy,
        }, {
            x: fx,
            y: fy,
            duration: random(5, 15),
            // ease: "slow (0.7, 0.7, false)",
            ease: "rough ({template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp:false})",
            repeat: -1,
            yoyo: true,
        });
        gsap.fromTo(fireflies[i], {
        }, {
            duration: random(2, 4),
            ease: "slow (0.7, 0.7, false)",
            repeat: -1,
            yoyo: true,
        });
        gsap.fromTo(fireflies[i], {
            opacity: 0,
        }, {
            duration: random(1, 5),
            opacity: 0.9,
            repeat: -1,
            yoyo: true,
        })
    };
}


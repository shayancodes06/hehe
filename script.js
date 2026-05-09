// Add the names of your photos here! Make sure they end in .jpeg exactly as written
const sequenceData = [
    {
        text: "Prettiest women i know...🤭💗",
        btnText: "Pop another baloon/gift box",
        img: "pic1.jpeg" 
    },
    {
        text: "love being by ur sidee...🌺🥹",
        btnText: "Pop another ballon/gift box",
        img: "pic2.jpeg"
    },
    {
        text: "such a cutie, thanks for supporting me 💌",
        btnText: "pop another baloon or gift box",
        img: "pic3.jpeg"
    },
    {
        text: "best memory: our lil night walk+ yap sessions🫶🏻",
        btnText: "pop another baloon or gift box",
        img: "pic4.jpeg"
    },
    {
        text: "love u bohot saaaraaaa😽😽😽😽",
        btnText: "See final surprise ✨",
        img: "pic5.jpeg"
    }
];

let currentStep = 0;

// Move between screens
function nextScreen(hideId, showId) {
    document.getElementById(hideId).classList.add('hidden');
    
    setTimeout(() => {
        document.getElementById(showId).classList.remove('hidden');
        
        if(showId === 'screen-2') {
            triggerLoadingScreen();
        }
    }, 500);
}

// Show the loading texts one by one
function triggerLoadingScreen() {
    const texts = document.querySelectorAll('.load-text');
    let delay = 500;

    texts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.remove('hidden-text');
        }, delay);
        delay += 1000; 
    });

    setTimeout(() => {
        document.getElementById('us-pic').classList.remove('hidden-text');
        document.getElementById('continue-btn').classList.remove('hidden-text');
    }, delay + 500);
}

// Pop a balloon and show the modal
function popBalloon(element) {
    element.classList.add('pop-anim');
    
    setTimeout(() => {
        const data = sequenceData[currentStep];
        
        document.getElementById('memory-text').innerText = data.text;
        document.getElementById('modal-btn').innerText = data.btnText;
        document.getElementById('memory-img').src = data.img;
        
        document.getElementById('memory-modal').classList.remove('hidden');
    }, 300);
}

// Close the modal and check if we go to the final screen
function closeModal() {
    document.getElementById('memory-modal').classList.add('hidden');
    
    currentStep++; 
    
    // Final screen logic + Background Swap
    if (currentStep >= 5) {
        setTimeout(() => {
            nextScreen('screen-3', 'screen-4');
            
            // Swap to the big pink hearts background
            const mainContainer = document.querySelector('.heart-background-container');
            const whiteBox = document.querySelector('.content-box-design');
            
            mainContainer.style.backgroundImage = "url('bg_final.jpeg')";
            mainContainer.style.backgroundSize = "cover";
            
            // Make the white box disappear
            whiteBox.style.background = "transparent";
            whiteBox.style.boxShadow = "none";
            
        }, 500);
    }
}
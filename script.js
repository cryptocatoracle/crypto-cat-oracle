const catAnswers = [
  // Original responses
  "*purrrr* Meowster, my whiskers sense a bullish pattern... nyaa~",
  "Mrow! My crystal litterbox shows green candles in your future... *licks paw*",
  "Nyaa~ Have you tried turning it off and on again? Works for my automatic food dispenser, meow!",
  "Mrrrow... According to my ancient cat scrolls... *knocks scrolls off table* Oops!",
  "Meow meow! HODL like you hold onto your favorite cardboard box!",

  // Investment Advice
  "Nyaa~ The best investment is in premium catnip futures, trust meow!",
  "*bats at screen* These red candles look like laser pointers, must catch!",
  "Purrr... Diversify your portfolio like I diversify my napping spots!",
  "Meow-financial advice: Never invest more treats than you can afford to lose!",
  "My whiskers detect a purr-fect buying opportunity... or maybe it's dinner time.",

  // Market Analysis
  "*sharpens claws* The bear market can't scratch these diamond paws, nyaa!",
  "Mrow! My tail technical analysis indicates an upward trend... or I'm just happy.",
  "According to my cat-culations, the resistance level is right where my treat jar sits.",
  "Nyanya~ The market sentiment is as unpredictable as my 3 AM zoomies!",
  "Pspspsp... Want to know when to buy? When I knock your coffee off the desk!",

  // Trading Wisdom
  "*grooms self thoughtfully* Time in the market beats timing the market, meow!",
  "Mrrrow... Buy the dip like I dip my paw in your water glass!",
  "Trading tip: Stay as patient as a cat waiting for the red dot!",
  "Nyaa~ The trend is your friend, unless it's a cucumber. Those are scary!",
  "My feline instincts say: HODL like you're holding onto your favorite box!",

  // Technical Analysis
  "*stares at chart* These patterns look like my yarn collection, all tangled up!",
  "Meow! The RSI is as high as my afternoon perch on the bookshelf!",
  "Purrr... The MACD is crossing like I cross your keyboard during meetings!",
  "Nyaa~ The support level is as solid as my afternoon nap schedule!",
  "Chart analysis: Looks like a purr-fect head and shoulders... time for grooming!",

  // Crypto Philosophy
  "*wise cat noises* Decentralization is like having multiple food bowls, nyaa!",
  "Blockchain is like a ball of yarn - one pull affects the whole thing, meow!",
  "Smart contracts are like my daily routine - automatic and purr-dictable!",
  "Mrow! NFTs are like marking your territory, but digital!",
  "Web3 is like a cat's independence - no central authority needed!",

  // Market Predictions
  "*consults crystal litterbox* I see green candles in your future... after my nap!",
  "The next bull run will start exactly when I decide to knock something off your desk!",
  "Nyaa~ Market bottom? That's where I put all the toys I bat under the furniture!",
  "Purrr... The moon mission begins after my evening snack!",
  "My psychic whiskers predict massive gains... or maybe they need grooming.",

  // Risk Management
  "*careful paw steps* Don't put all your treats in one bowl, hooman!",
  "Diversify like I diversify my sleeping spots - everywhere!",
  "Mrow! Keep some dry food for the bear market!",
  "Risk management is like choosing which box to sleep in - always have options!",
  "Never invest more catnip than you can afford to lose, nyaa~",

  // Motivational
  "*stretches confidently* Every red candle is just a discount opportunity!",
  "Patience, young whiskers... The gains will come!",
  "Keep your paws steady and your whiskers alert!",
  "Success comes to those who wait... like waiting for the wet food!",
  "Believe in yourself like I believe in my ability to catch the red dot!",

  // Error Messages
  "Meow-Error 404: Cat wisdom temporarily napping...",
  "*buffering cat noises* Please stand by while I clean my paws...",
  "System purr-formance issues: Too many treats in cache!",
  "Temporary pawse in service - recalibrating whiskers...",
  "Connection to cat wisdom servers temporarily disrupted by yarn distraction...",

  // Random Wisdom
  "*mysterious meow* The answer lies in the ancient cat scrolls... which I shredded.",
  "Have you tried turning it off and on again? Works for my automatic feeder!",
  "When in doubt, take a nap and let the market sort itself out!",
  "The best trading strategy? Be as mysterious as a cat!",
  "Not financial advice, just cat wisdom... now feed me!",
];

const catMemes = [
  // Original Memes
  "https://media.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif",
  "https://media.giphy.com/media/3o7TKECNuyE3fyl8Hu/giphy.gif",
  "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",

  // Crypto Trading Cats
  "https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif",
  "https://media.giphy.com/media/qlvCVH9zprgbJ7Bstg/giphy.gif",
  "https://media.giphy.com/media/H1B3MQqV2kzuCqR3kY/giphy.gif",

  // Mystical Cats
  "https://media.giphy.com/media/3o7TKpxQI3xYShZvj2/giphy.gif",
  "https://media.giphy.com/media/l0MYtNWaJvYqoNXxe/giphy.gif",
  "https://media.giphy.com/media/3o7TKSRNcdPmjp8k4E/giphy.gif",

  // Space Cats
  "https://media.giphy.com/media/l0MYBQd6yPLfjwZ5S/giphy.gif",
  "https://media.giphy.com/media/l0MYBpKd8qC9dEEHC/giphy.gif",
  "https://media.giphy.com/media/l0MYBvxUYZheat8Hu/giphy.gif",

  // Laser Eyes Cats
  "https://media.giphy.com/media/l0MYNbhDQHCvX1Z5K/giphy.gif",
  "https://media.giphy.com/media/l0MYrPd1hJxP1uHVS/giphy.gif",
  "https://media.giphy.com/media/l0MYrR7EqMWLZMKBy/giphy.gif",

  // Magic Cats
  "https://media.giphy.com/media/l0MYrDsRfj3gZkV2M/giphy.gif",
  "https://media.giphy.com/media/l0MYrYPd1hJxP1uHVS/giphy.gif",
  "https://media.giphy.com/media/l0MYrR7EqMWLZMKBy/giphy.gif",

  // Fortune Teller Cats
  "https://media.giphy.com/media/JQXaJaHdd8bVau3oNR/giphy.gif",
  "https://media.giphy.com/media/l0MYrYPd1hJxP1uHVS/giphy.gif",
  "https://media.giphy.com/media/l0MYrR7EqMWLZMKBy/giphy.gif",

  // Wizard Cats
  "https://media.giphy.com/media/3o7TKECNuyE3fyl8Hu/giphy.gif",
  "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
  "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif",

  // Neon Cats
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif",
  "https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif",

  // Hacker Cats
  "https://media.giphy.com/media/l0MYBQd6yPLfjwZ5S/giphy.gif",
  "https://media.giphy.com/media/l0MYBpKd8qC9dEEHC/giphy.gif",
  "https://media.giphy.com/media/l0MYBvxUYZheat8Hu/giphy.gif",
];

function getAnswer() {
  const questionInput = document.getElementById("question");
  const answerContainer = document.getElementById("answer-container");
  const answerElement = document.getElementById("answer");
  const responseMeme = document.getElementById("responseMeme");

  if (!questionInput.value.trim()) {
    alert("Meow! You need to ask something first, nyaa~!");
    return;
  }

  // Hide the answer container first
  answerContainer.classList.add("hidden");
  answerContainer.classList.remove("visible");

  // Show loading state
  questionInput.disabled = true;

  // Simulate cat thinking time with mystical effect
  setTimeout(() => {
    const randomAnswer = catAnswers[Math.floor(Math.random() * catAnswers.length)];
    const randomMeme = catMemes[Math.floor(Math.random() * catMemes.length)];

    answerElement.textContent = randomAnswer;
    responseMeme.src = randomMeme;

    // Show the answer with animation
    answerContainer.classList.remove("hidden");
    setTimeout(() => {
      answerContainer.classList.add("visible");
    }, 10);

    // Re-enable input
    questionInput.disabled = false;
  }, 1500);
}

// Add enter key support
document.getElementById("question").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getAnswer();
  }
});

// Add loading animation
function addLoadingAnimation() {
  const button = document.querySelector(".submit-btn");
  button.innerHTML = "Meow-culating...";
  setTimeout(() => {
    button.innerHTML = "Ask the Cat Oracle";
  }, 1500);
}

// Update button click handler
document.querySelector(".submit-btn").addEventListener("click", function () {
  addLoadingAnimation();
  getAnswer();
});

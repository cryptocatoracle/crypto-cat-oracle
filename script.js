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
];

const catMemes = [
  // Local meme paths
  "images/crypto-cat-1.gif",
  "images/crypto-cat-2.gif",
  "images/crypto-cat-3.gif",
  "images/crypto-cat-4.gif",
  "images/crypto-cat-5.gif",
  "images/crypto-cat-6.gif",
  "images/crypto-cat-7.gif",
  "images/crypto-cat-8.gif",
  "images/crypto-cat-9.gif",
  "images/crypto-cat-10.gif",
  "images/mystical-cat-1.gif",
  "images/mystical-cat-2.gif",
  "images/mystical-cat-3.gif",
  "images/mystical-cat-4.gif",
  "images/mystical-cat-5.gif",
  "images/space-cat-1.gif",
  "images/space-cat-2.gif",
  "images/space-cat-3.gif",
  "images/wizard-cat-1.gif",
  "images/wizard-cat-2.gif",
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

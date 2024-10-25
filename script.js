const catAnswers = [
  "Meow! In my infinite feline wisdom, I see great gains in your future... right after my nap.",
  "According to my crypto whiskers, HODL is the way!",
  "My cat senses tell me to buy high and sell low... wait, that's not right, purrr.",
  "Have you tried turning it off and on again? Works for my automatic food dispenser!",
  "The charts look like my yarn ball after I'm done playing with it.",
  "My crystal litterbox says... time to buy more treats!",
  "Purrfectly speaking, that's a very interesting question.",
  "Let me consult with my fellow crypto cats... *licks paw* ... they agree!",
  "As a wise cat once said: 'Time in the market beats timing the market, meow!'",
  "I see red candles... or maybe that's just my laser pointer.",
  "To the mewn! 🚀",
  "That's above my pay grade in catnip.",
  "Have you considered investing in CATCOIN? It's totally not a thing I just made up.",
  "The answer lies in the ancient cat scrolls... which I accidentally shredded.",
  "My technical analysis shows a purr-fect bull flag forming.",
  "I'm not saying it's aliens, but it's probably aliens... or mice.",
  "Error 404: Cat wisdom temporarily unavailable. Please feed treats to continue.",
  "Do I look like a financial advisor? Because I'm not - I'm a cat!",
  "The crypto gods have spoken... they want more catnip.",
  "That's a secret only cats know, and we're not telling!",
  // ... imagine 480 more funny cat-themed responses here
];

function getAnswer() {
  const questionInput = document.getElementById("question");
  const answerContainer = document.getElementById("answer-container");
  const answerElement = document.getElementById("answer");

  if (!questionInput.value.trim()) {
    alert("Meow! You need to ask something first!");
    return;
  }

  // Hide the answer container first
  answerContainer.classList.add("hidden");

  // Show loading state
  questionInput.disabled = true;

  // Simulate "thinking" time
  setTimeout(() => {
    const randomAnswer = catAnswers[Math.floor(Math.random() * catAnswers.length)];
    answerElement.textContent = randomAnswer;

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

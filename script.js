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
  "*stretches* The chart patterns look like yarn balls today, very bullish!",
  "Meow! These candlesticks remind me of my scratching post patterns!",
  "My whiskers detect a double top formation... or maybe I need more treats.",
  "Nyaa~ The support level is as solid as my favorite cardboard box!",
  "Purrfect timing! The RSI is as low as my food bowl... time to fill up!",
  "*bats at screen* These moving averages are crossing like my midnight zoomies!",
  "According to my cat-nical analysis, the trend is as clear as my empty food bowl!",
  "Mrow! The volume bars look like my tower of knocked-over items!",
  "The MACD is crossing faster than I chase the red dot!",
  "Fibonacci retracements? More like Feline-acci to me, nyaa~!",

  // Market Sentiment
  "*licks paw* Fear and Greed index is showing maximum treats potential!",
  "Market sentiment is as cozy as my favorite sunbathing spot right meow.",
  "The bulls are running like me at 3 AM through your house!",
  "Bears are hibernating, time for cats to play, nyaa~!",
  "My sixth sense says accumulation, but might just be hairball season.",
  "Sentiment analysis shows increased purr volume in the market!",
  "The crowd is as jumpy as me with a cucumber, time to be greedy!",
  "*knocks over lamp* That's my bearish signal for today!",
  "Social media mentions are up like my tail when I'm happy!",
  "Market fear is lower than my interest in vegetables, nyaa~!",

  // Risk Management
  "Diversify like I diversify my sleeping spots, meow!",
  "Stop losses are like my territorial boundaries - non-negotiable!",
  "Risk management is key, just like having multiple escape routes!",
  "Position sizing is like portioning treats - don't eat them all at once!",
  "Always keep some dry powder, like I keep backup treats hidden!",
  "Leverage is as dangerous as a cucumber surprise, use with caution!",
  "Portfolio protection is important as my 9 lives, nyaa~!",
  "Risk/reward ratio should be as balanced as my whiskers!",
  "Don't put all your treats in one bowl, that's my wisdom!",
  "Hedge your bets like I hedge my napping spots!",

  // Trading Psychology
  "*purrs thoughtfully* FOMO is as bad as an empty food bowl!",
  "Stay calm like a cat in a sunbeam during market volatility!",
  "Don't chase pumps like I chase laser pointers - it never ends well!",
  "Patience is key, like waiting for the perfect pouncing moment!",
  "Keep your cool like I do in a cucumber encounter!",
  "Market timing is as tricky as catching your own tail!",
  "Don't get emotional, be as calculated as a cat plotting to knock things over!",
  "Trust your instincts like I trust mine at 3 AM!",
  "Stay focused like a cat watching birds through the window!",
  "Learn from mistakes like I learned about the hot stove!",

  // DeFi Wisdom
  "Smart contracts are like cat contracts - read the fine print!",
  "APY looking higher than my highest climbing spot? Be cautious!",
  "DeFi yields are like catnip - use in moderation!",
  "Liquidity pools are like water bowls - check depth before diving!",
  "Gas fees got you down? Try napping, works for me!",
  "Staking is like claiming your favorite box - commit wisely!",
  "Yield farming? More like treat farming to me!",
  "Protocol risks are like cucumber risks - always be prepared!",
  "Impermanent loss is like when my favorite toy goes missing!",
  "Governance tokens are like having a say in dinner time!",

  // NFT Insights
  "NFTs are like collecting shiny things - very cat-like!",
  "Floor price lower than my belly during stretching? Time to look!",
  "Rare traits are like my unique whisker pattern - valuable!",
  "NFT metadata is like my secret hiding spots - very important!",
  "Mint price higher than my treat allowance? Think twice!",
  "Blue chip NFTs are like premium cat food - worth the investment!",
  "Secondary market is like trading my toys with other cats!",
  "Watch out for NFT rugs like I watch out for vacuum cleaners!",
  "Community is key, like my neighborhood cat friends!",
  "Utility is important, like a box that's also a bed!",

  // Blockchain Technology
  "Proof of Work is like me working hard to knock things over!",
  "Proof of Stake is like claiming my favorite windowsill!",
  "Layer 2 scaling is like having multiple cat trees!",
  "Consensus is like agreeing on dinner time with other cats!",
  "Decentralization is like having multiple food bowls!",
  "Network effects are like cat colony dynamics, nyaa~!",
  "Hash rate is like measuring purrs per minute!",
  "Block time is faster than my reflexes with treats!",
  "Private keys are like my secret napping spots - guard them!",
  "Nodes are like my network of treat sources!",

  // Market Cycles
  "Bull markets are like catnip highs - enjoy responsibly!",
  "Bear markets are like bath time - temporary discomfort!",
  "Accumulation phase is like storing treats for winter!",
  "Distribution phase is like sharing toys (which I never do)!",
  "Market cycles are like my sleep cycles - predictably unpredictable!",
  "Top signals are like my pre-zoomies twitching tail!",
  "Bottom signals are like when I'm done knocking things over!",
  "Ranging markets are like my post-lunch nap - sideways and calm!",
  "Breakouts are like me when the treat bag opens!",
  "Corrections are like when I miss a jump - temporary setback!",

  // Fundamental Analysis
  "Tokenomics are like treat economics - study the distribution!",
  "Team assessment is like checking if humans are treat-generous!",
  "Whitepaper longer than my afternoon nap? Needs simplification!",
  "Community stronger than my cardboard box? Good sign!",
  "Development activity like my 3 AM activity? Bullish!",
  "Partnership announcements make my whiskers tingle!",
  "Token utility clearer than my water bowl? Interesting!",
  "Roadmap as exciting as dinner time? Worth watching!",
  "Market cap smaller than my toy collection? Room to grow!",
  "Competition analysis is like sizing up neighborhood cats!",

  // Trading Strategies
  "Scalping is like catching flies - quick in and out!",
  "Swing trading is like my mood swings - timing is everything!",
  "Day trading is like my daily routine - structured chaos!",
  "HODLing is like guarding my favorite toy!",
  "Dollar cost averaging is like consistent treat portions!",
  "Mean reversion is like returning to my food bowl!",
  "Momentum trading is like chasing the red dot!",
  "Grid trading is like patrolling my territory - systematic!",
  "Arbitrage is like finding treats in multiple rooms!",
  "Position trading is like claiming a sunny spot for hours!",

  // Crypto Ecosystem
  "CEX vs DEX? Like choosing between wet and dry food!",
  "Wallet security is like protecting my treat stash!",
  "Bridge protocols are like cat bridges between trees!",
  "Oracles are like my sixth sense for dinner time!",
  "Governance is like deciding household rules (which I ignore)!",
  "Lending protocols are like borrowing another cat's box!",
  "Insurance protocols are like having nine lives backup!",
  "Gaming tokens are like my interactive toys!",
  "Privacy coins are like my stealth mode at night!",
  "Stablecoins are like my reliable napping spots!",

  // Additional Wisdom
  "DYOR like I investigate new boxes!",
  "Not financial advice, just cat wisdom, nyaa~!",
  "Charts looking like my scratching patterns? Bullish!",
  "Green candles remind me of catnip plants!",
  "Red candles are just discount treats!",
  "Technical indicators crossed like my crossed eyes!",
  "Market cap is just a number, like my lives!",
  "Volatility smoother than my fur after grooming!",
  "Trading volume higher than my purr volume!",
  "Resistance levels are like my jumping limits!",

  // More Trading Psychology
  "Stay curious like a cat with a new box!",
  "Adapt like a cat finding new sunny spots!",
  "Be patient like a cat waiting for treats!",
  "Learn patterns like I learned the treat schedule!",
  "Trust but verify like I test new cat beds!",
  "Stay alert like a cat during cucumber season!",
  "Keep calm like a cat in a paper bag!",
  "Be decisive like choosing nap spots!",
  "Think independently like a cat ignoring commands!",
  "Always land on your feet in volatile markets!",

  // Final Wisdom
  "Success is like catching the red dot - it takes practice!",
  "Markets are like yarn balls - sometimes messy, always interesting!",
  "Investment wisdom is like cat wisdom - mysterious but effective!",
  "Charts are like my tail movements - they tell a story!",
  "Trading is like cat naps - timing is everything!",
  "Market cycles are like my daily routines - predictably unpredictable!",
  "Risk management is like avoiding cucumbers - essential!",
  "Profits are like treats - enjoy them wisely!",
  "Losses are like missed jumps - learn and try again!",
  "Remember: Time in the market beats timing the market, just like nap time beats play time!",
];

const catMemes = [
  "images/cat-2.gif", // Excited cat
  "images/cat-3.gif", // Dancing cat
  "images/cat-4.gif", // Glowing eyes cat
  "images/cat-5.gif", // Space cat
  "images/cat-6.gif", // Moon cat
  "images/cat-7.gif", // Funny cat
  "images/cat-8.gif", // Silly cat
  "images/cat-9.gif", // Party cat
  "images/cat-10.gif", // Neon cat
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

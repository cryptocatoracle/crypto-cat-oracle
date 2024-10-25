#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

cd images

# Download funny cat memes
curl -o cat-1.gif "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif"
curl -o cat-2.gif "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
curl -o cat-3.gif "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"
curl -o cat-4.gif "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
curl -o cat-5.gif "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
curl -o cat-6.gif "https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif"
curl -o cat-7.gif "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif"
curl -o cat-8.gif "https://media.giphy.com/media/33OrjzUFwkwEg/giphy.gif"
curl -o cat-9.gif "https://media.giphy.com/media/q1MeAPDDMb43K/giphy.gif"
curl -o cat-10.gif "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"

echo "Images downloaded successfully!"

#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

cd images

# Download crypto cat themed GIFs
wget -O crypto-cat-1.gif "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDN2Y3E2ZWR1Y2NxbXgxOHd4ZnBxbWR0Y2Zwd2VqcXBxeGN3YnFtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JtBZm3Getg3dqxK0zP/giphy.gif"
wget -O crypto-cat-2.gif "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDN2Y3E2ZWR1Y2NxbXgxOHd4ZnBxbWR0Y2Zwd2VqcXBxeGN3YnFtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qlvCVH9zprgbJ7Bstg/giphy.gif"
wget -O crypto-cat-3.gif "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDN2Y3E2ZWR1Y2NxbXgxOHd4ZnBxbWR0Y2Zwd2VqcXBxeGN3YnFtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H1B3MQqV2kzuCqR3kY/giphy.gif"

# Download mystical cat themed GIFs
wget -O mystical-cat-1.gif "https://media.giphy.com/media/3o7TKpxQI3xYShZvj2/giphy.gif"
wget -O mystical-cat-2.gif "https://media.giphy.com/media/l0MYtNWaJvYqoNXxe/giphy.gif"
wget -O mystical-cat-3.gif "https://media.giphy.com/media/3o7TKSRNcdPmjp8k4E/giphy.gif"

# Download space cat themed GIFs
wget -O space-cat-1.gif "https://media.giphy.com/media/l0MYBQd6yPLfjwZ5S/giphy.gif"
wget -O space-cat-2.gif "https://media.giphy.com/media/l0MYBpKd8qC9dEEHC/giphy.gif"
wget -O space-cat-3.gif "https://media.giphy.com/media/l0MYBvxUYZheat8Hu/giphy.gif"

# Download wizard cat themed GIFs
wget -O wizard-cat-1.gif "https://media.giphy.com/media/3o7TKECNuyE3fyl8Hu/giphy.gif"
wget -O wizard-cat-2.gif "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"

echo "Images downloaded successfully!"

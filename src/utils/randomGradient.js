// src/utils/randomGradient.js
export const getRandomGradient = () => {
    const gradients = [
      "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
      "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500",
      "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
      "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
      "bg-gradient-to-r from-red-400 via-pink-500 to-purple-500",
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };
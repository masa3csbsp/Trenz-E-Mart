// src/utils/aiHelpers.js

// 🔍 Mock Image Analysis (stub function — replace with real API later if needed)
export const analyzeImage = async (imageFile) => {
  // Example logic based on image filename
  if (imageFile.name.toLowerCase().includes("beach")) {
    return [
      { name: "Beach Shorts", price: 699, image: "/assets/beachwear.jpg" },
      { name: "Flip-Flops", price: 299, image: "/assets/flipflops.jpg" },
    ];
  } else if (imageFile.name.toLowerCase().includes("formal")) {
    return [
      { name: "Formal Blazer", price: 1999, image: "/assets/blazer.jpg" },
      { name: "White Shirt", price: 899, image: "/assets/white-shirt.jpg" },
    ];
  }

  // Default fallback recommendations
  return [
    { name: "Blue Summer Dress", price: 999, image: "/assets/blue-dress.jpg" },
    { name: "Beachwear White Set", price: 1299, image: "/assets/beachwear.jpg" },
  ];
};
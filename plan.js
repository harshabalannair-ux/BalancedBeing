const nutritionData = {
  Vata: {
    foods: ["Warm soups", "Cooked grains", "Root vegetables"],
    avoid: ["Cold salads", "Dry crackers", "Carbonated drinks"],
    routine: "Regular meals, warm oil massage, early bedtime."
  },
  Pitta: {
    foods: ["Cooling fruits", "Leafy greens", "Milk"],
    avoid: ["Spicy foods", "Alcohol", "Fried items"],
    routine: "Stay cool, avoid midday sun, practice calming yoga."
  },
  Kapha: {
    foods: ["Light grains", "Spices like ginger", "Legumes"],
    avoid: ["Heavy dairy", "Excess sweets", "Fried foods"],
    routine: "Daily exercise, avoid daytime naps, eat light dinners."
  }
};

const dosha = localStorage.getItem
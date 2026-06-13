document.getElementById('submitQuiz').addEventListener('click', () => {
  const form = document.getElementById('quizForm');
  const answers = new FormData(form);

  let scores = { Vata: 0, Pitta: 0, Kapha: 0 };
  for (let [q, value] of answers.entries()) { scores[value]++; }

  let dominantDosha = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  localStorage.setItem('dominantDosha', dominantDosha);

  document.getElementById('result').innerHTML = `
    <h3>Your Dominant Dosha: ${dominantDosha}</h3>
    <p>${getDoshaDescription(dominantDosha)}</p>
    <a href="nutrition-plan.html" class="btn">Generate Nutrition Plan</a>
  `;
});

function getDoshaDescription(dosha) {
  switch(dosha) {
    case 'Vata': return 'Creative, energetic, but prone to irregular digestion and sleep.';
    case 'Pitta': return 'Focused, strong digestion, but may be prone to irritability.';
    case 'Kapha': return 'Calm, grounded, with deep sleep but slower metabolism.';
    default: return '';
  }
}

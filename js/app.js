/* Variables
-------------------------------------------------- */
// Create arrays of words that will be used to build the story
var nouns = ["cat", "dog", "bird", "tree", "car"];
var verbs = ["runs", "jumps", "flies", "swims", "drives"];
var adjectives = ["happy", "sad", "angry", "tall", "short"];
var places = ["park", "beach", "forest", "city", "mountain"];
var settings = ["setting1", "setting2", "setting3"];

var textToSpeak = "";
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Onclick handler for the buttons to pick a random word
document.getElementById('T1').onclick = function () {
  textToSpeak = nouns[Math.floor(Math.random() * nouns.length)];
  updateStoryLabel();
}

document.getElementById('T2').onclick = function () {
  textToSpeak = textToSpeak + " " + verbs[Math.floor(Math.random() * verbs.length)];
  updateStoryLabel();
}

document.getElementById('T3').onclick = function () {
  textToSpeak = textToSpeak + " " + adjectives[Math.floor(Math.random() * adjectives.length)];
  updateStoryLabel();
}

document.getElementById('T4').onclick = function () {
  textToSpeak = textToSpeak + " " + places[Math.floor(Math.random() * places.length)];
  updateStoryLabel();
}

document.getElementById('T5').onclick = function () {
  textToSpeak = textToSpeak + " " + settings[Math.floor(Math.random() * settings.length)];
  updateStoryLabel();
}
/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text',
  synth.speak(utterThis);
}
/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
document.getElementById('b6').onclick = function () {
  speakNow(textToSpeak);
}
// Onclick handler for the button to generate a story with one click
document.getElementById('generateStoryButton').onclick = function () {
  var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  var randomPlace = places[Math.floor(Math.random() * places.length)];

  var generatedStory = randomNoun + " " + randomVerb + " " + randomAdjective + " " + randomPlace;
  textToSpeak = generatedStory;
  updateStoryLabel();
  speakNow(generatedStory);
}
// Onclick handler for the button to reset the story
document.getElementById('resetButton').onclick = function () {
  textToSpeak = "";
  updateStoryLabel();
}

function updateStoryLabel() {
  document.getElementById('storyLabel').textContent = textToSpeak;
}

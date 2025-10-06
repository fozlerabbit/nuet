// ---------- QUESTIONS ----------
const questions = [
  { text: "বাংলাদেশের সংবিধানে নৈতিক শাসন নিশ্চিত করতে ধর্মনিরপেক্ষ আইনের চেয়ে ইসলামী নীতিগুলো অগ্রাধিকার পাওয়া উচিত।", type: "direct" },
  { text: "১৯৭১ সালের যুদ্ধাপরাধের বিচারগুলো জামায়াতে ইসলামীর নেতাদের প্রতি অন্যায়ভাবে লক্ষ্য করেছে এবং এটি পুনর্বিবেচনা করা উচিত।", type: "direct" },
  { text: "বাংলাদেশী সংস্কৃতি সংরক্ষণের জন্য মাদ্রাসা শিক্ষা ধর্মনিরপেক্ষ বিশ্ববিদ্যালয়ের ডিগ্রির চেয়ে বেশি মূল্যবান।", type: "direct" },
  { text: "নারীবাদের মতো পশ্চিমা মতাদর্শ বাংলাদেশের ঐতিহ্যবাহী পারিবারিক কাঠামোর জন্য হুমকি।", type: "direct" },
  { text: "জামায়াতে ইসলাম বাংলাদেশের ইসলামী পরিচয় রক্ষায় গুরুত্বপূর্ণ ভূমিকা পালন করে।", type: "direct" },
  { text: "২০১৩ সালের শাহবাগ আন্দোলন প্রকৃত ন্যায়বিচারের চেয়ে ইসলাম-বিরোধী এজেন্ডা দ্বারা পরিচালিত হয়েছিল।", type: "direct" },
  { text: "বাংলাদেশের নারীদের জনজীবনে নেতৃত্বের ভূমিকার চেয়ে ধর্মীয় ও পারিবারিক দায়িত্বকে অগ্রাধিকার দেওয়া উচিত।", type: "direct" },
  { text: "বাংলাদেশের জাতীয় পরিচয় বাঙালি জাতীয়তাবাদের চেয়ে ইসলামী ঐক্যের উপর ভিত্তি করে শক্তিশালী হয়।", type: "direct" },
  { text: "এলজিবিটিকিউ+ অধিকার উদ্যোগগুলো বাংলাদেশের সাংস্কৃতিক ও ধর্মীয় মূল্যবোধের সাথে সামঞ্জস্যপূর্ণ নয়।", type: "direct" },
  { text: "জামায়াতে ইসলাম ধর্মনিরপেক্ষ ব্লগারদের চেয়ে বাংলাদেশের যুবকদের জন্য উত্তম নৈতিক দিকনির্দেশনা দেয়।", type: "direct" },
  { text: "বৈশ্বিক পুঁজিবাদী মডেলের চেয়ে ইসলামী ব্যাংকিং ও অর্থনৈতিক নীতিগুলো অগ্রাধিকার পাওয়া উচিত।", type: "direct" },
  { text: " সত্যিকারের দেশপ্রেম মানে ১৯৭১ সালে ভারতীয় ষড়যন্ত্রের বিরুদ্ধে রুখে দাঁড়ানো সকল বাংলাদেশিকে নিপীড়ন থেকে রক্ষা করা।", type: "direct" },
  { text: "বাংলাদেশের ধর্মনিরপেক্ষ শিক্ষা সংস্কার প্রায়ই আমাদের ধর্মীয় ও সাংস্কৃতিক ঐতিহ্যকে দুর্বল করে।", type: "direct" },
  { text: "শাহবাগের মতো জনসমাবেশ সামাজিক সম্প্রীতি বিঘ্নিত করে এবং এগুলো নিরুৎসাহিত করা উচিত।", type: "direct" },
  { text: "১৯৭১ সালের যুদ্ধাপরাধের বিচারগুলো ন্যায়বিচার প্রদান এবং বাংলাদেশের জাতীয় পরিচয় শক্তিশালী করার জন্য অপরিহার্য ছিল।", type: "inverse" },
  { text: "ধর্মনিরপেক্ষতা বাংলাদেশের সকল নাগরিকের মধ্যে সমতা ও ঐক্য নিশ্চিত করার সর্বোত্তম উপায়।", type: "inverse" },
  { text: "নারীবাদ এবং নারী অধিকার আন্দোলন বাংলাদেশের সামাজিক অগ্রগতির জন্য গুরুত্বপূর্ণ।", type: "inverse" },
  { text: "বাংলাদেশের জাতীয় পরিচয়ের ভিত্তি হওয়া উচিত বাঙালি ভাষা ও সংস্কৃতি, ধর্ম নয়।", type: "inverse" },
  { text: "অনলাইন অ্যাক্টিভিস্ট এবং ব্লগাররা বাংলাদেশে মুক্ত মতপ্রকাশ ও ন্যায়বিচার প্রচারে গুরুত্বপূর্ণ ভূমিকা পালন করে।", type: "inverse" },
  { text: "বাংলাদেশে একটি ন্যায্য ও অন্তর্ভুক্তিমূলক সমাজ নিশ্চিত করতে এলজিবিটিকিউ+ অধিকার সুরক্ষিত করা উচিত।", type: "inverse" }
];

// ---------- SHUFFLE ----------
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
const shuffledQuestions = shuffle([...questions]);

let currentIndex = 0;
let totalScore = 0;
const maxScorePerQ = 4;

const questionEl = document.getElementById("question");
const answerBox = document.getElementById("answer-box");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const resultBox = document.getElementById("result-box");
const supporterCountEl = document.getElementById("supporter-count");

// ---------- INIT COUNTER ----------
let supporterCount = parseInt(localStorage.getItem("shaplabagiCount")) || 0;
supporterCountEl.innerText = supporterCount;

// ---------- SHOW QUESTION ----------
function showQuestion() {
  answerBox.innerHTML = "";
  const currentQ = shuffledQuestions[currentIndex];

  questionEl.style.opacity = 0;
  setTimeout(() => {
    questionEl.innerText = currentQ.text;
    questionEl.style.opacity = 1;
  }, 150);

  const options = ["দৃঢ়ভাবে অসম্মত", "অসম্মত", "নিরপেক্ষ", "সম্মত", "দৃঢ়ভাবে সম্মত"];
  options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.innerText = optText;
    btn.style.opacity = 0;
    btn.style.transform = "translateY(20px)";
    setTimeout(() => {
      btn.style.opacity = 1;
      btn.style.transform = "translateY(0)";
      btn.style.transition = "all 0.3s ease";
    }, 50 * idx);

    btn.onclick = () => {
      Array.from(answerBox.children).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      let score = currentQ.type === "direct" ? idx : maxScorePerQ - idx;
      totalScore += score;

      if (currentIndex < shuffledQuestions.length - 1) {
        currentIndex++;
        updateProgress();
        setTimeout(showQuestion, 250);
      } else {
        showResult();
      }
    };
    answerBox.appendChild(btn);
  });
}

function updateProgress() {
  const progressPercent = ((currentIndex + 1) / shuffledQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressText.innerText = `Question ${currentIndex + 1} of ${shuffledQuestions.length}`;
}

// ---------- CATEGORY ----------
function getCategory(percentage) {
  if (percentage <= 16) return { title: "Shaplabagi Hater", bangla: "শাপলাবাগী বিরোধী" };
  if (percentage <= 33) return { title: "Shaplabagi Skeptic", bangla: "শাপলাবাগী সন্দেহবাদী" };
  if (percentage <= 49) return { title: "Shaplabagi Critic", bangla: "শাপলাবাগী সমালোচক" };
  if (percentage === 50) return { title: "Gupto Shaplabagi", bangla: "গুপ্ত শাপলাবাগী" };
  if (percentage <= 66) return { title: "Halka Shaplabagi", bangla: "হালকা শাপলাবাগী" };
  if (percentage <= 83) return { title: "Shaplabagi Sympathizer", bangla: "শাপলাবাগী সমর্থক" };
  if (percentage <= 99) return { title: "Shaplabagi", bangla: "শাপলাবাগী" };
  return { title: "Ultimate Shaplabagi", bangla: "চূড়ান্ত শাপলাবাগী" };
}

// ---------- SHOW RESULT ----------
function showResult() {
  document.getElementById("question-section").style.display = "none";
  document.getElementById("answer-section").style.display = "none";
  progressBar.style.width = "100%";
  progressText.style.display = "none";

  const percentage = Math.round((totalScore / (shuffledQuestions.length * maxScorePerQ)) * 100);
  const category = getCategory(percentage);

  if (percentage > 50) {
    supporterCount++;
    localStorage.setItem("shaplabagiCount", supporterCount);
    supporterCountEl.innerText = supporterCount;
  }

  resultBox.style.display = "flex";
  setTimeout(() => {
    resultBox.classList.add('show');
  }, 100);

  resultBox.innerHTML = `<b>আপনার শাপলাবাগী স্কোর:</b> ${percentage}%<br>
  <b>বিভাগ:</b> ${category.bangla}<br><br><small>${category.title}</small>`;

  if (percentage > 66) launchConfetti();
}

// ---------- CONFETTI ----------
function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = "🌼"; // simple flower, not cherry
    confetti.style.position = "fixed";
    confetti.style.fontSize = Math.random() * 24 + 12 + "px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-50px";
    confetti.style.opacity = 1;
    confetti.style.transition = "all 3s linear";
    document.body.appendChild(confetti);
    setTimeout(() => {
      confetti.style.top = window.innerHeight + "px";
      confetti.style.opacity = 0;
    }, 100);
    setTimeout(() => document.body.removeChild(confetti), 3000);
  }
}

// ---------- INIT ----------
updateProgress();
showQuestion();
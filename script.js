/* ============================================================
   أذكاري — أذكار الصباح والمساء والنوم + السُبحة + الاستغفار
   ============================================================ */

/* ---------- التوست ---------- */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ---------- بيانات الأذكار ---------- */
const adhkarData = {
  morning: [
    { text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", count: 1 },
    { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ", count: 1 },
    { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ", count: 1 },
    { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", count: 1 },
    { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا", count: 1 },
    { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", count: 3 },
    { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا", count: 3 },
    { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count: 100 },
    { text: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", count: 10 }
  ],

  evening: [
    { text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", count: 1 },
    { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا", count: 1 },
    { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ", count: 1 },
    { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", count: 1 },
    { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", count: 3 },
    { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا", count: 3 },
    { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count: 100 },
    { text: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", count: 10 }
  ],

  sleep: [
    { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", count: 1 },
    { text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ", count: 3 },
    { text: "سُبْحَانَ اللَّهِ", count: 33 },
    { text: "الْحَمْدُ لِلَّهِ", count: 33 },
    { text: "اللَّهُ أَكْبَرُ", count: 34 },
    { text: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ", count: 1 },
    { text: "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ", count: 1 }
  ]
};

/* ---------- التنقل بين التبويبات ---------- */
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

/* ---------- إنشاء كروت الأذكار ---------- */
function buildCards(sectionKey, containerId, progressId, progressTextId) {
  const container = document.getElementById(containerId);
  const progress = document.getElementById(progressId);
  const progressText = document.getElementById(progressTextId);
  const list = adhkarData[sectionKey];
  const state = {};

  function updateProgress() {
    if (!progress || !progressText) return;
    const done = Object.keys(state).filter(k => state[k] >= list[k].count).length;
    const pct = (done / list.length) * 100;
    progress.style.width = pct + "%";
    progressText.textContent = `${done} / ${list.length}`;
  }

  list.forEach((dhikr, i) => {
    state[i] = 0;

    const card = document.createElement("div");
    card.className = "card";

    const p = document.createElement("p");
    p.className = "card-text";
    p.textContent = dhikr.text;

    const meta = document.createElement("div");
    meta.className = "card-meta";

    const countLabel = document.createElement("span");
    countLabel.className = "card-count";
    countLabel.textContent = `التكرار: ${dhikr.count}`;

    const btnWrap = document.createElement("div");
    btnWrap.className = "card-btns";

    const resetBtn = document.createElement("button");
    resetBtn.className = "reset-btn";
    resetBtn.innerHTML = "↺";
    resetBtn.title = "إعادة";

    const countBtn = document.createElement("button");
    countBtn.className = "count-btn";
    countBtn.textContent = "تسبيح 0";

    btnWrap.appendChild(resetBtn);
    btnWrap.appendChild(countBtn);
    meta.appendChild(countLabel);
    meta.appendChild(btnWrap);
    card.appendChild(p);
    card.appendChild(meta);
    container.appendChild(card);

    countBtn.addEventListener("click", () => {
      if (state[i] < dhikr.count) {
        state[i]++;
        countBtn.textContent = `تسبيح ${state[i]}`;
        if (state[i] >= dhikr.count) {
          card.classList.add("done");
          countBtn.classList.add("finished");
          countBtn.textContent = "✓ تم بحمد الله";
          showToast("أحسنتِ! أتممتِ هذا الذكر 🌸");
        }
        updateProgress();
      }
    });

    resetBtn.addEventListener("click", () => {
      state[i] = 0;
      countBtn.textContent = "تسبيح 0";
      card.classList.remove("done");
      countBtn.classList.remove("finished");
      updateProgress();
    });
  });

  updateProgress();
}

buildCards("morning", "morningCards", "mProgress", "mProgressText");
buildCards("evening", "eveningCards", "eProgress", "eProgressText");
buildCards("sleep", "sleepCards", null, null);

/* ---------- السُبحة الإلكترونية ---------- */
const beadTrack = document.getElementById("beadTrack");
const tasbihBtn = document.getElementById("tasbihBtn");
const tasbihCountEl = document.getElementById("tasbihCount");
const currentDhikrEl = document.getElementById("currentDhikr");
const tasbihTarget = document.getElementById("tasbihTarget");
const tasbihReset = document.getElementById("tasbihReset");
const dhikrChips = document.querySelectorAll(".dhikr-chip");

let tasbihCount = 0;
let currentDhikr = "سُبْحَانَ اللَّهِ";
const BEADS = 20;
let litIndex = 0;

/* رسم الخرزات حول دائرة */
for (let i = 0; i < BEADS; i++) {
  const angle = (i / BEADS) * Math.PI * 2 - Math.PI / 2;
  const radius = 140;
  const bead = document.createElement("div");
  bead.className = "bead";
  bead.style.left = `calc(50% + ${Math.cos(angle) * radius}px)`;
  bead.style.top = `calc(50% + ${Math.sin(angle) * radius}px)`;
  beadTrack.appendChild(bead);
}
const beads = beadTrack.querySelectorAll(".bead");

function updateBeads() {
  beads.forEach((b, i) => b.classList.toggle("lit", i === litIndex));
}

function doTasbih() {
  tasbihCount++;
  tasbihCountEl.textContent = tasbihCount;
  litIndex = (litIndex + 1) % BEADS;
  updateBeads();

  tasbihBtn.classList.remove("pulse");
  void tasbihBtn.offsetWidth;
  tasbihBtn.classList.add("pulse");

  const target = parseInt(tasbihTarget.value, 10);
  if (tasbihCount === target) {
    showToast(`ما شاء الله! أتممتِ ${target} 🤍`);
    if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
  }
}

tasbihBtn.addEventListener("click", doTasbih);

dhikrChips.forEach(chip => {
  chip.addEventListener("click", () => {
    dhikrChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentDhikr = chip.dataset.dhikr;
    currentDhikrEl.textContent = currentDhikr;
    tasbihCount = 0;
    tasbihCountEl.textContent = "0";
    litIndex = 0;
    updateBeads();
  });
});

tasbihReset.addEventListener("click", () => {
  tasbihCount = 0;
  tasbihCountEl.textContent = "0";
  litIndex = 0;
  updateBeads();
  showToast("تم تصفير السُبحة ↺");
});

updateBeads();

/* ---------- الاستغفار ---------- */
const istighfarBtn = document.getElementById("istighfarBtn");
const istighfarCountEl = document.getElementById("istighfarCount");
const istighfarReset = document.getElementById("istighfarReset");
const istighfarSave = document.getElementById("istighfarSave");
const savedNote = document.getElementById("savedNote");

let istighfarCount = parseInt(localStorage.getItem("istighfarTotal") || "0", 10);
istighfarCountEl.textContent = istighfarCount;
const sessionStart = istighfarCount;
let sessionAdded = 0;

istighfarBtn.addEventListener("click", () => {
  istighfarCount++;
  sessionAdded++;
  istighfarCountEl.textContent = istighfarCount;
  istighfarBtn.classList.remove("pulse");
  void istighfarBtn.offsetWidth;
  istighfarBtn.classList.add("pulse");
  if (istighfarCount % 100 === 0) {
    showToast(`ما شاء الله! ${istighfarCount} استغفارة 🤍`);
    if (navigator.vibrate) navigator.vibrate([80, 50, 80]);
  }
});

istighfarReset.addEventListener("click", () => {
  istighfarCount = 0;
  sessionAdded = 0;
  istighfarCountEl.textContent = "0";
  showToast("تم تصفير العداد ↺");
});

istighfarSave.addEventListener("click", () => {
  localStorage.setItem("istighfarTotal", istighfarCount);
  savedNote.textContent = `✓ تم حفظ المجموع: ${istighfarCount}`;
  setTimeout(() => (savedNote.textContent = ""), 3000);
});

/* ---------- الوضع الليلي ---------- */
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeBtn.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("theme", dark ? "dark" : "light");
});

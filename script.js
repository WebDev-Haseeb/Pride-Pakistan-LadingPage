let navToggle = document.getElementsByClassName("nav-toggle")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];
let heroContent = document.getElementsByClassName('hero-content')[0];

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navToggle.classList.toggle("active");

  if (navLinks.classList.contains('active')) {
    heroContent.classList.add('dimmed');
  } else {
    heroContent.classList.remove('dimmed');
  }
})

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const regionButtons = document.querySelectorAll('.region-btn');
  const regionData = {
    punjab: {
      name: "Punjab",
      description: "Known for its vibrant bhangra dance, colorful truck art, and delicious cuisine including sarson ka saag and makki di roti.",
      capital: "Lahore",
      landmark: "Badshahi Mosque",
      dress: "Shalwar Kameez with Turban",
      festival: "Basant",
      fact: "Punjab is home to five rivers: Sutlej, Beas, Ravi, Chenab, and Jhelum, which give the region its name 'Punjab' meaning 'land of five rivers'.",
      image: "./images/punjab-culture.jpg"
    },
    sindh: {
      name: "Sindh",
      description: "Famous for its Ajrak cloth, Sindhi embroidery, and the ancient Indus Valley Civilization sites like Mohenjo-daro.",
      capital: "Karachi",
      landmark: "Mohatta Palace",
      dress: "Ajrak and Topi",
      festival: "Sindhi Topi Day",
      fact: "Sindh is home to the world's largest irrigation system, the Indus Basin Irrigation System.",
      image: "./images/sindh-culture.jpg"
    },
    balochistan: {
      name: "Balochistan",
      description: "Known for its vast deserts, rugged mountains, and rich cultural heritage, including Balochi music and handicrafts.",
      capital: "Quetta",
      landmark: "Ziarat Juniper Forest",
      dress: "Shalwar Kameez and Turban for men, Shalwar Kameez for women",
      festival: "Kalash Festival",
      fact: "Balochistan is Pakistan's largest province, sharing borders with Iran and Afghanistan.",
      image: "./images/balochistan-culture.jpg"
    },
    kpk: {
      name: "Khyber Pakhtunkhwa",
      description: "Renowned for its historical significance, breathtaking landscapes, and Pashtun culture with its warm hospitality.",
      capital: "Peshawar",
      landmark: "Khyber Pass",
      dress: "Shalwar Kameez and Waistcoat for men, Shalwar Kameez for women",
      festival: "Basant",
      fact: "KPK is home to the ancient Gandhara civilization and shares a border with Afghanistan.",
      image: "./images/kpk-culture.jpg"
    },
    gilgit: {
      name: "Gilgit-Baltistan",
      description: "A paradise for adventure enthusiasts, offering stunning mountain peaks like K2, glaciers, and serene lakes.",
      capital: "Gilgit",
      landmark: "K2 Mountain",
      dress: "Shalwar Kameez and Cap for men, Shalwar Kameez for women",
      festival: "Hunza Festival",
      fact: "Gilgit-Baltistan is known as the 'Roof of the World' due to its high altitude.",
      image: "./images/gilgit-culture.jpg"
    }
  };


  function updateRegionInfo(region) {
    const data = regionData[region];
    document.getElementById('region-name').textContent = data.name;
    document.getElementById('region-description').textContent = data.description;
    document.getElementById('region-capital').textContent = data.capital;
    document.getElementById('region-landmark').textContent = data.landmark;
    document.getElementById('region-dress').textContent = data.dress;
    document.getElementById('region-festival').textContent = data.festival;
    document.getElementById('region-fact').textContent = data.fact;
    document.getElementById('region-image').src = data.image;
  }

  regionButtons.forEach(button => {
    button.addEventListener('click', function () {
      regionButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      updateRegionInfo(this.dataset.region);
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const regionTabs = document.querySelectorAll('.linguistics-region-tab');
  const regionInfos = document.querySelectorAll('.linguistics-region-info');

  regionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const region = tab.getAttribute('data-region');
      
      regionTabs.forEach(t => t.classList.remove('active'));
      regionInfos.forEach(info => info.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(`${region}-info`).classList.add('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressBar = document.getElementById('progressBar');
  const urduLyrics = document.getElementById('urduLyrics');
  const englishLyrics = document.getElementById('englishLyrics');
  
  const audio = new Audio('./national-anthem.mp3'); // Replace with actual path
  let isPlaying = false;
  
  const lyrics = [
    {
        urdu: "پاک سرزمین شاد باد",
        english: "Blessed be the sacred land",
        time: 3
    },
    {
        urdu: "کشورِ حسین شاد باد",
        english: "Happy be the bounteous realm",
        time: 8
    },
    {
        urdu: "تُو نشانِ عزمِ عالی شان",
        english: "Thou symbol of high resolve",
        time: 13
    },
    {
        urdu: "ارضِ پاکستان!",
        english: "Land of Pakistan!",
        time: 17
    },
    {
        urdu: "مرکزِ یقین شاد باد",
        english: "Blessed be thou center of faith",
        time: 19
    },
    {
        urdu: "پاک سرزمین کا نظام",
        english: "The Order of this Sacred Land",
        time: 24
    },
    {
        urdu: "قوَّتِ اُخوَّتِ عوام",
        english: "Is the might of the brotherhood of the people",
        time: 29
    },
    {
        urdu: "قوم، ملک، سلطنت!",
        english: "Nation, Country, and State!",
        time: 34
    },
    {
        urdu: "پائِندہ تابِندہ باد!",
        english: "May the Nation, the Country, the State",
        time: 37
    },
    {
        urdu: "شاد باد، منزِلِ مراد",
        english: "Shine in glory everlasting!",
        time: 40
    },
    {
        urdu: "پرچمِ ستاره و ہلال",
        english: "Blessed be the flag with the star and crescent",
        time: 45
    },
    {
        urdu: "رہبرِ ترقّی و کمال",
        english: "Symbol of progress and perfection",
        time: 50
    },
    {
        urdu: "ترجمانِ ماضی، شانِ حال",
        english: "Interpreter of our past, glory of our present!",
        time: 56
    },
    {
        urdu: "جانِ استقبال!",
        english: "Inspiration of the future!",
        time: 59
    },
    {
        urdu: "سایهٔ خدائے ذو الجلال",
        english: "Shade of God, the Glorious and Mighty",
        time: 61
    }
];
  
  playPauseBtn.addEventListener('click', function() {
      if (isPlaying) {
          audio.pause();
          playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      } else {
          audio.play();
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      }
      isPlaying = !isPlaying;
  });
  
  audio.addEventListener('timeupdate', function() {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
      
      updateLyrics();
  });
  
  function updateLyrics() {
      for (let i = lyrics.length - 1; i >= 0; i--) {
          if (audio.currentTime >= lyrics[i].time) {
              urduLyrics.textContent = lyrics[i].urdu;
              englishLyrics.textContent = lyrics[i].english;
              break;
          }
      }
  }
});
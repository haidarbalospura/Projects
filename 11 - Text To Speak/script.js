const speakBtn = document.querySelector('#playBtn')
const query = document.querySelector('#text')
let aizen = new Audio("Resources/aizen_bankai.mp3")
let byakuya = new Audio("Resources/bankai_byakuya.mp3")
let shinsui = new Audio("Resources/bankai_shinsui.mp3")
let shinji = new Audio("Resources/bankai_shinji.mp3")
let sukuna = new Audio("Resources/ryoiki_tenkai_sukuna.mp3")


// document.addEventListener('contextmenu',(e)=>{
//     e.preventDefault();
//     playSpeech()
// })
// function playSpeech() {
//     const speech = new SpeechSynthesisUtterance('I know you are smart but don\'t be over smart')
//     speechSynthesis.speak(speech)
// }

speakBtn.addEventListener('click', playSpeech)
query.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    playSpeech();
  }
});

function playSpeech() {
  if (query.value === 'bankai' || query.value === 'Bankai' || query.value === 'BANKAI') {
    let a = prompt("1. Aizen\n2. Byakuya\n3. Sukuna\n4. Shinsui\n5. Shinji")
    if (a == 1) {
      stopSpeech()
      aizen.play()
    }
    else if (a == 2) {
      stopSpeech()
      byakuya.play()
    }
    else if (a == 3) {
      stopSpeech()
      sukuna.play()
    } else if (a == 4) {
      stopSpeech()
      shinsui.play()
    } else if (a == 5) {
      stopSpeech()
      shinji.play()
    }
  } else {
    stopSpeech()
    const speech = new SpeechSynthesisUtterance(query.value)
    speechSynthesis.speak(speech)
  }
}

function stopSpeech() {
  aizen.pause();
  aizen.currentTime = 0;
  byakuya.pause();
  byakuya.currentTime = 0;
  shinsui.pause();
  shinsui.currentTime = 0;
  sukuna.pause();
  sukuna.currentTime = 0;
  shinji.pause();
  shinji.currentTime = 0;
  speechSynthesis.cancel()
}

const rapidApi = async ()=>{
  // text to speech api
  const url = "https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize"
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "c192360fffmsh6cc7e3935802750p182116jsn4b7009e30c5f",
      "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com",
    },
    body: new URLSearchParams({
      voice_code: "en-US-1",
      text: "Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
      speed: "1.00",
      pitch: "1.00",
      output_type: "audio_url",
    }),
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

const getLanguage = async ()=>{
  const url = 'https://cloudlabs-text-to-speech.p.rapidapi.com/languages';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f963f7f799msh375c77bf1fb521ap1a6f79jsn3c169ad4b0f1',
      'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}



















// const speakBtn = document.querySelector('#playBtn')
// const query = document.querySelector('#text')
// let aizen = new Audio("Resources/aizen_bankai.mp3")
// let byakuya = new Audio("Resources/bankai_byakuya.mp3")
// let shinsui = new Audio("Resources/bankai_shinsui.mp3")
// let shinji = new Audio("Resources/bankai_shinji.mp3")
// let sukuna = new Audio("Resources/ryoiki_tenkai_sukuna.mp3")
// speakBtn.addEventListener('click', playSpeech)

// function playSpeech() {
//   if (query.value === 'bankai' || query.value === 'Bankai' || query.value === 'BANKAI') {
//     let a = prompt("1. Aizen\n2. Byakuya\n3. Sukuna\n4. Shinsui\n5. Shinji")
//     if (a == 1) {
//       stopSpeech()
//       aizen.play()
//     }
//     else if (a == 2) {
//       stopSpeech()
//       byakuya.play()
//     }
//     else if (a == 3) {
//       stopSpeech()
//       sukuna.play()
//     } else if (a == 4) {
//       stopSpeech()
//       shinsui.play()
//     } else if (a == 5) {
//       stopSpeech()
//       shinji.play()
//     }

//   } else {
//     stopSpeech()
//     const speech = new SpeechSynthesisUtterance(query.value)
//     speechSynthesis.speak(speech)
//   }
// }

// function stopSpeech() {
//   aizen.pause();
//   aizen.currentTime = 0;
//   byakuya.pause();
//   byakuya.currentTime = 0;
//   shinsui.pause();
//   shinsui.currentTime = 0;
//   sukuna.pause();
//   sukuna.currentTime = 0;
//   shinji.pause();
//   shinji.currentTime = 0;
//   speechSynthesis.cancel()
// }

// const speakBtn = document.querySelector('#playBtn');
// const query = document.querySelector('#text');

// speakBtn.addEventListener('click', playSpeech);

// function playSpeech() {
//   const speech = new SpeechSynthesisUtterance(query.value);
//   // Set the language attribute to the desired language code, e.g., 'hi-IN' for Indian Hindi
//   speech.lang = 'hi-IN'; // Replace 'hi-IN' with the desired language code
//   speechSynthesis.speak(speech);
// }

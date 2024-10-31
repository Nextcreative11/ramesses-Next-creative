
document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = "أهلاً بيك! أنا رمسيس الثاني، اسألني أي سؤال.";
    const welcomeElement = document.getElementById("welcomeMessage");

    if (welcomeElement) {
        welcomeElement.innerText = welcomeMessage;
        speak(welcomeMessage, 'ar-EG');
    }
});


function askQuestion() {
    const question = document.getElementById("userQuestion").value.toLowerCase();
    let responseAr = '';
    let responseEn = '';

    
    if (question.includes('انت اتولدت إمتى') || question.includes('when were you born')) {
        responseAr = 'اتولدت في سنة 1303 قبل الميلاد.';
        responseEn = 'I was born in 1303 BC.';
    } else if (question.includes('حكمت مصر كام سنة') || question.includes('how many years did you rule Egypt')) {
        responseAr = 'حكمت مصر لمدة 67 سنة.';
        responseEn = 'I ruled Egypt for 67 years.';
    } else if (question.includes('ماتت إمتى') || question.includes('when did you die')) {
        responseAr = 'موتت في سنة 1213 قبل الميلاد.';
        responseEn = 'I died in 1213 BC.';
    } else if (question.includes('اسمك إيه') || question.includes('what is your name')) {
        responseAr = 'أنا رمسيس الثاني، واحد من أعظم فراعنة مصر.';
        responseEn = 'I am Ramses II, one of the greatest pharaohs of Egypt.';
    } else if (question.includes('من هي نفرتاري') || question.includes('who is Nefertari')) {
        responseAr = 'نفرتاري كانت زوجتي المفضلة وخصصت لها معبد في أبو سمبل.';
        responseEn = 'Nefertari was my favorite wife, and I dedicated a temple for her in Abu Simbel.';
    } else if (question.includes('ما هي إنجازاتك') || question.includes('what are your achievements')) {
        responseAr = 'بنيت معابد مثل أبو سمبل والرمسيوم.';
        responseEn = 'I built temples like Abu Simbel and the Ramesseum.';
    } else if (question.includes('كم عدد أطفالك') || question.includes('how many children do you have')) {
        responseAr = 'لدي أكثر من 100 طفل.';
        responseEn = 'I have over 100 children.';
    } else if (question.includes('أهم الحروب التي خضتها') || question.includes('what were the important wars you led')) {
        responseAr = 'قادش كانت من أهم معاركي.';
        responseEn = 'The Battle of Kadesh was one of my most important wars.';
    } else if (question.includes('ما هو لون عيونك') || question.includes('what is the color of your eyes')) {
        responseAr = 'لون عيوني كان أزرق، وهذا نادر بين الفراعنة.';
        responseEn = 'My eye color was blue, which is rare among pharaohs.';
    } else if (question.includes('هل تحب الموسيقى') || question.includes('do you love music')) {
        responseAr = 'نعم، كنت أحب العود والقيثارة.';
        responseEn = 'Yes, I loved the lute and the harp.';
    } else if (question.includes('ما هي هواياتك') || question.includes('what are your hobbies')) {
        responseAr = 'كنت أستمتع بالصيد وبناء المعابد.';
        responseEn = 'I enjoyed hunting and building temples.';
    } else if (question.includes('ما هو طعامك المفضل') || question.includes('what is your favorite food')) {
        responseAr = 'أحببت أكل اللحم والأسماك.';
        responseEn = 'I loved eating meat and fish.';
    } else if (question.includes('كم عدد زوجاتك') || question.includes('how many wives do you have')) {
        responseAr = 'كان لدي العديد من الزوجات، وأشهرهن نفرتاري.';
        responseEn = 'I had many wives, the most famous being Nefertari.';
    } else if (question.includes('أين عشت') || question.includes('where did you live')) {
        responseAr = 'عشت في قصر في طيبة.';
        responseEn = 'I lived in a palace in Thebes.';
    } else if (question.includes('ما هي المعابد التي بنيتها') || question.includes('what temples did you build')) {
        responseAr = 'بنيت معابد أبو سمبل والرمسيوم.';
        responseEn = 'I built the temples of Abu Simbel and the Ramesseum.';
    } else if (question.includes('هل وقعت معاهدة سلام') || question.includes('did you sign a peace treaty')) {
        responseAr = 'نعم، وقعت أول معاهدة سلام في التاريخ مع الحيثيين.';
        responseEn = 'Yes, I signed the first peace treaty in history with the Hittites.';
    } else if (question.includes('ما هو أكبر إنجاز لك') || question.includes('what is your greatest achievement')) {
        responseAr = 'أكبر إنجاز لي كان بناء المعابد التي خلدت اسمي.';
        responseEn = 'My greatest achievement was building temples that immortalized my name.';
    } else if (question.includes('من هم أعداؤك') || question.includes('who are your enemies')) {
        responseAr = 'كان الحيثيون من أكبر أعدائي.';
        responseEn = 'The Hittites were among my greatest enemies.';
    } else if (question.includes('كيف كانت حياتك اليومية') || question.includes('what was your daily life like')) {
        responseAr = 'كانت مليئة بالسياسة والحروب.';
        responseEn = 'It was filled with politics and wars.';
    } else if (question.includes('هل تحب السفر') || question.includes('do you love traveling')) {
        responseAr = 'نعم، كنت أحب استكشاف الأراضي الجديدة.';
        responseEn = 'Yes, I loved exploring new lands.';
    } else {
        responseAr = 'عذرًا، مش قادر أجاوب على السؤال ده.';
        responseEn = 'Sorry, I cannot answer that question.';
    }

    
    const response = /[a-zA-Z]/.test(question) ? responseEn : responseAr;
    document.getElementById("response").innerText = response;
    speak(response, detectLanguage(response));
}


function speak(text, lang) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    speech.volume = 1;
    speech.pitch = 0.8;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}


function detectLanguage(text) {
    return /[a-zA-Z]/.test(text) ? 'en-US' : 'ar-EG';
}


const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'ar-EG';


function startListening() {
    recognition.start();
}


recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById("userQuestion").value = transcript;
    askQuestion();
};


recognition.onerror = function (event) {
    document.getElementById("response").innerText = "عذرًا، ما فهمتش اللي قلته.";
};


document.getElementById("voiceButton").addEventListener("click", startListening);

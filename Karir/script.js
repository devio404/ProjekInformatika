const katakata = [
    "Bukan jadi yang terbaik, tapi jadilah yang lebih baik dari sebelumnya",
    "Jika hari ini tidak lebih baik dari kemarin, kamu termasuk orang yang merugi.",
    "Cukup satu kerentanan yang dibutuhkan penyerang.",
    "Jika perusahaan Anda menghabiskan lebih banyak uang untuk isi perut daripada keamanan IT, perusahaan Anda akan diretas. Lebih dari itu, perusahaan Anda pantas untuk diretas.",
    "Jiwa pemenang sibuk mencari jalan, jiwa pecundang sibuk mencari alasan.",
    "Yakinlah, ada sesuatu yang menantimu setelah sekian banyak kesabaran (yang kau jalani), yang akan membuatmu terpana hingga akan lupa betapa pedihnya rasa sakit. - Ali bin Abi Thalib",
    "Setiap orang punya jatah gagalnya masing-masing, habiskanlah jatah gagalmu sewaktu masih muda. - Dahlan Iskan",
    "Hanya tidak mudah, bukan tidak mungkin",
    "Mungkin bukan sekarang, tapi di masa yang akan datang kamu akan menikmati doa yang selama ini kamu ulang-ulang. - Al Habib Umar bin Hafidz",
    "Satu-satunya cara untuk melakukan pekerjaan luar biasa adalah dengan mencintai apa yang Anda lakukan. Jika Anda belum menemukannya, teruslah mencari. Jangan puas ! - Bill Gates"
  ];
  let usedSentences = [];
  let randomSentence = "";
  
  function katakataRandom() {
    if (usedSentences.length === 0) {
      usedSentences = katakata.slice();
    }
  
    const randomIndex = Math.floor(Math.random() * usedSentences.length);
    randomSentence = usedSentences.splice(randomIndex, 1)[0];
  
    const sentenceElement = document.getElementById("random-sentence");
    sentenceElement.textContent = randomSentence;
  }
  
  katakataRandom();
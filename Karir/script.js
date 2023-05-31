const katakata = [
    "kamu takut? aku berani.kamu berani? aku takut. -Aldi Taher",
    "Memulai sesuatu tidak harus menunggu sempurna, tapi jika ingin sempurna maka harus memulai. -Nokia",
    "Gak perlu ayang sing penting due allah sing maha penyayang. -Supra",
    "Jangan terlalu cepat menilai suatu hal. Ketika kau berada di samping cahaya, kau tidak akan melihat bayangan. Ingat, kau bukanlah entitas yang maha tahu.",
    "Segala hal yang telah terjadi di semesta adalah mutlak tak bisa diubah. Apa ? kau bilang itu mungkin? Haha, sebaiknya hal itu jangan sampai terjadi.",
    "Terlalu baik adalah hal yang buruk. Bagaimana mungkin sesuatu yang teramat positif itu menjadi negatif? Huft, sesuatu yang berlebihan memang mengerikan.",
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
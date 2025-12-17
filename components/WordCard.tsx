type WordCardProps = {
  word: string;
  image: string;
};

export default function WordCard({ word, image }: WordCardProps) {
  const speakWord = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div
      onClick={speakWord}
      className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"

    >
      <img src={image} alt={word} className="w-28 h-28 object-contain" />
      <h2 className="text-xl font-bold text-blue-600">{word}</h2>
    </div>
  );
}

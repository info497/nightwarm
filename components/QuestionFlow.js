import { useState } from "react";

export default function QuestionFlow() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  const restart = () => {
    setStep(1);
    setAnswers({});
  };

  if (step === 5) {
    return (
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">あなたへの最適アドバイス</h2>

        {answers.frequency === "6回以上" && (
          <p>● 夜間頻尿が重度です。まずは就寝前2時間の水分コントロールを。</p>
        )}

        {answers.cold === "夜中" && (
          <p>● 深部体温の低下対策として「足湯（10〜15分）」が最も効果的です。</p>
        )}

        {answers.socks === "靴下あり" && (
          <p>● 靴下は逆に冷えることがあります。薄手の緩い靴下へ変更を。</p>
        )}

        <button
          onClick={restart}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          もう一度診断する
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">NightWarm 質問フロー</h2>

      {step === 1 && (
        <>
          <p className="mb-3">① 夜間、何回くらい起きますか？</p>
          {["0–1回", "2–3回", "4–5回", "6回以上"].map((v) => (
            <button
              key={v}
              onClick={() => handleAnswer("frequency", v)}
              className="block w-full mb-2 p-2 bg-blue-100 rounded"
            >
              {v}
            </button>
          ))}
        </>
      )}

      {step === 2 && (
        <>
          <p className="mb-3">② 足が寒くなるのはいつ？</p>
          {["入眠時", "夜中", "両方"].map((v) => (
            <button
              key={v}
              onClick={() => handleAnswer("cold", v)}
              className="block w-full mb-2 p-2 bg-blue-100 rounded"
            >
              {v}
            </button>
          ))}
        </>
      )}

      {step === 3 && (
        <>
          <p className="mb-3">③ 靴下・湯たんぽ・電気毛布の使用状況は？</p>
          {["靴下あり", "湯たんぽあり", "電気毛布あり", "なし"].map((v) => (
            <button
              key={v}
              onClick={() => handleAnswer("socks", v)}
              className="block w-full mb-2 p-2 bg-blue-100 rounded"
            >
              {v}
            </button>
          ))}
        </>
      )}

      {step === 4 && (
        <>
          <p className="mb-3">④ むくみはありますか？</p>
          {["あり", "なし"].map((v) => (
            <button
              key={v}
              onClick={() => handleAnswer("edema", v)}
              className="block w-full mb-2 p-2 bg-blue-100 rounded"
            >
              {v}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

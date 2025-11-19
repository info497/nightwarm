import QuestionFlow from "../components/QuestionFlow";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">NightWarm（仮）</h1>

      <p className="mb-4 text-gray-700">
        睡眠中の「足の冷え」「夜間頻尿」を改善するガイドアプリ（テスト版）
      </p>

      <QuestionFlow />
    </div>
  );
}

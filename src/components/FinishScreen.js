function FinishScreen({ points, maxPoints, highscore }) {
  const correctPercent = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(correctPercent)}%)
      </p>
      <p className="highscore"> (Highscore: {highscore} points)</p>
    </>
  );
}

export default FinishScreen;

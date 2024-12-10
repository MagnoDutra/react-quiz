function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const correctPercent = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(correctPercent)}%)
      </p>
      <p className="highscore"> (Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset quiz
      </button>
    </>
  );
}

export default FinishScreen;

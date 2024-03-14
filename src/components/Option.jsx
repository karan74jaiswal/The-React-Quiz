export default function Option({
  option,
  index,
  handleClick,
  disabled,
  correctOption,
  answer,
}) {
  function getClass(index) {
    return answer !== null
      ? `${index === correctOption ? "correct" : "wrong"}  ${
          answer === index ? "answer" : ""
        }`
      : "";
  }
  return (
    <button
      className={`btn btn-option ${getClass(index)}`}
      onClick={() => handleClick(index)}
      disabled={disabled}
    >
      {option}
    </button>
  );
}

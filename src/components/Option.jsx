export default function Option({
  option,
  index,
  handleClick,
  disabled,
  selectedOption,
  correctOption,
}) {
  function getClass(index) {
    return selectedOption !== null
      ? `${index === correctOption ? "correct" : "wrong"}  ${
          selectedOption === index ? "answer" : ""
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

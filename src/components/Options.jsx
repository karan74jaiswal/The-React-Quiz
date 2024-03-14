import Option from "./Option";
export default function Options({
  options,
  handleClick,
  correctOption,
  answer,
}) {
  return (
    <div className="options">
      {options.map((option, i) => (
        <Option
          option={option}
          index={i}
          key={i}
          handleClick={handleClick}
          disabled={answer !== null ? true : false}
          answer={answer}
          correctOption={correctOption}
        />
      ))}
    </div>
  );
}

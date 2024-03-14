import Option from "./Option";
export default function Options({
  options,
  selectedOption,
  handleClick,
  correctOption,
}) {
  return (
    <div className="options">
      {options.map((option, i) => (
        <Option
          option={option}
          index={i}
          key={i}
          handleClick={handleClick}
          disabled={selectedOption !== null ? true : false}
          selectedOption={selectedOption}
          correctOption={correctOption}
        />
      ))}
    </div>
  );
}

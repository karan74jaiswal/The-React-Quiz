import Option from "./Option";
export default function Options({ options }) {
  return (
    <div className="options">
      {options.map((option, i) => (
        <Option option={option} key={i} />
      ))}
    </div>
  );
}

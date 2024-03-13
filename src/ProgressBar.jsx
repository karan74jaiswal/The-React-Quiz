const ProgressBar = function () {
  return (
    <header>
      <div className="progress">
        <progress max={14} value={0} />

        <p>
          Question <strong>1</strong> / 15
        </p>
        <p>
          <strong>0</strong> / 280
        </p>
      </div>
    </header>
  );
};
export default ProgressBar;

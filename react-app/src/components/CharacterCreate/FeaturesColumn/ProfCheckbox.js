const ProfCheckbox = ({
  profChoice,
  setClassProfs,
  classProfs,
}) => {


  const onCheck = (e, profChoice) => {
    if (e.target.checked) {
      setClassProfs([...classProfs, profChoice]);
    } else {
      const indexOfToRemove = classProfs.indexOf(profChoice);
      setClassProfs([...classProfs.slice(0, indexOfToRemove), ...classProfs.slice(indexOfToRemove + 1, classProfs.length)])
    }
  };

  return (
    <div className="w-10/12 flex justify-between">
      <label className="m-1 p-1" htmlFor={profChoice}>
        {profChoice}
      </label>
      <input
        type="checkbox"
        name={profChoice}
        value={profChoice}
        onChange={(e) => onCheck(e, profChoice)}
      ></input>
    </div>
  );
};

export default ProfCheckbox;

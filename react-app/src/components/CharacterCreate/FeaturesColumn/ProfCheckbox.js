const ProfCheckbox = ({
  profChoice,
  setClassProfs,
  characterClass,
  classProfs,
}) => {


  const onCheck = (e, profChoice) => {
    if (e.target.checked) {
      console.log("in checked", classProfs);
      setClassProfs([...classProfs, profChoice]);
      console.log("prof after check", classProfs);
    } else {
      console.log("not checked");
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

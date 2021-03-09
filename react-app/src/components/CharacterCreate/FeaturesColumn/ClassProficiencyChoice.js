const ClassProficiencyChoice = ({
  proficiencies,
  setProficiencies,
  characterClass,
  profChoices,
}) => {
  return <div>
      {profChoices.map((el) => {
          return(
              <div className="w-10/12 flex justify-between" key={el}>
                  <label className="m-1 p-1" htmlFor={el}>{el}</label>
                  <input type="checkbox" name={el} value={el}></input>
              </div>
          )
      })}
  </div>;
};

export default ClassProficiencyChoice;

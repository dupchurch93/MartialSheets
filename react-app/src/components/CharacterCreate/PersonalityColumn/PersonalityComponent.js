const PersonalityComponent = ({name, description}) => {
    const descriptionArray = description.split(",")

    return(
        <div className="border border-black m-2 p-2  rounded-lg">
            <div className="font-bold underline">{name}</div>
            {descriptionArray.map((el) => {
                return(
                    <li key={el} className="text-sm mx-4">{el}</li>
                )
            })}
        </div>
    )
}

export default PersonalityComponent

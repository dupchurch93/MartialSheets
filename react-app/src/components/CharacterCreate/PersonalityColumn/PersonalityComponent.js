const PersonalityComponent = ({name, description, setter}) => {

    return(
        <div className="border border-black m-2 p-2  rounded-lg">
            <div className="font-bold underline">{name}</div>
            <textarea
            name={name}
            placeholder={name}
            onChange={(e) => setter(e.target.value)}>
            </textarea>
        </div>
    )
}

export default PersonalityComponent

const PersonalityComponent = ({name, value, setter}) => {

    return(
        <div className="border border-black m-2 p-2 min-h-trait rounded-lg">
            <div className="font-bold underline">{name}</div>
            <textarea
            className="h-22 w-full"
            name={name}
            value={value}
            onChange={(e) => setter(e.target.value)}>
            </textarea>
        </div>
    )
}

export default PersonalityComponent

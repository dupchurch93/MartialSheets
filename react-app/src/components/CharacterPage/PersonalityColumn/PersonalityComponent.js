const PersonalityComponent = ({name, description}) => {

    return(
        <div className="border border-black m-2 p-2 rounded-lg h-36 overflow-y-auto">
            <div className="font-bold underline">{name}</div>
            <div className="text-sm">{description}</div>
        </div>
    )
}

export default PersonalityComponent

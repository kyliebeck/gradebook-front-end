const Icon = ({ category }) => {
    const icons = {

    }


    return (
        <img
            src={icons[category]}
            alt={`A ${category} icon.`}
            id={category.toLowerCase()}
            className='icon'
        />
    );
};

export default Icon;
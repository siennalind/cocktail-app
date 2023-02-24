function RecipePreview () {

    const onClick = () => {
        console.log('You clicked the button!')
    }

    return (
        <li>
        <p>Name of Recipe</p>
        <button onClick={onClick}>Full Recipe</button>
        </li>
    )
}

export default RecipePreview
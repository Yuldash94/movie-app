const Movie = ({image, title, fullTitle, year, crew}) => {
    return(
        <div className='movie_block'>
            <img src={image} alt={title} />
            <div className='movie_description'>
                <h3>{title}</h3>
                <p>{fullTitle}</p>
                <p>{year} </p>
                <p>{crew}</p>
            </div>
        </div>
    )
}


export default Movie;
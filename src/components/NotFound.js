const NotFound = ({onNotFound}) => {
    return (
        <div>
            <h1>Ничего не найдено...</h1>
            <input type="button" defaultValue="Вернуться" onClick={() => onNotFound()}/>
        </div>
    )
}

export default NotFound;
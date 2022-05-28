import './App.css';
import Movie from './components/Movie'
import {useState, useEffect} from 'react'
import NotFound from './components/NotFound';
import {Spinner} from 'react-bootstrap'

const movieApi = 'https://imdb-api.com/en/API/SearchMovie/k_g07rgngt/'
const movieApiTop250 = 'https://imdb-api.com/en/API/Top250Movies/k_g07rgngt/'

function App() {
  const [movie, setMovie] = useState([])
  const [find, setFind] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const onInputSearch = (e) => {
    setFind(e.target.value)
  }

  useEffect(() => {
    fetch(movieApiTop250)
    .then(res => res.json())
    .then(res => {
      setMovie(res.items)
      setLoading(false)
    })
  },[])

  const MovieFetch = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch(movieApi + find)
    .then(res => res.json())
    .then(res => {
      if (res.results.length !== 0){
        setMovie(res.results)
      } else {
        setError(true)
      }
      setLoading(false)
    })
    setFind('')
  }

  const onNotFound = () => {
    setLoading(true)
    fetch(movieApiTop250)
    .then(res => res.json())
    .then(res => {
      setMovie(res.items)
      setError(false)
      setLoading(false)
    })
  }

  return (
    <>
      <header>
        <form action='submit' onSubmit={MovieFetch}>
          <input type="text" placeholder="Search..." value={find} onChange={onInputSearch}/>
        </form>
      </header>
      <div className="movies">
        {
        error ? <NotFound onNotFound={onNotFound}/> : 
        (loading ? <Spinner animation="grow" variant="light" style={{width: '5rem', height: '5rem'}} /> : 
        movie.map((element) => <Movie key={element.id} {...element}/>))
        }
      </div>
    </>
  );
}

export default App;

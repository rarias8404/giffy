import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import { Link, Route } from 'wouter'

import './App.css'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gif de pandas</Link>
        <Link to="/gif/programming">Gif de programming</Link>
        <Link to="/gif/uruguay">Gif de Uruguay</Link>
        <Link to="/gif/colombia">Gif de Colombia</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  )
}

export default App

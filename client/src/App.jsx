import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Rgister'
import GameList from './components/game-list/GameList'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import { AuthContextProvider } from './contexts/AuthContext'


function App() {
  //TODO: remove this from App component

  return (
    <AuthContextProvider>
      <div id="box">

        <Header />

        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/games' element={<GameList />} />
            <Route path='/games/:gameId/details' element={<GameDetails />} />
            <Route path='/games/create' element={<GameCreate />} />
          </Routes>
        </main>

      </div>
    </AuthContextProvider>
  )
}

export default App

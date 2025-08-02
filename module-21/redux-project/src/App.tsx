import { Link, Outlet } from 'react-router'
import { Button } from './components/ui/button'

function App() {

  return (
    <div>
      <Button><Link to="/">Home</Link></Button>
      <Button><Link to="/tasks">Tasks</Link></Button>
      <Button><Link to="/users">Users</Link></Button>


      <Outlet />
    </div>
  )
}

export default App

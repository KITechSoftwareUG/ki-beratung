import { Routes, Route } from 'react-router-dom'
import Infrastruktur from './routes/Infrastruktur'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Infrastruktur />} />
    </Routes>
  )
}

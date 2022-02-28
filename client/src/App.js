import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Selection from './components/Selection';
import InsertionSort from './components/InsertionSort';

function App() {
  return(
  <div>
        <BrowserRouter>
      <Routes>
        <Route path="/insertion_sort" element={<InsertionSort />} />
        <Route path="/" element={<Selection />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App
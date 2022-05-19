import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPost from "./Components/AddPost";
import Home from "./Components/Home";
import { getPosts } from "./Redux/Action";
import { BrowserRouter , Routes , Route} from 'react-router-dom'

const App = () => {

  const [currentId , setCurrentId] = useState(null)

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("logggs")
    dispatch(getPosts());
  }, [dispatch])


  return (
      <BrowserRouter>
        <Routes>
          <Route exace path='/' element={<Home />}/>
          <Route exace path='/add' element={<AddPost />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

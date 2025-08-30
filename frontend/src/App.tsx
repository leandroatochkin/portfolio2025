import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './views/notFound/NotFound'
//import PhotoPost from './components/publications/PhotoPost'
import Home from './views/home/Home'

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
    errorElement: <NotFoundPage />,
  }
])


  return (
    <>
            <RouterProvider router={router} />
    </>
  )
}

export default App

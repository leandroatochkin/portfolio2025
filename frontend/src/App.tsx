import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './views/notFound/NotFound'
//import PhotoPost from './components/publications/PhotoPost'
import Home from './views/home/Home'
import Layout from './components/ui/Layout'
import About from './views/about/About'

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // central layout with transitions
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);



  return (
    <>
            <RouterProvider router={router} />
    </>
  )
}

export default App

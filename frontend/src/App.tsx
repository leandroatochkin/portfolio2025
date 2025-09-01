import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './views/notFound/NotFound'
//import PhotoPost from './components/publications/PhotoPost'
import Home from './views/home/Home'
import About from './views/about/About'
import CategoryView from './views/category/CategoryView'
import Dashboard from './components/dashboard/Dashboard'

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Dashboard>
      <Home />
      </Dashboard>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: (
      <About />
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/:category",
    element: (
      <Dashboard>
      <CategoryView />
      </Dashboard>
    ),
    errorElement: <NotFoundPage />,
  },
])


  return (
    <>
            <RouterProvider router={router} />
    </>
  )
}

export default App

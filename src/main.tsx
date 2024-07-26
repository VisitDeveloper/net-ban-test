import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Suspense } from 'react'

const Loading = () => {
  return(
    <>
    ...loading
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loading/>}> 
    <App />
  </Suspense>
  ,
)

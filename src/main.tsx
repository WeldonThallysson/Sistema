import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Analise from './pages/Analise.tsx'
import BuscarAtivos from './pages/BuscarAtivos.tsx'
import Cadastro from './pages/Cadastro.tsx'
import Login from './pages/Login.tsx'
import MinhaCarteira from './pages/MinhaCarteira.tsx'
import Planos from './pages/Planos.tsx'
import SessaoHelp from './pages/SessaoHelp.tsx'
import Sobre from './pages/Sobre.tsx'
import Home from './pages/Home.tsx'
import Sidebar from './components/sidebar/Sidebar.tsx'
import Header from './components/header/Header.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <div style={{display: "flex", flexDirection: "column"}}>
      <header>
         <Header/>
      </header> 
      <main className='Main__Global'>
        <Sidebar>
          <Outlet />
        </Sidebar> 
      </main>
      {/* Outlet para renderizar o conteúdo da página */}
    </div>
    ),
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Login",
        element: <Login/>,
      },
      {
        path: "/Cadastro",
        element: <Cadastro/>
      },
      
      {
        path: "/Analiseativos",
        element: <Analise/>
      },
      {
        path: "/Buscarativos",
        element: <BuscarAtivos/>
      },
      {
        path: "/Minhacarteira",
        element: <MinhaCarteira/>,
      },
      {
        path: "/Planos",
        element: <Planos/>
      },
      {
        path: "/SessaoHelp",
        element: <SessaoHelp/>
      },
      {
        path: "/Sobre",
        element: <Sobre/>
      }
    ]
  },
  
 
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <RouterProvider router={router} />
  
)

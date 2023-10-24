import {useState,ReactNode} from 'react'
import Analise from '../../pages/Analise.tsx'
import BuscarAtivos from '../../pages/BuscarAtivos.tsx'
import MinhaCarteira from '../../pages/MinhaCarteira'
import SessaoHelp from '../../pages/SessaoHelp'
import Sobre from '../../pages/Sobre'
import Home from '../../pages/Home'
import Badge from 'react-bootstrap/Badge';
import {FaSearch,FaPeriscope,FaBars,FaAddressCard,FaRocketchat,FaHireAHelper} from 'react-icons/fa'
import {IoHelpOutline} from 'react-icons/io5';
import {FiRefreshCcw} from 'react-icons/fi';
import { Link } from 'react-router-dom'
import './estilos.css'

interface DashboardLayout {
  children: ReactNode;
} 
export default function Sidebar({children}: DashboardLayout) {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => setIsOpen (!isOpen)
    const rotasSidebar = [
      {
        path: "/",
        element: <Analise/>,
        icons: <FiRefreshCcw/>,
        name: "Inicio",
      },
        
        {
          path: "/Analiseativos",
          element: <Analise/>,
          icons: <FaSearch/>,
          name: "Analise Detalhada de Ativos",
        },
        {
          path: "/Buscarativos",
          element: <BuscarAtivos/>,
          icons: <FaPeriscope/>,
          name: "Buscar de Ativos",
        },
        
        {
          path: "/SessaoHelp",
          element: <SessaoHelp/>,
          icons: <FaHireAHelper/>,
          name: "Comparativo de Ativos",

        },
        {
          path: "/Minhacarteira",
          element: <MinhaCarteira/>,
          icons: <FaAddressCard/>,
          badge:  <Badge bg="secondary">9</Badge>,
          name: "Minha Carteira"
        },
        
       
       
      ]

      const extrasSideBar = [
        {
          path: "/Sobre",
          element: <Sobre/>,
          icons: <IoHelpOutline/>,
          iconHelper: <IoHelpOutline/>,
          name: "Ajuda"
        },  {
          path: "/Sobre",
          element: <Sobre/>,
          icons: <IoHelpOutline/>,
          iconHelper: <IoHelpOutline/>,
          name: "Suporte"
        },  {
          path: "/Sobre",
          element: <Sobre/>,
          icons: <IoHelpOutline/>,
          iconHelper: <IoHelpOutline/>,
          name: "Sobre a Plataforma"
        },  
      ]
  return (
    <section className='container'>
      <div style={{width: isOpen ? "300px" : "50px" }} className='sidebar'>
        <div className='top__section'>
            <h1 style={{display: isOpen ? "block" : "none"}} className='Logo'>Logo</h1>
      
            <div style={{marginLeft: isOpen ? "150px" : "0px"}} className='bars'>
                <FaBars onClick={toggle}/>
            </div>
        </div>
        <nav>
            {
              rotasSidebar.map((item,index) => {
                return(
             
                      <ul key={index}>
                        <li className='itens__Dashboard'>
                          <Link to={item.path} className='link' activeclassName="active">
                            <div className='icon'>{item.icons}</div>
                            <div style={{display: isOpen ? "block" : "none"}} ><span className='link_text'>{item.name}</span></div>
                            <div style={{display: isOpen ? "block" : "none"}}><span className='link_text'>{item.badge}</span></div>
                          </Link>
                        </li>
                        
                      </ul>
                      
                
                
                )
              } )
            }
            <div style={{backgroundColor: "blue",borderTop: "1px solid yellow", borderBottom: "1px solid yellow"}}>
            {
              extrasSideBar.map((item,index) => {

                return(
                  <ul key={index}>
                    <li className='itens__Dashboard'>
                      <Link to={item.path} className='link' activeclassName="active">
                        <div className='icon'>{item.icons}</div>
                        <div style={{display: isOpen ? "block" : "none"}} ><span className='link_text'>{item.name}</span></div>
                        <div style={{display: isOpen ? "block" : "none"}}><span className='link_text'>{item.badge}</span></div>
                      </Link>
                    </li>
 
                  </ul>
                )
              })
            }
            </div>
           
       </nav>
      </div>      
             
             <main>
               {children}
             </main>
    </section>
  )
}

import React, {useState} from 'react'
import SidebarToggle from '../ui/SidebarToggle';
import Sidebar from '../ui/Sidebar';
import DarkModeToggle from '../ui/DarkModeToggle';



interface DashboardProps {
    children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({children}) => {
const [openSidebar, setOpenSidebar] = useState<boolean>(false);  
    
  return (
    <>
    <Sidebar open={openSidebar} />
    <div
    style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 9999,
        display: "flex",
            alignItems: "center",
        gap: 16,
    }}
    >
        <DarkModeToggle />
        <SidebarToggle open={openSidebar} setOpen={setOpenSidebar} />
    </div>
    <div
    style={{
        height: '100dvh',
        width: '100vw',
    }}
    >
        {children}
    </div>
    </>
  )
}

export default Dashboard
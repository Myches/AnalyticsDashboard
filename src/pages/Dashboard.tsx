import Sidebar from "../components/Sidebar"
import Overview from "../components/Overview"

export default function Dashboard(){
    return (
    
  <div className="flex">
            <div className="w-[20%] h-screen fixed z-10">
              <Sidebar />
            </div>
            <div className="w-[80%] ml-[20%]">
            <Overview  />
            </div>
            </div>
    )
  }
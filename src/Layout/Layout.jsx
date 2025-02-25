

import Sidebar from "../Components/Sidebar";


const Layout = function({ children }) {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      {/* Sidebar Section */}
      <div className="lg:w-1/2 bg-slate-800 text-white lg:h-screen lg:overflow-y-auto">
        <div className="p-8">
          {/**will be rendering cursor effect here */}
          <Sidebar />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full lg:w-1/2 bg-slate-800 text-white h-screen overflow-y-auto scroll-smooth">
        <div className="p-8 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;



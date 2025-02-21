// import Sidebar from "../Components/Sidebar"
// import CursorEffect from "../CusrsonEffect"

// // const Layout = function({children}){


// //     return(
// //         <div className="flex h-screen flex-col lg:flex-row">
// //             <div className=" w-full lg:w-1/2 bg-slate-800 text-white p-8 overflow-y-auto lg:h-screen lg:overflow-visible">
// //             <CursorEffect/>
// //                     <Sidebar/>
// //             </div>

// //             <div className="flex-1 lg:w-1/2  text-white bg-slate-800 p-8 overflow-y-auto mt-8 lg:mt-0 ">
// //                 {children}
// //             </div>
// //         </div>
// //     )
// // }


// const Layout = function({children}) {
//     return(
//         <div className="flex flex-col lg:flex-row lg:h-screen">
//             {/* Sidebar Section */}
//             <div className="lg:w-1/2 bg-slate-800 text-white lg:h-screen lg:overflow-y-auto">
//                 <div className="p-8">
//                     <CursorEffect/>
//                     <Sidebar/>
//                 </div>
//             </div>

//             {/* Main Content Section */}
//             <div className="w-full lg:w-1/2 bg-slate-800 text-white lg:h-screen lg:overflow-y-auto ">
//                 <div className="p-8  lg:pt-8 pt-0">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Layout





import Sidebar from "../Components/Sidebar";
import CursorEffect from "../CusrsonEffect";

const Layout = function({ children }) {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      {/* Sidebar Section */}
      <div className="lg:w-1/2 bg-slate-800 text-white lg:h-screen lg:overflow-y-auto">
        <div className="p-8">
          <CursorEffect />
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



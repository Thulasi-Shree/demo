// import { Link } from 'react-router-dom';
// // import Sidebar from './Sidebar';
// import './dashboard.css';
// import { Card } from 'react-bootstrap';

// const DashboardPage = () => {
//   return (
//     <div className="dashboardMainImg">
//       <div className="container-fluid text-black bg-white">
//         <div className="row">
//           <div className="col">
//             <Card className='my-5 Cardimg123 col-10 mx-auto'>
//             <h1 className="my-4 text-black fs-1 uppercase text-center">Dashboard</h1>
//             <div className="row pr-4">
//               <div className="col-xl-12 col-sm-12  mb-3">
//                 <div className="card text-white">
//                   <div className="card-body">
  
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row p-4">
//               <div className="col-xl-4 col-sm-6 col-lg-6 mb-3">
//                 <div className="card">
//                   <div className="card-body" id="Menu">
//                     <div className="text-center card-font-size mt-4">
//                       <h2>Menus</h2>
//                       {/* <br /> <b>23</b> */}
//                     </div>
//                   </div>
//                   <Link
//                     className="card-footer text-white clearfix small z-1"
//                     to="/admin/menus"
                   
//                   >
//                     <span className="float-center">
//                       <h5  className='text-black'>View Details</h5>
//                     </span>
//                   </Link>
//                 </div>
//               </div>

//               <div className="col-xl-4 col-sm-6 mb-3">
//                 <div className="card text-white o-hidden ">
//                   <div className="card-body">
//                     <div className="text-center card-font-size mt-4">
//                       <h2  className='text-black'>Orders</h2>
//                       {/* <br /> <b>345</b> */}
//                     </div>
//                   </div>
//                   <Link
//                     to="/admin/orders"
//                     className="card-footer text-white clearfix small z-1"
                   
//                   >
//                     <span className="float-left">
//                       <h5  className='text-black'>View Details</h5>
//                     </span>
//                   </Link>
//                 </div>
//               </div>

//               <div className="col-xl-4 col-sm-6 mb-3">
//                 <div className="card o-hidden">
//                   <div className="card-body">
//                     <div className="text-center card-font-size mt-4">
//                       <h2>Users</h2>
//                       {/* <br /> <b>55</b> */}
//                     </div>
//                   </div>
//                   <Link
//                     to="/admin/users"
                   
//                     className="card-footer text-white clearfix small z-1"
//                   >
//                     <span className="float-left">
//                       <h5  className='text-black'>View Details</h5>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-xl-4 col-sm-6 mb-3">
//                 <div className="card text-white o-hidden">
//                   <div className="card-body">
//                     <div className="text-center card-font-size mt-4">
//                       <h2  className='text-black'>Restaurants</h2>
//                       {/* <br /> <b>5</b> */}
//                     </div>
//                   </div>
//                   <Link
//                     to="/admin/restaurants"
                   
//                     className="card-footer text-white clearfix small z-1"
//                   >
//                     <span className="float-left">
//                       <h5  className='text-black'>View Details</h5>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-xl-4 col-sm-6 mb-3">
//                 <div className="card text-white o-hidden">
//                   <div className="card-body">
//                     <div className="text-center card-font-size mt-4">
//                       <h2  className='text-black'>Tax & Delivery Charges</h2>
//                       {/* <br /> <b>5</b> */}
//                     </div>
//                   </div>
//                   <Link
//                     to="/admin/settings"
                   
//                     className="card-footer text-white clearfix small z-1"
//                   >
//                     <span className="float-left">
//                       <h5  className='text-black'>View Details</h5>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-xl-4 col-sm-6 mb-3">
//                 <div className="card text-white o-hidden">
//                   <div className="card-body">
//                     <div className="text-center card-font-size mt-4">
//                       <h2  className='text-black'>Time slots</h2>
//                       {/* <br /> <b>5</b> */}
//                     </div>
//                   </div>
//                   <Link
//                     to="/timeSlot"
                   
//                     className="card-footer text-white clearfix small z-1"
//                   >
//                     <span className="float-left">
//                       <h5  className='text-black'>View Details</h5>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default DashboardPage;
import { Link } from 'react-router-dom';
import './dashboard.css';
import { Card } from 'react-bootstrap';

const DashboardPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { role } = user;

  return (
    <div className="dashboardMainImg">
      <div className="container-fluid text-black bg-white">
        <div className="row">
          <div className="col">
            <Card className='my-5 Cardimg123 col-10 mx-auto'>
              <h1 className="my-4 text-black fs-1 uppercase text-center">Dashboard</h1>
              <div className="row pr-4">
                <div className="col-xl-12 col-sm-12  mb-3">
                  <div className="card text-white">
                    <div className="card-body">
                      {/* Other content */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-4">
                <div className="col-xl-4 col-sm-6 col-lg-6 mb-3">
                  <div className="card">
                    <div className="card-body" id="Menu">
                      <div className="text-center card-font-size mt-4">
                        <h2>Menus</h2>
                      </div>
                    </div>
                    <Link className="card-footer text-white clearfix small z-1" to="/admin/menus">
                      <span className="float-center">
                        <h5 className='text-black'>View Details</h5>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-4 col-sm-6 mb-3">
                  <div className="card text-white o-hidden">
                    <div className="card-body">
                      <div className="text-center card-font-size mt-4">
                        <h2 className='text-black'>Orders</h2>
                      </div>
                    </div>
                    <Link to="/admin/orders" className="card-footer text-white clearfix small z-1">
                      <span className="float-left">
                        <h5 className='text-black'>View Details</h5>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 mb-3">
                  <div className="card text-white o-hidden">
                    <div className="card-body">
                      <div className="text-center card-font-size mt-4">
                        <h2 className='text-black'>Order History</h2>
                      </div>
                    </div>
                    <Link to="/admin/orderHistory" className="card-footer text-white clearfix small z-1">
                      <span className="float-left">
                        <h5 className='text-black'>View Details</h5>
                      </span>
                    </Link>
                  </div>
                </div>

                {role !== 'admin' && (
                  <>
                    <div className="col-xl-4 col-sm-6 mb-3">
                      <div className="card o-hidden">
                        <div className="card-body">
                          <div className="text-center card-font-size mt-4">
                            <h2>Users</h2>
                          </div>
                        </div>
                        <Link to="/admin/users" className="card-footer text-white clearfix small z-1">
                          <span className="float-left">
                            <h5 className='text-black'>View Details</h5>
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-4 col-sm-6 mb-3">
                      <div className="card text-white o-hidden">
                        <div className="card-body">
                          <div className="text-center card-font-size mt-4">
                            <h2 className='text-black'>Restaurants</h2>
                          </div>
                        </div>
                        <Link to="/admin/restaurants" className="card-footer text-white clearfix small z-1">
                          <span className="float-left">
                            <h5 className='text-black'>View Details</h5>
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-4 col-sm-6 mb-3">
                      <div className="card text-white o-hidden">
                        <div className="card-body">
                          <div className="text-center card-font-size mt-4">
                            <h2 className='text-black'>Tax & Delivery Charges</h2>
                          </div>
                        </div>
                        <Link to="/admin/settings" className="card-footer text-white clearfix small z-1">
                          <span className="float-left">
                            <h5 className='text-black'>View Details</h5>
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-4 col-sm-6 mb-3">
                      <div className="card text-white o-hidden">
                        <div className="card-body">
                          <div className="text-center card-font-size mt-4">
                            <h2 className='text-black'>Time slots</h2>
                          </div>
                        </div>
                        <Link to="/timeSlot" className="card-footer text-white clearfix small z-1">
                          <span className="float-left">
                            <h5 className='text-black'>View Details</h5>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

// import React from 'react'

// function Admin_Dashboard() {
//     return (
//         <div>
//             <h1>Admin Dashboard  </h1>

//             <div class="modal" tabindex="-1">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         <p>Modal body text goes here.</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

//             <table class="table">
//                 <thead class='table-dark'>

//                     <tr>
//                         <th> Product Image</th>
//                         <th> Product Name</th>
//                         <th> Product Price</th>
//                         <th> Product Description</th>
//                         <th> Product Category</th>
//                         <th> Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>

//                         <td>
//                             <img width={'40px'} height={'40px'} src="https://www.hindustantimes.com/ht-img/img/2023/10/29/1600x900/32143358-gta-setting-birgt-riesige-gefahr-schuld-i_1695890871511_1698600347847.jpg" alt=" " style={{ width: '100px', height: '50px' }} /></td>
//                         <td>Gta 6</td>
//                         <td>100$</td>
//                         <td>Top in the gaming</td>
//                         <td>Games</td>
//                         <td>
//                             <button className="btn btn-primary">Edit</button>
//                             <button className="btn btn-danger">Delete</button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Admin_Dashboard


import React from 'react'

const AdminDashboard = () => {
    return (
        <>

            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>


                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action=''>
                                        <label>Product Name</label>
                                        <input type='text' className='form-control' placeholder='Enter Product Name' />
                                        <label>Product Price</label>
                                        <input type='number' className='form-control' placeholder='Enter Product Price' />
                                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <table className='table mt-2'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img width={'10%'} height={'40%'} src="https://www.hindustantimes.com/ht-img/img/2023/10/29/1600x900/32143358-gta-setting-birgt-riesige-gefahr-schuld-i_1695890871511_1698600347847.jpg" alt=" " style={{ width: '100px', height: '50px' }} /></td>
                            
                            <td>Gta 6</td>
                            <td>200</td>
                            <td>Indoor</td>
                            <td>Beautiful Flower</td>
                            <td>
                                <button className='btn btn-primary'> Edit</button>
                                <button className='btn btn-danger ms-2'> Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </>
    )
}

export default AdminDashboard
import React from 'react'
import AccountMenu from './AccountMenu'
import Search_bar_navbar from './Search_bar_navbar'

const Navbar = () => {
  return (
    <div className=''>
      <div className='container-fluid headar'>
      
        <div className='row'>
          <div className='col-6 col-md-2 header_logo_text'>
            <h1 className='mt-3 ml-1'>AMH</h1>
            {/* <SideBarFinal/> */}
          </div>
          <div className='col-md-6 d-none d-md-block header_center_text'>
            <h2 className='mt-3 ml-1 text-center font-weight-normal d-none d-lg-block'>Aurbitu Management System</h2>
            <h3 className='mt-3 ml-1 text-center font-weight-normal d-none d-md-block d-lg-none'>Aurbitus Management System</h3>
          </div>
          <div className='col-md-3 pl-2 mt-1  d-none d-md-block'>
          <Search_bar_navbar/>
          </div>
          <div className='col-6 col-md-1 mt-1'>
            <AccountMenu/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

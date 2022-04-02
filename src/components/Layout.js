import React from 'react'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      {/* <DefaultSeo /> */}
      <div className='h-screen'>
        {/* <Navbar /> */}
        <main className='wrapper'>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default TemplateWrapper

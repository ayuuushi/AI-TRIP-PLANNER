import React from 'react'

function Header() {
  return (
    <div className='p-2 shadow-sm'>
      <img src='/logo.svg'/>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
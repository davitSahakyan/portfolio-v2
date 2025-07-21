import './header.css'
import Image from 'next/image'

function Header() {

  return (
      <div className="header">
        <div className="avatar">
            <Image src="/assets/images/avatar.jpg" alt="Davit Sahakyan Avatar" width={100} height={135} className='avatar-img'/>
        </div>
        <h5 className="dav-name mb-10">Davit Sahakyan</h5>
        <div className="sm-text">
            Front-end Developer
        </div>
      </div>
  )
}

export default Header
import { Container } from './style'

import logo from '../../assets/images/svg/logo.svg'
import { useEffect, useState } from 'react'

const Header: React.FC = () => {

  const [ backgrounds, SetBackground ] = useState(false)

  useEffect(() => {
    const height = document.querySelector('.wrapper-info')

    window.addEventListener("scroll", () => {
      if (height) {
        window.pageYOffset > height.clientHeight ? SetBackground(true) : SetBackground(false)
      }
    });
  })

  return (
    <Container
      style={{
        background: backgrounds ? '#FFF' : 'transparent'
      }}
      >
      <div className="wrapper-logo">
        <img src={logo} alt=""/>
        <p>GEAR | STORE</p>
      </div>
    </Container>
  )
}

export default Header
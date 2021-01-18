import React from 'react'
import { LoginButton, useSession } from '@inrupt/solid-ui-react'
import './App.scss'

const HelloWorld = (): React.ReactElement => {
  const { session } = useSession()

  return (
    <>
      <header>
        <h1 id='title'>Solid App</h1>
        <div className='header__nav'>
          <a className='header__link' href='https://stephenreilly.dev'>
            My Homepage
          </a>
        </div>
        <div className='header__account'>
          <LoginButton oidcIssuer='https://inrupt.net' redirectUrl='http://localhost:8080/' />
        </div>
      </header>
      <main>
        <h1>Hello World!</h1>
      </main>
      <footer>Stephen Reilly</footer>
    </>
  )
}

export default HelloWorld

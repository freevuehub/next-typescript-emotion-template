import { NextPage } from 'next'
import { css } from '@emotion/react'

const HomeCss = css`
  font-size: 20px;
  color: red;
`
const Home: NextPage = () => {
  return (
    <div css={HomeCss}>
      Hello World
    </div>
  )
}

export default Home

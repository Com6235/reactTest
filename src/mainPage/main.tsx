import React from 'react'
import ReactDOM from 'react-dom/client'
import {Page} from './Page.tsx'
import '../assets/tailwind.css'
import { Wrapper } from '../assets/common.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Wrapper>
        <Page />
    </Wrapper>
  </React.StrictMode>,
)

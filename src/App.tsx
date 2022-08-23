import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { WebviewWindow } from '@tauri-apps/api/window'


const webview = new WebviewWindow("eddy",{
  url:"https://web.whatsapp.com",
  decorations:false,
  alwaysOnTop:true
  // visible:false
});

webview.once("tauri://created",()=>{
  // webview.set
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a rel="noopener" href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a rel="noopener" href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

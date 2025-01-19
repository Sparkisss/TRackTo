import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store/store"
import { ThemeProvider } from "./shared/context/theme"
import { App } from "./app/index"
import "./shared/api/firebase"
import "./index.scss"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />   
      </ThemeProvider>      
    </Provider>   
  </StrictMode>,
)

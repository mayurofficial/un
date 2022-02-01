import React from "react"
import "../styles/globals.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useRouter } from "next/router"
import { Provider as ReduxProvider } from "react-redux"
import PublicLayout from "../layouts/publicLayout"
import PrivateLayout from "../layouts/privateLayout"
import { defaultTheme } from "../themes/defaultTheme"
import store from "../redux/store"

function MyApp({ Component, pageProps }) {
  const currentTheme = createTheme(defaultTheme)
  const path = useRouter()

  const isPublic = path.asPath.includes("/auth/")
  const isPrivate = path.asPath.includes("/user/")

  const Wrapper = isPublic
    ? PublicLayout
    : isPrivate
    ? PrivateLayout
    : React.Fragment

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={currentTheme}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default MyApp

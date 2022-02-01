import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useRouter } from "next/router"
import { getSession } from "@session/cookie"

export default function PublicLayout({ children }) {
  const { replace } = useRouter()
  const session = getSession("user-token")

  React.useEffect(() => {
    if (session) {
      replace("/user/dashboard", "/user/dashboard")
    }
  }, [session])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <h2>Some placeholder</h2>
        </Grid>
        <Grid item xs={5}>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
}

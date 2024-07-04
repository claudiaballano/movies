import NavigationMenu from "@/components/NavigationMenu";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Movies app",
  description: "A simple app to search for movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{ width: `calc(100% - 240px)`, ml: `240px` }}
            >
              <Toolbar>
                <Typography variant="h6" noWrap component="div">
                  Movies List
                </Typography>
              </Toolbar>
            </AppBar>
            <NavigationMenu />
            <Box
              component="main"
              sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, pt: 12 }}
            >
              {children}
            </Box>
          </Box>
        </body>
      </html>
    </ThemeProvider>
  );
}

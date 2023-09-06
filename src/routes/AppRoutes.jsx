import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { muiTheme } from "@/muiTheme";
import { LandingPage, Products } from "@/pages";
import { MainPage } from "@/components";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <div className="container">
          <AnimatePresence mode="wait">
            <Routes>
              <Route element={<MainPage />}>
                <Route path="/*" element={<LandingPage />} />
                <Route path="products" element={<Products />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;

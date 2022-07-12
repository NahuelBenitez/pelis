import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <div>
      <header>
       
      <h1 className={styles.title}>MoviePop!</h1>
        
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<LandingPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

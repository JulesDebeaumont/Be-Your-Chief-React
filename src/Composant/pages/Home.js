import '../../css/Home.css';
import Slider from '../Elements/Slider';
import Footer from "../Elements/Footer";
import RecipesPage from "./RecipesPage";
import React from "react";

export function Home()
{
    return(
<>
   <Slider />
   <RecipesPage />
   <Footer />
</>
    );
}
export default Home;
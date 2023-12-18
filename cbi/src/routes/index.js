import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageConnexion from "../pages/PageConnexion";
import PageHome from "../pages/pageHome";
import PageMateriels from "../pages/PageMateriels";
import PageAdmin from "../pages/pageAdmin";
import PageAffectation from "../pages/pageAffectation";
import PageSortie from "../pages/pageSortie";
import PageTransmission from "../pages/pageTransmission";
import PageHistorique from "../pages/pageHistorique";



export default function MaRoute() {
  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageHome/>} />
            <Route path="/home" element={<PageHome/>} />
            <Route path="/Materiels" element={<PageMateriels/>}/>
            <Route path="/Admin" element={<PageAdmin/>}/>
            <Route path="/Affectation" element={<PageAffectation/>}/>
            <Route path="/Sortie" element={<PageSortie/>}/> 
            <Route path="/Transmission" element={<PageTransmission/>}/>
            <Route path="/Historique" element={<PageHistorique/>}/>
            <Route path="/connexion" element={<PageConnexion/>} />
        </Routes>
        </BrowserRouter>
  )
}

import React from "react";

export default function Header(){
    return(
        <>
            {/* Mob header */}
        <div className="mob-header">
            <div className="mob-h-left">
            <a className="navbar-brand" href="/">
                {/* <img className="logo-dark" title alt='' src="assets/img/logo.svg" /> */}
                <img className="logo-light" title alt='' src="assets/img/logo-light.svg" />
            </a>
            </div>
            <div className="mob-h-right">
            <button className="toggler-menu">
                <span />
            </button>
            </div>
        </div>
        {/* End */}
        {/* Header Top */}
        <div className="header-left-fixed one-page-nav">
            {/* Brand */}
            <div className="logo">
            <a className="navbar-brand" href="/">
            {/* <a className="navbar-brand" href="index.hthml#"> */}

            {/* Ajouter le logo oris Bank */}

                {/* <img className="logo-dark" title alt='' src="assets/img/logo.svg" />
                <img className="logo-light" title alt='' src="assets/img/logo-light.svg" /> */}
               <h1> <span> Coris Banque </span></h1>
            </a>
            </div>
            {/* / */}
            <ul className="main-menu">
            <li class="icon-box">
                <a data-scroll-nav={0} href="/home ">
                Tableau de Bord 
                {/* <i class="fa fa-home"></i> */}
                </a>
            </li>
            <li>
                <a data-scroll-nav={5} href="/Connexion">
                Connexion
                </a>
            </li>
            <li>
                <a data-scroll-nav={1} href="/Materiels">
                Materiels
                </a>
            </li>
            <li>
                <a data-scroll-nav={2} href="/Affectation">
                Affectation
                </a>
            </li>
            <li>
                <a data-scroll-nav={3} href="/Sortie">
                Sortie
                </a>
            </li>
            <li>
                <a data-scroll-nav={4} href="/Transmission">
                Transmission
                </a>
            </li>
            <li>
                <a data-scroll-nav={5} href="/Historique">
                Historique
                </a>
            </li>
            
            </ul>
            

           
        </div>
        {/* End Header Top */}
        </>
    );
}
import React from "react";
import { Route, Routes } from "react-router-dom";
import FilmList from "../films/FilmList";
import Create from "../films/Create";
import Update from "../films/Update";
import Home from "../layout/Home";


export default function MainRoutes() {

    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home></Home>}> </Route>
                <Route exact path="/filmList" element={<FilmList></FilmList>}> </Route>
                {/* <Route path="/edit/:id" element={} />*/}
                
                <Route exact path="/create" element={<Create></Create>}> </Route>
                <Route exact path="/update/:id" element={<Update></Update>}> </Route>
            </Routes>
        </>
    );

}
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

const Rotas = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/:id" element={<Movie />} />
	</Routes>
);

export default Rotas;

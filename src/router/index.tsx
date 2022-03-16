import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import React from "react";

const Rotas = (): JSX.Element => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/:id" element={<Movie />} />
	</Routes>
);

export default Rotas;

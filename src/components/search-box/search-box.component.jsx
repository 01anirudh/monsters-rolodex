import React from "react";
import "./search-box.styles.css";

export const Search = props => (
    <input className="search-box"
    type="search"
    placeholder="Monsters"
    onChange={props.onSearchChange}
    />
)
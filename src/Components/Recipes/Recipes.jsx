import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

export default function Recipes() {
    const [isLoading, setIsLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
        return () => {};
    }, []);

// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=19eb5975-84dd-41b8-885b-ece968743a0c
// https://forkify-api.herokuapp.com/api/search?q=pizza

    async function getRecipes() {
        let { data } = await axios.get(
            "https://forkify-api.herokuapp.com/api/search?q=pizza"
        );
        setRecipes(data.recipes);
        
        setIsLoading(false);
    }

    return (
        <div className="recipes pb-5">
            <div className="container">
                {isLoading ? <Loader /> : null}
                <div className="row g-4">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="col-md-4">
                            <div className="inner p-3 shadow-lg">
                                <div
                                    className="image-container"
                                    style={{
                                        height: "250px",
                                        overflow: "hidden",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <img
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "fill",
                                        }}
                                        src={recipe.image_url}
                                        alt={recipe.title}
                                    />
                                </div>
                                <h3 className="h5">
                                    {recipe.title
                                        .split(" ")
                                        .slice(0, 5)
                                        .join(" ")}
                                </h3>
                                    <a href={recipe.source_url} className="btn btn-outline-light w-100 mt-3" target="_blank" rel="noopener noreferrer">View Recipe</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

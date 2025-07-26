import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
        return () => {};
    }, [recipes]);

    // https://forkify-api.herokuapp.com/api/search?q=pizza

    async function getRecipes() {
        let { data } = await axios.get(
            "https://forkify-api.herokuapp.com/api/search?q=pizza"
        );
        setRecipes(data.recipes);
        
        setIsLoading(false);
    }

    return (
        <div className="recipes">
            <div className="container">
                {isLoading ? <Loader /> : null}
                <div className="row g-4">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="col-md-4">
                            <div className="inner p-3">
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
                                            objectFit: "cover",
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

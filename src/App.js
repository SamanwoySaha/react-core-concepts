import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const nayoks = ["Anawar", "Jafor", "Kalimullah"];
    const products = [
        { name: "Photoshop", price: "$78.32" },
        { name: "Illustrator", price: "$53.34" },
        { name: "InDesign", price: "$20.34" },
    ];
    return (
        <div className="App">
            <header className="App-header">
                <p>My first React App</p>
                <Product product={products[0]}></Product>
                <Product product={products[1]}></Product>
                <Product product={products[2]}></Product>
                <Person name={nayoks[0]}></Person>
                <Person name={nayoks[1]}></Person>
                <Person name={nayoks[2]}></Person>
                <Person></Person>
            </header>
        </div>
    );
}

function Product(props) {
    const productStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: "cyan",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid grey",
        float: "left",
        color: "#222",
        margin: "10px",
    };
    const {name, price} = props.product.name;
    return (
        <div style={productStyle}>
            <h3>{name}</h3>
            <h2>{price}</h2>
            <button
                style={{
                    backgroundColor: "#222",
                    color: "#f1f1f1",
                    padding: "5px",
                }}
            >
                Buy Now
            </button>
        </div>
    );
}

function Person(props) {
    const personStyle = {
        border: "2px solid cyan",
        margin: "10px",
        padding: "20px 300px",
    };
    return (
        <div style={personStyle}>
            <h3 style={{ color: "cyan" }}>{props.name}</h3>
            <p>Bangladesher Pran</p>
        </div>
    );
}

export default App;

import { Link } from "react-router-dom";
import "./Ingredients.css"

const Ingredients =() => {
    return(
        <div>
        <div className="ingredients-row">
        <Link to='/ingredients/Chicken' className="ingredients-link">
            <div className="ingredients">
            <p>Chicken</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="chicken"/>
            </div>
            </Link>
            <Link to='/ingredients/Salmon' className="ingredients-link">
            <div className="ingredients">
            <p>Salmon</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1559058789-672da06263d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" alt="salmon"/>
            </div>
            </Link>
            <Link to='/ingredients/Beef' className="ingredients-link">
            <div className="ingredients">
            <p>Beef</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1613454320437-0c228c8b1723?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="beef"/>
            </div>
            </Link>
            <Link to='/ingredients/Pork' className="ingredients-link">
            <div className="ingredients">
            <p>Pork</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="pork"/>
            </div>
            </Link>
        </div>

        <div className="ingredients-row">
        <Link to='/ingredients/Avocado' className="ingredients-link">
            <div className="ingredients">
            <p>Avocato</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1551460188-2f48af84543c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="avocado"/>
            </div>
            </Link>
            <Link to='/ingredients/Salt' className="ingredients-link">
            <div className="ingredients">
            <p>Salt</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1604697976327-4f28ff459803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="salt"/>
            </div>
            </Link>
            <Link to='/ingredients/Aubergine' className="ingredients-link">
            <div className="ingredients">
            <p>Aubergine</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1601477572224-cb15a76f30f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="aubergine"/>
            </div>
            </Link>
            <Link to='/ingredients/Carrots' className="ingredients-link">
            <div className="ingredients">
            <p>Carrots</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1584526896127-c5cfc9e434e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="carrots"/>
            </div>
            </Link>
        </div>

        <div className="ingredients-row">
        <Link to='/ingredients/cocoa' className="ingredients-link">
            <div className="ingredients">
            <p>Chocolate</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1610450949065-1f2841536c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="chocolate"/>
            </div>
            </Link>
            <Link to='/ingredients/Butter' className="ingredients-link">
            <div className="ingredients">
            <p>Butter</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1620567838596-b92a1e9f6aaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="butter"/>
            </div>
            </Link>
            <Link to='/ingredients/Milk' className="ingredients-link">
            <div className="ingredients">
            <p>Milk</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1634141510639-d691d86f47be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="milk"/>
            </div>
            </Link>
            <Link to='/ingredients/Sugar' className="ingredients-link">
            <div className="ingredients">
            <p>Sugar</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1610219171189-286769cc9b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="sugar"/>
            </div>
            </Link>
        </div>

        <div className="ingredients-row">
        <Link to='/ingredients/Egg' className="ingredients-link">
            <div className="ingredients">
            <p>Egg</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1610328466269-1f36faad83c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="egg"/>
            </div>
            </Link>
            <Link to='/ingredients/Cheese' className="ingredients-link">
            <div className="ingredients">
            <p>Cheese</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="cheese"/>
            </div>
            </Link>
            <Link to='/ingredients/Bacon' className="ingredients-link">
            <div className="ingredients">
            <p>Bacon</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1624030997838-6b93e2d54d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="bacon"/>
            </div>
            </Link>
            <Link to='/ingredients/Bread' className="ingredients-link">
            <div className="ingredients">
            <p>Bread</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1555951015-6da899b5c2cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="Bread"/>
            </div>
            </Link>
        </div>

        <div className="ingredients-row">
        <Link to='/ingredients/Honey' className="ingredients-link">
            <div className="ingredients">
            <p>Honey</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1536788567643-8c2368376526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="honey"/>
            </div>
            </Link>
            <Link to='/ingredients/Flour' className="ingredients-link">
            <div className="ingredients">
            <p>Flour</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="flour"/>
            </div>
            </Link>
            <Link to='/ingredients/Rice' className="ingredients-link">
            <div className="ingredients">
            <p>Rice</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1577110058859-74547db40bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="rice"/>
            </div>
            </Link>
            <Link to='/ingredients/Lemon' className="ingredients-link">
            <div className="ingredients">
            <p>Lemon</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="Lemon"/>
            </div>
            </Link>
        </div>
        
        <div className="ingredients-row">
        <Link to='/ingredients/Tomatoes' className="ingredients-link">
            <div className="ingredients">
            <p>Tomatoes</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80" alt="tomatoes"/>
            </div>
            </Link>
            <Link to='/ingredients/Garlic' className="ingredients-link">
            <div className="ingredients">
            <p>Garlic</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1609983507411-0aca0d8aa06f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80" alt="garlic"/>
            </div>
            </Link>
            <Link to='/ingredients/Pepper' className="ingredients-link">
            <div className="ingredients">
            <p>Pepper</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1621317758612-3958e0f07c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="pepper"/>
            </div>
            </Link>
            <Link to='/ingredients/Potatoes' className="ingredients-link">
            <div className="ingredients">
            <p>Potatoes</p>
                <img className="cusine-img" src="https://images.unsplash.com/photo-1630431342210-a93164ff1251?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Potatoes"/>
            </div>
            </Link>
        </div>

        </div>
    )
}
export default Ingredients;
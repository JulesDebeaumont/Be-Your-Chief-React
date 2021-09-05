import { Link } from 'react-router-dom';
import '../../css/Table.css';
import React from "react";

export function Table({Component})
{
    const days=['My Planning ', 'sat', 'sun', 'mon', 'tue', 'wed', 'thur', 'fri' ];
    const daysList= days.map((days) => 
    <th>{days}</th>);
    const meals= ['BreackFast', 'Lunch', 'Snack', 'Dinner'];
    const mealsList= meals.map((meals) => 
    <tr>
        <td>{meals}</td>
        <td><Link to='/choose/recipes' class="fas fa-utensils"></Link></td>
        <td><Link to='/choose/recipes' class="fas fa-utensils"></Link></td>
        <td><Link to='/choose/recipes' class="fas fa-utensils"></Link></td>
        <td><Link to='/choose/recipes' class="fas fa-utensils"></Link></td>
        <td><Link to='/choose/recipes' class="fas fa-utensils"></Link></td>
        <td><Link to='/choose/recipes' class="fas fa-utensils"></Link></td>
        <td><Link to='/choose/recipes' class="fas fa-utensils"></Link></td>


    </tr>);

    return(
        <div className="mytable">
            <table>
                <tbody>
                <tr>
                    {daysList}
                </tr>
                    {mealsList}
                </tbody>
            </table>
            
        </div>
    );
}
export default Table;
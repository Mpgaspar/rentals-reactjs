import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function PropertyList() {
    const qty = 2

    const propperties = useSelector(state => state.data.slice(0, qty), [qty])
    const dispatch = useDispatch()

    function addProperty() {
        dispatch({ type: 'ADD_PROPERTY', title: 'Sweet Home'})
    }
    
    return (
        <>
        <ul>
            { propperties.map(property => <li key={property}>{property}</li>) } 
        </ul>
        <button type='button' onClick={addProperty}>Add Property</button>
        </>
    )
}
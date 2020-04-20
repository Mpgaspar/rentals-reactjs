import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function PropertyList() {
    
    const propperties = useSelector(state => state.data)
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
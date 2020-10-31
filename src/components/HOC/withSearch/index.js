import Search from './search';
import React from 'react';

export default function withSearch(component){
    return (props) =>  <Search Component={component} {...props} />
}
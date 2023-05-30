import '../Toolbar.css';
import React from "react";

export default function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;


    const btn = filters.map((name, index) =>

        <button key={index} className={'btn_item' + (selected === name ? ' selected' : '')}
                onClick={() => {
                    onSelectFilter(name)
                }}>{name}</button>

    )

    return (
        <div className='btn_list'>{btn}</div>
    )

}
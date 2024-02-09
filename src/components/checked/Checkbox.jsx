import React, { useState } from 'react';

function Checkbox({labelCheck}) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label>{labelCheck}</label>
        </>
    );
}

export default Checkbox;

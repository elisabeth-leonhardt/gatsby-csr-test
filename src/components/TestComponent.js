import React, { useEffect } from 'react';

function TestComponent(props) {

    console.log('I am rendered on both sides');
    
    useEffect( () => {
        console.log('I am only client side rendered');
    }, [])

    return (
        <div>
            I am a test component!
        </div>
    );
}

export default TestComponent;
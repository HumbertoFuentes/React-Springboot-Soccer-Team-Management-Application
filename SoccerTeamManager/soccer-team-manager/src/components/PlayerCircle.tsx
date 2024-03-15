import React from 'react';
import Draggable from 'react-draggable';
import { useRef } from 'react';

const PlayerCircle: React.FC = (props) => {
    const nodeRef = useRef(null);

    return (
        <Draggable bounds='parent' axis='both'>
            <div className='card ' style={{borderRadius : '50%', height: '50px', width : '50px', color : 'orange'}}>
                <p>Humberto</p>
            </div>
        </Draggable>
    );
};

export default PlayerCircle;


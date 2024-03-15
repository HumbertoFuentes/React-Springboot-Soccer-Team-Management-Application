import React, { useState } from 'react';
import SquadTable from './SquadTable';

const Squad: React.FC = () => {

  return (
    <div className='container squad-page mt-3'>
      <h1>Roster</h1>
      <hr/>
      <SquadTable/>
    </div>
  );
};

export default Squad;
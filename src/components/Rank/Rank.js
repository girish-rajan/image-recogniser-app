import React from 'react';


const Rank=({name, entries})=>{
    return <div >
        <p className='f3 tc  white pao pv0 mv0'> 
        {name}, your current entry count is
        </p>
        <p className='f1 tc pa1 pv0 mv0 white '> 
         #{entries}
        </p>
    </div>
}

export default Rank;
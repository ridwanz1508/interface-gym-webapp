import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../Images/1.svg';
import fimage2 from '../Images/2.svg';
import fimage3 from '../Images/3.svg';
import fimage4 from '../Images/4.svg';

function Feature() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="WeightLifting" />
            <Featurebox image={fimage2} title="Spesific Muscle" />
            <Featurebox image={fimage3} title="Flex Your Muscle" />
            <Featurebox image={fimage4} title="Cardio Exercise" />
        </div>
    </div>
  )
}

export default Feature;
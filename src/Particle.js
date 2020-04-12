import React from 'react';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value : 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
       
    }
}


class Particle extends Particles {
    render(){
    return (
        <Particles 
            params={particleOpt} />
    );
};
};

export default Particle;
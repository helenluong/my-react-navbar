import React from 'react';
import Mybody from './body'
import Myfooter from '../footer'
import Myheader from '../header'
import Myabout from './about'
import Mynavbar from '../navbar'

const index = () => {
    return (
        <div>
            <Mybody/>
            <Myfooter/>
            <Myheader/>
            <Myabout/>
            <Mynavbar/>
        </div>
    );
};

export default index;
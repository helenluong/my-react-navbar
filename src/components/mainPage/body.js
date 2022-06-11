import React from 'react';

const body = () => {
    return (
        <div>
            <h1>FIRST TUTORIAL</h1>
            <h2>HOW TO UPLOAD A TOTALLY NEW FILE TO GITHUB</h2>
           <p> There are 6 steps to upload a file from VScode to Github: <br/>;
                1st step: Open your Github and create a new repository by colapsing the "plus" icon on the top right of your screen. <br/>;
                2nd step: Type your file name and then click "create" button. Note: you might not need to choose "add a readme file" for showing the Git code in the next step. <br/>;
                3rd step: Copy the first paragragh of Github code and paste into the terminal in your VScode. <br/>;
                4th step: Type "git add (your file name) . " and then Enter. If there is no error found in your terminal, come back Github and load your page again to check the current state. <br/>;
                5th step: Type "git commit m-'your message'" then Enter and type "git push" to submit your code. <br/>;
                6th step: You will see changes in your Github if everything works out.
            </p> 
        </div>
    );
};

export default body;
import React from 'react';

const App = () => {

    const startingChinchillas = [
        {
            name: 'snowy',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbU4sq8yjjTqhlSAb6y9T2-zBCOeCnb9ij-P5LarYp0XZOwhoIk4FIPZmIUSNToVVkKU&usqp=CAU'
        },
        {
            name: 'marv',
            imgURL: 'https://i.pinimg.com/originals/2d/60/df/2d60df43e06b1735adbe5c234f69cde3.jpg'
        },
        {
            name: 'mort',
            imgURL: 'https://static.wixstatic.com/media/e84d8b_d72cb55e00a749288e6be75b3a2fadbe~mv2.jpg/v1/crop/x_99,y_4,w_780,h_607/fill/w_560,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e84d8b_d72cb55e00a749288e6be75b3a2fadbe~mv2.jpg'
        },
        {
            name: 'charlie',
            imgURL: 'https://stkittsvet.co.uk/wp-content/uploads/2019/06/images-chincilla.jpg' //'./images/img1.jpeg'
        },
    ];

    return(
        <div>
            <img src={startingChinchillas[0].imgURL} />
        </div>
    )
}

export default App;

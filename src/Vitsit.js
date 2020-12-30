import React, { useEffect, useState } from 'react';



const Vitsit = ({vitsit}) => {
    const [count, setCount] = useState(0);
    
    const [iideet, setIideet] = useState([]);

    useEffect(() => {
        let lasku = count;

        for (let i=0; i < vitsit.length; i++){
            let id = vitsit[i].id;

            if(!iideet.includes(id)){
                lasku++;

                let temp = [...iideet];
                temp.push(id);

                setIideet(temp);
            }
        }

        setCount(lasku);
    },[vitsit])


    return (
        <div data-testid="laatikot" className="laatikot">
            {vitsit.length === 0 && <p>No jokes , select category</p>}

            <div>
                {vitsit.map( (item, index) => {
                    return (
                        <div key={index} className="vitsi">
                            {item.joke}
                        </div>
                    )
                })}
            </div>

            <div className="oikealaatikko">
                <div className="laskuri">
                    <p>{count}</p>
                    <p>Jokes shown so far</p>
                </div>
            </div>

        </div>
    );
}

export default Vitsit;
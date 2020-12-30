import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Valitsija = ({vitsit, setVitsit}) => {
    const [maara, setMaara] = useState(10);
    const [kategoriat, setKategoriat] = useState([]);
    const [ladattu] = useState(true);
    const [valittuKategoria, setValittuKategoria] = useState("");
    const [etuNimi, setEtuNimi] = useState("");
    const [sukuNimi, setSukuNimi] = useState("");
    
    

    const asetaNumero = (value) => { 
        if (value >= 1) {
            setMaara(value);
        }
    }

    const lataa_kategoriat = () => {
        let base_url = "http://api.icndb.com/categories";

        fetch(base_url)
         .then((resp) => {
             return resp.json();
         })
         .then((json) => {
             setKategoriat(json.value);
         });
    };

    useEffect(() => {   
            lataa_kategoriat();   
    }, [ladattu]);

    const lataa_vitsit = () => {
        let firstName = "Chuck";
        let lastName ="Norris";
        let base_url = "";

        if (etuNimi !== "") {
            firstName = etuNimi;
        }
        if (sukuNimi !== "") {
            lastName = sukuNimi;
        }
        if (valittuKategoria === "") {
            base_url = "http://api.icndb.com/jokes/random/"+maara+"?firstName="+firstName+"&lastName="+lastName;
        }else{
            base_url = "http://api.icndb.com/jokes/random/"+maara+"?limitTo=["+valittuKategoria+"]&firstName="+firstName+"&lastName="+lastName;
        }
        //http://api.icndb.com/jokes/random?limitTo=Array&firstName=John&lastName=Doe/3
        

        fetch(base_url)
         .then((resp) => {
             return resp.json();
         })
         .then((json) => {
             setVitsit(json.value);
         })

        
    }


    return (
        <div>
            <div className="valitsimet">
                
            <Dropdown className="dropdown" options={kategoriat} onChange={(e) => setValittuKategoria(e.value)} placeholder="Category" />

            <input data-testid="maara" type='number' value={maara} onChange={(e) => asetaNumero(e.target.value)}/>

            <input type="text" value={etuNimi} onChange={(e) => setEtuNimi(e.target.value)} placeholder="Chuck"/>

            <input type="text" value={sukuNimi} onChange={(e) => setSukuNimi(e.target.value)} placeholder="Norris"/>
            </div>

            <button data-testid="nappula" onClick={() => lataa_vitsit()}>Fetch</button>
            
        </div>
    );
}

export default Valitsija;
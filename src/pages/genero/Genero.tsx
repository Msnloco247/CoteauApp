import Page from '../Page';
import {
    IonButton,
    IonInput,
    IonItem
  } from '@ionic/react';
import axios from 'axios';
import { useState } from 'react';

const Genero: React.FC = () => {
    const [name, setName] = useState<string | null | undefined>(null);
    const [gender, setGender] = useState<string | null >(null);

    const handleClick  = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            try {
                const response = await axios.get('https://api.genderize.io', {
                  params: {
                    name
                  }
                });
                setGender(response.data.gender);
              } catch (error) {
                console.error('Error fetching the gender:', error);
                setGender('Error');
              }
      
    }
  return (
   <Page  name='Genero Por Nombre'>
        <h2>Detector de genero por nombre</h2>
        <p>Al insertar tu nombre se detecta el genero, dando la informacion en base al color, si es azul es hombre, si es rosa es mujer</p>
        <br /> 
        <form onSubmit={ handleClick} style={{ marginTop:'2rem'}}>
            <IonItem>
                <IonInput required minlength={3} value={name !== null ? name : ''} onIonChange={(e) => setName(e.detail.value)} label="Nombre" placeholder='Inserta tu nombre' type="text" />
            </IonItem>
            <br />
            <IonButton onClick={(e) => e.preventDefault()} type='submit' fill='outline' color={'success'} shape={'round'}>Enviar</IonButton>
        </form>
        <div style={{ padding:'20px',marginTop:'20px',  borderRadius:'999px',
         backgroundColor: `${gender === 'male' ? 'blue' : gender === 'female' ? 'pink' : "undefined"  }`  }}></div>
   </Page>
  );
};

export default Genero;
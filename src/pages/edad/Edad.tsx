import Page from '../Page';
import {
    IonButton,
    IonInput,
    IonItem
  } from '@ionic/react';
import axios from 'axios';
import { useState } from 'react';

const Edad: React.FC = () => {
    const [name, setName] = useState<string | null | undefined>(null);
    const [age, setAge] = useState<number | null >(null);

    const handleClick  = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            try {
                const response = await axios.get('https://api.agify.io', {
                  params: {
                    name
                  }
                });
                setAge(response.data.age);
              } catch (error) {
                console.error('Error fetching the age:', error);
                setAge(null);
              }
      
    }
  return (
   <Page name='Determinar edad por nombre'>
        <h2>Determinar edad por nombre</h2>

        <p>Al insertar tu nombre se detecta la edad, dando la informacion en base a la imagen demostrada debajo</p>
        <br /> 
        <form onSubmit={ handleClick} style={{ marginTop:'2rem'}}>
            <IonItem>
                <IonInput required minlength={3} value={name !== null ? name : ''} onIonChange={(e) => setName(e.detail.value)} label="Nombre:" placeholder='Inserta tu nombre' type="text" />
            </IonItem>
            <br />
            <IonButton onClick={(e) => e.preventDefault()} type='submit' fill='outline' color={'success'} shape={'round'}>Enviar</IonButton>
        </form>
        <div>
        <br />

          {
            age === null ? '' :
            age != null && age <= 17 ? 'Menor' :
            age != null && age <= 45 ? 'Edad Media' :
            'Edad Adulto'
          }
        </div>
   </Page>
  );
};

export default Edad;
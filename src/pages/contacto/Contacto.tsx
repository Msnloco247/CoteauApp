import Page from '../Page';
import Image from '../../assets/image.jpeg'; 

const Contacto: React.FC = () => {

  return (
   <Page name='Contacto'>
    <h2>Abner Aguilar</h2>
    <p>Correo: abnerworks12@gmail.com</p>
    <img width={200} style={{marginLeft:'2rem'}} src={Image} alt="tools" />
   </Page>
  );
};

export default Contacto;
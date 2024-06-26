import Page from '../Page';
import Tools from '../../assets/tools.png'; 

const Inicio: React.FC = () => {

  return (
   <Page name='Inicio'>

      <img width={300} style={{marginLeft:'2rem'}} src={Tools} alt="tools" />
   </Page>
  );
};

export default Inicio;
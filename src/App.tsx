import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './pages/Inicio/Inicio';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Genero from './pages/genero/Genero';
import Edad from './pages/edad/Edad';
import Universidades from './pages/universidades/Universidades';
import Clima from './pages/clima/Clima';
import Noticias from './pages/noticias/Noticias';
import Contacto from './pages/contacto/Contacto';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
          <Route path="/" exact={true}>
              <Redirect to="/Inicio" />
            </Route>
            
            <Route path="/Inicio" component={Inicio} exact={true} />
            <Route path="/Genero" component={Genero} exact={true} />
            <Route path="/Edad" component={Edad} exact={true} />
            <Route path="/Universidad" component={Universidades} exact={true} />
            <Route path="/Clima" component={Clima} exact={true} />
            <Route path="/Noticia" component={Noticias} exact={true} />
            <Route path="/Contacto" component={Contacto} exact={true} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

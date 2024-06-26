import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { addSharp, archiveOutline, archiveSharp, bookOutline, bookmarkOutline, calculatorOutline, calendarNumber, calendarNumberOutline, heartOutline, heartSharp, home, languageOutline, logoWordpress, mailOutline, mailSharp, moon, paperPlaneOutline, paperPlaneSharp, person, shareSharp, tabletPortrait, trailSign, trashOutline, trashSharp, videocamOffOutline, videocamOutline, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio 💬',
    url: '/Inicio',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Genero Por Nombre 💬',
    url: '/Genero',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Edad Por Nombre 💬',
    url: '/Edad',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Universidad Por Pais 💬',
    url: '/Universidad',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Clima en RD 💬',
    url: '/Clima',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Noticias 💬',
    url: '/Noticia',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Contacto 💬',
    url: '/Contacto',
    iosIcon: home,
    mdIcon: home
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Aplicación Móvil Temática</IonListHeader>
          <IonNote>Abner Aguilar</IonNote>


          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}

          
        </IonList>

      </IonContent>
      
    </IonMenu>
  );
};

export default Menu;

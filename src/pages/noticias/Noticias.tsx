import Page from '../Page';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

interface Post {
    id: number;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    link: string;
  }
const Noticias: React.FC = () => {
    
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [logoUrl, setLogoUrl] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get('https://kinsta.com/wp-json/wp/v2/posts', {
            params: {
              per_page: 3
            }
          });
          setPosts(response.data);
        } catch (error) {
          console.error('Error fetching posts:', error);
          setError('Error fetching posts');
        } finally {
          setLoading(false);
        }
      };
  
      const fetchLogo = async () => {
        try {
          const response = await axios.get('https://kinsta.com/wp-json');
          setLogoUrl(response.data.logo_url);
        } catch (error) {
          console.error('Error fetching logo:', error);
          setError('Error fetching logo');
        }
      };
  
      fetchPosts();
      fetchLogo();
    }, []);
  return (
    <Page name='Clima en RD'>
      

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {logoUrl && <img src={logoUrl} alt="Logo" style={{ width: '100px', margin: '0 auto', display: 'block' }} />}
      {posts.map((post) => (
        <IonCard key={post.id}>
          <IonCardHeader>
            <IonCardTitle>{post.title.rendered}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <IonButton href={post.link} target="_blank" rel="noopener noreferrer">
              Leer Mas
            </IonButton>
          </IonCardContent>
        </IonCard>
      ))}

  </Page>
  );
};

export default Noticias;
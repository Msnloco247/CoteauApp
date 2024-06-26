import Page from "../Page";
import { IonButton, IonInput, IonItem, IonList, IonLabel } from "@ionic/react";
import axios from "axios";
import { useState } from "react";

interface University {
    name: string;
    web_pages: string[];
    domains: string[];
}

const Universidades: React.FC = () => {
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUniversities([]);
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search`,
        {
          params: {
            country: country,
          },
        }
      );
      setUniversities(response.data);
    } catch (error) {
      console.error("Error fetching the universities:", error);
      setError("Error fetching the universities");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: CustomEvent) => {
    const target = event.target as HTMLInputElement;
    setCountry(target.value);
  };

  return (
    <Page name="Universidades por pais">
   
    <h2>Detector de universidades por nombre del pais en ingles</h2>
        <p>
            Al insertar el nombre de un pais se da la informacion de las
            universidades que hay en este
        </p>
        <br />
        <form onSubmit={handleClick} style={{ marginTop: "2rem" }}>
            <IonItem>
            <IonInput
                required
                minlength={3}
                value={country !== null ? country : ""}
                onIonChange={handleInputChange}
                label="Nombre"
                placeholder="Inserta el nombre del pais"
                type="text"
                clearInput
            />
            </IonItem>
            <br />
            <IonButton
            onClick={(e) => e.preventDefault()}
            type="submit"
            fill="outline"
            color={"success"}
            shape={"round"}
            >
            Enviar
            </IonButton>
        </form>

      {loading && <p style={{color:'green', marginTop:'2rem'}}>Cargando...</p>}
      {error && <p>{error}</p>}
      <IonList style={{marginTop:'2.5rem'}}>
        {universities.map((university, index) => (
          <IonItem  key={index}>
            <IonLabel >
              <h2>{university.name}</h2>
              <p>Domain: {university.domains.join(", ")}</p>
              <p>
                Website:{" "}
                <a
                  href={university.web_pages[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {university.web_pages[0]}
                </a>
              </p>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </Page>
  );
};

export default Universidades;

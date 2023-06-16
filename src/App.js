import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Paulo"
          description="Brecker o goleiro"
          music="musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Cezar"
          description="Olhando para a câmera"
          music="encarando"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Pow"
          description="Brecker o goleiro"
          music="musica épica"
        />
      </div>
      <header className="App-header"></header>
    </div>
  );
}

export default App;

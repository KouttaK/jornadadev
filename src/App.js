import "./App.css";
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
        likes={100}
        messages={200}
        shares={300}
        name="Lucas"
        description="Brecker o goleiro"
        music="musica épica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
        likes={111}
        messages={222}
        shares={333}
        name="pedro"
        description="Brica pulando"
        music="Calp your hands"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        <Video 
        likes={444}
        messages={555}
        shares={666}
        name="vinicius"
        description="gato pulando"
        music="musica épica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        <Video 
        likes={777}
        messages={888}
        shares={999}
        name="Cammilly"
        description="gatinha defensora"
        music="musica épica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  );
}

export default App;

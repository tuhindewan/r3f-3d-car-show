import "./App.css";
import { Canvas } from "@react-three/fiber";
import { CustomizationProvider } from "./contexts/Customization";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";

function App() {
    return (
        <CustomizationProvider>
            <div className="App">
                <Canvas dpr={[1, 2]}>
                    <color attach="background" args={["#213547"]} />
                    <fog attach="fog" args={["#213547", 10, 20]} />
                    <Experience />
                </Canvas>
                <Configurator/>
            </div>
        </CustomizationProvider>
    );
}

export default App;

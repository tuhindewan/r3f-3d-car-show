import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import CarShow from './Components/CarShow';
import './style.css';

function App() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows>
                <CarShow/>
            </Canvas>
        </Suspense>
    );
}

export default App;

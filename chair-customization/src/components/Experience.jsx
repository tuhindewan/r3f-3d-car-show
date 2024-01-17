import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei"

export default function Experience() {
    return (
        <PresentationControls
            speed={1.5}
            global
            polar={[-0.1, Math.PI / 4]}
            zoom={0.7}
        >
            <Stage environment="city" intensity={0.6} contactShadow={false}>
                <mesh>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                />
            </mesh>
        </PresentationControls>
    )
}

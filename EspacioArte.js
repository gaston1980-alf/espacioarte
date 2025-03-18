import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const defaultImages = [
  "/images/jardin1.jpg",
  "/images/jardin2.jpg",
  "/images/interior1.jpg",
  "/images/interior2.jpg",
];

export default function EspacioArte() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % defaultImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <motion.h1 className="text-4xl font-bold mt-6" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        Espacio Arte
      </motion.h1>
      <p className="text-lg text-gray-600 mt-2 text-center max-w-xl">
        Organizamos eventos únicos con mobiliario de lujo y decoración impecable tanto en jardines como en interiores.
      </p>
      <Card className="mt-6 w-full max-w-3xl">
        <CardContent className="flex flex-col items-center">
          <motion.div className="relative w-full h-80" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            {!imageError ? (
              <Image 
                src={defaultImages[currentImage]} 
                alt="Decoración" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-lg" 
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                <p className="text-gray-500">Imagen no disponible</p>
              </div>
            )}
          </motion.div>
          <Button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={nextImage}>
            Cambiar Imagen
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

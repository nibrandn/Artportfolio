import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { X } from 'lucide-react';

export function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <section id="characters" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Character Design
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              className="group cursor-pointer"
              onClick={() => setSelectedCharacter(character)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-square overflow-hidden bg-gray-100 mb-4 rounded-lg">
                <ImageWithFallback
                  src={character.imageUrl}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl mb-2">{character.name}</h3>
              <p className="text-gray-600 leading-relaxed">{character.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Character Detail Modal */}
      {selectedCharacter && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCharacter(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity"
            onClick={() => setSelectedCharacter(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square overflow-hidden bg-gray-900 rounded-lg">
                <ImageWithFallback
                  src={selectedCharacter.imageUrl}
                  alt={selectedCharacter.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-white p-6">
                <h3 className="text-3xl md:text-4xl mb-4">{selectedCharacter.name}</h3>
                <p className="text-xl text-gray-300 mb-6">
                  {selectedCharacter.description}
                </p>
                {selectedCharacter.details && (
                  <p className="text-lg text-gray-400">{selectedCharacter.details}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

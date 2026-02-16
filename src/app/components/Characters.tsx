import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

interface Character {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  details?: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "The Wanderer",
    description: "A solitary figure exploring unknown territories.",
    imageUrl: "https://images.unsplash.com/photo-1583934555852-537536e49071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTk1NTQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: "Created as part of a character development series, this figure represents the journey of self-discovery."
  },
  {
    id: 2,
    name: "The Dreamer",
    description: "Lost in thought, caught between reality and imagination.",
    imageUrl: "https://images.unsplash.com/photo-1716901548718-da465a9060fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwMDU0MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: "An exploration of inner worlds through visual metaphor and color."
  },
  {
    id: 3,
    name: "The Guardian",
    description: "A protector standing watch over sacred spaces.",
    imageUrl: "https://images.unsplash.com/photo-1731322292458-79e4d358d074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBzY3VscHR1cmV8ZW58MXx8fHwxNzcwMDY2Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: "Inspired by mythology and folklore, this character embodies strength and duty."
  },
  {
    id: 4,
    name: "The Trickster",
    description: "Playful and mischievous, defying expectations.",
    imageUrl: "https://images.unsplash.com/photo-1598266488814-e458d57cdc0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwcGFpbnRpbmclMjB2aWJyYW50fGVufDF8fHx8MTc3MDA2Njc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: "A character study in contradiction and chaos, bringing energy and unpredictability."
  },
  {
    id: 5,
    name: "The Sage",
    description: "Wise and contemplative, holder of ancient knowledge.",
    imageUrl: "https://images.unsplash.com/photo-1741038273247-c70c17018af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwbGFuZHNjYXBlJTIwYXJ0fGVufDF8fHx8MTc2OTk4Nzc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: "Representing wisdom and tranquility, this character guides others through their journey."
  },
  {
    id: 6,
    name: "The Rebel",
    description: "Challenging the status quo with fierce determination.",
    imageUrl: "https://images.unsplash.com/photo-1637186209526-652da1746ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYXJ0d29ya3xlbnwxfHx8fDE3NzAwNjY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: "Born from themes of resistance and change, this character refuses to conform."
  },
];

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
          Characters
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

import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

interface StoryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  medium?: string;
}

const storyItems: StoryItem[] = [
  {
    id: 1,
    title: "The Beginning",
    description: "A narrative exploration of origins and creative awakening through visual storytelling.",
    imageUrl: "https://images.unsplash.com/photo-1716901548718-da465a9060fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwMDU0MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024",
    medium: "Mixed Media"
  },
  {
    id: 2,
    title: "Journey Through Color",
    description: "An emotional journey depicted through vibrant landscapes and abstract forms.",
    imageUrl: "https://images.unsplash.com/photo-1741038273247-c70c17018af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwbGFuZHNjYXBlJTIwYXJ0fGVufDF8fHx8MTc2OTk4Nzc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024",
    medium: "Watercolor"
  },
  {
    id: 3,
    title: "Digital Narratives",
    description: "Stories told through the lens of digital art and contemporary visual language.",
    imageUrl: "https://images.unsplash.com/photo-1637186209526-652da1746ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYXJ0d29ya3xlbnwxfHx8fDE3NzAwNjY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025",
    medium: "Digital Art"
  },
  {
    id: 4,
    title: "Portrait of Time",
    description: "A series exploring the passage of time through portraiture and symbolism.",
    imageUrl: "https://images.unsplash.com/photo-1583934555852-537536e49071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTk1NTQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025",
    medium: "Oil on Canvas"
  },
];

export function Story() {
  const [selectedItem, setSelectedItem] = useState<StoryItem | null>(null);

  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Story
        </motion.h2>

        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My artistic journey is one of continuous exploration and discovery. Each piece tells a story, 
            whether through color, form, or the emotions they evoke. These works represent pivotal moments 
            in my creative evolution.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {storyItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4 rounded-lg">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl mb-2">{item.title}</h3>
              {item.medium && <p className="text-gray-500 mb-2">{item.medium}, {item.year}</p>}
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity"
            onClick={() => setSelectedItem(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square overflow-hidden bg-gray-900 rounded-lg">
                <ImageWithFallback
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="text-white p-6">
                <h3 className="text-3xl md:text-4xl mb-4">{selectedItem.title}</h3>
                {selectedItem.medium && (
                  <p className="text-xl text-gray-300 mb-4">
                    {selectedItem.medium}, {selectedItem.year}
                  </p>
                )}
                <p className="text-lg text-gray-400">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

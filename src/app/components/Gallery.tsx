import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Artwork {
  id: number;
  title: string;
  medium: string;
  year: string;
  imageUrl: string;
  description: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Abstract Emotions",
    medium: "Acrylic on Canvas",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1716901548718-da465a9060fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwMDU0MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A vibrant exploration of color and emotion through abstract forms."
  },
  {
    id: 2,
    title: "Serene Landscapes",
    medium: "Watercolor",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1741038273247-c70c17018af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwbGFuZHNjYXBlJTIwYXJ0fGVufDF8fHx8MTc2OTk4Nzc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Capturing the tranquility of nature through delicate watercolor techniques."
  },
  {
    id: 3,
    title: "Digital Dreams",
    medium: "Digital Art",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1637186209526-652da1746ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYXJ0d29ya3xlbnwxfHx8fDE3NzAwNjY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Modern digital compositions blending technology and creativity."
  },
  {
    id: 4,
    title: "Portrait Study",
    medium: "Oil on Canvas",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1583934555852-537536e49071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTk1NTQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A contemplative portrait exploring light and shadow."
  },
  {
    id: 5,
    title: "Contemporary Forms",
    medium: "Sculpture",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1731322292458-79e4d358d074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBzY3VscHR1cmV8ZW58MXx8fHwxNzcwMDY2Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Three-dimensional exploration of space and materiality."
  },
  {
    id: 6,
    title: "Mixed Narratives",
    medium: "Mixed Media",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1740508905751-0e6573f7216c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG1lZGlhJTIwYXJ0d29ya3xlbnwxfHx8fDE3NzAwMjY2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Combining various materials to tell a unique story."
  },
  {
    id: 7,
    title: "Vibrant Energy",
    medium: "Acrylic",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1598266488814-e458d57cdc0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwcGFpbnRpbmclMjB2aWJyYW50fGVufDF8fHx8MTc3MDA2Njc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bold colors and dynamic brushwork capture raw energy."
  },
  {
    id: 8,
    title: "Captured Moments",
    medium: "Photography",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1610621062045-ef5f7201bb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwYXJ0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcwMDY2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Fine art photography exploring composition and light."
  },
];

export function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filters = ['all', 'painting', 'digital', 'sculpture', 'photography'];
  
  const getCategory = (medium: string): string => {
    if (medium.includes('Acrylic') || medium.includes('Oil') || medium.includes('Watercolor')) return 'painting';
    if (medium.includes('Digital')) return 'digital';
    if (medium.includes('Sculpture')) return 'sculpture';
    if (medium.includes('Photography')) return 'photography';
    return 'other';
  };

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => getCategory(art.medium) === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>
        
        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filterOption) => (
            <motion.button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-2 rounded-full capitalize transition-colors ${
                filter === filterOption 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterOption}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((artwork, index) => (
              <motion.div 
                key={artwork.id}
                className="group cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className="aspect-square overflow-hidden bg-gray-100 mb-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.h3 
                  className="text-xl mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {artwork.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {artwork.medium}, {artwork.year}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArtwork(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity"
              onClick={() => setSelectedArtwork(null)}
              aria-label="Close"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div 
              className="max-w-6xl w-full" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div 
                  className="aspect-square overflow-hidden bg-gray-900 rounded-lg"
                  layoutId={`artwork-${selectedArtwork.id}`}
                >
                  <ImageWithFallback
                    src={selectedArtwork.imageUrl}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                
                <motion.div 
                  className="text-white p-6"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <h3 className="text-3xl md:text-4xl mb-4">{selectedArtwork.title}</h3>
                  <p className="text-xl text-gray-300 mb-4">
                    {selectedArtwork.medium}, {selectedArtwork.year}
                  </p>
                  <p className="text-lg text-gray-400">{selectedArtwork.description}</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
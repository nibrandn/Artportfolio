import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

interface Drawing {
  id: number;
  title: string;
  medium: string;
  duration?: string;
  imageUrl: string;
  year: string;
}

const drawings: Drawing[] = [
  {
    id: 1,
    title: "Study #1",
    medium: "Charcoal on Paper",
    duration: "20 minutes",
    imageUrl: "https://images.unsplash.com/photo-1583934555852-537536e49071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTk1NTQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024"
  },
  {
    id: 2,
    title: "Gesture Drawing",
    medium: "Graphite",
    duration: "5 minutes",
    imageUrl: "https://images.unsplash.com/photo-1610621062045-ef5f7201bb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwYXJ0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcwMDY2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024"
  },
  {
    id: 3,
    title: "Long Pose",
    medium: "Conte Crayon",
    duration: "3 hours",
    imageUrl: "https://images.unsplash.com/photo-1716901548718-da465a9060fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwMDU0MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025"
  },
  {
    id: 4,
    title: "Study #2",
    medium: "Ink on Paper",
    duration: "15 minutes",
    imageUrl: "https://images.unsplash.com/photo-1741038273247-c70c17018af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwbGFuZHNjYXBlJTIwYXJ0fGVufDF8fHx8MTc2OTk4Nzc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025"
  },
  {
    id: 5,
    title: "Dynamic Pose",
    medium: "Charcoal",
    duration: "30 minutes",
    imageUrl: "https://images.unsplash.com/photo-1598266488814-e458d57cdc0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwcGFpbnRpbmclMjB2aWJyYW50fGVufDF8fHx8MTc3MDA2Njc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024"
  },
  {
    id: 6,
    title: "Anatomy Study",
    medium: "Graphite on Toned Paper",
    duration: "1 hour",
    imageUrl: "https://images.unsplash.com/photo-1637186209526-652da1746ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYXJ0d29ya3xlbnwxfHx8fDE3NzAwNjY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025"
  },
  {
    id: 7,
    title: "Quick Sketch",
    medium: "Pencil",
    duration: "2 minutes",
    imageUrl: "https://images.unsplash.com/photo-1740508905751-0e6573f7216c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG1lZGlhJTIwYXJ0d29ya3xlbnwxfHx8fDE3NzAwMjY2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024"
  },
  {
    id: 8,
    title: "Detailed Study",
    medium: "Charcoal and White Chalk",
    duration: "2 hours",
    imageUrl: "https://images.unsplash.com/photo-1731322292458-79e4d358d074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBzY3VscHR1cmV8ZW58MXx8fHwxNzcwMDY2Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025"
  },
];

export function FigureDrawings() {
  const [selectedDrawing, setSelectedDrawing] = useState<Drawing | null>(null);

  return (
    <section id="figure-drawings" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Figure Drawings
        </motion.h2>

        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            A collection of figure studies ranging from quick gesture drawings to detailed long poses. 
            These works capture the human form through observation and practice.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {drawings.map((drawing, index) => (
            <motion.div 
              key={drawing.id}
              className="group cursor-pointer"
              onClick={() => setSelectedDrawing(drawing)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-3 rounded-lg">
                <ImageWithFallback
                  src={drawing.imageUrl}
                  alt={drawing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg mb-1">{drawing.title}</h3>
              <p className="text-sm text-gray-600">{drawing.medium}</p>
              {drawing.duration && (
                <p className="text-sm text-gray-500">{drawing.duration}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Drawing Detail Modal */}
      {selectedDrawing && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDrawing(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity"
            onClick={() => setSelectedDrawing(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[3/4] overflow-hidden bg-gray-900 rounded-lg">
                <ImageWithFallback
                  src={selectedDrawing.imageUrl}
                  alt={selectedDrawing.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="text-white p-6">
                <h3 className="text-3xl md:text-4xl mb-4">{selectedDrawing.title}</h3>
                <p className="text-xl text-gray-300 mb-2">
                  {selectedDrawing.medium}
                </p>
                {selectedDrawing.duration && (
                  <p className="text-lg text-gray-400 mb-4">
                    Duration: {selectedDrawing.duration}
                  </p>
                )}
                <p className="text-gray-500">{selectedDrawing.year}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

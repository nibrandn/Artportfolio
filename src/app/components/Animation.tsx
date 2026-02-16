import { motion } from 'motion/react';
import { useState } from 'react';
import { Play } from 'lucide-react';

interface AnimationItem {
  id: number;
  title: string;
  description: string;
  provider: 'vimeo' | 'youtube';
  videoId: string;
  year: string;
  thumbnail?: string;
}

const animations: AnimationItem[] = [
  {
    id: 1,
    title: "MeiHouWang",
    description: "On his first day of preschool, Sun goes toe-to-toe with his new classmates, channeling the strength of the legendary Monkey King to earn their respect and recognition.",
    provider: 'vimeo',
    videoId: "817153957",
    year: "2024"
  },
  {
    id: 2,
    title: "Techie Tots - RGB Magic!",
    description: "Responsible of Key Animation",
    provider: 'youtube',
    videoId: "IC9tfmWnmVo",
    year: "2024"
  },
  {
    id: 3,
    title: "Distant Star - Animated Poetry",
    description: "Responsible for Key Animation and leading animation team",
    provider: 'youtube',
    videoId: "jTm6XltgmKI",
    year: "2025"
  },
  {
    id: 4,
    title: "Short Loop",
    description: "Provided rough and clean animation for various shots",
    provider: 'youtube',
    videoId: "10KpAfOSpWg",
    year: "2025"
  },
];

export function Animation() {
  const [selectedVideo, setSelectedVideo] = useState<AnimationItem | null>(null);

  return (
    <section id="animation" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Animation
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {animations.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setSelectedVideo(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <img
                  src={
                    item.provider === 'vimeo'
                      ? `https://vumbnail.com/${item.videoId}.jpg`
                      : `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
                  }
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play size={28} className="ml-1" fill="currentColor" />
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.year}</p>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Video Player */}
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="mb-4">
                <h3 className="text-2xl text-white mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-400">{selectedVideo.description}</p>
              </div>
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                <iframe
                  src={
                    selectedVideo.provider === 'vimeo'
                      ? `https://player.vimeo.com/video/${selectedVideo.videoId}?autoplay=1`
                      : `https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&showinfo=0`
                  }
                  className="w-full h-full"
                  frameBorder="0"
                  allow={
                    selectedVideo.provider === 'vimeo'
                      ? 'autoplay; fullscreen; picture-in-picture'
                      : 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  }
                  allowFullScreen
                  title={selectedVideo.title}
                />
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

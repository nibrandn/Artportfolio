import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Palette, Award, Users, Sparkles, Mail, Instagram, Facebook } from 'lucide-react';
import profileImg from '@/img/newyearnewme_orig.jpg'

export function About() {

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About the Artist
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="aspect-square overflow-hidden bg-gray-200 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src={profileImg}
                alt="Artist profile picture"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Justin Ni is an artist based in Los Angeles, interested in telling stories centered on diversity.
                He graduated the Penny W. Stamps School of Art & Design at the University of Michigan where he studied animation and computer science. His short film about how cartoons shaped his Chinese-American identity has won multiple awards and is still touring film festivals around the world.
              </p>

              {/* Contact merged here */}
              <div className="pt-8 border-t pt-8">
                <h3 className="text-2xl mb-4">Get In Touch</h3>
                <p className="text-gray-700 mb-4">Interested in commissioning a piece, collaborating, or simply want to connect? I'd love to hear from you.</p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                  <a href="mailto:justinjni@gmail.com" className="flex items-center gap-3 text-lg hover:opacity-70 transition-opacity px-6 py-3 bg-black text-white rounded-full">
                    <Mail size={20} />
                    justinjni@gmail.com
                  </a>
                  <a href="tel:5209120747" className="flex items-center gap-3 text-lg hover:opacity-70 transition-opacity px-6 py-3 bg-black text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.07.78 3.03a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.05-1.05a2 2 0 0 1 2.11-.45c.96.4 1.98.66 3.03.78A2 2 0 0 1 22 16.92z" /></svg>
                    (520) 912-0747
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-pink-100">
                    <Instagram size={20} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Palette, Award, Users, Sparkles } from 'lucide-react';

interface Presentation {
  id: number;
  title: string;
  speakerDeckId: string;
  description: string;
}

const presentations: Presentation[] = [
  {
    id: 1,
    title: "My Creative Process",
    speakerDeckId: "50021f75cf1db900020005e7", // Sample SpeakerDeck ID - replace with your actual presentations
    description: "An overview of my artistic journey and methodologies"
  },
  {
    id: 2,
    title: "Character Development Workshop",
    speakerDeckId: "50021f75cf1db900020005e7",
    description: "Techniques and insights into creating compelling characters"
  },
];

export function About() {
  const stats = [
    { icon: Palette, label: 'Years Creating', value: '10+' },
    { icon: Award, label: 'Exhibitions', value: '25+' },
    { icon: Users, label: 'Happy Collectors', value: '150+' },
    { icon: Sparkles, label: 'Artworks Created', value: '300+' },
  ];

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
                src="https://images.unsplash.com/photo-1654870574819-ee447f65112d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW98ZW58MXx8fHwxNzcwMDY2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Artist workspace"
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
                Welcome to my creative space. I am a multidisciplinary artist working across various mediums 
                including painting, digital art, animation, and character design. My work explores the intersection 
                of storytelling, emotion, and visual expression.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Each piece is a journey into the depths of expression, where abstract concepts meet tangible 
                materials and animated worlds. Through my art, I aim to create visual narratives that resonate 
                with viewers on a personal level.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My artistic process is intuitive and experimental, constantly evolving as I discover new 
                techniques and perspectives. I believe art should evoke emotion, spark curiosity, and inspire 
                meaningful connections.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl mb-4">Education & Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• BFA in Fine Arts & Animation</li>
                  <li>• Multiple solo and group exhibitions</li>
                  <li>• Works in private collections worldwide</li>
                  <li>• Ongoing exploration of mixed media & digital techniques</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white p-6 rounded-lg text-center shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-gray-700" />
                <div className="text-3xl mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Presentations Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-3xl mb-8 text-center">Presentations & Talks</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {presentations.map((presentation, index) => (
                <motion.div
                  key={presentation.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://speakerdeck.com/player/${presentation.speakerDeckId}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      title={presentation.title}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl mb-2">{presentation.title}</h4>
                    <p className="text-gray-600">{presentation.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { Activity, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-teal-500 to-emerald-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Mission to Transform Health
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're dedicated to making health tracking simple, intelligent, and
              accessible for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-block p-4 bg-teal-50 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of health experts, engineers, and designers
              working together to revolutionize personal health tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-teal-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const stats = [
  {
    icon: <Users className="w-8 h-8 text-teal-500" />,
    value: '1M+',
    label: 'Active Users',
  },
  {
    icon: <Activity className="w-8 h-8 text-teal-500" />,
    value: '50M+',
    label: 'Activities Tracked',
  },
  {
    icon: <Target className="w-8 h-8 text-teal-500" />,
    value: '95%',
    label: 'Goal Achievement',
  },
  {
    icon: <Award className="w-8 h-8 text-teal-500" />,
    value: '10+',
    label: 'Industry Awards',
  },
];

const team = [
  {
    name: 'Saikoushik Nalubola',
    role: 'CEO & Founder',
    bio: '"Passionate innovator in AI, ML, and EV technology, exploring multimodal AI and crafting cutting-edge solutions for a smarter future."',

    image: 'https://pic.surf/44t',
  },
  {
    name: 'Sai Teja Miryala',
    role: 'Chief Technology Officer',
    bio: '"An expert in AI innovation and design, blending creativity with cutting-edge technology to craft impactful solutions and shape the future of intelligent systems.".',
    image: 'https://pic.surf/4md',
  },
  {
    name: 'Sunkari Sai',
    role: 'UI & UX Designer',
    bio: '"Creative thinker with a passion for AI innovation and design, dedicated to building smarter, user-centric solutions.".',
    image: 'https://pic.surf/2hh',
  },
];
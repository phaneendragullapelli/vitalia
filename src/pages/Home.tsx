import { motion } from 'framer-motion';
import { Activity, Heart, Brain, Droplets } from 'lucide-react';
import MetricCard from '../components/MetricCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 mix-blend-multiply" />
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
            alt="Wellness Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Your Journey to Wellness
              <span className="text-teal-400">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Track, analyze, and improve your health with AI-powered insights
            </p>
            <button className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition-colors">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            icon={<Activity className="w-8 h-8 text-teal-500" />}
            title="Activity Tracking"
            value="10,000+"
            subtitle="Daily Steps"
          />
          <MetricCard
            icon={<Heart className="w-8 h-8 text-rose-500" />}
            title="Heart Rate"
            value="72"
            subtitle="BPM Average"
          />
          <MetricCard
            icon={<Brain className="w-8 h-8 text-purple-500" />}
            title="Sleep Quality"
            value="8.2"
            subtitle="Hours/Night"
          />
          <MetricCard
            icon={<Droplets className="w-8 h-8 text-blue-500" />}
            title="Hydration"
            value="2.5L"
            subtitle="Daily Intake"
          />
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Transform Your Health Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mb-6 inline-block p-4 bg-teal-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <Activity className="w-8 h-8 text-teal-500" />,
    title: "AI-Powered Insights",
    description: "Get personalized recommendations based on your health data and goals"
  },
  {
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Real-time Tracking",
    description: "Monitor your vital signs and activities as they happen"
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: "Smart Notifications",
    description: "Stay on track with intelligent reminders and alerts"
  }
];
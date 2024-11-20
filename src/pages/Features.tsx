import { motion } from 'framer-motion';
import { Brain, Heart, Activity, Bell, Calendar, MessageSquare } from 'lucide-react';

export default function Features() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-500 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful Features for Your Health Journey
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover all the tools and features designed to help you achieve your wellness goals
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 p-3 bg-teal-50 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
    icon: <Brain className="w-8 h-8 text-teal-500" />,
    title: "AI-Powered Insights",
    description: "Get personalized health recommendations powered by advanced AI algorithms.",
    benefits: [
      "Personalized health insights",
      "Smart goal recommendations",
      "Adaptive fitness plans",
    ]
  },
  {
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Real-time Health Tracking",
    description: "Monitor your vital signs and health metrics in real-time.",
    benefits: [
      "Heart rate monitoring",
      "Sleep quality analysis",
      "Activity tracking",
    ]
  },
  {
    icon: <Activity className="w-8 h-8 text-blue-500" />,
    title: "Comprehensive Analytics",
    description: "Detailed analysis of your health data with actionable insights.",
    benefits: [
      "Progress tracking",
      "Trend analysis",
      "Performance metrics",
    ]
  },
  {
    icon: <Bell className="w-8 h-8 text-purple-500" />,
    title: "Smart Notifications",
    description: "Stay on track with intelligent reminders and alerts.",
    benefits: [
      "Medication reminders",
      "Workout notifications",
      "Health goal alerts",
    ]
  },
  {
    icon: <Calendar className="w-8 h-8 text-orange-500" />,
    title: "Calendar Integration",
    description: "Seamlessly integrate health activities with your calendar.",
    benefits: [
      "Appointment scheduling",
      "Workout planning",
      "Meal timing",
    ]
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
    title: "AI Health Assistant",
    description: "24/7 support from our intelligent health assistant.",
    benefits: [
      "Health questions answered",
      "Workout guidance",
      "Nutrition advice",
    ]
  },
];
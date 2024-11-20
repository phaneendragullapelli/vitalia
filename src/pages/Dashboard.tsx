import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Brain, Droplets, TrendingUp, Calendar } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, User!</h1>
          <p className="text-gray-600">Here's your health overview for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 ${stat.iconBg} rounded-lg`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Activity Overview</h2>
            <div className="flex space-x-2">
              {['overview', 'heart', 'sleep'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === tab
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[300px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className={`p-2 ${activity.iconBg} rounded-lg`}>
                  {activity.icon}
                </div>
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const quickStats = [
  {
    icon: <Activity className="w-6 h-6 text-teal-500" />,
    iconBg: 'bg-teal-50',
    title: 'Daily Steps',
    value: '8,439',
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    iconBg: 'bg-rose-50',
    title: 'Avg Heart Rate',
    value: '72 BPM',
  },
  {
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    iconBg: 'bg-purple-50',
    title: 'Sleep Score',
    value: '85%',
  },
  {
    icon: <Droplets className="w-6 h-6 text-blue-500" />,
    iconBg: 'bg-blue-50',
    title: 'Hydration',
    value: '2.1L',
  },
];

const activities = [
  {
    icon: <Activity className="w-5 h-5 text-teal-500" />,
    iconBg: 'bg-teal-50',
    title: 'Morning Run Completed',
    time: '2 hours ago',
  },
  {
    icon: <Heart className="w-5 h-5 text-rose-500" />,
    iconBg: 'bg-rose-50',
    title: 'Heart Rate Peak',
    time: '4 hours ago',
  },
  {
    icon: <Calendar className="w-5 h-5 text-indigo-500" />,
    iconBg: 'bg-indigo-50',
    title: 'Workout Scheduled',
    time: '5 hours ago',
  },
];

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Steps',
      data: [6500, 5900, 8000, 8100, 7800, 9000, 8439],
      borderColor: 'rgb(20, 184, 166)',
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};
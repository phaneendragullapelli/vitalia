import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MetricCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle: string;
}

export default function MetricCard({ icon, title, value, subtitle }: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-2xl font-bold text-teal-600">{value}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}
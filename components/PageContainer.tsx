'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function PageContainer({
  children,
  className = '',
  animate = true,
}: PageContainerProps) {
  const content = (
    <div className={`max-w-content mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={`max-w-content mx-auto px-6 md:px-12 ${className}`}
    >
      {children}
    </motion.div>
  );
}

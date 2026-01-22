import { motion } from 'framer-motion';
import {
  Calculator,
  FileText,
  BookOpen,
  Stamp,
  Headphones,
  Shield,
  Umbrella,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Calculator,
      titleKey: 'service.tax.title',
      descKey: 'service.tax.desc',
    },
    {
      icon: FileText,
      titleKey: 'service.itin.title',
      descKey: 'service.itin.desc',
    },
    {
      icon: BookOpen,
      titleKey: 'service.bookkeeping.title',
      descKey: 'service.bookkeeping.desc',
    },
    {
      icon: Stamp,
      titleKey: 'service.notary.title',
      descKey: 'service.notary.desc',
    },
    {
      icon: Headphones,
      titleKey: 'service.virtual.title',
      descKey: 'service.virtual.desc',
    },
    {
      icon: Shield,
      titleKey: 'service.workers.title',
      descKey: 'service.workers.desc',
    },
    {
      icon: Umbrella,
      titleKey: 'service.liability.title',
      descKey: 'service.liability.desc',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-4">
            {t('services.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

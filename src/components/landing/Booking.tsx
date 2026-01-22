import { motion } from 'framer-motion';
import { ClipboardList, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Booking = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: ClipboardList, labelKey: 'booking.step1', step: 1 },
    { icon: Clock, labelKey: 'booking.step2', step: 2 },
    { icon: CheckCircle, labelKey: 'booking.step3', step: 3 },
  ];

  return (
    <section id="booking" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header */}
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-4">
            {t('booking.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('booking.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('booking.subtitle')}
          </p>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
          >
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-3 shadow-soft">
                    <step.icon className="text-primary-foreground" size={28} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="font-medium text-foreground">
                      {t(step.labelKey)}
                    </span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="text-muted-foreground hidden md:block"
                    size={24}
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg px-10 py-7 shadow-soft"
            >
              {t('booking.cta')}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;

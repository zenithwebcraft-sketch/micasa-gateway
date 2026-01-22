import { motion } from 'framer-motion';
import { Award, Heart, Zap, UserCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Award, titleKey: 'about.value1.title', descKey: 'about.value1.desc' },
    { icon: Heart, titleKey: 'about.value2.title', descKey: 'about.value2.desc' },
    { icon: Zap, titleKey: 'about.value3.title', descKey: 'about.value3.desc' },
    { icon: UserCheck, titleKey: 'about.value4.title', descKey: 'about.value4.desc' },
  ];

  const stats = [
    { value: '10+', labelKey: 'about.stats.years' },
    { value: '1000+', labelKey: 'about.stats.clients' },
    { value: '5000+', labelKey: 'about.stats.services' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-4">
              {t('about.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              MiCasa MultiService LLC
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-border/50 bg-card hover:shadow-card transition-shadow">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                        <value.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground text-sm">
                          {t(value.titleKey)}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {t(value.descKey)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image placeholder */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated bg-gradient-to-br from-primary/20 to-accent/30 mb-8">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-5xl text-primary-foreground font-bold">M</span>
                  </div>
                  <p className="text-muted-foreground">Team Photo</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="text-center border-border/50 bg-card">
                    <CardContent className="p-4">
                      <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {t(stat.labelKey)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

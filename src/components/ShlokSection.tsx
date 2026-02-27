import { motion } from "framer-motion";

const shlokas = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    hindi: "तुम्हें कर्म करने का ही अधिकार है, फल पर कभी नहीं।",
    english: "You have the right to perform your duty, but never to its fruits.",
    source: "— Bhagavad Gita 2.47",
  },
  {
    sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्।",
    hindi: "विद्या विनय देती है, विनय से पात्रता आती है।",
    english: "Knowledge gives humility; from humility comes worthiness.",
    source: "— Hitopadesha",
  },
  {
    sanskrit: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।",
    hindi: "कार्य उद्यम से सिद्ध होते हैं, केवल इच्छाओं से नहीं।",
    english: "Tasks are accomplished through effort, not merely by wishing.",
    source: "— Hitopadesha",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ShlokSection = () => {
  return (
    <section className="section-padding border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
          Words of Wisdom
        </p>
      </motion.div>

      <div className="grid gap-16 md:gap-20 max-w-4xl">
        {shlokas.map((shlok, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="font-sanskrit text-xl md:text-2xl lg:text-3xl text-sanskrit leading-relaxed">
              {shlok.sanskrit}
            </p>
            <p className="font-sanskrit text-sm md:text-base text-muted-foreground">
              {shlok.hindi}
            </p>
            <p className="font-serif text-lg md:text-xl text-secondary-foreground italic">
              "{shlok.english}"
            </p>
            <p className="text-xs text-subtle tracking-wider">{shlok.source}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShlokSection;

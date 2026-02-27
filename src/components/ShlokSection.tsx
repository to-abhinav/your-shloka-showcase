import { motion } from "framer-motion";
import { useMemo } from "react";

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
  {
    sanskrit: "योगः कर्मसु कौशलम्।",
    hindi: "कर्मों में कुशलता ही योग है।",
    english: "Excellence in action is yoga.",
    source: "— Bhagavad Gita 2.50",
  },
  {
    sanskrit: "सत्यमेव जयते नानृतम्।",
    hindi: "सत्य की ही विजय होती है, असत्य की नहीं।",
    english: "Truth alone triumphs, not falsehood.",
    source: "— Mundaka Upanishad 3.1.6",
  },
  {
    sanskrit: "अहिंसा परमो धर्मः।",
    hindi: "अहिंसा सबसे बड़ा धर्म है।",
    english: "Non-violence is the highest duty.",
    source: "— Mahabharata",
  },
  {
    sanskrit: "तमसो मा ज्योतिर्गमय।",
    hindi: "अंधकार से प्रकाश की ओर ले चलो।",
    english: "Lead me from darkness to light.",
    source: "— Brihadaranyaka Upanishad 1.3.28",
  },
];

function getDailyShlok() {
  const start = new Date(2024, 0, 1).getTime();
  const now = new Date();
  const daysSinceStart = Math.floor((now.getTime() - start) / (1000 * 60 * 60 * 24));
  return shlokas[daysSinceStart % shlokas.length];
}

const ShlokSection = () => {
  const shlok = useMemo(() => getDailyShlok(), []);

  return (
    <section className="section-padding pt-32 border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Shlok of the Day
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl space-y-4"
      >
        <p className="font-sanskrit text-2xl md:text-3xl lg:text-4xl text-sanskrit leading-relaxed">
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
    </section>
  );
};

export default ShlokSection;

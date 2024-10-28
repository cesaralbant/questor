import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Loader2, Send, Target, Users, Calendar, TrendingUp, Globe2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Campaign {
  title: string;
  strategy: string;
  timeline: string;
  channels: string[];
  metrics: {
    reach: string;
    engagement: string;
    conversion: string;
  };
  recommendations: string[];
}

const generateCampaign = (prompt: string): Campaign => {
  return {
    title: "Latin America Makers Growth Initiative 2024",
    strategy: "Leverage the rapidly growing tech ecosystems across Latin America, focusing on key innovation hubs in São Paulo, Mexico City, and Buenos Aires to create inclusive, culturally-relevant maker communities.",
    timeline: "Q2 2024 - Q4 2024",
    channels: [
      "Regional tech conferences",
      "Local university partnerships",
      "Spanish/Portuguese tech communities",
      "LatAm startup accelerators",
      "Regional innovation labs"
    ],
    metrics: {
      reach: "25,000+ tech professionals across LatAm",
      engagement: "60% active participation rate",
      conversion: "35% community retention"
    },
    recommendations: [
      "Launch bilingual mentorship programs connecting LatAm makers with global experts",
      "Create region-specific hackathons focusing on local challenges",
      "Establish maker spaces in partnership with leading LatAm universities",
      "Develop cross-border collaboration programs between LatAm tech hubs",
      "Implement AI-powered matching for regional project collaboration",
      "Create specialized tracks for fintech and e-commerce innovations",
      "Partner with local tech companies for internship programs"
    ]
  };
};

const triggerConfetti = () => {
  const duration = 3000;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const interval: any = setInterval(() => {
    const particleCount = 50;

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    });

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    });
  }, 250);

  setTimeout(() => clearInterval(interval), duration);
};

export function AIDemo() {
  const [prompt, setPrompt] = useState('');
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showThinking, setShowThinking] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.length < 10 || isGenerating) return;

    setShowThinking(true);
    setIsGenerating(true);
    setCampaign(null);

    setTimeout(() => {
      const newCampaign = generateCampaign(prompt);
      setShowThinking(false);
      setCampaign(newCampaign);
      setIsGenerating(false);
      triggerConfetti();
    }, 2000);
  }, [prompt, isGenerating]);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Globe2 className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">LatAm Community Analyzer</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <motion.input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Try: 'Analyze maker communities in São Paulo' or 'Tech initiatives in Mexico City'"
                whileFocus={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                type="submit"
                disabled={prompt.length < 10 || isGenerating}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`shrink-0 px-6 py-4 rounded-xl flex items-center gap-2 ${
                  prompt.length < 10 || isGenerating
                    ? 'bg-gray-100 text-gray-400'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {isGenerating ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Analyze
                  </>
                )}
              </motion.button>
            </form>
          </div>

          <AnimatePresence mode="wait">
            {showThinking && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-8 bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Loader2 className="h-5 w-5 animate-spin text-indigo-600" />
                  <p className="text-gray-600">Analyzing LatAm community data and generating recommendations...</p>
                </div>
              </motion.div>
            )}

            {campaign && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-8 space-y-6"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-xl font-semibold mb-2">{campaign.title}</h4>
                  <p className="text-gray-600">{campaign.strategy}</p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-indigo-600 mb-2">
                      <Target className="h-5 w-5" />
                      <h5 className="font-medium">Reach</h5>
                    </div>
                    <p>{campaign.metrics.reach}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-indigo-600 mb-2">
                      <Users className="h-5 w-5" />
                      <h5 className="font-medium">Engagement</h5>
                    </div>
                    <p>{campaign.metrics.engagement}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-indigo-600 mb-2">
                      <TrendingUp className="h-5 w-5" />
                      <h5 className="font-medium">Conversion</h5>
                    </div>
                    <p>{campaign.metrics.conversion}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h5 className="font-medium mb-3">Recommended Actions</h5>
                  <ul className="space-y-2">
                    {campaign.recommendations.map((rec, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>{rec}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { IconChevronDown } from "@/components/icons";

const easeOut = [0.22, 1, 0.36, 1] as const;

const halfContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export function Hero() {
  return (
    <section className="hero" style={{ padding: "64px 0 0" }} aria-label="Willkommen im Tiger">
      <h1 className="sr-only">
        Restaurant Tiger Wil – Bar, Thai-Restaurant und Beiz in Wil SG
      </h1>
      <motion.div className="hero-half hero-tag" variants={halfContainer} initial="hidden" animate="show">
        <motion.div className="hero-photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1 }}>
          <motion.div
            style={{ position: "absolute", inset: 0 }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: easeOut }}
          >
            <Image src="/images/teller15.jpg" alt="" fill sizes="50vw" priority style={{ objectFit: "cover" }} />
          </motion.div>
        </motion.div>
        <div className="hero-overlay" />
        <motion.span className="hero-zeit" variants={fadeUp}>
          Tagsüber · ab 08:30
        </motion.span>
        <motion.h2 variants={fadeUp}>
          Kafi, Znüni &amp;
          <br />
          gutbürgerliche Küche
        </motion.h2>
        <motion.p variants={fadeUp}>
          Heinz kocht ehrliche Schweizer Kost – unkompliziert, fein und für alle. Die Beiz ist offen, der Stammtisch
          auch.
        </motion.p>
        <motion.span className="hand" variants={fadeUp}>
          wie deheim, eifach besser bedient
        </motion.span>
      </motion.div>

      <motion.div
        className="hero-half hero-nacht"
        variants={halfContainer}
        initial="hidden"
        animate="show"
        transition={{ delayChildren: 0.45 }}
      >
        <motion.div className="hero-photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1, delay: 0.2 }}>
          <motion.div
            style={{ position: "absolute", inset: 0 }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: easeOut }}
          >
            <Image src="/images/teller4.jpg" alt="" fill sizes="50vw" priority style={{ objectFit: "cover" }} />
          </motion.div>
        </motion.div>
        <div className="hero-overlay" />
        <motion.span className="hero-zeit" variants={fadeUp}>
          Abends · ab 18:00
        </motion.span>
        <motion.h2 variants={fadeUp}>
          Authentisch Thai,
          <br />
          frisch us em Wok
        </motion.h2>
        <motion.p variants={fadeUp}>
          Alex kocht jeden Abend frisch – keine Fertigsaucen, kein Buffet. Dafür braucht&apos;s eine Reservation. Es
          lohnt sich.
        </motion.p>
        <motion.span className="hand" variants={fadeUp}>
          so schmeckt Bangkok z&apos;Wil
        </motion.span>
      </motion.div>

      <div className="hero-badge">
        <motion.div
          initial={{ opacity: 0, scale: 0.82, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: easeOut }}
        >
          <Image
            src="/images/hero-badge.png"
            alt="Abgmacht, im Tiger! z'Wil – Restaurant Tiger Logo"
            width={560}
            height={220}
            priority
          />
        </motion.div>
        {/*}<motion.span
          className="sub"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease: easeOut }}
        >
          Bar · Restaurant · Treffpunkt &nbsp;—&nbsp; Grabenstrasse 21, Wil SG
        </motion.span>*/}
      </div>
    </section>
  );
}

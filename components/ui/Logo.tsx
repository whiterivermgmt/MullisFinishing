"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="select-none flex items-center"
    >
      <Link href="/" className="block">
        <Image
          src="/escos/logo1.png"
          alt="Rs Logo"
          width={520}
          height={180}
          priority
          className="
            w-auto
            h-16        /* mobile */
            md:h-16     /* tablet */
            lg:h-24     /* desktop */
            xl:h-28     /* large desktop */
            object-contain
          "
        />
      </Link>
    </motion.div>
  );
};

export default Logo;

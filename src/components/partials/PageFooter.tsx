import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  LucideTwitter,
} from "lucide-react"; // Importing Lucide social icons

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center">
        <motion.div
          className="text-center sm:text-left mb-4 sm:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold">
            SHOP<span className="text-orange-500">IER</span>
          </h2>
          <p className="text-sm mt-2">
            The best deals, delivered right to your door.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center sm:justify-end mt-4 sm:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Button className="text-orange-100 border-orange-500 hover:bg-orange-500 hover:text-white">
            Terms of Service
          </Button>
          <Button
            variant="outline"
            className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            Privacy Policy
          </Button>
        </motion.div>
      </div>

      <div className="flex justify-center gap-6 mt-4">
        {/* Social Media Links using Lucide icons */}
        <a
          href="https://web.facebook.com/akimanagabriel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://x.com/akimanagabriel1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <LucideTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/leirbag.ak/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-akimana-b6251a1b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/akimanagabriel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <Github size={24} />
        </a>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm text-gray-400">
          © 2025 SHOPIER. All rights reserved.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Developed by <span className="text-orange-500">AKIMANA Gabriel</span>,
          a passionate developer.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

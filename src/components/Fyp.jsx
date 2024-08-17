import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import project1 from "../assets/project1.jpeg";
import { useState } from "react";
import Modal from "./Modal";
const Fyp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="pt-20 " id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Final Year Project
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="group relative overflow-hidden rounded-3xl  "
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={project1}
            alt="asdasdbasb asjkdgbg asdgjjas"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1.1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
          >
            <h3 className="mb-2 text-xl ">Autonomous Vehichle</h3>
            <p className="mb-12 p-4">none</p>
            <a
              className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
              // href={project.githubLink}
              target="blank"
              onClick={openModal}
              rel="button"
            >
              <div className="flex items-center">
                <span>View Details</span>
                <MdArrowOutward />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Fyp;

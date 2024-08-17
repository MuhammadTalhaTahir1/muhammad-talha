import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import Capture from "../assets/Capture.jpeg";
import SEE from "../assets/SEE.png";
import projectVideo from "../assets/projectVideo.mp4";
import { motion } from "framer-motion";
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, y: "0" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-6xl h-[70vh] p-6 bg-black bg-img bg-center bg-fixed bg-cover bg-opacity-75 rounded-lg overflow-y-auto z-50"
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <MdClose size={24} />
        </button>
        <div>
          <div className="flex flex-col md:flex-row space-x-4">
            {/* Left side: Project details */}
            <div className="flex-1 pt-4 px-4">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Autonomous Vehicle
              </h2>
              <p className="text-white">
                Autonomous Vehicle is a wonder of modern AI technology which is
                capable of detecting its surroundings and functioning without
                any human intervention. To be considered completely autonomous,
                a vehicle must be able to go to a present location without human
                intervention on roads that have not been adapted for its usage.
                A driverless automobile must know the route, understand its
                environment, follow traffic regulations, and make accurate
                decisions while interacting with other cars and people on the
                road in order to arrive at its destination. The goal of
                autonomous cars is to eliminate the need for a driver, allowing
                all passengers to enjoy the ride. For this, technology must
                advance to a degree of security that can be relied upon. To
                achieve the goal numerous hardware, software and algorithms are
                working behind it. There is no such vehicle in Pakistan that has
                been made autopilot using technology. So, the purpose of this
                project is to make a self-driving autonomous car using
                technology. Our project includes both hardware and software. The
                biggest flash light of this project is
              </p>
            </div>

            {/* Right side: Project image */}
            <div className="flex-shrink-0 p-4">
              <img
                src={Capture}
                alt="Project"
                className="w-[300px] h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Full-width text section below the image */}
          <div className="w-full px-4">
            <p className="text-white">
              that we gave the coordinates/ points to the vehicle through mobile
              app & map and it automatically reach to the given points by
              following the given coordinates. The vehicle will connect with the
              app over the internet for real-time communication.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row space-x-4">
            {/* Left side: Project details */}
            <div className="flex-1 pt-4 px-4">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Representing our Project at
                <span className="text-yellow-400 font-extrabold text-4xl underline ml-4">
                  SEE Pakistan 2023
                </span>
              </h2>

              <p className="text-white">
                We are thrilled to share that we had the incredible opportunity
                to participate in the SEE Pakistan Competition, where we had the
                privilege of representing our project, "Autonomous Vehicle." 🚗
                It was an honor for us to be among the talented individuals who
                presented their innovative ideas and solutions. "Autonomous
                Vehicle" is a project close to my heart, representing countless
                hours of hard work, dedication, and collaboration. It's a
                testament to what can be achieved when passion meets technology.
                🤖 I want to express my gratitude to my mentors, teammates, and
                everyone who supported me throughout this journey. Your guidance
                and encouragement were instrumental in making this project a
                reality. I look forward to continuing to explore the limitless
                possibilities of software engineering and pushing the boundaries
                of technology. 🌐 Thank you all for your unwavering support, and
                I'm excited to see where this journey takes me next! 🌟
              </p>
            </div>

            {/* Right side: Project image */}
            <div className="flex-shrink-0 p-4 mt-20">
              <img
                src={SEE}
                alt="Project"
                className="w-[400px] h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Video Section */}
        <div className="w-full px-4 mt-8">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Watch Our Project Video
          </h2>
          <video
            className="w-full h-auto rounded-lg"
            controls
            src={projectVideo}
            alt="Project Video"
          />
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default Modal;

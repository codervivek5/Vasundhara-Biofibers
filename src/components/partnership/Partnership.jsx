import React from "react";
import topImage1 from "./images/top1.png";
import topImage2 from "./images/top2.png";
import image1 from "./images/img1.png";
import image2 from "./images/img2.png";
import image3 from "./images/img3.png";
import image4 from "./images/img4.png";
import image5 from "./images/img5.png";

const Partnerships = () => {
    return (
        <div className="relative w-full py-10 bg-white">
            {/* Section Title */}
            <h2 className="text-2xl font-bold text-center text-green-900 mb-6">
                Our Partnerships
            </h2>

            {/* Static Top Images */}
            <div className="flex justify-center items-center gap-8 mb-8">
                <img src={topImage1} alt="Partner 1" className="w-auto h-30" />
                <img src={topImage2} alt="Partner 2" className="w-auto h-30" />
            </div>

            {/* Marquee Scrolling Images */}
            <div className="relative w-full overflow-hidden">
                <div className="marquee-container">
                    <div className="marquee">
                        {[image1, image2, image3, image4, image5].map((img, index) => (
                            <img key={index} src={img} alt={`Partner ${index + 3}`} className="w-auto h-20 mx-4" />
                        ))}
                        {/* Duplicate for seamless looping */}
                        {[image1, image2, image3, image4, image5].map((img, index) => (
                            <img key={`dup-${index}`} src={img} alt={`Partner ${index + 3}`} className="w-auto h-20 mx-4" />
                        ))}
                        {/* Duplicate for seamless looping */}
                        {[image1, image2, image3, image4, image5].map((img, index) => (
                            <img key={`dup-${index}`} src={img} alt={`Partner ${index + 3}`} className="w-auto h-20 mx-4" />
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS for animation */}
            <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
          .marquee-container:hover .marquee {
            animation-play-state: paused;
        }
        .marquee {
          display: flex;
          align-items: center;
          animation: marquee-scroll 10s linear infinite;
          width: max-content;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    );
};

export default Partnerships;

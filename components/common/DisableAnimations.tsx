"use client";

export default function DisableAnimations() {
  return (
    <style jsx global>{`
      /* Force AOS elements to be visible and at their final position */
      [data-aos] {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
        visibility: visible !important;
      }

      /* Force WOW.js elements to be visible */
      .wow {
        visibility: visible !important;
        animation: none !important;
        opacity: 1 !important;
      }

      /* Disable GSAP/SplitText text animations */
      .text-anime-style-1, 
      .text-anime-style-2, 
      .text-anime-style-3,
      .split-char {
        opacity: 1 !important;
        transform: none !important;
        visibility: visible !important;
      }


      
      /* Disable specific animations if identified */
      .img-custom-anim-left, 
      .img-custom-anim-right, 
      .img-custom-anim-top {
         animation: none !important;
         opacity: 1 !important;
         transform: none !important;
      }
    `}</style>
  );
}

"use client";

import { usePathname } from "next/navigation";

export default function GlobalFAQStyles() {
   return (
      <style jsx global>{`
      /* Global FAQ Styles for Service Pages */
      
      /* Target Law Firm Style (.accordion-2) */
      .accordion-2 .card {
         border: none !important;
         background: transparent !important;
         margin-bottom: 15px !important;
      }
      .accordion-2 .card-header {
         background-color: #F35525 !important;
         border-radius: 0 !important; /* Make it rectangular like screenshot? Screenshot shows slight rounding maybe? User said "same style". Screenshot shows orange bars. */
         border: none !important;
         padding: 0 !important;
      }
      .accordion-2 .card-header a {
         background-color: #F35525 !important;
         color: #ffffff !important;
         padding: 15px 20px !important;
         display: flex !important;
         align-items: center !important;
         text-decoration: none !important;
         width: 100%;
         border-radius: 4px !important; /* Slight rounding */
      }
      .accordion-2 .card-header a h6,
      .accordion-2 .card-header a span {
         color: #ffffff !important;
         font-weight: 600 !important;
      }
      /* Arrow icon for Law Firm - default is probably an image/pseudo. Need to ensure it's white. */
      .accordion-2 .card-header a::after,
      .accordion-2 .card-header a .arrow::after {
         filter: brightness(0) invert(1) !important; /* Make white */
      }


      /* Target Bootstrap Style (.accordion-item) - Used in Tax Software etc */
      .service-faq-accordion .accordion-item {
         border: none !important;
         margin-bottom: 15px !important;
         background: transparent !important;
      }
      .service-faq-accordion .accordion-button {
         background-color: #F35525 !important;
         color: #ffffff !important;
         box-shadow: none !important;
         border-radius: 4px !important;
         font-weight: 600 !important;
         padding: 15px 20px !important;
      }
      .service-faq-accordion .accordion-button:not(.collapsed) {
         background-color: #F35525 !important;
         color: #ffffff !important;
         box-shadow: none !important;
      }
      /* Bootstrap Accordion Arrow */
      .service-faq-accordion .accordion-button::after {
         background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;
      }

      /* Digital Agency Style (.digital-agency-home-section-6) */
      .digital-agency-home-section-6 .accordion .card,
      .digital-agency-home-section-6 .accordion2 .card {
         border: none !important;
         background: transparent !important;
         margin-bottom: 15px !important;
      }
      .digital-agency-home-section-6 .accordion .card-header,
      .digital-agency-home-section-6 .accordion2 .card-header {
         background-color: transparent !important;
         padding: 0 !important;
         border: none !important;
      }
      .digital-agency-home-section-6 .accordion .card-header a,
      .digital-agency-home-section-6 .accordion2 .card-header a {
         background-color: #F35525 !important;
         color: #ffffff !important;
         padding: 15px 20px !important;
         display: flex !important;
         align-items: center !important;
         text-decoration: none !important;
         width: 100%;
         border-radius: 4px !important;
      }
      .digital-agency-home-section-6 .accordion .card-header a h6,
      .digital-agency-home-section-6 .accordion2 .card-header a h6,
      .digital-agency-home-section-6 .accordion .card-header a span,
      .digital-agency-home-section-6 .accordion2 .card-header a span {
         color: #ffffff !important;
         font-weight: 600 !important;
      }
      /* Arrow Icon for Digital Agency */
      .digital-agency-home-section-6 .accordion .card-header a .arrow,
      .digital-agency-home-section-6 .accordion2 .card-header a .arrow {
          filter: brightness(0) invert(1) !important;
      }
      .digital-agency-home-section-6 .accordion .card-header a .arrow::before,
      .digital-agency-home-section-6 .accordion2 .card-header a .arrow::before {
           background-color: #fff !important; /* Ensure pseudo-elements are white if they are used */
      }


      /* Fix content area background if needed - usually white or light gray */
      .accordion-collapse {
          background-color: transparent !important;
      }
      .accordion-body {
          background-color: #fff !important;
          color: #333 !important;
          border: 1px solid #eee;
          border-top: none;
          margin-bottom: 10px;
          border-radius: 0 0 4px 4px;
      }
      /* Law firm content wrapper */
      .accordion-2 .collapse {
          background-color: #fff !important;
          margin-bottom: 10px;
      }

    `}</style>
   );
}

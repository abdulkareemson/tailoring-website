"use client";

import Image from "next/image";
import React from "react";
import { ServicesConnection } from "../../tina/__generated__/types";

interface ServiceCarouselProps {
  services: NonNullable<ServicesConnection["edges"]>;
}

export default function ServiceCarousel({ services }: ServiceCarouselProps) {
  return (
    <div className="relative overflow-hidden group">
      <div className="flex animate-scroll-right-left">
        {[...services, ...services].map((service, index) => (
          <div
            key={`${service?.node?.id}-${index}`}
            className="flex-shrink-0 w-[300px] h-[300px] mx-4 my-8"
          >
            <div className="block h-full cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-95 active:scale-95">
              <div className="relative h-full w-full">
                {service?.node?.image && (
                  <Image
                    src={service.node.image}
                    alt={service.node.title || "Service"}
                    fill
                    className="object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                  />
                )}
                <div className="absolute inset-0 flex items-end justify-center text-center p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {service?.node?.title}
                    </h3>
                    <p className="text-sm">{service?.node?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-right-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-right-left {
          animation: scroll-right-left 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}

"use client";

import Image from "next/image";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slider({ photos }: { photos: string[] }) {
  return (
    <Carousel showThumbs={false} useKeyboardArrows={true} infiniteLoop>
      {photos.map((photo: string, i: number) => (
        <div key={i} className="relative w-full h-80">
          <Image src={photo} fill alt="photo" className="rounded-t-xl object-cover" />
        </div>
      ))}
    </Carousel>
  );
}

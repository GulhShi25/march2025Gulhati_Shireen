"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";
// import { Image } from "@next/image";

export default function AboutMePage() {
  let facts: string[] = [
    "I have 2 siblings and a dog",
    "My dog&aposs name is Sparky, he is a Goldendoodle",
    "I have lived in 10.5 houses my entire life",
    "I was born in Evanston Illinois",
    "I have lived in Evanston, London, New Delhi, and now Sammamish",
    "I love music and plaaying the violin",
    "I have visited 19 countries",
    "Hindi was my fist language, French was my second, and English my third",
    "I love bouldering",
    "I love travelling",
    "I love painting and sculpting miniature sets",
  ];

  const [fact, setFact] = useState("");

  // p.meDescription {border-style: Solid};
  return (
    <div>
      <h2 className={title()}>
        <u className="text-amber-100">About Me</u>
      </h2>
      <br />
      <p>
        <u className="text-amber-100">Shireen Gulhati</u>
      </p>
      <br />
      <img
        alt="Shireen Gulhati"
        className="border-5 border-x-blue-950 border-y-amber-100"
        height={754 / 2}
        src="/GULHATI_SHIREEN.png"
        width={685 / 2}
      />
      <br />
      <p className="meDescription; text-amber-100 border-2 border-blue-950">
        Hello! I&apos;m Shireen, I am 18 years old, and a senior in highschool I
        love creativity and my hobbies are mainly art and music related, I love
        exploring and experimenting with new things and ideas.
      </p>

      <br />
      <Button
        className="bg-blue-950 text-amber-100"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Quick facts about me
      </Button>

      <p>{fact}</p>
      <br />
      <br />
      <h1 className={title()}>
        <u className="text-amber-100">Paintings</u>
      </h1>
      <br />
      <br />
      <img
        alt="Las Vegas Street"
        className="border-5 border-amber-100"
        height={1344 / 5}
        src="las_vegas_photo_0349.jpg"
        width={1008 / 5}
      />
      <br />
      <div className="flex flex-nowrap">
        <img
          alt="Painting of Las Vegas"
          className="border-5 border-x-blue-950 border-y-amber-100"
          height={1119 / 4.5}
          src="las_vegas_painting_4236.jpg"
          width={889 / 4.5}
        />

        <br />

        <img
          alt="Mini Bakery Sculpture"
          className="border-5 border-amber-100"
          height={1008 / 5}
          src="mini_bakery.jpg"
          width={1537 / 5}
        />

        <br />

        <img
          alt="Disney"
          className="border-5 border-x-blue-950 border-y-amber-100"
          height={1571 / 5.6}
          src="picture_of_disney.jpg"
          width={1170 / 5.6}
        />

        <br />

        <img
          alt="Painting of Disney"
          className="border-5 border-amber-100"
          height={3378 / 12}
          src="painting_of_disney.jpg"
          width={2516 / 12}
        />
        <br />
        <img
          alt="Exhibition"
          className="border-5 border-amber-100"
          height={593 / 5}
          src="exhibition.jpg"
          width={1152 / 5}
        />
      </div>

      <p className="meDescription; text-amber-100 border-2 border-blue-950">
        Artwork plays a big role in my life. Creating art is a way I express big
        things in my life and its a way to document these things. It clears my
        head and while I am painting or sculpting, I have space to think without
        anxiety. These are some artworks I have done. The first two are a
        picture I have taken in Las Vegas, and the second is the painting I made
        based off of it in an impressionistic style. The 3rd is a sculpture I
        made of a miniature bakery. Everything in it was made by hand using
        paint, polymer clay, cardboard, plastic, wire, wood, fabric, glue, and
        varnish. It is still a work in progress, I have to add bricks on the
        outside, doors, windows, and snow. This sculpture is based off of harry
        potter, I made the entire thing with Harry Potter playing in the
        background. Making this sculpture helped me get through a hard time
        during Junior year. The 3rd painting is based off of the feeling I felt
        when being disneyland. The last picture is a picture of my exhibition
        for IB art in Junior year.
      </p>
      {/* <img 
      alt=""
      height={}
      src=""
      width={}
      /> */}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  ariaLabel?: { type: String; default: "Navigate to page" };
  target?:  boolean;
};

const NextButton = (props: Props) => {
  return (
      <>
      {
        props.target ?
            <a target="_blank" className="gray-scale stretched-link" href={props.link} rel="noopener noreferrer">
              <Image
                  src="/images/arrow-forward.svg"
                  alt="arrow-forward"
                  width="40"
                  height="40"
              />
            </a>
            :
            <Link
                href={props.link}
                className="gray-scale stretched-link"
            >
              <Image
                  src="/images/arrow-forward.svg"
                  alt="arrow-forward"
                  width="40"
                  height="40"
              />
            </Link>
      }
      </>
  );
};

export default NextButton;

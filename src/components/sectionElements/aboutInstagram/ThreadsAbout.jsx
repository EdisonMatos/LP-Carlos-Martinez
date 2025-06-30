import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import IconButton from "../../interactives/IconButton";
import content from "../../../content/content";
import Button from "../../interactives/Button";

function ThreadsAbout() {
  return (
    <MotionDivDownToUp>
      <Button
        label={content.texts.about.aboutSocial.labelThreads}
        buttonLink={content.texts.links.threads}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-at-sign-icon lucide-at-sign"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
          </svg>
        }
      />{" "}
    </MotionDivDownToUp>
  );
}

export default ThreadsAbout;

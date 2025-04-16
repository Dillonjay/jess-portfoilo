"use client";

import Image from "next/image";

interface IconProps {
  className?: string;
}

// Method 1: SVG as a component (best for icons you want to style with CSS)
export const Logo = ({ className = "h-8 w-8" }: IconProps) => (
  <svg
    width="72"
    height="48"
    viewBox="0 0 72 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M36 0V24.1038L18.1341 47.9218C17.9627 48.0101 15.6914 48.0205 15.3954 47.9686C15.224 47.9374 15.2746 47.7347 15.1967 47.7139C14.9357 47.6308 14.5578 47.7919 14.2968 47.7087C8.34406 45.7962 3.80551 40.8278 1.33171 33.235C1.12134 32.5854 0.455166 30.465 0.400625 29.8465C0.338293 29.1865 0.32271 27.9496 0.217524 27.3675C0.198046 27.2688 0.0461121 27.3364 0.0266334 27.1025C-0.0629689 26.1826 0.108444 24.9925 0.0344251 24.0414H17.9705V0.311821C17.9705 0.311821 18.1886 0 18.2042 0H36Z"
      fill="#FDFDFD"
    />
    <path
      d="M36 23.8964L53.8213 0.0800986C54.5675 0.0905467 55.4621 -0.0661719 56.1926 0.0330844C57.0559 0.153237 57.845 0.57638 58.5482 0.790565C63.6266 2.3212 67.8612 7.16387 70.2012 13.464C70.709 14.8327 71.0333 16.0969 71.338 17.6067C71.7638 19.7172 72.1036 21.7545 71.9708 23.9591H53.9854V48H36V23.8964Z"
      fill="#FDFDFD"
    />
  </svg>
);

export const EmailIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <svg
    viewBox="0 0 57 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M47.5 14.25H9.5C7.77411 14.25 6.375 15.6491 6.375 17.375V39.625C6.375 41.3509 7.77411 42.75 9.5 42.75H47.5C49.2259 42.75 50.625 41.3509 50.625 39.625V17.375C50.625 15.6491 49.2259 14.25 47.5 14.25Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.375 17.375L28.5 30.0625L50.625 17.375"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClockIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 14.667c3.682 0 6.667-2.985 6.667-6.667 0-3.682-2.985-6.667-6.667-6.667-3.682 0-6.667 2.985-6.667 6.667 0 3.682 2.985 6.667 6.667 6.667z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4v4l2.667 1.333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LinkedInIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <svg
    viewBox="0 0 57 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M38 19C41.5 19 44.75 20.375 47.25 22.875C49.75 25.375 51.125 28.625 51.125 32.125V47.5H42.75V32.125C42.75 30.875 42.25 29.75 41.375 28.875C40.5 28 39.375 27.5 38.125 27.5C36.875 27.5 35.75 28 34.875 28.875C34 29.75 33.5 30.875 33.5 32.125V47.5H25.125V32.125C25.125 28.625 26.5 25.375 29 22.875C31.5 20.375 34.5 19 38 19Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.75 20.875H8.375V47.5H16.75V20.875Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5625 15.75C14.6336 15.75 16.3125 14.0711 16.3125 12C16.3125 9.92893 14.6336 8.25 12.5625 8.25C10.4914 8.25 8.8125 9.92893 8.8125 12C8.8125 14.0711 10.4914 15.75 12.5625 15.75Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

import React from "react"

type Props = {}

const Detail = (props: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      data-icon="true"
    >
      <path
        fill="currentColor"
        d="M12 9a1 1 0 100-2 1 1 0 000 2zm-0.75 1.75a0.75 0.75 0 111.5 0v5.5a0.75 0.75 0 11-1.5 0v-5.5z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-16.5c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5-7.5-3.364-7.5-7.5S7.864 4.5 12 4.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Detail

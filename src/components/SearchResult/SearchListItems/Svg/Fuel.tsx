import React from "react"

type Props = {}

const Fuel = (props: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      data-icon="true"
      aria-label="Fuel type"
    >
      <path
        fill="currentColor"
        d="M12 7.25A0.75 0.75 0 0111.25 8h-4.5a0.75 0.75 0 110-1.5h4.5A0.75 0.75 0 0112 7.25z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.92 10.335L20.089 12h0.162a0.75 0.75 0 110 1.5H20V19c0 1.103-0.897 2-2 2s-2-0.897-2-2V9a1.501 1.501 0 00-1-1.412V20.25A0.75 0.75 0 0114.25 21H3.75A0.75 0.75 0 013 20.25V3.75A0.75 0.75 0 013.75 3h10.5A0.75 0.75 0 0115 3.75v2.295A3.002 3.002 0 0117.5 9v10a0.5 0.5 0 001 0v-7a0.751 0.751 0 010.079-0.335l1-2a0.751 0.751 0 011.342 0.67zM13.5 19.5h-9v-8h9v8zm0-9.5h-9V4.5h9V10z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Fuel

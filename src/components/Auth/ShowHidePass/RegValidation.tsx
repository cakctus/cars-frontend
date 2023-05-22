import React from "react"

type Props = {
  color: string
}

const RegValidation = ({ color }: Props) => {
  return (
    <svg
      className="SvgIcon checked"
      viewBox="0 0 24 24"
      focusable="false"
      width={15}
      color={color}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm-2-7.914l-3.5-3.5L5.086 12.5 10 17.414 18.914 8.5 17.5 7.086l-7.5 7.5z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export default RegValidation

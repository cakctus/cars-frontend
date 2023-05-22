import styles from "../Header.module.css"

type Props = {}

const Profile = (props: Props) => {
  return (
    <svg
      className={styles.svgCover}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      color="rgb( 90,94,102 )"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.743 19.588c1.125-.735 2.794-1.398 5.007-1.988l.45-.9c-1.8-1.8-2.7-3.6-2.7-5.4C7.5 8.6 7.5 5 12 5s4.5 3.6 4.5 6.3c0 1.8-.9 3.6-2.7 5.4l.45.9c2.213.59 3.882 1.253 5.007 1.988A10.47 10.47 0 0022.5 12c0-5.799-4.701-10.5-10.5-10.5S1.5 6.201 1.5 12a10.47 10.47 0 003.243 7.588zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export default Profile

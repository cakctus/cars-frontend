import React, { useState, useEffect, useRef } from "react"
import styles from "./Modal.module.css"

type Props = {
  showModal: any
  closeModal: any
  item: any
}

const Modal = ({ showModal, closeModal, item }: Props) => {
  const { blockPhoto, blockDetail, blockPrice } = item

  const [photoNumber, setPhotoNumber] = useState<Array<any>>(blockPhoto)
  const [currentIndex, setCurrentIndex] = useState<any>(0)
  const [prevIndex, setPrevIndex] = useState<number>(0)
  const [pixelMove, setPixelMove] = useState<number>(10)
  const [isClicked, setIsClicked] = useState(false)
  const [startX, setStartX] = useState(0)
  const [endX, setEndX] = useState(0)

  const listPhoto = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  const increasePhotoNumber = () => {
    const length = photoNumber.length

    if (currentIndex < length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const decreasePhotoNumber = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const movePhotoContainer = (e: any) => {
    // e.preventDefaul()
    // setPrevIndex(currentIndex)
    // setCurrentIndex((prevCount: number) => prevCount + 1)
    // setPixelMove(0)
    // if (listPhoto.current) {
    //   if (currentIndex >= prevIndex) {
    //     setPixelMove(pixelMove + 10)
    //     listPhoto.current!.style.transform = `translateX(-${pixelMove}%)`
    //   } else if (currentIndex === 0) {
    //     listPhoto.current!.style.transform = `0%`
    //   } else if (currentIndex <= prevIndex) {
    //     setPixelMove(pixelMove - 10)
    //   }
    // }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsClicked(true)
    setStartX(e.pageX)
  }

  const handleMouseMove = (e?: any) => {
    e?.preventDefault()
    console.log(e)
    if (!isClicked) return
    const clientX =
      e.type === "mousemove" ? e.pageX : e.changedTouches[0].clientX
    if (isClicked && listPhoto.current) {
      const moveDistance = startX - clientX
      listPhoto.current.scrollLeft += moveDistance
      setStartX(clientX)
    }
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    setIsClicked(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsClicked(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMouseMove(e)
  }

  const handleTouchEnd = () => {
    setIsClicked(false)
  }

  console.log(currentIndex)

  return (
    <div
      className={`${styles.modal} `}
      style={{ background: showModal ? "rgba(0, 0, 0, 0.4)" : "none" }}
    >
      <div
        className={`${styles.modalContent} ${showModal ? styles.active : ""} `}
      >
        <h2 className={styles.title}>
          {blockDetail.brand} {blockDetail.model}
          {blockDetail.year}
        </h2>
        <h2 className={styles.price}>{blockPrice.price}</h2>
        <div className={styles.PhotoBlock}>
          <div className={styles.arrowAbsoluteClick1}>
            <button
              className={styles.arrowButton}
              onClick={decreasePhotoNumber}
            >
              &larr;
            </button>
          </div>
          <div className={styles.imageContainer}>
            <img
              draggable="false"
              ref={imageRef}
              className={styles.blockPhoto}
              // width={350}
              src={blockPhoto[currentIndex]}
              alt=""
            />
          </div>
          <div className={styles.arrowAbsoluteClick2}>
            <button
              className={styles.arrowButton}
              onClick={increasePhotoNumber}
            >
              &rarr;
            </button>
          </div>
        </div>
        <div
          className={styles.mPhotoList}
          ref={listPhoto}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {blockPhoto.map((photo: string, index: number) => {
            return (
              <div
                className={styles.mPhotoItem}
                onClick={movePhotoContainer}
                style={{
                  border: index === currentIndex ? "1px solid silver" : "none",
                }}
              >
                <img
                  className={styles.photoList}
                  onClick={() => setCurrentIndex(index)}
                  src={photo}
                  width={100}
                  draggable="false"
                  id="dragimage"
                  alt=""
                />
              </div>
            )
          })}
        </div>
        <button className={styles.closeButton} onClick={closeModal}>
          &#215;
        </button>
      </div>
    </div>
  )
}

export default Modal

import { useState, useRef, useEffect } from "react"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"
import styles from "../components/styles/Photo.module.css"
import axios from "axios"
type Props = {
  setCar?: any
}

const Photo = ({ setCar }: Props) => {
  const [photos, setPhotos] = useState<any>(null)
  const [uploadedImage, setUploadedImage] = useState<any>([])
  const [uploadedImage2, setUploadedImage2] = useState<any>([])
  const [uploadedFiles, setUploadedFiles] = useState<any>([])
  const [lastId, setLastId] = useState<number>(0)
  const [lastOrder, setLastOrder] = useState<number>(0)
  const [fileName, setFileName] = useState<any>([])
  const [currentItem, setCurrentItem] = useState<any>(null)
  const [listOfImg, setListOfImg] = useState<any>(null)
  const divRef = useRef(null)
  const [modal, setModal] = useState<any>(false)
  const file = useRef<any>(null)
  const [touchStart, setTouchStart] = useState(false)
  const divImg = useRef<any>(null)

  const carPhotos = (photos: any) => {
    setPhotos(photos)
  }

  let arr: any = []

  const readFiles = (f: any) => {
    return new Promise((resolve, reject) => {
      const file = new FileReader()

      file.onload = () => resolve(file.result)
      file.onerror = () => reject(file)

      file.readAsDataURL(f)
    })
  }

  const onDragEnter = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDragOver = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDrop = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    let dt = e.dataTransfer
    // let files = dt.files
    let files = e.target.files
    // const files = e.target.files

    if (e.target.type === "file") {
      for (let i = 0; i < files?.length; i++) {
        arr.push(readFiles(files[i]))
        setUploadedFiles((prev: any) => {
          const obj: any = {}
          obj["id"] = prev?.length + 1
          obj["order"] = prev?.length + 1
          obj["file"] = files[i]

          return [...prev, obj]
        })
      }

      Promise.all(arr).then((result) => {
        result.map((_, i) => {
          setUploadedImage2((prev: any) => {
            const obj: any = {}
            const uniqueId = uuidv4()
            obj["id"] = prev.length + 1
            obj["order"] = prev.length + 1
            obj["img"] = {
              id: uniqueId,
              result: result[i],
            }

            return [...prev, obj]
          })
        })
      })
    }
  }

  function output(text: any) {
    // divRef.current!.textContent += text
  }

  useEffect(() => {
    // if (uploadedImage2) {
    //   carPhotos(uploadedImage2)
    // }

    carPhotos(arr)
  }, [uploadedImage2])

  //   useEffect(() => {
  //     setUploadedImage2(() => {
  //       if (context?.clearState) {
  //         return [{}]
  //       } else return uploadedImage2
  //     })
  //   }, [context?.clearState])

  const handleInput = () => {
    const f = file.current
    f?.click()
  }

  const disableScroll = (e: any) => {
    e.preventDefault()
    document.body.style.overflow = "hidden"
    document.body.style.touchAction = "none"
  }

  const enableScroll = () => {
    document.body.style.overflow = "auto"

    document.body.style.touchAction = "auto"
  }

  const touchStartHandler = (e: any, item: any) => {
    console.log(item, "start")
    // e.preventDefault()
    // disableScroll(e)
    setTouchStart(true)
    setCurrentItem(item)
  }
  const touchEndHandler = (e: any, item: any) => {
    dragDropHandler(e, currentItem)
    enableScroll()
    setTouchStart(false)
    console.log("end", item)
  }

  const touchMoveHandler = (e: any) => {
    disableScroll(e)
    e.preventDefault()
    divImg.current.style.touchAction = "none"
    divImg.current.style.pointerEvents = "none"
  }

  const dragStartHandler = (e: any, item: any) => {
    setCurrentItem(item)
    console.log(item)
  }

  const dragLeaveHandler = (e: any) => {}

  const dragEndHandler = (e: any) => {}

  const dragOverHandler = (e: any) => {
    e.preventDefault()
  }

  const dragDropHandler = (e: any, item: any) => {
    console.log("end", item)

    if (e.target.parentElement.id === "moveImg") {
      console.log("end", e.target)
    }
    e.preventDefault()

    // setTouchStart(false)
    // divImg.current.style.touchAction = "auto"
    // divImg.current.style.pointerEvents = "auto"
    setUploadedImage2((images: any) => {
      return images.map((image: any) => {
        if (image.id === currentItem.id) {
          return {
            ...image,
            order: item.order,
          }
        }
        if (image.id === item.id) {
          return {
            ...image,
            order: currentItem.order,
          }
        }
        return image
      })
    })

    setUploadedFiles((files: any) => {
      return files.map((file: any) => {
        if (file.id === currentItem.id) {
          return {
            ...file,
            order: item.order,
          }
        }
        if (file.id === item.id) {
          return {
            ...file,
            order: currentItem.order,
          }
        }
        return file
      })
    })
    setCar((prev: any) => ({
      ...prev,
      photos: uploadedFiles.sort(sortImage),
    }))
  }

  const sortImage = (a: any, b: any) => {
    if (a.order > b.order) return 1
    else return -1
  }

  // console.log(uploadedImage2)
  // console.log(uploadedFiles.sort(sortImage))

  useEffect(() => {
    const i = divImg.current
    if (i) {
      i.addEventListener("touchmove", touchMoveHandler, { passive: false })
    }

    return () => {
      if (i) {
        i.removeEventListener("touchmove", touchMoveHandler)
        i.style.touchAction = "auto"
        i.style.pointerEvents = "auto"
      }
    }
  }, [touchStart])

  const closeHandle = (id: number): void => {
    if (setUploadedImage2.length) {
      setUploadedImage2((prev: any) => {
        return prev.filter((item: any) => item.id !== id)
      })
    }

    file.current.value = null
  }

  return (
    <>
      {" "}
      <div
        id="output"
        ref={divRef}
        className="dragNdropDiv"
        // onDragEnter={onDragEnter}
        // onDragOver={onDragOver}
        onChange={(e) => onDrop(e)}
      >
        <label onClick={handleInput}>Choose File</label>
        <div style={{ background: "#3B3B3B" }}>
          <input
            type="file"
            name="file"
            id="file"
            multiple
            onDrag={(e) => onDrop(e)}
            ref={file}
            // className="hidden"
          />
          {uploadedImage2?.length >= 1 && (
            <>
              <p onClick={() => setModal(true)}>
                saved {uploadedImage2.length} files
              </p>
            </>
          )}
        </div>
        {/* <ReactSortable
          id="imgContainer"
          list={uploadedImage2}
          setList={setUploadedImage2}
          handle=".img"
          touchStartThreshold={10}
        > */}
        <div className={styles.imgContainer}>
          {uploadedImage2?.sort(sortImage)?.map((item: any, index: any) => {
            return (
              <div
                className={styles.imageBlock}
                ref={divImg}
                id="moveImg"
                key={item.id}
                draggable={true}
                onTouchStart={(e) => touchStartHandler(e, item)}
                //   onTouchMove={(e) => touchMoveHandler(e)}
                onTouchEnd={(e) => dragDropHandler(e, item)}
                onDragStart={(e) => dragStartHandler(e, item)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dragDropHandler(e, item)}
              >
                <div>
                  <img
                    className={styles.imageWidth}
                    width={150}
                    height={150}
                    src={item?.img.result}
                    alt=""
                  />
                </div>
                <div
                  onClick={() => closeHandle(item.id)}
                  className={styles.close}
                >
                  &times;
                </div>
                <span>{fileName[index]}</span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Photo

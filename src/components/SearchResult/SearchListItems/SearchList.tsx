import { useState } from "react"
import SearchListItem from "./SearchListItem.tsx/SearchListItem"
import styles from "./SearchList.module.css"
import Modal from "./Modal/Modal"

type Props = {}

const SearchList = (props: Props) => {
  const searchList = [
    {
      blockPhoto: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1200px-2018_Tesla_Model_S_75D.jpg",
        "https://www.topgear.com/sites/default/files/2022/02/2-Tesla-Model-S.jpg",
        "https://www.topgear.com/sites/default/files/cars-car/image/2018/09/ab3t4352.jpg",
        "https://media.istockphoto.com/id/582261244/photo/tesla-model-s-on-the-highway.jpg?s=612x612&w=0&k=20&c=rDBZmTCighjxE2xbzK3lBpSpYXNLdbbt7KurNZ8SDxk=",
        "https://stimg2.cardekho.com/images/carNewsimages/userimages/19902/Tesla.jpg?tr=w-360",
        "https://res.cloudinary.com/driveau/image/private/q_auto/v1/ca-s3/2018/08/672448_5855_tesla_model_s.jpg",
        "https://images.hgmsites.net/med/2017-tesla-model-s_100584982_m.jpg",
        "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/v1/cms/uploads/2143APvOQpG2rX7jGMWM",
        "https://www.teslarati.com/wp-content/uploads/2017/07/tesla-store-showroom-1.jpg",
        "https://www.topgear.com/sites/default/files/cars-car/image/2018/09/ab3t4352.jpg",
        "https://i.insider.com/5d431a36100a2408350d209c?width=700",
        "https://upload.wikimedia.org/wikipedia/commons/9/94/2014_Tesla_Model_S_in_Germany.jpg",
        "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/09/ab3t4479.jpg",
        "https://img.olhardigital.com.br/wp-content/uploads/2021/06/Tesla_Model_S_Plaid_Abre.jpg",
        "https://www.tesla.com/sites/default/files/images/support/Meet-Your-Tesla-Model-S.png",
        "https://www.cnet.com/a/img/resize/d258e53a67fc3f9b23baab25738ff3163487c0f2/hub/2021/01/27/ab90b173-99d8-45dd-aa19-622164098968/ms-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
      ],
      blockDetail: {
        brand: "Tesla",
        model: "Model S",
        year: 2021,
        used: true,
        mileage: 10000,
        transmission: "automatic",
        fuel: "electricity",
        location: "Chisinau",
      },
      blockPrice: {
        price: "50000",
        cash: true,
        leasing: false,
        credit: false,
      },
    },
    {
      blockPhoto: [
        "https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/07/honda-cr-v-4.jpg",
        "https://www.cnet.com/a/img/resize/237c7363228c34bbc137b515028637945ebaddeb/hub/2021/01/27/d6763759-27db-447a-822c-b15e0f31ae98/tesla-model-s-refresh-112.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.cnet.com/a/img/resize/23ad9c5e3b5be535d47b3e76c686d3c27f12a493/hub/2021/01/27/c401b9d7-6f8f-4e1d-ba72-3d13f642f960/tesla-model-s-refresh-211.jpg?auto=webp&width=1200",
        "https://www.cnet.com/a/img/resize/d258e53a67fc3f9b23baab25738ff3163487c0f2/hub/2021/01/27/ab90b173-99d8-45dd-aa19-622164098968/ms-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-2.jpg",
        "https://cdn.motor1.com/images/mgl/e2VBW/s3/tsla-q4-2020-update_page_13_image_0002.jpg",
      ],
      blockDetail: {
        brand: "Honda",
        model: "CRV",
        year: 2021,
        used: true,
        mileage: 10000,
        transmission: "automatic",
        fuel: "electricity",
        location: "Chisinau",
      },
      blockPrice: {
        price: "50000",
        cash: true,
        leasing: false,
        credit: false,
      },
    },
    {
      blockPhoto: [
        "https://i.ytimg.com/vi/ZjUi6usz_y4/maxresdefault.jpg",
        "https://www.cnet.com/a/img/resize/237c7363228c34bbc137b515028637945ebaddeb/hub/2021/01/27/d6763759-27db-447a-822c-b15e0f31ae98/tesla-model-s-refresh-112.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.cnet.com/a/img/resize/23ad9c5e3b5be535d47b3e76c686d3c27f12a493/hub/2021/01/27/c401b9d7-6f8f-4e1d-ba72-3d13f642f960/tesla-model-s-refresh-211.jpg?auto=webp&width=1200",
        "https://www.cnet.com/a/img/resize/d258e53a67fc3f9b23baab25738ff3163487c0f2/hub/2021/01/27/ab90b173-99d8-45dd-aa19-622164098968/ms-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-2.jpg",
        "https://cdn.motor1.com/images/mgl/e2VBW/s3/tsla-q4-2020-update_page_13_image_0002.jpg",
      ],
      blockDetail: {
        brand: "Honda",
        model: "CRV",
        year: 2021,
        used: true,
        mileage: 10000,
        transmission: "automatic",
        fuel: "electricity",
        location: "Chisinau",
      },
      blockPrice: {
        price: "50000",
        cash: true,
        leasing: false,
        credit: false,
      },
    },
    {
      blockPhoto: [
        "https://hips.hearstapps.com/hmg-prod/images/2020-tesla-model-y-performance-109-1620660806.jpg?crop=0.712xw:0.653xh;0.0656xw,0.301xh&resize=980:*",
        "https://www.cnet.com/a/img/resize/237c7363228c34bbc137b515028637945ebaddeb/hub/2021/01/27/d6763759-27db-447a-822c-b15e0f31ae98/tesla-model-s-refresh-112.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.cnet.com/a/img/resize/23ad9c5e3b5be535d47b3e76c686d3c27f12a493/hub/2021/01/27/c401b9d7-6f8f-4e1d-ba72-3d13f642f960/tesla-model-s-refresh-211.jpg?auto=webp&width=1200",
        "https://www.cnet.com/a/img/resize/d258e53a67fc3f9b23baab25738ff3163487c0f2/hub/2021/01/27/ab90b173-99d8-45dd-aa19-622164098968/ms-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-2.jpg",
        "https://cdn.motor1.com/images/mgl/e2VBW/s3/tsla-q4-2020-update_page_13_image_0002.jpg",
      ],
      blockDetail: {
        brand: "Tesla",
        model: "Model Y",
        year: 2021,
        used: true,
        mileage: 10000,
        transmission: "automatic",
        fuel: "electricity",
        location: "Chisinau",
      },
      blockPrice: {
        price: "50000",
        cash: true,
        leasing: false,
        credit: false,
      },
    },
    {
      blockPhoto: [
        "https://electrek.co/wp-content/uploads/sites/3/2021/11/Tesla-Model-Y-Performance.jpg?quality=82&strip=all&w=1600",
        "https://www.cnet.com/a/img/resize/237c7363228c34bbc137b515028637945ebaddeb/hub/2021/01/27/d6763759-27db-447a-822c-b15e0f31ae98/tesla-model-s-refresh-112.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.cnet.com/a/img/resize/23ad9c5e3b5be535d47b3e76c686d3c27f12a493/hub/2021/01/27/c401b9d7-6f8f-4e1d-ba72-3d13f642f960/tesla-model-s-refresh-211.jpg?auto=webp&width=1200",
        "https://www.cnet.com/a/img/resize/d258e53a67fc3f9b23baab25738ff3163487c0f2/hub/2021/01/27/ab90b173-99d8-45dd-aa19-622164098968/ms-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-2.jpg",
        "https://cdn.motor1.com/images/mgl/e2VBW/s3/tsla-q4-2020-update_page_13_image_0002.jpg",
      ],
      blockDetail: {
        brand: "Tesla",
        model: "Model Y",
        year: 2021,
        used: true,
        mileage: 10000,
        transmission: "automatic",
        fuel: "electricity",
        location: "Chisinau",
      },
      blockPrice: {
        price: "50000",
        cash: true,
        leasing: false,
        credit: false,
      },
    },
    {
      blockPhoto: [
        "https://hips.hearstapps.com/hmg-prod/images/tesla-model-y-with-powerline-royalty-free-image-1673730340.jpg?crop=0.832xw:0.569xh;0.0697xw,0.414xh&resize=1200:*",
        "https://www.cnet.com/a/img/resize/23ad9c5e3b5be535d47b3e76c686d3c27f12a493/hub/2021/01/27/c401b9d7-6f8f-4e1d-ba72-3d13f642f960/tesla-model-s-refresh-211.jpg?auto=webp&width=1200",
        "https://www.cnet.com/a/img/resize/d258e53a67fc3f9b23baab25738ff3163487c0f2/hub/2021/01/27/ab90b173-99d8-45dd-aa19-622164098968/ms-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-2.jpg",
        "https://cdn.motor1.com/images/mgl/e2VBW/s3/tsla-q4-2020-update_page_13_image_0002.jpg",
      ],
      blockDetail: {
        brand: "Tesla",
        model: "Model Y",
        year: 2021,
        used: true,
        mileage: 10000,
        transmission: "automatic",
        fuel: "electricity",
        location: "Chisinau",
      },
      blockPrice: {
        price: "50000",
        cash: true,
        leasing: false,
        credit: false,
      },
    },
    {
      blockPhoto: [
        "https://media.ed.edmunds-media.com/ford/f-150/2023/oem/2023_ford_f-150_crew-cab-pickup_limited_fq_oem_1_1600.jpg",
        "https://www.cnet.com/a/img/resize/23ad9c5e3b5be535d47b3e76c686d3c27f12a493/hub/2021/01/27/c401b9d7-6f8f-4e1d-ba72-3d13f642f960/tesla-model-s-refresh-211.jpg?auto=webp&width=1200",
        "https://www.cnet.com/a/img/resize/d258e53a67fc3f9b23baab25738ff3163487c0f2/hub/2021/01/27/ab90b173-99d8-45dd-aa19-622164098968/ms-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-2.jpg",
        "https://cdn.motor1.com/images/mgl/e2VBW/s3/tsla-q4-2020-update_page_13_image_0002.jpg",
      ],
      blockDetail: {
        brand: "Ford",
        model: "F150",
        year: 2021,
        used: true,
        mileage: 10000,
        transmission: "automatic",
        fuel: "electricity",
        location: "Chisinau",
      },
      blockPrice: {
        price: "50000",
        cash: true,
        leasing: false,
        credit: false,
      },
    },
    {
      blockPhoto: [
        "https://www.treehugger.com/thmb/sJ6wN80s3K3Zk-y8at19HUX6JqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ford-F150-068f6a18cabd4632b1e4cf968510b731.jpg",
        "https://www.cnet.com/a/img/resize/23ad9c5e3b5be535d47b3e76c686d3c27f12a493/hub/2021/01/27/c401b9d7-6f8f-4e1d-ba72-3d13f642f960/tesla-model-s-refresh-211.jpg?auto=webp&width=1200",
        "https://www.cnet.com/a/img/resize/d258e53a67fc3f9b23baab25738ff3163487c0f2/hub/2021/01/27/ab90b173-99d8-45dd-aa19-622164098968/ms-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-2.jpg",
        "https://cdn.motor1.com/images/mgl/e2VBW/s3/tsla-q4-2020-update_page_13_image_0002.jpg",
      ],
      blockDetail: {
        brand: "Ford",
        model: "F150",
        year: 2021,
        used: true,
        mileage: 10000,
        transmission: "automatic",
        fuel: "electricity",
        location: "Chisinau",
      },
      blockPrice: {
        price: "50000",
        cash: true,
        leasing: false,
        credit: false,
      },
    },
    {
      blockPhoto: [
        "https://prestigeandperformancecar.com/wp-content/uploads/P0000562_1-900x563.jpg",
        "https://www.cnet.com/a/img/resize/23ad9c5e3b5be535d47b3e76c686d3c27f12a493/hub/2021/01/27/c401b9d7-6f8f-4e1d-ba72-3d13f642f960/tesla-model-s-refresh-211.jpg?auto=webp&width=1200",
        "https://www.cnet.com/a/img/resize/d258e53a67fc3f9b23baab25738ff3163487c0f2/hub/2021/01/27/ab90b173-99d8-45dd-aa19-622164098968/ms-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
        "https://www.motortrend.com/uploads/sites/5/2021/06/2021-Tesla-Model-S-Plaid-Offsite-2.jpg",
        "https://cdn.motor1.com/images/mgl/e2VBW/s3/tsla-q4-2020-update_page_13_image_0002.jpg",
      ],
      blockDetail: {
        brand: "BMW",
        model: "E39",
        year: 2003,
        used: true,
        mileage: 10000,
        transmission: "automatic",
        fuel: "electricity",
        location: "Chisinau",
      },
      blockPrice: {
        price: "50000",
        cash: true,
        leasing: false,
        credit: false,
      },
    },
  ]

  return (
    <div className={styles.searchListContainer}>
      <div className={styles.searchList}>
        <div className={styles.searchListItems}>
          {searchList.map((item, index) => {
            return (
              <>
                <SearchListItem item={item} key={index} />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchList

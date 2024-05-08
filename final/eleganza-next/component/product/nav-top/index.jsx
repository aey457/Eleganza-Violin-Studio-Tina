import { useState } from 'react'
import styles from './nav-top.module.scss'
import BreadCrumb from './bread-crumb/bread-crumb'
import Sort from './sort/sort'
import FilterLeft from '../filter-left'

export default function NavTop({
  products,
  setProducts,
  checkboxStatus,
  handleCheckboxStatus,
}) {
  // 搜尋框動畫
  //   const [showInput, setShowInput] = useState(false)
  //   const handleClick = () => {
  //     setShowInput(!showInput)
  //   }

  // sort元件狀態提升
  const [selectedOption, setSelectedOption] = useState('排序')
  const handleOptionClick = (option) => {
    setSelectedOption(option)
  }

  // 商品類別篩選
  const [productCate, setProductCate] = useState(0)
  const cates = ['所有商品', '小提琴', '提琴盒', '提琴弓', '松香']
  const handleCateClick = async (cateIndex) => {
    setProductCate(cateIndex)
    const cateUrl = `http://localhost:3005/api/products`
    try {
      const res = await fetch(cateUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cateIndex }),
      })
      // console.log(body)
      const data = await res.json()

      if (Array.isArray(data.data.products)) {
        setProducts(data.data.products)
      //   console.log('success')
      } else {
        alert('u mom is dead')
      }
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(productCate)

  return (
    <>
      <div className={styles['nav-top']}>
        <BreadCrumb />
        <div>
          <div className="d-flex justify-content-between align-content-center">
            <div
              className={`${styles['cate-btns']} d-flex justify-content-between`}
            >
              {cates.map((cate, i) => {
                return (
                  <div
                    key={i}
                    className={`${styles['cate-btn']} ${productCate === i ? styles['current'] : ''}`}
                    onClick={() => handleCateClick(i)}
                  >
                    {cate}
                  </div>
                )
              })}
              {/* <div className={`${styles['cate-btn']} ${styles['current']}`}>
                所有商品
              </div>
              <div className={styles['cate-btn']}>小提琴</div>
              <div className={styles['cate-btn']}>提琴盒</div>
              <div className={styles['cate-btn']}>提琴弓</div>
              <div className={styles['cate-btn']}>松香</div> */}
            </div>
            <div className="d-none d-md-block d-flex align-content-center">
              <div
                className={`${styles['filter-top']} d-flex justify-content-between align-content-center`}
              >
                {/* {showInput ? (
                  <div className="position-relative">
                    <input className="" type="text" placeholder="" />
                    <button onClick={handleClick}>
                      <img
                        className="mb-1 "
                        src="/icons/icon-search.svg"
                        alt=""
                      />
                    </button>
                  </div>
                ) : (
                  <button onClick={handleClick}>
                    <img className="mb-1" src="/icons/icon-search.svg" alt="" />
                  </button>
                )} */}

                <button type="button">
                  <img className="mb-1" src="/icons/icon-search.svg" alt="" />
                </button>
                <Sort
                  selectedOption={selectedOption}
                  handleOptionClick={handleOptionClick}
                />
                <span>
                  <img className="mb-1" src="/icons/icon-list.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div
            className={`d-flex justify-content-between align-items-center d-block d-md-none mb-3`}
          >
            <button
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              篩選條件
              <img src="/icons/icon-chevron-down.svg" alt="" />
            </button>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header d-flex justify-content-between align-items-center">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  篩選條件
                </h5>
                <button>
                  <img
                    type="button"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    src="/icons/icon-x.svg"
                  />
                </button>
              </div>
              <div className="offcanvas-body">
                <FilterLeft
                  products={products}
                  checkboxStatus={checkboxStatus}
                  handleCheckboxStatus={handleCheckboxStatus}
                />
              </div>
            </div>
            <Sort
              selectedOption={selectedOption}
              handleOptionClick={handleOptionClick}
            />
          </div>
        </div>
      </div>
    </>
  )
}

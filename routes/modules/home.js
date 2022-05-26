const express = require('express')
const router = express.Router()
const Address = require('../../models/address')
const generateAddress = require('../../address_generator')
let newShorten = ""

router.post('/', (req, res) => {
  const newUrl = req.body.address
  Address.find()
    .lean()
    .then((addresses) => {
      newShorten = addresses.find((eachUrl) => eachUrl.address === newUrl)
      console.log(newShorten)
      if (newShorten) {
        newShorten = newShorten.shortadd
        return res.render('index', { newShorten, newUrl })
      }
      let shortadd = generateAddress()
      while (addresses.some((eachUrl) => eachUrl.shoradd === shortadd)) {
        shortadd = generateAddress()
      }
      newShorten = shortadd
      return Address.create({ address: newUrl, shortadd })
    })
    .then(() => res.render('index', { newShorten, newUrl }))
    .catch(error => console.log(error))
})


router.get('/', (req, res) => {
  return res.render('index')
})

module.exports = router

// 看我能不能抓到寫進來的網址
// 網址是否能產生亂碼
// 新增一筆資料進去、紀錄網址與亂碼
// 寫出比對的演算法、路由
// 比對原始網址
// 找到縮寫
// 輸出到畫面
// 寫條件式, 有就回傳, 沒有就create後回傳
// 發佈到heroku
// 
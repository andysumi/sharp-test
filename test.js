const sharp = require('sharp')
const exif = require('exif-reader')

// meta情報を取得
sharp('test.jpg')
  .metadata()
  .then(function (metadata) {
    console.log(metadata)
  })

// exif情報を取得
sharp('test.jpg')
  .metadata()
  .then(function (metadata) {
    console.log(exif(metadata.exif))
  })

// 画像情報を取得
sharp('test.jpg')
  .stats()
  .then(function (status) {
    console.log(status)
  })

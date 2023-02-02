//import loadPage from '../helper/helper'
describe('Upload file',()=>{
    beforeEach(async()=>{
        await browser.loadPage('https://the-internet.herokuapp.com/upload')
    })
    it('Upload image',async()=>{
        const filePath = 'C:/Users/ADMIN/Desktop/Webdriver/webdriverio_advanced/file/bao.jpg'
        await browser.customFileUpload(filePath,'#file-upload','#file-submit')
        await browser.pause(5000)
    })
})
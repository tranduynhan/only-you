const sheetURL = 'https://script.google.com/macros/s/AKfycbx8N_RF9dUr2rsX3DKmdcOQTK7z4d3cen1Hp0wxkHV27ly1HSDK4dxrXgqYUNQmQWIA/exec?ketqua=$$RESULT$$'
export const sendResult = (result) => {
    fetch(sheetURL.replace('$$RESULT$$', result)).then(() => {
        console.log('Success')
    })
}
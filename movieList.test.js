const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () =>{
    await driver.get ('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () =>{
await driver.quit()
})


test('I can add a moive',async () =>{

let addButton = await driver.findElement(By.id(`b`))

await addButton.sendKeys(`LOTR\n`)

await driver.sleep(200)
})
test('i can cross off a movie', async () =>{
    let addButton = await driver.findElement(By.id(`b`))
    console.log(addButton)
    await addButton.sendKeys(`LOTR\n`)
    
    await driver.sleep(2000)
    
    let deleteButton= await driver.findElement(By.id(`LOTR`))
    deleteButton.click()

    await driver.sleep(2000)
})

// test('I can delete a moive',async () =>{

//     let addButton = await driver.findElement(By.id(`b`))
    
//     await addButton.sendKeys(`LOTR\n`)
    
//     await driver.sleep(200)

//     await driver.findElement(By.id(`LOTR`)).click()

//     await driver.sleep(2000)
//     })

    

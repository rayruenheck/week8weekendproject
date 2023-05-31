import Item from "./Item";
import Shop from "./Shop";
import {v4 as uuidv4} from 'uuid'
const apple = new Item(uuidv4(),'apple',3,'red delicious')
const orange = new Item(uuidv4(),'orange',2,'easy peel')
const banana = new Item(uuidv4(),'banana',1,'ripe and ready to go')
const berries = new Item(uuidv4(),'berries',3,'rasberry')
const bacon = new Item(uuidv4(),'bacon',4,'thick cut')
const burgerPatty = new Item(uuidv4(),'burger pattys',10,'80%lean 20%fat')



function Driver(){
    const shop = new Shop(apple,orange,banana,berries,bacon,burgerPatty)
    const button = (document.getElementById('button')as HTMLButtonElement)
    button.addEventListener('click', (event)=>{
        event.preventDefault()
        
        
        Shop.loginUser(shop)
        
        
        

        
    })
    
    

}
Driver()   
class Filter{
    constructor(liArray, inputValue){
        this.liArray = liArray;
        this.inputValue = inputValue;
        this.arrayFilter = ()=>{
           let newArray = this.liArray.filter(item=>item.textContent.toLowerCase().includes(this.inputValue))
            return newArray;
        }
    }
}


class Main{
    constructor(){
        this.li =[...document.querySelectorAll('.ul li')];
        this.input = document.querySelector('.input');
        this.ul = document.querySelector('.ul');
        this.input.addEventListener('input',this.render.bind(this));
        this.render();
    }
    render(){
       this.filter = new Filter(this.li,this.input.value.toLowerCase());
       const newArray =  this.filter.arrayFilter();
        this.ul.textContent = '';
        newArray.forEach(li=>this.ul.appendChild(li));
            
      
    }
}
const main = new Main();
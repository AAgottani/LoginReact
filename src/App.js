import React,  {Component} from 'react'

  let b;
  class App extends Component{

    constructor(props) {
      super(props);
      this.state = {
        value: '',
        email: '',
        password:''  
      };
    }
    
    mudamail(event){
      let state=this.state;
      state.email=event.target.value;
      this.setState(state);
      console.log(state.email)
      //console.log('estado ' + a)
      console.log(state.value)
    }
    mudapwd(event){
      let state=this.state;
      state.password=event.target.value;
      this.setState(state);
      console.log(state.password)
      console.log(state.value)
    }

    
    verifica(){
      let mail=this.state.email
      let pwd=this.state.password
      
      if(mail==='edu'&& pwd==='123'){
        //resultado='acessado com sucesso'
        //this.state.value='Acessado com sucesso'
       //this.setState(this.state.value='coisa e tal')
       //return this.state.value='Acessado com sucesso!'
       //this.setState(state);
       this.setState({...this.state, value: 'Acessado com Sucesso'}); 
      }else{
        //let state='Dados incorretos'
        //this.state.value='Dados incorretos'
        //resultado='Dados incorretos'
        //return this.state.value='Dados incorretos!'
        //this.setState(state);
        this.setState({...this.state, value: 'Dados Incorretos'});
          
      } 
    }
    render(){

      return(
        <div>
         <h1>Login</h1> 
         <form >
         <input type="text" size="20" name="email"onChange={e =>this.mudamail(e)}/>
          <br/> 
         <input type="password" size="20" name="password"onChange={e=>this.mudapwd(e)}/>
         <br/> 
         <button onClick={()=> this.verifica()}>Acessar</button>
         
         </form>
         <br/>
         <p>{this.state.value}</p>
         <br/>
         
         <p> Email: edu Senha: 123, mais fácil pra testar</p>
        </div>
      )
    }

  }
export default App;

import React from 'react';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state={
      signInName:'',
      signInEmail:'',
      signInPassword:''
    }
  }

  onNameChange = (event)=>{
    this.setState({signInName: event.target.value})
  }
  onEmailChange = (event)=>{
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event)=>{
    this.setState({signInPassword: event.target.value})
  }
  
  onSubmitSignIn=()=>{
    console.log(this.state);
    fetch('https://frozen-cove-77265.herokuapp.com/register', {
      method: 'post',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({email: this.state.signInEmail, password: this.state.signInPassword, name: this.state.signInName})
    }).then(response=>response.json())
    .then(user=>{
      if(user.user_id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    });
  }

  render(){
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
             type="submit" value="Register"/>
          </div>
        </div>
      </main>   
      </article>
       );
    
  }


}

export default Register;
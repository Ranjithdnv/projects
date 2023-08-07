import React, { Component } from 'react'
import Razorpay from "razorpay"
export default class Welcom extends Component {
    state = {
        amount: 100
      };
    
      constructor() {
        super()
        this.changeAmount = this.changeAmount.bind(this);
        this.openCheckout = this.openCheckout.bind(this);
      }
    
      changeAmount(e) {
        this.setState({amount: e.target.value})
      }
    
      openCheckout() {
        let options = {
          "key": "rzp_test_6G6Yj3PsY2wyka",
          "amount": this.state.amount, // 2000 paise = INR 20, amount in paisa
          "name": "Ranjith Name",
          "description": "Purchase Description",
          "image": "/your_logo.png",
          "handler": function (response){
            alert(response.razorpay_payment_id);
          },
          "prefill": {
            "name": "Harshil Mathur",
            "email": "harshil@razorpay.com"
          },
          "notes": {
            "address": "Hello World"
          },
          "theme": {
            "color": "#F37254"
          }
        };
        
        let rzp = new Razorpay(options);
        rzp.open();
      }
      
  render() {
    return (
        <div>
        <input type='text' onChange={
           this.changeAmount
          } />
        <button onClick={this.openCheckout}>Pay Rs. {this.state.amount/100}</button> 
      </div>
    
    )
  }
}
// //
// class Checkout extends React.Component {
//     state = {
//       amount: 100
//     };
  
//     constructor() {
//       super()
//       this.changeAmount = this.changeAmount.bind(this);
//       this.openCheckout = this.openCheckout.bind(this);
//     }
  
//     changeAmount(e) {
//       this.setState({amount: e.target.value})
//     }
  
//     openCheckout() {
//       let options = {
//         "key": "rzp_test_6G6Yj3PsY2wyka",
//         "amount": this.state.amount, // 2000 paise = INR 20, amount in paisa
//         "name": "Ranjith Name",
//         "description": "Purchase Description",
//         "image": "/your_logo.png",
//         "handler": function (response){
//           alert(response.razorpay_payment_id);
//         },
//         "prefill": {
//           "name": "Harshil Mathur",
//           "email": "harshil@razorpay.com"
//         },
//         "notes": {
//           "address": "Hello World"
//         },
//         "theme": {
//           "color": "#F37254"
//         }
//       };
      
//       let rzp = new Razorpay(options);
//       rzp.open();
//     }
    
//     render () {
//       return (
//         <div>
//           <input type='text' onChange={
//              this.changeAmount
//             } />
//           <button onClick={this.openCheckout}>Pay Rs. {this.state.amount/100}</button> 
//         </div>
//       )
//     }
//   }
  
//   ReactDOM.render(<Checkout />, document.getElementById('react-root'));
  
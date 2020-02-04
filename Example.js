import React from 'react';
//import { Mix } from './Mix';
import mixpanel from 'mixpanel-browser';
mixpanel.init('29437c45fd2e48b93a0e95fa24682e66');

class Example extends React.Component {
  //  handle_login = async () => {
  //   try {
  //     console.log("11--");
  //     //let user = await some_login_api_call();
  //     let user = true;
  //     Mix.identify("11");
  //     Mix.track('Successful login');
  //     console.log('Mix--', Mix);
  //     Mix.people.set({
  //       $first_name: "shashikant",
  //       $last_name: "upadhyay",
  //     });
      
  //     // redirect to logged in page or something
  //   } catch (e) {
  //     console.log("22 error--");
  //       Mix.track('Unsuccessful login');
  //   }
  // };
// constructor(props){
//   super(props);
//   Mix.identify(1);
//         Mix.track('Successful login');
//         console.log('Mix--', Mix);
//         console.info("hrllo,this is sent")
//         Mix.people.set({
//           $first_name: "shashikant",
//           $last_name: "upadhyay",
//         });
// }
  myChangeHandler = () => {
    mixpanel.set_group('company', ['mixpanel', 'google']) 
    mixpanel.people.increment('page_views', 1);
    mixpanel.identify(44);
    mixpanel.track('Successful login');
        //console.log('Mix--', Mix);
        mixpanel.people.set({
          $first_name: "shashikant",
          $last_name: "upadhyay",
        });
    console.log("===========>",JSON.stringify(localStorage.getItem('r4Context')));
    //this.setState({username: event.target.value});
  }
  
  render() {
    
    return (
      <form onSubmit={this.myChangeHandler}>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button  type="submit">Login11</button>
      </form>
    );
  }
}

export default Example;
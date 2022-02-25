import React from "react";
import Header from "./Header";
import Submit from "./Submit";

import axios from "axios";

function Multiform(){
    const url = "http://localhost:8080/api/users"
    const userFormFieldsData = {
        firstname : "",
        surname: "",
        email: "",
        telephone: "",
        gender: "",
        date:"",
        month:"",
        year:"",
        comments:""
    }

    const activeSteps = [true , false ,false]


    const [ userData , setUserData ] = React.useState(userFormFieldsData);
    const [ isActiveStep , setActiveStep] = React.useState(activeSteps)

    const handleChangeTrigger = (event) =>{
       const {name , value } = event.target
       setUserData( prevVal => {
           return{
                ...prevVal,
                [name] : value
           }
       })
    }

    const handleSubmit =  (event) => {
        event.preventDefault()
        //submitToApi(form)
        axios.post(url, userData )
        .then(function (response) {
              if( response.status != 200 ){
                console.log(response.message)
                return;
            }

            // Once succedd clear the form
            setUserData(userFormFieldsData)

        })
        .catch(function (error) {
          console.log(error);
        });

    }


    const handleToggle = (currentIndex) => {
      const newIndex = currentIndex - 1;
      const newSteps = [...isActiveStep]
      newSteps[ newIndex ] = ! newSteps[ newIndex ]
      setActiveStep(newSteps)
    };


    return(
        <div className="user-form-wrap">
            <form onSubmit={handleSubmit}>

              <div className="form-stepper user-form-wrap--step">
                  <div className={ ` ${ isActiveStep[0] === true ? "active" : ""}` }  onClick={() => handleToggle(1)} >             
                    <Header headingTitle="Step 1:  Your details" />
                  </div>
                  <div className={ ` user-form-wrap-FormStep ${ isActiveStep[0] === true ? "active" : ""}` }>
                    <div className="user-form-wrap--fields">
                        <div className="user-form-wrap--row">
                          <div className="user-form-wrap--formcontrol">
                            <label>
                              <span>First Name</span>
                              <input 
                                  type="text" 
                                  name="firstname"
                                  className="user-form-wrap--input"
                                  placeholder=""
                                  onChange={handleChangeTrigger}
                                  value={userData.firstname}
                              />
                            </label>
                          </div>
                          <div className="user-form-wrap--formcontrol">
                            <label>
                              <span>Surname</span>
                              <input 
                                  type="text" 
                                  name="surname"
                                  className=""
                                  placeholder=""
                                  onChange={handleChangeTrigger}
                                  value={userData.surname}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="user-form-wrap--row">
                          <div className="user-form-wrap--formcontrol">
                            <label>
                              <span>Email Address</span>
                              <input 
                                  type="text" 
                                  name="email"
                                  className=""
                                  placeholder=""
                                  onChange={handleChangeTrigger}
                                  value={userData.email}
                              />
                            </label>
                          </div>
                        </div>
                    </div>
                    <Submit buttonText="Next" />
                  </div>
              </div>
             

              <div className="form-stepper user-form-wrap--step m-top-5">
                <div className={ `${ isActiveStep[1] === true ? "active" : ""}` }  onClick={() => handleToggle(2)}>
                  <Header headingTitle="Step 2:  Your comment" />
                </div>
                <div className={ ` user-form-wrap-FormStep ${ isActiveStep[1] === true ? "active" : ""}` }>
                  <div className="user-form-wrap--fields">
                      <div className="user-form-wrap--row">
                        <div className="user-form-wrap--formcontrol">
                          <label>
                            <span>Telephone number</span>
                            <input 
                                type="text" 
                                name="telephone"
                                className=""
                                placeholder=""
                                onChange={handleChangeTrigger}
                                value={userData.telephone}
                            />
                          </label>
                        </div>
                        <div className="user-form-wrap--formcontrol">
                          <label>
                            <span>Gender</span>
                            <select 
                                type="select" 
                                name="gender"
                                className=""
                                placeholder=""
                                onChange={handleChangeTrigger}
                                value={userData.gender}
                            >
                              <option value=""></option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <div className="user-form-wrap--row">
                        <div className="user-form-wrap--formcontrol user-form-wrap--dob">
                          <label>
                            <span>Date of birth</span>
                          </label>
                          <div className="user-form-wrap--birthdate">
                          <input 
                                type="number" 
                                name="date"
                                className=""
                                placeholder=""
                                onChange={handleChangeTrigger}
                                value={userData.date}
                                min={1} 
                                max={31}
                            />
                            <input 
                                type="number" 
                                name="month"
                                className=""
                                placeholder=""
                                onChange={handleChangeTrigger}
                                value={userData.month}
                                min={1} 
                                max={12}
                            />
                            <input 
                                type="number" 
                                name="year"
                                className=""
                                placeholder=""
                                onChange={handleChangeTrigger}
                                value={userData.year}
                                min={1800} 
                                max={2021}
                            />
                          </div>
                        </div>
                      </div>
                  </div>
                  <Submit buttonText="Next" />
                </div>
              </div>

              <div className="form-stepper user-form-wrap--step m-top-5">
                <div className={ `${ isActiveStep[2] === true ? "active" : ""}` }  onClick={() => handleToggle(3)} >
                  <Header headingTitle="Step 3:  Your comment"  />
                </div>
                <div className={ ` user-form-wrap-FormStep ${ isActiveStep[2] === true ? "active" : ""}` }>
                  <div className="user-form-wrap--fields">
                      <div className="user-form-wrap--row">
                        <div className="user-form-wrap--formcontrol">
                          <label>
                            <span>Comments</span>
                            <textarea 
                                name="comments"
                                className=""
                                placeholder=""
                                onChange=""
                                onChange={handleChangeTrigger}
                                value={userData.comments}
                            />
                          </label>
                        </div>
                      </div>
                  </div>
                  <Submit buttonText="Next"/>
                </div>
              </div>
              
              
            </form>
        </div>
    )
}

export default Multiform;
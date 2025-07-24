import React from 'react'
import ThemeToggle from './components/ThemeToggle'
import Welcome from './components/Welcome'
import LikeButton from './components/LikeButton'
import Task1 from './components/Task1'
import CounterApp from './components/CounterApp'
import UserTable from './components/UserTable'
import InputTracker from './components/InputTracker'
import ColorChange from './components/ColorChange'
import SubscribeToggle from './components/SubscribeToggle';
import FavoriteBooks from './components/FavoriteBooks'
import LoginStatus from './components/LoginStatus'
import NameCards from './PropsExamples/NameCards'
import UserCard from './PropsExamples/UserCard'
import LoginForm from './FormExamples/LoginForm'
import FetchExample from './components/FetchExample'
import AxiosExample from './components/AxiosExample'
import UseRefExample from './components/UseRefExample'
import ChildReactMemo from './components/ChildReactMemo'
import SumExample from './components/SumExample'
import UncontrolledForm from './FormExamples/UncontrolledForm'
import FocusExample from './FormExamples/FocusExample'
import ContextAPI from './components/ContextAPI'
import CustomHookCounter from './components/CustomHookCounter'
import FruitsList from './components/FruitsList'
import LightONOff from './components/LightONOff'
import LoginFormExample from './components/LoginFormExample'
import FixedLoginForm from './components/FixedLoginForm'
import UserListWithLoading from './components/UserListWithLoading'
import CheckBox from './components/CheckBox'
import NameEmailPwd from './FormExamples/NameEmailPwd'
import UserList from './CustomHookExamples/UserList'
import AppointmentBooking from './components/AppointmentBooking'

const App = () => {

  const isLoading = false;
  const users =[{id:1,name:'Naga Lakshmi'},
                {id:2,name:'Pushpa'}];
  return (
    <div>
     {/* <ThemeToggle /> 
      <Welcome />
      <LikeButton />
      <Task1 name="Pushpa" /> 
      <CounterApp />
      <InputTracker /> 
      <SubscribeToggle /> 
      <FavoriteBooks />
      <ColorChange /> 
      <LoginStatus /> 
      <NameCards name="Pushpa"/>
      <UserCard name="Pushpa" email="pushpa@gmail.com" phone="123456789"/>
      <FetchExample />
      <LoginForm /> 
      <AxiosExample />
      <UseRefExample />
      <ChildReactMemo />
      <SumExample />
      <UncontrolledForm />
      <FocusExample />
      <ContextAPI />
      <CustomHookCounter />
      <FruitsList />
      <LightONOff />
      <LoginFormExample /> 
      <FixedLoginForm />
      <h2>User List</h2>
      <UserListWithLoading  isLoading={isLoading} users={users}/> 
     
      <NameEmailPwd />
      <CheckBox /> 
      <UserList />*/}
      <AppointmentBooking />
      
      
    </div>
  )
}

export default App

import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'


function Home() {
  const [users, setUsers] = useState([])

  async function getUsers(){
    const usersFromApi = await api.get('/users')
    setUsers(usersFromApi.data)
  }
  useEffect(()=>{
    getUsers()
  })



  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function creatUser() {
    await api.post('/users' ,{
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUser(){
    await api.delete(`/users/${id}`)
    getUsers()
  }


  return (
    <div className="container">
      <div className="left">
        {users.map(user => (
          <div className="del-get" key={user.id}>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button onClick={()=> deleteUser(user.id)}>
              <img src={Trash} />
            </button>
          </div>
        ))}
      </div>

      <div className="right">
        <form>
          <h3>Faça seu cadastro!</h3>
          <input type="text" name="name" placeholder="Nome" ref={inputName}/>
          <input type="email" name="email" placeholder="Email" ref={inputEmail}/>
          <input type="int" name="age" placeholder="Idade" ref={inputAge}/>
          <button type="button" onClick={creatUser}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Home;

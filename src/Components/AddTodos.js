import React, { useState } from 'react'

export default function AddTodos(props) {
    const [Title,setTilte]=useState("")
    const [Desc,setDesc]=useState("")
    const submit=(e)=>{
        e.preventDefault()
        if(!Title || !Desc){
            alert('title or description should be provided')
        }
        else{
            props.addTodo(Title,Desc)
            setTilte("")
            setDesc("")
        }
    }
    return (
        <>
            <form className='container'>
        <h2>Add Todos</h2>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="text" className="form-control" value={Title} onChange={(e)=>{setTilte(e.target.value)}} id="exampleFormControlInput1" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control"value={Desc} id="exampleFormControlTextarea1" onChange={(e)=>{setDesc(e.target.value)}} rows="3"></textarea>
                </div>
                <button type='submit' className="btn btn-primary" onClick={submit}>Add Todo</button>
            </form>
        </>
    )
}

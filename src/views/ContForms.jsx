import { useState } from "react";

const ContForms = () => {
const [stuName, setStuName] = useState('');
const [age, setAge] = useState('97');

return (
    <div className="container">

        <h4>Controlled form</h4>
        <label>
            Student Name:
            <input type="text" value={stuName} onChange={e => setStuName(e.target.value)} />
        </label>
        {stuName ? <h3>Student's name: {stuName}</h3> : null}
        <br />
        <label>
            Student age:
            <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </label>
        {age !== '97' ? <h3>Student's age has changed!: {age}</h3> : null}
 
            
  


    </div>
    
)
}
export default ContForms;
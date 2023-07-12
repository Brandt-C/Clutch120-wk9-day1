import { useEffect } from "react"


const Shop = (props) => {
    useEffect(() => { console.log('SHOP component state has been rendered or re-rendered') });

    const changeStudentOrder = () => {
        // let popped = props.students.pop();
        // props.students.splice(0, 0, popped);

        //make a copy of the state
        let studentCopy = [...props.students]

        // modify that copy
        let popped = studentCopy.pop();
        studentCopy.splice(0, 0, popped);

        // set state to that copy
        props.setStudents(studentCopy);
        // check!!!
        console.log(props.students);
    }
    return (
        <div>
            <h1>SHOP SHOP SHOP till you drop</h1>
            <button className="btn btn-dark" onClick={changeStudentOrder}> Change student order</button>
            {props.students.map((student, index) => {
                return <h2 key={index}>{student}</h2>
            })}
        </div>
    )
}
export default Shop;



const SimpleForms = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        // console.log(form);
        // console.log(form[0].value);
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    } 
    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <h2>UNCONTROLLED form!</h2>
                <label htmlFor="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" /><br />
                <label htmlFor="pwd">Password:</label><br />
                <input type="password" id="pwd" name="pwd" /><br />
                <hr />
                <label htmlFor="range">Range (between 0 and 50):</label><br />
                <input type="range" id="range" name="range" min="0" max="50" /><br />
                <hr />
                <input type="radio" id="html" name="fav_language" value="ONE" />
                <label htmlFor="html">  radio ONE</label><br />
                <input type="radio" id="css" name="fav_language" value="TWO" />
                <label htmlFor="css">  radio TWO</label><br />
                <input type="radio" id="javascript" name="fav_language" value="THREE" />
                <label htmlFor="javascript">radio THREE</label><br />
                <hr />
                <input type="checkbox" id="check1" name="check1" value="ONE" />
                <label htmlFor="check1">check ONE</label><br />
                <input type="checkbox" id="check2" name="check2" value="TWO" />
                <label htmlFor="check2"> check TWO</label><br />
                <input type="checkbox" id="check3" name="check3" value="THREE" />
                <label htmlFor="check3"> check THREE</label><br />
                <hr />

                <input type="submit" value="Submit"></input>
                <br />
                <input type="reset" />
            </form>
        </>
    )
}
export default SimpleForms;